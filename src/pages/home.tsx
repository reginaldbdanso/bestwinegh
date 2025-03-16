// import { Link } from "react-router-dom"
import HeroCarousel from "../components/hero-carousel"
import FeaturedWines from "../components/featured-wines"
import WineCategories from "../components/wine-categories"
import Newsletter from "../components/newsletter"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section>
        <HeroCarousel />
      </section>

      {/* Rest of your sections remain unchanged */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Wines</h2>
          <FeaturedWines />
        </div>
      </section>

      {/* Wine Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <WineCategories />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </div>
  )
}