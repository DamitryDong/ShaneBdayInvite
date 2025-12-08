"use client"

import type React from "react"  

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, PartyPopper, Snowflake } from "lucide-react"
import emailjs from "emailjs-com"

// Snowflake component for the falling snow effect
function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])
  
  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 10,
      size: 10 + Math.random() * 20,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall text-white/60"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}

export function BirthdayInvite() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
  })
  const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const templateParams = {
    name: formData.name,
    email: formData.email,
  }

  emailjs
    .send(
      "service_d05vd1r",   // from EmailJS dashboard
      "template_pa1m89p",  // from EmailJS dashboard
      templateParams,
      "5FEnOvl-Uv45c9Ey7"    // from EmailJS dashboard
    )
    .then(
      (response) => {
        console.log("✅ Email sent!", response.status, response.text)
        alert("RSVP sent successfully!")
        setSubmitted(true)
      },
      (error) => {
        console.error("❌ Failed to send:", error)
        alert("Error sending RSVP")
      }
    )
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 relative">
      <Snowflakes />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Show this image on laptop and larger screens */}
          <img
            src="/Shanebdaybackground.png"
            alt="Birthday celebration"
            className="hidden md:block w-full h-full object-cover opacity-70"
          />

          {/* Show this image on phone and smaller screens */}
          <img
            src="/Untitled design.png"
            alt="Birthday celebration"
            className="block md:hidden w-full h-full object-cover opacity-70"
          />

          <div className="absolute inset-0" />
        </div>

        {/* Content - Adjusted vertical padding for mobile: py-20 instead of py-40 */}
        <div className="z-10 container mx-auto py-20 md:py-40 text-center">
          <div className="max-w-4xl mx-auto space-y-8">


            {/* Main Title */}
            <div className="space-y-3 z-50 relative text-center px-4 text-white">
              <div className="flex justify-center">
                <img
                  src="/PNG image.png"
                  alt="ShaneDay Logo"
                  className="
                    w-20  
                    sm:w-24 
                    md:w-32
                    lg:w-36 
                    mb-2 
                    drop-shadow-lg 
                    animate-wobble
                  "
                />
              </div>


              {/* Winter decorations */}
              <div className="flex justify-center gap-4 mb-4">
                <Snowflake className="w-8 h-8 text-sky-300 animate-spin-slow" />
                <Snowflake className="w-6 h-6 text-white/80 animate-pulse" />
                <Snowflake className="w-8 h-8 text-sky-300 animate-spin-slow" />
              </div>

              {/* Subtitle */}
              <h3 className="text-lg sm:text-2xl md:text-5xl font-semibold tracking-tight leading-snug drop-shadow-md">
                 You're invited to the winter edition of 
              </h3>

              {/* Big gradient title */}
              <h1
                className="
                  text-7xl sm:text-8xl md:text-9xl 
                  font-extrabold tracking-tighter 
                  bg-gradient-to-r from-sky-300 via-white to-indigo-300 
                  bg-clip-text text-transparent 
                  animate-gradient-x 
                  leading-[0.9] drop-shadow-lg
                "
              >
                SHANEDAY
              </h1>
              
              {/* Winter subtitle */}
              <p className="text-sky-200 text-xl sm:text-2xl font-medium animate-pulse">
                ✨ A Frosty Celebration ✨
              </p>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12 px-4 sm:px-6">
              <Card
                className="
                  group 
                  p-6 sm:p-8 
                  bg-gradient-to-br from-sky-900/80 to-indigo-950/90 
                  border-2 border-sky-400/30 
                  hover:border-sky-300 
                  transition-all 
                  text-center 
                  rounded-2xl 
                  shadow-lg shadow-sky-900/50
                  z-50
                  hover:scale-105
                  backdrop-blur-sm
                "
              >
                <div className="relative">
                  <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-sky-300" />
                  <Snowflake className="w-4 h-4 absolute -top-1 -right-1 text-white/60" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-2 text-sky-200">
                  Date
                </h3>
                <p className="text-lg sm:text-xl font-medium text-sky-100">
                  Saturday, December 13th
                </p>
                <p className="text-lg sm:text-xl font-medium text-sky-100">
                  2025
                </p>
              </Card>

              <Card
                className="
                  group 
                  p-6 sm:p-8 
                  bg-gradient-to-br from-indigo-900/80 to-slate-950/90 
                  border-2 border-sky-400/30 
                  hover:border-sky-300 
                  transition-all 
                  text-center 
                  rounded-2xl 
                  shadow-lg shadow-indigo-900/50
                  z-50
                  hover:scale-105
                  backdrop-blur-sm
                "
              >
                <div className="relative">
                  <Clock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-sky-300" />
                  <Snowflake className="w-4 h-4 absolute -top-1 -right-1 text-white/60" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-2 text-sky-200">
                  Time
                </h3>
                <p className="text-lg sm:text-xl font-medium text-indigo-100">
                  5:00 PM CET
                </p>
                <p className="text-lg sm:text-xl font-medium text-indigo-100">
                  Onwards
                </p>
              </Card>
            </div>

              <div className="flex justify-center">
                <img
                  src="/PNG image (3).png"
                  alt="ShaneDay Logo"
                  className="
                    w-20  
                    sm:w-24 
                    md:w-32
                    lg:w-36 
                    mb-2 
                    drop-shadow-lg 
                    animate-wobble
                  "
                />
              </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-sky-950 relative">
        {/* Decorative snowflake pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">❄️</div>
          <div className="absolute top-20 right-20 text-4xl">❄️</div>
          <div className="absolute bottom-20 left-1/4 text-5xl">✨</div>
          <div className="absolute bottom-10 right-10 text-6xl">❄️</div>
        </div>
        
        {/* Added mobile horizontal padding: px-4 */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Constrained max width slightly for better centering on all phones */}
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center gap-3 mb-4">
                <Snowflake className="w-10 h-10 text-sky-300 animate-spin-slow" />
                <Snowflake className="w-8 h-8 text-white/80 animate-pulse" />
                <Snowflake className="w-10 h-10 text-sky-300 animate-spin-slow" />
              </div>
              {/* Font size adjusted for smaller screen: text-4xl md:text-6xl */}
              <h2 className="text-4xl text-sky-100 md:text-6xl font-bold mb-4 text-balance">
                 Join the Celebration 
              </h2>
              <p className="text-lg text-sky-200 leading-relaxed">
                Let us know if you can make it! Address will be sent to you by Shane himself :D !!
              </p>
            </div>

            {!submitted ? (
              <Card className="p-8 md:p-12 bg-gradient-to-br from-sky-900/90 to-indigo-900/90 border-2 border-sky-400/50 shadow-2xl shadow-sky-500/20 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base text-sky-200">
                      ❄️ Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="i.e. Damitry Dong"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 text-base bg-white/10 border-sky-400/30 text-white placeholder:text-white/50 focus:border-sky-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base text-sky-200">
                      ✨ Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="i.e. john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 text-base bg-white/10 border-sky-400/30 text-white placeholder:text-white/50 focus:border-sky-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white cursor-pointer border-2 border-sky-300/50 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02]"
                  >
                    ❄️ Confirm Attendance ❄️
                  </Button>
                </form>
              </Card>
            ) : (
              <Card className="p-12 text-center bg-gradient-to-br from-sky-900/90 to-indigo-900/90 border-2 border-sky-300">
                <PartyPopper className="w-16 h-16 mx-auto mb-4 text-sky-300 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2 text-sky-100">❄️ You're on the list! ❄️</h3>
                <p className="text-sky-200 text-lg">
                  Thanks for RSVPing, {formData.name}. See you at the party! ✨
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-sky-400/30 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <Snowflake className="w-6 h-6 text-sky-300/60 animate-spin-slow" />
            <Snowflake className="w-5 h-5 text-white/60 animate-pulse" />
            <Snowflake className="w-6 h-6 text-sky-300/60 animate-spin-slow" />
          </div>
          <p className="text-sky-200 font-semibold text-lg">
            ❄️ BE EXCITED ❄️
          </p>
        </div>
      </footer>
    </div>
  )
}