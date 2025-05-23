import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import AnimatedBackground from "@/components/animated-background"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import ScrollProgress from "@/components/scroll-progress"
import ScrollReveal from "@/components/scroll-reveal"

export default function Home() {
  // Skills array for the running animation
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "HTML/CSS",
    "Git",
    "Docker",
    "AWS",
    "GraphQL",
    "Redux",
    "Jest",
    "Web3",
    "Blockchain",
    "Swift",
    "Data Science",
  ]

  // Duplicate skills to create a seamless loop
  const duplicatedSkills = [...skills, ...skills]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollProgress />
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="inline-block font-bold text-lg">Umer Patel</span>
            </Link>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="#about"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#skills"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
            {/* Mobile navigation links */}
            <div className="flex md:hidden space-x-1 mr-2">
              <Link href="#about" className="px-2 py-1 text-xs font-medium hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="px-2 py-1 text-xs font-medium hover:text-primary">
                Projects
              </Link>
              <Link href="#skills" className="px-2 py-1 text-xs font-medium hover:text-primary">
                Skills
              </Link>
              <Link href="#contact" className="px-2 py-1 text-xs font-medium hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden hero-section">
          <AnimatedBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <AnimatedText
                  text="Hi, I'm  Umer"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none gradient-text"
                />
                <AnimatedText
                  text="BCA Student at SRM University & Full Stack Developer"
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
                  delay={0.5}
                />
              </div>
              <AnimatedSection delay={0.8}>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <Link href="#contact">
                    <Button className="px-8 hover-button bg-blue-600 hover:bg-blue-700">
                      <span className="flex items-center">
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={1.0} className="mt-8 flex flex-wrap justify-center gap-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Github className="mr-2 h-4 w-4 text-primary" />
                  <span>@callmeumair</span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">About Me</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a passionate developer with experience building web applications and exploring emerging
                    technologies. Currently studying BCA at SRM University and building pulseffit.
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <AnimatedSection
                  delay={0.2}
                  animation="zoom"
                  className="mx-auto aspect-square overflow-hidden rounded-xl w-full max-w-[300px] sm:max-w-[350px] lg:order-last"
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGNq7WLDf3qew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725865786832?e=1746662400&v=beta&t=9Q14PKDIcMzXDSXKrsjF0lKkOWxb7e11sK-ZdTqiyK8"
                    width="400"
                    height="400"
                    alt="Profile"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </AnimatedSection>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <ScrollReveal direction="left">
                      <li className="custom-card p-4 rounded-lg">
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Background</h3>
                          <p className="text-muted-foreground">
                            BCA Student at SRM University with a focus on web technologies, data science, and emerging
                            tech like Web3.
                          </p>
                        </div>
                      </li>
                    </ScrollReveal>
                    <ScrollReveal direction="left">
                      <li className="custom-card p-4 rounded-lg">
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Experience</h3>
                          <p className="text-muted-foreground">
                            Developed various projects including e-commerce platforms, social media apps, and Web3
                            applications. Currently working at Pulseffit.
                          </p>
                        </div>
                      </li>
                    </ScrollReveal>
                    <ScrollReveal direction="left">
                      <li className="custom-card p-4 rounded-lg">
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Achievements</h3>
                          <p className="text-muted-foreground">
                            Quickdraw achievement on GitHub. Pro member with 82 followers and active in open source
                            contributions.
                          </p>
                        </div>
                      </li>
                    </ScrollReveal>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">My Projects</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of my recent projects. Each one presented unique challenges and learning
                    opportunities.
                  </p>
                </div>
              </AnimatedSection>

              {/* Featured Projects */}
              <h3 className="text-2xl font-bold mt-8 mb-4 gradient-text">Featured Projects</h3>
              <div className="mx-auto grid max-w-6xl items-center gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="PulseFit.AI"
                  description="A cutting-edge fitness app designed to revolutionize the way you approach your fitness journey using Artificial Intelligence."
                  tags={["JavaScript", "AI", "Fitness"]}
                  imageUrl="https://media.licdn.com/dms/image/v2/D4D0BAQFHOrC-kRyzBQ/company-logo_100_100/B4DZYqljnUHIAU-/0/1744471211124?e=1750896000&v=beta&t=U9ZkRXvK_9m5y_Wf0So8LKQ34ebsHPr8OPB4dq0PLhw"
                  githubUrl="https://github.com/callmeumair/PulseFit.AI"
                  liveUrl="https://pulsefitai.vercel.app/"
                  index={0}
                />
                <ProjectCard
                  title="Web3"
                  description="A Web3 project exploring blockchain technologies and decentralized applications."
                  tags={["TypeScript", "Web3", "Blockchain"]}
                  imageUrl="https://images.unsplash.com/photo-1665597704311-d7304eaf70ac?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  githubUrl="https://github.com/callmeumair/web3"
                  liveUrl="https://web3-app1.vercel.app/"
                  index={1}
                />
                <ProjectCard
                  title="AI Agent"
                  description="An intelligent AI agent built with TypeScript for automated tasks and assistance."
                  tags={["TypeScript", "AI", "Automation"]}
                  imageUrl="https://plus.unsplash.com/premium_photo-1725985758251-b49c6b581d17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  githubUrl="https://github.com/callmeumair/ai-agent"
                  liveUrl="https://ai-agent-6ucn.vercel.app/"
                  index={2}
                />
                <ProjectCard
                  title="Social Media App"
                  description="A full-stack social media platform that allows users to post updates, follow other users, and engage in real-time chat. Built using the MERN stack."
                  tags={["JavaScript", "MERN", "Real-time"]}
                  imageUrl="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  githubUrl="https://github.com/callmeumair/Social-Media-App"
                  liveUrl="#"
                  index={3}
                />
                <ProjectCard
                  title="E-Commerce"
                  description="A full-stack e-commerce platform designed to showcase my skills as a Full Stack Web Developer. Includes user authentication, product management, and a seamless shopping experience."
                  tags={["JavaScript", "MERN", "E-commerce"]}
                  imageUrl="https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  githubUrl="https://github.com/callmeumair/E-Commerce"
                  liveUrl="https://ecom-web3.vercel.app/"
                  index={4}
                />
                <ProjectCard
                  title="Car Rental"
                  description="A car rental web application with booking system and vehicle management."
                  tags={["JavaScript", "MIT License"]}
                  imageUrl="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  githubUrl="https://github.com/callmeumair/Car-rental"
                  liveUrl="https://car-web-orpin.vercel.app/"
                  index={5}
                />
              </div>

              {/* Other Projects */}
              <h3 className="text-2xl font-bold mt-12 mb-4 gradient-text">Other Projects</h3>
              <div className="mx-auto grid max-w-6xl gap-4 py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  { name: "Car Web", tech: "TypeScript", url: "https://github.com/callmeumair/car-web" },
                  { name: "React Leaflet", tech: "JavaScript", url: "https://github.com/callmeumair/React-leaflet" },
                  {
                    name: "Vehicle Tracking",
                    tech: "JavaScript",
                    url: "https://github.com/callmeumair/Vehicle-Tracking",
                  },
                  {
                    name: "Vehicle Tracking App",
                    tech: "JavaScript",
                    url: "https://github.com/callmeumair/Vehicle-Tracking-App",
                  },
                  { name: "Amazon Clone", tech: "HTML/CSS", url: "https://github.com/callmeumair/Amazon-Clone" },
                  {
                    name: "Portfolio",
                    tech: "TypeScript",
                    url: "https://github.com/callmeumair/callmeumair.github.io",
                  },
                  {
                    name: "Food Delivery App",
                    tech: "MERN Stack",
                    url: "https://github.com/callmeumair/Food-Delivery-App-",
                  },
                  {
                    name: "Blog Platform",
                    tech: "CRUD",
                    url: "https://github.com/callmeumair/Blog-Platform-with-CRUD-Operations",
                  },
                  {
                    name: "React Portfolio",
                    tech: "JavaScript",
                    url: "https://github.com/callmeumair/React-Portfolio",
                  },
                  { name: "Task Manager", tech: "JavaScript", url: "https://github.com/callmeumair/Task-manager" },
                  {
                    name: "Password Manager",
                    tech: "JavaScript",
                    url: "https://github.com/callmeumair/Password-Manager",
                  },
                  { name: "Walbi", tech: "HTML", url: "https://github.com/callmeumair/Walbi" },
                ].map((project, index) => (
                  <ScrollReveal key={index} direction={index % 2 === 0 ? "up" : "down"}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border custom-card shadow-sm hover:shadow-md transition-all duration-300 h-full"
                    >
                      <h4 className="font-medium mb-2">{project.name}</h4>
                      <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                        {project.tech}
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies Section with Running Animation */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">
                    Skills & Technologies
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    These are the technologies and tools I work with on a regular basis.
                  </p>
                </div>
              </AnimatedSection>

              {/* Skills running animation */}
              <div className="skills-container w-full py-8">
                <div className="skills-track">
                  {duplicatedSkills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Get In Touch</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have a project in mind or want to chat? Feel free to reach out!
                  </p>
                </div>
              </AnimatedSection>

              <div className="mx-auto grid max-w-5xl items-start gap-10 py-12 lg:grid-cols-2">
                <div className="flex flex-col space-y-6">
                  <ScrollReveal direction="up">
                    <div className="flex flex-col space-y-4 custom-card p-6 rounded-lg">
                      <h3 className="text-xl font-bold">Contact Information</h3>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a
                          href="mailto:umerpatel1540@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          umerpatel1540@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <a
                          href="https://linkedin.com/in/umerpatel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          linkedin.com/in/umerpatel
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Github className="h-5 w-5 text-primary" />
                        <a
                          href="https://github.com/callmeumair"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          github.com/callmeumair
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Twitter className="h-5 w-5 text-primary" />
                        <a
                          href="https://twitter.com/Umerpatel11"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          @Umerpatel11
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal direction="up" className="delay-100">
                  <div className="custom-card p-6 rounded-lg">
                    <ContactForm />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Umer Patel. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/umerpatel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/callmeumair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com/Umerpatel11" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:umerpatel1540@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
