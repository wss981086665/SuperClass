package com.example.demo.dao;

import com.example.demo.bean.Homework;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Homework Mapper
 **************************************************************************/

@Mapper
@Component(value = "homeworkMapper")
public interface HomeworkMapper {

    @Select("SELECT * FROM SD_Homework WHERE id=#{id}")
    public Homework getWorkById(Integer id);

    @Select("SELECT * FROM SD_Homework WHERE openid=#{openid} order by date desc limit #{page},10")
    public List<Homework> getWorkByOpenid(@Param("openid") String openid,
                                          @Param("page") Integer page);

    // 查找已添加课程中的Homework
    @Select("SELECT t2.* FROM SD_Relation AS t1 INNER JOIN SD_Homework AS t2 " +
            "ON t1.code=t2.classid WHERE t1.openid=#{openid} " +
            "ORDER BY date DESC LIMIT #{page},10")
    public List<Homework> getWorkByClassInOpenid(@Param("openid") String openid,
                                                 @Param("page") Integer page);

    @Select("SELECT * FROM SD_Homework WHERE classid=#{classid} order by date desc limit #{page},10")
    public List<Homework> getClassWork(@Param("classid") String classid,
                                       @Param("page") Integer page);

    @Select("SELECT * FROM SD_Homework WHERE code=#{code}")
    public List<Homework> getWorkByCode(@Param("code") String code);

    @Select("SELECT * FROM SD_Homework WHERE id=#{id} AND code=#{code}")
    public Homework getWorkByIdAndCode(@Param("id") Integer id, @Param("code") String code);

    @Insert("INSERT INTO SD_Homework(code,classid,imgurl,openid,topic,content,date,isDelete,factor1,factor2,factor3,factor4,factor5) VALUES(#{code},#{classid},#{imgurl},#{openid},#{topic},#{content},#{date},#{isDelete},#{factor1},#{factor2},#{factor3},#{factor4},#{factor5})")
    public void insertWork(Homework homework);

    @Update("DELETE FROM SD_Homework WHERE id=#{id}")
    public void deleteHomeworkById(Integer id);

}
