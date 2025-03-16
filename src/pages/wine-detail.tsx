"use client"

import { useParams, Link, useNavigate } from "react-router-dom"
import { ChevronRight, Star, Truck, ShieldCheck, ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { useEffect, useState } from "react"
import type { Wine } from "../types"
import { getWineById } from "../api/wines"

export default function WineDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [wine, setWine] = useState<Wine | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const fetchedWine = getWineById(id)
      if (fetchedWine) {
        setWine(fetchedWine)
      } else {
        navigate("/not-found")
      }
      setLoading(false)
    }
  }, [id, navigate])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!wine) {
    return <div className="container mx-auto px-4 py-8">Wine not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to="/wines" className="hover:text-foreground">
          Wines
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to={`/wines?category=${wine.category.toLowerCase().replace(" ", "-")}`} className="hover:text-foreground">
          {wine.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground">{wine.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="relative aspect-[3/4]">
            <img
              src={wine.image || "https://placehold.co/600x800"}
              alt={wine.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <Link
            to="/wines"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all wines
          </Link>

          <h1 className="text-3xl font-bold mb-2">{wine.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="ml-1 font-medium">{wine.rating}</span>
            </div>
            <span className="text-muted-foreground">({wine.reviews} reviews)</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{wine.region}</span>
          </div>

          <div className="text-3xl font-bold mb-6">${wine.price.toFixed(2)}</div>

          <div className="space-y-6 mb-8">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                Quantity
              </label>
              <div className="flex gap-4">
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Qty" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 12].map((qty) => (
                      <SelectItem key={qty} value={qty.toString()}>
                        {qty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span>Free shipping on orders over $150</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                <span>Secure payment & temperature-controlled shipping</span>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground">{wine.description}</p>
          </div>

          <Separator className="my-6" />

          <div>
            <h2 className="text-xl font-semibold mb-3">Wine Details</h2>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
              {Object.entries(wine.details).map(([key, value]) => (
                <div key={key} className="flex justify-between py-1">
                  <dt className="text-muted-foreground capitalize">{key}:</dt>
                  <dd className="font-medium text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

