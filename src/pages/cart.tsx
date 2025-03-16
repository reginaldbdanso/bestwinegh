import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Input } from "../components/ui/input"
import { useCart } from "../contexts/cart-context"
import { convertToGHS, formatGHSPrice, formatUSDPrice } from "../lib/currency"

export default function CartPage() {
  const { state, updateQuantity, removeFromCart } = useCart()
  const { items: cartItems } = state

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
  }

  const subtotalUSD = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const subtotalGHS = convertToGHS(subtotalUSD)
  const shipping = subtotalGHS > 2000 ? 0 : 200 // Free shipping over GH₵ 2000
  const total = subtotalGHS + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any wines to your cart yet.</p>
          <Button asChild>
            <Link to="/wines">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 border-b last:border-0"
                    >
                      <div className="relative h-24 w-20 bg-muted rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <div className="space-y-1 mt-1">
                          <div className="font-bold">{formatGHSPrice(convertToGHS(item.price))}</div>
                          <div className="text-sm text-muted-foreground">{formatUSDPrice(item.price)}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <div className="font-bold">{formatGHSPrice(convertToGHS(item.price * item.quantity))}</div>
                        <div className="text-sm text-muted-foreground">{formatUSDPrice(item.price * item.quantity)}</div>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <div>
                      <div>{formatGHSPrice(subtotalGHS)}</div>
                      <div className="text-sm text-muted-foreground">{formatUSDPrice(subtotalUSD)}</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatGHSPrice(shipping)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <div>
                      <div>{formatGHSPrice(total)}</div>
                      <div className="text-sm text-muted-foreground">{formatUSDPrice(total / convertToGHS(1))}</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6">Proceed to Checkout</Button>

                <div className="mt-6">
                  <div className="text-sm font-medium mb-2">Promo Code</div>
                  <div className="flex gap-2">
                    <Input placeholder="Enter code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              <p>Free shipping on orders over GH₵ 2,000</p>
              <p>Need help? Call us at (233) 123-4567</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}