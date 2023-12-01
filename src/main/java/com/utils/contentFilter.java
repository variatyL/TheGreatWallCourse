package com.utils;

import java.util.regex.Pattern;

/**
 *
 * @author :Ryson
 *
 *
 * */

public class contentFilter {
    //TODO 进行include和注释的过滤工作
    private static final String regex = "\\:|\\,|\\s|;|\\(|\\)|\\&|\\|";
    public String[] Fileter(String str){
        //去掉开头和结尾的空白符
        str = str.trim();
        if(str.matches("^[\\s&&[^\\n]]*$") || str.matches("^#include.*")){
            return null;
        }

        //经过前面的去除空白字符，现在可以直接判断是不是注释代码了，针对单行注释 || (str.startsWith("/*") && str.endsWith("*/"))
        if( str.startsWith("//")){
            return null;
        }

        /*
         * 针对个别同学将注释跟在大括号后面，导致没有检测出来，此处再次判断一次
         * 在最初是的字符串就需要判断是否存在后置注释
         * 注意：此时解决的是单行注释问题且为两个星号的注释
         */
        str = this.hasComments(str);

        //分隔符：  : , * ; ( ) { } & | 空白符 (\\{|\\}|)
        Pattern pattern = Pattern.compile(regex);

        String[] tempStr = pattern.split(str);

        return tempStr;
        //return str;
    }

    private String hasComments(String str) {
        /*
         * 判断一个完整的语句之中是否有一段注释
         * 需要同时找到两个注释标志才说明是一段注释，否则可能是多段注释
         */
        if(-1 != str.indexOf("/*") && (-1 != str.indexOf("*/"))){
            str = str.substring(0,str.indexOf("/*"));
        }
        return str;
    }
}
