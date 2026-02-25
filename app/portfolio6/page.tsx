"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, FileText, ExternalLink, Sparkles, TrendingUp, Users, Target } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  metric: string
  metricLabel: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Waldorf Astoria Amsterdam",
    description: "Supported the reinvented Go-To-Market for one of Amsterdam's most iconic hotels and served as the essential 'translation layer' between local Amsterdam market reality and global EMEA strategy.",
    image: "/PortfolioPhotos/waldorf.webp",
    tags: ["Branding", "Social Media", "Go To Market"],
    metric: "+10%",
    metricLabel: "Return Visits",
  },
  {
    id: 2,
    title: "DoubleTree by Hilton Al Barsha",
    description: "As the sole marketing resource, I transformed a dormant department into a high-visibility operation, executing a Go-to-Market strategy that delivered 50,000+ monthly views.",
    image: "/PortfolioPhotos/DT_Barsha.webp",
    tags: ["Social Media", "Go To Market", "Branding"],
    metric: "+2,377%",
    metricLabel: "Total Reach",
  },
  {
    id: 3,
    title: "Waterprof",
    description: "By implementing data-driven marketing strategies I created a professional B2B brand identity that transformed technical expertise into a high-growth marketing engine.",
    image: "/PortfolioPhotos/Wateprof.webp",
    tags: ["Branding", "Analytics", "Data-Driven"],
    metric: "$300K",
    metricLabel: "New Revenue",
  },
  {
    id: 4,
    title: "Hilton Global F&B Campaign",
    description: "Supported the creation of Hilton's first global F&B campaign, transforming a historical milestone into a massive revenue driver across the EMEA region.",
    image: "/PortfolioPhotos/HiltonPinaColada.webp",
    tags: ["Social Media", "Paid Media", "Analytics"],
    metric: "+1,230%",
    metricLabel: "Engagement",
  },
  {
    id: 5,
    title: "Bar Reve",
    description: "Created a disruptive brand activation that shifted the venue's market positioning and drove significant increase in weekend foot traffic.",
    image: "/PortfolioPhotos/Bar_Reve.webp",
    tags: ["Branding", "Social Media", "Copywriting"],
    metric: "+25%",
    metricLabel: "Foot Traffic",
  },
  {
    id: 6,
    title: "Nissan North America",
    description: "As Marketing Lead for a consultancy project, I synthesized complex market research for a global industry leader to identify budgetary efficiencies.",
    image: "/PortfolioPhotos/Nissan_NA.webp",
    tags: ["Branding", "Analytics", "Data-Driven"],
    metric: "$20K",
    metricLabel: "Monthly Savings",
  },
]

const highlights = [
  { icon: TrendingUp, value: "$100M+", label: "Assets Launched" },
  { icon: Users, value: "6+", label: "Major Brands" },
  { icon: Target, value: "2,377%", label: "Max Growth" },
  { icon: Sparkles, value: "10+", label: "Years Experience" },
]

export default function Portfolio6Page() {
  const [activeTab, setActiveTab] = useState("all")

  const allTags = Array.from(new Set(caseStudies.flatMap(c => c.tags)))
  const filteredStudies = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.tags.includes(activeTab))

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-cyan-950">
      {/* Portfolio Switcher */}
      <div className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md py-2 px-4 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-slate-600 mr-2">View:</span>
          <a href="/portfolio" className="px-3 py-1 rounded text-slate-500 hover:text-white hover:bg-white/10 transition-colors">v1</a>
          <a href="/portfolio2" className="px-3 py-1 rounded text-slate-500 hover:text-white hover:bg-white/10 transition-colors">v2</a>
          <a href="/portfolio3" className="px-3 py-1 rounded text-slate-500 hover:text-white hover:bg-white/10 transition-colors">v3</a>
          <a href="/portfolio4" className="px-3 py-1 rounded text-slate-500 hover:text-white hover:bg-white/10 transition-colors">v4</a>
          <a href="/portfolio5" className="px-3 py-1 rounded text-slate-500 hover:text-white hover:bg-white/10 transition-colors">v5</a>
          <a href="/portfolio6" className="px-3 py-1 rounded bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium">v6</a>
        </div>
      </div>

      {/* Hero with Glassmorphism */}
      <section className="pt-20 pb-12 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Floating badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-emerald-400 text-sm font-medium">Available for Projects</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400">
                  Shane Jafar
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Brand Architect who builds premium identities through disruptive, high-impact marketing activations. 
                From hospitality to $100M+ real estate — I translate global vision into local market dominance.
              </p>

              {/* Contact cards */}
              <div className="flex flex-wrap gap-4">
                <a href="mailto:shanejafar@gmail.com" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all group">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">shanejafar@gmail.com</span>
                </a>
                <a href="tel:+16152385636" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">(615) 238-5636</span>
                </a>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300">Nashville & Amsterdam</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white border-0 rounded-full px-8">
                  View My Work
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>

            {/* Right - Profile Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Glow effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-6">
                  {/* Profile image */}
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/PortfolioPhotos/Shane Jafar.jpeg"
                      alt="Shane Jafar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {highlights.map((item, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                        <item.icon className="w-5 h-5 mx-auto mb-2 text-emerald-400" />
                        <p className="text-2xl font-bold text-white">{item.value}</p>
                        <p className="text-xs text-slate-400">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Case Studies
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Transformative brand work that delivered measurable business impact
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              All Projects
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTab(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tag
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid - Bento Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study, index) => (
              <div
                key={study.id}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-48"}`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  {/* Metric badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                    <p className="text-lg font-bold text-emerald-400">{study.metric}</p>
                    <p className="text-xs text-slate-400">{study.metricLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className={`text-slate-400 text-sm ${index === 0 ? "line-clamp-3" : "line-clamp-2"}`}>
                    {study.description}
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-medium group-hover:gap-3 transition-all">
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-2xl"></div>
            
            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Let's discuss how we can create market dominance together.
              </p>
              <a
                href="mailto:shanejafar@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-10 py-5 rounded-full hover:from-emerald-400 hover:to-cyan-400 transition-all text-lg"
              >
                <Mail className="w-6 h-6" />
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center">
        <p className="text-slate-600 text-sm">© 2024 Shane Jafar. Built with passion.</p>
      </footer>
    </div>
  )
}
