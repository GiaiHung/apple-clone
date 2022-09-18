import { ShoppingCartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../utils/sanity'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/slices/basketSlice'
import toast from 'react-hot-toast'

interface Props {
  product: Product
}

function Product({ product }: Props) {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket(product))

    toast.success(`${product.title} added to the basket!`, {
      position: 'bottom-center'
    })
  }

  return (
    <div className="flex h-fit w-[320px] select-none flex-col gap-4 rounded-2xl bg-gray-800 p-8 lg:h-[500px] lg:w-[400px]">
      <div className="relative h-64 w-full lg:h-72">
        <Image src={urlFor(product.image[0]).url()} alt="" layout="fill" objectFit="contain" />
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="text-lg text-white lg:text-2xl">
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
        </div>

        <div
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 transition hover:scale-105 lg:h-[70px] lg:w-[70px]"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  )
}

export default Product
