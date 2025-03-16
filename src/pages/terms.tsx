export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto prose">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <p className="text-muted-foreground">
          Last updated: March 15, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using bestwinesgh.com ("the Website"), you agree to be bound by these Terms
            and Conditions. If you disagree with any part of these terms, you may not access the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Age Restriction</h2>
          <p className="text-muted-foreground">
            You must be at least 18 years old to use our services and purchase products from our Website.
            By using our services, you represent and warrant that you are at least 18 years old.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              When you create an account with us, you must provide accurate, complete, and current
              information. Failure to do so constitutes a breach of the Terms, which may result in
              immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Website and
              for any activities or actions under your password.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Products and Pricing</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              All products are subject to availability. We reserve the right to discontinue any product
              at any time and to change prices without notice.
            </p>
            <p>
              While we strive to ensure all information on our Website is accurate, occasionally there
              may be errors in product descriptions or pricing. We reserve the right to correct any
              errors and to change or update information at any time without prior notice.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Orders and Payment</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              By placing an order, you warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are legally capable of entering into binding contracts</li>
              <li>You are at least 18 years old</li>
              <li>You are authorized to use the payment method provided</li>
            </ul>
            <p>
              We reserve the right to refuse any order you place with us. Payment must be made in full
              at the time of ordering.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Delivery</h2>
          <p className="text-muted-foreground">
            Delivery times are estimates only. We are not liable for any delays in delivery. Risk of
            loss and title for items purchased pass to you upon delivery of the items to the carrier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our returns policy allows you to return unopened products within 30 days of delivery.
              Products must be in their original condition and packaging.
            </p>
            <p>
              Refunds will be processed using the original payment method within 14 days of receiving
              the returned product.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
          <p className="text-muted-foreground">
            The Website and its original content, features, and functionality are owned by Bestwinesgh
            and are protected by international copyright, trademark, patent, trade secret, and other
            intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            In no event shall Bestwinesgh, nor its directors, employees, partners, agents, suppliers, or
            affiliates, be liable for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the Website or our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p className="text-muted-foreground">
            We may terminate or suspend your account immediately, without prior notice or liability, for
            any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify or replace these Terms at any time. Changes will be effective
            immediately upon posting to the Website. Your continued use of the Website following any
            changes indicates your acceptance of such changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
          <p className="text-muted-foreground">
            Questions about the Terms should be sent to us at:
          </p>
          <ul className="list-none pl-0 space-y-2 text-muted-foreground">
            <li>Email: legal@bestwinesgh.com</li>
            <li>Phone: (233) 123-4567</li>
            <li>Address: 123 Wine Lane, Bawaleshie, Accra, Ghana</li>
          </ul>
        </section>
      </div>
    </div>
  )
}