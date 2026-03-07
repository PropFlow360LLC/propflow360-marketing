"use client";

export default function Home() {
  const DEMO_USERS = [
    { label: "Corporate Admin", email: "corporate@demo.com" },
    { label: "Regional Manager", email: "regional@demo.com" },
    { label: "Property Manager", email: "property@demo.com" },
    { label: "Leasing Agent", email: "leasing@demo.com" },
    { label: "Maintenance Tech", email: "tech@demo.com" },
    { label: "Tenant", email: "tenant@demo.com" },
    { label: "Vendor", email: "vendor@demo.com" },
  ];

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* LEFT SIDE */}
      <div
        className="hidden md:flex flex-col justify-center text-white p-16"
        style={{
          background:
            "linear-gradient(135deg, #0d2d4e 0%, #123a60 50%, #1a6fa8 100%)",
        }}
      >
        <div className="mb-10">
          <img src="/logo.png" alt="PropFlow360" className="w-56 mb-10" />

          <h1 className="text-5xl font-bold leading-tight">
            Property Management,
            <span className="block text-cyan-400">Reimagined.</span>
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            One intelligent platform for every role. Manage properties, work
            orders, tenants, leasing, and inventory — all in one place.
          </p>

          <ul className="mt-10 space-y-4 text-blue-100">
            <li>✓ 7 role-based portals for every team member</li>
            <li>✓ Real-time work orders & maintenance tracking</li>
            <li>✓ Tenant screening, leasing & e-signatures</li>
            <li>✓ Full financial dashboard & reporting</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-10 bg-gray-50">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            PropFlow360 Platform
          </h2>
          <p className="text-gray-500 mb-8">
            Sign in to access the application
          </p>

          <a href="https://app.propflow360.app/login">
            <button
              className="w-full py-3 text-lg text-white rounded-md"
              style={{
                background:
                  "linear-gradient(90deg, #0d2d4e 0%, #1a6fa8 100%)",
              }}
            >
              Go to Login →
            </button>
          </a>

          <div className="mt-10 text-center text-sm text-gray-400">
            DEMO ACCOUNTS AVAILABLE IN PLATFORM
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {DEMO_USERS.map((role) => (
              <div
                key={role.label}
                className="border rounded-lg py-2 px-3 text-sm text-center bg-white"
              >
                {role.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}