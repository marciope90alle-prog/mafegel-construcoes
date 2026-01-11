import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Industrial Brutalist Moderno
 * - Blog mantém consistência visual com site
 * - Cards de artigos com imagens e metadados
 * - Filtros por categoria
 * - SEO otimizado com schema markup
 */

const montserratStyle = { fontFamily: "'Montserrat', sans-serif" };
const robotoStyle = { fontFamily: "'Roboto', sans-serif" };

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Guia Completo: Como Comprar Lote em Pouso Alegre",
    excerpt: "Descubra tudo o que você precisa saber antes de investir em um lote em Pouso Alegre. Documentação, análise de viabilidade e dicas essenciais.",
    category: "Investimento",
    author: "Mafegel Construções",
    date: "2024-01-15",
    image: "/images/hero-construction.jpg",
    slug: "como-comprar-lote-pouso-alegre",
    readTime: 8
  },
  {
    id: "2",
    title: "Topografia: O Primeiro Passo para Sua Construção",
    excerpt: "Entenda a importância do levantamento topográfico e como ele influencia no custo e viabilidade da sua obra em Pouso Alegre.",
    category: "Topografia",
    author: "Mafegel Construções",
    date: "2024-01-12",
    image: "/images/projeto-casa-moderna.jpg",
    slug: "topografia-primeiro-passo-construcao",
    readTime: 6
  },
  {
    id: "3",
    title: "Loteamentos em Desenvolvimento em Pouso Alegre 2024",
    excerpt: "Conheça os 8 loteamentos em desenvolvimento que em breve serão liberados para construção. Oportunidades de investimento em Pouso Alegre.",
    category: "Mercado Imobiliário",
    author: "Mafegel Construções",
    date: "2024-01-10",
    image: "/images/projeto-reforma-completa.jpg",
    slug: "loteamentos-desenvolvimento-pouso-alegre",
    readTime: 7
  },
  {
    id: "4",
    title: "Fundações: Escolhendo a Melhor para Seu Terreno",
    excerpt: "Tipos de fundação, como escolher a adequada para seu terreno e por que é crucial para a durabilidade da sua construção.",
    category: "Construção",
    author: "Mafegel Construções",
    date: "2024-01-08",
    image: "/images/projeto-alvenaria-acabamento.jpg",
    slug: "fundacoes-tipos-escolha",
    readTime: 9
  },
  {
    id: "5",
    title: "Por Que Pouso Alegre é o Melhor Lugar para Investir",
    excerpt: "PIB em crescimento de 33%, infraestrutura em desenvolvimento e oportunidades imobiliárias. Saiba por que Pouso Alegre é um polo de crescimento.",
    category: "Mercado Imobiliário",
    author: "Mafegel Construções",
    date: "2024-01-05",
    image: "/images/projeto-telhado-estrutura.jpg",
    slug: "pouso-alegre-melhor-investimento",
    readTime: 7
  },
  {
    id: "6",
    title: "Alvenaria Estrutural: Economia e Durabilidade",
    excerpt: "Conheça os benefícios da alvenaria estrutural, como ela reduz custos e aumenta a durabilidade da sua construção residencial.",
    category: "Construção",
    author: "Mafegel Construções",
    date: "2024-01-02",
    image: "/images/hero-construction.jpg",
    slug: "alvenaria-estrutural-economia",
    readTime: 6
  }
];

const categories = ["Todos", "Topografia", "Construção", "Investimento", "Mercado Imobiliário"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "Blog", url: "/blog" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-foreground/10 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg" style={montserratStyle}>M</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline" style={montserratStyle}>MAFEGEL</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="/" className="text-sm hover:text-primary transition-colors" style={robotoStyle}>
              Voltar ao Site
            </a>
            <Button className="industrial-button text-xs md:text-sm">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="geometric-line mb-6 w-16"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={montserratStyle}>
              Blog Mafegel
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8" style={robotoStyle}>
              Conteúdo otimizado sobre construção civil, topografia, investimento em lotes e oportunidades em Pouso Alegre MG.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 border-b border-border">
        <div className="container">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-foreground/10 focus:border-primary outline-none transition-colors"
                style={robotoStyle}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "bg-secondary/10 text-foreground hover:bg-secondary/20"
                  }`}
                  style={robotoStyle}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="industrial-card overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded" style={montserratStyle}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2" style={montserratStyle}>
                      {post.title}
                    </h3>

                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-grow" style={robotoStyle}>
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-foreground/60 mb-4 border-t border-border pt-4" style={robotoStyle}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div>{post.readTime} min de leitura</div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      style={robotoStyle}
                    >
                      Ler Artigo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70" style={robotoStyle}>
                Nenhum artigo encontrado. Tente outra busca ou categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={montserratStyle}>
            Pronto para Começar seu Projeto?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={robotoStyle}>
            Entre em contato conosco para um levantamento topográfico gratuito e consultoria especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90">
              Solicitar Orçamento
            </Button>
            <a
              href="https://wa.me/5535991538924?text=Ol%C3%A1%20Mafegel!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 transition-colors font-semibold"
              style={robotoStyle}
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 border-t-4 border-primary">
        <div className="container">
          <div className="text-center text-sm text-white/60" style={robotoStyle}>
            <p>&copy; 2024 Mafegel Construções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5535991538924?text=Ol%C3%A1%20Mafegel!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto%20de%20constru%C3%A7%C3%A3o."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        title="Fale conosco no WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.124 7.738L.929 23.5l8.272-2.737c2.264 1.236 4.823 1.9 7.574 1.9h.008c5.368 0 9.746-4.378 9.746-9.797 0-2.611-.505-5.192-1.5-7.619-1.023-2.52-2.588-4.785-4.487-6.566-1.898-1.781-4.163-3.139-6.679-3.937-2.516-.798-5.112-.798-7.578 0z" />
        </svg>
      </a>
    </div>
  );
}
