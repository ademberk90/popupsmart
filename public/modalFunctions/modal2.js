function Pop() {
  let content = {
    area: {
      header: 'Security Code',
      description: {
        description1: 'This code expires in 24 hours',
      },
      input: {
        input1: 'Code',
      },
      button: {
        button1: 'Cancel',
        button2: 'Continue',
      },
    },
    color: '#F37C34',
    textColor: '#FFFFFF',
    isOpenVisitorDevice: false,
    desktop: false,
    mobile: false,
    isOpenXSeconds: false,
    afterXSeconds: -1,
    isOpenXScroll: false,
    afterXScroll: -1,
    isOpenTrafficSource: false,
    trafficSource: '',
    isOpenBrowserLanguage: false,
    selectedLanguages: [],
    isOpenExitIntent: false,
    webhookUrl: '',
    isSendFromSubmission: false,
    isSendClickData: false,
    size: '30%',
    position: 31,
    isImageExist: false,
    imageUrl: '',
    logoUrl: '',
    baseUrl: '',
  }

  

  let body = document.body
  let html = document.documentElement
  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  )

  let language = navigator.language || navigator.userLanguage
  let lastPositionScrollY = 0

  let createPopUp = function () {
    var cssRuleFile = content.baseUrl + '/modalFunctions/modalCSS.css'
    let lnk = document.createElement('link')
    lnk.setAttribute('rel', 'stylesheet')
    lnk.setAttribute('type', 'text/css')
    lnk.setAttribute('href', cssRuleFile)
    document.getElementsByTagName('head')[0].appendChild(lnk)

    if (!document.getElementById('modal1popup')) {
      const secureSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44" fill="none">
      <path d="M23 23.18L24.8 30.94L18 26.84L11.2 30.94L13 23.2L7 18.02L14.92 17.34L18 10.04L21.08 17.32L29 18L23 23.18ZM18 4.38L32 10.6V20C32 29.04 26.04 37.38 18 39.86C9.96 37.38 4 29.04 4 20V10.6L18 4.38ZM18 0L0 8V20C0 31.1 7.68 41.48 18 44C28.32 41.48 36 31.1 36 20V8L18 0Z" fill="white"/>
      </svg>`

      var mainDiv = document.createElement('div')
      mainDiv.setAttribute('id', 'modal1popup')
      mainDiv.style.position = 'absolute'
      mainDiv.style.left = '200px'
      mainDiv.className += `shadow-[0_5px_30px_0px_rgba(0,0,0,0.15)]  rounded-[30px] relative z-10  bg-white w-[${content.size}] min-w-[400px] test`

      var img = document.createElement('img')
      img.setAttribute('src', content.imageUrl)
      mainDiv.innerHTML += ` <div class="flex flex-col items-center bg-white max-w-2xl rounded-[30px]">
        <div >
        <img class="rounded-t-[30px]" src="${content.imageUrl}" alt=""/>
        </div>
        <div class='inline-flex flex-col items-center justify-center mx-[65px] py-10'>
          <span class='font-bold text-[30px]'>${content.area.header}</span>
          <span class='text-xl mt-5'>${content.area.description.description1}</span>
          <button id="continueButton" class="text-white w-full py-4 rounded-2xl mt-11 border bg-[${content.color}] text-[${content.textColor}]">${content.area.button.button1}</button>
          <button id="cancelButton" class='w-full py-4 rounded-2xl border border-[#D2DAE3] mt-3'>${content.area.button.button2}</button>
        </div>
        <button
          id="closeButton"
          type="button"
          class="absolute top-4 right-4 "
        >
         <img src="${content.baseUrl}/modalClose.png" alt=""/>
        </button>
      </div>`

      document.body.appendChild(mainDiv)
      // POSITION
      setTimeout(() => {
        var heightDiv = mainDiv.offsetHeight
        var halfOfHeight = heightDiv / 2
        if (
          content.position == 11 ||
          content.position == 12 ||
          content.position == 13
        ) {
          mainDiv.style.setProperty('top', `0px`)
        } else if (
          content.position == 21 ||
          content.position == 22 ||
          content.position == 23
        ) {
          mainDiv.style.setProperty('top', `calc(50%  - ${halfOfHeight}px)`)
        } else if (
          content.position == 31 ||
          content.position == 32 ||
          content.position == 33
        ) {
          mainDiv.style.setProperty('top', `calc(100% - ${heightDiv}px)`)
        }

        var widthDiv = mainDiv.offsetWidth
        var halfOfWidth = widthDiv / 2
        if (
          content.position == 11 ||
          content.position == 21 ||
          content.position == 31
        ) {
          mainDiv.style.setProperty('left', `0px`)
        } else if (
          content.position == 12 ||
          content.position == 22 ||
          content.position == 32
        ) {
          mainDiv.style.setProperty('left', `calc(50%  - ${halfOfWidth}px)`)
        } else if (
          content.position == 13 ||
          content.position == 23 ||
          content.position == 33
        ) {
          mainDiv.style.setProperty('left', `calc(100% - ${widthDiv}px)`)
        }
      }, 50)

      // EVENTS

      var closeButton = document.getElementById('closeButton')
      closeButton.addEventListener('click', function (e) {
        mainDiv.remove()
      })

      var cancelButton = document.getElementById('cancelButton')
      cancelButton.addEventListener('click', function (e) {
        mainDiv.remove()
      })

      var continueButton = document.getElementById('continueButton')
      continueButton.addEventListener('click', function (e) {
        // webhook
        console.log(content)
        var body = {
          date:
            new Date().getDate() +
            '-' +
            new Date().getMonth() +
            '-' +
            new Date().getFullYear() +
            ' / ' +
            formatAMPM(new Date()),
          browserLanguage: navigator.language || navigator.userLanguage,
          operatingSystem: navigator.appVersion,
          deviceType: isMobile(),
        }
        console.log(body)
        fetch(content.webhookUrl, {
          method: 'post',
          body: JSON.stringify(body),
        })
          .then(function (response) {
            return response.json()
          })
          .then(function (data) {})
      })

      document.addEventListener('scroll', (e) => {
        var heightDiv = mainDiv.offsetHeight
        var halfOfHeight = heightDiv / 2
        if (
          content.position == 11 ||
          content.position == 12 ||
          content.position == 13
        ) {
          mainDiv.style.setProperty('top', `${window.scrollY}px`)
        } else if (
          content.position == 21 ||
          content.position == 22 ||
          content.position == 23
        ) {
          mainDiv.style.setProperty(
            'top',
            `calc(50% + ${window.scrollY}px - ${halfOfHeight}px)`
          )
        } else if (
          content.position == 31 ||
          content.position == 32 ||
          content.position == 33
        ) {
          mainDiv.style.setProperty(
            'top',
            `calc(100% + ${window.scrollY}px - ${heightDiv}px)`
          )
        }

        lastPositionScrollX = window.scrollX
        var widthDiv = mainDiv.offsetWidth
        var halfOfWidth = widthDiv / 2
        if (
          content.position == 11 ||
          content.position == 21 ||
          content.position == 31
        ) {
          mainDiv.style.setProperty('left', `${window.scrollX}px`)
        } else if (
          content.position == 12 ||
          content.position == 22 ||
          content.position == 32
        ) {
          mainDiv.style.setProperty(
            'left',
            `calc(50% + ${window.scrollX}px - ${halfOfWidth}px)`
          )
        } else if (
          content.position == 13 ||
          content.position == 23 ||
          content.position == 33
        ) {
          mainDiv.style.setProperty(
            'left',
            `calc(100% + ${window.scrollX}px - ${widthDiv}px)`
          )
        }
      })
    }
  }

  let isMobile = function () {
    var check = false
    ;(function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true
    })(navigator.userAgent || navigator.vendor || window.opera)
    return check
  }

  let formatAMPM = function (date) {
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  this.init = function (param) {
    console.log(param)
    if (typeof param === 'object') {
      if (param.area.header) content.area.header = param.area.header
      if (param.area.description.description1)
        content.area.description.description1 = param.area.description.description1
      if (param.area.button.button1)
        content.area.button.button1 = param.area.button.button1
      if (param.area.button.button2)
        content.area.button.button2 = param.area.button.button2
      if ('color' in param) content.color = param.color
      if ('textColor' in param) content.textColor = param.textColor
      if ('isOpenVisitorDevice' in param)
        content.isOpenVisitorDevice = param.isOpenVisitorDevice
      if ('desktop' in param) content.desktop = param.desktop
      if ('mobile' in param) content.mobile = param.mobile
      if ('isOpenXSeconds' in param) content.isOpenXSeconds = param.isOpenXSeconds
      if ('afterXSeconds' in param) content.afterXSeconds = param.afterXSeconds
      if ('isOpenXScroll' in param) content.isOpenXScroll = param.isOpenXScroll
      if ('afterXScroll' in param) content.afterXScroll = param.afterXScroll
      if ('isOpenTrafficSource' in param)
        content.isOpenTrafficSource = param.isOpenTrafficSource
      if ('trafficSource' in param) content.trafficSource = param.trafficSource
      if ('isOpenBrowserLanguage' in param)
        content.isOpenBrowserLanguage = param.isOpenBrowserLanguage
      if ('selectedLanguages' in param)
        content.selectedLanguages = param.selectedLanguages
      if ('isOpenExitIntent' in param)
        content.isOpenExitIntent = param.isOpenExitIntent
      if ('webhookUrl' in param) content.webhookUrl = param.webhookUrl
      if ('isSendFromSubmission' in param)
        content.isSendFromSubmission = param.isSendFromSubmission
      if ('isSendClickData' in param) content.isSendClickData = param.isSendClickData
      if ('position' in param) content.position = param.position
      if ('isImageExist' in param) content.isImageExist = param.isImageExist
      if ('imageUrl' in param) content.imageUrl = param.imageUrl
      if ('logoUrl' in param) content.logoUrl = param.logoUrl
      if ('baseUrl' in param) content.baseUrl = param.baseUrl

      if ('size' in param && param.size === 'Small') {
        content.size = '30%'
      }
      if ('size' in param && param.size === 'Medium') {
        content.size = '40%'
      }
      if ('size' in param && param.size === 'Large') {
        content.size = '50%'
      }

      if (typeof window != 'undefined') {
        // EVERYWHERE
        if ((param.desktop && param.mobile) || !param.isOpenVisitorDevice) {
          console.log('44444') // Open Modal After X Seconds Later
          if (param.isOpenXSeconds) {
            if (param.afterXSeconds >= 0) {
              setTimeout(createPopUp, param.afterXSeconds * 1000)
            }
          } else {
            createPopUp()
          }
          // Open Modal After X Scroll Later
          if (param.isOpenXScroll) {
            if (param.afterXScroll >= 0) {
              document.addEventListener('scroll', (e) => {
                var perc =
                  (Math.abs(window.scrollY - lastPositionScrollY) / height) * 100
                if (perc > param.afterXScroll) {
                  lastPositionScrollY = window.scrollY
                  createPopUp()
                }
              })
            } else {
              createPopUp()
            }
          }
          // Traffic Source
          if (param.isOpenTrafficSource) {
            if (param.trafficSource && window.location.href == param.trafficSource) {
              createPopUp()
            }
          }
          // Language
          if (param.isOpenBrowserLanguage) {
            if (param.selectedLanguages.includes(language)) {
              createPopUp()
            }
          }
        }
        // MOBILE
        else if (
          param.isOpenVisitorDevice &&
          param.mobile &&
          window.innerWidth <= 720
        ) {
          console.log('333333')
          if (param.isOpenVisitorDevice) {
            if (param.isOpenXSeconds) {
              if (param.afterXSeconds >= 0) {
                setTimeout(createPopUp, param.afterXSeconds * 1000)
              }
            } else {
              createPopUp()
            }
          }
          // Open Modal After X Scroll Later
          if (param.isOpenXScroll) {
            if (param.afterXScroll >= 0) {
              document.addEventListener('scroll', (e) => {
                var perc =
                  (Math.abs(window.scrollY - lastPositionScrollY) / height) * 100
                if (perc > param.afterXScroll) {
                  lastPositionScrollY = window.scrollY
                  createPopUp()
                }
              })
            } else {
              createPopUp()
            }
          }
          // Traffic Source
          if (param.isOpenTrafficSource) {
            if (param.trafficSource && window.location.href == param.trafficSource) {
              createPopUp()
            }
          }
          // Language
          if (param.isOpenBrowserLanguage) {
            if (param.selectedLanguages.includes(language)) {
              createPopUp()
            }
          }
          // None Of Top Conditions
          if (!param.isOpenVisitorDevice && !param.isOpenXScroll) {
            createPopUp()
          }
        }
        // DESKTOP
        else if (
          param.isOpenVisitorDevice &&
          param.desktop &&
          window.innerWidth >= 720
        ) {
          console.log('22222')
          if (param.isOpenXSeconds) {
            if (param.afterXSeconds >= 0) {
              setTimeout(createPopUp, param.afterXSeconds * 1000)
            }
          } else {
            createPopUp()
          }

          // Open Modal After X Scroll Later
          if (param.isOpenXScroll) {
            if (param.afterXScroll >= 0) {
              document.addEventListener('scroll', (e) => {
                var perc =
                  (Math.abs(window.scrollY - lastPositionScrollY) / height) * 100
                if (perc > param.afterXScroll) {
                  lastPositionScrollY = window.scrollY
                  createPopUp()
                }
              })
            } else {
              createPopUp()
            }
          }
          // Traffic Source
          if (param.isOpenTrafficSource) {
            if (param.trafficSource && window.location.href == param.trafficSource) {
              createPopUp()
            }
          }
          // Language
          if (param.isOpenBrowserLanguage) {
            if (param.selectedLanguages.includes(language)) {
              createPopUp()
            }
          }
          // None Of Top Conditions
          if (!param.isOpenVisitorDevice && !param.isOpenXScroll) {
            console.log('123123123')

            createPopUp()
          }
        } else {
          console.log('AN ERROR OCCURED!')
        }
      }
    }
  }
}

window.start = new Pop()
