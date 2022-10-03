import React from 'react'
import Image, { StaticImageData } from "next/image"

interface IProps {
    logo: string | StaticImageData;
    header : string;
    desc : string;
}

const FooterCard : React.FC<IProps>= ({logo,header,desc}) => {
  return (
    <div className='flex flex-col rounded-xl items-center py-14 '>
    <div className='rounded-full bg-primary-purple w-[120px] h-[120px] flex items-center justify-center'>
        <Image alt="" src={logo} />
    </div>
    <h2 className='font-semibold text-lg mt-5'>
        {header}
    </h2>
    <span className='mt-3 text-center'>
        {desc}
    </span>
</div>
  )
}

export default FooterCard

