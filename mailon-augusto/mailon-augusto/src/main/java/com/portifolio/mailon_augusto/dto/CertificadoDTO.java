package com.portifolio.mailon_augusto.dto;

public record CertificadoDTO(
        String nome,
        String instituicao,
        String dataEmissao,
        String urlCertificado,
        String imagemIcone
) {}