package com.example.demo.bean;

public class DemoC {

    private String classid;
    private Integer page;

    @Override
    public String toString() {
        return "DemoC{" +
                "classid='" + classid + '\'' +
                ", page=" + page +
                '}';
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }
}
