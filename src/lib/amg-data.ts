import coal from "@/assets/amg-coal.jpeg";
import logistics from "@/assets/Logistics.jpeg";
import logistics2 from "@/assets/Logistics-2.jpeg";
import mineralYard from "@/assets/amg-mineral-yard.jpeg";
import processing from "@/assets/processing-value addition-unit.jpeg";
import processing2 from "@/assets/processing-value addition-unit-2.jpeg";
import quarry from "@/assets/amg-quarry.jpeg";
import stoneTransport from "@/assets/amg-stone-transport.jpeg";
import saltMining from "@/assets/salt.jpeg";
import himalayanPinkSalt from "@/assets/Himalayan-Pink-Salt.jpeg";
import stoneCrushing from "@/assets/amg-stone-crushing.jpg";
import generalSupply from "@/assets/amg-general-supply.jpg";
import mineralMining from "@/assets/amg-mineral-mining.jpg";
import silicaSand from "@/assets/silica-sand.jpeg";
import copper from "@/assets/copper.jpeg";
import industrialRock from "@/assets/industrial-rock.jpeg";
import trading from "@/assets/Trading.jpeg";
import trading2 from "@/assets/Trading-2.jpeg";

import coalVideo from "@/assets/coal-video.mp4";
import himalayanSaltVideo from "@/assets/himalayan-salt.mp4";
import industrialRockVideo from "@/assets/induustrial-rock-video.mp4";

export const images = {
  coal,
  logistics,
  logistics2,
  mineralYard,
  processing,
  processing2,
  quarry,
  stoneTransport,
  saltMining,
  himalayanPinkSalt,
  stoneCrushing,
  generalSupply,
  mineralMining,
  silicaSand,
  copper,
  industrialRock,
  trading,
  trading2,
};

export const videos = {
  coalVideo,
  himalayanSaltVideo,
  industrialRockVideo,
};

export const pdfDocuments = {
  saltProductProfile: "/amg-salt-product-profile.pdf",
};

export const companyContact = {
  phone: "+923006043924",
  phoneDisplay: "+92 300 6043924",
  whatsapp1: "+923028511124",
  whatsapp1Display: "+92 302 8511124",
  whatsapp2: "+923006043924",
  whatsapp2Display: "+92 300 6043924",
  email: "abidmunirawan@gmail.com",
  location: "Muhalla Ali pura old bus stand Khushab , Pakistan",
  locationDisplay: "Muhalla Ali Pura, Old Bus Stand, Khushab, Pakistan",
  socials: {
    instagram: "https://www.instagram.com/abidmunirgroup?stkn=MW93OGwwOGViNXVpZw==",
    facebook: "https://www.facebook.com/share/18EaTJYfck/",
    whatsapp: "https://api.whatsapp.com/qr/M3YDU6GKR4XSC1?autoload=1&app_absent=0",
    whatsappQr: "https://api.whatsapp.com/qr/M3YDU6GKR4XSC1?autoload=1&app_absent=0",
  },
  tagline: "Honouring a legacy. Building a vision. Shaping the future.",
  founder: "Malik Abid Munir Awan",
};

export const businessActivities = [
  {
    number: "01",
    title: "MANUFACTURING",
    shortText:
      "We are engaged in manufacturing activities with a focus on quality, efficiency and customer requirements.",
    text: "We undertake manufacturing activities with a focus on quality, efficiency and customer requirements, aiming to deliver dependable products and solutions for diverse business needs.",
    image: processing,
  },
  {
    number: "02",
    title: "PROCESSING",
    shortText:
      "Our processing operations focus on delivering products that meet required quality and industry standards.",
    text: "Our processing capabilities are focused on preparing and handling products efficiently while maintaining consistency and meeting the requirements of our customers and markets.",
    image: processing2,
  },
  {
    number: "03",
    title: "GENERAL ORDER SUPPLY",
    shortText:
      "Our core strength lies in General Order Supply. We can arrange and supply a wide range of products and materials according to customer and project requirements.",
    text: "General Order Supply is one of our core business strengths. We can facilitate the sourcing and supply of a wide range of products and materials according to customer, commercial and project requirements. Our core supply portfolio includes Coal, Salt, Silica Sand, Bauxite, Stone Dust, Gypsum and Copper Ore, while our general-order capability extends beyond minerals to other products and materials as required.",
    image: generalSupply,
  },
  {
    number: "04",
    title: "TRADING",
    shortText:
      "We facilitate reliable trading solutions by connecting products, suppliers and customers across different markets.",
    text: "We facilitate trading opportunities across diverse product categories by connecting reliable sources with customer requirements and developing mutually beneficial business relationships.",
    image: trading,
  },
  {
    number: "05",
    title: "LOGISTICS",
    shortText:
      "We support the movement and delivery of products through dependable logistics and supply chain solutions.",
    text: "We support the movement and coordination of goods through reliable logistics and supply arrangements, helping ensure efficient delivery from source to destination across Pakistan.",
    image: logistics,
  },
];

export const services = businessActivities;

export const coreProducts = [
  {
    id: "coal",
    name: "COAL",
    category: "Mining & Industrial Energy",
    badge: "Own Coal Mining Operations",
    image: coal,
    summary: "High quality coal for industrial, commercial and brick kiln operations.",
    detail:
      "We extract coal from our own coal mining operations and maintain supply capabilities through reliable sourcing networks. We provide quality coal for industrial and commercial requirements, with a focus on consistency, reliability and customer-specific needs.",
    specs: [
      "Direct extraction from owned coal mines",
      "High calorific value & optimal grading",
      "Bulk fleet delivery across Pakistan",
      "Consistent industrial supply contracts",
    ],
  },
  {
    id: "salt",
    name: "SALT",
    category: "Mineral Extraction & Processing",
    badge: "Own Salt Mining Operations",
    image: himalayanPinkSalt,
    summary: "Pure Himalayan rock salt and industrial grade processed salt.",
    detail:
      "With our own salt mining operations and processing capabilities, we are able to extract, process and supply quality salt products according to customer requirements. From raw salt sourcing to processing and final supply, we focus on quality, consistency and reliable delivery for industrial and commercial needs.",
    specs: [
      "Raw rock salt & fine refined grades",
      "Himalayan pink crystal lumps & tiles",
      "Industrial, chemical & de-icing grades",
      "Export & domestic bulk fulfillment",
    ],
    pdfDownload: "/amg-salt-product-profile.pdf",
  },
  {
    id: "silica-sand",
    name: "SILICA SAND",
    category: "Industrial Minerals",
    badge: "Quality Sourced & Washed",
    image: silicaSand,
    summary: "High silica content sand for glass, casting, filtration and construction.",
    detail:
      "Silica sand supply for industrial, construction and other applicable requirements. Carefully sourced, graded and supplied with dependable chemical purity and consistent mesh sizes.",
    specs: [
      "High silicon dioxide (SiO2) purity",
      "Graded mesh sizes for varied applications",
      "Washed and kiln-dried options",
      "Continuous quarry sourcing capability",
    ],
  },
  {
    id: "bauxite",
    name: "BAUXITE",
    category: "Metallurgical & Refractory",
    badge: "Commercial Grade Ore",
    image: mineralMining,
    summary: "Raw bauxite ore for refractory, cement, abrasive and metallurgical use.",
    detail:
      "Bauxite sourcing and supply for industrial and commercial applications. We ensure reliable procurement from established geological formations across Pakistan.",
    specs: [
      "Consistent alumina (Al2O3) concentration",
      "Low moisture & controlled ferric content",
      "Reliable volume dispatch for heavy plants",
      "Commercial testing and assay certificates",
    ],
  },
  {
    id: "stone-dust",
    name: "STONE DUST",
    category: "Construction & Infrastructure",
    badge: "Own Stone Crushing Plant",
    image: stoneCrushing,
    summary: "Precision-crushed stone dust produced at our modern crushing facility.",
    detail:
      "Through our own stone crushing plant, we produce and supply quality stone dust for construction, infrastructure and project-related requirements. Our crushing operations enable us to provide consistent material according to customer specifications and supply needs.",
    specs: [
      "Produced in-house at AMG crushing facility",
      "Ideal compaction & density properties",
      "Essential for pavers, asphalt, roads & concrete",
      "High-volume daily crushing capacity",
    ],
  },
  {
    id: "gypsum",
    name: "GYPSUM",
    category: "Agricultural & Building",
    badge: "High-Purity Natural Mineral",
    image: stoneTransport,
    summary: "Natural gypsum rock and powder for plaster, cement manufacturing and agriculture.",
    detail:
      "Gypsum sourcing and supply for relevant industrial and commercial requirements. Perfect for soil conditioning, cement retardation, and building materials manufacturing.",
    specs: [
      "High calcium sulfate dihydrate content",
      "Lump and finely pulverized powder grades",
      "Ideal for agricultural soil reclamation",
      "Direct bulk hopper and tipper dispatches",
    ],
  },
  {
    id: "copper",
    name: "COPPER",
    category: "Metals & Smelting",
    badge: "Copper Ore Sourcing",
    image: copper,
    summary: "Commercial grade copper ore supply for smelting and industrial trading.",
    detail:
      "Copper ore sourcing and supply for commercial and industrial requirements. AMG bridges mining extraction with nationwide trade and smelting buyers.",
    specs: [
      "Direct mine-site sourcing networks",
      "Assayed copper percentages",
      "Secure logistics and transport escorts",
      "Transparent trade and commercial terms",
    ],
  },
];

export const products = coreProducts;

export const generalOrderCategories = [
  {
    id: "construction",
    title: "Construction & Infrastructure Materials",
    tagline: "Heavy Materials for Mega projects",
    text: "Materials required for roads, bridges, canals, pipelines and other infrastructure projects across Pakistan. We handle procurement, quality compliance, and scheduled logistics.",
    items: [
      "Aggregate & Road Base",
      "Structural Steel & Rebar",
      "Canal & Drainage Lining",
      "Pipeline Bedding & Backfill",
      "Heavy Quarry Boulders",
    ],
    image: stoneCrushing,
  },
  {
    id: "agricultural",
    title: "Agricultural & Food Products",
    tagline: "Commodities & Farm Supplies",
    text: "Rice, poultry, eggs, animal feed and other related requirements. Sourced from dependable producers and agricultural hubs for commercial and institutional buyers.",
    items: [
      "Premium Basmati & Non-Basmati Rice",
      "Poultry & Commercial Eggs",
      "Quality Animal & Cattle Feed",
      "Bulk Grains & Milling Byproducts",
      "Farm Raw Materials",
    ],
    image: generalSupply,
  },
  {
    id: "industrial-building",
    title: "Industrial & Building Materials",
    tagline: "Essential Bulk Supplies",
    text: "Cement, fly ash, wood and other materials according to specific requirements. Tailored supply schedules directly to construction sites, manufacturing units, and dealers.",
    items: [
      "Standard & Sulfate-Resistant Cement",
      "Fly Ash for Concrete Blends",
      "Commercial Wood & Timber",
      "Industrial Chemicals & Additives",
      "Custom Bulk Order Supplies",
    ],
    image: industrialRock,
  },
];

export const operationsVideos = [
  {
    id: "coal-mining",
    title: "Coal Mining Operations",
    subtitle: "Heavy excavation & direct fleet dispatch from owned coal concessions",
    location: "Khushab Coal Mines",
    badge: "Own Mine Site",
    video: coalVideo,
    poster: coal,
  },
  {
    id: "salt-extraction",
    title: "Himalayan Pink Salt Extraction",
    subtitle: "Pure mineral extraction, hand sorting & premium grade processing",
    location: "Salt Range, Punjab",
    badge: "Own Salt Mines",
    video: himalayanSaltVideo,
    poster: himalayanPinkSalt,
  },
  {
    id: "industrial-rock",
    title: "Industrial Rock & Crushing",
    subtitle: "State-of-the-art crushing plant producing stone dust & aggregate",
    location: "AMG Crushing Plant",
    badge: "Crushing Facility",
    video: industrialRockVideo,
    poster: industrialRock,
  },
];

export const facilityGallery = [
  {
    title: "Processing & Value Addition Unit",
    category: "Manufacturing",
    image: processing,
    description: "Modern facility for mineral refinement and packaging.",
  },
  {
    title: "Secondary Processing Plant",
    category: "Processing",
    image: processing2,
    description: "High-throughput sorting and mechanical grading line.",
  },
  {
    title: "Himalayan Pink Salt Stocks",
    category: "Mining",
    image: himalayanPinkSalt,
    description: "Natural rock salt blocks and mineral salt reserves.",
  },
  {
    title: "Nationwide Logistics & Fleet",
    category: "Logistics",
    image: logistics,
    description: "Heavy multi-axle transport fleet serving all provinces.",
  },
  {
    title: "Secondary Fleet Hub",
    category: "Logistics",
    image: logistics2,
    description: "Direct haulage from quarry head to end-user factories.",
  },
  {
    title: "Trading & Distribution Yard",
    category: "Trading",
    image: trading,
    description: "Centralized stockpile management and prompt loading.",
  },
  {
    title: "Commercial Trading Center",
    category: "Trading",
    image: trading2,
    description: "Connecting verified sources with commercial off-takers.",
  },
  {
    title: "Industrial Rock Sourcing",
    category: "Minerals",
    image: industrialRock,
    description: "High-grade industrial rock and building materials.",
  },
];

export const whyChooseUs = [
  {
    title: "DIVERSE SUPPLY CAPABILITY",
    text: "From industrial materials to general order requirements, we provide flexible supply solutions based on client needs.",
    highlight: "Multi-sector sourcing reach",
  },
  {
    title: "RELIABLE SOURCING",
    text: "We focus on building dependable sourcing and supplier networks to ensure consistent product availability.",
    highlight: "Own mines & robust partners",
  },
  {
    title: "QUALITY FOCUS",
    text: "We strive to maintain appropriate quality standards according to product and customer requirements.",
    highlight: "Strict testing & grading",
  },
  {
    title: "BUSINESS FLEXIBILITY",
    text: "Our diversified business approach allows us to explore and fulfill opportunities across multiple sectors.",
    highlight: "Custom orders & terms",
  },
  {
    title: "CUSTOMER-ORIENTED APPROACH",
    text: "We work closely with our clients to understand their requirements and provide practical business solutions.",
    highlight: "Dedicated account support",
  },
];

export const amgStats = [
  {
    value: "05",
    label: "Core Business Activities",
    detail: "Manufacturing, Processing, Supply, Trading, Logistics",
  },
  {
    value: "07+",
    label: "Key Mineral & Industrial Lines",
    detail: "Coal, Salt, Stone Dust, Silica Sand, Bauxite, Gypsum, Copper",
  },
  {
    value: "100%",
    label: "Operational Integrity",
    detail: "Grounding every transaction in trust and transparency",
  },
  {
    value: "24/7",
    label: "Dispatch & Supply Reach",
    detail: "Headquartered in Khushab, serving projects nationwide",
  },
];
