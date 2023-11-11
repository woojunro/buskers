package kr.ac.yonsei.yctech.buskers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BuskersApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuskersApplication.class, args);
	}

}
