import calienteImage from "./public/assets/caliente.jpeg"
import fuegoImage from "./public/assets/fuego.png"
import portfolioImage from "./public/assets/portfolio.png"

export const projects = [
  {
    id: 1,
    title: "Fuego App",
    description: "Fuego is an app designed to unite dancers of all levels with partners, events and educational resources, creating a seamless and engaging dance community. Acting as both a social and learning hub, the app enables users to discover nearby dance events, access virtual lessons, share videos for constructive feedback and build personalized profiles to showcase their skills and interests.",
    imageUrl: fuegoImage,
    tags: ["React Native", "TypeScript"],
    link: "https://www.psu.edu/news/information-sciences-and-technology/story/app-connect-dancers-partners-and-resources-wins",
    code: "https://github.com/Sobarzo14/fuego"
  },
  {
    id: 2,
    title: "Course Clarity",
    description: "Course Clarity is a Retrieval-Augmented Generation (RAG) system that analyzes course syllabi to provide students with clear, concise summaries of course expectations, content structure, and workload. By using natural language processing and retrieval techniques, it helps students make more informed decisions during course selection.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*MqiaQ3ydE_evyiSXtSR8pg.jpeg",
    tags: ["Python", "Pinecone", "LangChain", "Gradio"],
    code: "https://github.com/Sobarzo14/course-clarity"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A collection of my work, projects, and passions. Here you'll find highlights of my experience in coding, creative tech, and design, along with insights into my interests in fitness and dance. Each piece reflects my drive to build, express, and grow.",
    imageUrl: portfolioImage,
    tags: ["React", "Tailwind CSS"],
    code: "https://github.com/Sobarzo14/portfolio",
    link: "https://www.abelardosobarzo.com/"
  }
];

export const hobbies = [
  {
    id: 1,
    title: "Caliente Dance Company",
    excerpt: "Penn State's Latin dance organization that celebrates the art and culture of Latin dance styles like salsa, bachata, and merengue. Through performances, workshops, and community events, Caliente brings together dancers of all levels to share their passion, energy, and love for Latin music and movement.",
    imageUrl: calienteImage,
    tags: ["Dancing"]
  },
  {
    id: 2,
    title: "Hevy",
    excerpt: "Hevy is a workout tracking app that helps me log my exercises, track progress, and stay organized at the gym. I use it to plan my workouts, monitor my personal records, and stay consistent with my fitness goals. It keeps me motivated by showing how much I’m improving over time.",
    content: "Lorem ipsum dolor sit amet...",
    imageUrl: "https://play-lh.googleusercontent.com/AFo9TgMFYDN2K-vqtGPW0WEyGzfCNkpOSBl6fVMaPSDw6SQ3VdZ9k6YDv2lrp_zkOQzi=w3840-h2160-rw",
    tags: ["Gym", "Calisthenics"]
  }
];