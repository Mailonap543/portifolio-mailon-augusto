export interface Projeto {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count?: number;
  forks_count?: number;
  topics?: string[];
}

export interface PortfolioData {
  nome: string;
  bio: string;
  githubUser: string;
  whatsappUrl?: string;
  linkedinUrl?: string;
  email?: string;
  projetos: Projeto[];
  skills?: string[];
  location?: string;
  avatar_url?: string;
}
