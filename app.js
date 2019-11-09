//app.js
import Http from './utils/Http.js';
import config from './config/config.js';
import cache from './utils/Cache.js';

const http = new Http;



App({
  onLaunch() {
    wx.login({
      timeout:10000,
      success: ({ code })=>{
        http.httpReq({
          url:config.login,
          data:{code},
        }).then(res =>{
          cache.forever('openid',res.data.openid);
        })
      },
    });
  },

})