/**
 * SEO Schema Markup Component
 * Adiciona dados estruturados JSON-LD para melhorar visibilidade em buscas locais
 */

export function SEOSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mafegel Construções",
    "image": "https://mafegel-construcoes.manus.space/images/hero-construction.jpg",
    "description": "Empresa especializada em obras residenciais, fundações, alvenaria, telhados e acabamentos em Pouso Alegre, MG",
    "url": "https://mafegel-construcoes.manus.space",
    "telephone": "+55 35 99153-8924",
    "email": "mafegel.construcoes@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pouso Alegre",
      "addressLocality": "Pouso Alegre",
      "addressRegion": "MG",
      "postalCode": "",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Pouso Alegre"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://wa.me/5535991538924"
    ],
    "serviceType": [
      "Construção Residencial",
      "Fundações",
      "Alvenaria",
      "Telhados",
      "Acabamentos",
      "Locação de Obra",
      "Projetos Estruturais",
      "Instalações"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mafegel Construções",
    "url": "https://mafegel-construcoes.manus.space",
    "logo": "https://mafegel-construcoes.manus.space/images/hero-construction.jpg",
    "description": "Empresa de construção civil especializada em obras residenciais em Pouso Alegre",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+55 35 99153-8924",
      "email": "mafegel.construcoes@gmail.com",
      "areaServed": "BR",
      "availableLanguage": "pt-BR"
    },
    "sameAs": [
      "https://wa.me/5535991538924"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
