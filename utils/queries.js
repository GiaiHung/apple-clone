export const categoriesQuery = () => {
  const queries = groq`*[_type == "category"] {
        _id,
          ...
        }`
  return queries
}
