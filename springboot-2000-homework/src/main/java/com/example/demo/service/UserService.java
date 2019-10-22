package com.example.demo.service;

import com.example.demo.bean.ResultObject;
import com.example.demo.bean.User;
import com.example.demo.dao.UserMapper;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

/**************************************************************************
 *Copyright: 南国猫觅海
 *Author: wss
 *Date:2019-03-01
 *Description: User Service
 **************************************************************************/

@Service
public class UserService {

    @Autowired
    UserMapper userMapper;

    public ResultObject getUser(String openid){
        List<User> users = userMapper.getUserByOpenid(openid);
        if (users.size() == 0)
            return new ResultObject(400,"null","null");
        return new ResultObject(180,"success",users.get(0));
    }

    public ResultObject getUserInfo(String code){
        //基本信息
        String appId = "wxd4c54893e1e4ed01";//填写appid
        String appSecret = "8120723f4eda0653d952eaae5e33013f";//填写对应appsecret


        try {
            OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                    .url("https://api.weixin.qq.com/sns/jscode2session?appid="+appId+"&secret="+appSecret+"&js_code="+code+"&grant_type=authorization_code")
                    .build();
            Response response = client.newCall(request).execute();
            String reslut = response.body().string();
            if (!response.isSuccessful()) {
                reslut = "服务器端错误: " + response;
                return new ResultObject(400, "false", reslut);
            }
            return new ResultObject(180, "success", reslut);
        }catch (Exception e){
            return new ResultObject(400, "error", "error");
        }
    }

    public ResultObject getCode(String openid){
        List<User> users = userMapper.getUserByOpenid(openid);
        if (users.size() == 0)
            return new ResultObject(400,"null","null");
        return new ResultObject(180,"success",users.get(0).getCode());
    }

    public ResultObject getName(String openid){
        List<User> users = userMapper.getUserByOpenid(openid);
        if (users.size() == 0)
            return new ResultObject(400,"null","null");
        return new ResultObject(180,"success",users.get(0).getName());
    }

    public ResultObject insert(User user){
        // 未查询到登陆者信息，则录入登陆着信息
        if(getUser(user.getOpenid()).getCode() == 400){
            user.setCode(String.valueOf((int)((Math.random()*9+1)*10000000)));
            try {
                user.setName(URLDecoder.decode(user.getName(), "UTF-8"));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            userMapper.insertUser(user);
            // 将 userid 作为结果返回
            return new ResultObject(user);
        }else { // 查询到登陆着信息，返回登陆着信息
            // 向结果中加入 user
            return new ResultObject(userMapper.getUserByOpenid(user.getOpenid()).get(0));
        }
    }

    public void update(String name,String code){
        userMapper.updateNameByCode(name, code);
    }

}
