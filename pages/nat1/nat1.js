// pages/nat1/nat1.js

// const { req } = require("../../utils/funs.js")

import Http from "../../utils/Http.js";
import config from "../../config/config.js";

// const http = new Http;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.wangyi('https://api.apiopen.top/getWangYiNews');
  },

//1.
  // wangyi(){
  //   wx.request({
  //     url: 'https://api.apiopen.top/getWangYiNews',
  //     method: 'POST',
  //     data:{page:1,count:5},
  //     dataType: 'json',
  //     success: (result)=>{
  //       console.log(result.data.result);
  //     },
  //     fail: ()=>{},
  //   });
  // }

    // wangyi(url){
    //   req(url).then(
    //     res => {
    //       console.log(res.data.result);
    //     }
    //   )
    // }

  wangyi(){
    http.httpReq({
      url:config.users,
    }).then(res =>{
      console.log(res);
    })
  }
    
})