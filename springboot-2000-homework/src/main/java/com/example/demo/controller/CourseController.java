package com.example.demo.controller;

import com.example.demo.bean.Course;
import com.example.demo.bean.ResultObject;
import com.example.demo.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Class 控制器
 **************************************************************************/

@CrossOrigin
@RestController
@RequestMapping("/course")
public class CourseController {

    @Autowired
    CourseService courseService;

    // 根据 openid 获取所有的课程信息
    @RequestMapping(value = "/getByOpenid",method = RequestMethod.GET)
    public ResultObject getByOpenid(@RequestParam(value="openid",defaultValue = "null") String openid){
        return courseService.getByOpenid(openid);
    }

    // 根据 openid获取 课程名 与 课程ID 对应的信息
    @RequestMapping(value = "/getSomeInfo",method = RequestMethod.GET)
    public Map<String,Object> getSomeInfo(@RequestParam(value="openid",defaultValue = "null") String openid){
        return courseService.getSomeInfo(openid);
    }

    // 根据 课程ID 获取 课程信息
    @RequestMapping(value = "/getByCode",method = RequestMethod.GET)
    public ResultObject getByCode(@RequestParam(value="code",defaultValue = "null") String code){
        return courseService.getByCode(code);
    }

    // 插入新的课程信息
    @RequestMapping(value = "/insert",method = RequestMethod.POST)
    public void insert(Course course){
        courseService.insert(course);
    }

    // 删除课程信息
    @RequestMapping(value = "/deleteById",method = RequestMethod.GET)
    public void deleteById(@RequestParam(value="id") Integer id){
        courseService.deleteById(id);
    }

}
