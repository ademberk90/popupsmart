import React, { useState, useEffect } from 'react'
import Image, {StaticImageData} from 'next/image'
import useSWR from 'swr'
import { useAppSelector, useAppDispatch } from '../hooks'
import {
  setSize,
  setPosition,
  setColor,
  setModal,
  setHeader,
  setArea,
  setDescription1,
  setDescription2,
  setDescription3,
  setInput1,
  setInput2,
  setInput3,
  setButton1,
  setButton2,
  setImageUrl
} from '../slices/modal'
import dropCloud from '../public/dropCloud.png'
import dropImage from '../public/dropImage.png'
import defaultImg from '../public/upload/defaults/modal0.png'

type Props = {}

const Content = (props: Props) => {
  const areaSize = useAppSelector((state) => state.modal.areaSize)
  const color = useAppSelector((state) => state.modal.color)
  const textColor = useAppSelector((state) => state.modal.textColor)
  const header = useAppSelector((state) => state.modal.area.header)
  const input = useAppSelector((state) => state.modal.area.input)
  const description = useAppSelector((state) => state.modal.area.description)
  const button = useAppSelector((state) => state.modal.area.button)
  const isImageExist = useAppSelector((state) => state.modal.isImageExist)
  const imageUrl = useAppSelector((state) => state.modal.imageUrl)

  const dispatch = useAppDispatch()

  // const [imageURL, setImageURL] = useState<string | StaticImageData | null>('')
  const [hoverIndex, setHoverIndex] = useState<number>(1)

  const defaultButtonClass = 'py-2 px-4 m-1 rounded-lg'
  const defaultHoverButtonClass =
    'bg-white rounded-xl px-6 py-4 z-20 text-primary-purple text-base font-semibold shadow-[0_5px_10px_2px_rgba(125 74,234,0.27)]'

  const deneme = async (files: FileList | null) => {
    // let files = e.target.files
    const form = new FormData()
    if (files && files.length > 0) {
      form.append('file', files[0])
      const ext = files[0].name.split('.')[1].toLowerCase()
      // setImageURL(URL.createObjectURL(files[0]))
      if (ext !== 'png') {
        return
      }
    }
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: form,
      headers: {
        type: 'image',
      },
    }).then((res) => res.json())
    .then((data) => {
      if(data && data.newPath){
        console.log(data.newPath)
        dispatch(setImageUrl(process.env.BASE_URL + data.newPath.substring(8)));
      }
    })
  }

  const inputHandleChange = (value: string, ind: number) => {
    switch (ind) {
      case 1:
        dispatch(setInput1(value))
        break
      case 2:
        dispatch(setInput2(value))
        break
        case 3:
          dispatch(setInput3(value))
          break
      default:
        break
    }
  }


  const descriptionHandleChange = (value: string, ind: number) => {
    switch (ind) {
      case 1:
        
        dispatch(setDescription1(value))
        break
      case 2:
        dispatch(setDescription2(value))
        break
        case 3:
          dispatch(setDescription3(value))
          break
      default:
        break
    }
  }

  const buttonHandleChange = (value: string, ind: number) => {
    switch (ind) {
      case 1:
        dispatch(setButton1(value))
        break
      case 2:
        dispatch(setButton2(value))
        break
      default:
        break
    }
  }

  

  return (
    <div className="mt-20">
      <span className="bg-faq-border-color w-9 h-9 rounded-full text-center text-base font-semibold inline-block leading-9">
        3
      </span>
      <span className="font-semibold text-lg tracking-[-3%] pl-4">Content</span>
      <div className="font-inter">
        <div className="flex flex-col mt-[30px] max-w-[378px]">
          <span>Edit your content</span>
          <div className="relative mt-[15px]">
            <div className="bg-red-500 absolute w-full h-full -z-10 outline border-3 rounded-[8px] border-primary-purple opacity-[15%]">
              123
            </div>
            <input
              value={header}
              className="h-9 rounded-[8px] border-primary-purple border px-3 w-full"
              onChange={(e) => dispatch(setHeader(e.target.value))}
            />
          </div>
          {[...new Array(areaSize[0]).keys()].map((item) => {
              type ObjectKey = keyof typeof input;
              const myVar = (`input${  item+1}`) as ObjectKey;
            return (
              
              <input
                key={item}
                value={input[myVar] as string}
                className="h-9 rounded-[8px] border-position-block-border border px-3 mt-[15px] focus-visible:outline-none"
                onChange={(e) => {
                  inputHandleChange(e.target.value, item + 1)
                }}
              />
            )
          })}
          {[...new Array(areaSize[1]).keys()].map((item) => {
            type ObjectKey = keyof typeof description;
            const myVar = (`description${  item+1}`) as ObjectKey;
            return (
              <input
                key={item}
                value={description[myVar] as string}
                className="h-9 rounded-[8px] border-position-block-border border px-3 mt-[15px] focus-visible:outline-none"
                onChange={(e) => {
                  descriptionHandleChange(e.target.value, item + 1)
                }}
              />
            )
          })}
          {[...new Array(areaSize[2]).keys()].map((item) => {
             type ObjectKey = keyof typeof button;
             const myVar = (`button${item+1}`) as ObjectKey;
            return (
              <input
                key={item}
                value={button[myVar] as string}
                className="h-9 rounded-[8px] border-position-block-border border px-3 mt-[15px] focus-visible:outline-none"
                onChange={(e) => {
                  buttonHandleChange(e.target.value, item + 1)
                }}
              />
            )
          })}
          {isImageExist && (
            <label
              htmlFor="imageInputId"
              className="flex  items-center justify-center space-y-5 flex-col w-96 h-44 px-4 transition bg-white border-2  border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none mt-4"
              onDrop={(e) => {
                e.preventDefault()
                e.stopPropagation()
                deneme(e.dataTransfer.files)
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="w-20 h-20 rounded-xl bg-primary-purple-op-1 flex  items-center justify-center">
                {imageUrl ? (
                  <Image src={imageUrl} alt="" width={96} height={96} />
                ) : (
                  <Image src={dropImage} alt="" className="" />
                )}
              </div>

              <span className="flex items-center space-x-2">
                <Image src={dropCloud} alt="" />
                <span className="">
                  Drop your image here or{' '}
                  <span className="text-primary-purple underline font-semibold">
                    upload
                  </span>
                </span>
              </span>
              <input
                id="imageInputId"
                type="file"
                name="file_upload"
                className="hidden"
                accept=".png, .jpg, .jpeg"
                multiple={false}
                onChange={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  deneme(e.target.files)
                }}
              />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export default Content
