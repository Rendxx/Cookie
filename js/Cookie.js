/************************************************ 
Cookie Manager
Copyright (c) 2014-2015 Dongxu Ren  http://www.rendxx.com/

License: MIT (http://www.opensource.org/licenses/mit-license.php)
Version: 3.0
Update: 2015-09-10

Description:
   set / get / delete cookie.
   Return null if cookie not supported.
   
Compatibility:
    Chrome; Fire Fox; Safari; Edge; IE 9-11; IE 7,8;

API:
   $$.cookie.set(name)
    - (string) Set cookie: cookie[name] = name

   $$.cookie.set(name, value)
    - (string) Set cookie: cookie[name] = value

   $$.cookie.set(opts)
    - (string) Set cookie:
      opts: {
        name: name of cookie
        value: value (optional)
        expire: expire time in hour (optional)
        domain: domain of the cookie (optional)
        path: (optional)
        secure: (optional)
      }
    
   $$.cookie.get(name)
    - (string) Fetch certain cookie value by its name.
      return null if not found

   $$.cookie.del(opts)
    - Delete a cookie of the given name / domain / path
    
   $$.cookie.del(name)
    - Delete a cookie of the given name


************************************************/
(function () {
    "use strict";
    var _initCookie = function () {
        // set cookie --------------------------------------------------------------------------
        this.set = function (opts) {
            var name = null;
            var value = null;
            var expires = null;
            var domain = null;
            var path = null;
            var secure = null;

            if (typeof opts == "object") {
                name = opts.name;
                value = opts.value;
                expires = opts.expires;
                domain = opts.domain;
                path = opts.path;
                secure = opts.secure;
            } else {
                if (arguments.length == 2) {
                    // only set name & value
                    name = arguments[0];
                    value = arguments[1];
                } else {
                    // only set name
                    name = opts;
                }
            } 

            if (name === null || name === undefined || name === "") return null;
            if (value === null || value === undefined) value = "";
            if (secure == false) secure = null;
            return _set(name, value, expires, domain, path, secure);
        };

        // get cookie value --------------------------------------------------------------------------
        this.get = function (name) {
            try {
                var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
                if (arr != null) return unescape(arr[2]);
                return null;
            } catch (e) {
                return null;
            }
        };

        // delete cookie --------------------------------------------------------------------------
        this.del = function (opts) {
            var name = null;
            var domain = null;
            var path = null;

            if (typeof opts == "object") {
                name = opts.name;
                domain = opts.domain;
                path = opts.path;
            } else {
                name = opts;
            }

            if (name === null || name === undefined || name === "") return;
            return _set(name, "", 0, domain, path, null);
        };

        // ---------------------------------------------------------------------------------------
        // set cookie value into document cookie
        var _set = function (name, value, expires, domain, path, secure) {
            try {
                var exp = null;
                if (expires != null) {
                    exp = new Date();
                    exp.setTime(exp.getTime() + expires * 60 * 60 * 1000);
                }

                var cookieStr = name + "=" + escape(value);
                if (exp != null) cookieStr += "; expires=" + exp.toGMTString();
                if (path != null) cookieStr += "; path=" + path;
                if (domain != null) cookieStr += "; domain=" + domain;
                if (secure != null) cookieStr += "; secure";

                document.cookie = cookieStr;
                return name;
            } catch (e) {
                return null;
            }
        };
    }
    window.$$ = window.$$ || {};
    window.$$.cookie = new _initCookie();
})();
//# sourceMappingURL=Cookie.js.map
