"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

interface Particle {
  id: number
  left: number
  duration: number
}

export function HeartRain({ isActive }: { isActive: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setParticles([])
      return
    }

    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: nextId,
        left: Math.random() * 100,
        duration: 2 + Math.random() * 1,
      }
      setNextId(nextId + 1)
      setParticles((prev) => [...prev, newParticle])
    }, 100)

    return () => clearInterval(interval)
  }, [isActive, nextId])

  // Limpiar partículas que terminaron su animación
  useEffect(() => {
    const timers = particles.map((particle) =>
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id))
      }, particle.duration * 1000)
    )

    return () => timers.forEach(clearTimeout)
  }, [particles])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-fall"
          style={{
            left: `${particle.left}%`,
            top: "-30px",
            animation: `fall ${particle.duration}s linear forwards`,
          }}
        >
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
        </div>
      ))}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
