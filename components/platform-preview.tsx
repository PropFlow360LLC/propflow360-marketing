export default function PlatformPreview() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Powerful Property Management — Simplified
        </h2>

        <p className="text-muted-foreground mb-12">
          Built for property managers, investors, and asset managers.
        </p>

        <div className="rounded-xl overflow-hidden border shadow-lg">
          <img
            src="/dashboard-preview.png"
            alt="PropFlow360 Platform Dashboard"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}