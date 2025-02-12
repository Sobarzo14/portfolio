import { Project, BlogPost, Content } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Coffee Shop Finder",
    description: "A passion project helping coffee lovers discover local cafes and track their favorite brews",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Photography Portfolio",
    description: "A minimalist gallery showcasing my journey through street photography",
    imageUrl: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Tailwind", "Cloudinary"],
    link: "https://github.com"
  },
  {
    id: 3,
    title: "Tech Book Club",
    description: "A community platform for developers to discuss and review programming books",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Firebase", "TypeScript"],
    link: "https://github.com"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Finding Balance: A Developer's Journey with Coffee and Code",
    excerpt: "How my morning coffee ritual transformed my coding practice and helped me find work-life balance.",
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=800",
    tags: ["Lifestyle", "Programming"]
  },
  {
    id: 2,
    title: "The Art of Street Photography: Lessons for Developers",
    excerpt: "What capturing moments on the streets taught me about writing better code.",
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-10",
    imageUrl: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?auto=format&fit=crop&q=80&w=800",
    tags: ["Photography", "Creative Process"]
  }
];

export const contents: Content[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=800",
    title: "Street Photography Guide",
    category: "Photography",
    description: "A comprehensive guide to capturing compelling street scenes",
    date: "2024-03-01",
    link: "/guides/street-photography"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=800",
    title: "Architecture Design Patterns",
    category: "Design",
    description: "Exploring common patterns in modern architecture",
    date: "2024-02-15",
    link: "/guides/architecture"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800",
    title: "Coffee Brewing Techniques",
    category: "Lifestyle",
    description: "Master the art of brewing the perfect cup",
    date: "2024-02-01",
    link: "/guides/coffee"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=800",
    title: "Urban Photography Tips",
    category: "Photography",
    description: "Tips and tricks for urban photography",
    date: "2024-01-20",
    link: "/guides/urban-photography"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    title: "Night Photography Essentials",
    category: "Photography",
    description: "Master the art of night photography",
    date: "2024-01-10",
    link: "/guides/night-photography"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    title: "Coffee Shop Reviews",
    category: "Lifestyle",
    description: "Reviews of the best coffee shops in San Francisco",
    date: "2024-01-05",
    link: "/reviews/coffee-shops"
  }
];