package com.example.demo.loveLetter;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Mapper
@Component(value = "loveUserMapper")
public interface LoveUserMapper {

    @Insert("INSERT INTO user(username,password) VALUES(#{username},#{password})")
    public void insertUser(LoveUser loveUser);

    @Select("SELECT * FROM user WHERE username={#username} AND password={#password}")
    public ArrayList<LoveUser> getByUserName(@Param(value = "username") String username,
                                             @Param(value = "password") String password);

}
