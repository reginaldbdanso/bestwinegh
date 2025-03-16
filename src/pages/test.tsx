import { Button } from "../components/ui/button"

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">If you can see this page with styling, the basic setup is working.</p>
      <Button>Test Button</Button>
    </div>
  )
}

