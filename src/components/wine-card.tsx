import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import type { Wine } from "../types"
import { useCart } from "../contexts/cart-context"
import { useToast } from "../hooks/use-toast"
import { convertToGHS, formatGHSPrice, formatUSDPrice } from "../lib/currency"

interface WineCardProps {
  wine: Wine
}

export default function WineCard({ wine }: WineCardProps) {
  const { state, addToCart, updateQuantity } = useCart()
  const { toast } = useToast()

  const cartItem = state.items.find(item => item.id === wine.id)

  const handleAddToCart = () => {
    addToCart(wine)
    toast({
      title: "Added to cart",
      description: `${wine.name} has been added to your cart`
    })
  }

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(wine.id, newQuantity)
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
        <div className="space-y-1">
          <div className="font-bold">{formatGHSPrice(convertToGHS(wine.price))}</div>
          <div className="text-sm text-muted-foreground">{formatUSDPrice(wine.price)}</div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {cartItem ? (
          <div className="flex items-center gap-2 w-full">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex-1 text-center">{cartItem.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button className="w-full gap-2" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}