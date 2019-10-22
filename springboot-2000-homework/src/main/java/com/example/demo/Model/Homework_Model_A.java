package com.example.demo.Model;

public class Homework_Model_A {

    private String code;
    private String topic;
    private String content;

    @Override
    public String toString() {
        return "HomeWork_Model_A{" +
                "code='" + code + '\'' +
                ", topic='" + topic + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
