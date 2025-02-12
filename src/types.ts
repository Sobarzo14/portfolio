export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface Content {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  date: string;
  link?: string;
}