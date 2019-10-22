package com.example.demo.bean;

// 学生与班级对应的关系、包括该班级对应的教师的openid与avatarUrl的信息

public class Relation {

    private Integer id;
    private String openid;    // 用户 openid
    private String code;      // 班级 code
    private Integer isDelete; // 关系是否已失效

    private String con1;
    private String con2;

    @Override
    public String toString() {
        return "Relation{" +
                "id=" + id +
                ", openid='" + openid + '\'' +
                ", code='" + code + '\'' +
                ", isDelete=" + isDelete +
                ", con1='" + con1 + '\'' +
                ", con2='" + con2 + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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
}
