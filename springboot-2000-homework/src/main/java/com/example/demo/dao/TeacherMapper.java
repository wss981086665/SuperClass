package com.example.demo.dao;

import com.example.demo.bean.Teacher;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Teacher Mapper
 **************************************************************************/

@Mapper
@Component(value = "teacherMapper")
public interface TeacherMapper {

    @Insert("INSERT INTO teacher(openid,nickName,school,institute,profession,course,name,tell,pros1,pros2,pros3,pros4,pros5) VALUES(#{openid},#{nickName},#{school},#{institute},#{profession},#{course},#{name},#{tell},#{pros1},#{pros2},#{pros3},#{pros4},#{pros5})")
    public void insertTeacher(Teacher teacher);

}
