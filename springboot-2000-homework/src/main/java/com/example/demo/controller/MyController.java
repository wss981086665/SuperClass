package com.example.demo.controller;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Random;

@RestController
@CrossOrigin
@RequestMapping("/handle")
public class MyController {

    //图片上传
    //@RequestMapping(value = "/uploadfile",method = RequestMethod.POST)
    @PostMapping("/uploadfile")
    public String lunboData(HttpServletRequest request, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {

        request.setCharacterEncoding("UTF-8");

        if(!file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            String path = null;

            String type = fileName.indexOf(".") != -1 ? fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length()) : null;

            if (type != null) {
                if ("GIF".equals(type.toUpperCase())||"PNG".equals(type.toUpperCase())||"JPG".equals(type.toUpperCase())) {

                    // 自定义的文件名称
                    String trueFileName = String.valueOf(System.currentTimeMillis()) + + new Random().nextInt(10000) + "." + type;

                    // 设置存放图片文件的路径
                    path = "/www/wwwroot/www.xztywss.top/img/homeworkup/" + trueFileName;

//                    System.out.println("存放图片文件的路径:" + path);

                    File dest = new File(path);

                    //判断文件父目录是否存在
                    if (!dest.getParentFile().exists()) {
                        dest.getParentFile().mkdir();
                    }

                    file.transferTo(dest);

                    return trueFileName;
                }else {
                    return "error";
                }
            }else {
                return "error";
            }
        }else {
            return "error";
        }
    }

}
