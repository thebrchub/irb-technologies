export const siteContent = {
  about: {
    badge: "About IRB Technology",
    
    headingMain: "Elite Cybersecurity & ",
    headingBr: true,
    headingHighlight: "Digital Resilience",
    
    descriptionMobile: "In an era of fast-moving digital threats, we provide the elite resilience required to secure your growing business.",
    descriptionDesktop: "Traditional defenses are obsolete. We engineer adaptive resilience to let you scale your enterprise fearlessly.",
    descriptionPart1Desktop: "adaptive resilience",
    
   mission: {
      title: "Our Mission",
      // 🔥 FIXED: Drastically shortened to fit perfectly on 1-2 lines maximum
      descriptionMobile: "Delivering scalable cybersecurity and rapid resilience training for entities of every size.",
      descriptionDesktop: "Delivering scalable cybersecurity and rapid resilience training for entities of every size.",
    },
    vision: {
      title: "Our Vision",
      // 🔥 FIXED: Drastically shortened for impact
      descriptionMobile: "Setting the global benchmark for adaptive security, ensuring every digital interaction remains inherently safe.",
      descriptionDesktop: "Setting the global benchmark for adaptive security, ensuring every digital interaction remains inherently safe.",
    },
    
    whatWeDo: {
      title: "What We Do",
      descriptionMobile: "Strategic security consulting and high-precision VAPT to harden your defenses against real-world attack vectors.",
      descriptionDesktop: "We partner with organizations for strategic digital security consulting, identifying critical vulnerabilities through high-precision VAPT (Vulnerability Assessment and Penetration Testing). Our approach goes beyond automated scans; we simulate real-world attack vectors to harden your defenses.",
      vaptAcronym: "VAPT",
    },
    
    culture: {
      title: "A Culture of Safety",
      descriptionMobile: "Engineering next-gen cybersecurity tools with a \"Security-First\" philosophy to build your internal resilience.",
      descriptionDesktop: "While we protect our clients today, we are engineering the next generation of cybersecurity tools. Our \"Security-First\" philosophy ensures that we don't just find problems; we help you build resilience from the inside out.",
      philosophy: "Security-First",
    },
  },

  caseStudies: {
    badge: "Versatility in Action",
    headingMain: "Proven security across ",
    headingBr: true,
    headingHighlight: "every scale.",
    description: "Engineering adaptive resilience for every stage of growth, from agile startups to global enterprises.",
    cases: [
      {
        id: "01",
        title: "The Mega-Event",
        description: "Securing a high-traffic public gathering against real-time threats.",
        tag: "Enterprise Scale",
        link: "/case-study/mega-event",
      },
      {
        id: "02",
        title: "The SME Shield",
        description: "How we helped a local IT firm identify critical vulnerabilities in their client-facing portal within 24 hours.",
        tag: "Rapid Response",
        link: "/case-study/sme-shield",
      },
      {
        id: "03",
        title: "Compliance for Startups",
        description: "A roadmap for a small business to achieve regulatory compliance without a massive overhead.",
        tag: "Strategic Advisory",
        link: "/case-study/startup-compliance",
      },
    ],
    readFullCaseLabel: "Read Full Case",
  },

  services: {
    badge: "Core Offerings",
    headingMain: "Elite Cyber Defense, ",
    headingBr: true,
    headingHighlight: "no matter the stage.",
    descriptionPart1: "From specialized Rapid VAPT for mega-events to agile security audits for growing businesses.",
    descriptionPart2: "We ensure you are DPDP ready and inherently secure.",
    descriptionPart2Mobile: false,
    cards: [
      {
        title: "Health Check Express",
        titleMobile: "Health Check", // 🔥 Shorter for mobile
        description: "A fixed-price, 24-hour turnaround audit. Comprehensive VAPT for websites, APIs, and internal networks to fix loopholes instantly.",
      },
      {
        title: "Rapid Event VAPT",
        titleMobile: "Event VAPT", // 🔥 Shorter for mobile
        description: "Accelerated, high-concurrency security audits designed specifically to protect live mega-event environments from real-time threats.",
      },
      {
        title: "Compliance as a Service",
        titleMobile: "Compliance", // 🔥 Shorter for mobile
        description: "Helping businesses of all sizes navigate the DPDP Act, ISO 27001, and SOC2. We simplify the complex world of data privacy laws.",
      },
      {
        title: "Network Consultation",
        titleMobile: "Networks", // 🔥 Shorter for mobile
        description: "Designing secure, segmented networks. We help SMBs secure remote-work setups and mega-events secure onsite infrastructure.",
      },
      {
        title: "Resilience Training",
        titleMobile: "Training", // 🔥 Shorter for mobile
        description: "Custom Cyber Awareness and Incident Response [IR] training programs tailored for corporate teams of 5 to 5,000 members.",
      },
      {
        title: "IR Playbooks",
        titleMobile: "Playbooks", // 🔥 Shorter for mobile
        description: "Custom 'What-to-do-if' actionable guides for your teams to handle hardware failures, data breaches, or DDoS attacks instantly.",
      },
    ],
  },

  hero: {
    headingMain: "Cybersecurity Tailored ",
    headingHighlight: "to Your Business",
    descriptionPart1: "From high-concurrency ",
    descriptionHighlight1: "Mega-Events ",
    descriptionPart2: "to agile ",
    descriptionHighlight2: "DPDP-ready ",
    descriptionPart3: "audits for growing SMEs. We safeguard your digital assets at any scale",
    mobileCard1Label: "Enterprise Scale",
    mobileCard2Label: "SME Protection",
    desktopCard1Title: "Enterprise & Events",
    // 🔥 FIXED: Ultra-short description to guarantee a single line
    desktopCard1Description: "High-concurrency protection at scale",
    desktopCard2Title: "On-Demand Security",
    // 🔥 FIXED: Ultra-short description to guarantee a single line
    desktopCard2Description: "Fast, affordable VAPT for startups",
    ctaButtonLabel: "Schedule an Audit",
    secondaryButtonLabel: "View Services",
    secondaryButtonLink: "#services",
  },

  features: {
    headingPart1: "The ",
    headingHighlight: "IRB Tech",
    headingPart2: " Architecture",
    description: "Redefining corporate infrastructure with zero-latency resilience.",
    card1: {
      title: "Global Threat ",
      titleBr: true,
      titleHighlight: "Neural Network",
      description: "Leveraging high-fidelity sensors across 140+ countries to orchestrate instant operational pivots.",
      statusLabel: "Active Mesh Network",
    },
    card2: {
      title: "Ultra-Low Latency",
      description: "Proprietary routing algorithms ensuring <10ms response times for global data synchronization.",
      statusLabel: "< 10ms Response Time", 
    },
   card3: {
      title: "Compliance-Native Framework", 
      description: "Real-time compliance monitoring tailored for ISO, GDPR, and localized sovereign standards.",
      statusLabel: "Verified System",
    },
  },

  megaEvent: {
    backLinkText: "Back to Case Studies",
    badge: "Enterprise Scale",
    headingMain: "Securing The ",
    headingHighlight: "Mega-Event.",
    description: "How we protected a high-traffic public gathering against real-time, coordinated cyber threats without a single second of downtime.",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2000",
    imageAlt: "Massive crowd at a stadium event",
    scaleLabel: "Scale",
    scaleValue: "2.5M+",
    threatLabel: "Threat Level",
    threatValue: "Extreme",
    uptimeLabel: "Uptime",
    uptimeValue: "100%",
    challenge: {
      title: "The Challenge",
      description: "A massive international event was expecting millions of concurrent digital interactions. The attack surface was enormous, and threat intelligence indicated planned DDoS and intrusion attempts targeting the core ticketing and broadcast APIs.",
    },
    approach: {
      title: "Our Approach",
      description: "We deployed an agile Rapid Event VAPT protocol exactly 48 hours before the massive influx of traffic.",
      rapidEventVAPT: "Rapid Event VAPT",
      items: [
        {
          label: "Infrastructure",
          description: "Segmented the critical network nodes and established a strict Zero-Trust perimeter around payment gateways.",
        },
        {
          label: "Execution",
          description: "Set up a 24/7 live-monitoring War Room to intercept, analyze, and neutralize volumetric attacks in real-time.",
        },
      ],
    },
    result: {
      title: "The Result",
      description: "100% uptime maintained. We successfully deflected 4 major volumetric DDoS attempts and patched 3 critical zero-day API vulnerabilities on the fly, securing the digital experience for over 2.5 million users without them ever noticing.",
    },
  },

  startupCompliance: {
    backLinkText: "Back to Case Studies",
    badge: "Strategic Advisory",
    headingMain: "Compliance for ",
    headingHighlight: "Startups.",
    description: "Providing a clear roadmap for a promising tech startup to achieve DPDP and SOC2 compliance without drowning in administrative overhead.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    imageAlt: "Data Strategy and Compliance",
    timelineLabel: "Timeline",
    timelineValue: "4 Weeks",
    frameworksLabel: "Frameworks",
    frameworksValue: "DPDP & SOC2",
    pipelineLabel: "Pipeline Unblocked",
    pipelineValue: "$2M+",
    challenge: {
      title: "The Challenge",
      description: "A Series A startup was closing enterprise deals but kept hitting a brick wall during vendor security questionnaires. They needed to navigate the complex landscape of the new DPDP Act and prepare for SOC2, but lacked a dedicated, full-time compliance team.",
    },
    approach: {
      title: "Our Approach",
      description: "We stepped in as their integrated Compliance-as-a-Service partner, eliminating the need to hire a massive internal team.",
      complianceService: "Compliance-as-a-Service",
      items: [
        {
          label: "Gap Analysis",
          description: "Conducted a rigorous baseline assessment to map out exactly where their current infrastructure fell short of DPDP standards.",
        },
        {
          label: "Remediation",
          description: "Streamlined data storage practices, encrypted at-rest databases, and authored custom security policies tailored to their agile workflows.",
        },
      ],
    },
    result: {
      title: "The Result",
      description: "The startup achieved full DPDP readiness within 4 weeks. By streamlining their processes, they passed their SOC2 Type I audit seamlessly 3 months later, instantly unblocking over $2M in pending enterprise pipeline revenue.",
    },
  },

  smeShield: {
    backLinkText: "Back to Case Studies",
    badge: "Rapid Response",
    headingMain: "The SME ",
    headingHighlight: "Shield.",
    description: "A 24-hour turnaround audit that saved a local IT firm's client-facing portal from a critical data exposure vulnerability.",
    
    // 🔥 FIXED: Swapped for a premium, abstract 3D digital security visual
    imageUrl: "/sme.jpg",
    imageAlt: "Abstract glowing digital security lock and network nodes",
    
    turnaroundLabel: "Turnaround",
    turnaroundValue: "< 24 Hrs",
    threatLabel: "Threat Level",
    threatValue: "Critical",
    downtimeLabel: "Downtime",
    downtimeValue: "Zero",
    challenge: {
      title: "The Challenge",
      description: "A rapidly growing IT services firm noticed anomalous behavior on their primary client portal. With sensitive customer data at risk and a major product launch in exactly 48 hours, they lacked internal visibility and needed immediate, expert intervention.",
    },
    approach: {
      title: "Our Approach",
      description: "We instantly initiated our Health Check Express protocol. Our response team was active within 60 minutes.",
      healthCheckExpress: "Health Check Express",
      items: [
        {
          timeRange: "Hour 1-4",
          description: "Mapped the application architecture and isolated the anomalous endpoints.",
        },
        {
          timeRange: "Hour 4-12",
          description: "Executed deep penetration tests on exposed APIs, identifying a critical zero-day SQL injection flaw.",
        },
      ],
    },
    result: {
      title: "The Result",
      description: "We provided an emergency hotfix playbook by hour 18. The vulnerability was successfully patched by their dev team under our supervision. The product launch went ahead seamlessly, completely avoiding a potentially catastrophic breach and severe reputation damage.",
    },
  },

  privacyPolicy: {
    backLinkText: "Back to Home",
    badges: [
      { label: "AES-256 Encrypted", icon: "lock" },
      { label: "DPDP Compliant", icon: "shield" },
      { label: "IRB-PP-2026-V3", icon: "version" },
    ],
    heading: "Privacy Policy",
    description: "Strategic security data protocols for IRB Technology clients. This document outlines how we collect, handle, and protect your data during and after security engagements.",
    lastUpdated: "Last Updated: March 15, 2026",
    sections: [
      {
        number: "01",
        title: "Commitment to Confidentiality",
        description: "At IRB Technology, we recognize that the data we handle is the lifeblood of your enterprise. Our engagement protocols are designed to ensure that no piece of information — whether system architecture, source code, or internal network maps — is ever exposed beyond the necessary authorized personnel.",
        items: ["Zero-knowledge handling", "Need-to-know access", "Signed NDAs always"],
      },
      {
        number: "02",
        title: "Scope of Data Processing",
        description: "We process only what is strictly necessary to deliver our security services. Data is categorized and handled according to its sensitivity level.",
        cards: [
          {
            title: "Administrative Data",
            description: "Contact details, billing info, and corporate identity used strictly for contract management and project updates.",
          },
          {
            title: "Technical Intelligence",
            description: "Vulnerability metadata, system response headers, and audit logs captured during authorized penetration testing.",
          },
        ],
      },
      {
        number: "03",
        title: "Data Residency & Encryption",
        description: "All technical reports and vulnerability data are stored in highly secured, encrypted environments within Indian jurisdictions. We utilize AES-256 bit encryption for all data at rest and TLS 1.3 for all data in transit.",
        tags: ["AES-256 at rest", "TLS 1.3 in transit", "Indian jurisdiction", "Zero third-party sharing"],
      },
    ],
    cta: {
      label: "Privacy Officer Contact",
      heading: "Questions regarding privacy?",
      description: "Our Data Privacy Officer is available to discuss our encryption standards and testing protocols.",
      buttonText: "Contact DPO",
      buttonEmail: "irbtechnology25@gmail.com",
    },
  },

  termsOfService: {
    backLinkText: "Back to Home",
    badges: [
      { label: "Verified Service", icon: "shield" },
      { label: "Legally Binding", icon: "file" },
      { label: "IRB-TOS-2026-V1", icon: "version" },
    ],
    heading: "Terms of Service",
    description: "Operational framework and service agreement for IRB Technology. By using our services, you agree to the terms outlined in this document.",
    lastUpdated: "Last Updated: March 15, 2026",
    sections: [
      {
        number: "01",
        title: "Engagement Terms",
        description: "By requesting an audit or using our security services, you enter into a binding agreement with IRB Technology. These terms govern the scope of our security assessments, reporting, and consulting engagements.",
        items: ["Written SOW required", "Scope-bound testing", "Report within SLA"],
      },
      {
        number: "02",
        title: "Authorization & Liability",
        description: "Client warrants that they have full authority to authorize penetration testing on the target assets. IRB Technology is not liable for incidental system downtime that may occur during aggressive security auditing, though we utilize industry-standard safety protocols to minimize risk.",
        warning: {
          title: "Important:",
          description: "Unauthorized testing without written client consent constitutes a legal violation. All engagements require a signed Statement of Work before commencement.",
        },
      },
      {
        number: "03",
        title: "Governing Law",
        description: "These terms are governed by the laws of India. Any disputes arising from our services shall be subject to the exclusive jurisdiction of the courts in Nashik, Maharashtra.",
        tags: ["Indian Law", "Nashik Jurisdiction", "Maharashtra Courts", "DPDP Act 2023"],
      },
    ],
    cta: {
      label: "Agreement Status: Binding on Use",
      heading: "Have questions before signing?",
      description: "Our legal team is available to clarify any clause before you engage with our services.",
      privacyButtonText: "Privacy Policy",
      legalButtonText: "Contact Legal Team",
      legalButtonEmail: "irbtechnology25@gmail.com",
    },
  },

  notFound: {
    errorCode: "404",
    heading: "Secure Channel Not Found",
    description: "The digital asset you are looking for has been moved, deleted, or never existed in our infrastructure.",
    buttonText: "Return to Base",
  },

  contactModal: {
    serviceOptions: [
      "Network Discovery & Mapping",
      "Penetration Testing",
      "Cloud Security Architecture",
      "Endpoint Protection",
      "Other / General Inquiry"
    ],
    sidebar: {
      heading: "Secure your enterprise today.",
      description: "Speak with our security architects to identify vulnerabilities and build a zero-trust infrastructure tailored to your corporate needs.",
      features: [
        {
          title: "Rapid Response",
          description: "Guaranteed callback within 2 hours.",
        },
        {
          title: "Confidentiality",
          description: "All inquiries are under strict NDA.",
        },
      ],
    },
    form: {
      heading: "Request an Audit",
      subheading: "Fill out the details below to route you to the right specialist.",
      fields: {
        nameLabel: "Full Name",
        namePlaceholder: "John Doe",
        emailLabel: "Corporate Email",
        emailPlaceholder: "john@company.com",
        companyLabel: "Company Name",
        companyPlaceholder: "IRB TECHNOLOGY PVT LTD",
        serviceLabel: "Primary Interest",
        messageLabel: "Project Details",
        messagePlaceholder: "Tell us about your infrastructure goals...",
      },
      submitButtonText: "Submit Request",
      processingText: "Processing...",
      agreementText: "By submitting, you agree to our",
      privacyLinkText: "Privacy Policy",
    },
    successScreen: {
      heading: "Request Received",
      description: "Thank you. An IRB Technology security architect will be in touch with you shortly via your corporate email.",
      buttonText: "Close Window",
    },
  },
};
