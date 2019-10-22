package com.example.demo.bean;

public class Relation_demoA {

    private String openid;
    private String classid;

    public Relation_demoA(String openid, String classid) {
        this.openid = openid;
        this.classid = classid;
    }

    @Override
    public String toString() {
        return "Relation_demoA{" +
                "openid='" + openid + '\'' +
                ", classid='" + classid + '\'' +
                '}';
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }
}
