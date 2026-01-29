"use client"

import { useEffect, useState, useRef } from "react"

interface CounterProps {
  value: string | number
  duration?: number
}

export function Counter({ value, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Extraer número del valor (ej: "500+" -> 500, "100%" -> 100)
  const numericValue = parseInt(value.toString().replace(/\D/g, ""), 10)
  const suffix = value.toString().replace(/\d/g, "")

  useEffect(() => {
    // Usar Intersection Observer para iniciar animación cuando el elemento es visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = numericValue / (duration / 16) // ~60fps
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, numericValue, duration])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}
