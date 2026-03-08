export default function Pricing() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-12">
          Simple Transparent Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-3xl font-bold mt-4">$99</p>
            <p className="text-muted-foreground mb-6">per month</p>

            <button className="w-full bg-black text-white py-2 rounded">
              Start Demo
            </button>
          </div>

          <div className="border rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold">Professional</h3>
            <p className="text-3xl font-bold mt-4">$299</p>
            <p className="text-muted-foreground mb-6">per month</p>

            <button className="w-full bg-black text-white py-2 rounded">
              Start Demo
            </button>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-3xl font-bold mt-4">Custom</p>
            <p className="text-muted-foreground mb-6">
              Large portfolios
            </p>

            <button className="w-full bg-black text-white py-2 rounded">
              Contact Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}