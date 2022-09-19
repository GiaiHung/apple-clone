import { ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../utils/sanity'
import Currency from 'react-currency-format'

interface Props {
  id: string
  items: Product[]
}

function CheckoutProduct({ id, items }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-5 lg:flex-row">
      <div className="relative h-44 w-44">
        <Image src={urlFor(items[0].image[0]).url()} alt="" layout="fill" objectFit="contain" />
      </div>

      <div className="flex flex-1 items-end gap-8 lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="flex flex-col justify-between gap-x-8 text-xl lg:flex-row">
            <h2 className="text-lg font-semibold lg:text-2xl">{items[0].title}</h2>
            <p className="flex cursor-pointer items-center gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-6 w-6 text-blue-500" />
            </p>
          </div>

          <p className="text-md flex cursor-pointer items-center gap-1 text-blue-500 hover:underline">
            Show products details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>

        <div className="flex flex-col items-end space-y-8">
          <h4 className="text-xl font-semibold lg:text-2xl">
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(
              items.reduce((total, item) => (total += item.price), 0)
            )}
          </h4>
          <button className='text-lg text-blue-500 cursor-pointer'>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
