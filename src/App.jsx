import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, Server, Code, BarChart, Headset, MapPin, Settings2, Bot, Mail, Phone, User, MessageSquare 
} from "lucide-react";

export default function ElvoTechLanding() {
  const [lang, setLang] = useState("en");
  const [selectedService, setSelectedService] = useState("");
  const contactRef = useRef(null); // Referencia para el scroll

  const content = {
    en: {
      title: "",
      subtitle: "Technology Solutions for Modern Businesses",
      description: "ElvoTech Solutions provides innovative, secure, and scalable technology services to help businesses grow.",
      servicesTitle: "Our Services",
      services: [
        { id: "cloud", name: "Cloud & Infrastructure", icon: <Server className="w-6 h-6" /> },
        { id: "software", name: "Custom Software", icon: <Code className="w-6 h-6" /> },
        { id: "data", name: "Data & Analytics", icon: <BarChart className="w-6 h-6" /> },
        { id: "erp", name: "ERP & CRM Consulting", icon: <Settings2 className="w-6 h-6" /> },
        { id: "bots", name: "IA Bots", icon: <Bot className="w-6 h-6" />, url: "https://www.natbots.com" },
        { id: "it", name: "IT Consulting", icon: <Headset className="w-6 h-6" /> },
      ],
      contactTitle: "Contact Us",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Interested Service",
        description: "How can we help you?",
        send: "Send Message",
        required: "Required"
      },
      location: "Chicago, Illinois – USA"
    },
    es: {
      title: "",
      subtitle: "Soluciones tecnológicas para empresas modernas",
      description: "ElvoTech Solutions ofrece servicios tecnológicos innovadores, seguros y escalables para impulsar el crecimiento de tu empresa.",
      servicesTitle: "Nuestros Servicios",
      services: [
        { id: "cloud", name: "Nube e Infraestructura", icon: <Server className="w-6 h-6" /> },
        { id: "software", name: "Software a Medida", icon: <Code className="w-6 h-6" /> },
        { id: "data", name: "Datos y Analítica", icon: <BarChart className="w-6 h-6" /> },
        { id: "erp", name: "Consultoría ERP y CRM", icon: <Settings2 className="w-6 h-6" /> },
        { id: "bots", name: "IA Bots", icon: <Bot className="w-6 h-6" />, url: "https://www.natbots.com" },
        { id: "it", name: "Consultoría TI", icon: <Headset className="w-6 h-6" /> },
      ],
      contactTitle: "Contáctanos",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        service: "Servicio de Interés",
        description: "¿En qué podemos ayudarte?",
        send: "Enviar Mensaje",
        required: "Obligatorio"
      },
      location: "Chicago, Illinois – EE. UU."
    },
  };

  const t = content[lang];

  // Función para manejar el click en servicios
  const handleServiceClick = (service) => {
    if (service.url) {
      window.open(service.url, "_blank");
    } else {
      setSelectedService(service.name);
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight hidden sm:block">{t.title}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setLang(lang === "en" ? "es" : "en")} className="flex items-center gap-2">
            <Globe className="w-4 h-4" /> {lang === "en" ? "Español" : "English"}
          </Button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 tracking-tight">
            {t.subtitle}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.description}</p>
        </header>

        {/* Services Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((service, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="cursor-pointer" onClick={() => handleServiceClick(service)}>
                <Card className={`h-full border-none shadow-md hover:shadow-xl transition-all ${service.url ? 'ring-2 ring-blue-500' : ''}`}>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-4">{service.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">
                      {service.url ? (lang === 'en' ? 'Visit Website' : 'Visitar') : (lang === 'en' ? 'Get Started' : 'Empezar')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section ref={contactRef} className="max-w-4xl mx-auto mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <div className="flex items-center justify-center gap-2 text-slate-500">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{t.location}</span>
            </div>
          </div>

          <Card className="shadow-2xl border-none">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2 italic text-slate-700">
                      <User className="w-4 h-4" /> {t.form.name}
                    </label>
                    <input type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="John Doe" />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2 italic text-slate-700">
                      <Mail className="w-4 h-4" /> {t.form.email} *
                    </label>
                    <input required type="email" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2 italic text-slate-700">
                      <Phone className="w-4 h-4" /> {t.form.phone}
                    </label>
                    <input type="tel" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="+1 (000) 000-0000" />
                  </div>
                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2 italic text-slate-700">
                      <Settings2 className="w-4 h-4" /> {t.form.service}
                    </label>
                    <select 
                      value={selectedService} 
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition"
                    >
                      <option value="">Select a service</option>
                      {t.services.filter(s => !s.url).map((s, idx) => (
                        <option key={idx} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2 italic text-slate-700">
                    <MessageSquare className="w-4 h-4" /> {t.form.description}
                  </label>
                  <textarea rows="4" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Tell us about your project..."></textarea>
                </div>

                <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  {t.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 bg-white text-center text-slate-500">
        <p className="text-sm">© {new Date().getFullYear()} {t.title}. All rights reserved.</p>
      </footer>
    </div>
  );
}



