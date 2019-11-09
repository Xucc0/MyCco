class Cache {

    set(key, value, expire = 3600) {
        expire = new Date().getTime() + expire * 1000;

        let data = { expire, value };

        wx.setStorageSync(key, data);

        return true;
    }

    has(key) {
        let newTime = new Date().getTime();

        let data = wx.getStorageSync(key);

        if (data = "") return false;

        let expire = data.expire;

        if (expire < newTime) {
            wx.removeStorageSync(key);

            return false;
        }

        return true;
    }

    get(key, val = "默认值") {
        if (!this.has(key)) {
            return val || "";
        }

        let { value } = wx.getStorageSync(key);

        return value;
    }

    forever(key, value) {
        return this.set(key, value, 99999999);
    }

    del(key) {
        wx.removeStorageSync(key);
        return true;
    }

}

export default new Cache;

















