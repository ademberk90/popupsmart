import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import logo from '../public/logo.svg'
import arrowDown from '../public/arrowDown.png'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

type Props = {}
console.log(process.env.BASE_URL)
const Header = (props: Props) => {
  return (
    <nav className="flex py-6 items-center container-margin font-inter">
      <div className=" w-48 flex-initial items-center flex space-x-5 py-6">
        <Image className="" alt="" src={logo} />
        <span className="inline-block font-extrabold text-base leading-[18px] ">model.carts</span>
      </div>

      <div className="flex  align-center flex-1  pl-2 space-x-3">
        <button
          type="button"
          className="inline-flex items-center"
          aria-expanded="false"
        >
          <span>Solutions</span>
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <Link href="#" className="flex align-center text-base font-medium">
          <a href="#">Product Tour</a>
        </Link>
        <Link href="#" className="text-base font-medium">
          <a href="#">Showcase</a>
        </Link>
        <Link href="#" className="text-base font-medium">
          <a href="#">Pricing</a>
        </Link>
      </div>

      <div className=" w-56 flex-initial items-center flex justify-end  space-x-5">
        <a href="#" className="">
          Sign in
        </a>
        <a href="#" className="bg-primary-purple rounded-lg text-white px-5 py-[9px]">
          Try for free
        </a>
      </div>
    </nav>
  )
}

export default Header
