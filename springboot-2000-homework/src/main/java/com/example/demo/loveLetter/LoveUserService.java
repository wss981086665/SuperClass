package com.example.demo.loveLetter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class LoveUserService {

    @Autowired
    LoveUserMapper loveUserMapper;

    public void insertUser(LoveUser loveUser) {
        loveUserMapper.insertUser(loveUser);
    }

    public Integer getByUserName(String username, String password) {
        ArrayList<LoveUser> list = loveUserMapper.getByUserName(username, password);
        if(list.size() == 0) return 0;
        else return 1;
    }

}
