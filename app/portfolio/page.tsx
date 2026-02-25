"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Mail, Phone, FileText, Briefcase } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  detailsUrl?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Waldorf Astoria Amsterdam",
    description: "Supported the reinvented Go-To-Market for one of Amsterdam's most iconic hotels and served as the essential 'translation layer' between local Amsterdam market reality and global EMEA strategy, executing high-end activations that increased return visits by 10%.",
    image: "/PortfolioPhotos/waldorf.webp",
    tags: ["Branding", "Social Media", "Go To Market", "Analytics", "A/B Testing"],
    detailsUrl: "#",
  },
  {
    id: 2,
    title: "DoubleTree by Hilton Al Barsha",
    description: "As the sole marketing resource, I transformed a dormant department into a high-visibility operation, executing a Go-to-Market strategy that delivered 50,000+ monthly views. This resulted in a 6% ROI on targeted activations and a 2,377% increase in total reach.",
    image: "/PortfolioPhotos/DT_Barsha.webp",
    tags: ["Social Media", "Go To Market", "Branding", "Budget Management"],
    detailsUrl: "#",
  },
  {
    id: 3,
    title: "Waterprof",
    description: "By implementing data-driven marketing strategies I created a professional B2B brand identity that transformed technical expertise into a high-growth marketing engine. Through A/B testing and localized sales collateral, I scaled the company's digital presence by 233% and directly contributed to $300,000 in new revenue.",
    image: "/PortfolioPhotos/Wateprof.webp",
    tags: ["Branding", "Analytics", "Data-Driven", "A/B Testing", "Budget Management"],
    detailsUrl: "#",
  },
  {
    id: 4,
    title: "Hilton Global F&B Campaign",
    description: "Supported the creation of Hilton's first global F&B campaign, transforming a historical milestone into a massive revenue driver across the EMEA region. Achieved a 1,230% spike in engagement and a 20% increase in sales by bridging corporate strategy and local property execution.",
    image: "/PortfolioPhotos/HiltonPinaColada.webp",
    tags: ["Social Media", "Analytics", "Paid Media", "Agency Handling"],
    detailsUrl: "#",
  },
  {
    id: 5,
    title: "Bar Reve",
    description: "Created a disruptive brand activation that shifted the venue's market positioning and drove a 25% increase in weekend foot traffic. Balanced hyper-local creative execution with operational excellence to build 'buzz' and drive physical occupancy through community-led marketing.",
    image: "/PortfolioPhotos/Bar_Reve.webp",
    tags: ["Branding", "Social Media", "Analytics", "Copywriting"],
    detailsUrl: "#",
  },
  {
    id: 6,
    title: "Nissan North America (The Wond'ry)",
    description: "As Marketing Lead for a consultancy project through the Wond'ry, I synthesized complex market research for a global industry leader to identify $20k in monthly budgetary efficiencies. Provided the 'business intelligence' necessary to optimize Nissan's North American footprint and tech-led campaigns.",
    image: "/PortfolioPhotos/Nissan_NA.webp",
    tags: ["Branding", "Analytics", "Data-Driven", "A/B Testing"],
    detailsUrl: "#",
  },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string | null>(null)

  const allTags = Array.from(new Set(caseStudies.flatMap((p) => p.tags)))

  const filteredCaseStudies = filter
    ? caseStudies.filter((p) => p.tags.includes(filter))
    : caseStudies

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Portfolio Switcher */}
      <div className="bg-zinc-950 border-b border-zinc-800 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-zinc-500 mr-2">View:</span>
          <a href="/portfolio" className="px-3 py-1 rounded bg-white text-zinc-900 font-medium">v1</a>
          <a href="/portfolio2" className="px-3 py-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">v2</a>
          <a href="/portfolio3" className="px-3 py-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">v3</a>
          <a href="/portfolio4" className="px-3 py-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">v4</a>
          <a href="/portfolio5" className="px-3 py-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">v5</a>
          <a href="/portfolio6" className="px-3 py-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">v6</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-zinc-700 shadow-2xl shadow-black/30">
                <img
                  src="/PortfolioPhotos/Shane Jafar.jpeg"
                  alt="Shane Jafar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zinc-600/20 rounded-full blur-2xl" />
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Brand Architect through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-white">
                  Creative Cataclysm
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl">
                I am a hands-on executor who builds premium brand identities through disruptive, 
                high-impact marketing activations. From revitalizing dormant hospitality departments 
                to launching $100M+ real estate assets, I serve as the operational 'doer' who 
                translates global vision into local market dominance.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-5 h-5 text-zinc-100" />
                  <span>Nashville, TN & Amsterdam, NL</span>
                </div>
                <a 
                  href="mailto:shanejafar@gmail.com" 
                  className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-zinc-100" />
                  <span>shanejafar@gmail.com</span>
                </a>
                <a 
                  href="tel:+16152385636" 
                  className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-zinc-100" />
                  <span>(615) 238-5636</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:bg-zinc-100 text-zinc-900"
                  asChild
                >
                  <a href="#case-studies">
                    <Briefcase className="w-5 h-5 mr-2" />
                    View Case Studies
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 text-zinc-200 hover:bg-zinc-800"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      </div>

      {/* Case Studies Header */}
      <header id="case-studies" className="py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Case Studies
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto px-4">
          A collection of projects showcasing brand transformation and market activation.
        </p>
      </header>

      {/* Filter Tags */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className={`rounded-full ${
              filter === null
                ? "bg-white hover:bg-zinc-100 text-zinc-900"
                : "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              onClick={() => setFilter(tag)}
              className={`rounded-full ${
                filter === tag
                  ? "bg-white hover:bg-zinc-100 text-zinc-900"
                  : "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              className="group bg-zinc-800 border-zinc-700 overflow-hidden hover:border-zinc-500 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Case Study Image */}
              <div className="relative overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/3f3f46/a1a1aa?text=${encodeURIComponent(caseStudy.title)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Case Study Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-zinc-400 mb-4 line-clamp-3">
                  {caseStudy.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-zinc-700 text-zinc-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                {caseStudy.detailsUrl && (
                  <Button
                    size="sm"
                    className="bg-white hover:bg-zinc-100 text-zinc-900"
                    asChild
                  >
                    <a href={caseStudy.detailsUrl}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
