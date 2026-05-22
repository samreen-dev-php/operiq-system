import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import styles from "./Hero.module.scss";

type HeroContent = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  features: readonly {
    label: string;
    icon: LucideIcon;
  }[];
};

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            <span>{content.title}</span>
            <strong>{content.highlightedTitle}</strong>
          </h1>
          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            <Link className={styles.primaryButton} href={content.primaryAction.href}>
              {content.primaryAction.label}
              <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            <Link className={styles.secondaryButton} href={content.secondaryAction.href}>
              {content.secondaryAction.label}
              <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <ul className={styles.features} aria-label="Platform strengths">
            {content.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <li key={feature.label}>
                  <Icon size={34} strokeWidth={1.65} aria-hidden="true" />
                  <span>{feature.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true" />
      </div>
    </section>
  );
}
