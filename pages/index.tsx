import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { useAppSelector, useAppDispatch } from '../hooks'
import { decrement, increment } from '../slices/test'

export default function Home() {
  // const count = useAppSelector((state) => state.counter.value)
  return (
    <div>
      <Layout />
    </div>
  )
}
