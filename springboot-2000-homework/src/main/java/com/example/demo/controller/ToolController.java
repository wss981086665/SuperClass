package com.example.demo.controller;

import com.example.demo.auxiliary.Base64Util;
import com.example.demo.auxiliary.FileUtil;
import com.example.demo.auxiliary.HttpUtil;
import com.example.demo.bean.ResultObject;
import com.example.demo.service.ToolService;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.net.URLEncoder;

@CrossOrigin
@RequestMapping("/tool")
@RestController
public class ToolController {

    private String accessToken = "";

    @RequestMapping("/dish")
    public ResultObject dish(HttpServletRequest request, @RequestParam(value = "file", required = false) MultipartFile file) {
        // 注意这里仅为了简化编码每一次请求都去获取access_token，线上环境access_token有过期时间， 客户端可自行缓存，过期后重新获取。
        accessToken = ToolService.getToken();

        // 请求url
        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v2/dish";
        try {
            // 文件
            byte[] imgData = file.getBytes();
            String imgStr = Base64Util.encode(imgData);
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");

            String param = "image=" + imgParam + "&top_num=" + 1  + "&baike_num=" + 1;

            String result = HttpUtil.post(url, accessToken, param);

            JSONObject json = new JSONObject(result);
            JSONObject answer = (JSONObject) json.getJSONArray("result").get(0);

            String name = answer.getString("name");
            String description = "";
            if(!"非菜".equals(name)) {
                description = answer.getJSONObject("baike_info").getString("description");
            } else {
                description = "图片中不包含菜品！";
            }
            return new ResultObject(180, description, name);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
