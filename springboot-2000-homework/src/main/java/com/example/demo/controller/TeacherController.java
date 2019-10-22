package com.example.demo.controller;

import com.example.demo.bean.Teacher;
import com.example.demo.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Teacher 控制器
 **************************************************************************/

@CrossOrigin
@RestController
@RequestMapping("superteacher")
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    /*插入教师申请*/
    @RequestMapping(value = "/insertteacher",method = RequestMethod.POST)
    public void insertTeacher(Teacher teacher){
        teacherService.insert(teacher);
    }

}
