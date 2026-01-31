"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeartRain } from "@/components/ui/heart-rain"

// Número de WhatsApp para contacto (actualiza con tu número)
const WHATSAPP_NUMBER = "5492643203672" // Formato: código país + número sin espacios ni símbolos

const products = [
  {
    id: 1,
    title: "Cilindro San Valentín",
    description: "Un elegante cilindro rojo con lazo dorado, repleto de chocolates. El regalo perfecto para sorprender a esa persona especial.",
    image: "/products/cilindro-sanvalentin.webp",
    price: "$16.500",
    tags: ["Edición Limitada", "Más vendido"],
  },
  {
    id: 2,
    title: "Caja Romántica",
    description: "Lujosa caja cuadrada con acabados dorados que revela una selección exclusiva de chocolates, y sorpresas románticas. Un detalle inolvidable.",
    image: "/products/caja-sanvalentin.webp",
    price: "$13.500",
    tags: ["Edición Limitada", "Enamorados"],
  },
]

const news = [
  {
    id: 1,
    title: "Nuevo Producto: Cilindro San Valentín",
    description: "Un elegante cilindro de terciopelo rojo con lazo dorado, repleto de chocolates premium y rosas frescas. El regalo perfecto para sorprender a esa persona especial.",
    image: "/products/cilindro-sanvalentin.webp",
    date: "2023-02-14",
    tag: "Edición Limitada",
    featured: false,
    icon: Heart,
  },
  {
    id: 2,
    title: "Novedad: Caja Romántica Premium",
    description: "Lujosa caja cuadrada con acabados dorados que revela una selección exclusiva de chocolates artesanales, pétalos de rosa y sorpresas románticas. Un detalle inolvidable.",
    image: "/products/caja-sanvalentin.webp",
    date: "2023-02-14",
    tag: "Más Vendido",
    featured: false,
    icon: Sparkles,
  },
]

export function News() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showHeartRain, setShowHeartRain] = useState(false)

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

  const handleWhatsAppClick = (product: typeof products[0]) => {
    const message = `Hola, me gustaría reservar el siguiente producto:\n\n*${product.title}*\n\nDescripción: ${product.description}\n\nPrecio: ${product.price}\n\n¿Podrías confirmar disponibilidad y detalles de entrega?`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCardMouseEnter = () => {
    setShowHeartRain(true)
  }

  const handleCardMouseLeave = () => {
    setShowHeartRain(false)
  }

  return (
    <section id="novedades" ref={sectionRef} className="py-24 relative overflow-hidden">
      <HeartRain isActive={showHeartRain} />
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-red-500/50 text-red-400 bg-red-500/10">
            <Heart className="w-3 h-3 mr-1 fill-current" />
            San Valentín
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Regalos para Enamorados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sorprende a tu persona especial con nuestros exclusivos regalos de San Valentín. Disponibles solo en TOCO.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`bg-card border-border hover:border-red-500/50 transition-all duration-500 group cursor-pointer overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl m-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                />
                <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-card/90 dark:via-transparent dark:to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} className="bg-red-500 text-white border-none">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="text-3xl font-bold text-foreground">{product.price}</span>
                </div>
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-red-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* CTA */}
                <Button 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold group"
                  onClick={() => handleWhatsAppClick(product)}
                >
                  <Heart className="w-4 h-4 mr-2 group-hover:fill-white transition-all" />
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promo banner */}
        <div className={`mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-pink-500/10 to-red-500/10 border border-red-500/20 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-foreground">
            <Heart className="w-5 h-5 inline-block mr-2 text-red-500 fill-red-500" />
            <span className="font-semibold">Oferta especial:</span> Ordena antes del 10 de febrero y recibe un 10% de descuento
            <Heart className="w-5 h-5 inline-block ml-2 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </section>
  )
}
