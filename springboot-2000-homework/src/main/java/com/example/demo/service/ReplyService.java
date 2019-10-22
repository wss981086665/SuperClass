package com.example.demo.service;

import com.example.demo.bean.Reply;
import com.example.demo.bean.ResultObject;
import com.example.demo.dao.ReplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Reply Service
 **************************************************************************/

@Service
public class ReplyService {

    @Autowired
    ReplyMapper replyMapper;

    public ResultObject getReply(String openid){
        return new ResultObject(replyMapper.getReplyByOpenid(openid));
    }

    public ResultObject getById(Integer id){
        return new ResultObject(replyMapper.getById(id));
    }

    public ResultObject getByCodeid(String codeid){
        return new ResultObject(replyMapper.getByCodeid(codeid));
    }

    public void insert(Reply reply){
        String content = reply.getContent();
        if ("".equals(reply.getImgurl()))
            reply.setImgurl("default.jpg");
        try {
            reply.setContent(URLDecoder.decode(content, "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        replyMapper.insertReply(reply);
    }

    public void deleteByCodeid(String codeid){
        replyMapper.deleteByCodeid(codeid);
    }

}
