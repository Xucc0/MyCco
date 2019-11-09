import cache from "../../utils/Cache.js";
import module from "../../models/Wxuser.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:"引用的时候一定要用相对应地址  小程序中只有js和wxs文件是用相对地址每个 wxs 模块均有一个内置的 module 对象。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getuserinfo(){
    wx.getUserInfo({
      success: (result)=>{
        let data = {
          avatar:result.userInfo.avatarUrl,
          nickname:result.userInfo.nickName,
          openid:cache.get('openid')
        }

        module.editUser(data).then(res => console.log(res));
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})