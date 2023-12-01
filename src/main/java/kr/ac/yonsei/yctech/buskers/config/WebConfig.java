package kr.ac.yonsei.yctech.buskers.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

/**
 * jsonView설정
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Bean
    MappingJackson2JsonView jsonView() {
        return new MappingJackson2JsonView();
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/profile").setViewName("forward:/");
        registry.addViewController("/login-page").setViewName("forward:/");
    }
}
