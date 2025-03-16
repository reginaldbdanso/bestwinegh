import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"
import type { Wine } from "../types"
import { useCart } from "../contexts/cart-context"
import { useToast } from "../hooks/use-toast"

interface WineCardProps {
  wine: Wine
}

export default function WineCard({ wine }: WineCardProps) {
  const { state, dispatch } = useCart()
  const { toast } = useToast()

  const addToCart = () => {
    const existingItem = state.items.find(item => item.id === wine.id)
    
    if (existingItem) {
      dispatch({ 
        type: 'UPDATE_QUANTITY', 
        payload: { 
          id: Number(wine.id), 
          quantity: existingItem.quantity + 1 
        } 
      })
    } else {
      dispatch({
        type: 'ADD_ITEM',
        payload: { ...wine }
      })
    }

    toast({
      title: "Added to cart",
      description: `${wine.name} has been added to your cart`
    })
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/wines/${wine.id}`}>
        <div className="aspect-[3/4] relative overflow-hidden bg-muted">
          <img
            src={wine.image || "https://placehold.co/300x400"}
            alt={wine.name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{wine.category}</div>
        <Link to={`/wines/${wine.id}`} className="hover:underline">
          <h3 className="font-medium text-lg mb-1">{wine.name}</h3>
        </Link>
        <div className="text-sm text-muted-foreground mb-2">{wine.region}</div>
        <div className="font-bold">${wine.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" onClick={addToCart}>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

