import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MobileMenu } from "@/components/MobileMenu";
import { ArrowRight, Hammer, HomeIcon, Wrench, Zap, Phone, MapPin, Mail, MessageCircle, Compass, BookOpen, Users } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Industrial Brutalist Moderno
 * - Tipografia robusta e assertiva
 * - Contraste extremo: preto profundo vs laranja vibrante
 * - Layout assimétrico com blocos descentralizados
 * - Animações suaves mas deliberadas
 * - Paleta: Laranja (#FF6B35), Preto (#1A1A1A), Cinza Claro (#E8E8E8)
 */

const montserratStyle = { fontFamily: "'Montserrat', sans-serif" };
const robotoStyle = { fontFamily: "'Roboto', sans-serif" };

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const breadcrumbItems = [
    { name: "Início", url: "/" }
  ];

  const courses = [
    {
      id: 1,
      title: "Curso Topografia Prática com Estação Total",
      category: "Topografia",
      hours: "16h",
      format: "Presencial",
      location: "Pouso Alegre - MG",
      description: "Explore nosso Curso de Topografia Aplicada e aprofunde seus conhecimentos em técnicas avançadas de levantamento e mapeamento do terreno. Aprenda com especialistas do setor, dominando práticas inovadoras para análise precisa do relevo, utilizando as últimas tecnologias e ferramentas. Este curso prático oferece habilidades essenciais para profissionais da engenharia civil, geologia e arquitetura.",
    },
    {
      id: 2,
      title: "Curso de Carpintaria de Formas",
      category: "Fundação e Estrutura",
      hours: "20h",
      format: "Presencial",
      location: "Pouso Alegre - MG",
      description: "Domine as técnicas de carpintaria para formas de concreto armado. Aprenda a construir caixarias em madeirite e sistemas de formas metálicas. Essencial para profissionais que trabalham com fundações e estruturas de concreto.",
    },
    {
      id: 3,
      title: "Curso Fundação e Estrutura de Concreto Armado",
      category: "Fundação",
      hours: "24h",
      format: "Presencial",
      location: "Pouso Alegre - MG",
      description: "Capacitação completa em fundações e estruturas de concreto armado. Aprenda desde o projeto até a execução, incluindo armação de ferragens, cálculos estruturais e boas práticas de construção.",
    },
    {
      id: 4,
      title: "Curso Pedreiro Azulejista",
      category: "Acabamento",
      hours: "16h",
      format: "Presencial",
      location: "Pouso Alegre - MG",
      description: "Especialização em assentamento de azulejos e revestimentos. Técnicas modernas de aplicação, corte, rejunte e acabamento. Perfeito para profissionais que desejam aprimorar suas habilidades em acabamentos.",
    },
    {
      id: 5,
      title: "Curso Armador de Ferragens",
      category: "Estrutura",
      hours: "18h",
      format: "Presencial",
      location: "Pouso Alegre - MG",
      description: "Aprenda a arte da armação de ferragens para concreto armado. Domine técnicas de corte, dobra e posicionamento de aço. Essencial para profissionais que trabalham em estruturas.",
    },
    {
      id: 6,
      title: "Curso Apontador de Obras",
      category: "Gestão",
      hours: "20h",
      format: "Presencial",
      location: "Pouso Alegre - MG",
      description: "Formação em gestão e coordenação de obras. Aprenda a supervisionar equipes, controlar cronogramas e garantir qualidade na execução. Fundamental para líderes de equipe.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-foreground/10 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-2">
            <img src="/logo-mafegel-original.png" alt="Mafegel Logo" className="h-12 md:h-14 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#topografia" className="text-sm hover:text-primary transition-colors" style={robotoStyle}>
              Topografia
            </a>
            <a href="#servicos" className="text-sm hover:text-primary transition-colors" style={robotoStyle}>
              Serviços
            </a>
            <a href="#cursos" className="text-sm hover:text-primary transition-colors" style={robotoStyle}>
              Cursos
            </a>
            <a href="/blog" className="text-sm hover:text-primary transition-colors" style={robotoStyle}>
              Blog
            </a>
            <a href="#sobre" className="text-sm hover:text-primary transition-colors" style={robotoStyle}>
              Sobre
            </a>
            <a href="#contato" className="text-sm hover:text-primary transition-colors" style={robotoStyle}>
              Contato
            </a>
            <a href="https://wa.me/5535991538924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors text-xs md:text-sm">
              Solicitar Orçamento
            </a>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/images/hero-topografo-obra.jpg"
            alt="Topógrafo fazendo locação em obra residencial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="geometric-line mb-6 w-16 bg-primary"></div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight" style={montserratStyle}>
              Construindo Sonhos
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary" style={montserratStyle}>
              em Pouso Alegre
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl" style={robotoStyle}>
              Expertise em obras residenciais, fundações, alvenaria, telhados e acabamentos em Pouso Alegre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5535991538924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors text-base md:text-lg">
                Serviços <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="https://wa.me/5535991538924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors text-base md:text-lg">
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Topography Detailed Section */}
      <section id="topografia" className="bg-white py-16 md:py-24 border-t-4 border-primary">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="geometric-line mb-4 md:mb-6 w-12 md:w-16"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6" style={montserratStyle}>
                Topografia Profissional
              </h2>
              <p className="text-base md:text-lg text-foreground/70 mb-4 md:mb-6 leading-relaxed" style={robotoStyle}>
                Em Pouso Alegre, com o crescimento acelerado da cidade e os 8 loteamentos em desenvolvimento, a topografia profissional é essencial para garantir que seu lote esteja perfeitamente localizado e preparado para construção.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1" style={montserratStyle}>Precisão Milimétrica</h4>
                    <p className="text-sm md:text-base text-foreground/70" style={robotoStyle}>Levantamento com equipamento de última geração (Total Station) para garantir exatidão</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1" style={montserratStyle}>Locação Correta</h4>
                    <p className="text-sm md:text-base text-foreground/70" style={robotoStyle}>Posicionamento exato da obra no terreno, evitando problemas legais e construtivos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1" style={montserratStyle}>Análise de Terreno</h4>
                    <p className="text-sm md:text-base text-foreground/70" style={robotoStyle}>Estudo completo de declividade, drenagem e condições do solo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1" style={montserratStyle}>Conformidade Legal</h4>
                    <p className="text-sm md:text-base text-foreground/70" style={robotoStyle}>Garantia de cumprimento de recuos, afastamentos e normas municipais</p>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/5535991538924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors text-sm md:text-base">
                Solicitar Levantamento Topográfico
              </a>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/hero-topografo-obra.jpg"
                alt="Topografia em obra residencial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <div className="geometric-line mb-4 md:mb-6 w-12 md:w-16"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={montserratStyle}>
              Nossos Serviços
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl" style={robotoStyle}>
              Soluções completas em construção civil residencial com expertise em cada etapa do projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4">
              {[
                { title: "Fundação", desc: "Execução com formas e caixaria profissional" },
                { title: "Alvenaria", desc: "Trabalho profissional com acabamento impecável" },
                { title: "Telhados", desc: "Instalação com expertise técnica" },
                { title: "Acabamentos", desc: "Refinamento elegante e funcional" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-4 md:p-6 border-l-4 border-primary hover:bg-secondary/5 cursor-pointer transition-colors"
                  onClick={() => setActiveService(idx)}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2" style={montserratStyle}>{service.title}</h3>
                  <p className="text-foreground/70" style={robotoStyle}>{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/servico-fundacao-formas.jpg"
                alt="Fundação com formas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-secondary text-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <div className="geometric-line mb-4 md:mb-6 w-12 md:w-16 bg-primary"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={montserratStyle}>
              Serviços Complementares
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl" style={robotoStyle}>
              Além de nossas especialidades principais, oferecemos soluções integradas para seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Locação de Obra",
                description: "Equipamentos e máquinas para sua construção com manutenção completa.",
              },
              {
                title: "Projetos Estruturais",
                description: "Desenvolvimento de projetos estruturais com engenharia de ponta.",
              },
              {
                title: "Instalações",
                description: "Instalações elétricas, hidráulicas e de sistemas com expertise.",
              },
            ].map((service, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="text-lg md:text-xl font-bold mb-3" style={montserratStyle}>{service.title}</h3>
                <p className="text-white/80 text-sm md:text-base" style={robotoStyle}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <div className="geometric-line mb-4 md:mb-6 w-12 md:w-16"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={montserratStyle}>
              Cursos e Treinamentos
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl" style={robotoStyle}>
              Capacitação profissional em construção civil com instrutores experientes e certificação reconhecida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {courses.map((course) => (
              <div key={course.id} className="border-2 border-primary/20 hover:border-primary p-6 md:p-8 rounded-lg transition-all hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs md:text-sm font-bold mb-2" style={montserratStyle}>
                      {course.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mb-2" style={montserratStyle}>{course.title}</h3>
                  </div>
                  <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
                </div>
                <p className="text-sm md:text-base text-foreground/70 mb-4 leading-relaxed" style={robotoStyle}>
                  {course.description}
                </p>
                <div className="space-y-2 mb-6 text-sm md:text-base">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <span className="font-bold text-primary">•</span>
                    <span style={robotoStyle}><strong>Carga horária:</strong> {course.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <span className="font-bold text-primary">•</span>
                    <span style={robotoStyle}><strong>Formato:</strong> {course.format}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <span className="font-bold text-primary">•</span>
                    <span style={robotoStyle}><strong>Local:</strong> {course.location}</span>
                  </div>
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSepHw-jbtSXLEoysUPUG2vYj7j1CaapjX3u56b0qFOJTRglSw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors text-sm md:text-base">
                  Inscrever-se
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-divider py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="geometric-line mb-4 md:mb-6 w-12 md:w-16"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6" style={montserratStyle}>
                Sobre a Mafegel
              </h2>
              <p className="text-base md:text-lg text-foreground/70 mb-4 md:mb-6 leading-relaxed" style={robotoStyle}>
                A Mafegel Construções é uma empresa especializada em obras residenciais em Pouso Alegre - MG, com foco em qualidade, segurança e satisfação do cliente.
              </p>
              <p className="text-base md:text-lg text-foreground/70 mb-6 md:mb-8 leading-relaxed" style={robotoStyle}>
                Com expertise em fundações, alvenaria, telhados, acabamentos e topografia, transformamos projetos em realidades sólidas e duráveis. Também oferecemos cursos e treinamentos profissionais para capacitar novos talentos na construção civil.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary" style={montserratStyle}>✓</span>
                  </div>
                  <span className="text-foreground text-sm md:text-base" style={robotoStyle}>Experiência comprovada em construção civil</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary" style={montserratStyle}>✓</span>
                  </div>
                  <span className="text-foreground text-sm md:text-base" style={robotoStyle}>Equipe qualificada e certificada</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary" style={montserratStyle}>✓</span>
                  </div>
                  <span className="text-foreground text-sm md:text-base" style={robotoStyle}>Compromisso com prazos e qualidade</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary" style={montserratStyle}>✓</span>
                  </div>
                  <span className="text-foreground text-sm md:text-base" style={robotoStyle}>Atendimento personalizado ao cliente</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/hero-topografo-obra.jpg"
                alt="Sobre Mafegel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="bg-secondary text-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 md:mb-16 text-center">
            <div className="geometric-line mb-4 md:mb-6 w-12 md:w-16 bg-primary mx-auto"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={montserratStyle}>
              Pronto para Começar seu Projeto?
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto" style={robotoStyle}>
              Entre em contato conosco e solicite um orçamento sem compromisso. Nossa equipe está pronta para ajudar!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg text-center hover:bg-white/20 transition-colors">
              <Phone className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2" style={montserratStyle}>Telefone</h3>
              <a href="tel:+5535991538924" className="text-white/80 hover:text-white transition-colors text-sm md:text-base" style={robotoStyle}>
                (35) 99153-8924
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg text-center hover:bg-white/20 transition-colors">
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2" style={montserratStyle}>Email</h3>
              <a href="mailto:mafegel.construções@gmail.com" className="text-white/80 hover:text-white transition-colors text-sm md:text-base break-all" style={robotoStyle}>
                mafegel.construções@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg text-center hover:bg-white/20 transition-colors">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2" style={montserratStyle}>Localização</h3>
              <p className="text-white/80 text-sm md:text-base" style={robotoStyle}>
                Pouso Alegre - MG
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://wa.me/5535991538924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 md:px-12 py-6 md:py-8 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors text-base md:text-lg">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5535991538924"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40 animate-pulse"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4" style={montserratStyle}>Mafegel</h4>
              <p className="text-white/70 text-sm md:text-base" style={robotoStyle}>
                Construções residenciais de qualidade em Pouso Alegre - MG
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4" style={montserratStyle}>Serviços</h4>
              <ul className="space-y-2 text-white/70 text-sm md:text-base" style={robotoStyle}>
                <li><a href="#topografia" className="hover:text-white transition-colors">Topografia</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#cursos" className="hover:text-white transition-colors">Cursos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4" style={montserratStyle}>Contato</h4>
              <ul className="space-y-2 text-white/70 text-sm md:text-base" style={robotoStyle}>
                <li><a href="tel:+5535991538924" className="hover:text-white transition-colors">(35) 99153-8924</a></li>
                <li><a href="mailto:mafegel.construções@gmail.com" className="hover:text-white transition-colors break-all">mafegel.construções@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4" style={montserratStyle}>Localização</h4>
              <p className="text-white/70 text-sm md:text-base" style={robotoStyle}>
                Pouso Alegre - MG
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 md:pt-12 text-center">
            <p className="text-white/70 text-sm md:text-base" style={robotoStyle}>
              © 2024 Mafegel Construções. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
