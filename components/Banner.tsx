import Image from 'next/image'
import React from 'react'
import Button from './Helper/Button'

function Banner() {
  return (
    <div className="sticky top-0 flex h-[100vh] items-center justify-between px-8 z-30">
      {/* Left */}
      <div className="space-y-8">
        <h1 className="gap-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy now" />
          <a href="#" className="link">
            Learn more
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[600px] lg:w-[550px]">
        <Image src="/assets/img/iphone.png" alt="" layout="fill" objectFit="contain" priority/>
      </div>
    </div>
  )
}

export default Banner
