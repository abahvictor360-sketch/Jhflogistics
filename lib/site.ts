export const site = {
  name: "Jhflogistics",
  tagline: "Cargo & Freight Transport Services",
  phone: "+001 775 843 01",
  phoneHref: "tel:+00177584301",
  altPhone: "(998) 765 4321",
  email: "support@jhflogistics.com",
  address: "27 Marine Drive, Harbour District, Lagos, Nigeria",
  hours: "Mon - Fri: 8am - 6pm | Sat: 9am - 2pm",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "maritime-freight",
    title: "Maritime Freight Transportation",
    image: "/images/container-ship-ocean.jpg",
    excerpt:
      "Full-container and part-load ocean freight on every major trade lane, with customs clearance handled end to end.",
    points: [
      "FCL and LCL ocean consolidation",
      "Port-to-door delivery with live tracking",
      "Customs brokerage and documentation",
    ],
  },
  {
    slug: "land-freight",
    title: "Land Freight Transportation",
    image: "/images/container-truck-port.jpg",
    excerpt:
      "A vetted fleet of trucks moving palletised and containerised cargo across regional and cross-border corridors.",
    points: [
      "Dedicated and shared truckload",
      "Cross-border corridor permits",
      "Temperature-controlled options",
    ],
  },
  {
    slug: "air-freight",
    title: "Air Freight Transportation",
    image: "/images/port-terminal.jpg",
    excerpt:
      "Time-critical air cargo with same-day booking, consolidated uplift and airport-to-door final mile.",
    points: [
      "Next-flight-out and charter",
      "Dangerous goods certified handling",
      "Airport-to-door final mile",
    ],
  },
  {
    slug: "warehousing",
    title: "Warehousing & Distribution",
    image: "/images/port-sunset.jpg",
    excerpt:
      "Bonded and general storage with pick, pack and inventory visibility through a single dashboard.",
    points: [
      "Bonded and general warehousing",
      "Pick, pack and kitting",
      "Real-time inventory dashboards",
    ],
  },
  {
    slug: "supply-chain",
    title: "Supply Chain Consulting",
    image: "/images/world-map-truck.jpg",
    excerpt:
      "Network design, carrier tendering and cost modelling that takes avoidable spend out of your freight budget.",
    points: [
      "Network and lane design",
      "Carrier tendering and rate benchmarking",
      "Landed-cost modelling",
    ],
  },
  {
    slug: "project-cargo",
    title: "Project & Heavy Cargo",
    image: "/images/highway-truck.jpg",
    excerpt:
      "Out-of-gauge and heavy-lift moves engineered with route surveys, permits and on-site supervision.",
    points: [
      "Route surveys and permits",
      "Heavy-lift and out-of-gauge",
      "On-site load supervision",
    ],
  },
];

export const stats = [
  { value: "50k", label: "Successful Transportation" },
  { value: "256", label: "Land Freight Transportation" },
  { value: "25+", label: "Countries of Operation" },
  { value: "125", label: "Train Freight Transportation" },
];

export const posts = [
  {
    slug: "how-new-transportation-systems-affect-ventures",
    title: "How new transportation systems affect ventures",
    author: "Ada Okafor",
    date: "12 March 2026",
    category: "Freight",
    image: "/images/container-ship-ocean.jpg",
    excerpt:
      "Shifting sailing schedules and new inland corridors are changing how importers plan buffer stock.",
    body: [
      "Carriers have rebuilt their loops over the last two seasons, and the practical effect for shippers is a wider spread between the fastest and slowest option on the same lane.",
      "The importers handling this well are the ones who stopped treating transit time as a fixed input. They model it as a range, hold buffer stock against the upper end, and book the premium service only for the lines that actually earn it.",
      "Our planning teams rebuild lane models every quarter, so the transit assumptions behind your safety stock stay tied to what carriers are really sailing.",
    ],
  },
  {
    slug: "easy-tracking-system-is-changing-modern-logistics",
    title: "Easy tracking system is changing modern logistics",
    author: "Samuel Eze",
    date: "28 February 2026",
    category: "Technology",
    image: "/images/port-terminal.jpg",
    excerpt:
      "Milestone-level visibility has moved from a premium add-on to the baseline expectation on every booking.",
    body: [
      "A tracking number used to mean a status page refreshed once a day. Today the same booking emits events at gate-in, loading, departure, transhipment, arrival and delivery.",
      "The value is not the map. It is the exception alert that reaches a planner early enough to re-route a container before the customer notices a gap on the shelf.",
      "Every Jhflogistics shipment carries milestone tracking as standard, with alerting rules you configure per lane and per customer.",
    ],
  },
  {
    slug: "prerequisites-of-sending-goods-through-containers",
    title: "Prerequisites of sending goods through containers",
    author: "Grace Bello",
    date: "09 February 2026",
    category: "Guides",
    image: "/images/container-truck-port.jpg",
    excerpt:
      "Most container delays start with paperwork, not the vessel. Here is the checklist we run before every booking.",
    body: [
      "Commercial invoice, packing list, certificate of origin and any lane-specific permits should be final before the container is stuffed, not while it waits at the terminal.",
      "Weight declarations deserve particular care. A VGM mismatch is one of the few errors that can strand a box on the quay after the vessel has sailed.",
      "Our documentation desk pre-checks every file against the destination's requirements and flags gaps while there is still time to fix them.",
    ],
  },
];

export const faqs = [
  {
    q: "What is the LTL weight cost of goods transportation?",
    a: "Less-than-truckload pricing is driven by freight class, billable weight, lane distance and any accessorials such as lift-gate or residential delivery. We quote each shipment against live carrier rates and show the breakdown line by line, so nothing appears on the invoice that was not in the quote.",
  },
  {
    q: "How much time it takes for LTL freight transport?",
    a: "Regional LTL moves typically clear in one to three working days, and long-haul domestic lanes in three to six. Cross-border transit depends on the crossing point and clearance formalities; we publish a realistic window with every booking rather than a best-case figure.",
  },
  {
    q: "What are the pick-up points of logistics?",
    a: "We collect from factories, bonded warehouses, port terminals, airport cargo villages and third-party distribution centres. If your supplier is outside our direct network we arrange a vetted partner pickup and keep the shipment on one tracking reference.",
  },
  {
    q: "What is the cost of goods transportation?",
    a: "Cost is a function of mode, volume, weight, lane and service level. Air freight is fastest and most expensive per kilogram, ocean freight the cheapest at volume, and road sits in between. Send us your lane and cargo profile and you will have a costed comparison of all three within one business day.",
  },
];

export const cases = [
  {
    title: "Relief Transportation For United Nations",
    tag: "Humanitarian",
    image: "/images/port-terminal.jpg",
  },
  {
    title: "300 Metric Ton Grain Freight For Mexico",
    tag: "Bulk Cargo",
    image: "/images/container-truck-port.jpg",
  },
  {
    title: "Shipping Large Containers From China To USA",
    tag: "Ocean Freight",
    image: "/images/container-ship-ocean.jpg",
  },
  {
    title: "200 Metric Ton Grain Freight For Mexico",
    tag: "Land Freight",
    image: "/images/highway-truck.jpg",
  },
];

export const team = [
  {
    name: "Joseph H. Fielding",
    role: "Founder & Managing Director",
    bio: "Twenty-two years in ocean freight and terminal operations across three continents.",
  },
  {
    name: "Ada Okafor",
    role: "Head of Freight Operations",
    bio: "Runs the lane planning desk and the carrier tendering programme.",
  },
  {
    name: "Samuel Eze",
    role: "Customs & Compliance Lead",
    bio: "Licensed broker; owns documentation accuracy across every trade lane we serve.",
  },
  {
    name: "Grace Bello",
    role: "Warehousing Director",
    bio: "Designs bonded storage and distribution flows for high-turn inventory.",
  },
];
