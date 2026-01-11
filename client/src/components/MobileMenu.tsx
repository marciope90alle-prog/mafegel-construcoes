import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Mobile Menu Component
 * Menu hamburger responsivo para navegação mobile
 */

interface MobileMenuProps {
  onNavigate?: () => void;
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
    onNavigate?.();
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-secondary/10 rounded transition-colors"
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white border-b-2 border-foreground/10 z-50 md:hidden transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          <button
            onClick={() => handleNavClick("#servicos")}
            className="text-left px-4 py-3 hover:bg-primary/10 rounded transition-colors font-medium"
          >
            Serviços
          </button>
          <button
            onClick={() => handleNavClick("#portfolio")}
            className="text-left px-4 py-3 hover:bg-primary/10 rounded transition-colors font-medium"
          >
            Projetos
          </button>
          <button
            onClick={() => handleNavClick("/blog")}
            className="text-left px-4 py-3 hover:bg-primary/10 rounded transition-colors font-medium"
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick("#sobre")}
            className="text-left px-4 py-3 hover:bg-primary/10 rounded transition-colors font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavClick("#contato")}
            className="text-left px-4 py-3 hover:bg-primary/10 rounded transition-colors font-medium"
          >
            Contato
          </button>
          <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </>
  );
}
