"use client"

import Link from "next/link"
import { useEffect } from "react"
import {
  Building2,
  Map,
  ClipboardCheck,
  Key,
  Wrench,
  Hammer,
  Handshake,
  User,
  FileUser
} from "lucide-react"

export default function Page() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const modules = [
    "Regions",
    "Properties",
    "Buildings",
    "Units",
    "Tenants",
    "Applications",
    "Leases",
    "Move-Ins",
    "Work Orders",
    "Vendors",
    "Inventory",
    "Reporting",
  ]

  return (
    <>
      {/* NAVBAR */}

      <header className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="PropFlow360" className="h-8 w-8" />
            <span className="font-semibold text-slate-900">PropFlow360</span>
          </div>

          <nav className="flex items-center gap-8 text-sm text-slate-700">
            <Link href="/features">Platform</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/security">Security</Link>
            <Link href="/support">Support</Link>
            <Link href="/demo">Demo</Link>

            <Link
              href="/login?demo=true"
              className="ml-4 font-semibold text-blue-700"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main>
  
      {/* HERO */}

<section className="bg-slate-50">
  <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

    <div className="max-w-xl">

      <p className="text-sm font-medium tracking-wide text-blue-600 mb-6">
        MODERN PROPERTY MANAGEMENT SOFTWARE
      </p>

      <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 mb-6">
        Modern Operating Platform
        <br />
        for Property Portfolios
      </h1>

      <p className="text-lg text-slate-600 leading-8 mb-10">
        Leasing, tenants, maintenance, vendors and reporting unified into one
        modern platform designed for property operators managing growing
        portfolios.
      </p>

      <div className="flex gap-5">
        <Link
          href="/login?demo=true"
          className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Try Interactive Demo
        </Link>

        <Link
          href="/features"
          className="border border-slate-300 px-8 py-4 rounded-lg font-semibold text-slate-700 hover:border-slate-400 transition"
        >
          Explore Platform
        </Link>
      </div>

    </div>

    <div className="flex justify-center">
      <img
        src="/propflow360-hero-conference-dashboard.jpg"
        alt="PropFlow360 platform dashboard"
        className="rounded-2xl shadow-2xl"
      />
    </div>

  </div>
</section>

        <div className="section-divider" />

{/* ROLES */}

<section className="px-8 py-24 bg-slate-50 reveal">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-3xl font-semibold mb-6">
      One platform supporting every operational role
    </h2>

    <p className="text-slate-600">
      PropFlow360 provides dedicated workflows and operational visibility
      across every team involved in managing a property portfolio.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-x-16 gap-y-6">

    <div className="flex items-center gap-3">
      <Building2 className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Corporate Operations</span>
    </div>

    <div className="flex items-center gap-3">
      <Map className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Regional Managers</span>
    </div>

    <div className="flex items-center gap-3">
      <ClipboardCheck className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Property Managers</span>
    </div>

    <div className="flex items-center gap-3">
      <Key className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Leasing Teams</span>
    </div>

    <div className="flex items-center gap-3">
      <Wrench className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Maintenance Supervisors</span>
    </div>

    <div className="flex items-center gap-3">
      <Hammer className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Maintenance Technicians</span>
    </div>

    <div className="flex items-center gap-3">
      <Handshake className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Vendors</span>
    </div>

    <div className="flex items-center gap-3">
      <User className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Tenants</span>
    </div>

    <div className="flex items-center gap-3">
      <FileUser className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">
        Applicants (Prospective Tenants)
      </span>
    </div>

  </div>
</section>

        <div className="section-divider" />

{/* MODULES */}

<section className="px-8 py-24 bg-white reveal">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-3xl font-semibold mb-6">
      Complete platform coverage across your operation
    </h2>

    <p className="text-slate-600">
      From portfolio setup to leasing, maintenance, vendors and reporting,
      PropFlow360 brings every critical workflow into one connected platform.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-x-16 gap-y-6">

    <div className="flex items-center gap-3">
      <Building2 className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Regions</span>
    </div>

    <div className="flex items-center gap-3">
      <Map className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Properties</span>
    </div>

    <div className="flex items-center gap-3">
      <ClipboardCheck className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Buildings</span>
    </div>

    <div className="flex items-center gap-3">
      <Key className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Units</span>
    </div>

    <div className="flex items-center gap-3">
      <User className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Tenants</span>
    </div>

    <div className="flex items-center gap-3">
      <FileUser className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Applications</span>
    </div>

    <div className="flex items-center gap-3">
      <ClipboardCheck className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Leases</span>
    </div>

    <div className="flex items-center gap-3">
      <Key className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Move-Ins</span>
    </div>

    <div className="flex items-center gap-3">
      <Wrench className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Work Orders</span>
    </div>

    <div className="flex items-center gap-3">
      <Handshake className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Vendors</span>
    </div>

    <div className="flex items-center gap-3">
      <Hammer className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Inventory</span>
    </div>

    <div className="flex items-center gap-3">
      <Map className="text-blue-600" size={20} />
      <span className="font-medium text-slate-900">Reporting</span>
    </div>

  </div>
</section>

        <div className="section-divider" />

        {/* SWITCHING */}

        <section className="px-8 py-24 bg-white reveal">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-semibold">
              Considering switching from a legacy system?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-6">Common frustrations</h3>

              <ul className="space-y-3 text-slate-600">
                <li>✕ Expensive onboarding fees</li>
                <li>✕ Complex pricing</li>
                <li>✕ Add-on modules</li>
                <li>✕ Outdated software</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Why operators choose PropFlow360</h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ All features included</li>
                <li>✓ Modern fast platform</li>
                <li>✓ Vendor & maintenance management</li>
                <li>✓ No onboarding fees</li>
                <li>✓ Self-service onboarding</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* SCALE */}

        <section className="px-8 py-24 bg-slate-50 reveal">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Built for modern property operators
              </h2>

              <p className="text-slate-600 leading-8">
                Designed for operators managing single properties to large
                multi-property portfolios with one modern platform built
                for visibility, efficiency and control.
              </p>
            </div>

            <div>
              <img
                src="/propflow360-real-estate-portfolio-aerial.jpg"
                alt="Real estate portfolio scale"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* SECURITY */}

        <section className="px-8 py-24 bg-white reveal">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/propflow360-platform-security-datacenter.jpg"
                alt="Enterprise security infrastructure"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Enterprise-Grade Security
              </h2>

              <p className="text-slate-600 leading-8">
                PropFlow360 is built on a secure multi-tenant architecture
                designed to support organizations managing portfolios
                ranging from a single property to thousands of units.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

       {/* PRICING */}

<section className="px-16 py-20 bg-white border-b reveal">
  <div className="max-w-7xl mx-auto">
    <div className="max-w-4xl mb-14">
      <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">
        Simple pricing based on the number of units you manage
      </h2>

      <p className="text-slate-600 text-xl">
        All features included. No add-ons. No onboarding fees.
      </p>
    </div>

    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl w-full">

        {/* SMALL */}
        <div className="bg-white border border-slate-300 rounded-[28px] p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Small
          </h3>

          <p className="text-slate-600 text-xl mb-8">
            Up to 100 units
          </p>

          <p className="text-[34px] font-semibold leading-tight text-slate-900 mb-6">
            $199 /<br />month
          </p>

          <div className="text-slate-600 text-[17px] leading-8 mb-8">
            <p>$179 / month</p>
            <p>(annual)</p>
            <p>$2,148 billed yearly</p>
            <p>Save $240 per year</p>
          </div>

          <Link
            href="/login?demo=true"
            className="inline-block bg-blue-800 text-white px-8 py-4 rounded-2xl font-medium text-xl"
          >
            Get Started
          </Link>
        </div>

        {/* MEDIUM */}
        <div className="bg-blue-800 border border-blue-800 rounded-[28px] p-8 shadow-[0_12px_30px_rgba(15,23,42,0.14)] text-center">
          <p className="text-white text-sm uppercase tracking-wide mb-4">
            Most Popular
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">
            Medium
          </h3>

          <p className="text-blue-100 text-xl mb-8">
            100 – 500 units
          </p>

          <p className="text-[34px] font-semibold leading-tight text-white mb-6">
            $499 /<br />month
          </p>

          <div className="text-blue-100 text-[17px] leading-8 mb-8">
            <p>$449 / month</p>
            <p>(annual)</p>
            <p>$5,388 billed yearly</p>
            <p>Save $600 per year</p>
          </div>

          <Link
            href="/login?demo=true"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-2xl font-medium text-xl"
          >
            Get Started
          </Link>
        </div>

        {/* LARGE */}
        <div className="bg-white border border-slate-300 rounded-[28px] p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Large
          </h3>

          <p className="text-slate-600 text-xl mb-8">
            500 – 1000 units
          </p>

          <p className="text-[34px] font-semibold leading-tight text-slate-900 mb-6">
            $899 /<br />month
          </p>

          <div className="text-slate-600 text-[17px] leading-8 mb-8">
            <p>$809 / month</p>
            <p>(annual)</p>
            <p>$9,708 billed yearly</p>
            <p>Save $1,080 per year</p>
          </div>

          <Link
            href="/login?demo=true"
            className="inline-block bg-blue-800 text-white px-8 py-4 rounded-2xl font-medium text-xl"
          >
            Get Started
          </Link>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-white border border-slate-300 rounded-[28px] p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Enterprise
          </h3>

          <p className="text-slate-600 text-xl mb-8">
            1000+ units
          </p>

          <p className="text-[34px] font-semibold leading-tight text-slate-900 mb-6">
            $1,499 /<br />month
          </p>

          <div className="text-slate-600 text-[17px] leading-8 mb-8">
            <p>$1,349 / month</p>
            <p>(annual)</p>
            <p>$16,188 billed yearly</p>
            <p>Save $1,800 per year</p>
          </div>

          <Link
            href="/login?demo=true"
            className="inline-block bg-blue-800 text-white px-8 py-4 rounded-2xl font-medium text-xl"
          >
            Get Started
          </Link>
        </div>

      </div>
    </div>

    <div className="mt-12 text-slate-600 text-[17px] leading-8 max-w-6xl mx-auto text-center">
      Plans are billed monthly or annually. Annual plans receive a 10% discount.
      Subscriptions require a 12-month agreement and renew automatically unless
      cancelled prior to renewal.
    </div>
  </div>
</section>

      </main>

      {/* FOOTER */}

      <footer className="bg-slate-900 text-slate-300 px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white font-semibold mb-4">PropFlow360</h3>
            <p className="text-sm mb-6">
              Modern property management software designed to streamline operations.
            </p>

            <Link
              href="/login?demo=true"
              className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm"
            >
              Try Interactive Demo
            </Link>
          </div>

          <div>
            <h4 className="text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features">Platform Overview</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/demo">Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-sm text-center">
          © {new Date().getFullYear()} PropFlow360. All rights reserved.
        </div>
      </footer>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity .8s ease, transform .8s ease;
        }

        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .section-divider {
  height: 80px;
  position: relative;
}

.section-divider {
  height: 60px;
  position: relative;
}

.section-divider::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 50%;
  max-width: 520px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #2563eb,
    transparent
  );
  opacity: 0.55;
}

      `}</style>
    </>
  )
}