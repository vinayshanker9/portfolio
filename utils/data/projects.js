export const projectsData = [
  {
    id: 1,
    name: "Distributed Rate Limiter & API Gateway",
    description: "A high-throughput API Gateway handling millions of requests with a Token Bucket rate-limiting algorithm. Engineered using Spring WebFlux for non-blocking I/O and Redis with Lua scripts for atomic distributed state management.",
    tools: ["Java", "Spring WebFlux", "Redis", "Lua", "Docker", "JMeter"],
    badge: "Backend System Design",
    github: "https://github.com/vinayshanker9/Distributed-Rate-Limiter-API-Gateway",
    demo: "#"
  },
  {
    id: 2,
    name: "Event-Driven E-Commerce Order Engine",
    description: "A fault-tolerant microservices architecture separating Order, Inventory, and Payment domains. Designed using the Saga Pattern for distributed transactions, with Apache Kafka orchestrating asynchronous event streams.",
    tools: ["Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Kubernetes", "Zipkin"],
    badge: "Backend Microservices",
    github: "https://github.com/vinayshanker9/Event-Driven-E-Commerce-Order-Engine",
    demo: "#"
  },
  {
    id: 3,
    name: "Solo Tutor",
    description: "AI-powered study app that allows users to chat with documents, generate quizzes, explain code, and summarize videos using LLMs and vector embeddings.",
    tools: ["React", "FastAPI", "Supabase", "Groq", "FastEmbed", "Python", "Llama 3"],
    badge: "AI Application",
    github: "https://github.com/vinayshanker9/Solo-Tutor",
    demo: "https://solobot.netlify.app/"
  }
];
