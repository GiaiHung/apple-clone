import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
  const session = false
  return (
    <header className="sticky top-0 z-40 flex min-w-full items-center justify-between bg-[#e7ecee] p-4 px-6">
      {/* Header left */}
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image src="https://rb.gy/vsvv2o" alt="" layout="fill" objectFit="contain" />
          </div>
        </Link>
      </div>

      {/* Header center */}
      <div className="hidden flex-1 items-center justify-center gap-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>

      {/* Header right */}
      <div className="flex items-center justify-center gap-x-8 md:w-1/5">
        <div>
          <SearchIcon className="headerIcon" />
        </div>
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -top-1 -right-1 z-50 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white lg:text-sm">
              5
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src=""
            alt=""
            width={34}
            height={34}
            className="rounded-full"
            objectFit="contain"
          />
        ) : (
          <div>
            <UserIcon className="headerIcon" />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
