import React, { useState, useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../hooks'
import { setModal } from '../slices/modal'

type Props = {}

const Template = (props: Props) => {
  const dispatch = useAppDispatch()

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(12)
  const [array, setArray] = useState<Array<number>>([])
  const [hoverIndex, setHoverIndex] = useState<number>(1)

  const range = (start: number, end: number) => {
    return Array.from(
      Array.from(Array(Math.ceil(end - start)).keys()),
      (x) => start + x
    )
  }

  const buttonArray = range(1, 4)

  const defaultButtonClass = 'py-2 px-4 m-1 rounded-lg'
  const defaultHoverButtonClass = 'bg-white rounded-xl px-6 py-4 z-20 text-primary-purple text-base font-semibold shadow-[0_5px_10px_2px_rgba(125 74,234,0.27)]'

  useEffect(() => {
    setArray(range((currentPage - 1) * perPage + 1, currentPage * perPage + 1))
  }, [currentPage])

  return (
    <div className="mt-20">
      <span className="bg-faq-border-color w-9 h-9 rounded-full text-center text-base font-semibold inline-block leading-9">
        1
      </span>
      <span className="font-semibold text-lg tracking-[-3%] pl-4">
        Choose your template
      </span>
      <div className="font-inter">
        <div className="grid sm:gap-5 md:grid-cols-2 md:gap-2 xl:grid-cols-4 xl:gap-4 mt-7 justify-items-center">
          {array.map((item) => {
            return (
              <div
                key={item}
                className="bg-feature-card-color min-h-[200px] xl:w-full md:w-5/6 sm:w-3/4 flex items-center justify-center hover:bg-primary-purple-hover"
                onMouseEnter={() => setHoverIndex(item)}
                onMouseLeave={() => setHoverIndex(0)}
              >
                <div className="">
                  <img src={`/modals/${item}.png`} alt="" className={hoverIndex === item ? 'opacity-60' : ''}/>
                </div>

                <button type="button" className={hoverIndex === item ? `absolute ${defaultHoverButtonClass}` :`hidden ${defaultHoverButtonClass}`} onClick={() => dispatch(setModal(item))}>Select Template</button>
              </div>
            )
          })}
        </div>

        <div
          className="inline-flex rounded-md mt-7 bg-feature-card-color"
          role="group"
        >
          {buttonArray.map((item) => {
            return (
              <button
                key={item}
                type="button"
                className={
                  currentPage === item
                    ? `bg-white ${defaultButtonClass}`
                    : ` ${defaultButtonClass}`
                }
                onClick={() => setCurrentPage(item)}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Template
