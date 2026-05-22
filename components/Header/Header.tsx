"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import styles from "./Header.module.scss";

type NavigationItem = {
  label: string;
  href: string;
  hasMenu?: boolean;
};

type HeaderProps = {
  logo: {
    mark: string;
    name: string;
    suffix: string;
  };
  navigation: readonly NavigationItem[];
  cta: {
    label: string;
    href: string;
  };
};

export function Header({ logo, navigation, cta }: HeaderProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("operiq-theme");
    const preferredTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : "dark";

    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("operiq-theme", nextTheme);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label={`${logo.name} ${logo.suffix} home`}>
        <Image className={styles.logoMark} src="/images/logo.png" alt="" width={60} height={60} priority aria-hidden="true" />
        <span className={styles.logoText}>
          <span>{logo.name}</span>
          <small>{logo.suffix}</small>
        </span>
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link className={styles.navLink} href={item.href} key={item.label}>
            {item.label}
            {item.hasMenu ? <ChevronDown size={13} strokeWidth={2.2} aria-hidden="true" /> : null}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <button
          className={styles.themeToggle}
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={16} strokeWidth={2.2} /> : <Moon size={16} strokeWidth={2.2} />}
        </button>

        <Link className={styles.cta} href={cta.href}>
          {cta.label}
          <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
        </Link>

        <button
          className={styles.menuToggle}
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link className={styles.mobileNavLink} href={item.href} key={item.label} onClick={closeMenu}>
            {item.label}
            {item.hasMenu ? <ChevronDown size={14} strokeWidth={2.2} aria-hidden="true" /> : null}
          </Link>
        ))}
        <Link className={styles.mobileCta} href={cta.href} onClick={closeMenu}>
          {cta.label}
          <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
