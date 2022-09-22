import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import { selectBasket } from '../redux/slices/basketSlice'
import { useSelector } from 'react-redux'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session }: any = useSession()

  const items = useSelector(selectBasket)

  return (
    <header className="sticky top-0 z-40 flex min-w-full items-center justify-between bg-[#e7ecee] p-4 px-6">
      {/* Header left */}
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image src="https://rb.gy/vsvv2o" alt="" layout="fill" objectFit="contain" priority />
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
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 z-50 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white lg:text-sm">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={session?.user?.image}
            alt=""
            width={34}
            height={34}
            className="rounded-full cursor-pointer"
            objectFit="contain"
            onClick={() => signOut()}
          />
        ) : (
          <div>
            <UserIcon className="headerIcon" onClick={() => signIn()} />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
