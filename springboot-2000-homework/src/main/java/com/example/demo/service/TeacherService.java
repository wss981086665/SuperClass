package com.example.demo.service;

import com.example.demo.bean.Teacher;
import com.example.demo.dao.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Teacher Service
 **************************************************************************/

@Service
public class TeacherService {

    @Autowired
    TeacherMapper teacherMapper;

    public void insert(Teacher teacher){
        String nickName = teacher.getNickName();
        String school = teacher.getSchool();
        String institute = teacher.getInstitute();
        String profession = teacher.getProfession();
        String course = teacher.getCourse();
        String name = teacher.getName();
        String tell = teacher.getTell();
        try {
            teacher.setSchool(school == "" ? "无" : URLDecoder.decode(school, "UTF-8"));
            teacher.setName(name == "" ? "匿名" : URLDecoder.decode(name, "UTF-8"));
            teacher.setNickName(URLDecoder.decode(nickName, "UTF-8"));
            teacher.setInstitute(URLDecoder.decode(institute, "UTF-8"));
            teacher.setProfession(URLDecoder.decode(profession, "UTF-8"));
            teacher.setCourse(URLDecoder.decode(course, "UTF-8"));
            teacher.setTell(URLDecoder.decode(tell, "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        teacherMapper.insertTeacher(teacher);
    }

}
