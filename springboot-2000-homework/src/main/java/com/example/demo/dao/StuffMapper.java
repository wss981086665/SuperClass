package com.example.demo.dao;

import com.example.demo.bean.Stuff;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

// Design For 青年大学习
@Mapper
@Component(value = "stuffMapper")
public interface StuffMapper {

    @Select("SELECT * FROM SD_Stuff WHERE id=#{id}")
    public Stuff getById(Integer id);

    @Select("SELECT id,title FROM SD_Stuff")
    public List<Map<String, String>> getTitle();

    @Insert("INSERT INTO SD_Stuff(title,content,con1) VALUES(#{title},#{content},#{con1})")
    public void insert(Stuff stuff);


}
