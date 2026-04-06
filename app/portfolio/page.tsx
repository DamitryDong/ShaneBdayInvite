"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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

interface CaseStudy {
  id: number
  title: string
  description: string
  highlights: string[]
  image: string
  slug: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "DoubleTree by Hilton Al Barsha",
    description: "Built the entire marketing and social media plan from scratch for a 359-room Dubai hotel.",
    highlights: [
      "Transformed a dormant department into a high-visibility operation delivering 50,000+ monthly views",
      "Achieved 2,377% increase in total reach through strategic content",
      "Delivered 6% ROI on targeted marketing activations",
    ],
    image: "/PortfolioPhotos/DT_Barsha.webp",
    slug: "doubletree-hilton-al-barsha",
  },
  {
    id: 2,
    title: "Waterprof",
    description: "Designed and built their WordPress website and LinkedIn presence.",
    highlights: [
      "Translated a complex, impact-driven mission into a clear digital identity",
      "Built information architecture serving multiple audiences from municipal water boards to engineers",
      "Established thought leadership presence on LinkedIn for B2B engagement",
    ],
    image: "/PortfolioPhotos/Wateprof.webp",
    slug: "waterprof",
  },
  {
    id: 3,
    title: "La Viva Piña — Hilton Global Campaign",
    description: "Supported the social media strategy for Hilton's 70th anniversary piña colada celebration.",
    highlights: [
      "Drove a 1,230% spike in engagement across Hilton's social channels",
      "Coordinated content across properties in Puerto Rico, Philippines, Japan, UK and beyond",
      "Timed campaign around National Piña Colada Day for maximum cultural relevance",
    ],
    image: "/PortfolioPhotos/HiltonPinaColada.webp",
    slug: "hilton-global-fb-campaign",
  },
  {
    id: 4,
    title: "Bar Rêve",
    description: "A Belle Époque-inspired Brooklyn cocktail bar — website and Instagram from scratch.",
    highlights: [
      "Designed wireframes and built the full website carrying the romantic, Parisian atmosphere",
      "Created Instagram strategy that built community before the doors even opened",
      "Achieved +25% increase in foot traffic and +180% social following growth",
    ],
    image: "/PortfolioPhotos/Bar_Reve.webp",
    slug: "bar-reve",
  },
  {
    id: 5,
    title: "Nami",
    description: "A ramen restaurant rooted in Japanese craft and Utrecht warmth.",
    highlights: [
      "Built the brand from the ground up — identity, voice, and social presence",
      "Created visual identity pairing minimal wordmark with traditional Japanese water stamp motif",
      "Built 2K+ following before doors opened, resulting in sold-out opening week",
    ],
    image: "/PortfolioPhotos/Nami.png",
    slug: "nami",
  },
]

const expertise = {
  "Brand Strategy": [
    "Go-To-Market Strategy",
    "Brand Identity Development",
    "Market Positioning",
    "Competitive Analysis",
  ],
  "Digital Marketing": [
    "Social Media Strategy",
    "Content Creation",
    "Paid Media Campaigns",
    "Analytics & Reporting",
  ],
  "Web & Design": [
    "Website Design",
    "WordPress Development",
    "UX/UI Design",
    "Visual Identity",
  ],
  "Tools & Platforms": [
    "Adobe Creative Suite",
    "Meta Business Suite",
    "Google Analytics",
    "Figma",
  ],
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f4ed' }}>
      {/* Navigation */}
      <nav className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-semibold text-zinc-900">Shane Jafar</span>
          <div className="flex items-center gap-8">
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#about" className="text-zinc-600 hover:text-zinc-900 transition-colors">About</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 transition-colors">Contact</a>
            <a 
              href="mailto:shanejafar@gmail.com"
              className="px-5 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Let's Chat!
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Two Column Layout */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Image */}
            <ScrollReveal>
              <div className="relative">
                <img 
                  src="/PortfolioPhotos/Shane Jafar.jpeg" 
                  alt="Shane Jafar" 
                  className="w-full h-auto rounded-[40px] shadow-lg"
                />
              </div>
            </ScrollReveal>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <ScrollReveal delay={100}>
                <h1 className="text-5xl font-bold text-zinc-900">
                  Shane Jafar
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-2xl md:text-3xl text-zinc-500 font-light mb-2">
                  Marketing Strategist & Creative Director
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={150}>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-8">
                  <span className="relative inline-block">
                    ABOUT ME
                    <span className="absolute -bottom-1 left-0 w-full h-3 bg-zinc-200/50 -z-10 rounded-full"></span>
                  </span>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-base text-zinc-700 leading-relaxed mb-6">
                  Hello! I'm Shane, a hands-on executor who builds premium brand identities through disruptive, 
                  high-impact marketing activations. From revitalizing dormant hospitality departments to 
                  launching $100M+ real estate assets, I serve as the operational 'doer' who translates 
                  global vision into local market dominance. Based in Nashville, TN & Amsterdam, NL.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <p className="text-base text-zinc-700 leading-relaxed mb-6">
                  Here are some of my achievements:
                </p>
              </ScrollReveal>

              <ul className="space-y-4">
                <ScrollReveal delay={300}>
                  <li className="flex gap-3 text-sm">
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-700">
                      Achieved a <strong>2,377% increase in total reach</strong> at DoubleTree by Hilton Al Barsha, 
                      building the entire marketing operation from scratch as the sole marketing resource.
                    </span>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={350}>
                  <li className="flex gap-3 text-sm">
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-700">
                      Drove a <strong>1,230% spike in engagement</strong> for Hilton's global 70th anniversary 
                      piña colada campaign across properties worldwide.
                    </span>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <li className="flex gap-3 text-sm">
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-700">
                      Served as the 'translation layer' for <strong>Waldorf Astoria Amsterdam</strong>, 
                      executing activations that increased return visits by 10%.
                    </span>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={450}>
                  <li className="flex gap-3 text-sm">
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-700">
                      Identified <strong>$20k in monthly budgetary efficiencies</strong> for Nissan North America 
                      through strategic market research synthesis.
                    </span>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                  <li className="flex gap-3 text-sm">
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-700">
                      Built brand identities and digital presences for restaurants and bars including 
                      <strong> Nami Utrecht</strong> and <strong>Bar Rêve Brooklyn</strong> — both achieving 
                      sold-out openings.
                    </span>
                  </li>
                </ScrollReveal>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* Areas of Expertise */}
      <section className="py-16 px-4 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-10">AREAS OF EXPERTISE</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(expertise).map(([category, skills], index) => (
              <ScrollReveal key={category} delay={index * 100}>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {skills.map((skill) => (
                      <li key={skill} className="text-zinc-500 text-sm">{skill}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-10">PREVIOUS WORK</p>
          </ScrollReveal>
          
          <div className="space-y-16">
            {caseStudies.map((caseStudy) => (
              <ScrollReveal key={caseStudy.id}>
                <Link 
                  href={`/portfolio/${caseStudy.slug}`}
                  className="group block"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start p-6 -m-6 rounded-2xl transition-all duration-300 hover:bg-zinc-100 cursor-pointer">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/600x400/e4e4e7/71717a?text=${encodeURIComponent(caseStudy.title)}`
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors">{caseStudy.title}</h3>
                      <p className="text-zinc-500 mb-4">{caseStudy.description}</p>
                      
                      <ul className="space-y-3 mb-6">
                        {caseStudy.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-3 text-sm">
                            <span className="text-zinc-400">•</span>
                            <span className="text-zinc-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-2 text-zinc-900 font-medium group-hover:gap-3 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Let's work together</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-zinc-500 mb-8">
              Available for freelance projects and full-time opportunities.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a 
                href="mailto:shanejafar@gmail.com"
                className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                shanejafar@gmail.com
              </a>
              <a 
                href="tel:+16152385636"
                className="px-8 py-3 border border-zinc-300 text-zinc-700 rounded-full font-medium hover:bg-zinc-100 transition-colors"
              >
                (615) 238-5636
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-zinc-400 text-sm">Nashville, TN & Amsterdam, NL</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-400 text-sm">Shane Jafar</span>
        </div>
      </footer>

    </div>
  )
}
