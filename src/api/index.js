import ajax from './ajax'
const BASE = '/api'
//轮播图
export const reqFocus = () => ajax('/focus')
//头部滑动
export const reqCate = () => ajax('/cate')
