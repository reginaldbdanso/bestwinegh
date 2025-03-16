export interface Wine {
  id: string
  name: string
  category: string
  region: string
  price: number
  rating: number
  reviews: number
  description: string
  details: {
    [key: string]: string
  }
  image: string
}

export interface CartItem {
  id: number
  name: string
  category: string
  price: number
  quantity: number
  image: string
}

