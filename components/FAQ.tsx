import React, { useContext, useState } from 'react'
import FAQItem from '@/components/FAQItem'

type Props = {}

const faqItems = [
  {
    id: 1,
    question: 'How do I pay for the essentials or premium plan?',
    answer:
      'You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    id: 2,
    question: 'How do I pay for the essentials or premium plan?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s',
  },
  {
    id: 3,
    question: 'We need to add new users to our team, how will that be billed?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s',
  },
  {
    id: 4,
    question: 'How do I pay for the essentials or premium plan?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s',
  },
  {
    id: 5,
    question: 'Can I cancel my essentials or premium plan subscription at my time?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s',
  }
]
const FAQ = (props: Props) => {
  return (
    <div className='flex items-center flex-col mt-12 font-poppins'>
        <h1 className='text-4xl font-semibold leading-[48px] tracking-[-3%]'>Frequently Asked Questions</h1>
      <div className="mt-12 w-full">
        {faqItems.map((item) => {
          return (
            <FAQItem id={item.id} question={item.question} answer={item.answer} key={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
