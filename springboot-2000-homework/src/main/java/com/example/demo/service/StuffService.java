package com.example.demo.service;

import com.example.demo.bean.ResultObject;
import com.example.demo.bean.Stuff;
import com.example.demo.dao.StuffMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.util.HtmlUtils;

@Service
public class StuffService {

    @Autowired
    StuffMapper stuffMapper;

    public ResultObject getById(Integer id) {
        Stuff stuff = stuffMapper.getById(id);
        String content = stuff.getContent();
        content = HtmlUtils.htmlUnescape(content);
        stuff.setContent(content);

        return new ResultObject(stuff);
    }

    public ResultObject getTitle() {
        return new ResultObject(stuffMapper.getTitle());
    }

    public void insert(Stuff stuff) {
        // 需要对富文本内容进行处理
        // 如：处理特殊标签，像尖括号这种特殊表会被MySQL数据库误会
        // 取出时需要使用  htmlUnescape  进行解析
        String content = stuff.getContent();
        content = HtmlUtils.htmlEscapeHex(content);
        stuff.setContent(content);

        stuffMapper.insert(stuff);
    }

}
