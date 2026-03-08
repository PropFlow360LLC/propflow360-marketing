export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Modern Property Management Software for Growing Portfolios
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Manage properties, units, tenants, work orders, reporting, and operations in one platform.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://app.propflow360.app/login"
            className="px-6 py-3 rounded-lg bg-black text-white"
          >
            Start Demo
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border"
          >
            Request Account
          </a>
        </div>
      </div>
    </section>
  );
}