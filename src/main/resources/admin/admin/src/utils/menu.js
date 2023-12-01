const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-taxi",
                    "buttons": ["新增", "查看", "修改", "删除", "成绩"],
                    "menu": "学生",
                    "menuJump": "列表",
                    "tableName": "xuesheng"
                }], "menu": "学生管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-attentionfavor",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "教师",
                    "menuJump": "列表",
                    "tableName": "jiaoshi"
                }], "menu": "教师管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-goods",
                    "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "menu": "课程信息",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-goodsnew",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "类型",
                    "menuJump": "列表",
                    "tableName": "leixing"
                }], "menu": "类型管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-time",
                    "buttons": ["查看", "删除"],
                    "menu": "作业信息",
                    "menuJump": "列表",
                    "tableName": "zuoyexinxi"
                }], "menu": "作业信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["查看", "删除", "查看评论"],
                    "menu": "资料信息",
                    "menuJump": "列表",
                    "tableName": "ziliaoxinxi"
                }], "menu": "资料信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["删除", "查看"],
                    "menu": "签到信息",
                    "menuJump": "列表",
                    "tableName": "qiandaoxinxi"
                }], "menu": "签到信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-cardboard",
                    "buttons": ["查看", "删除", "修改", "报表"],
                    "menu": "成绩统计",
                    "menuJump": "列表",
                    "tableName": "chengjitongji"
                }], "menu": "成绩统计管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-wenzi",
                    "buttons": ["查看", "删除"],
                    "menu": "学生作业",
                    "menuJump": "列表",
                    "tableName": "xueshengzuoye"
                }], "menu": "学生作业管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-full",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "试卷管理",
                    "tableName": "exampaper"
                }], "menu": "试卷管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-similar",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "试题管理",
                    "tableName": "examquestion"
                }], "menu": "试题管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-group",
                    "buttons": ["查看", "删除"],
                    "menu": "校园论坛",
                    "tableName": "forum"
                }], "menu": "校园论坛"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-discover",
                    "buttons": ["查看", "修改"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }, {
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息",
                    "tableName": "news"
                }], "menu": "系统管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-pic",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "试卷列表",
                    "tableName": "exampaperlist"
                }, {
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "考试记录",
                    "tableName": "examrecord"
                }, {
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "错题本",
                    "tableName": "examfailrecord"
                }], "menu": "考试管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-goodsnew",
                    "buttons": ["查看", "查看评论", "签到"],
                    "menu": "课程信息列表",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息模块"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-pay",
                    "buttons": ["查看", "提交"],
                    "menu": "作业信息列表",
                    "menuJump": "列表",
                    "tableName": "zuoyexinxi"
                }], "menu": "作业信息模块"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-addressbook",
                    "buttons": ["查看评论", "查看"],
                    "menu": "资料信息列表",
                    "menuJump": "列表",
                    "tableName": "ziliaoxinxi"
                }], "menu": "资料信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "签到信息",
                    "menuJump": "列表",
                    "tableName": "qiandaoxinxi"
                }], "menu": "签到信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-wenzi",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "学生作业",
                    "menuJump": "列表",
                    "tableName": "xueshengzuoye"
                }], "menu": "学生作业管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-group",
                    "buttons": ["查看", "删除"],
                    "menu": "校园论坛",
                    "tableName": "forum"
                }], "menu": "校园论坛"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-favor",
                    "buttons": ["查看", "删除"],
                    "menu": "我的收藏管理",
                    "tableName": "storeup"
                }], "menu": "我的收藏管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["查看"],
                    "menu": "错题本",
                    "tableName": "examfailrecord"
                }, {
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["查看"],
                    "menu": "考试记录",
                    "tableName": "examrecord"
                }], "menu": "考试管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-goodsnew",
                    "buttons": ["查看", "查看评论"],
                    "menu": "课程信息列表",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息模块"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-pay",
                    "buttons": ["查看", "提交"],
                    "menu": "作业信息列表",
                    "menuJump": "列表",
                    "tableName": "zuoyexinxi"
                }], "menu": "作业信息模块"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-addressbook",
                    "buttons": ["查看评论", "查看"],
                    "menu": "资料信息列表",
                    "menuJump": "列表",
                    "tableName": "ziliaoxinxi"
                }], "menu": "资料信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "学生",
            "tableName": "xuesheng"
        },
            {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-goods",
                    "buttons": ["查看", "查看评论", "作业"],
                    "menu": "课程信息",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-time",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "作业信息",
                    "menuJump": "列表",
                    "tableName": "zuoyexinxi"
                }], "menu": "作业信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "menu": "资料信息",
                    "menuJump": "列表",
                    "tableName": "ziliaoxinxi"
                }], "menu": "资料信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["查看"],
                    "menu": "签到信息",
                    "menuJump": "列表",
                    "tableName": "qiandaoxinxi"
                }], "menu": "签到信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-cardboard",
                    "buttons": ["查看", "报表"],
                    "menu": "成绩统计",
                    "menuJump": "列表",
                    "tableName": "chengjitongji"
                }], "menu": "成绩统计管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-wenzi",
                    "buttons": ["查看"],
                    "menu": "学生作业",
                    "menuJump": "列表",
                    "tableName": "xueshengzuoye"
                }], "menu": "学生作业管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-goodsnew",
                    "buttons": ["查看", "查看评论", "签到"],
                    "menu": "课程信息列表",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息模块"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-pay",
                    "buttons": ["查看", "提交"],
                    "menu": "作业信息列表",
                    "menuJump": "列表",
                    "tableName": "zuoyexinxi"
                }], "menu": "作业信息模块"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-addressbook",
                    "buttons": ["查看评论", "查看"],
                    "menu": "资料信息列表",
                    "menuJump": "列表",
                    "tableName": "ziliaoxinxi"
                }], "menu": "资料信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "是",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "教师",
            "tableName": "jiaoshi"
        }]
    }
}
export default menu;
