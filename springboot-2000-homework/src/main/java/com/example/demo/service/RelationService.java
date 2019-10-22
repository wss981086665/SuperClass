package com.example.demo.service;

import com.example.demo.bean.Relation;
import com.example.demo.bean.ResultObject;
import com.example.demo.dao.RelationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: Relation Service
 **************************************************************************/

@Service
public class RelationService {

    @Autowired
    RelationMapper relationMapper;

    public Relation getRelation(String openid, String code) {
        return relationMapper.getRelation(openid, code);
    }

    public ResultObject getByOpenid(String openid){
        return new ResultObject(relationMapper.getByOpenid(openid));
    }

    public ResultObject getByCode(String code){
        return new ResultObject(relationMapper.getByCode(code));
    }

    public ResultObject getUserByCode(String code){
        return new ResultObject(relationMapper.getUserByCode(code));
    }

    public ResultObject insert(Relation relation_t){
        Relation relation = getRelation(relation_t.getOpenid(), relation_t.getCode());
        if(relation == null) {
            relationMapper.insert(relation_t);
            return new ResultObject("success");
        } else {
            return new ResultObject("exist");
        }
    }

    public void deleteById(Integer id){
        relationMapper.deleteById(id);
    }

}
