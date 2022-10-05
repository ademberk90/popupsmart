import React, { useEffect } from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setArea,
  setAreaSize,
  setImageUrl,
  setIsImageExist,
} from '../../slices/modal'
import modal2Img from '../../public/upload/defaults/modal2.png'

type Props = {}

export const modalElements = {
  header: 1,
  description: 2,
  input: 2,
  button: 1,
}

const Modal4 = (props: Props) => {
  const color = useAppSelector((state) => state.modal.color)
  const textColor = useAppSelector((state) => state.modal.textColor)
  const header = useAppSelector((state) => state.modal.area.header)
  const input = useAppSelector((state) => state.modal.area.input)
  const description = useAppSelector((state) => state.modal.area.description)
  const button = useAppSelector((state) => state.modal.area.button)
  const imageUrl = useAppSelector((state) => state.modal.imageUrl)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setImageUrl(""))
    dispatch(setIsImageExist(false))
    dispatch(setAreaSize([0, 2, 2]))
    dispatch(
      setArea({
        header: 'Delete your profile',
        description: {
          description1: 'Your profile will be automatically deleted after 1 month.',
          description2:
            'You won’t be able to access to your profile after 30.08.2021.',
          description3: '',
        },
        input: {
          input1: '',
          input2: '',
          input3: '',
        },
        button: {
          button1: 'Delete my profile',
          button2: 'Cancel',
        },
      })
    )
  }, [])

  return (
    <div className="flex flex-col items-center bg-white max-w-2xl min-w-[300px] py-10">
      <div
        className="rounded-full w-[90px] h-[90px] flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="36"
          viewBox="0 0 28 36"
          fill="none"
        >
          <path
            d="M22 12V32H6V12H22ZM19 0H9L7 2H0V6H28V2H21L19 0ZM26 8H2V32C2.00317 33.0599 2.42561 34.0755 3.17507 34.8249C3.92453 35.5744 4.94011 35.9968 6 36H22C23.0599 35.9968 24.0755 35.5744 24.8249 34.8249C25.5744 34.0755 25.9968 33.0599 26 32V8Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="inline-flex flex-col items-center justify-center px-[65px] py-10 w-full">
        <span className="font-bold text-[30px]">{header}</span>
        <span className="mt-5 text-xl text-center">{description.description1}</span>
        <span className="text-base mt-5 text-[#777777] text-center">{description.description2}</span>
        <button
          type="button"
          id="input1"
          className="text-white w-full py-4 rounded-2xl mt-11 border "
          style={{
            backgroundColor: color,
            color: textColor,
            borderColor: color === '#FFFFFF' ? '#D2DAE3' : '',
          }}
        >
          {button.button1}
        </button>
        <button
          type="button"
          id="input2"
          className="w-full py-4 rounded-2xl border border-[#D2DAE3] mt-3"
        >
          {button.button2}
        </button>
      </div>
      <button type="button" className="absolute top-4 right-4 ">
        <img src="/modalClose.png" alt="" />
      </button>
    </div>
  )
}

export default Modal4
