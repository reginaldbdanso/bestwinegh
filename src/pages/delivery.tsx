import { Truck, Package, RefreshCw, Clock, Shield } from "lucide-react"

const deliveryOptions = [
  {
    name: "Standard Delivery",
    time: "2-3 business days",
    fee: "Free for orders over GH₵500",
    description: "Available within Accra and surrounding areas"
  },
  {
    name: "Express Delivery",
    time: "Same day or next day",
    fee: "GH₵50",
    description: "Order by 2 PM for same-day delivery in Accra"
  },
  {
    name: "Nationwide Shipping",
    time: "3-5 business days",
    fee: "Calculated at checkout",
    description: "Available to all major cities in Ghana"
  }
]

export default function DeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Delivery Information</h1>

        {/* Delivery Promise */}
        <section className="mb-12">
          <p className="text-muted-foreground mb-6">
            At Bestwinesgh, we understand that proper wine handling is crucial. Our temperature-controlled
            vehicles and professional delivery team ensure your wines arrive in perfect condition.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Safe & Secure</h3>
                <p className="text-sm text-muted-foreground">
                  Temperature-controlled vehicles and professional handling
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Flexible Timing</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred delivery time slot
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Delivery Options</h2>
          <div className="grid gap-6">
            {deliveryOptions.map((option) => (
              <div key={option.name} className="border rounded-lg p-6">
                <h3 className="font-medium text-lg mb-2">{option.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Delivery Time: {option.time}</p>
                  <p>Fee: {option.fee}</p>
                  <p>{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Area */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Service Area Coverage</h2>
          <div className="prose text-muted-foreground">
            <p className="mb-4">
              We currently offer delivery services to the following areas:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Greater Accra Region (Same-day delivery available)</li>
              <li>Tema and surrounding areas</li>
              <li>Kumasi metropolitan area</li>
              <li>Takoradi-Sekondi</li>
              <li>Cape Coast</li>
              <li>Other major cities (3-5 business days)</li>
            </ul>
            <p>
              For areas not listed, please contact our customer service team to discuss delivery options.
            </p>
          </div>
        </section>

        {/* Policies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Delivery Policies</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Minimum Orders</h3>
              <p className="text-muted-foreground">
                Minimum order value of GH₵200 for delivery. Free delivery on orders above GH₵500 within Accra.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Delivery Confirmation</h3>
              <p className="text-muted-foreground">
                All deliveries require signature by someone 18 years or older with valid ID.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Rescheduling</h3>
              <p className="text-muted-foreground">
                Delivery can be rescheduled up to 24 hours before the scheduled time at no extra cost.
              </p>
            </div>
          </div>
        </section>

        {/* Returns Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Returns & Refunds</h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              We want you to be completely satisfied with your purchase. If you're not happy with your
              order, here's what you need to know:
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Package className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Unopened Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Return unopened bottles within 30 days for a full refund
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <RefreshCw className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Faulty Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Corked or faulty wines can be returned for replacement or refund
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Truck className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Return Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact our customer service team to arrange collection of returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}