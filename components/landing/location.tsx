"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from "lucide-react"

const storeInfo = {
  address: "Av. Córdoba Oeste 19 oeste, J5400 San Juan",
  phone: "+54 9 264 320-3672",
  email: "ticoautoatencion@gmail.com",
  hours: [
    { day: "Lunes - Viernes", time: "8:00 AM - 2:00 PM 5:00 PM - 11:00 PM" },
    { day: "Sábado", time: "8:00 AM - 2:00 PM 5:00 PM - 11:00 PM" },
    { day: "Domingo", time: "5:00 AM - 11:00 PM" },
  ],
  //31°32'24.8"S 68°31'40.7"W
  coordinates: {
    lat: -31.5402312,
    lng: -68.5258486,
  },
}

export function Location() {
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

  const googleMapsUrl = `https://www.google.com/maps/place/TOCO/@-31.5403625,-68.5266718,327m/data=!3m1!1e3!4m12!1m5!3m4!2zMzHCsDMyJzI0LjgiUyA2OMKwMzEnNDAuNyJX!8m2!3d-31.5402312!4d-68.5279695!3m5!1s0x9681413d54b82b1d:0xfd05485bcff3b2e8!8m2!3d-31.5402312!4d-68.5258486!16s%2Fg%2F11y08ccg_q?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D`

  return (
    <section id="ubicacion" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--border)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <MapPin className="w-3 h-3 mr-1" />
            Ubicación
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Visítanos en San Juan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos ubicados en el corazón de San Juan, listos para ofrecerte una experiencia única.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="overflow-hidden border-border h-full">
              <div className="relative h-80 lg:h-full min-h-[320px] bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.649!2d-68.5258486!3d-31.5402312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9681413d54b82b1d:0xfd05485bcff3b2e8!2sTOCO!5e0!3m2!1ses!2sar!4v1706544000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TOCO Store Location"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
              </div>
            </Card>
          </div>

          {/* Info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Address Card */}
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground mb-3">{storeInfo.address}</p>
                    <Button variant="outline" size="sm" asChild className="group bg-transparent">
                      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Navigation className="w-4 h-4 mr-2" />
                        Cómo llegar
                        <ExternalLink className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Horarios</h3>
                    <div className="space-y-2">
                      {storeInfo.hours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="text-foreground font-medium">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Teléfono</p>
                      <a href={`tel:${storeInfo.phone}`} className="text-foreground font-medium hover:text-primary transition-colors">
                        {storeInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a href={`mailto:${storeInfo.email}`} className="text-foreground font-medium hover:text-primary transition-colors text-sm break-all">
                        {storeInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
