var CookieUtils = {
    /**
    * @description 给cookies赋值
    * @param {string} name  名称或者称作为key
    * @param {object} value   值
    * @param {float} expries  默认是天
    * @param {string} path  保存路径
    * @param {string} domain  保存的域名
    * @param {boolean} secure  是否安全
    */
    set: function (name, value, expires, path, domain, secure) {
        var today = new Date();
        today.setTime(today.getTime());
        if (expires) {
            expires = (expires * 1000 * 60 * 60 * 24);
        }
        var expires_date = new Date(today.getTime() + expires);
        //下面的赋值相当于是add的，而不会丢失前面的值
        document.cookie = name + '=' + encodeURIComponent(value) + (expires ? ';expires=' + expires_date.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    },
    /**
    * @description 获取cookie里面名称的值
    * @param {string} name  名称或者称作为key
    */
    get: function (name) {
        var a_all_cookies = document.cookie.split(';');
        var a_temp_cookie = '';
        var cookie_name = '';
        var cookie_value = '';
        var b_cookie_found = false;
        var i_all_cookies_length = a_all_cookies.length;
        for (var i = 0; i < i_all_cookies_length; i++) {
            a_temp_cookie = a_all_cookies[i].split('=');
            cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
            if (cookie_name === name) {
                b_cookie_found = true;
                if (a_temp_cookie.length > 1) {
                    cookie_value = decodeURIComponent(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
                }
                return cookie_value;
            }
            a_temp_cookie = null;
            cookie_name = '';
        }
        if (!b_cookie_found) {
            return null;
        }
    },
    /**
    * @description 删除cookies里面name的值
    * @param {string} name  名称或者称作为key
    * @param {string} path  保存路径
    * @param {string} domain  保存的域名
    */
    del: function (name, path, domain) {
        if (this.getCookie(name)) {
            document.cookie = name + '=' + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
        }
    },
    /**
    * @description 给cookies里面添加key-value，有效期默认是一天
    * @param {string} name  名称或者称作为key
    * @param {object} value  值
    */
    setSimpleCookie: function (name, value) {
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + (new Date(new Date().getTime() + (360 * 24 * 60 * 60 * 1000))).toGMTString() + '; path=/';
    },
    /**
    * @description 获取cookies里面添加key-value
    * @param {string} name  名称或者称作为key
    */
    getSimpleCookie: function (name) {
        if (new RegExp(name + '\=([^;]*);', '').test(document.cookie + ';')) {
            return decodeURIComponent(RegExp.$1);
        }
        return null;
    }
};

//下面也可以把一些属性放到浏览器的本地缓存起来
if (window.localStorage) {
    if (!localStorage.getItem('hnsmaintheme')) {
        localStorage.setItem('hnsmaintheme', 1);
    }
    if (!localStorage.getItem('hnslanguage')) {
        localStorage.setItem('hnslanguage', 'en');
    }
} else {
    CookieUtils.set('hnsmaintheme', 1, 365, '/');
    CookieUtils.set('hnslanguage', 'en', 365, '/');
}