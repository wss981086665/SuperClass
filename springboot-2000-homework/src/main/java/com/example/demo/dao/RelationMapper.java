package com.example.demo.dao;

import com.example.demo.bean.Relation;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Relation Mapper
 **************************************************************************/

@Mapper
@Component(value = "relationMapper")
public interface RelationMapper {

    @Select("SELECT * FROM SD_Relation WHERE openid=#{openid} AND code=#{code}")
    public Relation getRelation(@Param("openid") String openid,
                                @Param("code") String code);

    @Select("SELECT a1.code,courseName FROM (SELECT * FROM SD_Relation WHERE openid=#{openid}) as a1 left join SD_Course a2 on a1.code=a2.code;")
    public List<HashMap<String, String>> getByOpenid(String openid);

    @Select("SELECT * FROM SD_Relation WHERE code=#{code}")
    public List<Relation> getByCode(String code);

    // 获取该 课程code 下的用户信息
    @Select("SELECT a2.name,a2.gender FROM (SELECT openid FROM SD_Relation WHERE code=#{code}) a1 " +
            "INNER JOIN SD_User a2 ON a1.openid=a2.openid")
    public List<HashMap<String, String>> getUserByCode(String code);

    @Insert("INSERT INTO SD_Relation(openid,code,isDelete,con1,con2) VALUES(#{openid},#{code},#{isDelete},#{con1},#{con2})")
    public void insert(Relation relation);

    @Update("DELETE FROM SD_Relation WHERE id=#{id}")
    public void deleteById(Integer id);

}
