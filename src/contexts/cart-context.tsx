import { createContext, useContext, useState, ReactNode } from 'react'

type CartItem = {
  id: number
  name: string
  category: string
  price: number
  quantity: number
  image: string
}

type CartContextType = {
  items: CartItem[]
  setItems: (items: CartItem[]) => void
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, setItems, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}