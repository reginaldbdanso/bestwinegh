import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

const teamMembers = [
  {
    name: "David Mensah",
    title: "Founder & CEO",
    bio: "With over 15 years in the wine industry and WSET Level 4 Diploma, David brings extensive expertise in wine selection and international wine trade.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Addo",
    title: "Head Sommelier",
    bio: "A certified sommelier with experience at prestigious establishments in France and South Africa, Sarah leads our wine curation and tasting programs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Michael Owusu",
    title: "Operations Director",
    bio: "Michael oversees our state-of-the-art storage facility and ensures perfect handling and delivery of every bottle.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  }
]

const culturePhotos = [
  {
    url: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800&h=600&fit=crop",
    caption: "Our temperature-controlled wine storage facility ensures perfect preservation"
  },
  {
    url: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800&h=600&fit=crop",
    caption: "Weekly wine tasting sessions for our team's continuous education"
  },
  {
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    caption: "Carefully curated selection process for our wine collection"
  },
  {
    url: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=800&h=600&fit=crop",
    caption: "Supporting local wine education and appreciation events"
  }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Bestwinesgh</h1>

        {/* Company Story */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2020, Bestwinesgh emerged from a passion for bringing exceptional wines to Ghana's
            growing wine enthusiast community. What began as a boutique wine shop in Bawaleshie has evolved
            into Ghana's premier destination for fine wines, serving both connoisseurs and newcomers to the
            world of wine.
          </p>
          <p className="text-muted-foreground mb-4">
            Our journey has been marked by significant milestones, including the opening of our
            state-of-the-art storage facility in 2021, launching Ghana's first temperature-controlled wine
            delivery service in 2022, and establishing partnerships with renowned vineyards across the globe.
            Today, we pride ourselves on offering an unparalleled selection of wines, expert guidance, and
            premium service to our valued customers.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Mission & Values</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To cultivate wine appreciation in Ghana by providing access to exceptional wines, expert
              knowledge, and outstanding service, while building lasting relationships with our customers
              and partners.
            </p>
          </div>

          <h3 className="text-xl font-medium mb-4">Core Values</h3>
          <div className="grid gap-6">
            <div>
              <h4 className="font-medium mb-2">Excellence</h4>
              <p className="text-muted-foreground">
                We maintain the highest standards in wine selection, storage, and service.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Education</h4>
              <p className="text-muted-foreground">
                We believe in sharing knowledge and fostering wine appreciation through education.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Integrity</h4>
              <p className="text-muted-foreground">
                We operate with transparency and honesty in all our dealings.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Innovation</h4>
              <p className="text-muted-foreground">
                We continuously improve our services and embrace new technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Photos */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Culture</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {culturePhotos.map((photo) => (
              <div key={photo.caption} className="rounded-lg overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full aspect-video object-cover mb-2"
                />
                <p className="text-sm text-muted-foreground">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Experience the Difference</h2>
          <p className="text-muted-foreground mb-6">
            Visit our shop or browse our collection online to discover your next favorite wine.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/wines">Shop Collection</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}