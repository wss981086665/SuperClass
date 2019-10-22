package com.example.demo.service;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.json.JSONObject;

public class ToolService {

    /**
     * 获取API访问token
     * 该token有一定的有效期，需要自行管理，当失效时需重新获取.
     * @return assess_token 示例：
     * "24.460da4889caad24cccdb1fea17221975.2592000.1491995545.282335-1234567"
     */
    public static String getToken() {

        String client_id = "hfCxgj5awIUKb2gdO2aTbBwa";
        String client_secret = "sXF496ISPLGv8phoiOFNoRPyiA5D7exk";
        String access_token = "none";

        try {
            OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                    .url("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret)
                    .build();
            Response response = client.newCall(request).execute();
            String result = response.body().string();
            if (!response.isSuccessful()) {
                result = "服务器端错误: " + response;
            }

            // 将结果转化为json格式
            JSONObject jsonpObject = new JSONObject(result);
            // 获取access_token
            access_token = jsonpObject.getString("access_token");

            return access_token;
        } catch (Exception e) {
            System.out.println(e.getStackTrace());
        }
        return null;
    }

}
