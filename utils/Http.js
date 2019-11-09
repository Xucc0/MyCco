export default class Http {
    httpReq({ url, data = {}, method = 'GET' }) {
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data,
                method,
                dataType: 'json',
                success: res => resolve(res),
                fail: err => reject(err),
            });
        })
    }

}

 