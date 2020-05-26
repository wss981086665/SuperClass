package com.example.demo.dao;

import com.example.demo.bean.DemoB;
import com.example.demo.bean.Course;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Course Mapper
 **************************************************************************/

@Mapper
@Component(value = "courseMapper")
public interface CourseMapper {

    @Select("SELECT code,courseName FROM SD_Course WHERE openid=#{openid}")
    public List<HashMap<String, String>> getByOpenid(String openid);

    @Select("SELECT code,courseName FROM SD_Course WHERE openid=#{openid}")
    public List<DemoB> getSomeInfo(String openid);

    @Select("SELECT * FROM SD_Course WHERE code=#{code}")
    public List<Course> getByCode(String code);

    @Insert("INSERT INTO SD_Course(code,courseName,openid,date,isDelete,con1,con2,con3,con4,con5) VALUES(#{code},#{courseName},#{openid},#{date},#{isDelete},#{con1},#{con2},#{con3},#{con4},#{con5})")
    public void insert(Course course);

    @Update("DELETE FROM SD_Course WHERE id=#{id}")
    public void deleteById(Integer id);

}
