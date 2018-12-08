// 使用mockjs来mock数据/接口的模块
import Mock from "mockjs"
import data from "./msite.json"

//暴露接口 /goods 轮播图
Mock.mock('/focus',{code:0,data:data.focusList})
//头部分类
Mock.mock('/cate',{code:0,data:data.cateList})
