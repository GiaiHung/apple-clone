import { ShoppingCartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../utils/sanity'

interface Props {
  product: Product
}

function Product({ product }: Props) {
  return (
    <div className="bg-gray-800 rounded-2xl select-none flex h-fit w-[320px] flex-col gap-4 p-8 lg:h-[500px] lg:w-[400px]">
      <div className="relative h-64 w-full lg:h-72">
        <Image src={urlFor(product.image[0]).url()} alt="" layout="fill" objectFit="contain" />
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="text-lg text-white lg:text-2xl">
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
        </div>

        <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 lg:h-[70px] lg:w-[70px] hover:animate-bounce">
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  )
}

export default Product
