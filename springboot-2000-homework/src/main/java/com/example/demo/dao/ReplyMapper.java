package com.example.demo.dao;

import com.example.demo.bean.Reply;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Reply Mapper
 **************************************************************************/

@Mapper
@Component(value = "replyMapper")
public interface ReplyMapper {

    @Select("SELECT * FROM SD_Reply WHERE openid=#{openid}")
    public List<Reply> getReplyByOpenid(String openid);

    @Select("SELECT * FROM SD_Reply WHERE id=#{id}")
    public Reply getById(Integer id);

    @Select("SELECT a1.id,name,content FROM (SELECT * FROM SD_Reply WHERE codeid=#{codeid}) a1 INNER JOIN SD_User a2 ON a1.openid=a2.openid")
    public List<HashMap<String, String>> getByCodeid(String codeid);

    @Insert("INSERT INTO SD_Reply(codeid,openid,imgurl,content,date,isDelete,factor1,factor2,factor3,factor4,factor5) VALUES(#{codeid},#{openid},#{imgurl},#{content},#{date},#{isDelete},#{factor1},#{factor2},#{factor3},#{factor4},#{factor5})")
    public void insertReply(Reply reply);

    @Update("UPDATE SD_Reply SET factor1=#{factor1} WHERE id=#{id}")
    public void putScore(@Param("id") Integer id, @Param("factor1") Integer factor1);

    // 根据 homeworkcode 删除 reply
    @Update("DELETE FROM SD_Reply WHERE codeid=#{codeid}")
    public void deleteByCodeid(String codeid);

}
