"use client"

import { useEffect, useRef, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Mail, Calendar, TrendingUp, Target, Users, Building, Megaphone, BarChart3, Instagram, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function ScrollReveal({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        setTimeout(() => setIsLoaded(true), 500)
      }
    }

    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script')
      script.src = '//www.instagram.com/embed.js'
      script.async = true
      script.onload = loadInstagramEmbed
      document.body.appendChild(script)
    } else {
      loadInstagramEmbed()
    }
  }, [url])

  return (
    <div 
      ref={containerRef} 
      className={`instagram-embed-wrapper transition-opacity duration-500 w-full ${isLoaded ? 'opacity-100' : 'opacity-70'}`}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        data-instgrm-captioned
        style={{
          background: '#f5f4ed',
          border: '1px solid #e4e4e7',
          borderRadius: '12px',
          boxShadow: 'none',
          margin: 0,
          maxWidth: '100%',
          minWidth: '200px',
          padding: 0,
          width: '100%',
        }}
      />
    </div>
  )
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

interface ContentSection {
  title: string
  icon?: string
  content: string
  image?: string
}

interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  year: string
  duration: string
  role: string
  location?: string
  results: { label: string; value: string; description: string }[]
  challenges: string[]
  solutions: string[]
  sections?: ContentSection[]
  disclaimer?: string
  quote?: { text: string; author: string }
  instagramLinks?: string[]
}

const caseStudiesData: Record<string, CaseStudy> = {
  "waldorf-astoria-amsterdam": {
    slug: "waldorf-astoria-amsterdam",
    title: "Waldorf Astoria Amsterdam",
    subtitle: "Luxury Hotel Go-To-Market Strategy",
    description: "Supported the reinvented Go-To-Market for one of Amsterdam's most iconic hotels.",
    fullDescription: "Served as the essential 'translation layer' between local Amsterdam market reality and global EMEA strategy, executing high-end activations that increased return visits by 10%. This project involved deep collaboration with Hilton's global marketing team while maintaining the unique character that makes Waldorf Astoria Amsterdam a destination in itself.",
    image: "/PortfolioPhotos/waldorf.webp",
    tags: ["Branding", "Social Media", "Go To Market", "Analytics", "A/B Testing"],
    year: "2023",
    duration: "8 months",
    role: "Marketing Strategist",
    location: "Amsterdam, Netherlands",
    results: [
      { label: "Return Visits", value: "+10%", description: "Increase in guest return rate through targeted activations" },
      { label: "Brand Awareness", value: "+45%", description: "Growth in local market brand recognition" },
      { label: "Social Engagement", value: "+120%", description: "Improvement in social media engagement metrics" },
    ],
    challenges: [
      "Balancing global Waldorf Astoria brand standards with local Amsterdam market expectations",
      "Competing in a saturated luxury hospitality market",
      "Translating EMEA-wide campaigns into locally relevant activations",
    ],
    solutions: [
      "Developed a 'glocal' strategy that maintained brand integrity while resonating with Dutch sensibilities",
      "Created exclusive experiences that leveraged Amsterdam's unique cultural offerings",
      "Implemented A/B testing framework to optimize messaging across channels",
    ],
  },
  "doubletree-hilton-al-barsha": {
    slug: "doubletree-hilton-al-barsha",
    title: "DoubleTree by Hilton Al Barsha",
    subtitle: "Complete Marketing & Social Media Strategy",
    description: "Built the entire marketing and social media plan from scratch for a 359-room hotel in one of Dubai's most competitive locations.",
    fullDescription: "DoubleTree by Hilton Al Barsha is a 359-room hotel opposite the Mall of the Emirates in Dubai — a competitive, high-footfall location in one of the world's most crowded hospitality markets. I created the entire marketing and social media plan from scratch during a 3–6 month engagement before the hotel left the Hilton portfolio.",
    image: "/PortfolioPhotos/DT_Barsha.webp",
    tags: ["Social Media", "Go To Market", "Branding", "Content Strategy", "Paid Media"],
    year: "2022",
    duration: "3-6 months",
    role: "Solo Marketing Lead",
    location: "Al Barsha, Dubai",
    disclaimer: "Visual assets from this project are unavailable as the hotel has since left the Hilton portfolio. The descriptions below represent the strategy and content framework I delivered.",
    results: [
      { label: "Monthly Views", value: "50K+", description: "Consistent monthly view count achieved" },
      { label: "Total Reach", value: "+2,377%", description: "Massive increase in audience reach" },
      { label: "ROI", value: "6%", description: "Return on targeted marketing activations" },
    ],
    challenges: [
      "Starting from zero with no existing marketing infrastructure or content library",
      "Competing in Dubai's saturated luxury hospitality market against properties with larger teams",
      "Cutting through the noise to reach both leisure travellers and long-stay corporate guests",
    ],
    solutions: [
      "Built a comprehensive social media strategy with four distinct content pillars for different audience segments",
      "Created a monthly planning framework balancing brand content with commercial objectives",
      "Developed targeted paid media campaigns for three distinct audience segments across Meta and Google",
    ],
    sections: [
      {
        title: "Al Barsha, Dubai",
        icon: "location",
        content: "Located directly opposite the Mall of the Emirates — home to Ski Dubai and one of the city's premier retail and dining destinations — the hotel sits in a highly competitive corridor alongside Dubai Internet City, Media City, and the Dubai Marina. The marketing challenge was cutting through the noise of a saturated luxury market while speaking to both leisure travellers and long-stay corporate guests.",
      },
      {
        title: "Social Media Strategy",
        icon: "social",
        content: "Dubai's hospitality market is one of the most competitive on social media — every hotel fights for the same travel audience. The strategy I built for DoubleTree Al Barsha focused on four content pillars that spoke distinctly to the hotel's mix of leisure guests, long-stay residents, and corporate travellers.",
      },
      {
        title: "Monthly Planning Framework",
        icon: "calendar",
        content: "The content calendar mapped out organic social posts, paid campaign windows, and promotional moments across each month — ensuring a consistent cadence that balanced brand content with commercial objectives.",
      },
      {
        title: "Instagram Content Framework",
        icon: "instagram",
        content: "Posts were designed to balance aspirational lifestyle content with clear calls to action — speaking to Dubai's diverse audience of tourists, expats, and business travellers in a market where visual quality is non-negotiable.",
      },
      {
        title: "Advertising Plan",
        icon: "advertising",
        content: "The paid media plan targeted three distinct audience segments across Meta and Google — each with its own objective, creative brief, and targeting parameters suited to Dubai's competitive hospitality advertising landscape.",
      },
    ],
  },
  "waterprof": {
    slug: "waterprof",
    title: "Waterprof",
    subtitle: "Website Design, Development & LinkedIn Presence",
    description: "Designed and built the website and LinkedIn presence for a water, climate, and energy consultancy.",
    fullDescription: "Waterprof connects professionals working at the intersection of water, climate adaptation, and the energy transition. I designed and built their website and LinkedIn presence — translating a complex, impact-driven mission into a clear, credible digital identity.",
    image: "/PortfolioPhotos/Wateprof.webp",
    tags: ["Web Design", "WordPress", "LinkedIn", "B2B", "Content Strategy"],
    year: "2023",
    duration: "6 months",
    role: "Web Designer & Digital Strategist",
    location: "Netherlands",
    results: [
      { label: "Revenue Generated", value: "$300K", description: "Direct revenue attributed to marketing efforts" },
      { label: "Digital Growth", value: "+233%", description: "Increase in digital presence and engagement" },
      { label: "Lead Quality", value: "+85%", description: "Improvement in qualified lead generation" },
    ],
    challenges: [
      "Communicating a complex mission spanning consultancy, knowledge network, and training provider",
      "Serving multiple audiences: municipal water boards, urban planners, engineers, and policy makers",
      "Building credibility in a technical, high-trust B2B environment",
    ],
    solutions: [
      "Designed clear information architecture that serves multiple audience types without losing clarity",
      "Built a cohesive WordPress site from structure to visual design to content",
      "Created a LinkedIn presence focused on thought leadership and network building",
    ],
    sections: [
      {
        title: "The Challenge",
        icon: "analytics",
        content: "Waterprof sits at a unique crossroads — part consultancy, part knowledge network, part training provider. Their audience ranges from municipal water boards and urban planners to engineers and policy makers. The challenge was building a digital home that communicates all of that without losing clarity or warmth.",
      },
      {
        title: "Design & Development",
        icon: "social",
        content: "I designed and built the full website on WordPress, from information architecture and page structure to visual design and content. The site needed to serve multiple audiences and content types, while feeling cohesive and easy to navigate. Key pages included the frontpage, theme pages, project pages, and contact page.",
      },
      {
        title: "LinkedIn",
        icon: "calendar",
        content: "I set up and managed the Waterprof LinkedIn page — building a professional presence for a niche but high-trust audience of water professionals, policy makers, and municipal clients. Content focused on thought leadership, project highlights, and network building.",
      },
    ],
  },
  "hilton-global-fb-campaign": {
    slug: "hilton-global-fb-campaign",
    title: "La Viva Piña — Hilton Global F&B Campaign",
    subtitle: "70th Anniversary of the Piña Colada",
    description: "Supported the social media content and campaign strategy for Hilton's celebration of the piña colada's 70th anniversary.",
    fullDescription: "In 1954, bartender Ramón \"Monchito\" Marrero invented the piña colada at the Beachcomber Bar of Caribe Hilton in Puerto Rico. Seventy years later, Hilton Hotels & Resorts celebrated this icon with a global campaign — and I supported the social media content and campaign strategy behind it.",
    image: "/PortfolioPhotos/HiltonPinaColada.webp",
    tags: ["Social Media", "Content Strategy", "Global Campaign", "F&B Marketing"],
    year: "2024",
    duration: "4 months",
    role: "Social Media Strategist",
    location: "Global (Puerto Rico, Philippines, Japan, UK & more)",
    results: [
      { label: "Engagement Spike", value: "+1,230%", description: "Massive increase in campaign engagement" },
      { label: "Sales Increase", value: "+20%", description: "Direct impact on F&B revenue" },
      { label: "Properties Activated", value: "50+", description: "Hotels participating across EMEA" },
    ],
    challenges: [
      "Telling a 70-year-old origin story in a way that felt fresh and relevant to modern audiences",
      "Coordinating content and events across properties in Puerto Rico, Philippines, Japan, UK, and beyond",
      "Balancing historical storytelling with commercial campaign objectives",
    ],
    solutions: [
      "Developed a content strategy that mixed historical storytelling with cocktail spotlights and live event coverage",
      "Timed campaign around National Piña Colada Day (July 10) for maximum cultural relevance",
      "Created flexible content frameworks that allowed each property to localize while maintaining brand consistency",
    ],
    sections: [
      {
        title: "A Drink, A Story, A Global Moment",
        icon: "social",
        content: "The piña colada is one of the world's most iconic cocktails — and Hilton owns its origin story. The 70th anniversary was a genuine cultural milestone, with events at properties across Puerto Rico, the Philippines, Japan, the UK, and beyond. My role was to help shape the social media strategy and content that brought this story to life for a global audience.",
      },
      {
        title: "Social Media Strategy",
        icon: "instagram",
        content: "Content ran across Hilton's social channels throughout July — timed around National Piña Colada Day on July 10. Posts ranged from historical storytelling and cocktail spotlights to live competition coverage and property event content.",
      },
    ],
    instagramLinks: [
      "https://www.instagram.com/p/C95CzrVi5Vc/",
    ],
  },
  "bar-reve": {
    slug: "bar-reve",
    title: "Bar Rêve",
    subtitle: "Website Design, Development & Social Media Launch",
    description: "Supported the launch of a Belle Époque-inspired Brooklyn cocktail bar with website design and Instagram strategy.",
    fullDescription: "Bar Rêve is a cocktail bar in Brooklyn inspired by Belle Époque Paris — a time of optimism, beauty, and revelry. I supported their launch by designing the wireframe, building the website, and creating their Instagram presence from scratch.",
    image: "/PortfolioPhotos/Bar_Reve.webp",
    tags: ["Web Design", "Development", "Social Media", "Branding", "Content Strategy"],
    year: "2024",
    duration: "3 months",
    role: "Web Designer & Social Lead",
    location: "Brooklyn, NY",
    quote: {
      text: "With each drink, we invite you to dream — to escape to that lost moment.",
      author: "Bar Rêve"
    },
    results: [
      { label: "Foot Traffic", value: "+25%", description: "Increase in weekend visitors" },
      { label: "Social Following", value: "+180%", description: "Growth in social media audience" },
      { label: "Event Bookings", value: "+40%", description: "Increase in private event inquiries" },
    ],
    challenges: [
      "Creating a digital presence that captures the romantic, Parisian atmosphere of the physical space",
      "Building anticipation and community before the bar opened its doors",
      "Establishing a distinctive visual language in a crowded Brooklyn nightlife market",
    ],
    solutions: [
      "Designed wireframes that established the hierarchy and rhythm of the Bar Rêve experience",
      "Built a website that feels like walking into the bar — romantic, otherworldly, and inviting",
      "Created a moody, Parisian-inspired Instagram feed that set the tone before launch",
    ],
    sections: [
      {
        title: "Structural Design",
        icon: "analytics",
        content: "Before any visuals, I mapped out the full site structure — defining the flow from landing page to menus, reservations, and events. The wireframes established the hierarchy and rhythm that carries the Bar Rêve experience.",
      },
      {
        title: "Design & Development",
        icon: "social",
        content: "I built the full site to carry the Belle Époque spirit into every detail — the typography, pacing, and atmosphere. The site needed to feel like walking into the bar: romantic, a little otherworldly, and immediately inviting.",
      },
      {
        title: "Instagram — @bar.reve.nyc",
        icon: "instagram",
        content: "I created the Bar Rêve social media strategy from scratch ahead of launch, establishing the visual language, content strategy, and tone before the doors ever opened. The feed had to feel like the bar itself: moody, romantic, a little Parisian.",
      },
    ],
    instagramLinks: [
      "https://www.instagram.com/p/DP4oPR-EpcD/",
      "https://www.instagram.com/p/DR5AEffDoZj/",
      "https://www.instagram.com/p/DP4oLxxEvFK/",
    ],
  },
  "nami": {
    slug: "nami",
    title: "Nami",
    subtitle: "Brand Identity & Social Media Launch",
    description: "A ramen restaurant rooted in Japanese craft and Utrecht warmth. I built the brand from the ground up.",
    fullDescription: "Nami arrived in Utrecht as a new kind of ramen spot — intimate, ingredient-led, and quietly ambitious. The challenge was to build a visual identity that felt genuinely Japanese without leaning on tired tropes, and a social presence that could build an audience from nothing before the first bowl was even served.",
    image: "/PortfolioPhotos/Nami.png",
    tags: ["Branding", "Identity Design", "Social Media", "Content Strategy"],
    year: "2024",
    duration: "4 months",
    role: "Brand Strategist & Creative Director",
    location: "Utrecht, Netherlands",
    quote: {
      text: "Nami (波) means wave in Japanese — a rhythm, a force, something that keeps coming back. The brand had to carry that.",
      author: "Brand Philosophy"
    },
    results: [
      { label: "Pre-Launch Following", value: "2K+", description: "Audience built before doors opened" },
      { label: "Opening Week", value: "Sold Out", description: "Reservations filled within days of launch" },
      { label: "Brand Recognition", value: "Strong", description: "Immediate local recognition in Utrecht" },
    ],
    challenges: [
      "Creating an authentic Japanese visual identity without relying on clichés or stereotypes",
      "Building anticipation and an audience before the restaurant even opened",
      "Establishing a distinctive voice in Utrecht's growing food scene",
    ],
    solutions: [
      "Developed a minimal wordmark paired with a traditional water stamp motif — a nod to Japanese seals",
      "Created a content strategy mixing atmospheric photography, process content, and considered storytelling",
      "Built a cohesive Instagram presence that made the restaurant feel like a destination before it existed",
    ],
    sections: [
      {
        title: "Logo & Visual Language",
        icon: "analytics",
        content: "The identity pairs a minimal wordmark with a water stamp motif — a nod to traditional Japanese seals. Clean, confident, and legible at every scale. Every bowl is a conversation between tradition and the present moment. Made with care. Served with intention.",
      },
      {
        title: "Instagram Content — @nami.utrecht",
        icon: "instagram",
        content: "I developed the full content strategy, tone of voice, and visual templates for the @nami.utrecht account — building an audience before the restaurant's opening through a mix of atmospheric photography, process content, and considered storytelling.",
      },
    ],
    instagramLinks: [
      "https://www.instagram.com/p/DViUX3RjWT5/",
      "https://www.instagram.com/p/DT5NZ6EDi_q/",
      "https://www.instagram.com/p/DUs74QzjTQx/",
      "https://www.instagram.com/p/DV-7aH7loVk/",
      "https://www.instagram.com/p/DUYYWMUDwry/",
      "https://www.instagram.com/p/DUA7y_UEVsw/",
    ],
  },
  "nissan-north-america": {
    slug: "nissan-north-america",
    title: "Nissan North America",
    subtitle: "The Wond'ry Consultancy Project",
    description: "Marketing consultancy identifying budgetary efficiencies.",
    fullDescription: "As Marketing Lead for a consultancy project through the Wond'ry, I synthesized complex market research for a global industry leader to identify $20k in monthly budgetary efficiencies. By acting as the bridge between technical data and corporate strategy, I provided the 'business intelligence' necessary to optimize Nissan's North American footprint and tech-led campaigns.",
    image: "/PortfolioPhotos/Nissan_NA.webp",
    tags: ["Branding", "Analytics", "Data-Driven", "A/B Testing"],
    year: "2021",
    duration: "4 months",
    role: "Marketing Consultant Lead",
    results: [
      { label: "Monthly Savings", value: "$20K", description: "Identified budgetary efficiencies" },
      { label: "Recommendations", value: "15+", description: "Actionable strategic recommendations delivered" },
      { label: "Data Sources", value: "25+", description: "Market data sources analyzed and synthesized" },
    ],
    challenges: [
      "Processing vast amounts of market and competitive data",
      "Translating technical findings into executive-level insights",
      "Delivering actionable recommendations within tight timeline",
    ],
    solutions: [
      "Developed systematic approach to data analysis and synthesis",
      "Created clear visualization of findings for stakeholder presentations",
      "Prioritized recommendations by impact and implementation feasibility",
    ],
  },
}

function getSectionIcon(iconType?: string) {
  switch (iconType) {
    case "location":
      return <Building className="w-5 h-5 text-zinc-500" />
    case "social":
      return <Megaphone className="w-5 h-5 text-zinc-500" />
    case "calendar":
      return <Calendar className="w-5 h-5 text-zinc-500" />
    case "instagram":
      return <Instagram className="w-5 h-5 text-zinc-500" />
    case "advertising":
      return <CreditCard className="w-5 h-5 text-zinc-500" />
    case "analytics":
      return <BarChart3 className="w-5 h-5 text-zinc-500" />
    default:
      return <Target className="w-5 h-5 text-zinc-500" />
  }
}

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params.slug as string
  const caseStudy = caseStudiesData[slug]

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f4ed' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">Case Study Not Found</h1>
          <Link href="/portfolio">
            <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f4ed' }}>
      {/* Navigation */}
      <nav className="py-6 px-4 md:px-8 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
          <a 
            href="mailto:shanejafar@gmail.com"
            className="px-5 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Let's Chat!
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-4">CASE STUDY</p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">{caseStudy.title}</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <p className="text-xl text-zinc-500 mb-8">{caseStudy.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-12">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Project Info */}
          <ScrollReveal delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-zinc-200">
              <div>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-1">YEAR</p>
                <p className="text-zinc-900 font-medium">{caseStudy.year}</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-1">DURATION</p>
                <p className="text-zinc-900 font-medium">{caseStudy.duration}</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-1">ROLE</p>
                <p className="text-zinc-900 font-medium">{caseStudy.role}</p>
              </div>
              {caseStudy.location && (
                <div>
                  <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-1">LOCATION</p>
                  <p className="text-zinc-900 font-medium">{caseStudy.location}</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-6">OVERVIEW</p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-lg text-zinc-700 leading-relaxed mb-8">{caseStudy.fullDescription}</p>
          </ScrollReveal>
          
          {/* Disclaimer if exists */}
          {caseStudy.disclaimer && (
            <ScrollReveal delay={150}>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
                <p className="text-zinc-600 text-sm italic">{caseStudy.disclaimer}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Quote Section */}
      {caseStudy.quote && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <blockquote className="border-l-4 border-zinc-300 pl-8">
                <p className="text-2xl md:text-3xl text-zinc-700 italic leading-relaxed mb-4">
                  "{caseStudy.quote.text}"
                </p>
                <p className="text-zinc-500 font-medium">— {caseStudy.quote.author}</p>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-16 px-4 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-10">KEY RESULTS</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.results.map((result, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">{result.value}</p>
                  <p className="text-zinc-700 font-medium mb-1">{result.label}</p>
                  <p className="text-sm text-zinc-500">{result.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sections (for detailed case studies) */}
      {caseStudy.sections && caseStudy.sections.length > 0 && (
        <section className="py-16 px-4 border-t border-zinc-200">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-10">PROJECT DETAILS</p>
            </ScrollReveal>
            
            <div className="space-y-16">
              {caseStudy.sections.map((section, index) => (
                <ScrollReveal key={index}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {getSectionIcon(section.icon)}
                      <h3 className="text-xl font-bold text-zinc-900">{section.title}</h3>
                    </div>
                    <p className="text-zinc-600 leading-relaxed">{section.content}</p>
                    {section.image && (
                      <div className="mt-6 rounded-lg overflow-hidden">
                        <img src={section.image} alt={section.title} className="w-full" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Instagram Embeds */}
            {caseStudy.instagramLinks && caseStudy.instagramLinks.length > 0 && (
              <ScrollReveal>
                <div className="mt-20 pt-16 border-t border-zinc-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Instagram className="w-5 h-5 text-zinc-500" />
                    <p className="text-xs font-semibold tracking-widest text-zinc-400">FEATURED POSTS</p>
                  </div>
                  <p className="text-zinc-600 mb-10">See the work in action on Instagram.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {caseStudy.instagramLinks.map((link, index) => (
                      <div 
                        key={index} 
                        className="flex justify-center items-start p-2 rounded-lg bg-white/50 overflow-hidden"
                      >
                        <InstagramEmbed url={link} />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-6">CHALLENGES</p>
              </ScrollReveal>
              <ul className="space-y-6">
                {caseStudy.challenges.map((challenge, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {index + 1}
                      </span>
                      <p className="text-zinc-600">{challenge}</p>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-6">SOLUTIONS</p>
              </ScrollReveal>
              <ul className="space-y-6">
                {caseStudy.solutions.map((solution, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {index + 1}
                      </span>
                      <p className="text-zinc-600">{solution}</p>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Interested in similar results?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-zinc-500 mb-8">Let's discuss how we can transform your brand.</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:shanejafar@gmail.com"
                className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                Get in Touch
              </a>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 border border-zinc-300 text-zinc-700 rounded-full font-medium hover:bg-zinc-100 transition-colors"
              >
                View More Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-400 text-sm">Shane Jafar</span>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" className="text-zinc-400 hover:text-zinc-600 text-sm">LinkedIn</a>
            <a href="https://instagram.com" className="text-zinc-400 hover:text-zinc-600 text-sm">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
