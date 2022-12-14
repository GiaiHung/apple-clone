import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

interface Props {
  providers: any
}

function Login({ providers }: Props) {
  return (
    <>
      <Head>
        <title>Apple Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col items-center justify-center space-y-6">
        <div className="relative h-36 w-36">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button
              className="cursor-pointer rounded-2xl bg-blue-500 py-4 px-6 text-white opacity-75 transition hover:opacity-100"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with Google
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default Login
