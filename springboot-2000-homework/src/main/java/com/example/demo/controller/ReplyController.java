package com.example.demo.controller;

import com.example.demo.bean.Reply;
import com.example.demo.bean.ResultObject;
import com.example.demo.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/reply")
public class ReplyController {

    @Autowired
    ReplyService replyService;

    // 获取 用户 的所有回复
    @RequestMapping(value = "/getByOpenid",method = RequestMethod.GET)
    public ResultObject getReply(@RequestParam(value="openid",defaultValue = "null") String openid){
        return replyService.getReply(openid);
    }

    // 根据 codeid 获取回复
    @RequestMapping(value = "/getById",method = RequestMethod.GET)
    public ResultObject getReplyById(@RequestParam(value="id",defaultValue = "null") Integer id){
        return replyService.getById(id);
    }

    // 根据 codeid 获取回复
    @RequestMapping(value = "/getByCodeid",method = RequestMethod.GET)
    public ResultObject getByIdAndCode(@RequestParam(value="codeid",defaultValue = "null") String codeid){
        return replyService.getByCodeid(codeid);
    }

    // 添加 reply
    @RequestMapping(value = "/insert",method = RequestMethod.POST)
    public void insertReply(Reply reply){
        replyService.insert(reply);
    }

    // 插入成绩
    @RequestMapping(value = "/putScore", method = RequestMethod.POST)
    public void putScore(@RequestParam(value = "id") Integer id,
                         @RequestParam(value = "factor1") Integer factor1) {
        replyService.putScore(id, factor1);
    }

    // 删除 reply
    @RequestMapping(value = "/deletByCodeid",method = RequestMethod.GET)
    public void deleteReply(@RequestParam(value="codeid") String codeid){
        replyService.deleteByCodeid(codeid);
    }

}
