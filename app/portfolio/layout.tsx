import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shane Portfolio",
  description: "Brand Architect - Building premium brand identities through creative marketing",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%2318181b'/><text x='50' y='70' font-family='system-ui' font-size='60' font-weight='bold' fill='white' text-anchor='middle'>S</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
