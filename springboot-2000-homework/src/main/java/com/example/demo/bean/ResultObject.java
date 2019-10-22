package com.example.demo.bean;

/**
 * @Auther: 南国猫觅海
 * @Date: 19-7-15 19:11
 * @Description: 返回消息实体类
 */

public class ResultObject {

    // 后台返回码
    private int code;
    // 后台返回消息
    private String msg;
    // 结果
    private Object result;

    // 构造函数
    public ResultObject() {
        super();
        // TODO Auto-generated constructor stub
    }

    // 构造函数
    public ResultObject(int code, String msg, Object result) {
        super();
        this.code = code;
        this.msg = msg;
        this.result = result;
    }

    // 后台处理成功时使用的构造函数
    public ResultObject(Object result) {
        super();
        this.code = 0;
        this.msg = "success";
        this.result = result;
    }

    // 属性的setter、getter方法
    public int getCode() {
        return code;
    }
    public void setCode(int code) {
        this.code = code;
    }
    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
    public Object getResult() {
        return result;
    }
    public void setResult(Object result) {
        this.result = result;
    }
    @Override
    public String toString() {
        return "ResultObject [code=" + code + ", msg=" + msg + ", result=" + result + "]";
    }
}