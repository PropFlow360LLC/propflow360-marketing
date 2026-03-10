const features = [
  "Portfolio Dashboard",
  "Companies & Regions",
  "Property Management",
  "Buildings & Units",
  "Tenant Management",
  "Lease Tracking",
  "Work Orders & Maintenance",
  "Vendor Management",
  "Financial Reporting",
  "Document Storage",
  "Role Based Permissions",
  "Enterprise Security"
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">
            Everything Needed To Manage Your Portfolio
          </h2>

          <p className="text-gray-500 mt-3">
            PropFlow360 combines operations, finance, and asset management
            into one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              <h3 className="font-semibold">{feature}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}