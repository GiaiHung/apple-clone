import { ShoppingBagIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasket } from '../redux/slices/basketSlice'

function Basket() {
  const items = useSelector(selectBasket)

  return (
    <>
      {items.length > 0 && (
        <Link href='/checkout'>
            <div className="fixed bottom-10 right-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 z-50">
              <span className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white flex items-center justify-center">
                {items.length}
              </span>
              <ShoppingBagIcon className="headerLink h-8 w-8 text-gray-700" />
            </div>
        </Link>
      )}
    </>
  )
}

export default Basket
