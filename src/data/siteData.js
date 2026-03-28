export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Barlow Condensed",
    body: "Inter",
    display: "Barlow Condensed",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "energetic",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Wagen Automotive Recovery",
    legalName: "Wagen Automotive Recovery Zimbabwe",
    tagline: "Rescue On The Way",
    description:
      "Harare's most trusted 24/7 automotive recovery and towing service. Flatbed trucks, accident recovery, roadside assistance. When you are stranded, Wagen is already moving.",
    phone: "+263 77 181 4229",
    phoneRaw: "+263771814229",
    whatsappNumber: "263771814229",
    email: "info@wagenrecovery.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 62,
    established: "2018",
    yearsExperience: "7+",
    projectsCompleted: "8,500+",
    employees: "30+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Emergency Line", time: "24 Hours / 7 Days" },
      { day: "Office Hours", time: "Mon-Fri 7:00 AM - 6:00 PM" },
      { day: "Saturday", time: "8:00 AM - 2:00 PM" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "wagen-recovery-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "WAGEN",
    logoLine2: "Recovery",
  },

  hero: {
    badge: "24/7 Emergency Recovery",
    titleParts: [
      { text: "Rescue " },
      { text: "On The Way.", highlight: true },
    ],
    subtitle:
      "Stranded on the highway. Engine dead at midnight. Accident on a rural road. It does not matter where you are or what time it is. Wagen is already on the way with flatbed trucks and trained recovery crews.",
    ctaPrimary: "Call For Rescue",
    ctaSecondary: "Our Services",
    trustBadge: "Average Response: 25 Minutes",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80", alt: "Tow truck on emergency recovery mission at night" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80", alt: "Vehicle breakdown on the road requiring emergency towing" },
    ],
  },

  stats: [
    { number: "8,500+", label: "Recoveries Completed" },
    { number: "24/7", label: "Emergency Response" },
    { number: "25", label: "Min Avg Response" },
    { number: "30+", label: "Recovery Vehicles" },
  ],

  servicesPreview: [
    {
      iconName: "Car",
      title: "Vehicle Recovery",
      desc: "Stuck in a ditch, bogged in mud, or stranded on the roadside. Our recovery crews extract vehicles from any situation with precision and zero additional damage.",
    },
    {
      iconName: "Truck",
      title: "Flatbed Towing",
      desc: "State-of-the-art flatbed trucks for safe, damage-free transport of sedans, SUVs, and luxury vehicles to your chosen destination or repair shop.",
    },
    {
      iconName: "Warning",
      title: "Accident Recovery",
      desc: "Rapid response to accident scenes. We coordinate with authorities, secure the area, and recover damaged vehicles with the care and urgency the situation demands.",
    },
    {
      iconName: "Lightning",
      title: "Jump Start Service",
      desc: "Dead battery at the worst possible moment. Our technicians arrive fast with professional-grade equipment to get your engine running again.",
    },
    {
      iconName: "Wrench",
      title: "Tire Change",
      desc: "Flat tire on the highway is not just an inconvenience, it is a safety hazard. We swap your tire roadside so you can get moving safely.",
    },
    {
      iconName: "GasPump",
      title: "Fuel Delivery",
      desc: "Ran out of fuel in the middle of nowhere. We deliver petrol and diesel directly to your location so you never have to walk to a station again.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      title: "Highway Accident Recovery",
      category: "Emergency Response",
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      title: "Multi-Vehicle Fleet Relocation",
      category: "Commercial Towing",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      title: "Off-Road Vehicle Extraction",
      category: "Recovery Operations",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "When Minutes " },
      { text: "Matter.", highlight: true },
      { text: " Call Wagen." },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    imageAlt: "Wagen recovery truck responding to an emergency call",
    experienceYears: "8,500+",
    experienceLabel: "Rescues Completed",
    points: [
      {
        title: "25-Minute Average Response",
        desc: "GPS-tracked fleet and strategic positioning across Harare means we reach you faster than any competitor. Every second counts when you are stranded.",
      },
      {
        title: "Modern Flatbed Fleet",
        desc: "No wheel-lift trucks that risk transmission damage. Our entire fleet is flatbed-equipped for safe, professional vehicle transport every single time.",
      },
      {
        title: "Trained Recovery Specialists",
        desc: "Our crews are not just drivers. They are certified recovery technicians trained in accident scene management, winching, and vehicle handling.",
      },
      {
        title: "Transparent, Fair Pricing",
        desc: "No price gouging at 2 AM. Our rates are fixed and published. You know exactly what you are paying before we lift a single wheel.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80",
    backgroundAlt: "Vehicle on a dark road needing emergency recovery services",
    titleParts: [
      { text: "Stranded? " },
      { text: "Call Now.", highlight: true },
    ],
    subtitle:
      "Do not wait for a friend with a rope. Do not risk further damage. One call to Wagen and a professional recovery truck is dispatched immediately. 24 hours. 7 days. 365 days.",
    ctaPrimary: "Emergency Call",
    whatsappText:
      "Hi Wagen! I need emergency vehicle recovery assistance. My location is:",
  },

  homeTestimonials: [
    {
      name: "Tinashe Moyo",
      role: "Fleet Manager",
      text: "Our delivery trucks break down at the worst times. Wagen has been our go-to for three years. They show up fast, handle the vehicles with care, and never overcharge. Absolute lifesavers.",
      rating: 5,
    },
    {
      name: "Grace Mudzengerere",
      role: "Business Owner",
      text: "My car died on the Harare-Mutare highway at 11 PM. Called Wagen and they were there in 30 minutes. Professional, respectful, and got me home safe. Cannot recommend enough.",
      rating: 5,
    },
    {
      name: "Farai Chipunza",
      role: "Insurance Claims Agent",
      text: "We refer all our clients to Wagen for accident recovery. Their documentation is thorough, their response is fast, and they treat every vehicle like it is their own. Top-tier service.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Built For " },
      { text: "Emergencies.", highlight: true },
      { text: " Driven By Purpose." },
    ],
    heroSubtitle:
      "Wagen was founded because Harare needed a recovery service that actually answered the phone at 2 AM. One that showed up fast, treated your vehicle with care, and charged you fairly.",
    storyImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    storyImageAlt: "Wagen Automotive Recovery fleet ready for dispatch",
    storyProjectCount: "8,500+",
    storyProjectLabel: "Vehicles Rescued",
    storyTitle: "From One Tow Truck to Harare's Largest Recovery Fleet.",
    storyParagraphs: [
      "Wagen Automotive Recovery started in 2018 with a single flatbed truck and a mobile phone. The founder had spent years watching stranded motorists wait hours for help that never came, or worse, paying extortionate rates to unlicensed operators who caused more damage than they fixed.",
      "We built Wagen on three promises: answer every call, arrive fast, and handle every vehicle as if it belonged to our own family. That simple approach resonated. Within two years we had grown to a fleet of 15 trucks and partnerships with major insurance companies.",
      "Today Wagen operates 30+ recovery vehicles across Harare and surrounding areas. We handle everything from midnight highway breakdowns to complex multi-vehicle accident recoveries. Our average response time is 25 minutes, and we maintain a 98% customer satisfaction rating.",
    ],
    mission:
      "To ensure no motorist in Zimbabwe is ever left stranded. We exist to provide fast, fair, and professional vehicle recovery that treats every customer with the urgency and respect they deserve.",
    vision:
      "To become Zimbabwe's national standard for automotive recovery and roadside assistance, setting benchmarks for response time, professionalism, and vehicle care across every province.",
    values: [
      {
        iconName: "Clock",
        title: "Speed",
        desc: "In recovery, time is everything. Our GPS-tracked fleet and strategic positioning ensure the fastest possible response to every call.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety",
        desc: "Every recovery operation follows strict safety protocols. We protect your vehicle, our crew, and every road user around us.",
      },
      {
        iconName: "Handshake",
        title: "Integrity",
        desc: "Published rates with no hidden charges. We quote before we lift. What we say is what you pay. Period.",
      },
      {
        iconName: "Heart",
        title: "Empathy",
        desc: "A breakdown is stressful. An accident is traumatic. We treat every caller with patience, respect, and genuine care.",
      },
    ],
    team: [
      {
        name: "David Musara",
        role: "Operations Director",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
      },
      {
        name: "Tatenda Ncube",
        role: "Lead Recovery Specialist",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
      },
    ],
    milestones: [
      { year: "2018", title: "Wagen Founded", desc: "Started with one flatbed truck and a vision to fix Harare's broken recovery industry." },
      { year: "2019", title: "Insurance Partnerships", desc: "Signed contracts with three major insurance providers for accident recovery referrals." },
      { year: "2020", title: "Fleet Expansion", desc: "Grew to 15 vehicles including heavy-duty recovery trucks for buses and commercial vehicles." },
      { year: "2022", title: "5,000 Recoveries", desc: "Crossed the 5,000 mark for completed vehicle recoveries across Zimbabwe." },
      { year: "2024", title: "30+ Vehicle Fleet", desc: "Largest private recovery fleet in Harare with 24/7 dispatch center and GPS tracking." },
    ],
    ctaTitle: "Stranded? We Are Already On The Way.",
    ctaSubtitle:
      "Save our number. Share it with everyone you know. Because the next time someone is stuck on the side of the road at midnight, Wagen is the call that gets them home.",
    ctaCta: "Save Our Number",
  },

  services: {
    heroTitle: [
      { text: "Every Recovery. " },
      { text: "Every", highlight: true },
      { text: " Situation." },
    ],
    heroSubtitle:
      "From a flat tire on Sam Nujoma Street to a multi-vehicle accident on the Harare-Masvingo highway. Wagen has the equipment, training, and fleet to handle any automotive emergency.",
    items: [
      {
        iconName: "Car",
        title: "Vehicle Recovery",
        slug: "vehicle-recovery",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
        desc: "Whether your vehicle is stuck in a ditch, bogged in mud after rains, or stranded with mechanical failure, our recovery crews arrive fast with the right equipment. We use professional winching systems and recovery straps to extract vehicles without causing additional damage.",
        features: [
          "Off-road and on-road vehicle extraction",
          "Professional winching with synthetic ropes",
          "Mud, sand, and ditch recovery",
          "Embankment and steep terrain recovery",
          "Zero-damage extraction guarantee",
          "GPS-tracked dispatch for fastest response",
        ],
      },
      {
        iconName: "Truck",
        title: "Flatbed Towing",
        slug: "flatbed-towing",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        desc: "Our flatbed trucks are the gold standard in vehicle transport. Unlike traditional tow trucks that drag vehicles, flatbeds carry them safely without any wheel contact. This protects transmissions, bumpers, and body panels during transport.",
        features: [
          "Full flatbed loading for damage-free transport",
          "Capacity for sedans, SUVs, and light trucks",
          "Hydraulic loading ramps for low-clearance vehicles",
          "Long-distance towing across Zimbabwe",
          "Luxury and classic car transport specialist",
          "Multi-vehicle transport available",
        ],
      },
      {
        iconName: "Warning",
        title: "Accident Recovery",
        slug: "accident-recovery",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
        desc: "Accident scenes require speed, sensitivity, and expertise. Our teams are trained in accident scene management, working alongside emergency services to safely recover damaged vehicles while preserving evidence for insurance claims.",
        features: [
          "Rapid response to accident scenes",
          "Coordination with police and emergency services",
          "Insurance-compliant documentation and photography",
          "Fluid spill containment and cleanup",
          "Heavy-damage vehicle recovery",
          "Storage facility for recovered vehicles",
        ],
      },
      {
        iconName: "Lightning",
        title: "Jump Start Service",
        slug: "jump-start",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        desc: "Dead batteries are the most common roadside emergency. Our technicians carry professional-grade jump start equipment that works on everything from compact cars to heavy diesel engines. Quick, safe, and gets you driving in minutes.",
        features: [
          "Professional-grade jump start equipment",
          "Works on petrol and diesel engines",
          "Battery health diagnostic check",
          "Replacement battery available if needed",
          "Safe procedure to protect vehicle electronics",
          "Available 24/7 across Harare",
        ],
      },
      {
        iconName: "Wrench",
        title: "Tire Change",
        slug: "tire-change",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
        desc: "A flat tire on a busy highway is not just inconvenient, it is dangerous. Our roadside assistance team arrives quickly to swap your flat for the spare, or if your spare is not viable, we tow you to the nearest tire shop.",
        features: [
          "Roadside tire swaps with your spare",
          "Professional hydraulic jacks for safe lifting",
          "Lug nut and wheel lock removal",
          "Tire pressure check and inflation",
          "Tow to tire shop if spare not available",
          "Highway safety cones and reflective gear",
        ],
      },
      {
        iconName: "GasPump",
        title: "Fuel Delivery",
        slug: "fuel-delivery",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        desc: "Running out of fuel happens to everyone. Instead of walking to the nearest station or risking a ride with strangers, call Wagen. We deliver petrol or diesel directly to your vehicle so you can get back on the road immediately.",
        features: [
          "Petrol and diesel delivery to your location",
          "Minimum 10-litre delivery",
          "Safe fuel transfer with proper equipment",
          "Available across Harare and surrounding areas",
          "24/7 delivery for emergency situations",
          "Competitive fuel pricing with no markup gouging",
        ],
      },
    ],
  },

  contact: {
    heroTitle: [
      { text: "Need " },
      { text: "Help?", highlight: true },
      { text: " Call Now." },
    ],
    heroSubtitle:
      "For emergencies, call us directly. Our dispatch team is available 24/7. For general inquiries, use the form below and we will respond within the hour.",
    formTitle: "Get In Touch",
    formSubtitle:
      "Whether it is an emergency or a general inquiry, reach out and our team will respond promptly.",
  },

  footer: {
    tagline:
      "Harare's most trusted 24/7 automotive recovery service. When you are stranded, Wagen is already on the way.",
    copyrightName: "Wagen Automotive Recovery",
  },
};

export default siteData;
