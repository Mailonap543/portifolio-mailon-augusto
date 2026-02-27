package com.portifolio.mailon_augusto.dto;

import java.util.List;

public record ProfileResponseDTO(
        String nome,
        String email,
        String telefone,
        String whatsappUrl,
        String bio,
        String githubUser,
        List<ProjectDTO> projetos,
        List<CertificadoDTO> certificados
) {}