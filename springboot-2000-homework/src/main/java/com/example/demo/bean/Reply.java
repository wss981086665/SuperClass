package com.example.demo.bean;

public class Reply {

    private Integer id;
    private String codeid;  //  班级的 code 和 id
    private String openid;  // 发布人 openid
    private String imgurl;
    private String content;
    private String date;
    private Integer isDelete;

    private String factor1;
    private String factor2;
    private String factor3;
    private String factor4;
    private String factor5;

    @Override
    public String toString() {
        return "Reply{" +
                "id=" + id +
                ", codeid='" + codeid + '\'' +
                ", openid='" + openid + '\'' +
                ", imgurl='" + imgurl + '\'' +
                ", content='" + content + '\'' +
                ", date='" + date + '\'' +
                ", isDelete=" + isDelete +
                ", factor1='" + factor1 + '\'' +
                ", factor2='" + factor2 + '\'' +
                ", factor3='" + factor3 + '\'' +
                ", factor4='" + factor4 + '\'' +
                ", factor5='" + factor5 + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodeid() {
        return codeid;
    }

    public void setCodeid(String codeid) {
        this.codeid = codeid;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public String getImgurl() {
        return imgurl;
    }

    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    public String getFactor1() {
        return factor1;
    }

    public void setFactor1(String factor1) {
        this.factor1 = factor1;
    }

    public String getFactor2() {
        return factor2;
    }

    public void setFactor2(String factor2) {
        this.factor2 = factor2;
    }

    public String getFactor3() {
        return factor3;
    }

    public void setFactor3(String factor3) {
        this.factor3 = factor3;
    }

    public String getFactor4() {
        return factor4;
    }

    public void setFactor4(String factor4) {
        this.factor4 = factor4;
    }

    public String getFactor5() {
        return factor5;
    }

    public void setFactor5(String factor5) {
        this.factor5 = factor5;
    }
}
