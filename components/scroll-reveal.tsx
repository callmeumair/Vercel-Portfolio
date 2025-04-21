"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function ScrollReveal({ children, direction = "up", className }: ScrollRevealProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Create all transform values upfront (no conditional hooks)
  const transformYUp = useTransform(scrollYProgress, [0, 1], [100, -100])
  const transformYDown = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const transformXLeft = useTransform(scrollYProgress, [0, 1], [100, -100])
  const transformXRight = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Determine which transform to use based on direction
  let style = {}
  if (direction === "up") {
    style = { y: transformYUp, opacity }
  } else if (direction === "down") {
    style = { y: transformYDown, opacity }
  } else if (direction === "left") {
    style = { x: transformXLeft, opacity }
  } else if (direction === "right") {
    style = { x: transformXRight, opacity }
  }

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  )
}
