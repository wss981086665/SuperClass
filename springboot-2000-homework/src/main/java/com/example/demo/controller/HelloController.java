package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
public class HelloController {

    @GetMapping("/hello")
    @ResponseBody
    public String helloworld() {
        System.out.println("Hello World!");
        return "Hello World!";
    }

}
