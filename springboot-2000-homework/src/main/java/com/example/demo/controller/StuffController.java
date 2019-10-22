package com.example.demo.controller;

import com.example.demo.bean.ResultObject;
import com.example.demo.bean.Stuff;
import com.example.demo.service.StuffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/stuff")
public class StuffController {

    @Autowired
    StuffService stuffService;

    @GetMapping("/getById")
    public ResultObject getById(@RequestParam(value = "id") Integer id) {
        return stuffService.getById(id);
    }

    @GetMapping("/getTitle")
    public ResultObject getTitle() {
        return stuffService.getTitle();
    }

    @PostMapping("/insert")
    public void insert(HttpServletRequest request) {
        String title = request.getParameter("title");
        String content = request.getParameter("content");

        stuffService.insert(
                new Stuff(title, content)
        );
    }

}
