"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight, Heart, Check } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/tocopickandgo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { imageSrc: "/icons/tiktok.png", href: "https://www.tiktok.com/@toco.pickgo?is_from_webapp=1&sender_device=pc", label: "TikTok" },
]

const footerLinks = {
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Prensa", href: "#" },
    { label: "Blog", href: "#" },
  ],
  soporte: [
    { label: "Centro de Ayuda", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Devoluciones", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("q3_email", email)

      await fetch("https://submit.jotform.com/submit/260287217608056", {
        method: "POST",
        body: formData,
      })

      setIsSuccess(true)
      setEmail("")
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error al suscribirse:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mantente conectado con TOCO
            </h3>
            <p className="text-muted-foreground mb-6">
              Suscríbete para recibir las últimas novedades, ofertas exclusivas y actualizaciones.
            </p>
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                name="q3_email"
                placeholder="tu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
                className="bg-background border-border focus:border-primary"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="bg-primary text-primary-foreground hover:bg-primary/90 group disabled:opacity-50"
              >
                {isSuccess ? (
                  <>
                    <Check className="mr-2 w-4 h-4" />
                    ¡Suscrito!
                  </>
                ) : (
                  <>
                    Suscribir
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="TOCO"
              width={120}
              height={48}
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              La primera tienda interactiva de San Juan. El futuro del retail está aquí.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {"icon" in social ? (
                    <social.icon className="w-5 h-5" />
                  ) : (
                    <Image
                      src={social.imageSrc}
                      alt={social.label}
                      width={20}
                      height={20}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links - Empresa */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Soporte */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} TOCO. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en San Juan, PR
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
