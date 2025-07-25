"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Bug,
  PawPrint,
  BedDouble,
  ShieldCheck,
  Home,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Target,
  Users,
  Award,
  Menu,
  X,
  Rat,
} from "lucide-react"







export default function PestControlLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    inicio: false,
    servicios: false,
    nosotros: false,
    testimonios: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
{
    icon: Bug, 
    title: "Control de Insectos",
    description: "Eliminación efectiva de hormigas, cucarachas, moscas y más",
    features: ["Tratamiento residual", "Inspección gratuita", "Garantía 30 días"],
  },
  {
    icon: Home, 
    title: "Fumigación Residencial",
    description: "Protección completa para tu hogar y familia",
    features: ["Productos eco-friendly", "Personal certificado", "Seguimiento mensual"],
  },
  {
    icon: Rat, 
    title: "Control de Roedores",
    description: "Soluciones integrales contra ratas y ratones",
    features: ["Sellado de accesos", "Trampas especializadas", "Prevención total"],
  },     
      {
    icon: ShieldCheck, 
    title: "Control de Termitas y Comején",
    description: "Tratamiento especializado para proteger estructuras de madera de termitas y comején",
    features: [
      "Inspección especializada",
      "Tratamiento preventivo y correctivo",
      "Garantía prolongada",
    ],
  },
  {
    icon: BedDouble, 
    title: "Eliminación de Chinches de Cama",
    description: "Desinfección efectiva de colchones, muebles y habitaciones infestadas",
    features: [
      "Detección profesional",
      "Tratamiento térmico y químico",
      "Revisión post-tratamiento",
    ],
  },
  {
    icon: PawPrint, 
    title: "Control de Pulgas y Garrapatas",
    description: "Soluciones para hogares con mascotas y zonas infestadas",
    features: [
      "Productos seguros para animales",
      "Tratamiento interior y exterior",
      "Prevención continua",
    ],
  },
  ]

  const testimonials = [
    {
      name: "Edwin Silva",
      rating: 5,
      comment: "Excelente servicio, eliminaron completamente el problema de hormigas en mi cocina.",
    },
    {
      name: "Alex Martínez",
      rating: 5,
      comment: "Muy profesionales y puntuales. Mi oficina quedó libre de plagas.",
    },
    {
      name: "Sofía Saravia",
      rating: 5,
      comment: "Recomiendo 100%. Solucionaron el problema de cucarachas definitivamente.",
    },
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const [modalService, setModalService] = useState<any>(null)

  function ServiceModal({
    open,
    onClose,
    service,
  }: {
    open: boolean
    onClose: () => void
    service: any
  }) {
    if (!open || !service) return null
    const signals: Record<string, string[]> = {
      "Control de Insectos": [
        "Ves hormigas, cucarachas o moscas con frecuencia en tu cocina o baños.",
        "Encuentras restos de insectos o huevecillos en rincones y muebles.",
        "Notas malos olores o manchas en paredes y pisos."
      ],
      "Fumigación Residencial": [
        "Has visto plagas en tu hogar o jardín.",
        "Tienes mascotas y quieres protegerlas de pulgas y garrapatas.",
        "Buscas prevención antes de una mudanza o temporada lluviosa."
      ],
      "Control de Roedores": [
        "Escuchas ruidos en techos o paredes por la noche.",
        "Encuentras excrementos pequeños o cables roídos.",
        "Ves bolsas de comida rotas o huellas en la despensa."
      ],
      "Control de Termitas y Comején": [
        "La madera de puertas, ventanas o muebles suena hueca o se desmorona.",
        "Ves alas de insectos cerca de ventanas o lámparas.",
        "Aparecen túneles de barro en paredes o pisos."
      ],
      "Eliminación de Chinches de Cama": [
        "Tienes picaduras inexplicables al despertar.",
        "Ves manchas oscuras en colchones o sábanas.",
        "Encuentras pequeños insectos en costuras de colchones."
      ],
      "Control de Pulgas y Garrapatas": [
        "Tus mascotas se rascan constantemente o tienen heridas en la piel.",
        "Ves pequeños insectos saltando en alfombras o muebles.",
        "Has tenido infestaciones previas y quieres prevenir."
      ],
    }
    const tips = signals[service.title] || ["Consulta con nuestros expertos si tienes dudas o sospechas de plagas."]

    const whyText: Record<string, string> = {
      "Control de Insectos":
        "Los insectos pueden transmitir enfermedades peligrosas y contaminar alimentos y superficies. Un control profesional previene infecciones y protege la salud de tu familia o negocio.",
      "Fumigación Residencial":
        "La fumigación protege tu hogar y familia de plagas que pueden afectar la salud y la tranquilidad. Es clave para mantener ambientes seguros, especialmente si tienes niños, mascotas o personas vulnerables.",
      "Control de Roedores":
        "Los roedores pueden dañar estructuras, cables y alimentos, además de ser portadores de enfermedades graves. El control oportuno evita riesgos sanitarios y pérdidas económicas.",
      "Control de Termitas y Comején":
        "Las termitas y el comején destruyen la madera y pueden comprometer la seguridad de tu vivienda o negocio. Detectar y tratar a tiempo previene daños graves y costosos.",
      "Eliminación de Chinches de Cama":
        "Las chinches de cama provocan picaduras, alergias y problemas de sueño. Su eliminación profesional es esencial para recuperar el bienestar y evitar la propagación.",
      "Control de Pulgas y Garrapatas":
        "Pulgas y garrapatas afectan la salud de tus mascotas y pueden transmitir enfermedades a humanos. El control especializado protege a toda la familia y previene reinfestaciones.",
    }
    const why = whyText[service.title] || "Este servicio es fundamental para mantener ambientes saludables y libres de plagas."

    const diseaseList: Record<string, string[]> = {
      "Control de Insectos": [
        "Salmonelosis",
        "Disentería",
        "Gastroenteritis",
        "Fiebre tifoidea"
      ],
      "Fumigación Residencial": [
        "Leptospirosis",
        "Dengue",
        "Zika",
        "Alergias respiratorias"
      ],
      "Control de Roedores": [
        "Leptospirosis",
        "Hantavirus",
        "Salmonelosis",
        "Fiebre por mordedura de rata"
      ],
      "Control de Termitas y Comején": [
        "No transmiten enfermedades, pero generan ambientes insalubres por daño estructural"
      ],
      "Eliminación de Chinches de Cama": [
        "Alergias",
        "Irritaciones en la piel",
        "Infecciones secundarias por rascado"
      ],
      "Control de Pulgas y Garrapatas": [
        "Enfermedad de Lyme",
        "Fiebre maculosa",
        "Tifus",
        "Bartonelosis",
        "Dermatitis"
      ],
    }
    const diseases = diseaseList[service.title] || []
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
        style={{ animation: 'fadeIn 0.3s' }}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-red-100 animate-in slide-in-from-bottom duration-500"
        >
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition-colors"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <service.icon className="h-12 w-12 text-red-600 drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">{service.title}</h3>
            <p className="text-gray-700 mb-4 text-center leading-relaxed">{service.description}</p>
            <div className="w-full">
              <h4 className="font-semibold text-red-600 mb-2 text-left">¿Por qué es importante?</h4>
              <p className="text-gray-600 mb-2 text-left">{why}</p>
              {diseases.length > 0 && (
                <>
                  <h5 className="font-semibold text-red-500 mb-1 text-left">Enfermedades asociadas:</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-left mb-4">
                    {diseases.map((disease, idx) => (
                      <li key={idx}>{disease}</li>
                    ))}
                  </ul>
                </>
              )}
              <h4 className="font-semibold text-red-600 mb-2 text-left">¿Cuándo lo necesitas?</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-left">
                {tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">



      <header className="fixed top-0 w-full bg-white/95 text-red-600 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/logo.svg"
            alt="Total Control 4 Logo"
            className="h-15 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-red-500 hover:text-red-600 transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-black hover:text-red-600 transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-black hover:text-red-600 transition-colors">
            Nosotros
          </a>
          <a href="#testimonios" className="text-black hover:text-red-600 transition-colors">
            Testimonios
          </a>
          <a href="#contacto" className="text-black hover:text-red-600 transition-colors">
            Contacto
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-red-500"
            onClick={() => window.open("tel:50587777428")}
          >
            <Phone className="h-4 w-4 mr-2 text-white" />
            <span className="text-white group-hover:text-white">Llamar Ahora</span>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
          </div>

          {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4 mt-4">
            <a href="#inicio" className="text-red-500 hover:text-red-600 transition-colors">
          Inicio
            </a>
            <a href="#servicios" className="text-black hover:text-red-600 transition-colors">
          Servicios
            </a>
            <a href="#nosotros" className="text-black hover:text-red-600 transition-colors">
          Nosotros
            </a>
            <a href="#testimonios" className="text-black hover:text-red-600 transition-colors">
          Testimonios
            </a>
            <a href="#contacto" className="text-black hover:text-red-600 transition-colors">
                </a>
                <Button
                  className="bg-white border border-red-600 text-white hover:bg-red-600 hover:text-white w-full"
                  onClick={() => window.open("tel:50587777428")}
                >
                  <Phone className="h-4 w-4 mr-2 text-red-600" />
                  <span className="text-white group-hover:text-white">Llamar Ahora</span>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section
        id="inicio"
        className="pt-20 min-h-screen bg-gradient-to-br from-red-50 to-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 ${isVisible.inicio ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}
            >
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                <Zap className="h-4 w-4 mr-1" />
                Respuesta en 24 horas
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Elimina las
                <span className="text-red-600 block">Plagas</span>
                de tu hogar
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Protege tu familia y negocio con nuestros servicios profesionales de control de plagas. Soluciones
                efectivas, seguras y garantizadas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white hover:text-red-600 px-8 py-4 text-lg"
                  onClick={() => {
                    window.location.hash = "#contacto"
                    const contactoSection = document.getElementById("contacto")
                    if (contactoSection) {
                      contactoSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Target className="h-5 w-5 mr-2" />
                  Solicitar Inspección Gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-white hover:bg-black hover:text-red-600 px-8 py-4 text-lg bg-transparent"
                  onClick={() => {
                    window.location.hash = "#servicios"
                    const serviciosSection = document.getElementById("servicios")
                    if (serviciosSection) {
                      serviciosSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Ver Servicios
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">Sin costo</div>
                  <div className="text-gray-600">Inspección gratis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">Hasta 45%</div>
                  <div className="text-gray-600">En promociones activas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-gray-600">Garantizado</div>
                </div>
              </div>
            </div>

            <div className={`relative h-96 lg:h-[500px] rounded-2xl overflow-visible pointer-events-none ${isVisible.inicio ? "animate-in slide-in-from-right duration-1000" : "opacity-0"}`}>
              <div className="absolute fly-mosca top-0 w-6 h-6 z-20">
                <svg viewBox="0 0 40 40" width="24" height="24">
                  <ellipse cx="20" cy="20" rx="10" ry="7" fill="#222" />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                  <ellipse cx="20" cy="27" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute fly-mosca2 top-10 w-8 h-8 z-10">
                <svg viewBox="0 0 40 40" width="32" height="32">
                  <ellipse cx="20" cy="20" rx="10" ry="7" fill="#222" />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                  <ellipse cx="20" cy="27" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute fly-mosca3 top-32 w-10 h-10 z-30">
                <svg viewBox="0 0 40 40" width="40" height="40">
                  <ellipse cx="20" cy="20" rx="10" ry="7" fill="#222" />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                  <ellipse cx="20" cy="27" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute fly-mosca4 top-60 w-8 h-8 z-10">
                <svg viewBox="0 0 40 40" width="32" height="32">
                  <ellipse cx="20" cy="20" rx="10" ry="7" fill="#222" />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                  <ellipse cx="20" cy="27" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute fly-mosca5 top-80 w-6 h-6 z-20">
                <svg viewBox="0 0 40 40" width="24" height="24">
                  <ellipse cx="20" cy="20" rx="10" ry="7" fill="#222" />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
        {/* Modal State */}
        <ServiceModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          service={modalService}
        />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                  <ellipse cx="20" cy="27" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute fly-mosca7 -top-6 w-10 h-10 z-30">
                <svg viewBox="0 0 40 40" width="40" height="40">
                  <ellipse cx="20" cy="20" rx="10" ry="7" fill="#222" />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                  <ellipse cx="20" cy="27" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute fly-mosca8 top-96 w-8 h-8 z-10">
                <svg viewBox="0 0 40 40" width="32" height="32">
                  <ellipse cx="20" cy="20" rx="10" ry="7" fill="#222" />
                  <ellipse cx="30" cy="20" rx="5" ry="4" fill="#444" />
                  <ellipse cx="20" cy="13" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                  <ellipse cx="20" cy="27" rx="7" ry="3" fill="#aee9f7" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">Nuestros Servicios</Badge>
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
          Soluciones Profesionales de
          <span className="text-red-600 block">Control de Plagas</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ofrecemos servicios especializados para eliminar cualquier tipo de plaga de manera segura y efectiva
        </p>
          </div>

          <ServiceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={modalService}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`group hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-600 ${isVisible.servicios ? "animate-in slide-in-from-bottom duration-1000" : "opacity-0"}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
            <service.icon className="h-8 w-8 text-red-600 group-hover:text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-black group-hover:text-red-600 transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-600">
            <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
            {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-6">
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => {
            const text = `Hola, quiero solicitar el servicio de "${service.title}".`;
            const url = `https://wa.me/50587777428?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
              }}
            >
              Solicitar Servicio
            </Button>
            <Button
              variant="outline"
              className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              onClick={() => {
            setModalService(service)
            setModalOpen(true)
              }}
            >
              ¿Por qué es importante?
            </Button>
          </div>
            </CardContent>
          </Card>
        ))}
          </div>
        </div>
      </section>

     
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.nosotros ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">Sobre Nosotros</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Expertos en
                <span className="text-red-600 block">Control de Plagas</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Somos la mejor empresa en control de plagas, respaldados por numerosas opiniones que avalan nuestro servicio. Creemos que lo más importante es brindar una atención excelente, por eso estamos en constante capacitación y ofrecemos las mejores ofertas del mercado para dueños de negocio.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Al formar parte de nuestra empresa, cuentas con nuestro apoyo en todo momento para resolver cualquier problema que surja mientras administras tu negocio.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro principal objetivo es cuidar tu tranquilidad y la de tus trabajadores, ofreciendo un servicio de primera con un personal eficiente y empático.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Personal Certificado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Productos Seguros</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Garantía Total</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Respuesta Rápida</span>
                </div>
              </div>

              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Conocer Más
              </Button>
            </div>

            <div className={`${isVisible.nosotros ? "animate-in slide-in-from-right duration-1000" : "opacity-0"}`}>
              <div className="relative">
                <img
                  src="src/assets/foto3.jpg"
                  alt="Equipo profesional de control de plagas"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mision-vision"
        className="py-20 bg-gradient-to-br from-red-100 via-white to-red-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">Misión y Visión</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Nuestra <span className="text-red-600 block">Misión y Visión</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre el propósito y los valores que nos impulsan a proteger tu bienestar y el de tu familia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <Shield className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-3xl font-bold text-red-600 mb-4">Misión</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                En Total Control 4, nos dedicamos a proteger los hogares y negocios de nuestros clientes mediante servicios de fumigación y control de plagas de la más alta calidad. Combinamos tecnología avanzada, productos seguros y prácticas responsables para erradicar infestaciones y prevenir futuras intrusiones, garantizando ambientes saludables y libres de amenazas.
              </p>
              <Badge className="bg-red-50 text-red-600">Compromiso</Badge>
            </div>
            <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-3xl font-bold text-red-600 mb-4">Visión</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
Ser reconocidos como la empresa líder en control integral de plagas en la región, destacándonos por nuestra eficacia, profesionalismo y enfoque en la satisfacción total del cliente. Aspiramos a expandir nuestras soluciones innovadoras, formar alianzas estratégicas y elevar continuamente los estándares de seguridad y calidad en la industria.
              </p>
              <Badge className="bg-red-50 text-red-600">Excelencia</Badge>
            </div>
          </div>
       
        </div>
        
      </section>

      <section id="testimonios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">Testimonios</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Lo que dicen nuestros
              <span className="text-red-600 block">Clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`${isVisible.testimonios ? "animate-in slide-in-from-bottom duration-1000" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        <img
          src="src/assets/foto1.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">¿Tienes un problema de plagas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
        No esperes más. Contacta con nosotros hoy mismo y obtén una inspección gratuita. Nuestros expertos están
        listos para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg"
          onClick={() => window.open("tel:50587777428")}
        >
          <Phone className="h-5 w-5 mr-2" />
          Llamar Ahora
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg bg-transparent"
          onClick={() => window.open("https://wa.me/50587777428?text=Hola,%20quiero%20más%20información%20sobre%20el%20control%20de%20plagas.", "_blank")}
        >
          <Mail className="h-5 w-5 mr-2" />
          Enviar Mensaje por WhatsApp
        </Button>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Contáctanos</h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <div className="font-semibold text-black">Teléfono</div>
                    <div className="text-gray-600">(505) 8777-7428</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-600" />
                  <div>
                    <div className="font-semibold text-black">Email</div>
                    <div className="text-gray-600">-----</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-black">Dirección</div>
                      <div className="text-gray-600">
                      Del centro de salud 1 1/2 al norte. Reparto San Jorge, San Marcos, Carazo.
                      </div>
                    </div>
                    </div>
                   
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form
                  className="space-y-6"
                  onSubmit={e => {
                    e.preventDefault()
                    const nombre = (e.currentTarget.elements.namedItem("nombre") as HTMLInputElement)?.value
                    const telefono = (e.currentTarget.elements.namedItem("telefono") as HTMLInputElement)?.value
                    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value
                    const mensaje = (e.currentTarget.elements.namedItem("mensaje") as HTMLTextAreaElement)?.value
                    const text = `Hola, soy ${nombre || ""}. Teléfono: ${telefono || ""}. Email: ${email || ""}. Mensaje: ${mensaje || ""}`
                    const url = `https://wa.me/50587777428?text=${encodeURIComponent(text)}`
                    window.open(url, "_blank")
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Nombre</label>
                      <Input name="nombre" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Teléfono</label>
                      <Input name="telefono" placeholder="Tu teléfono" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email</label>
                    <Input name="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      rows={4}
                      placeholder="Describe tu problema de plagas..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Enviar por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
                <div className="flex items-center space-x-2 mb-4">
                <img
                  src="src/assets/logoblanco.svg"
                  alt="Total Control 4 Logo"
                  className="h-15 w-auto"
                />
                </div>
              <p className="text-gray-400">
                Tu empresa de confianza en control de plagas. Protegemos tu hogar y negocio.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                Control de Insectos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                Fumigación
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                Control de Roedores
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                Inspecciones
                </a>
              </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                Testimonios
                </a>
              </li>
             
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                Contacto
                </a>
              </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <div>(505) 8777-7428</div>
                <div>-----</div>
                <div>Del centro de salud 1 1/2 al norte. Reparto San Jorge, San Marcos, Carazo.
</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Total Control 4. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
