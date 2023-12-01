package com.utils;



import org.apache.poi.hwpf.extractor.WordExtractor;

import java.io.*;
import java.util.HashMap;
import java.util.TreeMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/**
 *
 * @author :Ryson
 *
 *
 * */
//读文件，并且在读的过程中进行处理使用TF-IDF进行文本向量化，返回后再通过计算余弦相似度来判断是否抄袭
public class ReadFile {
    private contentFilter contentFilter = new contentFilter();

    private int keyWordNum = 32;
    String[] keyWord = {
            "char","short","int","long","enum","float","double","signed",
            "unsigned","struct","union","void","for","do","while","break",
            "continue","if","else","goto","switch","case","default","return",
            "auto","static","extern","register","const","sizeof","typedef","volatile"
    };
    private int wordscount = 0;


    //实例化Map对象，用于存储关键字
    HashMap<String,Integer> keyWordNameMap = new HashMap<String,Integer>();

    public HashMap<String,Integer> read(String filepath) throws Exception {
        //初始化关键字下标
        for(int i = 0 ; i < keyWordNum; i++) {
            keyWordNameMap.put(keyWord[i],0);
        }

        String content = "";
        // 创建各种管道，方便读取文件的内容
        FileInputStream in = new FileInputStream(filepath);
        InputStreamReader ipr = new InputStreamReader(in, "utf8");
        BufferedReader bf = new BufferedReader(ipr);
        // 用于临时存储读取的一行文件内容
        String str = "";
        while ((str = bf.readLine()) != null) {
            // 接受处理过后的字符串
            //str =contentFilter.Fileter(str);
            String[] tmpStr = contentFilter.Fileter(str);


            //统计代码每一行中关键字有无出现
            if(tmpStr!=null) {
                int len = tmpStr.length;
                wordscount += len;//这个文本中统计所有词语
                for (int i = 0; i < len; i++) {
                    countkeyword(tmpStr[i]);
                    //System.out.println(tmpStr[i]);
                }
            }

            //System.out.println("=============");
            //System.out.println(str);
        }
        //System.out.println(wordscount);
        // 一次关闭各种管道
        bf.close();
        ipr.close();
        in.close();
        return keyWordNameMap;

    }

    //对于每一行,都统计词频
    private void countkeyword(String str) {
        for(int i = 0 ; i < keyWordNum ; i++) {
            if(str.equals(keyWord[i])) {
                int tmp = keyWordNameMap.get(keyWord[i]);
                tmp+=1;
                keyWordNameMap.replace(keyWord[i], tmp);
            }
        }
    }

    public int getWordscount() {
        return this.wordscount;
    }

}
