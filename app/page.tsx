"use client";

export default function Home() {
  const DEMO_USERS = [
    { label: "Corporate Admin" },
    { label: "Regional Manager" },
    { label: "Property Manager" },
    { label: "Leasing Agent" },
    { label: "Maintenance Tech" },
    { label: "Tenant" },
    { label: "Vendor" },
  ];

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* LEFT SIDE */}
      <div
        className="flex flex-col justify-center text-white p-16"
        style={{
          background:
            "linear-gradient(135deg, #0d2d4e 0%, #123a60 50%, #1a6fa8 100%)",
        }}
      >
        <div className="max-w-xl">
          <img src="/logo.png" alt="PropFlow360" className="w-56 mb-10" />

          <h1 className="text-5xl font-bold leading-tight">
            Property Management,
            <span className="block text-cyan-400">Reimagined.</span>
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            PropFlow360 is an enterprise property management platform designed
            for modern operators. Manage portfolios, teams, tenants, and
            maintenance from one intelligent system.
          </p>

          <ul className="mt-10 space-y-4 text-blue-100">
            <li>✓ Multi-property portfolio management</li>
            <li>✓ Real-time maintenance & work order tracking</li>
            <li>✓ Leasing, tenant lifecycle & communications</li>
            <li>✓ Financial dashboards and reporting</li>
            <li>✓ Role-based access for every team member</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-10 bg-gray-50">
        <div className="w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore the Platform
          </h2>

          <p className="text-gray-600 mb-8">
            Use one of the demo roles below to explore how PropFlow360 works for
            each team member in a property management organization.
          </p>

          <div className="text-xs text-gray-500 mb-4">
            Clicking a role will take you to the platform login page.
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {DEMO_USERS.map((role) => (
              <a
                key={role.label}
                href="https://app.propflow360.app/login"
                className="border rounded-lg py-3 px-3 text-sm hover:bg-gray-100 bg-white"
              >
                {role.label}
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://app.propflow360.app/login"
              className="inline-block mt-6 px-6 py-3 rounded-lg text-white"
              style={{
                background:
                  "linear-gradient(90deg, #0d2d4e 0%, #1a6fa8 100%)",
              }}
            >
              Go to Platform Login →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}