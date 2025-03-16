import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"
import type { Wine } from "../types"

interface WineCardProps {
  wine: Wine
}

export default function WineCard({ wine }: WineCardProps) {
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
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

