"use client"

import { ExternalLink, Github, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plataforma E-commerce.",
    image: "/tienda.png?height=300&width=500",
    technologies: ["React","Node Js","Next.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://www.youtube.com/watch?v=kqUc282Yx9U",
    githubUrl: "https://github.com/eldanielgalaviz/tienda",
    featured: true,
  },
  {
    id: 2,
    title: "Generador de Plataformas con UML",
    description:
      "Generador de Plataformas con UML es una innovadora plataforma impulsada por Inteligencia Artificial que transforma ideas en sistemas completos de software. A partir de un simple prompt en lenguaje natural (por ejemplo, “gestor de horarios para una universidad”), el sistema genera automáticamente todos los diagramas UML necesarios, incluyendo diagramas de clases, de paquetes, de secuencia, y más. Estos diagramas no solo representan visualmente la arquitectura del sistema, sino que son el punto de partida para generar todo el código fuente de la aplicación, tanto frontend como backend. La plataforma genera código estructurado y funcional en tecnologías modernas como Angular para el frontend, NestJS para el backend, y esquemas completos de bases de datos relacionales. Con esta herramienta, puedes obtener en minutos lo que normalmente tomaría semanas de análisis, diseño y codificación. Ideal para desarrolladores, empresas de software, instituciones educativas y startups que buscan reducir tiempos y costos de desarrollo.!!!NOTA: El servidor tarda unos minutos en prender.",
    image: "/UML.png?height=300&width=500",
    technologies: ["Ract","Node Js", "Nest JS", "PostgreSQL", "Tailwind"],
    liveUrl: "https://uml-generator-4gsb-7bcxx3dvg-jesusdanielgfim-uasedumxs-projects.vercel.app/",
    githubUrl: "https://github.com/eldanielgalaviz/UML-GENERATOR",
    featured: true,
  },
  {
    id: 3,
    title: "Pronosticos MLB",
    description:
      "Plataforma de predicciones de partidos de la MLB, donde puedes predecir el resultado de los partidos y ver las estadísticas de los jugadores. La prediccion se basa completamente en las estadisticas de los ultimos 10 partidos.",
    image: "/mlb.png?height=300&width=500",
    technologies: ["React/NextJS", "Node.js/NestJS", "MLB API"],
    liveUrl: "https://pronosticos-fx72b9297-jesusdanielgfim-uasedumxs-projects.vercel.app/",
    githubUrl: "https://github.com/eldanielgalaviz/pronosticos-mlb",
    featured: false,
  },
    {
    id: 4,
    title: "Gestor de Horarios Universidad",
    description:
      "Plataforme gestor de horarios, profesores, alumnos, Empleados de una universidad",
    image: "/horarios.png?height=300&width=500",
    technologies: ["React", "Node.js", "OpenWeather API"],
    liveUrl: "https://controlhorarios.up.railway.app/",
    githubUrl: "https://github.com/LuisRo14/Proyecto_Horarios_ahora_si",
    featured: false,
  },
  {
    id: 5,
    title: "Rastreador Sabueso",
    description: "Es una aplicacion mobil diseñada para personas ciegas o de baja vision, con la cual puedas rastraer un objeto con un rastreador desde una aplicacion mobil, la cual te dice la distacia en voz alta y tambiem funciona com vibraciones en el telefono, conforme mas te hacercas, vibra con mayor intensidad, t tambien te dice la ultima ubicacion encontrada en google maps.",
    image: "/sabueso.jpg?height=300&width=500",
    technologies: ["Esp32", "Arduino", "AndroidStudio", "Bluetooth"],
    liveUrl: "https://www.youtube.com/shorts/xn6-0CNckJ0",
    githubUrl: "https://github.com/eldanielgalaviz/SABUESO1.0",
    featured: false,
  },
  {
    id: 6,
    title: "Cerradura Inteligente ",
    description: "Cerradura Inteligente con 4 metodos de acceso, tarjetas RFID, Codigo, Aplicacion, Bluetooth",
    image: "/cerradura.png?height=300&width=500",
    technologies: ["Arduino", "AndriodStudio", "RFID"],
    liveUrl: "https://www.youtube.com/watch?v=-bA4uXnWlV0",
    githubUrl: "https://www.youtube.com/watch?v=-bA4uXnWlV0",
    featured: false,
  },
  {
    id: 7,
    title: "Control de acceso para un Gimnasio",
    description: "Cerradura Inteligente con 4 metodos de acceso, tarjetas RFID, Codigo, Aplicacion, Bluetoot. Ademas de un sistema de control de acceso para un gimnasio, donde puedes registrar a los usuarios, ver sus datos, y ver sus horarios de entrada y salida. Y gestionar las membresias del local",
    image: "/gym.png?height=300&width=500",
    technologies: ["Angular", "Express", "JWT", "Swagger"],
    liveUrl: "https://www.youtube.com/watch?v=34So39ILAr8&feature=youtu.be",
    githubUrl: "https://github.com/eldanielgalaviz",
    featured: false,
  },  {
    id: 8,
    title: "Aplicacion de MacroNutrientes",
    description: "Aplicacion movil para calcular tus macronutrientes, donde puedes registrar tus comidas, y ver tus macronutrientes diarios.",
    image: "/macro.png?height=300&width=500",
    technologies: ["Angular", "Flask", "JWT", "Swagger"],
    liveUrl: "https://www.youtube.com/watch?v=4vNKj9BSPJge",
    githubUrl: "https://github.com/eldanielgalaviz",
    featured: false,
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">JESUS DANIEL GALAVIZ LOPEZ</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#inicio" className="transition-colors hover:text-foreground/80">
              Inicio
            </Link>
            <Link href="#proyectos" className="transition-colors hover:text-foreground/80">
              Proyectos
            </Link>
            <Link href="#contacto" className="transition-colors hover:text-foreground/80">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-24 md:py-32">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Desarrollador Full Stack</h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Especializado en React, Node.js, Angular y tecnologías modernas. Creo aplicaciones web escalables y experiencias
                digitales excepcionales.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Angular</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Nest.js</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="#proyectos">Ver Proyectos</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contacto">Contactar</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/perfil.jpg?height=400&width=400"
                  alt="Foto de perfil"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-muted"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 bg-muted/50">
        <div className="container">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mis Proyectos</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Una selección de mis trabajos más recientes y destacados
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-semibold">Proyectos Destacados</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.liveUrl} target="_blank">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.githubUrl} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Todos los Proyectos</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => !project.featured)
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Ver
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="h-3 w-3 mr-1" />
                            Código
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24">
        <div className="container">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contacto</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>pvcdanielgalaviz@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+52 (668) 8202204</span>
                </div>
                <div className="flex items-center gap-d3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Los Mochis, Sinaloa, México</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Sígueme</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/daniel-galaviz-5615961a5/" target="_blank">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/eldanielgalaviz" target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://instagram.com/danielgalaviz" target="_blank">
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderé lo antes posible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Asunto
                  </label>
                  <Input id="subject" placeholder="Asunto del mensaje" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea id="message" placeholder="Cuéntame sobre tu proyecto..." className="min-h-[120px]" />
                </div>
                <Button className="w-full">Enviar Mensaje</Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 Daniel Galaviz. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="#inicio" className="text-sm text-muted-foreground hover:text-foreground">
                Inicio
              </Link>
              <Link href="#proyectos" className="text-sm text-muted-foreground hover:text-foreground">
                Proyectos
              </Link>
              <Link href="#contacto" className="text-sm text-muted-foreground hover:text-foreground">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
