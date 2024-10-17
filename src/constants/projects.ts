export interface Project {
  name: string;
  link: string;
  description: string;
  keywords: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "Hacktoberfest-2024-Webdev",
    link: "https://github.com/GDG-GTBIT/Hacktoberfest-2024-Webdev",
    description: "A repository containing web development projects for participants.",
    keywords: ['web', 'frontend', 'react'],
  },
  {
    name: "Hacktoberfest-2024-Appdev",
    link: "https://github.com/GDG-GTBIT/Hacktoberfest-2024-Appdev",
    description: "App development projects open for contributions during Hacktoberfest 2024.",
    keywords: ['app', 'mobile', 'android', 'ios'],
  },
  {
    name: "Hacktoberfest-2024-Cyber",
    link: "https://github.com/GDG-GTBIT/Hacktoberfest-2024-Cyber",
    description: "Cybersecurity-focused projects as part of Hacktoberfest 2024.",
    keywords: ['cyber', 'security', 'network'],
  },
  {
    name: "Hacktoberfest-2024-AIML",
    link: "https://github.com/GDG-GTBIT/Hacktoberfest-2024-AIML",
    description: "AI and ML projects available for contributions during Hacktoberfest 2024.",
    keywords: ['ai', 'ml', 'machine learning', 'artificial intelligence'],
  },
  {
    name: "Management-App",
    link: "https://github.com/GDG-GTBIT/Management-App",
    description: "A Dart-based application for managing organizational activities and events.",
    keywords: ['app', 'management', 'dart'],
  },
  {
    name: "Krishi-Gyan",
    link: "https://github.com/GDG-GTBIT/Krishi-Gyan",
    description: "A platform providing agricultural knowledge and resources, aimed at supporting farmers.",
    keywords: ['agriculture', 'web', 'resources'],
  },
  {
    name: "solana-app",
    link: "https://github.com/GDG-GTBIT/solana-app",
    description: "A Dart project related to Solana blockchain development.",
    keywords: ['solana', 'blockchain', 'app', 'dart'],
  },
  {
    name: "Cybersecurity",
    link: "https://github.com/GDG-GTBIT/Cybersecurity",
    description: "A repository focusing on cybersecurity projects and resources.",
    keywords: ['cyber', 'security', 'resources'],
  }
];
