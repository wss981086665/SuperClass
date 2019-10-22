package com.example.demo.service;

import org.springframework.stereotype.Service;

import java.sql.*;

@Service
public class SqlService {

    // 定义数据库驱动名称
    protected static String dbClassName = "com.mysql.jdbc.Driver";
    // 定义访问数据库的URL
    protected static String dbUrl = "jdbc:mysql://47.106.242.51:3306/education";
    // 定义访问数据库的用户名
    protected static String dbUser = "education";
    // 定义访问数据库的密码
    protected static String dbPwd = "123456";
    // 声明数据库的连接对象
    public static Connection conn = null;
    //发送静态sql语句（固定键值对）
    public static Statement stmt = null;
    //发送动态sql语句，只需改变参数的值（表中对应的值）
    public static PreparedStatement pst = null;

    // 在静态代码段中初始化Dao类，实现数据库的驱动与连接
    static {
        try {
            if (conn == null) {
                Class.forName(dbClassName).newInstance();
                conn = DriverManager.getConnection(dbUrl, dbUser, dbPwd);
                stmt=conn.createStatement();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void test() throws SQLException {
        ResultSet res = stmt.executeQuery("SELECT * FROM SD_Scholar");
        while(res.next()){           //打印所有行
            System.out.print(res.getInt(1)+"\t");           //打印study表中每一行的第一个参数值（即id）
            System.out.print(res.getString(2)+"\t");        //打印study表中每一行的第二个参数值（即name）
            System.out.print(res.getString(3)+"\n");        //打印study表中每一行的第三个参数值（即pawd）
            System.out.print(res.getString(4)+"\n");
        }
    }

}
