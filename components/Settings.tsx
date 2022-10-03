import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import info from '../public/info.png'
import { useAppSelector, useAppDispatch } from '../hooks'
import {
  setWebhookUrl,
  setIsSendFromSubmission,
  setIsSendClickData,
} from '../slices/modal'
import prepareCode from '../helpers/prepareCode'

type Props = {}

const Settings = (props: Props) => {
  const webhookUrl = useAppSelector((state) => state.modal.webhookUrl)
  const isSendFromSubmission = useAppSelector(
    (state) => state.modal.isSendFromSubmission
  )
  const isSendClickData = useAppSelector((state) => state.modal.isSendClickData)
  const allModal = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()

  const [code, setCode] = useState<string>('')

  useEffect(() => {}, [])

  const getYourCode = () => {
    let codeString: string = prepareCode(allModal)
    setCode(codeString)
  }

  const copyTheCode = () => {
    navigator.clipboard.writeText(code);
  }

  return (
    <div className="mt-20">
      <span className="bg-faq-border-color w-9 h-9 rounded-full text-center text-base font-semibold inline-block leading-9">
        5
      </span>
      <span className="font-semibold text-lg tracking-[-3%] pl-4">
        Settings and Code
      </span>
      <div className="font-inter">
        <div className="flex flex-col mt-[30px] max-w-[378px]">
          <span className="font-semibold leading-9 text-[18px] tracking-[-3%]">
            Webhook to Send data
          </span>
          <span className="mt-[15px]">Enter your Webhook URL</span>
          <span className="mt-[5px]">You can create a simple one with make.com</span>
          <input
            placeholder="Your Webhook URL"
            value={webhookUrl}
            onChange={(e) => {
              dispatch(setWebhookUrl(e.target.value))
            }}
            className="h-9 rounded-[8px] border-position-block-border border px-3 mt-[15px]"
          />
          <span>
            <div className="flex space-x-[10px] items-center mt-[15px]">
              <input
                type="checkbox"
                checked={isSendFromSubmission}
                onChange={(e) => {
                  dispatch(setIsSendFromSubmission(e.target.checked))
                }}
                className="w-[18px] h-[18px] rounded-1 accent-primary-purple"
              />
              <span>Send form submissions</span>
            </div>
            <div className="flex space-x-[10px] items-center mt-[15px]">
              <input
                type="checkbox"
                checked={isSendClickData}
                onChange={(e) => {
                  dispatch(setIsSendClickData(e.target.checked))
                }}
                className="w-[18px] h-[18px] rounded-1 accent-primary-purple"
              />
              <span>Send click data</span>
            </div>
          </span>
          <button
            type="button"
            className="text-white bg-primary-purple rounded-xl max-w-[184px] py-[19px] mt-[50px] font-medium text-lg leading-[22px] tracking-[-3%] shadow-getYourCode"
            onClick={() => getYourCode()}
          >
            Get your Code
          </button>
          {code && (
            <div className='bg-script-color rounded-[8px] text-white font-light text-base p-[15px] mt-[30px] flex flex-col font-robotoMono break-words'>
            <p className="">
              {code}
            </p>
             <button
             type="button"
             className="bg-primary-purple font-medium leading-[22px] px-[15px] py-1 rounded-[160px]  ml-auto mt-[21px] "
             onClick={() => copyTheCode()}
           >
             Copy the code
           </button>
           </div>
          )}

          <div className="flex space-x-[6px] mt-[15px]">
            <div className="min-w-[13px] min-h-[13px] ">
              <Image src={info} alt="" />
            </div>
            <p className="text-xs">
              {
                'Copy and paste the embed code above just before the closing </body> tag of your website template file.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
