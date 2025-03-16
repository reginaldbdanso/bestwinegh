"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Wine, ShoppingCart, Search, Menu, X, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Badge } from "./ui/badge"
import { useMobile } from "../hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  // Active link helper
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link
                      to="/"
                      className={`text-lg font-medium px-2 py-1 transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
                    >
                      Home
                    </Link>
                    <Link
                      to="/wines"
                      className={`text-lg font-medium px-2 py-1 transition-colors ${isActive("/wines") ? "text-primary" : "hover:text-primary"}`}
                    >
                      Shop
                    </Link>
                    <Link
                      to="/about"
                      className={`text-lg font-medium px-2 py-1 transition-colors ${isActive("/about") ? "text-primary" : "hover:text-primary"}`}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className={`text-lg font-medium px-2 py-1 transition-colors ${isActive("/contact") ? "text-primary" : "hover:text-primary"}`}
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            )}

            <Link to="/" className="flex items-center gap-2">
              <Wine className="h-6 w-6" />
              <span className="font-bold text-xl">Vineyard Selections</span>
            </Link>
          </div>

          {!isMobile && (
            <nav className="mx-6 flex items-center space-x-6">
              <Link
                to="/"
                className={`font-medium transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
              >
                Home
              </Link>
              <Link
                to="/wines"
                className={`font-medium transition-colors ${isActive("/wines") ? "text-primary" : "hover:text-primary"}`}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${isActive("/about") ? "text-primary" : "hover:text-primary"}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${isActive("/contact") ? "text-primary" : "hover:text-primary"}`}
              >
                Contact
              </Link>
            </nav>
          )}

          <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input type="search" placeholder="Search wines..." className="w-[200px] md:w-[300px]" autoFocus />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/account">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="relative" asChild>
                  <Link to="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
                    <span className="sr-only">Cart</span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

