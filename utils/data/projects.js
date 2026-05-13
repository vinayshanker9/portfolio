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
  }
];
