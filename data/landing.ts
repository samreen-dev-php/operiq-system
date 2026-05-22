import {
  BrainCircuit,
  CloudCheck,
  GitFork,
  Network,
  ShieldCheck,
  Target,
  TrendingUp
} from "lucide-react";

const brandLogo = {
  mark: "O",
  name: "OPERIQ",
  suffix: "SYSTEMS"
} as const;

export const landingPage = {
  logo: brandLogo,
  navigation: [
    { label: "Platform", href: "#platform" },
    { label: "Products", href: "#products", hasMenu: true },
    { label: "Solutions", href: "#solutions", hasMenu: true },
    { label: "Resources", href: "#resources", hasMenu: true },
    { label: "Company", href: "#company", hasMenu: true }
  ],
  headerCta: {
    label: "Request a Demo",
    href: "#demo"
  },
  hero: {
    eyebrow: "AI PUBLIC SECTOR WORKFLOW INFRASTRUCTURE",
    title: "Intelligent Workflows.",
    highlightedTitle: "Stronger Missions.",
    description:
      "Operiq Systems delivers AI-powered workflow infrastructure that helps government contractors and agencies work smarter, move faster, and achieve mission-critical outcomes.",
    primaryAction: {
      label: "Explore Our Platform",
      href: "#platform"
    },
    secondaryAction: {
      label: "View Products",
      href: "#products"
    },
    features: [
      { label: "Secure by Design", icon: ShieldCheck },
      { label: "AI-Powered Intelligence", icon: BrainCircuit },
      { label: "Connected Ecosystem", icon: GitFork },
      { label: "Mission Focused", icon: Target }
    ]
  },
  trustBar: {
    title: "TRUSTED BY CONTRACTORS AND AGENCIES ACROSS THE PUBLIC SECTOR",
    logos: [
      { label: "GSA", variant: "badge" },
      { label: "NAVFAC", caption: "Naval Facilities Engineering Systems Command", variant: "wordmark" },
      { label: "USACE", variant: "emblem" },
      { label: "NAVAIR", variant: "wordmark" },
      { label: "NASA", variant: "orbit" }
    ],
    moreLabel: "...and more"
  },
  productSuite: {
    eyebrow: "THE OPERIQ SYSTEMS PRODUCT SUITE",
    title: "One Platform. Every Mission.",
    products: [
      {
        name: "OPERIQ BID",
        description: "Bid Discovery & Pursuit Intelligence",
        color: "#0070f3"
      },
      {
        name: "OPERIQ CAPTURE",
        description: "Capture & Proposal Management",
        color: "#a855f7"
      },
      {
        name: "OPERIQ VAULT",
        description: "Compliance & Document Readiness",
        color: "#06b6d4"
      },
      {
        name: "OPERIQ CONNECT",
        description: "Contractor Network & Teaming",
        color: "#f97316"
      },
      {
        name: "OPERIQ INTEL",
        description: "Procurement Intelligence",
        color: "#2563eb"
      }
    ],
    action: {
      label: "View All Products",
      href: "#products"
    }
  },
  valuePillars: {
    eyebrow: "BUILT FOR THE PUBLIC SECTOR",
    title: "AI-Powered. Secure. Built to Perform.",
    pillars: [
      {
        title: "Enterprise-Grade Security",
        description:
          "FedRAMP-ready architecture with end-to-end encryption, granular access controls, and continuous monitoring.",
        icon: CloudCheck
      },
      {
        title: "AI That Works for You",
        description:
          "Purpose-built AI models that turn complex data into clear insights and faster decisions.",
        icon: BrainCircuit
      },
      {
        title: "Unified Workflows",
        description:
          "Integrated tools that connect people, processes, and data across the entire contracting lifecycle.",
        icon: Network
      },
      {
        title: "Outcomes That Matter",
        description:
          "Drive efficiency, increase win rates, and deliver measurable mission impact.",
        icon: TrendingUp
      }
    ]
  },
  finalCta: {
    title: "Ready to Transform the Way You Work?",
    description: "See how Operiq Systems can help you accelerate workflows and achieve mission success.",
    action: {
      label: "Request a Demo",
      href: "#demo"
    }
  },
  footer: {
    brand: {
      logo: brandLogo,
      description:
        "AI-powered workflow infrastructure for public-sector teams that build, protect, and serve communities."
    },
    columns: [
      {
        title: "PLATFORM",
        links: ["Overview", "Security", "Integrations", "AI & Data"]
      },
      {
        title: "PRODUCTS",
        links: ["Operiq BID", "Operiq CAPTURE", "Operiq VAULT", "Operiq CONNECT", "Operiq INTEL"]
      },
      {
        title: "COMPANY",
        links: ["About Us", "Careers", "Partners", "Contact"]
      },
      {
        title: "RESOURCES",
        links: ["Blog", "Case Studies", "Webinars", "Help Center"]
      }
    ],
    connected: {
      title: "STAY CONNECTED",
      description: "Insights, updates, and best practices for public sector innovators.",
      placeholder: "Enter your email",
      socials: [
        { label: "LinkedIn", mark: "in" },
        { label: "YouTube", mark: "▶" },
        { label: "X", mark: "X" }
      ]
    },
    legal: {
      copyright: "© 2026 Operiq Systems, Inc. All rights reserved.",
      links: ["Privacy Policy", "Terms of Use", "Trust Center"]
    }
  }
} as const;
