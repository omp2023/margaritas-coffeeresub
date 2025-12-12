"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, MapPin, Phone, Mail, Clock, ChevronRight, Star, Menu, X } from "lucide-react"

export default function MargaritasCoffee() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Detect active section
      const sections = ["home", "about", "menu", "gallery", "testimonials", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    {
      category: "Cafés Especiales",
      items: [
        {
          name: "Cappuccino Clásico",
          price: "$4.50",
          description: "Espresso con leche vaporizada y espuma cremosa",
          image:
            "https://placehold.co/400x300?text=Cappuccino+clasico+con+arte+latte+en+forma+de+corazon+espuma+cremosa+taza+blanca",
        },
        {
          name: "Latte Caramelo",
          price: "$5.00",
          description: "Café latte con jarabe de caramelo y crema batida",
          image:
            "https://placehold.co/400x300?text=Latte+de+caramelo+con+sirope+dorado+crema+batida+decoracion+elegante",
        },
        {
          name: "Mocha Belga",
          price: "$5.50",
          description: "Espresso con chocolate belga y crema de leche",
          image: "https://placehold.co/400x300?text=Mocha+con+chocolate+belga+oscuro+crema+batida+virutas+de+chocolate",
        },
        {
          name: "Americano Gold",
          price: "$4.00",
          description: "Espresso doble con agua caliente",
          image:
            "https://placehold.co/400x300?text=Cafe+americano+en+taza+dorada+elegante+vapor+ascendente+fondo+oscuro",
        },
      ],
    },
    {
      category: "Bebidas Frías",
      items: [
        {
          name: "Frappé Margarita",
          price: "$6.00",
          description: "Bebida helada con café, crema y topping de caramelo",
          image:
            "https://placehold.co/400x300?text=Frappe+helado+con+crema+batida+caramelo+pajita+dorada+vaso+transparente",
        },
        {
          name: "Cold Brew Premium",
          price: "$5.50",
          description: "Café de extracción fría por 24 horas",
          image: "https://placehold.co/400x300?text=Cold+brew+en+vaso+alto+con+hielo+tonos+dorados+goteo+condensacion",
        },
        {
          name: "Iced Latte Vainilla",
          price: "$5.00",
          description: "Café con leche fría y vainilla natural",
          image: "https://placehold.co/400x300?text=Iced+latte+con+vainilla+hielo+leche+capas+visibles+vaso+elegante",
        },
        {
          name: "Smoothie de Café",
          price: "$6.50",
          description: "Mezcla de café, plátano y proteína",
          image: "https://placehold.co/400x300?text=Smoothie+cremoso+cafe+platano+decoracion+artistica+fruta+fresca",
        },
      ],
    },
    {
      category: "Repostería Artesanal",
      items: [
        {
          name: "Croissant Mantequilla",
          price: "$3.50",
          description: "Croissant francés recién horneado",
          image: "https://placehold.co/400x300?text=Croissant+dorado+hojaldrado+mantequilla+brillante+fondo+rustico",
        },
        {
          name: "Cheesecake Margarita",
          price: "$5.50",
          description: "Tarta de queso con base de galleta y frambuesas",
          image: "https://placehold.co/400x300?text=Cheesecake+cremoso+frambuesas+frescas+salsa+decoracion+elegante",
        },
        {
          name: "Brownie Triple Chocolate",
          price: "$4.50",
          description: "Brownie con tres tipos de chocolate belga",
          image: "https://placehold.co/400x300?text=Brownie+chocolate+denso+nueces+helado+vainilla+salsa+chocolate",
        },
        {
          name: "Muffin Arándanos",
          price: "$3.00",
          description: "Muffin esponjoso con arándanos frescos",
          image: "https://placehold.co/400x300?text=Muffin+arandanos+azucar+glaseada+esponjoso+papel+dorado",
        },
      ],
    },
    {
      category: "Desayunos",
      items: [
        {
          name: "Tostadas Francesas",
          price: "$8.50",
          description: "Con frutas frescas, miel y crema batida",
          image: "https://placehold.co/400x300?text=Tostadas+francesas+frutas+coloridas+miel+dorada+azucar+glass",
        },
        {
          name: "Bowl Açaí Premium",
          price: "$9.00",
          description: "Açaí con granola, frutas y miel orgánica",
          image:
            "https://placehold.co/400x300?text=Bowl+acai+morado+granola+frutas+tropicales+semillas+presentacion+artistica",
        },
        {
          name: "Sandwich Club",
          price: "$10.00",
          description: "Pollo, bacon, aguacate y vegetales frescos",
          image: "https://placehold.co/400x300?text=Club+sandwich+multicapa+pollo+bacon+vegetales+papas+fritas",
        },
        {
          name: "Omelette Deluxe",
          price: "$9.50",
          description: "Tres huevos con queso, champiñones y espinacas",
          image: "https://placehold.co/400x300?text=Omelette+esponjoso+queso+derretido+champinones+hierbas+frescas",
        },
      ],
    },
  ]

  const testimonials = [
    {
      name: "María González",
      comment: "¡El mejor café de la ciudad! El ambiente es acogedor y el servicio excepcional.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      comment: "Los desayunos son increíbles. Recomiendo las tostadas francesas, deliciosas.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      comment: "Mi lugar favorito para trabajar. WiFi rápido y el café es de primera calidad.",
      rating: 5,
    },
    {
      name: "Luis Fernández",
      comment: "La repostería artesanal es espectacular. El cheesecake es el mejor que he probado.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? "bg-amber-900/95 backdrop-blur-md shadow-2xl" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="relative">
                <Coffee className="w-10 h-10 text-amber-400 transform group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-amber-400/30 blur-xl rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-50 tracking-wide">Margaritas Coffee</h1>
                <p className="text-xs text-amber-200">Premium Experience</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "menu", "gallery", "testimonials", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-amber-300 relative group ${
                    activeSection === section ? "text-amber-300" : "text-amber-50"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                      activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
                Reservar Mesa
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-amber-50 p-2 hover:bg-amber-800/50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in-down">
              {["home", "about", "menu", "gallery", "testimonials", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-amber-800/50 rounded-lg ${
                    activeSection === section ? "text-amber-300 bg-amber-800/30" : "text-amber-50"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                Reservar Mesa
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with 3D Effect */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-float"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s", transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s", transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)` }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="text-center animate-fade-in-up">
            <div className="mb-8 inline-block">
              <div className="relative">
                <Coffee className="w-24 h-24 text-amber-600 mx-auto animate-bounce-slow" />
                <div className="absolute inset-0 bg-amber-500/30 blur-2xl rounded-full"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 animate-gradient-x">
              Margaritas Coffee
            </h1>

            <p className="text-2xl md:text-3xl text-amber-900 mb-4 font-light tracking-wide">
              Donde cada taza cuenta una historia
            </p>

            <p className="text-lg text-amber-800/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experimenta el arte del café con granos seleccionados y repostería artesanal. Un espacio diseñado para
              disfrutar cada momento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("menu")}
                className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-110 group"
              >
                Ver Menú
                <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-amber-600 text-amber-900 hover:bg-amber-600 hover:text-white px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-110"
              >
                Contáctanos
              </Button>
            </div>
          </div>

          {/* 3D Coffee Cups Decoration */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative group"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `translateY(${scrollY * 0.1 * i}px)`,
                }}
              >
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-2xl transform group-hover:scale-110 transition-all duration-500 hover:rotate-3">
                  <Coffee className="w-16 h-16 text-white mx-auto" />
                </div>
                <div className="absolute inset-0 bg-amber-500/30 blur-xl rounded-2xl transform group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Nuestra Historia</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-amber-900/80 leading-relaxed">
                Desde 2010, <span className="font-bold text-amber-700">Margaritas Coffee</span> ha sido el hogar de los
                amantes del café más exigentes. Cada grano es seleccionado cuidadosamente de las mejores plantaciones
                del mundo.
              </p>
              <p className="text-lg text-amber-900/80 leading-relaxed">
                Nuestros baristas expertos transforman cada preparación en una obra de arte, combinando técnicas
                tradicionales con innovación moderna. Aquí, el café no es solo una bebida, es una experiencia sensorial.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 mb-3 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <p className="text-3xl font-bold text-white">13+</p>
                  </div>
                  <p className="text-sm text-amber-800 font-medium">Años</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 mb-3 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <p className="text-3xl font-bold text-white">50k+</p>
                  </div>
                  <p className="text-sm text-amber-800 font-medium">Clientes</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 mb-3 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <p className="text-3xl font-bold text-white">15+</p>
                  </div>
                  <p className="text-sm text-amber-800 font-medium">Variedades</p>
                </div>
              </div>
            </div>

            <div className="relative group animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="https://placehold.co/600x700?text=Interior+acogedor+de+cafeteria+moderna+con+decoracion+rustica+dorada+iluminacion+calida+mesas+madera"
                alt="Interior acogedor de cafeteria moderna con decoracion rustica dorada iluminacion calida mesas madera"
                className="relative rounded-3xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gradient-to-b from-amber-50 to-orange-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Nuestro Menú</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-amber-800/80 max-w-2xl mx-auto">
              Descubre nuestra selección de cafés especiales, bebidas frías y repostería artesanal
            </p>
          </div>

          {menuItems.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-20 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1"></div>
                <h3 className="text-3xl font-bold text-amber-900 px-6">{category.category}</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="group overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 bg-white/80 backdrop-blur-sm hover:-translate-y-4"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                        {item.price}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-amber-800/70 text-sm leading-relaxed">{item.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
                        >
                          Ordenar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/50 to-amber-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Galería</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-amber-800/80">Momentos especiales en Margaritas Coffee</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Taza+de+cafe+artesanal+con+arte+latte+en+forma+de+hoja+sobre+mesa+madera+luz+natural",
              "Barista+profesional+preparando+espresso+con+maquina+dorada+vapor+ambiente+acogedor",
              "Variedad+de+postres+artesanales+exhibidos+vitrina+iluminada+decoracion+elegante",
              "Mesa+de+cafe+con+croissants+frescos+cafe+humeante+flores+ambiente+matutino",
              "Granos+de+cafe+tostados+esparcidos+sobre+superficie+rustica+luz+calida+textura",
              "Cafe+frio+con+hielo+en+vaso+alto+pajita+dorada+condensacion+fondo+bokeh",
              "Interior+moderno+de+cafeteria+con+sillas+elegantes+plantas+iluminacion+ambiente",
              "Detalle+de+cappuccino+con+canela+espolvoreada+galletas+cuchara+dorada+presentacion+artistica",
            ].map((desc, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl animate-fade-in-up cursor-pointer"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  gridColumn: i === 3 || i === 4 ? "span 2" : "span 1",
                  gridRow: i === 3 || i === 4 ? "span 2" : "span 1",
                }}
              >
                <img
                  src={`https://placehold.co/${i === 3 || i === 4 ? "800x800" : "400x400"}?text=${desc}`}
                  alt={desc.replace(/\+/g, " ")}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {desc.replace(/\+/g, " ").slice(0, 50)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-amber-900/80 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-amber-900">{testimonial.name}</p>
                      <p className="text-sm text-amber-700">Cliente Frecuente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Visítanos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8 animate-slide-in-left">
              <Card className="group border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2">Dirección</h3>
                      <p className="text-amber-800/80">Av. Principal 123, Centro</p>
                      <p className="text-amber-800/80">Ciudad, País 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2">Teléfono</h3>
                      <p className="text-amber-800/80">+1 (555) 123-4567</p>
                      <p className="text-amber-800/80">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2">Email</h3>
                      <p className="text-amber-800/80">info@margaritascoffee.com</p>
                      <p className="text-amber-800/80">reservas@margaritascoffee.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2">Horario</h3>
                      <p className="text-amber-800/80">Lunes - Viernes: 7:00 AM - 10:00 PM</p>
                      <p className="text-amber-800/80">Sábado - Domingo: 8:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative group animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="https://placehold.co/600x800?text=Fachada+exterior+de+cafeteria+moderna+con+ventanales+amplios+iluminacion+calida+letrero+dorado"
                alt="Fachada exterior de cafeteria moderna con ventanales amplios iluminacion calida letrero dorado"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold">Margaritas Coffee</h3>
              </div>
              <p className="text-amber-200 leading-relaxed">
                Tu destino para el mejor café y repostería artesanal. Experiencia premium desde 2010.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {["Inicio", "Nosotros", "Menú", "Galería", "Contacto"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-amber-200 hover:text-amber-400 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-amber-200 mb-4">Suscríbete para ofertas exclusivas</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 rounded-lg bg-amber-800/50 border border-amber-700 text-amber-50 placeholder-amber-300 focus:outline-none focus:border-amber-500"
                />
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                  Enviar
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-8 text-center">
            <p className="text-amber-300">© 2025 Margaritas Coffee. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
