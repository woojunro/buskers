package kr.ac.yonsei.yctech.buskers.main;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping("/main")
    public String mainPage(){
        return "hello world!";
    }
}
