import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { useToast } from "../hooks/use-toast"

const faqCategories = [
  {
    id: "products",
    title: "Products & Services",
    questions: [
      {
        q: "What types of wines do you offer?",
        a: "We offer a comprehensive selection of wines including red, white, rosé, sparkling, and natural wines from renowned wine regions worldwide. Our collection ranges from everyday drinking wines to rare and premium bottles."
      },
      {
        q: "How do you store your wines?",
        a: "All our wines are stored in temperature-controlled facilities at optimal conditions (13-15°C for reds, 11-13°C for whites and sparkling). Our storage facilities are monitored 24/7 to ensure perfect preservation."
      },
      {
        q: "Do you offer wine tasting sessions?",
        a: "Yes, we regularly host wine tasting events at our stores. These events range from introductory sessions to specialized tastings focusing on specific regions or varietals. Check our events calendar for upcoming tastings."
      },
      {
        q: "Can you help me choose a wine?",
        a: "Absolutely! Our experienced sommeliers are available in-store and online to help you select the perfect wine based on your preferences, occasion, and budget. You can also use our online wine finder tool."
      },
      {
        q: "Do you sell wine accessories?",
        a: "Yes, we carry a curated selection of wine accessories including decanters, wine glasses, corkscrews, preservation systems, and storage solutions."
      },
      {
        q: "What is your vintage guarantee?",
        a: "We guarantee the authenticity and provenance of all our wines. If a specific vintage is advertised, that is exactly what you'll receive."
      }
    ]
  },
  {
    id: "orders",
    title: "Orders & Delivery",
    questions: [
      {
        q: "What are your delivery areas?",
        a: "We offer delivery throughout Greater Accra with same-day service available in select areas. We also ship nationwide to major cities within 3-5 business days."
      },
      {
        q: "How do I track my order?",
        a: "Once your order is dispatched, you'll receive a tracking number via email and SMS. You can track your delivery status through our website or mobile app."
      },
      {
        q: "What is the minimum order value?",
        a: "The minimum order value for delivery is GH₵200. Orders above GH₵500 qualify for free delivery within Accra."
      },
      {
        q: "How are the wines packaged for delivery?",
        a: "We use specialized wine shipping boxes with protective inserts to ensure safe transit. For temperature-sensitive wines, we use thermal packaging and temperature-controlled vehicles."
      },
      {
        q: "Can I specify a delivery time?",
        a: "Yes, you can select your preferred delivery time slot during checkout. We offer morning (10am-1pm) and afternoon (2pm-6pm) slots."
      },
      {
        q: "What if I'm not home for delivery?",
        a: "Our delivery team will contact you before arrival. If you're unavailable, we can either reschedule or deliver to an alternative address provided the recipient is over 18."
      }
    ]
  },
  {
    id: "payment",
    title: "Payment & Billing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards, mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and cash on delivery for orders under GH₵1000."
      },
      {
        q: "Is online payment secure?",
        a: "Yes, all online payments are processed through secure payment gateways with SSL encryption. We never store your complete card details."
      },
      {
        q: "When is payment taken?",
        a: "For online orders, payment is taken at the time of purchase. For phone orders, payment is taken when the order is confirmed."
      },
      {
        q: "Do you offer corporate billing?",
        a: "Yes, we offer corporate accounts with monthly billing options. Please contact our business team for more information."
      }
    ]
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns of unopened bottles within 30 days of purchase. The wine must be in its original condition and packaging."
      },
      {
        q: "How do I return a faulty wine?",
        a: "If you believe a wine is faulty (corked, oxidized, etc.), contact us within 48 hours of delivery. We'll arrange collection and provide a replacement or refund."
      },
      {
        q: "How long do refunds take?",
        a: "Refunds are processed within 3-5 business days of receiving the returned product. The time it takes for the refund to appear in your account depends on your payment method."
      }
    ]
  },
  {
    id: "account",
    title: "Account Management",
    questions: [
      {
        q: "How do I create an account?",
        a: "You can create an account by clicking the 'Account' icon in the top right corner of our website and selecting 'Register'. You'll need to provide your email, create a password, and verify your age."
      },
      {
        q: "Can I save my preferences?",
        a: "Yes, logged-in users can save their wine preferences, delivery addresses, and payment methods for faster checkout."
      },
      {
        q: "How do I update my details?",
        a: "Log into your account and go to 'Account Settings' to update your personal information, delivery addresses, and communication preferences."
      }
    ]
  },
  {
    id: "support",
    title: "Technical Support",
    questions: [
      {
        q: "The website isn't working properly. What should I do?",
        a: "Try clearing your browser cache and cookies, or use a different browser. If problems persist, contact our technical support team."
      },
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page. We'll send you an email with instructions to reset your password."
      },
      {
        q: "Is your website mobile-friendly?",
        a: "Yes, our website is fully responsive and optimized for all devices including smartphones and tablets."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { toast } = useToast()

  const handleFeedback = (helpful: boolean) => {
    toast({
      title: "Thank you for your feedback!",
      description: helpful ? "We're glad this was helpful." : "We'll work on improving this answer.",
    })
  }

  // Filter questions based on search term
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        {/* Search */}
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <section key={category.id}>
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          {faq.a}
                        </p>
                        <div className="flex items-center gap-4">
                          <p className="text-sm text-muted-foreground">Was this helpful?</p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Yes
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4 mr-2" />
                            No
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="mt-12 p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our customer service team is here to help.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Call us:</p>
              <p className="text-muted-foreground">(233) 123-4567 (Mon-Sat, 9am-6pm)</p>
            </div>
            <div>
              <p className="font-medium">Email us:</p>
              <p className="text-muted-foreground">support@bestwinesgh.com</p>
            </div>
            <div>
              <p className="font-medium">Visit us:</p>
              <p className="text-muted-foreground">123 Wine Lane, Bawaleshie, Accra</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}