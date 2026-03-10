import "./globals.css"

export const metadata = {
  title: "PropFlow360 | Property Management Operating Platform",
  description:
    "PropFlow360 is the modern operating platform for property portfolios. Leasing, maintenance, vendors and reporting unified into one system.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}