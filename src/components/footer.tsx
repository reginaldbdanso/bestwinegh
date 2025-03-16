import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import logoImage from "../assets/logo.png"


export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <Wine className="h-6 w-6" /> */}
               
              <img 
                src={logoImage} 
                alt="Bestwinesgh Logo - Premium Wine Shop" 
                className="h-10 w-auto object-contain"
                width={40}
                height={40}
              />
             
              <span className="font-bold text-xl">Bestwinesgh</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Curated selection of fine wines from around the world, delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/wines?category=red"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Red Wines
                </Link>
              </li>
              <li>
                <Link
                  to="/wines?category=white"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  White Wines
                </Link>
              </li>
              <li>
                <Link
                  to="/wines?category=sparkling"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sparkling
                </Link>
              </li>
              <li>
                <Link
                  to="/wines?category=rose"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rosé
                </Link>
              </li>
              <li>
                <Link
                  to="/wines?category=natural"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Natural Wines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">123 Wine Lane, Bawaleshie, Accra GH</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-muted-foreground">(233) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-muted-foreground">info@bestwinesgh.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bestwinesgh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

