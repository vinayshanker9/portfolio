export const projectsData = [
  {
    id: 1,
    name: "Distributed Rate Limiter & API Gateway",
    description: "A high-throughput API Gateway handling millions of requests with a Token Bucket rate-limiting algorithm. Engineered using Spring WebFlux for non-blocking I/O and Redis with Lua scripts for atomic distributed state management.",
    tools: ["Java", "Spring WebFlux", "Redis", "Lua", "Docker", "JMeter"],
    badge: "Backend System Design",
    github: "https://github.com/vinayshanker9/distributed-rate-limiter",
    demo: "#"
  },
  {
    id: 2,
    name: "Event-Driven E-Commerce Order Engine",
    description: "A fault-tolerant microservices architecture separating Order, Inventory, and Payment domains. Designed using the Saga Pattern for distributed transactions, with Apache Kafka orchestrating asynchronous event streams.",
    tools: ["Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Kubernetes", "Zipkin"],
    badge: "Backend Microservices",
    github: "https://github.com/vinayshanker9/ecommerce-order-engine",
    demo: "#"
  },
  {
    id: 3,
    name: "Real-Time Collaborative Code Editor 🛠️ (Upcoming)",
    description: "A Google Docs-style collaborative IDE natively supporting multi-cursor live editing. Implemented Conflict-free Replicated Data Types (CRDTs) to handle concurrent edits via Spring WebSockets and a React frontend.",
    tools: ["React.js", "Spring Boot", "WebSockets", "CRDTs", "Tailwind CSS", "Redis Pub/Sub"],
    badge: "Upcoming • Full Stack",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    name: "Scalable Video Streaming Platform 🎥 (Upcoming)",
    description: "A YouTube-clone full-stack application supporting asynchronous video transcoding (using FFmpeg) into HLS format for adaptive bitrate streaming. Utilized AWS S3 for blob storage and a Next.js client for playback.",
    tools: ["Next.js", "Spring Boot", "AWS S3", "FFmpeg", "HLS", "PostgreSQL", "Docker"],
    badge: "Upcoming • Full Stack",
    github: "#",
    demo: "#"
  }
];
