export type Client = {
  name: string;
  tech: string;
  badge?: string;
  url?: string;
  description?: string;
  work?: string;
};

export const clients: Client[] = [
  {
    name: "kettutesti.hel.fi",
    tech: "WordPress · Handlebars · TypeScript · PHP · Tailwind",
    badge: "Helsinki City",
    url: "https://kettutesti.hel.fi",
    description: "Interactive personality quiz for Helsinki City's early education programme — children discover which of seven fox characters they are, each representing sustainable future values.",
    work: "Built the entire web app from scratch.",
  },
  {
    name: "icare-world.com/ifu",
    tech: "React · WordPress · PHP · REST API",
    badge: "Medical Devices · Global",
    url: "https://www.icare-world.com/ifu/",
    description: "Finnish medical device company (Revenio Group) making ophthalmic diagnostic tools sold worldwide.",
    work: "Built a React-powered manual downloader app embedded in WordPress — users filter by product model and download instruction manuals.",
  },
  {
    name: "museoliitto.fi",
    tech: "WordPress · Handlebars · TypeScript · PHP · Tailwind · 3rd-party APIs",
    badge: "Finnish Museums Association",
    url: "https://museoliitto.fi",
    description: "Finland's national museum association — serving museum professionals, job listings, training, and the Museokortti programme.",
    work: "Built the entire site from scratch.",
  },
  {
    name: "rightware.com",
    tech: "Vue · Headless WordPress · REST API",
    badge: "Headless architecture",
    url: "https://rightware.com",
    description: "Finnish automotive HMI software company behind the Kanzi UI framework used in car dashboards worldwide.",
    work: "Fixed API endpoints, resolved data flow issues, built advanced pagination, delivered new features — fully decoupled headless CMS architecture using Vue.js and WordPress REST API.",
  },
  {
    name: "netox.com",
    tech: "Custom React Blocks · Gutenberg · WordPress · PHP",
    badge: "Finnish Cybersecurity",
    url: "https://netox.com",
    description: "Microsoft Security Partner of the Year 2025, offering IT services and cybersecurity solutions to Finnish enterprises.",
    work: "Built all custom Gutenberg React blocks for the site.",
  },
  {
    name: "keskustaksi.fi",
    tech: "WordPress · Gutenberg · Custom React Blocks · PHP",
    badge: "Finnish Transport",
    url: "https://keskustaksi.fi",
    description: "Major Finnish taxi dispatch operator covering South Ostrobothnia, Pori and Rauma, handling Kela transport services across multiple regions.",
    work: "Migrated legacy WooCommerce checkout to block-based checkout, built custom React blocks to integrate custom fields with native block functionality, fixed email templates.",
  },
  {
    name: "enjoynature.fi",
    tech: "React · Gutenberg · WordPress · Tailwind",
    badge: "Finnish Hospitality",
    url: "https://enjoynature.fi",
    description: "Hotel, café and event venue in Hollola, Lakeland Finland — handling accommodation, meetings, events, and seasonal café operations.",
    work: "Built the entire site including a custom reservation and booking system — integrated Event Manager Pro and wrote custom code to handle table-based reservations and payments.",
  },
  {
    name: "mesi.fi",
    tech: "WordPress · WooCommerce · Gutenberg · PHP",
    badge: "Finnish E-commerce",
    url: "https://mesi.fi",
    description: "Finnish honey and beekeeping supplier founded in 1976, serving both consumers and professional beekeepers with hundreds of products.",
    work: "Developed several custom plugins adding seamless UI and custom functionality to native WooCommerce with complex business logic.",
  },
  {
    name: "sentica.fi",
    tech: "WordPress · Scss · PHP",
    badge: "Finnish Private Equity",
    url: "https://sentica.fi",
    description: "Independent Finnish private equity firm managing investments in SMEs including Kotipizza, Pihlajalinna, and Coptersafety.",
    work: "Built the entire site from scratch.",
  },
  {
    name: "endomines.com",
    tech: "WordPress · Handlebars · TypeScript · Tailwind · PHP",
    badge: "Finnish Mining · Listed",
    url: "https://endomines.com",
    description: "Finnish gold mining company listed on OMX Helsinki (PAMPALO), focused on gold production and exploration in Eastern Finland.",
    work: "Built new layouts, custom functionalities, third-party API integrations, and new block-based features.",
  },
  {
    name: "colligx.fi",
    tech: "React · Gutenberg · WordPress · Tailwind",
    badge: "Finnish Logistics",
    url: "https://colligx.fi",
    description: "Finnish food and e-commerce logistics pioneer handling 10,000+ orders and 2,500 deliveries weekly, now expanding across the Baltics.",
    work: "Built the entire bilingual site from scratch.",
  },
  {
    name: "darling.fi",
    tech: "React · Gutenberg · WordPress · PHP",
    badge: "Finnish Communications",
    url: "https://darling.fi",
    description: "Strategic communications agency in Tampere, working with clients including Lapland Hotels, Panostaja, and Netflix Game Studio Next Games.",
    work: "Built the entire bilingual site from scratch.",
  },
  {
    name: "jurvanjousi.com",
    tech: "WordPress · Gutenberg · Custom React Blocks · PHP",
    badge: "Finnish Industry",
    url: "https://jurvanjousi.com",
    description: "Finnish industrial spring manufacturer producing millions of springs annually for Wärtsilä, Abloy, and the Finnish Air Force.",
    work: "Built the entire multilingual site from scratch.",
  },
  {
    name: "rehukone.fi",
    tech: "WordPress · WooCommerce · Gutenberg · PHP",
    badge: "Finnish Agriculture",
    url: "https://rehukone.fi",
    description: "Feed recommendation tool for A-Rehu (Atria) — dairy farmers select feeding methods and silage quality to get personalised supplement recommendations.",
    work: "Built the entire site including WooCommerce integration and interactive feed calculator.",
  },
];