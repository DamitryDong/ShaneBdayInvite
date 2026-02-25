"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, ArrowUpRight, ArrowDown } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  year: string
  result: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Waldorf Astoria Amsterdam",
    description: "Supported the reinvented Go-To-Market for one of Amsterdam's most iconic hotels and served as the essential 'translation layer' between local Amsterdam market reality and global EMEA strategy.",
    image: "/PortfolioPhotos/waldorf.webp",
    tags: ["Branding", "Social Media", "Go To Market"],
    year: "2023",
    result: "+10% Return Visits",
  },
  {
    id: 2,
    title: "DoubleTree by Hilton Al Barsha",
    description: "As the sole marketing resource, I transformed a dormant department into a high-visibility operation, executing a Go-to-Market strategy that delivered 50,000+ monthly views.",
    image: "/PortfolioPhotos/DT_Barsha.webp",
    tags: ["Social Media", "Go To Market", "Branding"],
    year: "2022",
    result: "+2,377% Reach",
  },
  {
    id: 3,
    title: "Waterprof",
    description: "By implementing data-driven marketing strategies I created a professional B2B brand identity that transformed technical expertise into a high-growth marketing engine.",
    image: "/PortfolioPhotos/Wateprof.webp",
    tags: ["Branding", "Analytics", "Data-Driven"],
    year: "2023",
    result: "$300K Revenue",
  },
  {
    id: 4,
    title: "Hilton Global F&B Campaign",
    description: "Supported the creation of Hilton's first global F&B campaign, transforming a historical milestone into a massive revenue driver across the EMEA region.",
    image: "/PortfolioPhotos/HiltonPinaColada.webp",
    tags: ["Social Media", "Paid Media"],
    year: "2023",
    result: "+1,230% Engagement",
  },
  {
    id: 5,
    title: "Bar Reve",
    description: "Created a disruptive brand activation that shifted the venue's market positioning and drove significant increase in weekend foot traffic through community-led marketing.",
    image: "/PortfolioPhotos/Bar_Reve.webp",
    tags: ["Branding", "Social Media"],
    year: "2022",
    result: "+25% Foot Traffic",
  },
  {
    id: 6,
    title: "Nissan North America",
    description: "As Marketing Lead for a consultancy project through the Wond'ry, I synthesized complex market research for a global industry leader to identify budgetary efficiencies.",
    image: "/PortfolioPhotos/Nissan_NA.webp",
    tags: ["Branding", "Analytics"],
    year: "2021",
    result: "$20K Monthly Savings",
  },
]

export default function Portfolio5Page() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Portfolio Switcher */}
      <div className="fixed top-0 left-0 right-0 bg-black py-2 px-4 z-50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-neutral-600 mr-2">View:</span>
          <a href="/portfolio" className="px-3 py-1 rounded text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors">v1</a>
          <a href="/portfolio2" className="px-3 py-1 rounded text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors">v2</a>
          <a href="/portfolio3" className="px-3 py-1 rounded text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors">v3</a>
          <a href="/portfolio4" className="px-3 py-1 rounded text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors">v4</a>
          <a href="/portfolio5" className="px-3 py-1 rounded bg-amber-500 text-black font-medium">v5</a>
          <a href="/portfolio6" className="px-3 py-1 rounded text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors">v6</a>
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="min-h-screen pt-16 flex flex-col">
        <div className="flex-1 grid lg:grid-cols-2">
          {/* Left - Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-20">
            <div className="max-w-xl">
              <p className="text-amber-500 font-mono text-sm tracking-widest mb-6">BRAND ARCHITECT</p>
              
              <h1 className="text-6xl lg:text-8xl font-light tracking-tight mb-8 leading-[0.9]">
                Shane
                <br />
                <span className="font-serif italic text-amber-500">Jafar</span>
              </h1>
              
              <p className="text-xl text-neutral-400 leading-relaxed mb-12 font-light">
                Building premium brand identities through disruptive, high-impact marketing activations. 
                The operational 'doer' who translates global vision into local market dominance.
              </p>

              <div className="space-y-4 text-neutral-500">
                <div className="flex items-center gap-4">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span className="font-light">Nashville, TN & Amsterdam, NL</span>
                </div>
                <a href="mailto:shanejafar@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span className="font-light">shanejafar@gmail.com</span>
                </a>
                <a href="tel:+16152385636" className="flex items-center gap-4 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span className="font-light">(615) 238-5636</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[50vh] lg:h-auto">
            <img
              src="/PortfolioPhotos/Shane Jafar.jpeg"
              alt="Shane Jafar"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-neutral-950 lg:via-transparent lg:to-transparent" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="py-8 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-neutral-600">
            <span className="text-xs tracking-widest">SCROLL</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Work Section - Editorial List */}
      <section className="py-24 border-t border-neutral-900">
        <div className="px-8 lg:px-16 mb-16">
          <p className="text-amber-500 font-mono text-sm tracking-widest mb-4">SELECTED WORK</p>
          <h2 className="text-5xl lg:text-6xl font-light">Case Studies</h2>
        </div>

        <div className="divide-y divide-neutral-900">
          {caseStudies.map((study, index) => (
            <a
              key={study.id}
              href={study.detailsUrl || "#"}
              className="group block"
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="px-8 lg:px-16 py-8 lg:py-12 flex items-center gap-8 transition-colors hover:bg-neutral-900/50">
                {/* Number */}
                <span className="text-6xl lg:text-8xl font-light text-neutral-800 group-hover:text-amber-500/30 transition-colors w-24 flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Image - Shows on hover */}
                <div className={`hidden lg:block w-48 h-32 overflow-hidden rounded-lg transition-all duration-500 ${
                  hoveredId === study.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl lg:text-3xl font-light group-hover:text-amber-500 transition-colors">
                      {study.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-neutral-600 group-hover:text-amber-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-neutral-500 font-light line-clamp-1 mb-3">{study.description}</p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-amber-500 font-mono">{study.year}</span>
                    <span className="text-neutral-400">{study.result}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="hidden lg:flex gap-2 flex-shrink-0">
                  {study.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-3 py-1 border border-neutral-800 text-neutral-500 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-amber-500 font-mono text-sm tracking-widest mb-6">GET IN TOUCH</p>
          <h2 className="text-5xl lg:text-7xl font-light mb-8">
            Let's create something
            <br />
            <span className="font-serif italic text-amber-500">extraordinary</span>
          </h2>
          <a
            href="mailto:shanejafar@gmail.com"
            className="inline-flex items-center gap-3 text-xl text-neutral-400 hover:text-white transition-colors group"
          >
            shanejafar@gmail.com
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-900 text-center">
        <p className="text-neutral-700 text-sm">© 2024 Shane Jafar</p>
      </footer>
    </div>
  )
}
