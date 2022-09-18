import { Tab } from '@headlessui/react'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Product from '../components/Product'

interface Props {
  categories: Category[]
  products: Product[]
}

const Home = ({ categories, products }: Props) => {
  const showProducts = (index: number) => {
    return products
      .filter((product) => product.category._ref === categories[index]._id)
      .map((product) => <Product key={product._id} product={product} />)
  }

  return (
    <>
      <Head>
        <title>Apple Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#e7ecee]">
        <Banner />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#181818]">
        <div className="space-y-10 py-16">
          <h1 className="ld:text-5xl text-center text-4xl text-white">New promotions</h1>
        </div>

        <Tab.Group>
          <Tab.List className="flex justify-center">
            {categories.map((category) => (
              <Tab
                key={category._id}
                id={category._id}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? 'borderGradient bg-[#35383C] text-white'
                      : 'border-b-2 border-[#35383C] text-[#747474]'
                  }`
                }
              >
                {category.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
            <Tab.Panel className="tabPanels">{showProducts(0)}</Tab.Panel>
            <Tab.Panel className="tabPanels">{showProducts(1)}</Tab.Panel>
            <Tab.Panel className="tabPanels">{showProducts(2)}</Tab.Panel>
            <Tab.Panel className="tabPanels">{showProducts(3)}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`)
  const { data: products } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)

  return {
    props: {
      categories,
      products,
    },
  }
}

export default Home
