package com.example.project.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
               // .allowedOrigins("http://localhost:50674") // Remplacez par l'URL de votre application frontend
                .allowedOrigins("http://localhost:4200") // Remplacez par l'URL de votre application frontend
                .allowedMethods("GET", "POST")
                .allowedHeaders("Content-Type")
                .allowCredentials(true);
    }
}