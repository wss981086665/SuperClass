package com.example.demo.controller;

import com.example.demo.bean.Relation;
import com.example.demo.bean.ResultObject;
import com.example.demo.service.RelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Relation 控制器
 **************************************************************************/

@CrossOrigin
@RestController
@RequestMapping("/relation")
public class RelationController {

    @Autowired
    RelationService relationService;

    // 根据openid获取relation
    @RequestMapping(value = "/getByOpenid",method = RequestMethod.GET)
    public ResultObject getByOpenid(@RequestParam(value="openid",defaultValue = "null") String openid){
        return relationService.getByOpenid(openid);
    }

    // code
    @RequestMapping(value = "/getByCode",method = RequestMethod.GET)
    public ResultObject getRelationByClassid(@RequestParam(value="code",defaultValue = "null") String code){
        return relationService.getByCode(code);
    }

    // 根据classid获取student信息
    @RequestMapping(value = "/getUserByCode",method = RequestMethod.GET)
    public ResultObject getStudentByClassid(@RequestParam(value="code",defaultValue = "null") String code){
        return relationService.getUserByCode(code);
    }

    // 添加 relation
    @RequestMapping(value = "/insert",method = RequestMethod.POST)
    public ResultObject insert(Relation relation){
        return relationService.insert(relation);
    }

    // 删除 relation
    @RequestMapping(value = "/deleteById",method = RequestMethod.GET)
    public void deleteRelation(@RequestParam(value="id") Integer id){
        relationService.deleteById(id);
    }

}
