package com.portifolio.mailon_augusto.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class StatusController {

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getPlayerStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("nivelXP", 21);
        status.put("cargo", "Developer Full Stack");
        status.put("titulo", "Arquiteto de Sistemas");
        status.put("commits", 1350);
        status.put("javaPercent", 95);

        return ResponseEntity.ok(status);
    }
}