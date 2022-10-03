import React from 'react'
import Meta from '@/components/Meta'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Introduction2 from '@/components/Introduction2'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'


type Props = {}

const Layout = (props: Props) => {
  return (
    <>
      <Meta />
      <div>
        <div className="gradientBG">
          <Header />
          <Introduction />
        </div>
        <div className="bg-custom-gray ">
          <Introduction2 />
        </div>
        <div className="container-margin">
          <Container/>
          <Features />
          <FAQ/>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
