interface Category {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'category'
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
}

interface Product extends Category {
  category: {
    _type: string
    _ref: string
  }
  price: string
  image: Image[]
}

interface Image {
  _key: string
  _type: 'image'
  asset: {
    url: string
  }
}
