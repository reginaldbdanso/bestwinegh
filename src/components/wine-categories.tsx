import { Link } from "react-router-dom"

const categories = [
  {
    id: "red",
    name: "Red Wines",
    description: "Bold, rich flavors from around the world",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
  },
  {
    id: "white",
    name: "White Wines",
    description: "Crisp, refreshing varieties for any occasion",
    image: "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?auto=format&fit=crop&q=80",
  },
  {
    id: "sparkling",
    name: "Sparkling",
    description: "Champagne and sparkling wines for celebration",
    image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&q=80",
  },
  {
    id: "rose",
    name: "Rosé",
    description: "Elegant, versatile wines perfect for summer",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80",
  },
  {
    id: "natural",
    name: "Natural Wines",
    description: "Organic, biodynamic, and low-intervention wines",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80",
  },
  {
    id: "rare",
    name: "Rare & Limited",
    description: "Exclusive bottles and collector's editions",
    image: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&q=80",
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
            src={category.image}
            alt={`${category.name} - ${category.description}`}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
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