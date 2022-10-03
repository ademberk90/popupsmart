import React from 'react'

type Props = {}

const Introduction = (props: Props) => {
  return (
    <div className='container-margin pb-80 '>
      <div className="text-7xl font-semibold leading-80 max-w-lg font-poppins">
        Simple modal card creator
      </div>
      <div className="font-poppins mt-5 text-3xl tracking-tighter">
        A utility-first CSS framework packed with classeslike flex, pt-4, text-center
        and rotate-90 that can becomposed to build any design, directly in your
        markup.
      </div>
      <button
        type="button"
        className="mt-14 bg-primary-purple rounded-lg py-5 px-7 text-white shadow-tryItDownButton"
      >
        <span>Try it out Now</span>
      </button>
      <div className='flex space-x-11 mt-10 text-xs leading-4 items-center'>
        <div className="flex">
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
              clip-rule="evenodd"
            />
          </svg>
          <span className='pl-2'> Free and paid plans</span>
        </div>
        <div className="flex ">
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
              clip-rule="evenodd"
            />
          </svg>
          <span className='pl-2'>Setup in minutes</span>
        </div>
        <div className="flex">
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
              clip-rule="evenodd"
            />
          </svg>
          <span className='pl-2'>No credit card required*</span>
        </div>
      </div>
    </div>
  )
}

export default Introduction
