"use client"

import type React from "react"  

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Clock, PartyPopper } from "lucide-react"
import emailjs from "emailjs-com"

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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
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


              {/* Subtitle */}
              <h3 className="text-lg sm:text-2xl md:text-5xl font-semibold tracking-tight leading-snug drop-shadow-md">
                You're Invited to the 23rd Edition of
              </h3>

              {/* Big gradient title */}
              <h1
                className="
                  text-7xl sm:text-8xl md:text-9xl 
                  font-extrabold tracking-tighter 
                  bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 
                  bg-clip-text text-transparent 
                  animate-gradient-x 
                  leading-[0.9] drop-shadow-lg
                "
              >
                SHANEDAY
              </h1>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12 px-4 sm:px-6">
              <Card
                className="
                  group 
                  p-6 sm:p-8 
                  bg-black/60 
                  border-2 border-transparent 
                  hover:border-white 
                  transition-colors 
                  text-center 
                  rounded-2xl 
                  shadow-lg 
                  z-50
                "
              >
                <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-white" />
                <h3 className="font-bold text-xl sm:text-2xl mb-2 text-white">
                  Date
                </h3>
                <p className="text-lg sm:text-xl font-medium text-gray-200">
                  Friday, October 31st
                </p>
                <p className="text-lg sm:text-xl font-medium text-gray-200">
                  2025
                </p>
              </Card>

              <Card
                className="
                  group 
                  p-6 sm:p-8 
                  bg-black/60 
                  border-2 border-transparent 
                  hover:border-white 
                  transition-colors 
                  text-center 
                  rounded-2xl 
                  shadow-lg 
                  z-50
                "
              >
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-white" />
                <h3 className="font-bold text-xl sm:text-2xl mb-2 text-white">
                  Time
                </h3>
                <p className="text-lg sm:text-xl font-medium text-gray-200">
                  8:00 PM CST
                </p>
                <p className="text-lg sm:text-xl font-medium text-gray-200">
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
      <section className="py-20 bg-white">
        {/* Added mobile horizontal padding: px-4 */}
        <div className="container mx-auto px-4">
          {/* Constrained max width slightly for better centering on all phones */}
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              {/* Font size adjusted for smaller screen: text-4xl md:text-6xl */}
              <h2 className="text-4xl text-black md:text-6xl font-bold mb-4 text-balance">Join the Celebration</h2>
              <p className="text-lg text-black leading-relaxed">
                Let us know if you can make it! We'd love to celebrate with you.
              </p>
            </div>

            {!submitted ? (
              <Card className="p-8 md:p-12 bg-card border-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="i.e. Damitry Dong"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="i.e. john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-pink-400 hover:bg-pink-500 text-white cursor-pointer"
                  >
                    Confirm Attendance
                  </Button>
                </form>
              </Card>
            ) : (
              <Card className="p-12 text-center bg-pink-400/10 border-2 border-pink-400">
                <PartyPopper className="w-16 h-16 mx-auto mb-4 text-pink-400" />
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground text-lg">
                  Thanks for RSVPing, {formData.name}. See you at the party!
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-white">
        <div className="container mx-auto px-4 text-center">
            BE EXCITED
        </div>
      </footer>
    </div>
  )
}