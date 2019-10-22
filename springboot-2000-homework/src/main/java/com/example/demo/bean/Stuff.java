package com.example.demo.bean;

public class Stuff {

    private Integer id;
    private String title;
    private String content;

    private String con1;

    public Stuff() {
        super();
    }

    public Stuff(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Stuff(Integer id, String title, String content, String con1) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.con1 = con1;
    }

    @Override
    public String toString() {
        return "Stuff{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", con1='" + con1 + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCon1() {
        return con1;
    }

    public void setCon1(String con1) {
        this.con1 = con1;
    }
}
