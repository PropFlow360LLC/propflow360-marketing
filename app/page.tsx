"use client";

const DEMO_USERS = [
  { label: "Corporate Admin", email: "corporate@demo.com" },
  { label: "Regional Manager", email: "regional@demo.com" },
  { label: "Property Manager", email: "property@demo.com" },
  { label: "Leasing Agent", email: "leasing@demo.com" },
  { label: "Maintenance Tech", email: "tech@demo.com" },
  { label: "Tenant", email: "tenant@demo.com" },
  { label: "Vendor", email: "vendor@demo.com" },
];

export default function Home() {
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
            PropFlow360 is a modern property management platform designed for
            operators, managers, leasing teams, maintenance staff, tenants,
            and vendors — all in one unified system.
          </p>

          <ul className="mt-10 space-y-4 text-blue-100">
            <li>✓ 7 role-based dashboards</li>
            <li>✓ Work orders & maintenance tracking</li>
            <li>✓ Leasing, tenants & vendor portals</li>
            <li>✓ Financial dashboards & reporting</li>
          </ul>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-10 bg-gray-50">

        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Interactive Demo
          </h2>

          <p className="text-gray-500 mb-6">
            Explore PropFlow360 instantly. Click any role below to launch the
            platform as that user.
          </p>

          <div className="grid grid-cols-2 gap-3">

            {DEMO_USERS.map((role) => (
              <a
                key={role.label}
                href={`https://app.propflow360.app/login?email=${role.email}&password=demo123`}
                className="border rounded-lg py-2 px-3 text-sm hover:bg-gray-100 text-center"
              >
                {role.label}
              </a>
            ))}

          </div>

          <p className="mt-8 text-xs text-gray-400 text-center">
            Demo accounts automatically sign into the PropFlow360 platform.
          </p>

        </div>

      </div>

    </div>
  );
}