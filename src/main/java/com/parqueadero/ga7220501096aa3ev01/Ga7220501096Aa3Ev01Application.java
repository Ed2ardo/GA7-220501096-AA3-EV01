package com.parqueadero.ga7220501096aa3ev01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.parqueadero.ga7220501096aa3ev01.repositories")
public class Ga7220501096Aa3Ev01Application {

	public static void main(String[] args) {
		SpringApplication.run(Ga7220501096Aa3Ev01Application.class, args);
	}

} 
