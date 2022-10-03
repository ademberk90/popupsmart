import React from 'react'
import Template from '@/components/Template'
import Modal1 from '@/components/Modals/Modal1'
import Appearance from '@/components/Appearance'
import Content from '@/components/Content'
import TargetingRules from '@/components/TargetingRules'
import Settings from '@/components/Settings'

type Props = {}

const Container = (props: Props) => {
  return (
    <div className='font-poppins'>
      <div className='flex flex-col'>
        <h1 className="font-semibold leading-[48px] text-4xl tracking-[-3%] mt-20">
          Modal Card Generator
        </h1>
        <span className="max-w-md tracking-[-1.5%] text-base leading-6 mt-4">
          Measure your return on email marketing efforts easier and faster by using
          thebest online tools. Popupsmart is ready to help you build an efficient
          email list!
        </span>
      </div>
      <Template/>
      <Appearance/>
      <Content/>
      <TargetingRules/>
      <Settings/>
      
      
    </div>
  )
}

export default Container
