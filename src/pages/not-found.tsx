import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Wine } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <Wine className="h-16 w-16 mx-auto text-primary mb-4" />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild>
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  )
}

