import { groq } from 'next-sanity'

export const categoriesQuery = () => {
  const queries = groq`*[_type == "category"] {
        _id,
        ...
        } | order(_createdAt desc)`
  return queries
}

export const productsQuery = () => {
  const queries = groq`*[_type == "product"] {
        _id,
        ...
        } | order(_createdAt asc)`
  return queries
}
