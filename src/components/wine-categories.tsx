import { Link } from "react-router-dom"

const categories = [
  {
    id: "red",
    name: "Red Wines",
    description: "Bold, rich flavors from around the world",
    image: "https://placehold.co/800x600",
  },
  {
    id: "white",
    name: "White Wines",
    description: "Crisp, refreshing varieties for any occasion",
    image: "https://placehold.co/800x600",
  },
  {
    id: "sparkling",
    name: "Sparkling",
    description: "Champagne and sparkling wines for celebration",
    image: "https://placehold.co/800x600",
  },
  {
    id: "rose",
    name: "Rosé",
    description: "Elegant, versatile wines perfect for summer",
    image: "https://placehold.co/800x600",
  },
  {
    id: "natural",
    name: "Natural Wines",
    description: "Organic, biodynamic, and low-intervention wines",
    image: "https://placehold.co/800x600",
  },
  {
    id: "rare",
    name: "Rare & Limited",
    description: "Exclusive bottles and collector's editions",
    image: "https://placehold.co/800x600",
  },
]

export default function WineCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/wines?category=${category.id}`}
          className="group relative overflow-hidden rounded-lg aspect-[4/3]"
        >
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-white/80">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

