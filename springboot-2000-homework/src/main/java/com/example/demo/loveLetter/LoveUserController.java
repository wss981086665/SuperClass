package com.example.demo.loveLetter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loveUser")
public class LoveUserController {

    @Autowired
    LoveUserService loveUserService;

    @PostMapping(value = "insert")
    public void insert(LoveUser loveUser) {
        loveUserService.insertUser(loveUser);
    }

    @GetMapping(value = "getByUserName")
    public Integer getByUserName(@RequestParam(value = "username") String username,
                                 @RequestParam(value = "password") String password) {
        return loveUserService.getByUserName(username, password);
    }

}
