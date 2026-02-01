"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Counter } from "@/components/ui/counter"
import { ArrowRight} from "lucide-react" /* top 1*/

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-12 sm:pt-40 sm:pb-20 md:pt-48 lg:pt-[7.5rem]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Monitor mockup */}
          <div className="flex justify-center items-center animate-in fade-in slide-in-from-left-8 duration-700 lg:order-1 order-2 scale-75 sm:scale-100">
            <div className="relative group">
              {/* Monitor frame */}
              <div className="relative bg-gray-900 dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border-8 border-gray-800 dark:border-gray-700 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
                {/* Screen */}
                <div className="bg-white rounded-lg overflow-hidden aspect-[9/16] w-80">
                  {/* Phone mockup content */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white p-8 flex flex-col gap-4">
                    {/* Grid categories */}
                    <div className="grid grid-cols-2 gap-4 flex-1">
                      {/* PROMOS */}
                      <div className="bg-[#EF5350] rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        PROMOS
                      </div>
                      
                      {/* BEBIDAS */}
                      <div className="bg-[#4285F4] rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        BEBIDAS
                      </div>
                      
                      {/* SNACKS */}
                      <div className="bg-[#FFC107] rounded-3xl flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                        SNACKS
                      </div>
                      
                      {/* GALLETAS */}
                      <div className="bg-[#FFB74D] rounded-3xl flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                        GALLETAS
                      </div>
                      
                      {/* SIN TACC */}
                      <div className="bg-[#4CAF50] rounded-3xl flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                        SIN TACC
                      </div>
                      
                      {/* DULCE */}
                      <div className="bg-[#EC407A] rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        DULCE
                      </div>
                    </div>
                    
                    {/* Bottom indicator */}
                    <div className="flex justify-center gap-2 mt-2">
                      <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Monitor stand */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-800 dark:bg-gray-700 rounded-full" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-6 bg-gray-900 dark:bg-gray-800 rounded-b-xl" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left lg:order-2 order-1">

        {/* Headline */}
        <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-primary">TOCO</span>
          <span className="text-foreground"> EL PRIMER </span>
          <br className="hidden sm:block" />
          <span className="text-primary">KIOSCO INTERACTIVO</span>
          <br />
          <span className="text-foreground">DE SAN JUAN</span>
        </h1>

        {/* Description */}
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Descubre una experiencia de compra revolucionaria donde la tecnología y la interactividad 
          transforman cada visita en algo extraordinario.
        </p>

        {/* CTA Buttons */}
  
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
            onClick={() => window.open('https://www.google.com/maps/place/TOCO/@-31.5402312,-68.5279695,841m/data=!3m1!1e3!4m6!3m5!1s0x9681413d54b82b1d:0xfd05485bcff3b2e8!8m2!3d-31.5402312!4d-68.5258486!16s%2Fg%2F11y08ccg_q?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
          >
            Visítanos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-primary/90 hover:text-white px-8 py-6 text-lg bg-white dark:bg-transparent text-black dark:text-white"
            onClick={() => window.open('https://www.instagram.com/tocopickandgo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
          >
            Conoce más
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto lg:mx-0">
          {[
            { value: "1er", label: "Kiosco Interactivo" },
            { value: "500+", label: "Productos" },
            { value: "100%", label: "Experiencia Digital" },
            { value: "24/7", label: "Soporte" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value === "1er" || stat.value === "24/7" ? (
                  stat.value
                ) : (
                  <Counter value={stat.value} />
                )}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-6 flex justify-center lg:justify-start">
          <div className="scroll-hand-wrap relative h-20 w-16">
            <span className="scroll-hand-trail" aria-hidden="true" />
            <Image
              src="/icons/tocoMano.svg"
              alt="Desliza hacia arriba"
              width={64}
              height={80}
              className="scroll-hand-icon"
              priority
            />
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}
