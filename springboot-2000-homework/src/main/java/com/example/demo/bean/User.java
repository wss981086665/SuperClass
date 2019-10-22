package com.example.demo.bean;

public class User {

    private Integer id;
    private String code;
    private String openid;
    private Integer gender;
    private String name;
    private String creatTime;
    private Integer isDelete;
    private String con1;
    private String con2;
    private String con3;
    private String con4;
    private String con5;

    public User() {

    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", openid='" + openid + '\'' +
                ", gender=" + gender +
                ", name='" + name + '\'' +
                ", creatTime='" + creatTime + '\'' +
                ", isDelete=" + isDelete +
                ", con1='" + con1 + '\'' +
                ", con2='" + con2 + '\'' +
                ", con3='" + con3 + '\'' +
                ", con4='" + con4 + '\'' +
                ", con5='" + con5 + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreatTime() {
        return creatTime;
    }

    public void setCreatTime(String creatTime) {
        this.creatTime = creatTime;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    public String getCon1() {
        return con1;
    }

    public void setCon1(String con1) {
        this.con1 = con1;
    }

    public String getCon2() {
        return con2;
    }

    public void setCon2(String con2) {
        this.con2 = con2;
    }

    public String getCon3() {
        return con3;
    }

    public void setCon3(String con3) {
        this.con3 = con3;
    }

    public String getCon4() {
        return con4;
    }

    public void setCon4(String con4) {
        this.con4 = con4;
    }

    public String getCon5() {
        return con5;
    }

    public void setCon5(String con5) {
        this.con5 = con5;
    }
}
