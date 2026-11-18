
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-[100] w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12"
        aria-label="Main navigation"
      >
        {/* Personal Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="group flex items-center gap-3"
          aria-label="Aditya Jain - Home"
        >
          <span className="flex h-10 w-10 items-center justify-center border border-[var(--text-primary)] font-display text-sm font-extrabold tracking-tighter transition-colors group-hover:bg-[var(--text-primary)] group-hover:text-[var(--background)]">
            AJ
          </span>

          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            ADITYA JAIN<span className="text-[var(--accent)]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          {/* Resume - Opens in a new tab */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume in a new tab"
            className="hidden sm:inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2.5 text-xs font-semibold tracking-wide text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            Resume
            <Download size={14} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center transition-colors hover:text-[var(--accent)]"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={19} strokeWidth={1.6} />
            ) : (
              <Sun size={19} strokeWidth={1.6} />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-8 lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between text-2xl font-display font-semibold tracking-tight"
              >
                <span>{link.label}</span>

                <span className="text-xs font-body text-[var(--text-secondary)]">
                  0{index + 1}
                </span>
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              aria-label="View Resume in a new tab"
              className="mt-2 flex items-center justify-between border-t border-[var(--border)] pt-6 text-xl font-semibold"
            >
              <span>View Resume</span>
              <Download size={19} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
