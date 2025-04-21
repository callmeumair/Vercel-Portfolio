"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade" | "slide" | "zoom" | "parallax"
}

export default function AnimatedSection({ children, className, delay = 0, animation = "fade" }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.8])

  // Different animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    slide: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  // For parallax effect
  if (animation === "parallax") {
    return (
      <motion.div ref={ref} style={{ y, opacity }} className={className}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation] || variants.fade}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
