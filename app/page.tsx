"use client";

export default function Home() {
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
            Select a role below to instantly enter the demo platform and see
            how PropFlow360 works for different users.
          </p>


          {/* DEMO LOGIN BUTTONS */}

          <div className="grid grid-cols-2 gap-3">

            <a
              href="https://app.propflow360.app/login?email=corporate@demo.com&password=demo123&companySlug=demo"
              className="border rounded-lg py-3 text-sm hover:bg-gray-100 bg-white"
            >
              Corporate Admin
            </a>

            <a
              href="https://app.propflow360.app/login?email=regional@demo.com&password=demo123&companySlug=demo"
              className="border rounded-lg py-3 text-sm hover:bg-gray-100 bg-white"
            >
              Regional Manager
            </a>

            <a
              href="https://app.propflow360.app/login?email=property@demo.com&password=demo123&companySlug=demo"
              className="border rounded-lg py-3 text-sm hover:bg-gray-100 bg-white"
            >
              Property Manager
            </a>

            <a
              href="https://app.propflow360.app/login?email=leasing@demo.com&password=demo123&companySlug=demo"
              className="border rounded-lg py-3 text-sm hover:bg-gray-100 bg-white"
            >
              Leasing Agent
            </a>

            <a
              href="https://app.propflow360.app/login?email=tech@demo.com&password=demo123&companySlug=demo"
              className="border rounded-lg py-3 text-sm hover:bg-gray-100 bg-white"
            >
              Maintenance Tech
            </a>

            <a
              href="https://app.propflow360.app/login?email=tenant@demo.com&password=demo123&companySlug=demo"
              className="border rounded-lg py-3 text-sm hover:bg-gray-100 bg-white"
            >
              Tenant
            </a>

            <a
              href="https://app.propflow360.app/login?email=vendor@demo.com&password=demo123&companySlug=demo"
              className="border rounded-lg py-3 text-sm hover:bg-gray-100 bg-white"
            >
              Vendor
            </a>

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