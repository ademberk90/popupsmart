import React, { useState, useEffect, ChangeEventHandler } from 'react'
import dynamic from 'next/dynamic'
import Modal1 from '@/components/Modals/Modal1'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../hooks'
import { setSize, setPosition, setColor } from '../slices/modal'
import dropCloud from '../public/dropCloud.png'
import dropImage from '../public/dropImage.png'

type Props = {}

const Appearance = (props: Props) => {
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [ModalComponent, setModalComponent] = useState<React.ComponentType>()

  const size = useAppSelector((state) => state.modal.size)
  const color = useAppSelector((state) => state.modal.color)
  const position = useAppSelector((state) => state.modal.position)
  const modal = useAppSelector((state) => state.modal.modal)
  const isLogoExist = useAppSelector((state) => state.modal.isLogoExist)

  const dispatch = useAppDispatch()

  const CMP = dynamic(() => import(`../components/Modals/Modal${modal}`))

  const buttonSizeArray = ['Small', 'Medium', 'Large']
  const positionArray = [11, 12, 13, 21, 22, 23, 31, 32, 33]
  const colorsArray = ['#000000', '#F37C34', '#777777', '#DDDDDD', '#FFFFFF']
  const defaultButtonClass = 'py-2 px-4 m-1 rounded-lg'
  const defaultPositionClass = 'border border-position-block-border h-4'

  const getStyle = (pos: number) => {
    switch (pos) {
      case 11: {
        return { borderTopLeftRadius: '4px' }
      }
      case 13: {
        return { borderTopRightRadius: '4px' }
      }
      case 31: {
        return { borderBottomLeftRadius: '4px' }
      }
      case 33: {
        return { borderBottomRightRadius: '4px' }
      }
      default: {
        return {}
      }
    }
  }

  const deneme = async (files: FileList | null) => {
    // let files = e.target.files
    const form = new FormData()
    if (files && files.length > 0) {
      form.append('file', files[0])
      const ext = files[0].name.split('.')[1].toLowerCase()
      setImageURL(URL.createObjectURL(files[0]))
      if (ext !== 'png') {
        return
      }
    }
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: form,
      headers: {
        type: 'logo',
      },
    })

    const data1 = await response.json()
  }

  return (
    <div className="mt-24 relative">
      <span className="bg-faq-border-color w-9 h-9 rounded-full text-center text-base font-semibold inline-block leading-9 ">
        2
      </span>
      <span className="text-lg tracking-[-3%] pl-4">
        <span className="font-semibold ">Appearance</span> (Size, colors, logo)
      </span>
      <div className="absolute top-0 right-0 modal-card rounded-[30px]">
        <CMP />
      </div>
      <div className="font-inter">
        <div className="mt-9 text-sm">Size</div>
        <div
          className="inline-flex rounded-md mt-7 bg-feature-card-color"
          role="group"
        >
          {buttonSizeArray.map((item) => {
            return (
              <button
                key={item}
                type="button"
                className={
                  size === item
                    ? `bg-white ${defaultButtonClass}`
                    : ` ${defaultButtonClass}`
                }
                onClick={() => dispatch(setSize(item))}
              >
                {item}
              </button>
            )
          })}
        </div>
        <div className="mt-7 text-sm">Position</div>
        <div className="grid grid-cols-3 gap-1 max-w-[82px] mt-4 ">
          {positionArray.map((pos) => {
            return (
              <button
                key={pos}
                type="button"
                className={
                  position === pos
                    ? `bg-primary-purple ${defaultPositionClass}`
                    : ` ${defaultPositionClass}`
                }
                style={getStyle(pos)}
                onClick={() => dispatch(setPosition(pos))}
              >
                {' '}
              </button>
            )
          })}
        </div>
        <div className="mt-7 text-sm">Colors</div>
        <div className="mt-4 flex space-x-[10px]">
          {colorsArray.map((clr) => {
            return (
              <button
                key={clr}
                type="button"
                className="border-[1px] rounded-[10px] border-[#b3b3b3] h-[42px] w-[42px]"
                style={{ backgroundColor: clr }}
                onClick={() => dispatch(setColor(clr))}
              >
                {' '}
              </button>
            )
          })}
        </div>
        <div className="mt-7 text-sm">Upload Logo</div>

        {isLogoExist && (
          <label
            htmlFor="logoInputId"
            className="flex  items-center justify-center space-y-5 flex-col w-96 h-44 px-4 transition bg-white border-2  border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none mt-4"
            onDrop={(e) => {
              e.preventDefault()
              e.stopPropagation()
              deneme(e.dataTransfer.files)
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="w-20 h-20 rounded-xl bg-primary-purple-op-1 flex  items-center justify-center">
              {imageURL ? (
                <Image src={imageURL} alt="" width={96} height={96} />
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
              type="file"
              id="logoInputId"
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
  )
}

export default Appearance
