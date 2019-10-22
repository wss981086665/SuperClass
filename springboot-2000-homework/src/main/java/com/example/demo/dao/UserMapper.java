package com.example.demo.dao;

import com.example.demo.bean.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;
import java.util.List;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: User Mapper
 **************************************************************************/

@Mapper
@Component(value = "userMapper")
public interface UserMapper {

    @Select("SELECT * FROM SD_User WHERE openid=#{openid}")
    public List<User> getUserByOpenid(String openid);

    @Insert("INSERT INTO SD_User(code,openid,gender,name,creatTime,isDelete,con1,con2,con3,con4,con5) VALUES(#{code},#{openid},#{gender},#{name},#{creatTime},#{isDelete},#{con1},#{con2},#{con3},#{con4},#{con5})")
    public void insertUser(User user);

    @Update("UPDATE SD_User SET name=#{name} WHERE code=#{code}")
    public void updateNameByCode(String name, String code);

}
