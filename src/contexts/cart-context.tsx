import { createContext, useContext, useReducer, ReactNode } from 'react'
import type { Wine } from '../types'

type CartItem = Wine & { quantity: number }

type CartState = {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Wine }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          Number(item.id) === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => Number(item.id) !== action.payload.id),
      }
    default:
      return state
  }
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}