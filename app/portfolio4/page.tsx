"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Mail, Phone, FileText, Menu, X } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  detailsUrl?: string
  stats: { label: string; value: string }[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Waldorf Astoria Amsterdam",
    description: "Supported the reinvented Go-To-Market for one of Amsterdam's most iconic hotels and served as the essential 'translation layer' between local Amsterdam market reality and global EMEA strategy, executing high-end activations that increased return visits by 10%.",
    image: "/PortfolioPhotos/waldorf.webp",
    tags: ["Branding", "Social Media", "Go To Market"],
    detailsUrl: "#",
    stats: [{ label: "Return Visits", value: "+10%" }],
  },
  {
    id: 2,
    title: "DoubleTree by Hilton Al Barsha",
    description: "As the sole marketing resource, I transformed a dormant department into a high-visibility operation, executing a Go-to-Market strategy that delivered 50,000+ monthly views. This resulted in a 6% ROI on targeted activations and a 2,377% increase in total reach.",
    image: "/PortfolioPhotos/DT_Barsha.webp",
    tags: ["Social Media", "Go To Market", "Branding"],
    detailsUrl: "#",
    stats: [{ label: "Reach Increase", value: "+2,377%" }, { label: "Monthly Views", value: "50K+" }],
  },
  {
    id: 3,
    title: "Waterprof",
    description: "By implementing data-driven marketing strategies I created a professional B2B brand identity that transformed technical expertise into a high-growth marketing engine. Through A/B testing and localized sales collateral, I scaled the company's digital presence by 233% and directly contributed to $300,000 in new revenue.",
    image: "/PortfolioPhotos/Wateprof.webp",
    tags: ["Branding", "Analytics", "Data-Driven"],
    detailsUrl: "#",
    stats: [{ label: "Digital Growth", value: "+233%" }, { label: "Revenue", value: "$300K" }],
  },
  {
    id: 4,
    title: "Hilton Global F&B Campaign",
    description: "Supported the creation of Hilton's first global F&B campaign, transforming a historical milestone into a massive revenue driver across the EMEA region. Achieved a 1,230% spike in engagement and a 20% increase in sales by bridging corporate strategy and local property execution.",
    image: "/PortfolioPhotos/HiltonPinaColada.webp",
    tags: ["Social Media", "Analytics", "Paid Media"],
    detailsUrl: "#",
    stats: [{ label: "Engagement", value: "+1,230%" }, { label: "Sales", value: "+20%" }],
  },
  {
    id: 5,
    title: "Bar Reve",
    description: "Created a disruptive brand activation that shifted the venue's market positioning and drove a 25% increase in weekend foot traffic. Balanced hyper-local creative execution with operational excellence to build 'buzz' and drive physical occupancy through community-led marketing.",
    image: "/PortfolioPhotos/Bar_Reve.webp",
    tags: ["Branding", "Social Media", "Copywriting"],
    detailsUrl: "#",
    stats: [{ label: "Foot Traffic", value: "+25%" }],
  },
  {
    id: 6,
    title: "Nissan North America",
    description: "As Marketing Lead for a consultancy project through the Wond'ry, I synthesized complex market research for a global industry leader to identify $20k in monthly budgetary efficiencies. Provided the 'business intelligence' necessary to optimize Nissan's North American footprint and tech-led campaigns.",
    image: "/PortfolioPhotos/Nissan_NA.webp",
    tags: ["Branding", "Analytics", "Data-Driven"],
    detailsUrl: "#",
    stats: [{ label: "Monthly Savings", value: "$20K" }],
  },
]

export default function Portfolio4Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const allTags = Array.from(new Set(caseStudies.flatMap((p) => p.tags)))
  const filteredStudies = activeFilter 
    ? caseStudies.filter(c => c.tags.includes(activeFilter))
    : caseStudies

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Portfolio Switcher */}
      <div className="fixed top-0 left-0 right-0 bg-slate-900 py-2 px-4 z-[60]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-slate-500 mr-2">View:</span>
          <a href="/portfolio" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v1</a>
          <a href="/portfolio2" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v2</a>
          <a href="/portfolio3" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v3</a>
          <a href="/portfolio4" className="px-3 py-1 rounded bg-blue-600 text-white font-medium">v4</a>
          <a href="/portfolio5" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v5</a>
          <a href="/portfolio6" className="px-3 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">v6</a>
        </div>
      </div>

      {/* Premium Navigation */}
      <nav className="fixed top-10 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-100">
                <img src="/PortfolioPhotos/Shane Jafar.jpeg" alt="Shane" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Shane Jafar</p>
                <p className="text-xs text-slate-500">Brand Architect</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <FileText className="w-4 h-4 mr-2" /> Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
            <a href="#about" className="block text-slate-600">About</a>
            <a href="#portfolio" className="block text-slate-600">Portfolio</a>
            <a href="#contact" className="block text-slate-600">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero - Corporate Style */}
      <section id="about" className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Available for Projects
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Building Brands Through
                <span className="text-blue-600"> Strategic Excellence</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                I am a hands-on executor who builds premium brand identities through disruptive, 
                high-impact marketing activations. From revitalizing dormant hospitality departments 
                to launching $100M+ real estate assets, I serve as the operational 'doer' who 
                translates global vision into local market dominance.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-slate-50 rounded-2xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">$100M+</p>
                  <p className="text-sm text-slate-500">Assets Launched</p>
                </div>
                <div className="text-center border-x border-slate-200">
                  <p className="text-3xl font-bold text-blue-600">2,377%</p>
                  <p className="text-sm text-slate-500">Max Reach Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">6+</p>
                  <p className="text-sm text-slate-500">Major Brands</p>
                </div>
              </div>

              {/* Contact row */}
              <div className="flex flex-wrap gap-6 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Nashville & Amsterdam
                </div>
                <a href="mailto:shanejafar@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
                  <Mail className="w-5 h-5 text-blue-500" />
                  shanejafar@gmail.com
                </a>
                <a href="tel:+16152385636" className="flex items-center gap-2 hover:text-blue-600">
                  <Phone className="w-5 h-5 text-blue-500" />
                  (615) 238-5636
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/PortfolioPhotos/Shane Jafar.jpeg"
                    alt="Shane Jafar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <p className="text-sm text-slate-500">Expertise in</p>
                  <p className="font-bold text-slate-900">Hospitality & Luxury</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Work</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A selection of brand transformations and marketing activations that delivered measurable results.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === null 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Projects
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeFilter === tag 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects grid - Magazine style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <article
                key={study.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {study.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {study.description}
                  </p>
                  
                  {/* Stats badges */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="bg-slate-50 px-3 py-2 rounded-lg">
                        <p className="text-lg font-bold text-blue-600">{stat.value}</p>
                        <p className="text-xs text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium">
                    View Case Study <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to transform your brand's market presence?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shanejafar@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send a Message
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center text-slate-400">
        <p>© 2024 Shane Jafar. All rights reserved.</p>
      </footer>
    </div>
  )
}
