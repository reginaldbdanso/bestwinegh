import { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Red Wine",
    description: "Bold and sophisticated reds from world-renowned vineyards",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
    link: "/wines?category=red"
  },
  {
    title: "White Wine",
    description: "Crisp and refreshing whites for every occasion",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80",
    link: "/wines?category=white"
  },
  {
    title: "Sparkling Wine",
    description: "Celebrate life's moments with our finest bubbles",
    image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&q=80",
    link: "/wines?category=sparkling"
  },
  {
    title: "Rosé Wine",
    description: "Elegant and versatile rosés for the perfect summer day",
    image: "https://images.unsplash.com/photo-1558346489-19413928158b?auto=format&fit=crop&q=80",
    link: "/wines?category=rose"
  }
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30,
    dragFree: true
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // Change slide every 5 seconds

    // Pause autoplay on hover
    const onPointerDown = () => clearInterval(autoplay)
    const onPointerUp = () => {
      clearInterval(autoplay)
      autoplay
    }

    emblaApi.on('pointerDown', onPointerDown)
    emblaApi.on('pointerUp', onPointerUp)

    return () => {
      clearInterval(autoplay)
      if (emblaApi) {
        emblaApi.off('pointerDown', onPointerDown)
        emblaApi.off('pointerUp', onPointerUp)
      }
    }
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-[0_0_100%] min-w-0">
            <div 
              className="relative h-[70vh] bg-cover bg-center transition-transform duration-500"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center 30%'
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 max-w-xl mb-8 animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 transition-all duration-300" 
                    asChild
                  >
                    <Link to={slide.link}>Explore Collection</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 transition-all duration-300"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 transition-all duration-300"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}