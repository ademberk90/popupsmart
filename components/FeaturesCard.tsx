import React from 'react'
import Image, { StaticImageData } from "next/image"

interface IProps {
    logo: string | StaticImageData;
    header : string;
    desc : string;
}


const FeaturesCard: React.FC<IProps> = ({logo,header,desc}) => {
  return (
    <div className='flex flex-col bg-feature-card-color rounded-xl items-center py-14'>
        <div>
            <Image alt="" src={logo}/>
        </div>
        <h2 className='font-semibold text-lg mt-5'>
            {header}
        </h2>
        <span className='mt-3 w-3/4'>
            {desc}
        </span>
    </div>
  )
}

export default FeaturesCard