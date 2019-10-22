package com.example.demo.controller;

import com.example.demo.service.SqlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
@RequestMapping("/sql")
public class SqlController {

    @Autowired
    SqlService sqlService;

    @GetMapping("/test")
    public void test() throws SQLException {
        sqlService.test();
    }

}
