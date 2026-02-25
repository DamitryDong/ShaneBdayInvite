"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Mail, Phone, FileText, ArrowRight } from "lucide-react"

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

export default function Portfolio2Page() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Portfolio Switcher */}
      <div className="fixed top-0 left-0 right-0 bg-stone-900 py-2 px-4 z-[60]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-stone-500 mr-2">View:</span>
          <a href="/portfolio" className="px-3 py-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors">v1</a>
          <a href="/portfolio2" className="px-3 py-1 rounded bg-white text-stone-900 font-medium">v2</a>
          <a href="/portfolio3" className="px-3 py-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors">v3</a>
          <a href="/portfolio4" className="px-3 py-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors">v4</a>
          <a href="/portfolio5" className="px-3 py-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors">v5</a>
          <a href="/portfolio6" className="px-3 py-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors">v6</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-stone-900">Shane Jafar</span>
          <div className="flex gap-6">
            <a href="#about" className="text-stone-600 hover:text-stone-900 transition-colors">About</a>
            <a href="#work" className="text-stone-600 hover:text-stone-900 transition-colors">Work</a>
            <a href="#contact" className="text-stone-600 hover:text-stone-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero - Clean Split Layout */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 font-medium mb-4 tracking-wide uppercase text-sm">Brand Strategist</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Creative Cataclysm
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              I am a hands-on executor who builds premium brand identities through disruptive, 
              high-impact marketing activations. From revitalizing dormant hospitality departments 
              to launching $100M+ real estate assets.
            </p>
            
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-stone-600">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Nashville, TN & Amsterdam, NL</span>
              </div>
              <a href="mailto:shanejafar@gmail.com" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors">
                <Mail className="w-5 h-5 text-amber-600" />
                <span>shanejafar@gmail.com</span>
              </a>
              <a href="tel:+16152385636" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>(615) 238-5636</span>
              </a>
            </div>

            <div className="flex gap-4">
              <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8">
                <a href="#work" className="flex items-center gap-2">
                  View Work <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8">
                <a href="/resume.pdf" target="_blank" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/PortfolioPhotos/Shane Jafar.jpeg"
                alt="Shane Jafar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-stone-200 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Work Section - Horizontal Scroll Cards */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-amber-600 font-medium mb-2 tracking-wide uppercase text-sm">Portfolio</p>
              <h2 className="text-4xl font-bold text-stone-900">Selected Work</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card
                key={caseStudy.id}
                className={`group bg-stone-50 border-0 overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className={`grid ${index === 0 ? 'md:grid-cols-2' : ''} gap-0`}>
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10]' : 'aspect-video'}`}>
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${index === 0 ? 'bg-stone-900 text-white' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            index === 0 
                              ? 'bg-amber-500/20 text-amber-400' 
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 ${index === 0 ? 'text-white' : 'text-stone-900'}`}>
                      {caseStudy.title}
                    </h3>
                    <p className={`line-clamp-3 ${index === 0 ? 'text-stone-300' : 'text-stone-600'}`}>
                      {caseStudy.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className={`mt-4 w-fit p-0 ${index === 0 ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'}`}
                    >
                      View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-400 font-medium mb-4 tracking-wide uppercase text-sm">Get in Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-stone-400 mb-8">
            Ready to transform your brand? I'd love to hear from you.
          </p>
          <a 
            href="mailto:shanejafar@gmail.com"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-4 rounded-full transition-colors"
          >
            <Mail className="w-5 h-5" />
            shanejafar@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-stone-950 text-center text-stone-500">
        <p>© 2024 Shane Jafar. All rights reserved.</p>
      </footer>
    </div>
  )
}
