export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-3xl font-semibold mb-6">
          See PropFlow360 In Action
        </h2>

        <p className="text-gray-500 mb-8">
          Experience the platform with our interactive demo.
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="https://app.propflow360.app/login"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Start Demo
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border rounded-lg"
          >
            Request Account
          </a>

        </div>

      </div>
    </section>
  );
}