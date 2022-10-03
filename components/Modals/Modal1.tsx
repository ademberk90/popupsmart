import React, { useEffect } from 'react'
import Image from 'next/image'
import modal1 from '../../public/modal1.png'
import modalClose from '../../public/modalClose.png'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { setArea, setAreaSize, setImageUrl, setIsImageExist} from '../../slices/modal'

type Props = {}


const Modal1 = (props: Props) => {
  const color = useAppSelector((state) => state.modal.color)
  const textColor = useAppSelector((state) => state.modal.textColor)
  const header = useAppSelector((state) => state.modal.area.header)
  const input = useAppSelector((state) => state.modal.area.input)
  const description = useAppSelector((state) => state.modal.area.description)
  const button = useAppSelector((state) => state.modal.area.button)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setIsImageExist(false))
    dispatch(setAreaSize([1,1,2]))
    dispatch(setArea({
      header:'Security Code',
      description:{
        description1: 'This code expires in 24 hours',
        description2: '',
        description3: ''
      },
      input:{
        input1: 'Code',
        input2: '',
        input3:''
      },
      button:{
        button1: 'Cancel',
        button2: 'Continue'
      }
    }))
  },[])
  return (
    <div className="flex flex-col items-center bg-white pt-8 relative mx-8 my-6 max-w-2xl">
      <div className="rounded-full w-[90px] h-[90px] flex items-center justify-center" style={{ backgroundColor: color }}>
        <Image src={modal1} alt="" />
      </div>

      <h1 className="font-bold text-3xl leading-[36.31px] mt-8">{header}</h1>

      <span className="text-xl mt-5">{description.description1}</span>

      <input
        value={input.input1}
        readOnly
        className="border-modal1-input-border border rounded-md p-3 mt-10 focus-visible:outline-none"
      />
      <div className="inline-flex space-x-3 mt-7 mb-8">
        <button
          id="cancelButton"
          type="button"
          className="border-modal1-input-border border rounded-md px-12 py-3 bg-white"
        >
          {button.button1}
        </button>

        <button
          id="continueButton"
          type="button"
          className=" rounded-md border  px-12 py-3 bg-primary-purple " style={{ backgroundColor: color, color: textColor,borderColor: color === '#FFFFFF' ? "#D2DAE3" : ""}}
        >
          {button.button2}
        </button>
      </div>

      <button
        type="button"
        className="absolute top-4 right-4 "
      >
        <Image src={modalClose} alt=""/>
      </button>
    </div>
  )
}

export default Modal1
