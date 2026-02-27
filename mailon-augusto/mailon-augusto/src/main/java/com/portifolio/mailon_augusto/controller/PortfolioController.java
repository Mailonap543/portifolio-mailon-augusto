package com.portifolio.mailon_augusto.controller;

import com.portifolio.mailon_augusto.dto.CertificadoDTO;
import com.portifolio.mailon_augusto.dto.ProfileResponseDTO;
import com.portifolio.mailon_augusto.service.GithubService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import java.util.List;

@RestController
@RequestMapping("/api/v1/portfolio")
@CrossOrigin(origins = "*")
public class PortfolioController {

    private final GithubService githubService;

    public PortfolioController(GithubService githubService) {
        this.githubService = githubService;
    }

    @GetMapping
    public Mono<ProfileResponseDTO> getPortfolio() {
        String user = "Mailonap543";
        String tel = "18997224061";
        String whatsappUrl = "https://api.whatsapp.com/send?phone=" + tel;

        List<CertificadoDTO> certificados = List.of(
                new CertificadoDTO("Java Fullstack", "Oracle", "2024", "http://link.com", "assets/img.png")
        );

        return githubService.getRepoInfo(user)
                .collectList()
                .map(projetos -> new ProfileResponseDTO(
                        "Mailon Augusto",
                        "augustomailon4@gmail.com",
                        tel,
                        whatsappUrl,
                        "Desenvolvedor Full Stack ",
                        user,
                        projetos,
                        certificados
                ));
    }
}