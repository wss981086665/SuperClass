package com.example.demo.bean;

public class DemoB {

    private String courseName;
    private String code;


    @Override
    public String toString() {
        return "DemoB{" +
                "courseName='" + courseName + '\'' +
                ", code='" + code + '\'' +
                '}';
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
