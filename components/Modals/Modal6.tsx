import React, { useEffect } from 'react'
import Image from 'next/image'
import modal1 from '../../public/modal1.png'
import modalClose from '../../public/modalClose.png'
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  setArea,
  setAreaSize,
  setImageUrl,
  setIsImageExist,
} from '../../slices/modal'

type Props = {}

const Modal6 = (props: Props) => {
  const color = useAppSelector((state) => state.modal.color)
  const textColor = useAppSelector((state) => state.modal.textColor)
  const header = useAppSelector((state) => state.modal.area.header)
  const input = useAppSelector((state) => state.modal.area.input)
  const description = useAppSelector((state) => state.modal.area.description)
  const button = useAppSelector((state) => state.modal.area.button)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setIsImageExist(false))
    dispatch(setAreaSize([1, 1, 2]))
    dispatch(
      setArea({
        header: 'Join our mail list',
        description: {
          description1: 'Save up to 30% of your next order',
          description2: '',
          description3: '',
        },
        input: {
          input1: 'Enter your email',
          input2: '',
          input3: '',
        },
        button: {
          button1: 'Later',
          button2: 'Join now',
        },
      })
    )
  }, [])
  return (
    <div className="flex flex-col items-center bg-white pt-8 relative mx-8 my-6 max-w-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <path
          d="M80.984 32.76C79.627 28.388 83.937 20.948 81.402 17.308C78.847 13.632 70.74 15.638 67.227 12.962C63.75 10.313 63.082 1.60701 58.904 0.18801C54.874 -1.18199 49.463 5.40401 44.996 5.40401C40.529 5.40401 35.122 -1.18199 31.091 0.18801C26.914 1.60801 26.246 10.313 22.769 12.962C19.256 15.637 11.149 13.63 8.594 17.308C6.062 20.948 10.372 28.388 9.016 32.76C7.707 36.98 0 40.324 0 45C0 49.676 7.707 53.021 9.016 57.241C10.372 61.615 6.062 69.053 8.593 72.693C11.149 76.369 19.256 74.363 22.768 77.039C26.246 79.688 26.913 88.394 31.091 89.813C35.122 91.183 40.532 84.596 45 84.596C49.468 84.596 54.878 91.183 58.908 89.813C63.086 88.393 63.753 79.688 67.231 77.039C70.744 74.363 78.849 76.369 81.406 72.693C83.937 69.052 79.627 61.614 80.984 57.241C82.293 53.021 90 49.677 90 45C90 40.323 82.293 36.98 80.984 32.76ZM23.852 33.375C23.852 27.851 27.635 23.928 32.982 23.928C38.347 23.928 42.082 27.851 42.082 33.375C42.082 38.942 38.294 42.865 32.982 42.865C27.635 42.864 23.852 38.941 23.852 33.375ZM35.829 65.502H29.929L53.529 24.502H59.429L35.829 65.502ZM57.052 66.072C51.752 66.072 47.96 62.192 47.96 56.666C47.96 51.14 51.748 47.266 57.052 47.266C62.356 47.266 66.152 51.146 66.152 56.666C66.152 62.186 62.36 66.071 57.052 66.071V66.072Z"
          fill="#7D4AEA"
        />
      </svg>

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
          className=" rounded-md border  px-12 py-3 bg-primary-purple "
          style={{
            backgroundColor: color,
            color: textColor,
            borderColor: color === '#FFFFFF' ? '#D2DAE3' : '',
          }}
        >
          {button.button2}
        </button>
      </div>

      <button type="button" className="absolute top-4 right-4 ">
        <Image src={modalClose} alt="" />
      </button>
    </div>
  )
}

export default Modal6
