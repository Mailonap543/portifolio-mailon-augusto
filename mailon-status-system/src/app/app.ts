import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PortfolioData } from './models/portfolio.model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  portfolioData: PortfolioData | null = null;
  isLoading = true;
  hasError = false;
  navbarOpen = false;
  scrolled = false;
  activeSection = 'home';
  currentYear = new Date().getFullYear();

  skills = [
    { name: 'Java / Spring Boot', level: 90, icon: 'bi-cup-hot-fill' },
    { name: 'Angular / TypeScript', level: 85, icon: 'bi-code-slash' },
    { name: 'React', level: 75, icon: 'bi-braces' },
    { name: 'SQL / Banco de Dados', level: 80, icon: 'bi-database-fill' },
    { name: 'Docker / DevOps', level: 70, icon: 'bi-box-fill' },
    { name: 'Git / GitHub', level: 88, icon: 'bi-git' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Carrega dados de fallback imediatamente para exibir a UI sem depender da API
    this.portfolioData = this.getDadosFallback();
    this.isLoading = false;
    setTimeout(() => this.checkAnimations(), 200);
    // Tenta buscar dados atualizados da API em background
    this.carregarPortfolio();
  }

  carregarPortfolio(): void {
    this.http.get<PortfolioData>(`${environment.apiUrl}/portfolio`)
      .pipe(timeout(5000))
      .subscribe({
        next: (data) => {
          this.portfolioData = data;
          setTimeout(() => this.checkAnimations(), 100);
        },
        error: (err) => {
          console.info('API não disponível, exibindo dados locais.');
        }
      });
  }

  private getDadosFallback(): PortfolioData {
    return {
      nome: 'Mailon Augusto',
      bio: 'Desenvolvedor Full Stack apaixonado por tecnologia e inovação',
      githubUser: 'Mailonap543',
      linkedinUrl: 'https://linkedin.com',
      email: 'mailon@email.com',
      location: 'Brasil',
      projetos: [
        {
          name: 'Portfólio Full Stack',
          description: 'Sistema de portfólio com Angular e Spring Boot, com design cyberpunk e integração com a API do GitHub.',
          html_url: 'https://github.com/Mailonap543/portifolio-mailon-augusto',
          language: 'TypeScript',
          stargazers_count: 0,
          forks_count: 0
        },
        {
          name: 'Sistema de Status',
          description: 'Aplicação Angular para exibição de status e projetos em tempo real com tema gaming.',
          html_url: 'https://github.com/Mailonap543',
          language: 'Java',
          stargazers_count: 0,
          forks_count: 0
        },
        {
          name: 'API REST Spring Boot',
          description: 'Backend robusto com Spring Boot, JPA, MySQL e documentação Swagger.',
          html_url: 'https://github.com/Mailonap543',
          language: 'Java',
          stargazers_count: 0,
          forks_count: 0
        }
      ]
    };
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar(): void {
    this.navbarOpen = false;
  }

  abrirContato(): void {
    if (this.portfolioData?.whatsappUrl) {
      window.open(this.portfolioData.whatsappUrl, '_blank');
    } else {
      this.scrollToSection('contato');
    }
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeNavbar();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
    this.updateActiveSection();
    this.checkAnimations();
  }

  private updateActiveSection(): void {
    const sections = ['home', 'sobre', 'skills', 'projetos', 'contato'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = id;
          break;
        }
      }
    }
  }

  checkAnimations(): void {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('animated');
      }
    });
  }

  getLangColor(lang: string | null): string {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f7df1e',
      'Java': '#b07219',
      'Python': '#3572A5',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'SCSS': '#c6538c',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'C#': '#178600',
      'PHP': '#4F5D95',
    };
    return lang ? (colors[lang] || '#6c757d') : '#6c757d';
  }

  getGithubUrl(): string {
    return `https://github.com/${this.portfolioData?.githubUser || 'Mailonap543'}`;
  }
}
