import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="py-20">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Earn rewards by promoting content
            </h1>
            <p className="text-lg text-gray-600">
              Join thousands of users earning rewards by watching ads and promoting content.
              Start earning today!
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link to="/register?role=user">Start Earning</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Amplify your brand's reach
            </h2>
            <p className="text-lg text-gray-600">
              Connect with engaged promoters and boost your social media presence.
              Create campaigns that convert.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register?role=brand">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}