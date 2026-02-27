package com.portifolio.mailon_augusto.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/api/github")
@CrossOrigin(origins = "http://localhost:4200") // Libera para o seu Angular futuramente
public class GithubController {

    private final WebClient webClient;

    public GithubController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder
                .baseUrl("https://api.github.com")
                .build();
    }

    @GetMapping("/repos")
    public Flux<Object> getMyRepos() {
        return this.webClient.get()
                .uri("/users/Mailonap543/repos")
                .retrieve()
                .bodyToFlux(Object.class);
    }
}