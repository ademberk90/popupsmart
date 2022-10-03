import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import dropdown from '../public/dropdown.png'
import { useAppSelector, useAppDispatch } from '../hooks'
import {
  setIsOpenVisitorDevice,
  setDesktop,
  setMobile,
  setIsOpenXSeconds,
  setAfterXSeconds,
  setIsOpenXScroll,
  setAfterXScroll,
  setIsOpenTrafficSource,
  setTrafficSource,
  setIsOpenBrowserLanguage,
  setSelectedLanguages,
  setIsOpenExitIntent,
  setWebhookUrl,
  setIsSendFromSubmission,
  setIsSendClickData,
} from '../slices/modal'

type Props = {}

type Language = {
  label: string
  value: string
}

const languages: Language[] = [
  {
    label: 'English',
    value: 'en_US',
  },
  {
    label: 'Dutch',
    value: 'nl_NL',
  },
  {
    label: 'Finnish',
    value: 'fi_FI',
  },
  {
    label: 'French',
    value: 'fr_FR',
  },
  {
    label: 'Polish',
    value: 'pl_PL',
  },
  {
    label: 'Portuguese',
    value: 'pt_PT',
  },
  {
    label: 'Russian',
    value: 'ru_RU',
  },
  {
    label: 'Turkish',
    value: 'tr-TR',
  },
]

const TargetingRules = (props: Props) => {
  const isOpenVisitorDevice = useAppSelector(
    (state) => state.modal.isOpenVisitorDevice
  )
  const desktop = useAppSelector((state) => state.modal.desktop)
  const mobile = useAppSelector((state) => state.modal.mobile)
  const isOpenXSeconds = useAppSelector((state) => state.modal.isOpenXSeconds)
  const afterXSeconds = useAppSelector((state) => state.modal.afterXSeconds)
  const isOpenXScroll = useAppSelector((state) => state.modal.isOpenXScroll)
  const afterXScroll = useAppSelector((state) => state.modal.afterXScroll)
  const isOpenTrafficSource = useAppSelector(
    (state) => state.modal.isOpenTrafficSource
  )
  const trafficSource = useAppSelector((state) => state.modal.trafficSource)
  const isOpenBrowserLanguage = useAppSelector(
    (state) => state.modal.isOpenBrowserLanguage
  )
  const selectedLanguages = useAppSelector((state) => state.modal.selectedLanguages)
  const isOpenExitIntent = useAppSelector((state) => state.modal.isOpenExitIntent)
  const webhookUrl = useAppSelector((state) => state.modal.webhookUrl)
  const isSendFromSubmission = useAppSelector(
    (state) => state.modal.isSendFromSubmission
  )
  const isSendClickData = useAppSelector((state) => state.modal.isSendClickData)

  const dispatch = useAppDispatch()

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false)
  // const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([])
  const refDropdown = useRef<HTMLDivElement>(null)

  /*const handleClickOutside = (event: Event) => {
    if (refDropdown.current && !refDropdown.current.contains(event.target as Node)) {
      setIsOpenDropdown(false)
    }
  }*/

  const handleLanguageClick = (lang: Language) => {
    if (!selectedLanguages.includes(lang.value)) {
      dispatch(setSelectedLanguages([...selectedLanguages, lang.value]))
    }
  }

  const removeLangFromSelected = (lang: Language) => {
    const copyList = JSON.parse(JSON.stringify(selectedLanguages))
    const index: number = selectedLanguages.findIndex((item) => item === lang.value)
    copyList.splice(index, 1)
    dispatch(setSelectedLanguages(copyList))
  }

  const selectAllLanguages = (isSelect: boolean) => {
    
    if(isSelect){
      let allLang:string[] = []
      languages.forEach(lang => {
        allLang.push(lang.value)
      });
      console.log(allLang)
      dispatch(setSelectedLanguages(allLang))
    }
    else{
      dispatch(setSelectedLanguages([]))
    }
    
  }
  /*
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])
  */

  return (
    <div className="mt-20">
      <span className="bg-faq-border-color w-9 h-9 rounded-full text-center text-base font-semibold inline-block leading-9">
        4
      </span>
      <span className="font-semibold text-lg tracking-[-3%] pl-4">
        Targeting Rules
      </span>
      <div className="font-inter">
        <div className="flex flex-col mt-[30px] max-w-[378px]">
          <div className="inline-flex justify-between">
            <span className="font-semibold">Visitor Device</span>

            <label
              htmlFor="visitorDevice"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                id="visitorDevice"
                type="checkbox"
                checked={isOpenVisitorDevice}
                className="sr-only peer"
                onChange={(e) => {
                  dispatch(setIsOpenVisitorDevice(e.target.checked))
                }}
              />
              <div className="w-[33px] h-[18px] bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[6px] after:left-[4px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-primary-purple" />
            </label>
          </div>
          <div className="inline-flex space-x-5 mt-5">
            <div className=" bg-feature-card-color grow rounded-xl inline-flex items-center py-4 px-3">
              <input
                type="checkbox"
                checked={desktop}
                onChange={(e) => {
                  dispatch(setDesktop(e.target.checked))
                }}
                className="w-[18px] h-[18px] accent-primary-purple"
              />
              <svg
                className="ml-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M15 12.5C15.825 12.5 16.5 11.825 16.5 11V1.5C16.5 0.675 15.825 0 15 0H3C2.175 0 1.5 0.675 1.5 1.5V11C1.5 11.825 2.175 12.5 3 12.5H0V14H18V12.5H15ZM3 1.5H15V11H3V1.5Z"
                  fill="#999999"
                />
              </svg>
              <span className="ml-[5px]">Desktop</span>
            </div>
            <div className=" bg-feature-card-color grow rounded-xl inline-flex items-center py-4 px-3">
              <input
                type="checkbox"
                checked={mobile}
                onChange={(e) => {
                  dispatch(setMobile(e.target.checked))
                }}
                className="w-[18px] h-[18px] accent-primary-purple"
              />

              <svg
                className="ml-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
              >
                <path
                  d="M9.75 0.7575L2.25 0.75C1.425 0.75 0.75 1.425 0.75 2.25V15.75C0.75 16.575 1.425 17.25 2.25 17.25H9.75C10.575 17.25 11.25 16.575 11.25 15.75V2.25C11.25 1.425 10.575 0.7575 9.75 0.7575ZM9.75 14.25H2.25V3.75H9.75V14.25Z"
                  fill="#999999"
                />
              </svg>

              <span className="ml-[5px]">Mobile</span>
            </div>
          </div>
          <div className="inline-flex justify-between mt-[30px]">
            <span className="font-semibold">After X seconds</span>

            <label
              htmlFor="afterXSeconds"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                id="afterXSeconds"
                type="checkbox"
                checked={isOpenXSeconds}
                onChange={(e) => {
                  dispatch(setIsOpenXSeconds(e.target.checked))
                }}
                className="sr-only peer"
              />
              <div className="w-[33px] h-[18px] bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[6px] after:left-[4px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-primary-purple" />
            </label>
          </div>

          <input
            value={afterXSeconds}
            onChange={(e) => {
              dispatch(setAfterXSeconds(parseFloat(e.target.value)))
            }}
            type="number"
            min={0}
            className="h-9 rounded-[8px] border-position-block-border border px-3 mt-[15px] focus-visible:outline-none"
          />

          <div className="inline-flex justify-between mt-[30px]">
            <span className="font-semibold">After % Scroll</span>

            <label
              htmlFor="afterXScroll"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                id="afterXScroll"
                type="checkbox"
                checked={isOpenXScroll}
                onChange={(e) => {
                  dispatch(setIsOpenXScroll(e.target.checked))
                }}
                className="sr-only peer"
              />
              <div className="w-[33px] h-[18px] bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[6px] after:left-[4px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-primary-purple" />
            </label>
          </div>

          <input
            value={afterXScroll}
            onChange={(e) => {
              dispatch(setAfterXScroll(parseFloat(e.target.value)))
            }}
            min={0}
            max={100}
            className="h-9 rounded-[8px] border-position-block-border border px-3 mt-[15px] focus-visible:outline-none"
          />

          <div className="inline-flex justify-between mt-[30px]">
            <span className="font-semibold">Traffic Source</span>

            <label
              htmlFor="trafficSource"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                id="trafficSource"
                type="checkbox"
                checked={isOpenTrafficSource}
                onChange={(e) => {
                  dispatch(setIsOpenTrafficSource(e.target.checked))
                }}
                className="sr-only peer"
              />
              <div className="w-[33px] h-[18px] bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[6px] after:left-[4px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-primary-purple" />
            </label>
          </div>

          <input
            placeholder="Enter your traffic source domain"
            value={trafficSource}
            onChange={(e) => {
              dispatch(setTrafficSource(e.target.value))
            }}
            className="h-9 rounded-[8px] border-position-block-border border px-3 mt-[15px] focus-visible:outline-none"
          />

          <div className="inline-flex justify-between mt-20">
            <span className="font-semibold">Browser Language</span>

            <label
              htmlFor="browserLanguage"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                id="browserLanguage"
                type="checkbox"
                checked={isOpenBrowserLanguage}
                onChange={(e) => {
                  dispatch(setIsOpenBrowserLanguage(e.target.checked))
                }}
                className="sr-only peer"
              />
              <div className="w-[33px] h-[18px] bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[6px] after:left-[4px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-primary-purple" />
            </label>
          </div>

          <div className="h-9 border-position-block-border border rounded-[8px] mt-[15px] flex items-center hover:cursor-pointer relative">
            <div
              className="flex items-center justify-between w-full"
              onClick={() => {
                setIsOpenDropdown(!isOpenDropdown)
              }}
            >
              <span className="text-faq-item-header-text-color mx-3 ">Select</span>
              <div className="pr-3">
                <Image src={dropdown} alt="" />
              </div>
            </div>

            {isOpenDropdown && (
              <div className="absolute w-full top-9 bg-white border border-position-block-border rounded-[8px] flex flex-col z-10 p-5">
                <div className="flex space-x-[10px] items-center">
                  <input
                    type="checkbox"
                    onChange={(e) => selectAllLanguages(e.target.checked)}
                    className="w-[18px] h-[18px] rounded-1 accent-primary-purple"
                  />
                  <span>All Languages</span>
                </div>
                <div className="border-b border-faq-border-color w-full my-[16px]  " />
                <div className="max-h-[200px] overflow-auto scrollbar">
                  {languages.map((lang) => {
                    return (
                      <div
                        key={lang.value}
                        className="h-8 flex items-center hover:bg-position-block-border space-x-[10px]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedLanguages.includes(lang.value)}
                          onClick={() => handleLanguageClick(lang)}
                          className="w-[18px] h-[18px] rounded-1 accent-primary-purple"
                        />
                        <span className="py-[6px]">{lang.label} </span>
                      </div>
                    )
                  })}
                </div>

                <div className="border-b border-faq-border-color w-full my-[16px]" />
                <div className="flex space-x-[10px] items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      dispatch(setSelectedLanguages([]))
                    }}
                    className="font-semibold"
                  >
                    Clear All
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      setIsOpenDropdown(false)
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          {selectedLanguages.length > 0 && (
            <div className=" rounded-[8px] border-position-block-border border px-3 mt-[15px] flex space-x-1 flex-wrap">
              {selectedLanguages.map((lang) => {
                return (
                  <div
                    key={lang}
                    onClick={() => removeLangFromSelected(lang)}
                    className="bg-faq-border-color rounded-[6px] m-[3px]  inline-flex items-center pl-3 py-[6px] space-x-4 pr-4 hover:border-lang-red-color hover:border hover:bg-white group hover:cursor-pointer"
                  >
                    <span>
                      {languages.find((item) => item.value === lang).label}
                    </span>
                    <span className="group-hover:bg-red-500 rounded-full w-[18px] h-[18px] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill=""
                      >
                        <path
                          d="M7.5 6.515L6.515 7.5L4 4.985L1.485 7.5L0.5 6.515L3.015 4L0.5 1.485L1.485 0.5L4 3.015L6.515 0.5L7.5 1.485L4.985 4L7.5 6.515Z"
                          className="group-hover:fill-white"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="inline-flex justify-between mt-[30px]">
            <span className="font-semibold">Exit Intent Targeting</span>

            <label
              htmlFor="intentTarget"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                id="intentTarget"
                type="checkbox"
                checked={isOpenExitIntent}
                onChange={(e) => {
                  dispatch(setIsOpenExitIntent(e.target.checked))
                }}
                className="sr-only peer"
              />
              <div className="w-[33px] h-[18px] bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[6px] after:left-[4px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-primary-purple" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TargetingRules
