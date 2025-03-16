import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"
import { useToast } from "../hooks/use-toast"

const departments = [
  { value: "general", label: "General Inquiry" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Customer Support" },
  { value: "wholesale", label: "Wholesale" },
  { value: "events", label: "Events & Tastings" }
]

const locations = [
  {
    name: "Main Store - Bawaleshie",
    address: "123 Wine Lane, Bawaleshie, Accra",
    phone: "(233) 123-4567",
    email: "bawaleshie@bestwinesgh.com",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9735392908207!2d-0.1746384!3d5.6037419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuNyJOIDDCsDEwJzI4LjciVw!5e0!3m2!1sen!2sgh!4v1635789012345!5m2!1sen!2sgh"
  },
  {
    name: "Airport Residential",
    address: "45 Aviation Road, Airport Residential, Accra",
    phone: "(233) 123-4568",
    email: "airport@bestwinesgh.com",
    hours: "Mon-Sat: 11am-9pm, Sun: 12pm-7pm",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8901234567891!2d-0.1834567!3d5.6123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnNDQuNCJOIDDCsDEwJzU2LjQiVw!5e0!3m2!1sen!2sgh!4v1635789012346!5m2!1sen!2sgh"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
    preferredContact: "email"
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this to your API
    console.log("Form submitted:", formData)

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      subject: "",
      message: "",
      preferredContact: "email"
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-center text-muted-foreground mb-8">
          We're here to help! Whether you have questions about our wines, need assistance with an order,
          or want to learn more about our services, our team is ready to assist you.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="icon" asChild>
            <a href="https://facebook.com/bestwinesgh" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://instagram.com/bestwinesgh" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://twitter.com/bestwinesgh" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        </div>

        {/* Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {locations.map((location) => (
            <div key={location.name} className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">{location.name}</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>{location.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>{location.hours}</span>
                </div>
              </div>
              <div className="mt-4 aspect-video rounded-md overflow-hidden">
                <iframe
                  src={location.maps}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${location.name} location`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="department" className="text-sm font-medium">
                  Department *
                </label>
                <Select
                  value={formData.department}
                  onValueChange={(value) => setFormData({ ...formData, department: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value}>
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Contact Method *</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                    className="rounded-full"
                  />
                  Email
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                    className="rounded-full"
                  />
                  Phone
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full">Send Message</Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            We aim to respond to all inquiries within 24 hours during business days.
            For urgent matters, please call our customer service line at (233) 123-4567.
          </p>
        </div>
      </div>
    </div>
  )
}