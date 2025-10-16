import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Import Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // pick the weights you need
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Shane’s Birthday 🎉",
  description: "Celebrate Shane’s big day in style!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-600 text-white min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
