import React, { useEffect } from 'react'
import Image from "next/image"
import { useAppSelector, useAppDispatch } from '../../hooks'
import { setArea, setAreaSize, setImageUrl, setIsImageExist} from '../../slices/modal'
import modal2Img from '../../public/upload/defaults/modal2.png'

type Props = {}

export const modalElements = {
  header: 1,
  description: 2,
  input: 2,
  button: 1,
}

const Modal2 = (props: Props) => {
  const color = useAppSelector((state) => state.modal.color)
  const textColor = useAppSelector((state) => state.modal.textColor)
  const header = useAppSelector((state) => state.modal.area.header)
  const input = useAppSelector((state) => state.modal.area.input)
  const description = useAppSelector((state) => state.modal.area.description)
  const button = useAppSelector((state) => state.modal.area.button)
  const imageUrl = useAppSelector((state) => state.modal.imageUrl)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setImageUrl(process.env.BASE_URL + '/upload/defaults/modal2.png'))
    dispatch(setIsImageExist(true))
    dispatch(setAreaSize([0,1,2]))
    dispatch(setArea({
      header:'Install local now',
      description:{
        description1: '123123123',
        description2: '',
        description3: ''
      },
      input:{
        input1: '',
        input2: '',
        input3:''
      },
      button:{
        button1: 'Continue',
        button2: 'Not now'
      }
    }))
  },[])
  
  return (
    <div className="flex flex-col items-center bg-white max-w-2xl min-w-[300px]">
      <div>
      <img src={imageUrl} alt=""/>
      </div>
      <div className='inline-flex flex-col items-center justify-center px-[65px] py-10 w-full'>
        <span className='font-bold text-[30px]'>{header}</span>
        <span className='text-xl mt-5'>{description.description1}</span>
        <button id="input1" className="text-white w-full py-4 rounded-2xl mt-11 border " style={{ backgroundColor: color, color: textColor, borderColor: color === '#FFFFFF' ? "#D2DAE3" : ""}}>{button.button1}</button>
        <button id="input2" className='w-full py-4 rounded-2xl border border-[#D2DAE3] mt-3'>{button.button2}</button>
      </div>
      <button
        type="button"
        className="absolute top-4 right-4 "
      >
       <img src='/modalClose.png' alt=""/>
      </button>
    </div>
  )
}

export default Modal2
