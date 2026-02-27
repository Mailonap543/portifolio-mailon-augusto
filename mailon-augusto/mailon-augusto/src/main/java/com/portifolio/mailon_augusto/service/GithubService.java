package com.portifolio.mailon_augusto.service;

import com.portifolio.mailon_augusto.dto.ProjectDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@Service
public class GithubService {

    private final WebClient webClient;

    public GithubService(WebClient.Builder builder) {
        this.webClient = builder.baseUrl("https://api.github.com").build();
    }

    public Flux<ProjectDTO> getRepoInfo(String username) {
        return this.webClient.get()
                .uri("/users/{user}/repos?sort=updated&per_page=6", username)
                .retrieve()
                .bodyToFlux(ProjectDTO.class);
    }
}