import React, { useEffect } from 'react'
import Image from 'next/image'
import defaultImg from '../../public/upload/defaults/modal0.png'
import modalClose from '../../public/modalClose.png'
import { setImageUrl } from '../../slices/modal'
import { useAppSelector, useAppDispatch } from '../../hooks'


type Props = {}

export const modalElements = {
  header: 1,
  description: 2,
  input: 2,
  button: 1,
}
const Modal0 = (props: Props) => {
  const color = useAppSelector((state) => state.modal.color)
  const textColor = useAppSelector((state) => state.modal.textColor)
  const header = useAppSelector((state) => state.modal.area.header)
  const input = useAppSelector((state) => state.modal.area.input)
  const description = useAppSelector((state) => state.modal.area.description)
  const button = useAppSelector((state) => state.modal.area.button)
  const imageUrl = useAppSelector((state) => state.modal.imageUrl)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setImageUrl(`${process.env.BASE_URL}/upload/defaults/modal0.png`))
    console.log('dsads ', imageUrl)
  },[])
  return (
    <div className="flex max-w-2xl">
      <div className="flex flex-col items-center justify-center w-1/2 my-[60px]">
        <div className="flex flex-col items-center justify-center max-w-[300px]">
        <span className="font-semibold text-3xl leading-9 ">{header}</span>
        <span className="text-base leading-[18px] mt-[10px]">
          {description.description1}
        </span>
        <input
          placeholder={input.input1}
          readOnly
          className="h-9 rounded-[8px] border-position-block-border border px-3 py-[10px] mt-[30px] focus-visible:outline-none"
        />
        <input
          placeholder={input.input2}
          readOnly
          className="h-9 rounded-[8px] border-position-block-border border px-3 py-[10px] mt-[15px] focus-visible:outline-none"
        />

        <button
          type="button"
          className=" rounded-lg mt-[15px] py-[10px] bg-primary-purple text-white w-full"
          style={{ backgroundColor: color, color: textColor }}
        >
          {button.button1}
        </button>
        <span className='text-[10px] mt-[15px] mr-auto'>{description.description2}</span>
        </div>
      </div>
      <div className='w-1/2 inline-flex'>
        <img src={imageUrl} alt=""  className="rounded-r-[30px]" />
      </div>
    </div>
  )
}

export default Modal0
