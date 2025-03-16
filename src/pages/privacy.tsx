export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto prose">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-muted-foreground">
          Last updated: March 15, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            Bestwinesgh ("we," "our," or "us") respects your privacy and is committed to protecting your
            personal data. This privacy policy explains how we collect, use, and protect your information
            when you use our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">We collect information that you provide directly to us:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and contact information</li>
              <li>Delivery address</li>
              <li>Payment information</li>
              <li>Date of birth (for age verification)</li>
              <li>Account preferences</li>
              <li>Order history</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about orders and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and maintain security</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold
            certain information. Cookies are files with small amounts of data which may include an
            anonymous unique identifier.
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">Types of cookies we use:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for targeted advertising</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="text-muted-foreground mb-4">
            We share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Payment processors to complete transactions</li>
            <li>Delivery partners to fulfill orders</li>
            <li>Analytics providers to improve our services</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
            <li>Withdraw consent for marketing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized or unlawful processing, accidental loss, destruction, or damage. These
            measures include encryption, firewalls, and secure server facilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this privacy policy from time to time. We will notify you of any changes by
            posting the new privacy policy on this page and updating the "Last updated" date at the top
            of this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this privacy policy or our practices, please contact us at:
          </p>
          <ul className="list-none pl-0 space-y-2 text-muted-foreground">
            <li>Email: privacy@bestwinesgh.com</li>
            <li>Phone: (233) 123-4567</li>
            <li>Address: 123 Wine Lane, Bawaleshie, Accra, Ghana</li>
          </ul>
        </section>
      </div>
    </div>
  )
}