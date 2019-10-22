package com.example.demo.service;

import com.example.demo.Model.Openid_Page;
import com.example.demo.bean.*;
import com.example.demo.dao.HomeworkMapper;
import com.example.demo.dao.ReplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Homework Service
 **************************************************************************/

@Service
public class HomeworkService {

    @Autowired
    HomeworkMapper homeworkMapper;

    @Autowired
    ReplyMapper replyMapper;

    public ResultObject getWorkByOpenid(String openid, Integer page){
        return new ResultObject(homeworkMapper.getWorkByOpenid(openid, page));
    }

    public ResultObject getWorkByClassInOpenid(String openid, Integer page){
        return new ResultObject(homeworkMapper.getWorkByClassInOpenid(openid, page));
    }

    public ResultObject getClassHomework(String classid, Integer page){
        return new ResultObject(homeworkMapper.getClassWork(classid, page));
    }

    public ResultObject getHomeworkByCode(String code){
        return new ResultObject(homeworkMapper.getWorkByCode(code));
    }

    public ResultObject getworkByIdAndCode(Integer id, String code){
        return new ResultObject(homeworkMapper.getWorkByIdAndCode(id, code));
    }

    public void insert(Homework homework){
        String topic = homework.getTopic();
        String content = homework.getContent();
        if ("".equals(homework.getImgurl()))
            homework.setImgurl("default.jpg");
        try {
            homework.setTopic(URLDecoder.decode(topic, "UTF-8"));
            homework.setContent(URLDecoder.decode(content, "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        homeworkMapper.insertWork(homework);
    }

    public void deleteHomework(Integer id){
        // 删除该 homework 下的所有解答
        replyMapper.deleteByCodeid(homeworkMapper.getWorkById(id).getCode() + homeworkMapper.getWorkById(id).getId());
        homeworkMapper.deleteHomeworkById(id);
    }

}
