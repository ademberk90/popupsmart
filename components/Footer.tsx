import React from 'react'
import FooterCard from '@/components/FooterCard'
import Image from 'next/image'
import flag from '../public/flag.png'
import noCode from '../public/noCode.png'
import calendar from '../public/calendar.png'
import aws from '../public/aws.png'
import popupsmart from '../public/popupsmart.png'

type Props = {}

const features = [
  {
    id: 1,
    logo: flag,
    header: 'Targeting Options',
    desc: 'Target +26 trigger to your visitors',
  },
  {
    id: 1,
    logo: noCode,
    header: 'No-Code',
    desc: 'No code required while you’re creating a popup.',
  },
  {
    id: 1,
    logo: calendar,
    header: 'Targeting Options',
    desc: 'Integrated with your marketing and CRM platforms',
  },
  {
    id: 1,
    logo: aws,
    header: 'Targeting Options',
    desc: 'Don’t worry about speed and Amazon AWS resources',
  },
]

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col font-poppins mt-28 items-center">
      <h1 className="font-semibold text-4xl leading-[48px] tracing-[-0.3%]">
        Build great popups without code
      </h1>
      <div className="flex space-x-7 mt-4">
        {features.map((item, index) => {
          return (
            <FooterCard
              logo={item.logo}
              header={item.header}
              desc={item.desc}
              key={item.id}
            />
          )
        })}
      </div>
      <div className="rounded-full w-8 h-8">
        <Image alt="" src={popupsmart} />
      </div>
      <span className='mt-4 mb-20'>Powered by Popupsmart</span>
    </div>
  )
}

export default Footer
