"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Rocket, Shield } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Pioneros en traer tecnología interactiva a los kioscos de San Juan",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Creamos espacios donde la tecnología y las personas se conectan.",
  },
  {
    icon: Rocket,
    title: "Experiencia",
    description: "Cada visita es una aventura única que transforma tu forma de comprar.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Productos de calidad y el mejor servicio al cliente.",
  },
]

export function About() {
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
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Sobre TOCO
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Transformando la experiencia de compra en San Juan
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">TOCO</span> nace de la visión de crear 
                la primera tienda verdaderamente interactiva en San Juan. Somos más que una tienda  
                somos una experiencia que fusiona tecnología de vanguardia con el calor del servicio local.
              </p>
              <p>
                En TOCO, cada producto cobra vida a través de pantallas táctiles 
                y asistentes virtuales. Aquí, el futuro del comercio no es un concepto abstracto  
                es una realidad que puedes tocar, explorar y disfrutar.
              </p>
              <p>
                Nuestra misión es simple: transformar la forma en que San Juan compra, 
                haciendo de cada visita una experiencia memorable e innovadora.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                  index % 2 === 1 ? 'translate-y-6' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
