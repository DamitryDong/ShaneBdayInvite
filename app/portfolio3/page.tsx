"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Mail, Phone, FileText, Briefcase, ChevronDown } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  detailsUrl?: string
  color: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Waldorf Astoria Amsterdam",
    description: "Supported the reinvented Go-To-Market for one of Amsterdam's most iconic hotels and served as the essential 'translation layer' between local Amsterdam market reality and global EMEA strategy, executing high-end activations that increased return visits by 10%.",
    image: "/PortfolioPhotos/waldorf.webp",
    tags: ["Branding", "Social Media", "Go To Market", "Analytics", "A/B Testing"],
    detailsUrl: "#",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 2,
    title: "DoubleTree by Hilton Al Barsha",
    description: "As the sole marketing resource, I transformed a dormant department into a high-visibility operation, executing a Go-to-Market strategy that delivered 50,000+ monthly views. This resulted in a 6% ROI on targeted activations and a 2,377% increase in total reach.",
    image: "/PortfolioPhotos/DT_Barsha.webp",
    tags: ["Social Media", "Go To Market", "Branding", "Budget Management"],
    detailsUrl: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    title: "Waterprof",
    description: "By implementing data-driven marketing strategies I created a professional B2B brand identity that transformed technical expertise into a high-growth marketing engine. Through A/B testing and localized sales collateral, I scaled the company's digital presence by 233% and directly contributed to $300,000 in new revenue.",
    image: "/PortfolioPhotos/Wateprof.webp",
    tags: ["Branding", "Analytics", "Data-Driven", "A/B Testing", "Budget Management"],
    detailsUrl: "#",
    color: "from-amber-400 to-yellow-500",
  },
  {
    id: 4,
    title: "Hilton Global F&B Campaign",
    description: "Supported the creation of Hilton's first global F&B campaign, transforming a historical milestone into a massive revenue driver across the EMEA region. Achieved a 1,230% spike in engagement and a 20% increase in sales by bridging corporate strategy and local property execution.",
    image: "/PortfolioPhotos/HiltonPinaColada.webp",
    tags: ["Social Media", "Analytics", "Paid Media", "Agency Handling"],
    detailsUrl: "#",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 5,
    title: "Bar Reve",
    description: "Created a disruptive brand activation that shifted the venue's market positioning and drove a 25% increase in weekend foot traffic. Balanced hyper-local creative execution with operational excellence to build 'buzz' and drive physical occupancy through community-led marketing.",
    image: "/PortfolioPhotos/Bar_Reve.webp",
    tags: ["Branding", "Social Media", "Analytics", "Copywriting"],
    detailsUrl: "#",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 6,
    title: "Nissan North America (The Wond'ry)",
    description: "As Marketing Lead for a consultancy project through the Wond'ry, I synthesized complex market research for a global industry leader to identify $20k in monthly budgetary efficiencies. Provided the 'business intelligence' necessary to optimize Nissan's North American footprint and tech-led campaigns.",
    image: "/PortfolioPhotos/Nissan_NA.webp",
    tags: ["Branding", "Analytics", "Data-Driven", "A/B Testing"],
    detailsUrl: "#",
    color: "from-yellow-600 to-amber-700",
  },
]

export default function Portfolio3Page() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Portfolio Switcher */}
      <div className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-2 px-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-slate-500 mr-2">View:</span>
          <a href="/portfolio" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v1</a>
          <a href="/portfolio2" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v2</a>
          <a href="/portfolio3" className="px-3 py-1 rounded bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-medium">v3</a>
          <a href="/portfolio4" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v4</a>
          <a href="/portfolio5" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v5</a>
          <a href="/portfolio6" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v6</a>
        </div>
      </div>

      {/* Full-screen Hero */}
      <section className="min-h-screen relative flex items-center justify-center pt-10">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-slate-950 to-amber-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Profile Image - Circular with glow */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-yellow-500/50 shadow-2xl shadow-yellow-500/25">
                <img
                  src="/PortfolioPhotos/Shane Jafar.jpeg"
                  alt="Shane Jafar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur-xl opacity-30 -z-10" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
              SHANE JAFAR
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-300 font-light mb-4">
            Brand Architect • Creative Strategist
          </p>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Building premium brand identities through disruptive, high-impact marketing activations.
            Translating global vision into local market dominance.
          </p>

          {/* Contact pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:shanejafar@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>shanejafar@gmail.com</span>
            </a>
            <a href="tel:+16152385636" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <Phone className="w-5 h-5 text-amber-400" />
              <span>(615) 238-5636</span>
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>Nashville & Amsterdam</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black px-8 rounded-full">
              <Briefcase className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 rounded-full">
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-500" />
          </div>
        </div>
      </section>

      {/* Case Studies - Accordion Style */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              Case Studies
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg">
            Click to explore each project
          </p>

          <div className="space-y-4">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                  expandedId === caseStudy.id 
                    ? 'bg-slate-900' 
                    : 'bg-slate-900/50 hover:bg-slate-900/80'
                }`}
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => setExpandedId(expandedId === caseStudy.id ? null : caseStudy.id)}
                  className="w-full p-6 flex items-center gap-6 text-left"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center text-2xl font-bold flex-shrink-0`}>
                    {caseStudy.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-1">{caseStudy.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                    expandedId === caseStudy.id ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedId === caseStudy.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0 grid md:grid-cols-2 gap-6">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      <Button className={`w-fit bg-gradient-to-r ${caseStudy.color} text-white`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Full Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/40 to-amber-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's create something extraordinary together.
          </p>
          <a
            href="mailto:shanejafar@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-10 py-5 rounded-full hover:bg-slate-100 transition-colors text-lg"
          >
            <Mail className="w-6 h-6" />
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500">
        <p>© 2024 Shane Jafar. Crafted with passion.</p>
      </footer>
    </div>
  )
}
