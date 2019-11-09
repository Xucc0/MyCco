//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navCate: [
        {'img':"https://m.boxuegu.com/web/images/index/course.png",'cate':'就业课'},
        {'img':"https://m.boxuegu.com/web/images/index/mircoCourse.png",'cate':'提升课'},
        {'img':"https://m.boxuegu.com/web/images/index/mircoCourse.png",'cate':'免费课'},
        {'img':"https://m.boxuegu.com/web/images/index/courseType.png",'cate':'课程分类'},
    ],
    bodyList:[
      {'img':"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png",'tittle':"JaveEE",'text':"JavaEE是一个开放的、基于标准的平台",'study':"1784人学习",'price':"¥14980.00"},
      {'img':"https://file.boxuegu.com/6c0ffe21a06d421d90be8a0061c14c1a.png",'tittle':"软件测试",'text':"JavaEE是一个开放的、基于标准的平台",'study':"1784人学习",'price':"¥14980.00"},
      {'img':"https://file.boxuegu.com/3940be1c755a44eeb8e2e0aaf984756e.png",'tittle':"前端与移动开发",'text':"JavaEE是一个开放的、基于标准的平台",'study':"1784人学习",'price':"¥14980.00"},
      {'img':"https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png",'tittle':"Python和人工智能",'text':"JavaEE是一个开放的、基于标准的平台",'study':"1784人学习",'price':"¥14980.00"}

    ],
    page:1,
    
  },
  onLoad() {
  //  wx.showLoading({
  //    tittle:"加载中",
  //    mask:true
  //  })


  //  wx.hideLoading();
  },
  navChange(ev){
    this.setData({
      page: ev.detail.current + 1,
    })
  }
})
