import React from 'react'
import Image from 'next/image'

function Adverisement() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="space-y-6 h-screen pt-12">
        <div className="ml-4 text-center text-2xl font-semibold text-gray-200 lg:text-4xl">
          <p>A display that’s up to</p>
          <p>2x brighter in the sun.</p>
        </div>
        <div className="block bg-gradient-to-t from-green-300 to-yellow-300 bg-clip-text text-center text-5xl text-transparent lg:text-[140px]">
          Brilliant.
        </div>

        <div className="relative mx-auto h-[50vh] w-[90vw]">
          <Image
            src="https://www.apple.com/v/iphone-14-pro/a/images/overview/display/display_brilliant__egbbp2nyjquu_large.jpg"
            alt=""
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      <div className="flex h-screen flex-col items-center justify-center space-y-6 pb-6 lg:flex-row lg:pb-0">
        <div className="relative m-auto h-[70vh] w-[60vw] lg:w-[30vw]">
          <Image
            src="https://www.apple.com/v/iphone-14-pro/a/images/overview/display/deep-dive/stacked/display_1_vertical__6xt4y9jwteqm_small.jpg"
            alt=""
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div className="max-w-[90vw] lg:max-w-[20vw]">
          <p className="break-normal break-words text-lg font-semibold text-gray-200">
            For those bright, sunshiny days, the Super Retina XDR display now reaches a peak of 2000
            nits outdoors — that’s twice as bright as before and the highest peak brightness of any
            smartphone. So text jumps right off the screen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Adverisement
