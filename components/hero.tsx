export default function Hero() {
  return (
    <section className="min-h-screen text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        <img
          src="/logo.png"
          alt="PropFlow360"
          className="w-48 mb-12"
        />

        <h1 className="text-6xl font-bold leading-tight mb-6">
          Property Management,<br />
          <span className="text-cyan-400">Reimagined.</span>
        </h1>

        <p className="text-xl text-gray-200 max-w-3xl mb-10">
          One intelligent platform for every role. Manage properties,
          work orders, tenants, leasing, inventory and vendors — all in one place.
        </p>

        <div className="space-y-4 text-lg text-gray-200">

          <div>✓ 7 role-based portals for every team member</div>

          <div>✓ Real-time work orders & maintenance tracking</div>

          <div>✓ Tenant screening, leasing & e-signatures</div>

          <div>✓ Full financial dashboard & reporting</div>

        </div>

      </div>
    </section>
  );
}