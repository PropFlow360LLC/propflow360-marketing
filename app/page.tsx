import Hero from "../components/hero"
import PlatformPreview from "../components/platform-preview"
import Features from "../components/features"
import Pricing from "../components/pricing"
import CTA from "../components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformPreview />
      <Features />
      <Pricing />
      <CTA />
    </>
  )
}