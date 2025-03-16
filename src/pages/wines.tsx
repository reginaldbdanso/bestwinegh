"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import type { Wine } from "../types"
import { getAllWines } from "../api/wines"
import WineCard from "../components/wine-card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function WinesPage() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [wines, setWines] = useState<Wine[]>([])
  const [filteredWines, setFilteredWines] = useState<Wine[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
  const [sortBy, setSortBy] = useState("featured")

  useEffect(() => {
    // In a real app, this would be an API call with filters
    const fetchedWines = getAllWines()
    setWines(fetchedWines)
    setFilteredWines(fetchedWines)
  }, [])

  useEffect(() => {
    let result = [...wines]

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((wine) => wine.category.toLowerCase().replace(" ", "-") === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (wine) => wine.name.toLowerCase().includes(term) || wine.region.toLowerCase().includes(term),
      )
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      // Default is "featured" - no sorting needed
    }

    setFilteredWines(result)
  }, [wines, selectedCategory, searchTerm, sortBy])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Wines</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search wines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="red">Red Wines</SelectItem>
              <SelectItem value="white">White Wines</SelectItem>
              <SelectItem value="sparkling">Sparkling</SelectItem>
              <SelectItem value="rose">Rosé</SelectItem>
              <SelectItem value="natural">Natural Wines</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredWines.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No wines found</h2>
          <p className="text-muted-foreground mb-6">Try adjusting your filters or search term.</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("all")
              setSortBy("featured")
            }}
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      )}
    </div>
  )
}

