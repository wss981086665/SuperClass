package com.example.demo.controller;

import com.example.demo.bean.ResultObject;
import com.example.demo.bean.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: User 控制器
 **************************************************************************/

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    // 获取用户注册信息
    @RequestMapping(value = "/getUser",method = RequestMethod.GET)
    public ResultObject getUser(@RequestParam(value="openid") String openid){
        return userService.getUser(openid);
    }

    // 获取用户详细信息
    @RequestMapping(value = "/getUserInfo",method = RequestMethod.GET)
    public ResultObject getUserInfo(@RequestParam(value="code") String code){
        return userService.getUserInfo(code);
    }

     // 添加新的用户
    @RequestMapping(value = "/insertUser",method = RequestMethod.GET)
    public ResultObject insertUser(User user){
        return userService.insert(user);
    }

    // 获取用户 userid
    @RequestMapping(value = "/getCode",method = RequestMethod.GET)
    public ResultObject getCode(String openid){
        return userService.getCode(openid);
    }

    // 获取用户 name
    @RequestMapping(value = "/getName",method = RequestMethod.GET)
    public ResultObject getName(String openid){
        return userService.getName(openid);
    }

    // 更新用户身份
    @RequestMapping(value = "/updateUser",method = RequestMethod.GET)
    public void updateForumuser(String name, String code){
        userService.update(name, code);
    }
}
