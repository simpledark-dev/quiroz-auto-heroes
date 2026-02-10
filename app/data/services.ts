export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
  content: {
    intro: string[];
    servicesTitle: string;
    servicesList: { name: string; description: string; image: string }[];
    maintenance: { title: string; paragraphs: string[] };
    whyChoose: string[];
  };
}

export const services: ServiceData[] = [
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning & Heating',
    shortTitle: 'Air Conditioning',
    tagline: 'A/C not cooling?',
    description:
      "Stay comfortable year-round with our complete climate control services. Whether your A/C isn't cooling or your heater isn't warming, we'll diagnose the issue and get you back to comfortable driving.",
    details: [
      'A/C system inspection and recharge',
      'Compressor repair and replacement',
      'Heater core service',
      'Blower motor repair',
      'Climate control diagnostics',
      'Refrigerant leak detection and repair',
    ],
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&q=80',
    content: {
      intro: [
        "As the summer warmth intensifies across Illinois, the importance of an efficient car air conditioning system becomes paramount. Quiroz Auto Heroes, located in Villa Park, is dedicated to ensuring that your vehicle's air conditioning system performs at its peak, offering you relief from the external heat. Our commitment to quality service and customer satisfaction has solidified our position as a trusted name in the region.",
        "At Quiroz Auto Heroes, we are renowned for our meticulous diagnostic procedures. Our team of skilled technicians utilizes cutting-edge tools to accurately identify any issues with your air conditioning system. From tracing minor refrigerant leaks to detecting complex malfunctions, our comprehensive approach ensures that problems are pinpointed and resolved at their root.",
      ],
      servicesTitle: 'Car A/C Repair Solutions',
      servicesList: [
        { name: 'Refrigerant Refilling', description: 'Maintaining optimal refrigerant levels for consistent cooling.', image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80' },
        { name: 'Compressor Services', description: 'Addressing issues with compressors, the heart of the cooling system.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
        { name: 'Condenser Evaluations', description: 'Ensuring the condenser, a vital component, functions impeccably.', image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&q=80' },
        { name: 'Filter Replacement', description: 'Swapping out clogged filters to maintain superior airflow and cooling.', image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80' },
        { name: 'System Purging', description: 'Clearing out any accumulated contaminants that can hinder performance.', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=400&q=80' },
        { name: 'Heater Core Service', description: 'Repair and replacement of heater cores to restore cabin heating performance.', image: '' },
      ],
      maintenance: {
        title: 'Proactive A/C Maintenance',
        paragraphs: [
          "At Quiroz Auto Heroes, we emphasize the significance of preventive maintenance. A well-maintained air conditioning system not only functions efficiently but also reduces the chances of unforeseen breakdowns.",
          "By partnering with us for regular check-ups, you're investing in the longevity and consistent performance of your vehicle's cooling system.",
        ],
      },
      whyChoose: [
        "Residents of Villa Park and DuPage County recognize the value of Quiroz Auto Heroes' services. Our dedication to transparency, combined with our emphasis on customer education, distinguishes us from the rest. Every interaction is an opportunity for us to showcase our expertise and our genuine care for your vehicle's well-being.",
        'With our team\'s ongoing training and the latest technological tools at our disposal, we guarantee top-notch service with every visit.',
      ],
    },
  },
  {
    slug: 'brake-repair',
    title: 'Brake Service & Repair',
    shortTitle: 'Brake Repair',
    tagline: 'Brakes squeaking?',
    description:
      'Your safety depends on properly functioning brakes. Villa Park drivers trust us to provide comprehensive brake services that ensure your vehicle stops reliably every time. From routine pad replacements to complete brake system overhauls, we have you covered.',
    details: [
      'Brake pad and shoe replacement',
      'Rotor and drum resurfacing or replacement',
      'Brake fluid flush and replacement',
      'Brake line inspection and repair',
      'ABS system diagnostics and repair',
      'Emergency brake adjustment',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    content: {
      intro: [
        "Your vehicle's brakes are paramount to your safety on the road. Every time you press that pedal, you're entrusting your life to the efficiency of your brake system. At Quiroz Auto Heroes, we take this responsibility seriously. Located in Villa Park, IL, we're your go-to destination for top-notch brake repair and maintenance.",
        "Brakes aren't just about the pedal and the squeal. At our Villa Park facility, we delve deep into the intricacies of the brake system. From brake pads and rotors to brake fluid and calipers, each component plays a pivotal role in ensuring a responsive stopping mechanism. Over time, wear and tear take a toll, and that's where our expertise shines, restoring your brake system to its prime.",
      ],
      servicesTitle: 'Our Brake Service Offerings',
      servicesList: [
        { name: 'Inspections', description: 'Regular checks to identify wear and tear, fluid leaks, and other potential issues.', image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=400&q=80' },
        { name: 'Brake Pad Replacement', description: 'Swapping out worn-out pads for high-quality, durable alternatives.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
        { name: 'Rotor Resurfacing', description: 'Rectifying any warping or damage to ensure smooth brake operation.', image: 'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=400&q=80' },
        { name: 'Fluid Change', description: 'Refreshing brake fluid to maintain optimal braking performance.', image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80' },
        { name: 'Caliper Repair', description: 'Ensuring the critical clamping component of your brake system is functioning perfectly.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
        { name: 'ABS Diagnostics', description: 'Advanced anti-lock braking system testing and repair for safe stopping.', image: '' },
      ],
      maintenance: {
        title: 'Preventive Brake Maintenance',
        paragraphs: [
          "At our Villa Park center, we understand that brake issues can develop gradually. Regular maintenance helps catch problems early, before they become safety concerns. Our technicians perform thorough inspections to ensure every component of your braking system is in top condition.",
          "By scheduling routine brake check-ups with Quiroz Auto Heroes, you're investing in your safety and avoiding costly emergency repairs down the road.",
        ],
      },
      whyChoose: [
        "Choosing Quiroz Auto Heroes for your brake service needs means opting for excellence. Whether you're in Villa Park or the greater DuPage County area, you can trust our team's expertise, our state-of-the-art equipment, and our commitment to customer satisfaction.",
        "We stand behind every brake job we perform with our comprehensive warranty. Your safety is our top priority.",
      ],
    },
  },
  {
    slug: 'engine-repair',
    title: 'Engine Repair & Diagnostics',
    shortTitle: 'Engine Services',
    tagline: 'Engine trouble?',
    description:
      'Your engine is the heart of your vehicle, and we treat it with the care it deserves. At our Villa Park shop, our ASE-certified technicians use state-of-the-art diagnostic equipment to accurately identify issues, from minor tune-ups to major overhauls.',
    details: [
      'Complete engine diagnostics and troubleshooting',
      'Check engine light diagnosis',
      'Engine rebuilds and replacements',
      'Timing belt and chain service',
      'Fuel system repair and cleaning',
      'Cooling system service',
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    content: {
      intro: [
        "Your engine is the heart of your vehicle, and at Quiroz Auto Heroes in Villa Park, we treat it with the utmost care and precision. Our ASE-certified technicians leverage state-of-the-art diagnostic equipment to accurately identify engine issues, ensuring every problem is addressed at its source.",
        "From minor tune-ups to major overhauls, our team has the expertise and equipment to handle it all. We understand that engine problems can be stressful, which is why we focus on transparent communication and efficient service to get you back on the road quickly.",
      ],
      servicesTitle: 'Comprehensive Engine Services',
      servicesList: [
        { name: 'Engine Diagnostics', description: 'Using advanced computer diagnostics to accurately identify engine issues.', image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=400&q=80' },
        { name: 'Check Engine Light', description: 'Expert diagnosis and resolution of check engine light warnings.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80' },
        { name: 'Engine Rebuilds', description: 'Complete engine rebuilds and replacements when major repair is needed.', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80' },
        { name: 'Timing Service', description: 'Timing belt and chain inspection, repair, and replacement.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
        { name: 'Fuel System', description: 'Fuel injection cleaning, fuel pump repair, and fuel filter replacement.', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=400&q=80' },
        { name: 'Cooling System', description: 'Radiator, thermostat, and coolant service to prevent engine overheating.', image: '' },
      ],
      maintenance: {
        title: 'Proactive Engine Maintenance',
        paragraphs: [
          "Regular engine maintenance is the key to avoiding costly repairs and extending the life of your vehicle. At Quiroz Auto Heroes, we recommend routine check-ups that include oil changes, fluid inspections, and performance evaluations.",
          "Our preventive maintenance programs are designed to catch small issues before they become major problems, saving you time and money while keeping your engine running smoothly.",
        ],
      },
      whyChoose: [
        "At Quiroz Auto Heroes, our engine service expertise is backed by years of experience and ongoing training. Villa Park and DuPage County drivers trust us because we combine technical excellence with honest, transparent service.",
        "Every engine repair comes with our comprehensive warranty, giving you peace of mind that your vehicle is in the best hands.",
      ],
    },
  },
  {
    slug: 'battery-replacement',
    title: 'Battery & Electrical Systems',
    shortTitle: 'Battery & Electrical',
    tagline: "Car won't start?",
    description:
      'Modern vehicles rely heavily on complex electrical systems. Our technicians are trained to diagnose and repair all electrical issues, from simple battery replacements to intricate wiring problems.',
    details: [
      'Battery testing and replacement',
      'Alternator and starter repair',
      'Electrical system diagnostics',
      'Wiring repair and replacement',
      'Lighting system service',
      'Power window and lock repair',
    ],
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80',
    content: {
      intro: [
        "A reliable battery and electrical system are essential for your vehicle's performance. At Quiroz Auto Heroes in Villa Park, we specialize in diagnosing and resolving all types of electrical issues, from a simple dead battery to complex wiring problems.",
        "Modern vehicles are equipped with sophisticated electrical systems that power everything from your engine's ignition to your entertainment system. Our technicians stay current with the latest automotive electrical technology to provide accurate diagnostics and lasting repairs.",
      ],
      servicesTitle: 'Battery & Electrical Services',
      servicesList: [
        { name: 'Battery Testing', description: 'Comprehensive battery load testing and replacement with quality brands.', image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&q=80' },
        { name: 'Alternator Service', description: 'Diagnosis and repair of alternator issues to keep your battery charged.', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80' },
        { name: 'Starter Repair', description: 'Expert starter motor diagnosis, repair, and replacement.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
        { name: 'Electrical Diagnostics', description: 'Advanced troubleshooting of electrical system malfunctions.', image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=400&q=80' },
        { name: 'Wiring Repair', description: 'Tracing and repairing damaged or corroded wiring throughout the vehicle.', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=400&q=80' },
        { name: 'Lighting Systems', description: 'Headlight, taillight, and interior lighting diagnosis and repair.', image: '' },
      ],
      maintenance: {
        title: 'Emergency Battery Assistance',
        paragraphs: [
          "At Quiroz Auto Heroes, we understand that battery issues can strike unexpectedly. That's why we're always ready to assist, whether it's jump-starting your vehicle or providing a swift battery replacement. Our team is trained to handle emergencies efficiently, ensuring you're back on the road in no time.",
          "We recommend regular battery testing, especially before extreme weather seasons, to avoid unexpected breakdowns. Our quick diagnostic tests can tell you the health of your battery in minutes.",
        ],
      },
      whyChoose: [
        "Choosing Quiroz Auto Heroes for your battery and electrical service needs means opting for excellence. Whether you're in Villa Park or anywhere in DuPage County, you can trust our team's expertise, our quality parts, and our commitment to getting you back on the road quickly.",
        "We stock a wide selection of batteries for all makes and models, ensuring same-day replacement in most cases.",
      ],
    },
  },
  {
    slug: 'computer-diagnostics',
    title: 'Computer Diagnostics',
    shortTitle: 'Computer Diagnostics',
    tagline: 'Warning lights on?',
    description:
      "Today's vehicles are controlled by sophisticated computer systems. Our advanced diagnostic equipment reads and interprets your vehicle's computer codes to pinpoint issues accurately and efficiently.",
    details: [
      'OBD-II code reading and interpretation',
      'Check engine light diagnostics',
      'Emissions system diagnostics',
      'Performance monitoring and analysis',
      'Sensor testing and calibration',
      'Module programming and updates',
    ],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    content: {
      intro: [
        "In the era of advanced automotive technology, computer diagnostics have become an essential part of vehicle maintenance and repair. At Quiroz Auto Heroes in Villa Park, we utilize state-of-the-art diagnostic equipment to interface with your vehicle's onboard computer systems, providing accurate and efficient troubleshooting.",
        "Our technicians are trained to interpret complex diagnostic codes and translate them into actionable repair plans. Whether it's a persistent check engine light or an intermittent performance issue, our diagnostic capabilities allow us to identify the root cause quickly, saving you time and money.",
      ],
      servicesTitle: 'Diagnostic Service Offerings',
      servicesList: [
        { name: 'OBD-II Scanning', description: 'Complete onboard diagnostics reading to identify stored trouble codes.', image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=400&q=80' },
        { name: 'Live Data Analysis', description: 'Real-time monitoring of sensor data to identify intermittent issues.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80' },
        { name: 'Emissions Testing', description: 'Comprehensive emissions system diagnostics to ensure compliance.', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80' },
        { name: 'Sensor Diagnostics', description: 'Testing and calibrating the numerous sensors throughout your vehicle.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
        { name: 'System Integration', description: 'Ensuring all vehicle computer systems communicate properly.', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=400&q=80' },
        { name: 'Module Programming', description: 'ECU and control module reprogramming, updates, and reflashing.', image: '' },
      ],
      maintenance: {
        title: 'Proactive Diagnostics',
        paragraphs: [
          "Don't wait for a warning light to appear. Regular diagnostic check-ups can reveal developing issues before they lead to breakdowns or costly repairs. Our comprehensive diagnostic scans cover all major vehicle systems.",
          "At Quiroz Auto Heroes, we believe in empowering our customers with knowledge. After every diagnostic service, we provide a clear explanation of our findings and recommendations, so you can make informed decisions about your vehicle's care.",
        ],
      },
      whyChoose: [
        "Our investment in the latest diagnostic technology means faster, more accurate diagnoses for your vehicle. Villa Park drivers choose Quiroz Auto Heroes because we combine cutting-edge tools with experienced technicians who know how to use them.",
        "We never charge for unnecessary repairs. Our diagnostics are thorough and honest, ensuring you only pay for what your vehicle truly needs.",
      ],
    },
  },
  {
    slug: 'oil-change',
    title: 'Oil Change & Maintenance',
    shortTitle: 'Oil Change',
    tagline: 'Due for service?',
    description:
      'Regular oil changes are essential for engine longevity. We offer quick, thorough oil change services using quality oils and filters. Our maintenance packages keep your vehicle running at peak performance.',
    details: [
      'Conventional and synthetic oil changes',
      'Oil filter replacement',
      'Fluid level checks and top-offs',
      'Multi-point vehicle inspection',
      'Tire rotation and pressure check',
      'Air filter replacement',
    ],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
    content: {
      intro: [
        "Regular oil changes are the single most important thing you can do to extend the life of your engine. At Quiroz Auto Heroes in Villa Park, we make oil changes quick, convenient, and thorough. Our service goes beyond just swapping oil — we perform a comprehensive multi-point inspection with every visit.",
        "We use only quality oils and filters that meet or exceed manufacturer specifications. Whether your vehicle requires conventional, synthetic blend, or full synthetic oil, we have the right product for your engine and driving conditions.",
      ],
      servicesTitle: 'Oil Change & Maintenance Services',
      servicesList: [
        { name: 'Conventional Oil Change', description: 'Quality conventional oil changes for standard driving conditions.', image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80' },
        { name: 'Synthetic Oil Change', description: 'Full synthetic oil for maximum engine protection and performance.', image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80' },
        { name: 'Multi-Point Inspection', description: 'Comprehensive vehicle inspection included with every oil change.', image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=400&q=80' },
        { name: 'Filter Services', description: 'Oil filter, air filter, and cabin filter replacement.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
        { name: 'Fluid Services', description: 'Checking and topping off all essential vehicle fluids.', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=400&q=80' },
        { name: 'Tire Rotation', description: 'Tire rotation and pressure check included with maintenance visits.', image: '' },
      ],
      maintenance: {
        title: 'Scheduled Maintenance Programs',
        paragraphs: [
          "Beyond oil changes, Quiroz Auto Heroes offers complete scheduled maintenance programs tailored to your vehicle's specific needs. We follow manufacturer-recommended service intervals to keep your warranty valid and your vehicle performing at its best.",
          "Our maintenance reminders help you stay on track with your vehicle's service schedule. We keep detailed records of all services performed, giving you a complete maintenance history for your vehicle.",
        ],
      },
      whyChoose: [
        "Villa Park drivers choose Quiroz Auto Heroes for oil changes because we deliver quality and convenience. Our efficient service gets you in and out quickly without cutting corners on thoroughness.",
        "Every oil change includes a complimentary multi-point inspection, so you'll always know the overall condition of your vehicle. No surprises, no pressure — just honest service.",
      ],
    },
  },
  {
    slug: 'fleet-services',
    title: 'Fleet Services',
    shortTitle: 'Fleet Services',
    tagline: 'Managing a fleet?',
    description:
      'Keep your business moving with our comprehensive fleet maintenance programs. Illinois businesses throughout Villa Park and the surrounding area trust us because we understand that downtime costs money, so we prioritize efficient service without compromising quality.',
    details: [
      'Scheduled preventive maintenance',
      'Priority scheduling for fleet vehicles',
      'Detailed service records and reporting',
      'Volume pricing for fleet accounts',
      'Emergency repair services',
      'DOT inspection and compliance',
    ],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    content: {
      intro: [
        "Managing a fleet of vehicles requires a reliable, efficient, and trustworthy automotive service partner. Quiroz Auto Heroes in Villa Park provides comprehensive fleet maintenance programs designed to minimize downtime and maximize the lifespan of your vehicles.",
        "We understand that every hour a vehicle is off the road costs your business money. That's why we offer priority scheduling, efficient turnaround times, and transparent reporting to keep your fleet running and your business moving forward.",
      ],
      servicesTitle: 'Fleet Management Solutions',
      servicesList: [
        { name: 'Preventive Maintenance', description: 'Customized maintenance schedules to prevent breakdowns before they happen.', image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80' },
        { name: 'Priority Scheduling', description: 'Fleet vehicles get priority booking to minimize downtime.', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80' },
        { name: 'Detailed Reporting', description: 'Comprehensive service records and cost tracking for your fleet.', image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=400&q=80' },
        { name: 'Emergency Service', description: 'Rapid response for unexpected breakdowns and urgent repairs.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
        { name: 'DOT Compliance', description: 'Inspections and services to keep your fleet DOT-compliant.', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=400&q=80' },
        { name: 'Volume Pricing', description: 'Competitive fleet account rates and flexible payment options for businesses.', image: '' },
      ],
      maintenance: {
        title: 'Fleet Partnership Benefits',
        paragraphs: [
          "When you partner with Quiroz Auto Heroes for fleet services, you get more than just a repair shop — you get a dedicated automotive partner invested in your business success. Our volume pricing and flexible payment options make fleet maintenance budget-friendly.",
          "We provide detailed digital records for every vehicle in your fleet, making it easy to track maintenance history, upcoming services, and total cost of ownership.",
        ],
      },
      whyChoose: [
        "Illinois businesses throughout Villa Park and DuPage County trust Quiroz Auto Heroes with their fleets because we deliver consistent, high-quality service with minimal disruption to operations. Our dedicated fleet team understands the unique demands of commercial vehicles.",
        "From small business fleets to larger operations, we scale our services to meet your needs. Contact us to discuss a custom fleet maintenance program for your business.",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
