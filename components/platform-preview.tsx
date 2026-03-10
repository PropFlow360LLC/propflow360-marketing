export default function PlatformPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#1f5f8f] to-[#184a75] text-white">

      <div className="max-w-5xl mx-auto px-10 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-6">
          Powerful Simplified Property Management
        </h2>

        <p className="text-lg text-blue-100 mb-16">
          Launch your property management operation in minutes.
          Create your company, add properties, invite users and begin managing
          your entire portfolio from a single platform.
        </p>

      </div>


      {/* PLATFORM IMAGE */}
      <div className="max-w-6xl mx-auto px-10 mb-20">

        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="/dashboard-preview.png"
            alt="PropFlow360 Platform Dashboard"
            className="w-full"
          />
        </div>

      </div>


      {/* SECTION DIVIDER */}
      <div className="flex justify-center mb-20">
        <div className="w-24 h-[3px] bg-cyan-400 rounded"></div>
      </div>


      {/* BENEFITS */}
      <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-3 gap-12 text-left">

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Self-Service Platform
          </h3>

          <p className="text-blue-100">
            No onboarding consultants or long implementations.
            Create your organization and begin managing properties immediately.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">
            Built For Every Role
          </h3>

          <p className="text-blue-100">
            Role-based dashboards provide the exact tools needed for
            executives, managers, maintenance and accounting teams.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">
            Enterprise Architecture
          </h3>

          <p className="text-blue-100">
            Multi-tenant architecture with enterprise-grade security
            designed for portfolios of any size.
          </p>
        </div>

      </div>

    </section>
  );
}