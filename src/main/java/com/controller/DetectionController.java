package com.controller;

import cn.textcheck.CheckManager;
import cn.textcheck.engine.pojo.LocalPaperLibrary;
import cn.textcheck.engine.pojo.Paper;
import com.utils.CheckStateImp;
import com.utils.ReadFile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.TreeMap;

/**
 *
 * @author :Ryson
 *该接口用于查重
 * /paper
 * 主要用于论文查重，使用xincheck的sdk，报告会保存在savepath路径下
 *
 * /code
 * 用于对代码的查重
 * 使用tf-idf算法进行文本的向量化，之后计算余弦相似度，通过余弦相似度来判断是否抄袭
 *
 *
 * */

@RequestMapping("/detection")
@RestController
public class DetectionController {
    @RequestMapping("/paper")
    public void paperdetection(String detectedfilepath,String contrastpath,String savepath) throws Exception {
        //获取机器指纹
        //System.out.println(CheckManager.INSTANCE.getMachineCode());
        //设置授权许可证（免费获取评估许可证：https://xincheck.com/?id=7）。授权许可证只需要设置1次，整个程序运行周期内均有效
        CheckManager.INSTANCE.setRegCode("+ncKYG3tYSKxr9vinMNBRxWxV7rocGI1TOEf7Qu77KC8J3oQwHl4YBCpkPHM4TYib+ZwSt0jkBphp1ljIoyEoeUpt1oNAOQGZ8MmWmzealxYVpy2e+vlFcsDSJ7GHIXMuyrxDasFdAtQuAfwo/2sBHi2Ca2uUT18mU4sQeIztOW1+zyLL/HzGP34l6q0fmYktkUJ/GhRjyk7Hn/9VzTw0bird2i8LqosGy/IN8hPw/6n80r9gO06o1cy9tvitVCIXmHXTa8Xe9GLttWRVc3tRCe5lx1uu35gM6XqMEfFp7R+4By+nP9YnfzBOeQlB1uyvDFzPAo7VjbzkHeMreCd4iQdGXi8pvsMsayKZhunHr0BdzLAGaZlReD0mpzlNr1MTz6N4EInZNzdD0di+OYlz4Dv4C0GXJN1R0JECj+C51GGAl+Axqq6CT+9w7l19MXteB1gx5fK4fZKwtzsIz3s9NuLyP77KYfFdWl+Im9qLeM=");

        //通过<文件夹>加载比对库
        //LocalPaperLibrary paperLibrary = LocalPaperLibrary.load(new File("C:\\Users\\94364\\Desktop\\test"));
        LocalPaperLibrary paperLibrary = LocalPaperLibrary.load(new File(contrastpath));

        //通过<文件夹>批量加载带查重的文件。也可以通过for循环读取list
        //File[] files = new File("C:\\Users\\94364\\Desktop\\source").listFiles();
        File[] files = new File(detectedfilepath).listFiles();
        List<Paper> papers = Paper.load(files);

        CheckStateImp checkStateImp = new CheckStateImp();
        checkStateImp.setSavepath(savepath);

        //构建并启动任务
        CheckManager.INSTANCE
                .getCheckTaskBuilder() //获取查重任务构造器
                .setUid("1") //设置任务id，不同任务的id不应重复。如果不设置将随机生成uuid作为id
                .addCheckState(checkStateImp, "上下文") //添加回调处理并传递上下文。上下文可以是一个自定义的类，这里以String为例
                .addLibrary(paperLibrary) //添加比对库，可以多次添加
                .addCheckPaper(papers) //添加待查Paper，可以多次添加
                .build() //构建任务
                .submit(); //启动任务。submit：将任务提交到线程池中，如果线程池繁忙将会排队。start：直接启动任务

    }


    private int keyWordNum = 32;
    String[] keyWord = {
            "char","short","int","long","enum","float","double","signed",
            "unsigned","struct","union","void","for","do","while","break",
            "continue","if","else","goto","switch","case","default","return",
            "auto","static","extern","register","const","sizeof","typedef","volatile"
    };


    //暂时只支持两个文件单独比对 支持txt文档
    @RequestMapping("/code")
    public void codeDetection(String detectedfilepath,String contrastpath) throws Exception {
        ReadFile readFile1 = new ReadFile();
        HashMap<String,Integer> TMP1 =  readFile1.read(detectedfilepath);
        int count1 = readFile1.getWordscount();
        //System.out.println(count1);

        ReadFile readFile2 = new ReadFile();
        HashMap<String,Integer> TMP2 =  readFile2.read(contrastpath);
        //总词数
        int count2 = readFile1.getWordscount();
        //System.out.println(count2);

        //文档的文本向量化
        double[] tfidf1 = new double[keyWordNum];
        double[] tfidf2 = new double[keyWordNum];


        //计算TF-IDF，并进行文本向量化
        for(int i = 0 ; i < keyWordNum ; i++) {
            double tmp1 = TMP1.get(keyWord[i]);//t1的词频
            //System.out.println("tmp1:"+tmp1);
            double tmp2 = TMP2.get(keyWord[i]);//t2的词频
            //System.out.println(i+":"+tmp1+" "+tmp2);
            //System.out.println("-----");

            double idf = 0;

            if(tmp1 != 0 && tmp2 != 0 ) idf = Math.log(2.0/3.0);
            else if(tmp1 ==0 && tmp2 ==0) idf = Math.log(2.0/1.0);
            else idf = Math.log(2.0/2.0);

            //System.out.println(idf);

            tfidf1[i] = tmp1 / count1 * idf;
            tfidf2[i] = tmp2 / count2 * idf;
            //tfidf1[i] = tmp1;
            //tfidf2[i] = tmp2;
            //System.out.println("tfidf1:"+tfidf1[i]);
            //System.out.println("tfidf2:"+tfidf2[i]);
        }

        //计算修正余弦相似度
        double sqdiv  = 0; // sqrt（x²）+sqrt（y²）
        double x = 0;
        double y = 0;
        double div = 0; //x*y
        for(int i = 0; i < keyWordNum ; i++) {
            div += tfidf1[i]*tfidf2[i];
            x +=Math.pow(tfidf1[i],2);
            //System.out.println("x为"+x);
            y +=Math.pow(tfidf2[i],2);
            //System.out.println("y为"+y);

        }

        sqdiv = Math.sqrt(x)*Math.sqrt(y);
        //System.out.println("div为"+div);
        //System.out.println("sqdiv为"+sqdiv);
        if(sqdiv == 0) {
            System.out.println("两文件相似度极低！！！");
            return;
        }
        //余弦相似度
        double ans = div / sqdiv;
        //相似度越接近1，说明越可能是抄袭的。
        System.out.println("余弦相似度为"+ans);
    }

}
