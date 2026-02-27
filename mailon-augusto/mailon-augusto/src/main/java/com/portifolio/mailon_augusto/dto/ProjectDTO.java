package com.portifolio.mailon_augusto.dto;

public record ProjectDTO(
        String name,
        String description,
        String html_url,
        String language,
        int stargazers_count,
        String updated_at
) {}

