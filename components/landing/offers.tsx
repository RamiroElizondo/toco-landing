"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Percent, Tag, ArrowRight } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Descuento de Apertura",
    discount: "30%",
    description: "En todos los productos de tecnología durante la primera semana.",
    validUntil: "Válido en inauguración",
    category: "Tecnología",
    highlight: true,
  },
  {
    id: 2,
    title: "2x1 en Accesorios",
    discount: "2x1",
    description: "Llévate dos accesorios por el precio de uno. Ideal para equipar tu setup.",
    validUntil: "Tiempo limitado",
    category: "Accesorios",
    highlight: false,
  },
  {
    id: 3,
    title: "Envío Gratis",
    discount: "FREE",
    description: "En compras mayores a $50. Recibe tus productos en tu puerta sin costo adicional.",
    validUntil: "Sin fecha límite",
    category: "Envío",
    highlight: false,
  },
  {
    id: 4,
    title: "Primera Compra",
    discount: "15%",
    description: "Descuento especial para tu primera compra al registrarte en nuestra app.",
    validUntil: "Siempre disponible",
    category: "Nuevos clientes",
    highlight: false,
  },
]

export function Offers() {
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
    <section id="ofertas" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Próximamente badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
            Próximamente
          </span>
        </div>
        
        <div className="opacity-60 blur-sm pointer-events-none">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Percent className="w-3 h-3 mr-1" />
            Ofertas
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ofertas imperdibles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aprovecha nuestras promociones exclusivas y ahorra en grande en tu próxima visita.
          </p>
        </div>

        {/* Offers grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={offer.id}
              className={`bg-card border-border overflow-hidden group transition-all duration-500 hover:border-primary/50 ${
                offer.highlight ? 'md:col-span-2 bg-gradient-to-br from-primary/10 via-card to-card' : ''
              } ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className={`p-6 ${offer.highlight ? 'md:p-8' : ''}`}>
                <div className={`flex flex-col ${offer.highlight ? 'md:flex-row md:items-center md:gap-8' : ''}`}>
                  {/* Discount badge */}
                  <div className={`mb-4 ${offer.highlight ? 'md:mb-0' : ''}`}>
                    <div className={`inline-flex items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold ${
                      offer.highlight ? 'text-4xl md:text-5xl px-8 py-6' : 'text-2xl px-6 py-4'
                    }`}>
                      {offer.discount}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        <Tag className="w-3 h-3 mr-1" />
                        {offer.category}
                      </Badge>
                    </div>
                    <h3 className={`font-semibold text-foreground mb-2 group-hover:text-primary transition-colors ${
                      offer.highlight ? 'text-2xl' : 'text-xl'
                    }`}>
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {offer.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {offer.validUntil}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
            Ver todas las ofertas
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        </div>
      </div>
    </section>
  )
}
