package com.example.demo.controller;

import com.example.demo.bean.Homework;
import com.example.demo.bean.ResultObject;
import com.example.demo.service.HomeworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-02
 *Description: HomeWork 控制器
 **************************************************************************/

@CrossOrigin
@RestController
@RequestMapping("/homework")
public class HomeworkController {

    @Autowired
    HomeworkService homeworkService;

    // 获取homework
    @RequestMapping(value = "/gethomeworkbyopenid",method = RequestMethod.GET)
    public ResultObject getWorkByOpenid(String openid, Integer page){
        return homeworkService.getWorkByOpenid(openid, page);
    }

    // // 查找已添加课程中的Homework
    @RequestMapping(value = "/getHomeworkByClassInOpenid",method = RequestMethod.GET)
    public ResultObject getWorkByClassInOpenid(String openid, Integer page){
        return homeworkService.getWorkByClassInOpenid(openid, page);
    }

    // 获取班级的homework
    @RequestMapping(value = "/getclassshomework",method = RequestMethod.GET)
    public ResultObject getClassHomework(String classid, Integer page){
        return homeworkService.getClassHomework(classid, page);
    }

    // 根据code获取homework
    @RequestMapping(value = "/getByCode",method = RequestMethod.GET)
    public ResultObject getHomeworkByCode(@RequestParam(value="code",defaultValue = "null") String code){
        return homeworkService.getHomeworkByCode(code);
    }

    // 根据id和code获取homework
    @GetMapping(value = "/getByIdAndCode")
    public ResultObject getWorkByIdAndCode(@RequestParam(value = "id") Integer id,
                                           @RequestParam(value = "code") String code){
        return homeworkService.getworkByIdAndCode(id, code);
    }

    // 添加homework
    @RequestMapping(value = "/insert",method = RequestMethod.POST)
    public void insertHomework(Homework homework){
        homeworkService.insert(homework);
    }

    // 删除homework
    @RequestMapping(value = "/deletehomeworkbyid",method = RequestMethod.GET)
    public void deleteHomework(@RequestParam(value="id") Integer id){
        homeworkService.deleteHomework(id);
    }
    
}
