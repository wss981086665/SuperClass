package com.example.demo.service;

import com.example.demo.bean.DemoB;
import com.example.demo.bean.Course;
import com.example.demo.bean.ResultObject;
import com.example.demo.dao.CourseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Course Service
 **************************************************************************/

@Service
public class CourseService {

    @Autowired
    CourseMapper courseMapper;

    public ResultObject getByOpenid(String openid){
        return new ResultObject(courseMapper.getByOpenid(openid));
    }

    // 获取课程名称与code的对应关系
    public Map<String,Object> getSomeInfo(String openid){
        Map<String,Object> map = new HashMap<String,Object>();
        // 添加课程名称
        map.put("courseNames",courseMapper.getSomeInfo(openid).stream()
                .map(DemoB::getCourseName)
                .collect(Collectors.toList()));
        // 添加课程ID
        map.put("codes",courseMapper.getSomeInfo(openid).stream()
                .map(DemoB::getCode)
                .collect(Collectors.toList()));
        return map;
    }

    public ResultObject getByCode(String code){
        return new ResultObject(courseMapper.getByCode(code));
    }

    public void insert(Course course){
        String courseName = course.getCourseName();
        try {
            course.setCourseName(URLDecoder.decode(courseName, "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        courseMapper.insert(course);
    }

    public void deleteById(Integer id){
        courseMapper.deleteById(id);
    }

}
