"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const { theme } = useTheme()
  const isInitializedRef = useRef(false)

  // Initialize particles - memoized with useCallback
  const initParticles = useCallback(() => {
    if (!canvasRef.current) return

    const { width, height } = canvasRef.current
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 8000), 120)

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 4 + 1
      const alpha = Math.random() * 0.3 + 0.1
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color:
          theme === "dark"
            ? `rgba(${120 + Math.random() * 135}, ${120 + Math.random() * 135}, ${255}, ${alpha})`
            : `rgba(${Math.random() * 50}, ${Math.random() * 50}, ${Math.random() * 80}, ${alpha})`,
        alpha,
      })
    }

    particlesRef.current = particles
  }, [theme])

  // Draw particles - memoized with useCallback
  const drawParticles = useCallback(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // Draw connections
      const mouseDistance = Math.hypot(particle.x - mousePosition.x, particle.y - mousePosition.y)
      if (mouseDistance < 150) {
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(mousePosition.x, mousePosition.y)
        ctx.strokeStyle =
          theme === "dark"
            ? `rgba(150, 150, 255, ${0.3 - mouseDistance / 500})`
            : `rgba(0, 0, 50, ${0.2 - mouseDistance / 750})`
        ctx.stroke()

        // Slightly attract particles to mouse
        particle.x += (mousePosition.x - particle.x) * 0.02
        particle.y += (mousePosition.y - particle.y) * 0.02
      }

      // Connect nearby particles
      for (let j = index + 1; j < particlesRef.current.length; j++) {
        const otherParticle = particlesRef.current[j]
        const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y)

        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle =
            theme === "dark"
              ? `rgba(150, 150, 255, ${0.15 - distance / 1000})`
              : `rgba(0, 0, 50, ${0.1 - distance / 1000})`
          ctx.stroke()
        }
      }
    })

    animationFrameRef.current = requestAnimationFrame(drawParticles)
  }, [mousePosition, theme])

  // Handle mouse movement - memoized with useCallback
  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    })
  }, [])

  // Handle window resize - memoized with useCallback
  const handleResize = useCallback(() => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
      setDimensions({ width, height })
      canvasRef.current.width = width
      canvasRef.current.height = height
      initParticles()
    }
  }, [initParticles])

  // Setup effect - runs once on mount and when dependencies change
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    // Only initialize once to prevent infinite loops
    if (!isInitializedRef.current && canvasRef.current && canvasRef.current.parentElement) {
      const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
      setDimensions({ width, height })
      canvasRef.current.width = width
      canvasRef.current.height = height

      initParticles()
      isInitializedRef.current = true
    }

    // Start animation loop
    const animationId = requestAnimationFrame(drawParticles)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [handleMouseMove, handleResize, initParticles, drawParticles])

  // Effect to reinitialize particles when theme changes
  useEffect(() => {
    if (isInitializedRef.current) {
      initParticles()
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      width={dimensions.width}
      height={dimensions.height}
    />
  )
}
