"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Counter } from "@/components/ui/counter"
import { ArrowRight} from "lucide-react" /* top 1*/

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

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
            className="border-border hover:bg-primary/90 px-8 py-6 text-lg bg-white text-black"
            onClick={() => window.open('https://www.instagram.com/tocopickandgo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
          >
            Conoce más
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "1er", label: "Kiosco Interactivo" },
            { value: "500+", label: "Productos" },
            { value: "100%", label: "Experiencia Digital" },
            { value: "24/7", label: "Soporte" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
