"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Fingerprint, Scan, ShoppingBag, Headphones, Smartphone, Sparkles } from "lucide-react"

const features = [
  {
    icon: Fingerprint,
    title: "Tecnología Touch",
    description: "Pantallas interactivas que responden a tu toque mejorando tu experiencia de compra.",
    available: true,
  },
  {
    icon: ShoppingBag,
    title: "Compra Sin Filas",
    description: "Arma tu pedido y lo retiras sin esperar. Tu tiempo es valioso.",
    available: true,
  },
  {
    icon: Headphones,
    title: "Asistencia Virtual",
    description: "Nuestros asistentes virtuales te guían por la tienda y responden tus preguntas al instante.",
    available: true,
  },
  {
    icon: Smartphone,
    title: "App Conectada",
    description: "Sincroniza tu experiencia con nuestra app y continúa comprando desde donde estés.",
    available: false,
  },
]

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="como-funciona" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%)] bg-[length:100px_100%] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Cómo Funciona
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Una experiencia única
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre todas las formas en que TOCO transforma tu experiencia de compra con tecnología de punta.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${!feature.available ? 'opacity-50 blur-sm' : ''}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Coming Soon Badge */}
              {!feature.available && (
                <div className="absolute top-2 right-2 px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  Próximamente
                </div>
              )}
              
              {/* Icon */}
              <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
