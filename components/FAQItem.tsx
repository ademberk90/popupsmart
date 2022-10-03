import React from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { setIndex } from '../slices/accordionIndex'

interface IProps {
  id: number
  question: string
  answer: string
}

const FAQItem: React.FC<IProps> = ({ id, question, answer }) => {
    const dispatch = useAppDispatch();

  const index = useAppSelector((state) => state.accordion.index)
  const defaultH1Class = 'font-semibold text-lg leading-6';
  const defaultbuttonClass = 'font-semibold text-lg leading-6';
  const defaultMainClass = 'border-y border-solid border-faq-border-color px-8 py-6'

  const handleClick = (ind:number) => {
    if(ind === index){
      dispatch(setIndex(0))
    }
    else{
      dispatch(setIndex(ind))
    }
  }

  return (
    <div className={index === id ? `bg-feature-card-color ${  defaultMainClass}` : `${  defaultMainClass}`}>
      <button type="button" className="flex items-center justify-between w-full" onClick={() => handleClick(id)}>
        <h1 className={index === id ? ` ${  defaultH1Class}` : `font-semibold text-faq-item-header-text-color ${ defaultH1Class}`}>
          {question}
        </h1>
        {index !== id && (
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#999999"
            >
              <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z" />
            </svg>
          
        )}
        {index === id && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#7D4AEA"
            >
             <path fill="none" d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z" />
            </svg>
        )}
      </button>

      {index === id && (
        <div>
          {' '}
          <p className="text-sm bg-feature-card-color text-base leading-[26px] tracking-[-1%] pt-5">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default FAQItem
