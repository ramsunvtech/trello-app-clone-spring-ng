package io.trello.trelloapp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
            .title("Trello Clone App API Docs")
            .version("0.1")
            .description("Below Docs helps to understand the Trello App Documentation")
            .termsOfService("http://swagger.io/terms/")
            .license(new License().name("Apache 2.0").url("http://springdoc.org")));
    }
}
