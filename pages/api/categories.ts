import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../utils/sanity'
import { categoriesQuery } from '../../utils/queries'

type Data = {
  categories: Category[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await sanityClient.fetch(categoriesQuery())

  res.status(200).json(data)
}
