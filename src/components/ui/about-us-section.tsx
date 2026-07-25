"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Home,
  Building2,
  Landmark,
  Briefcase,
  ShieldCheck,
  Clock,
  Award,
  Leaf,
  BadgeCheck,
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, type Variants } from "motion/react"
import { Button } from "@/components/ui/button"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const services = [
  {
    icon: <Home className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-klin-pink-bright" />,
    title: "Heimilisþrif",
    description: "Regluleg þrif og djúphreinsun fyrir heimilið þitt.",
    position: "left" as const,
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-klin-pink-bright" />,
    title: "Húsfélög",
    description: "Stigagangar og sameignir fyrir húsfélög.",
    position: "left" as const,
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-klin-pink-bright" />,
    title: "Fyrirtækjaþrif",
    description: "Skrifstofur, verslanir og þjónustusamningar.",
    position: "left" as const,
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-klin-pink-bright" />,
    title: "Stofnanaþrif",
    description: "Skólar og heilbrigðisstofnanir þrifnar af nákvæmni.",
    position: "right" as const,
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-klin-pink-bright" />,
    title: "Sótthreinsun",
    description: "Sérhæfð sótthreinsun þar sem hreinlætiskrafan er ströng.",
    position: "right" as const,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-klin-pink-bright" />,
    title: "Sveigjanleiki",
    description: "Sveigjanlegir tímar, líka utan hefðbundins opnunartíma.",
    position: "right" as const,
  },
]

const features = [
  { icon: <Clock />, label: "Áreiðanleiki", description: "Mætum á réttum tíma, í hvert sinn." },
  { icon: <BadgeCheck />, label: "Þjálfað starfsfólk", description: "Reynt og traust fólk." },
  { icon: <Leaf />, label: "Umhverfisvænar vörur", description: "Öflug en skaðlaus hreinsiefni." },
  { icon: <Award />, label: "Sniðin þjónusta", description: "Löguð að þínum þörfum." },
]

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <section
      id="um-klin"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-klin-pink-tint to-white px-4 py-24 text-klin-ink"
    >
      {/* Decorative background elements */}
      <motion.div
        className="pointer-events-none absolute top-20 left-10 h-64 w-64 rounded-full bg-klin-pink/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 right-10 h-80 w-80 rounded-full bg-klin-pink-bright/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/4 h-4 w-4 rounded-full bg-klin-pink/30"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/3 right-1/4 h-6 w-6 rounded-full bg-klin-pink/30"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="mb-6 flex flex-col items-center" variants={itemVariants}>
          <motion.span
            className="mb-2 flex items-center gap-2 font-heading text-sm font-bold text-klin-pink"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="h-4 w-4" />
            KYNNSTU KLÍN
          </motion.span>
          <h2 className="mb-4 text-center font-display text-4xl leading-[1.5] text-klin-ink sm:text-5xl">
            Um Klín
          </h2>
          <motion.div
            className="h-1 bg-klin-pink"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p className="mx-auto mb-16 max-w-2xl text-center text-klin-ink/70" variants={itemVariants}>
          Klín sér um þrifin svo þú getir einbeitt þér að því sem skiptir máli.
          Fagleg, glaðleg og áreiðanleg ræstingarþjónusta fyrir heimili,
          fyrirtæki og stofnanir.
        </motion.p>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service) => (
                <ServiceItem key={service.title} {...service} direction="left" />
              ))}
          </div>

          <div className="order-first mb-8 flex items-center justify-center md:order-none md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="overflow-hidden rounded-md shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1747582411588-f9b4acabe995?q=80&w=1200&auto=format&fit=crop"
                    alt="Bjart og hreint heimili"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 320px, 90vw"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-klin-ink/50 to-transparent p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Button asChild variant="light" size="sm">
                    <Link href="/hafa-samband">
                      Fá tilboð <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 -z-10 -m-3 rounded-md border-4 border-klin-pink-soft"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.div
                className="absolute -top-4 -right-8 h-16 w-16 rounded-full bg-klin-pink/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 h-20 w-20 rounded-full bg-klin-pink-bright/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service) => (
                <ServiceItem key={service.title} {...service} direction="right" />
              ))}
          </div>
        </div>

        {/* Feature highlights */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.label} {...feature} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-xl bg-klin-pink p-8 text-white md:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold">Tilbúin/n að létta á þrifalistanum?</h3>
            <p className="text-white/80">Sendu okkur línu og fáðu tilboð sniðið að þínum þörfum.</p>
          </div>
          <Button asChild variant="light" size="lg">
            <Link href="/hafa-samband">
              Fá tilboð <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="group flex flex-col"
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="mb-3 flex items-center gap-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative rounded-lg bg-klin-pink-soft p-3 text-klin-pink transition-colors duration-300 group-hover:bg-klin-pink group-hover:text-white"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="font-heading text-lg font-bold text-klin-ink transition-colors duration-300 group-hover:text-klin-pink">
          {title}
        </h3>
      </motion.div>
      <p className="pl-12 text-sm leading-relaxed text-klin-ink/70">{description}</p>
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  label: string
  description: string
}

function FeatureCard({ icon, label, description }: FeatureCardProps) {
  return (
    <motion.div
      className="group flex flex-col items-center rounded-xl bg-white/60 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white"
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-klin-pink-soft text-klin-pink transition-colors duration-300 group-hover:bg-klin-pink group-hover:text-white"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <p className="font-heading text-base font-bold text-klin-ink">{label}</p>
      <p className="mt-1 text-sm text-klin-ink/70">{description}</p>
      <motion.div className="mt-3 h-0.5 w-10 bg-klin-pink transition-all duration-300 group-hover:w-16" />
    </motion.div>
  )
}
