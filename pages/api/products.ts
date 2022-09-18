import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../utils/sanity'
import { productsQuery } from '../../utils/queries'

type Data = {
  products: Product[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await sanityClient.fetch(productsQuery())

  res.status(200).json(data)
}
