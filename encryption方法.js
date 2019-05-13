function t(t) {
        return e(t)
    }
    function e(t) {
        return u(i(c(t), t.length * m))
    }
    function i(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var i = 1732584193, n = -271733879, l = -1732584194, c = 271733878, u = 0; u < t.length; u += 16) {
            var g = i
              , d = n
              , h = l
              , f = c;
            i = o(i, n, l, c, t[u + 0], 7, -680876936),
            c = o(c, i, n, l, t[u + 1], 12, -389564586),
            l = o(l, c, i, n, t[u + 2], 17, 606105819),
            n = o(n, l, c, i, t[u + 3], 22, -1044525330),
            i = o(i, n, l, c, t[u + 4], 7, -176418897),
            c = o(c, i, n, l, t[u + 5], 12, 1200080426),
            l = o(l, c, i, n, t[u + 6], 17, -1473231341),
            n = o(n, l, c, i, t[u + 7], 22, -45705983),
            i = o(i, n, l, c, t[u + 8], 7, 1770035416),
            c = o(c, i, n, l, t[u + 9], 12, -1958414417),
            l = o(l, c, i, n, t[u + 10], 17, -42063),
            n = o(n, l, c, i, t[u + 11], 22, -1990404162),
            i = o(i, n, l, c, t[u + 12], 7, 1804603682),
            c = o(c, i, n, l, t[u + 13], 12, -40341101),
            l = o(l, c, i, n, t[u + 14], 17, -1502002290),
            n = o(n, l, c, i, t[u + 15], 22, 1236535329),
            i = p(i, n, l, c, t[u + 1], 5, -165796510),
            c = p(c, i, n, l, t[u + 6], 9, -1069501632),
            l = p(l, c, i, n, t[u + 11], 14, 643717713),
            n = p(n, l, c, i, t[u + 0], 20, -373897302),
            i = p(i, n, l, c, t[u + 5], 5, -701558691),
            c = p(c, i, n, l, t[u + 10], 9, 38016083),
            l = p(l, c, i, n, t[u + 15], 14, -660478335),
            n = p(n, l, c, i, t[u + 4], 20, -405537848),
            i = p(i, n, l, c, t[u + 9], 5, 568446438),
            c = p(c, i, n, l, t[u + 14], 9, -1019803690),
            l = p(l, c, i, n, t[u + 3], 14, -187363961),
            n = p(n, l, c, i, t[u + 8], 20, 1163531501),
            i = p(i, n, l, c, t[u + 13], 5, -1444681467),
            c = p(c, i, n, l, t[u + 2], 9, -51403784),
            l = p(l, c, i, n, t[u + 7], 14, 1735328473),
            n = p(n, l, c, i, t[u + 12], 20, -1926607734),
            i = r(i, n, l, c, t[u + 5], 4, -378558),
            c = r(c, i, n, l, t[u + 8], 11, -2022574463),
            l = r(l, c, i, n, t[u + 11], 16, 1839030562),
            n = r(n, l, c, i, t[u + 14], 23, -35309556),
            i = r(i, n, l, c, t[u + 1], 4, -1530992060),
            c = r(c, i, n, l, t[u + 4], 11, 1272893353),
            l = r(l, c, i, n, t[u + 7], 16, -155497632),
            n = r(n, l, c, i, t[u + 10], 23, -1094730640),
            i = r(i, n, l, c, t[u + 13], 4, 681279174),
            c = r(c, i, n, l, t[u + 0], 11, -358537222),
            l = r(l, c, i, n, t[u + 3], 16, -722521979),
            n = r(n, l, c, i, t[u + 6], 23, 76029189),
            i = r(i, n, l, c, t[u + 9], 4, -640364487),
            c = r(c, i, n, l, t[u + 12], 11, -421815835),
            l = r(l, c, i, n, t[u + 15], 16, 530742520),
            n = r(n, l, c, i, t[u + 2], 23, -995338651),
            i = s(i, n, l, c, t[u + 0], 6, -198630844),
            c = s(c, i, n, l, t[u + 7], 10, 1126891415),
            l = s(l, c, i, n, t[u + 14], 15, -1416354905),
            n = s(n, l, c, i, t[u + 5], 21, -57434055),
            i = s(i, n, l, c, t[u + 12], 6, 1700485571),
            c = s(c, i, n, l, t[u + 3], 10, -1894986606),
            l = s(l, c, i, n, t[u + 10], 15, -1051523),
            n = s(n, l, c, i, t[u + 1], 21, -2054922799),
            i = s(i, n, l, c, t[u + 8], 6, 1873313359),
            c = s(c, i, n, l, t[u + 15], 10, -30611744),
            l = s(l, c, i, n, t[u + 6], 15, -1560198380),
            n = s(n, l, c, i, t[u + 13], 21, 1309151649),
            i = s(i, n, l, c, t[u + 4], 6, -145523070),
            c = s(c, i, n, l, t[u + 11], 10, -1120210379),
            l = s(l, c, i, n, t[u + 2], 15, 718787259),
            n = s(n, l, c, i, t[u + 9], 21, -343485551),
            i = a(i, g),
            n = a(n, d),
            l = a(l, h),
            c = a(c, f)
        }
        return 16 == v ? Array(n, l) : Array(i, n, l, c)
    }
    function n(t, e, i, n, o, p) {
        return a(l(a(a(e, t), a(n, p)), o), i)
    }
    function o(t, e, i, o, p, r, s) {
        return n(e & i | ~e & o, t, e, p, r, s)
    }
    function p(t, e, i, o, p, r, s) {
        return n(e & o | i & ~o, t, e, p, r, s)
    }
    function r(t, e, i, o, p, r, s) {
        return n(e ^ i ^ o, t, e, p, r, s)
    }
    function s(t, e, i, o, p, r, s) {
        return n(i ^ (e | ~o), t, e, p, r, s)
    }
    function a(t, e) {
        var i = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
    }
    function l(t, e) {
        return t << e | t >>> 32 - e
    }
    function c(t) {
        for (var e = Array(), i = (1 << m) - 1, n = 0; n < t.length * m; n += m)
            e[n >> 5] |= (t.charCodeAt(n / m) & i) << n % 32;
        return e
    }
    function u(t) {
        for (var e = _ ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * t.length; n++)
            i += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
        return i
    }
    function g(t) {
        for (var e = [], i = 0; i < t.length; i += 2)
            e.push(String.fromCharCode(parseInt(t.substr(i, 2), 16)));
        return e.join("")
    }
    function d(t, e) {
        if (!(Math.random() > (e || 1)))
            try {
                var i = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                document.createElement("img").src = i
            } catch (t) {}
    }
    function h(e, i, n, o) {
        n = n || "",
        e = e || "";
        for (var p = o ? e : t(e), r = g(p), s = t(r + i), a = TEA.strToBytes(n.toUpperCase(), !0), l = Number(a.length / 2).toString(16); l.length < 4; )
            l = "0" + l;
        TEA.initkey(s);
        var c = TEA.encrypt(p + TEA.strToBytes(i) + l + a);
        TEA.initkey("");
        for (var u = Number(c.length / 2).toString(16); u.length < 4; )
            u = "0" + u;
        var h = $pt.RSA.rsa_encrypt(g(u + c));
        return setTimeout(function() {
            d(488358, 1)
        }, 0),
        btoa(g(h)).replace(/[\/\+=]/g, function(t) {
            return {
                "/": "-",
                "+": "*",
                "=": "_"
            }[t]
        })
    }
    function f(e, i, n) {
        var o = n ? e : t(e)
          , p = o + i.toUpperCase();
        return $.RSA.rsa_encrypt(p)
    }
    var _ = 1
      , m = 8
      , v = 32;
    return {
        getEncryption: h,
        getRSAEncryption: f,
        md5: t
    }