(function() {
    var e, aa = aa || {},
        m = this,
        ba = function(a, b) {
            var c = a.split("."),
                d = m;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var f; c.length && (f = c.shift());) c.length || void 0 === b ? d = d[f] ? d[f] : d[f] = {} : d[f] = b
        },
        ca = function(a) {
            a = a.split(".");
            for (var b = m, c; c = a.shift();)
                if (null != b[c]) b = b[c];
                else return null;
            return b
        },
        da = function() {},
        ea = function(a) {
            a.ac = function() {
                return a.Lg ? a.Lg : a.Lg = new a
            }
        },
        fa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c =
                        Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ga = function(a) {
            return void 0 !==
                a
        },
        n = function(a) {
            return "array" == fa(a)
        },
        ha = function(a) {
            var b = fa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        q = function(a) {
            return "string" == typeof a
        },
        ia = function(a) {
            return "number" == typeof a
        },
        ja = function(a) {
            return "function" == fa(a)
        },
        ka = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        na = function(a) {
            return a[la] || (a[la] = ++ma)
        },
        la = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ma = 0,
        oa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        pa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        r = function(a, b, c) {
            r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
            return r.apply(null, arguments)
        },
        s = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        qa = Date.now || function() {
            return +new Date
        },
        u = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.c = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return r.apply(null, c)
        }
        return r(this, a)
    };
    var ra = function(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, ra) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    u(ra, Error);
    ra.prototype.name = "CustomError";
    var sa = function(a, b) {
            for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;) d += c.shift() + f.shift();
            return d + c.join("%s")
        },
        v = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        x = function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ta = function(a) {
            return a.replace(/(\r\n|\r|\n)/g, "<br>")
        },
        za = function(a) {
            if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') &&
                (a = a.replace(ya, "&quot;"));
            return a
        },
        va = /&/g,
        wa = /</g,
        xa = />/g,
        ya = /\"/g,
        ua = /[&<>\"]/,
        Ba = function(a) {
            var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c = document.createElement("div");
            return a.replace(Aa, function(a, f) {
                var g = b[a];
                if (g) return g;
                if ("#" == f.charAt(0)) {
                    var h = Number("0" + f.substr(1));
                    isNaN(h) || (g = String.fromCharCode(h))
                }
                g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
                return b[a] = g
            })
        },
        Ca = function(a) {
            return a.replace(/&([^;]+);/g, function(a, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        if ("#" == c.charAt(0)) {
                            var d = Number("0" + c.substr(1));
                            if (!isNaN(d)) return String.fromCharCode(d)
                        }
                        return a
                }
            })
        },
        Aa = /&([^;\s<&]+);?/g,
        Ea = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        Fa = function(a) {
            var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, f) {
                return b + f.toUpperCase()
            })
        };
    var Ga = function(a, b) {
        b.unshift(a);
        ra.call(this, sa.apply(null, b));
        b.shift()
    };
    u(Ga, ra);
    Ga.prototype.name = "AssertionError";
    var Ha = function(a, b, c, d) {
            var f = "Assertion failed";
            if (c) var f = f + (": " + c),
                g = d;
            else a && (f += ": " + a, g = b);
            throw new Ga("" + f, g || []);
        },
        y = function(a, b, c) {
            a || Ha("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ia = function(a, b) {
            throw new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Ja = function(a, b, c) {
            q(a) || Ha("Expected string but got %s: %s.", [fa(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ka = function(a, b, c) {
            ka(a) || Ha("Expected object but got %s: %s.", [fa(a),
                a
            ], b, Array.prototype.slice.call(arguments, 2))
        },
        La = function(a, b, c) {
            n(a) || Ha("Expected array but got %s: %s.", [fa(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ma = function(a, b, c, d) {
            a instanceof b || Ha("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3))
        };
    var z = Array.prototype,
        Na = z.indexOf ? function(a, b, c) {
            y(null != a.length);
            return z.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        A = z.forEach ? function(a, b, c) {
            y(null != a.length);
            z.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, f = q(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
        },
        Oa = z.filter ? function(a, b, c) {
            y(null != a.length);
            return z.filter.call(a, b,
                c)
        } : function(a, b, c) {
            for (var d = a.length, f = [], g = 0, h = q(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (f[g++] = l)
                }
            return f
        },
        Pa = z.map ? function(a, b, c) {
            y(null != a.length);
            return z.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, f = Array(d), g = q(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (f[h] = b.call(c, g[h], h, a));
            return f
        },
        Qa = z.every ? function(a, b, c) {
            y(null != a.length);
            return z.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, f = q(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in f && !b.call(c, f[g], g,
                        a)) return !1;
            return !0
        },
        Ta = function(a) {
            var b = Ra(a, Sa, void 0);
            return 0 > b ? null : q(a) ? a.charAt(b) : a[b]
        },
        Ra = function(a, b, c) {
            for (var d = a.length, f = q(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in f && b.call(c, f[g], g, a)) return g;
            return -1
        },
        Ua = function(a, b) {
            return 0 <= Na(a, b)
        },
        Wa = function(a, b) {
            var c = Na(a, b),
                d;
            (d = 0 <= c) && Va(a, c);
            return d
        },
        Va = function(a, b) {
            y(null != a.length);
            z.splice.call(a, b, 1)
        },
        Xa = function(a) {
            return z.concat.apply(z, arguments)
        },
        Ya = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        $a = function(a, b, c, d) {
            y(null != a.length);
            z.splice.apply(a, Za(arguments, 1))
        },
        Za = function(a, b, c) {
            y(null != a.length);
            return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c)
        };
    var ab = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        cb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        db = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        eb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        fb = function(a) {
            for (var b in a) return !1;
            return !0
        },
        gb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        hb = function(a, b) {
            for (var c, d, f = 1; f < arguments.length; f++) {
                d = arguments[f];
                for (c in d) a[c] = d[c];
                for (var g =
                        0; g < gb.length; g++) c = gb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        ib = function(a) {
            var b = arguments.length;
            if (1 == b && n(arguments[0])) return ib.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };
    var jb = {};
    ba("gsa.ui.msg", jb);
    var B = function(a) {
            a = ca("gsa.ui.msg." + a);
            if (null != a) {
                var b = {},
                    c;
                for (c in b) {
                    var d = ("" + b[c]).replace(/\$/g, "$$$$");
                    a = a.replace(RegExp("\\{\\$" + c + "\\}", "gi"), d)
                }
                return a
            }
            return ""
        },
        kb = function(a) {
            A(db(a), function(b) {
                jb[b] = a[b]
            });
            ga(m._gsa_addLocalizedMessages) && _gsa_addLocalizedMessages()
        };
    var C = function(a, b) {
        this.x = ga(a) ? a : 0;
        this.y = ga(b) ? b : 0
    };
    C.prototype.ea = function() {
        return new C(this.x, this.y)
    };
    C.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    var lb = function(a, b) {
        return new C(a.x - b.x, a.y - b.y)
    };
    C.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    C.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var mb = function(a, b) {
        this.width = a;
        this.height = b
    };
    mb.prototype.ea = function() {
        return new mb(this.width, this.height)
    };
    mb.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    mb.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    mb.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var nb, ob, pb, rb, sb, tb, ub = function() {
            return m.navigator ? m.navigator.userAgent : null
        },
        vb = function() {
            return m.navigator
        };
    sb = rb = pb = ob = nb = !1;
    var wb;
    if (wb = ub()) {
        var xb = vb();
        nb = 0 == wb.lastIndexOf("Opera", 0);
        ob = !nb && (-1 != wb.indexOf("MSIE") || -1 != wb.indexOf("Trident"));
        rb = (pb = !nb && -1 != wb.indexOf("WebKit")) && -1 != wb.indexOf("Mobile");
        sb = !nb && !pb && !ob && "Gecko" == xb.product
    }
    var yb = nb,
        D = ob,
        E = sb,
        F = pb,
        zb = rb,
        Ab = vb();
    tb = -1 != (Ab && Ab.platform || "").indexOf("Mac");
    var Bb = !!vb() && -1 != (vb().appVersion || "").indexOf("X11"),
        Cb = function() {
            var a = m.document;
            return a ? a.documentMode : void 0
        },
        Db;
    t: {
        var Eb = "",
            Fb;
        if (yb && m.opera) var Gb = m.opera.version,
            Eb = "function" == typeof Gb ? Gb() : Gb;
        else if (E ? Fb = /rv\:([^\);]+)(\)|;)/ : D ? Fb = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : F && (Fb = /WebKit\/(\S+)/), Fb) var Hb = Fb.exec(ub()),
            Eb = Hb ? Hb[1] : "";
        if (D) {
            var Ib = Cb();
            if (Ib > parseFloat(Eb)) {
                Db = String(Ib);
                break t
            }
        }
        Db = Eb
    }
    var Jb = Db,
        Kb = {},
        G = function(a) {
            var b;
            if (!(b = Kb[a])) {
                b = 0;
                for (var c = x(String(Jb)).split("."), d = x(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                    var h = c[g] || "",
                        k = d[g] || "",
                        l = RegExp("(\\d*)(\\D*)", "g"),
                        t = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var p = l.exec(h) || ["", "", ""],
                            w = t.exec(k) || ["", "", ""];
                        if (0 == p[0].length && 0 == w[0].length) break;
                        b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) ||
                            ((0 == p[2].length) < (0 == w[2].length) ? -1 : (0 == p[2].length) > (0 == w[2].length) ? 1 : 0) || (p[2] < w[2] ? -1 : p[2] > w[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = Kb[a] = 0 <= b
            }
            return b
        },
        Lb = m.document,
        Mb = Lb && D ? Cb() || ("CSS1Compat" == Lb.compatMode ? parseInt(Jb, 10) : 5) : void 0;
    var Nb, Ob = !D || D && 9 <= Mb,
        Pb = !E && !D || D && D && 9 <= Mb || E && G("1.9.1"),
        Qb = D && !G("9");
    var Rb = function(a) {
            a = a.className;
            return q(a) && a.match(/\S+/g) || []
        },
        Sb = function(a, b) {
            for (var c = Rb(a), d = Za(arguments, 1), f = c.length + d.length, g = c, h = 0; h < d.length; h++) Ua(g, d[h]) || g.push(d[h]);
            a.className = c.join(" ");
            return c.length == f
        },
        Ub = function(a, b) {
            var c = Rb(a),
                d = Za(arguments, 1),
                f = Tb(c, d);
            a.className = f.join(" ");
            return f.length == c.length - d.length
        },
        Tb = function(a, b) {
            return Oa(a, function(a) {
                return !Ua(b, a)
            })
        };
    var I = function(a) {
            return a ? new Vb(H(a)) : Nb || (Nb = new Vb)
        },
        Wb = function(a, b) {
            return q(b) ? a.getElementById(b) : b
        },
        Yb = function(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Xb(document, "*", a, b)
        },
        Xb = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? b.toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var f = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[f++] = h);
                    d.length = f;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (g = f = 0; h = a[g]; g++) b = h.className, "function" == typeof b.split && Ua(b.split(/\s+/), c) && (d[f++] = h);
                d.length = f;
                return d
            }
            return a
        },
        ac = function(a, b) {
            ab(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Zb ? a.setAttribute(Zb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Zb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        cc = function(a) {
            a = a.document;
            a = bc(a) ? a.documentElement : a.body;
            return new mb(a.clientWidth, a.clientHeight)
        },
        dc = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        fc = function(a, b, c) {
            return ec(document, arguments)
        },
        ec = function(a, b) {
            var c = b[0],
                d = b[1];
            if (!Ob && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="',
                    za(d.name), '"');
                if (d.type) {
                    c.push(' type="', za(d.type), '"');
                    var f = {};
                    hb(f, d);
                    delete f.type;
                    d = f
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && (q(d) ? c.className = d : n(d) ? Sb.apply(null, [c].concat(d)) : ac(c, d));
            2 < b.length && gc(a, c, b, 2);
            return c
        },
        gc = function(a, b, c, d) {
            function f(c) {
                c && b.appendChild(q(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var g = c[d];
                !ha(g) || ka(g) && 0 < g.nodeType ? f(g) : A(hc(g) ? Ya(g) : g, f)
            }
        },
        bc = function(a) {
            return "CSS1Compat" == a.compatMode
        },
        ic = function(a, b) {
            gc(H(a), a, arguments, 1)
        },
        jc = function(a) {
            for (var b; b =
                a.firstChild;) a.removeChild(b)
        },
        kc = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b)
        },
        lc = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        mc = function(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        H = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        nc = function(a) {
            return a.contentDocument || a.contentWindow.document
        },
        oc = function(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else jc(a), a.appendChild(H(a).createTextNode(String(b)))
        },
        pc = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        qc = {
            IMG: " ",
            BR: "\n"
        },
        rc = function(a) {
            var b = a.getAttributeNode("tabindex");
            return b && b.specified ? (a = a.tabIndex, ia(a) && 0 <= a && 32768 > a) : !1
        },
        sc = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        },
        uc =
        function(a) {
            if (Qb && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                tc(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Qb || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        },
        vc = function(a) {
            var b = [];
            tc(a, b, !1);
            return b.join("")
        },
        tc = function(a, b, c) {
            if (!(a.nodeName in pc))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in qc) b.push(qc[a.nodeName]);
            else
                for (a = a.firstChild; a;) tc(a, b, c), a = a.nextSibling
        },
        hc = function(a) {
            if (a && "number" == typeof a.length) {
                if (ka(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ja(a)) return "function" == typeof a.item
            }
            return !1
        },
        xc = function(a, b, c) {
            if (!b && !c) return null;
            var d = b ? b.toUpperCase() : null;
            return wc(a, function(a) {
                return (!d || a.nodeName == d) && (!c || Ua(Rb(a), c))
            })
        },
        wc = function(a, b) {
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        yc = function(a) {
            try {
                return a && a.activeElement
            } catch (b) {}
            return null
        },
        Vb = function(a) {
            this.m = a || m.document || document
        };
    Vb.prototype.l = I;
    var zc = function(a) {
        return a.m
    };
    e = Vb.prototype;
    e.a = function(a) {
        return Wb(this.m, a)
    };
    e.Ja = function(a, b) {
        return Yb(a, b || this.m)
    };
    e.mc = function(a, b) {
        var c = b || this.m,
            d = c || document,
            f = null;
        return (f = d.querySelectorAll && d.querySelector ? d.querySelector("." + a) : Yb(a, c)[0]) || null
    };
    e.h = function(a, b, c) {
        return ec(this.m, arguments)
    };
    e.createElement = function(a) {
        return this.m.createElement(a)
    };
    e.createTextNode = function(a) {
        return this.m.createTextNode(String(a))
    };
    var Ac = function(a) {
            return bc(a.m)
        },
        Bc = function(a) {
            return a.m.parentWindow || a.m.defaultView
        },
        Cc = function(a) {
            var b = a.m;
            a = !F && bc(b) ? b.documentElement : b.body;
            b = b.parentWindow || b.defaultView;
            return D && G("10") && b.pageYOffset != a.scrollTop ? new C(a.scrollLeft, a.scrollTop) : new C(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        };
    e = Vb.prototype;
    e.Kg = function(a) {
        return yc(a || this.m)
    };
    e.appendChild = function(a, b) {
        a.appendChild(b)
    };
    e.append = ic;
    e.Wf = jc;
    e.removeNode = lc;
    e.Gg = function(a) {
        return Pb && void 0 != a.children ? a.children : Oa(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    e.contains = mc;
    e.je = xc;
    var Dc, Ec = {
        Ii: "activedescendant",
        Ni: "atomic",
        Oi: "autocomplete",
        Qi: "busy",
        Ti: "checked",
        Yi: "controls",
        $i: "describedby",
        cj: "disabled",
        ej: "dropeffect",
        fj: "expanded",
        gj: "flowto",
        ij: "grabbed",
        mj: "haspopup",
        oj: "hidden",
        qj: "invalid",
        rj: "label",
        sj: "labelledby",
        tj: "level",
        yj: "live",
        Ij: "multiline",
        Jj: "multiselectable",
        Nj: "orientation",
        Oj: "owns",
        Pj: "posinset",
        Rj: "pressed",
        Vj: "readonly",
        Xj: "relevant",
        Yj: "required",
        dk: "selected",
        fk: "setsize",
        hk: "sort",
        uk: "valuemax",
        vk: "valuemin",
        wk: "valuenow",
        xk: "valuetext"
    };
    var Fc = {
        Ji: "alert",
        Ki: "alertdialog",
        Li: "application",
        Mi: "article",
        Pi: "banner",
        Ri: "button",
        Si: "checkbox",
        Ui: "columnheader",
        Vi: "combobox",
        Wi: "complementary",
        Xi: "contentinfo",
        Zi: "definition",
        aj: "dialog",
        bj: "directory",
        dj: "document",
        hj: "form",
        jj: "grid",
        kj: "gridcell",
        lj: "group",
        nj: "heading",
        pj: "img",
        uj: "link",
        vj: "list",
        wj: "listbox",
        xj: "listitem",
        zj: "log",
        Aj: "main",
        Bj: "marquee",
        Cj: "math",
        Dj: "menu",
        Ej: "menubar",
        Fj: "menuitem",
        Gj: "menuitemcheckbox",
        Hj: "menuitemradio",
        Kj: "navigation",
        Lj: "note",
        Mj: "option",
        Qj: "presentation",
        Sj: "progressbar",
        Tj: "radio",
        Uj: "radiogroup",
        Wj: "region",
        Zj: "row",
        $j: "rowgroup",
        ak: "rowheader",
        bk: "scrollbar",
        ck: "search",
        ek: "separator",
        gk: "slider",
        ik: "spinbutton",
        jk: "status",
        kk: "tab",
        lk: "tablist",
        mk: "tabpanel",
        nk: "textbox",
        ok: "timer",
        pk: "toolbar",
        qk: "tooltip",
        rk: "tree",
        sk: "treegrid",
        tk: "treeitem"
    };
    var Gc = function(a, b) {
            b ? (y(eb(Fc, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
        },
        Ic = function(a, b, c) {
            ha(c) && (c = c.join(" "));
            var d = Hc(b);
            "" === c || void 0 == c ? (Dc || (Dc = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }), c = Dc, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d,
                c)
        },
        Hc = function(a) {
            y(a, "ARIA attribute cannot be empty.");
            y(eb(Ec, a), "No such ARIA attribute " + a);
            return "aria-" + a
        };
    var Kc = function() {};
    Kc.prototype.zb = !1;
    Kc.prototype.j = function() {
        this.zb || (this.zb = !0, this.e())
    };
    var Lc = function(a, b) {
        a.Wc || (a.Wc = []);
        a.Wc.push(r(b, void 0))
    };
    Kc.prototype.e = function() {
        if (this.Wc)
            for (; this.Wc.length;) this.Wc.shift()()
    };
    var J = function(a) {
        a && "function" == typeof a.j && a.j()
    };
    var K = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
    e = K.prototype;
    e.e = function() {};
    e.j = function() {};
    e.rb = !1;
    e.defaultPrevented = !1;
    e.rg = !0;
    e.stopPropagation = function() {
        this.rb = !0
    };
    e.preventDefault = function() {
        this.defaultPrevented = !0;
        this.rg = !1
    };
    var Mc = function(a) {
        a.preventDefault()
    };
    var Nc = function(a) {
        Nc[" "](a);
        return a
    };
    Nc[" "] = da;
    var Oc = function(a, b) {
        try {
            return Nc(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Pc = !D || D && 9 <= Mb,
        Qc = !D || D && 9 <= Mb,
        Rc = D && !G("9");
    !F || G("528");
    E && G("1.9b") || D && G("8") || yb && G("9.5") || F && G("528");
    E && !G("8") || D && G("9");
    var Sc = D ? "focusin" : "DOMFocusIn",
        Tc = D ? "focusout" : "DOMFocusOut";
    var Vc = function(a, b) {
        a && Uc(this, a, b)
    };
    u(Vc, K);
    var Wc = [1, 4, 2];
    e = Vc.prototype;
    e.target = null;
    e.relatedTarget = null;
    e.offsetX = 0;
    e.offsetY = 0;
    e.clientX = 0;
    e.clientY = 0;
    e.screenX = 0;
    e.screenY = 0;
    e.button = 0;
    e.keyCode = 0;
    e.charCode = 0;
    e.ctrlKey = !1;
    e.altKey = !1;
    e.shiftKey = !1;
    e.metaKey = !1;
    e.Pe = !1;
    e.qb = null;
    var Uc = function(a, b, c) {
            var d = a.type = b.type;
            K.call(a, d);
            a.target = b.target || b.srcElement;
            a.currentTarget = c;
            (c = b.relatedTarget) ? E && (Oc(c, "nodeName") || (c = null)): "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
            a.relatedTarget = c;
            a.offsetX = F || void 0 !== b.offsetX ? b.offsetX : b.layerX;
            a.offsetY = F || void 0 !== b.offsetY ? b.offsetY : b.layerY;
            a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
            a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
            a.screenX = b.screenX || 0;
            a.screenY = b.screenY || 0;
            a.button = b.button;
            a.keyCode =
                b.keyCode || 0;
            a.charCode = b.charCode || ("keypress" == d ? b.keyCode : 0);
            a.ctrlKey = b.ctrlKey;
            a.altKey = b.altKey;
            a.shiftKey = b.shiftKey;
            a.metaKey = b.metaKey;
            a.Pe = tb ? b.metaKey : b.ctrlKey;
            a.state = b.state;
            a.qb = b;
            b.defaultPrevented && a.preventDefault();
            delete a.rb
        },
        Xc = function(a) {
            return (Pc ? 0 == a.qb.button : "click" == a.type ? !0 : !!(a.qb.button & Wc[0])) && !(F && tb && a.ctrlKey)
        };
    Vc.prototype.stopPropagation = function() {
        Vc.c.stopPropagation.call(this);
        this.qb.stopPropagation ? this.qb.stopPropagation() : this.qb.cancelBubble = !0
    };
    Vc.prototype.preventDefault = function() {
        Vc.c.preventDefault.call(this);
        var a = this.qb;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Rc) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    Vc.prototype.sb = function() {
        return this.qb
    };
    Vc.prototype.e = function() {};
    var Yc = "closure_listenable_" + (1E6 * Math.random() | 0),
        Zc = function(a) {
            return !(!a || !a[Yc])
        },
        $c = 0;
    var ad = function(a, b, c, d, f) {
            this.Fa = a;
            this.Ud = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Od = f;
            this.key = ++$c;
            this.dc = this.Nd = !1
        },
        bd = function(a) {
            a.dc = !0;
            a.Fa = null;
            a.Ud = null;
            a.src = null;
            a.Od = null
        };
    var cd = function(a) {
        this.src = a;
        this.T = {};
        this.Tc = 0
    };
    cd.prototype.add = function(a, b, c, d, f) {
        var g = this.T[a];
        g || (g = this.T[a] = [], this.Tc++);
        var h = dd(g, b, d, f); - 1 < h ? (a = g[h], c || (a.Nd = !1)) : (a = new ad(b, this.src, a, !!d, f), a.Nd = c, g.push(a));
        return a
    };
    cd.prototype.remove = function(a, b, c, d) {
        if (!(a in this.T)) return !1;
        var f = this.T[a];
        b = dd(f, b, c, d);
        return -1 < b ? (bd(f[b]), Va(f, b), 0 == f.length && (delete this.T[a], this.Tc--), !0) : !1
    };
    var ed = function(a, b) {
        var c = b.type;
        if (!(c in a.T)) return !1;
        var d = Wa(a.T[c], b);
        d && (bd(b), 0 == a.T[c].length && (delete a.T[c], a.Tc--));
        return d
    };
    cd.prototype.La = function(a) {
        var b = 0,
            c;
        for (c in this.T)
            if (!a || c == a) {
                for (var d = this.T[c], f = 0; f < d.length; f++) ++b, bd(d[f]);
                delete this.T[c];
                this.Tc--
            }
        return b
    };
    cd.prototype.Vd = function(a, b) {
        var c = this.T[a],
            d = [];
        if (c)
            for (var f = 0; f < c.length; ++f) {
                var g = c[f];
                g.capture == b && d.push(g)
            }
        return d
    };
    cd.prototype.Oc = function(a, b, c, d) {
        a = this.T[a];
        var f = -1;
        a && (f = dd(a, b, c, d));
        return -1 < f ? a[f] : null
    };
    var dd = function(a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.dc && g.Fa == b && g.capture == !!c && g.Od == d) return f
        }
        return -1
    };
    var fd = {},
        gd = {},
        hd = {},
        L = function(a, b, c, d, f) {
            if (n(b)) {
                for (var g = 0; g < b.length; g++) L(a, b[g], c, d, f);
                return null
            }
            c = id(c);
            return Zc(a) ? a.d(b, c, d, f) : jd(a, b, c, !1, d, f)
        },
        jd = function(a, b, c, d, f, g) {
            if (!b) throw Error("Invalid event type");
            var h = !!f,
                k = na(a),
                l = gd[k];
            l || (gd[k] = l = new cd(a));
            c = l.add(b, c, d, f, g);
            if (c.Ud) return c;
            d = kd();
            c.Ud = d;
            d.src = a;
            d.Fa = c;
            a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in hd ? hd[b] : hd[b] = "on" + b, d);
            return fd[c.key] = c
        },
        kd = function() {
            var a = ld,
                b = Qc ? function(c) {
                    return a.call(b.src,
                        b.Fa, c)
                } : function(c) {
                    c = a.call(b.src, b.Fa, c);
                    if (!c) return c
                };
            return b
        },
        md = function(a, b, c, d, f) {
            if (n(b)) {
                for (var g = 0; g < b.length; g++) md(a, b[g], c, d, f);
                return null
            }
            c = id(c);
            return Zc(a) ? a.Mc(b, c, d, f) : jd(a, b, c, !0, d, f)
        },
        M = function(a, b, c, d, f) {
            if (n(b))
                for (var g = 0; g < b.length; g++) M(a, b[g], c, d, f);
            else c = id(c), Zc(a) ? a.ba(b, c, d, f) : a && (d = !!d, (a = nd(a)) && (b = a.Oc(b, c, d, f)) && od(b))
        },
        od = function(a) {
            if (ia(a) || !a || a.dc) return !1;
            var b = a.src;
            if (Zc(b)) return ed(b.pa, a);
            var c = a.type,
                d = a.Ud;
            b.removeEventListener ? b.removeEventListener(c,
                d, a.capture) : b.detachEvent && b.detachEvent(c in hd ? hd[c] : hd[c] = "on" + c, d);
            (c = nd(b)) ? (ed(c, a), 0 == c.Tc && (c.src = null, delete gd[na(b)])) : bd(a);
            delete fd[a.key];
            return !0
        },
        qd = function(a) {
            if (a) Zc(a) ? a.pa && a.pa.La(void 0) : pd(na(a), void 0);
            else {
                a = 0;
                for (var b in gd) a += pd(b)
            }
        },
        pd = function(a, b) {
            var c = gd[a];
            if (!c) return 0;
            var d = 0,
                f;
            for (f in c.T)
                if (!b || f == b)
                    for (var g = Ya(c.T[f]), h = 0; h < g.length; ++h) od(g[h]) && ++d;
            return d
        },
        sd = function(a, b, c, d) {
            var f = 1;
            if (a = nd(a))
                if (b = a.T[b])
                    for (b = Ya(b), a = 0; a < b.length; a++) {
                        var g = b[a];
                        g && (g.capture == c && !g.dc) && (f &= !1 !== rd(g, d))
                    }
                return Boolean(f)
        },
        rd = function(a, b) {
            var c = a.Fa,
                d = a.Od || a.src;
            a.Nd && od(a);
            return c.call(d, b)
        },
        ld = function(a, b) {
            if (a.dc) return !0;
            if (!Qc) {
                var c = b || ca("window.event"),
                    d = new Vc(c, this),
                    f = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    t: {
                        var g = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break t
                        } catch (h) {
                            g = !0
                        }
                        if (g || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (g = d.currentTarget; g; g = g.parentNode) c.push(g);
                    for (var g = a.type, k = c.length - 1; !d.rb && 0 <= k; k--) d.currentTarget = c[k],
                    f &= sd(c[k], g, !0, d);
                    for (k = 0; !d.rb && k < c.length; k++) d.currentTarget = c[k],
                    f &= sd(c[k], g, !1, d)
                }
                return f
            }
            return rd(a, new Vc(b, this))
        },
        nd = function(a) {
            return a[la] ? gd[na(a)] || null : null
        },
        td = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        id = function(a) {
            y(a, "Listener can not be null.");
            if (ja(a)) return a;
            y(a.handleEvent, "An object listener must have handleEvent method.");
            return a[td] || (a[td] = function(b) {
                return a.handleEvent(b)
            })
        };
    var ud = function(a) {
            if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
            switch (a.keyCode) {
                case 18:
                case 20:
                case 93:
                case 17:
                case 40:
                case 35:
                case 27:
                case 36:
                case 45:
                case 37:
                case 224:
                case 91:
                case 144:
                case 12:
                case 34:
                case 33:
                case 19:
                case 255:
                case 44:
                case 39:
                case 145:
                case 16:
                case 38:
                case 224:
                case 92:
                    return !1;
                case 0:
                    return !E;
                default:
                    return 166 > a.keyCode || 183 < a.keyCode
            }
        },
        wd = function(a, b, c, d, f) {
            if (!(D || F && G("525"))) return !0;
            if (tb && f) return vd(a);
            if (f && !d || !c && (17 == b || 18 == b || tb && 91 ==
                    b)) return !1;
            if (F && d && c) switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
            if (D && d && b == a) return !1;
            switch (a) {
                case 13:
                    return !(D && D && 9 <= Mb);
                case 27:
                    return !F
            }
            return vd(a)
        },
        vd = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || F && 0 == a) return !0;
            switch (a) {
                case 32:
                case 63:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                    return !0;
                default:
                    return !1
            }
        },
        xd = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };
    var yd = function(a) {
        this.w = a;
        this.u = {}
    };
    u(yd, Kc);
    var zd = [];
    e = yd.prototype;
    e.d = function(a, b, c, d, f) {
        n(b) || (zd[0] = b, b = zd);
        for (var g = 0; g < b.length; g++) {
            var h = L(a, b[g], c || this, d || !1, f || this.w || this);
            if (!h) break;
            this.u[h.key] = h
        }
        return this
    };
    e.Mc = function(a, b, c, d, f) {
        if (n(b))
            for (var g = 0; g < b.length; g++) this.Mc(a, b[g], c, d, f);
        else {
            a = md(a, b, c || this, d, f || this.w || this);
            if (!a) return this;
            this.u[a.key] = a
        }
        return this
    };
    e.ba = function(a, b, c, d, f) {
        if (n(b))
            for (var g = 0; g < b.length; g++) this.ba(a, b[g], c, d, f);
        else f = f || this.w || this, c = id(c || this), d = !!d, b = Zc(a) ? a.Oc(b, c, d, f) : a ? (a = nd(a)) ? a.Oc(b, c, d, f) : null : null, b && (od(b), delete this.u[b.key]);
        return this
    };
    e.La = function() {
        ab(this.u, od);
        this.u = {}
    };
    e.e = function() {
        yd.c.e.call(this);
        this.La()
    };
    e.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var N = function() {
        this.pa = new cd(this);
        this.pi = this
    };
    u(N, Kc);
    N.prototype[Yc] = !0;
    e = N.prototype;
    e.Id = null;
    e.Be = function(a) {
        this.Id = a
    };
    e.addEventListener = function(a, b, c, d) {
        L(this, a, b, c, d)
    };
    e.removeEventListener = function(a, b, c, d) {
        M(this, a, b, c, d)
    };
    e.dispatchEvent = function(a) {
        Ad(this);
        var b, c = this.Id;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Id) b.push(c), y(1E3 > ++d, "infinite loop")
        }
        c = this.pi;
        d = a.type || a;
        if (q(a)) a = new K(a, c);
        else if (a instanceof K) a.target = a.target || c;
        else {
            var f = a;
            a = new K(d, c);
            hb(a, f)
        }
        var f = !0,
            g;
        if (b)
            for (var h = b.length - 1; !a.rb && 0 <= h; h--) g = a.currentTarget = b[h], f = Bd(g, d, !0, a) && f;
        a.rb || (g = a.currentTarget = c, f = Bd(g, d, !0, a) && f, a.rb || (f = Bd(g, d, !1, a) && f));
        if (b)
            for (h = 0; !a.rb && h < b.length; h++) g = a.currentTarget = b[h], f = Bd(g, d, !1, a) && f;
        return f
    };
    e.e = function() {
        N.c.e.call(this);
        this.pa && this.pa.La(void 0);
        this.Id = null
    };
    e.d = function(a, b, c, d) {
        Ad(this);
        return this.pa.add(a, b, !1, c, d)
    };
    e.Mc = function(a, b, c, d) {
        return this.pa.add(a, b, !0, c, d)
    };
    e.ba = function(a, b, c, d) {
        return this.pa.remove(a, b, c, d)
    };
    var Bd = function(a, b, c, d) {
        b = a.pa.T[b];
        if (!b) return !0;
        b = Ya(b);
        for (var f = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.dc && h.capture == c) {
                var k = h.Fa,
                    l = h.Od || h.src;
                h.Nd && ed(a.pa, h);
                f = !1 !== k.call(l, d) && f
            }
        }
        return f && !1 != d.rg
    };
    N.prototype.Vd = function(a, b) {
        return this.pa.Vd(a, b)
    };
    N.prototype.Oc = function(a, b, c, d) {
        return this.pa.Oc(a, b, c, d)
    };
    var Ad = function(a) {
        y(a.pa, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var Cd = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    e = Cd.prototype;
    e.ea = function() {
        return new Cd(this.top, this.right, this.bottom, this.left)
    };
    e.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    e.contains = function(a) {
        return this && a ? a instanceof Cd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    e.expand = function(a, b, c, d) {
        ka(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
        return this
    };
    e.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    e.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Dd = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    e = Dd.prototype;
    e.ea = function() {
        return new Dd(this.left, this.top, this.width, this.height)
    };
    e.toString = function() {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    };
    e.Cg = function(a) {
        var b = Math.max(this.left, a.left),
            c = Math.min(this.left + this.width, a.left + a.width);
        if (b <= c) {
            var d = Math.max(this.top, a.top);
            a = Math.min(this.top + this.height, a.top + a.height);
            if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0
        }
        return !1
    };
    e.contains = function(a) {
        return a instanceof Dd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    e.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    e.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Fd = function(a, b, c) {
            q(b) ? Ed(a, c, b) : ab(b, s(Ed, a))
        },
        Ed = function(a, b, c) {
            (c = Gd(a, c)) && (a.style[c] = b)
        },
        Gd = function(a, b) {
            var c = Ea(b);
            if (void 0 === a.style[c]) {
                var d = (F ? "Webkit" : E ? "Moz" : D ? "ms" : yb ? "O" : null) + Fa(b);
                if (void 0 !== a.style[d]) return d
            }
            return c
        },
        Hd = function(a, b) {
            var c = H(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
        },
        Id = function(a, b) {
            return Hd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        Jd = function(a) {
            return Id(a, "position")
        },
        Ld = function(a, b, c) {
            var d, f = E && (tb || Bb) && G("1.9");
            b instanceof C ? (d = b.x, b = b.y) : (d = b, b = c);
            a.style.left = Kd(d, f);
            a.style.top = Kd(b, f)
        },
        Md = function(a) {
            a = a ? H(a) : document;
            return !D || D && 9 <= Mb || Ac(I(a)) ? a.documentElement : a.body
        },
        Nd = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            D && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Od =
        function(a) {
            if (D && !(D && 8 <= Mb)) return a.offsetParent;
            var b = H(a),
                c = Id(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (c = Id(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        Rd = function(a) {
            for (var b = new Cd(0, Infinity, Infinity, 0), c = I(a), d = c.m.body, f = c.m.documentElement, g = !F && bc(c.m) ? c.m.documentElement : c.m.body; a = Od(a);)
                if (!(D &&
                        0 == a.clientWidth || F && 0 == a.clientHeight && a == d || a == d || a == f || "visible" == Id(a, "overflow"))) {
                    var h = Pd(a),
                        k;
                    k = a;
                    if (E && !G("1.9")) {
                        var l = parseFloat(Hd(k, "borderLeftWidth"));
                        if (Qd(k)) var t = k.offsetWidth - k.clientWidth - l - parseFloat(Hd(k, "borderRightWidth")),
                            l = l + t;
                        k = new C(l, parseFloat(Hd(k, "borderTopWidth")))
                    } else k = new C(k.clientLeft, k.clientTop);
                    h.x += k.x;
                    h.y += k.y;
                    b.top = Math.max(b.top, h.y);
                    b.right = Math.min(b.right, h.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                    b.left = Math.max(b.left, h.x)
                }
            d =
                g.scrollLeft;
            g = g.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, g);
            c = cc(Bc(c) || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, g + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        },
        Pd = function(a) {
            var b, c = H(a),
                d = Id(a, "position");
            Ka(a, "Parameter is required");
            var f = E && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
                g = new C(0, 0),
                h = Md(c);
            if (a == h) return g;
            if (a.getBoundingClientRect) b =
                Nd(a), a = Cc(I(c)), g.x = b.left + a.x, g.y = b.top + a.y;
            else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
            else {
                b = a;
                do {
                    g.x += b.offsetLeft;
                    g.y += b.offsetTop;
                    b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
                    if (F && "fixed" == Jd(b)) {
                        g.x += c.body.scrollLeft;
                        g.y += c.body.scrollTop;
                        break
                    }
                    b = b.offsetParent
                } while (b && b != a);
                if (yb || F && "absolute" == d) g.y -= c.body.offsetTop;
                for (b = a;
                    (b = Od(b)) && b != c.body && b != h;) g.x -= b.scrollLeft, yb && "TR" == b.tagName || (g.y -= b.scrollTop)
            }
            return g
        },
        Td = function(a, b) {
            var c = Sd(a),
                d = Sd(b);
            return new C(c.x - d.x, c.y - d.y)
        },
        Vd = function(a) {
            var b;
            if (a.getBoundingClientRect) b = Nd(a), b = new C(b.left, b.top);
            else {
                b = Cc(I(a));
                var c = Pd(a);
                b = new C(c.x - b.x, c.y - b.y)
            }
            if (E && !G(12)) {
                var d;
                D ? d = "-ms-transform" : F ? d = "-webkit-transform" : yb ? d = "-o-transform" : E && (d = "-moz-transform");
                var f;
                d && (f = Id(a, d));
                f || (f = Id(a, "transform"));
                a = f ? (a = f.match(Ud)) ? new C(parseFloat(a[1]), parseFloat(a[2])) : new C(0, 0) : new C(0, 0);
                a = new C(b.x + a.x, b.y + a.y)
            } else a = b;
            return a
        },
        Sd = function(a) {
            y(a);
            if (1 ==
                a.nodeType) return Vd(a);
            var b = ja(a.sb),
                c = a;
            a.targetTouches ? c = a.targetTouches[0] : b && a.sb().targetTouches && (c = a.sb().targetTouches[0]);
            return new C(c.clientX, c.clientY)
        },
        Wd = function(a, b, c) {
            if (b instanceof mb) c = b.height, b = b.width;
            else if (void 0 == c) throw Error("missing height argument");
            a.style.width = Kd(b, !0);
            a.style.height = Kd(c, !0)
        },
        Kd = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        },
        Yd = function(a) {
            var b = Xd;
            if ("none" != Id(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                f = c.visibility,
                g = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = g;
            c.visibility = f;
            return a
        },
        Xd = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = F && !b && !c;
            return ga(b) && !d || !a.getBoundingClientRect ? new mb(b, c) : (a = Nd(a), new mb(a.right - a.left, a.bottom - a.top))
        },
        Zd = function(a) {
            var b = Pd(a);
            a = Yd(a);
            return new Dd(b.x, b.y, a.width, a.height)
        },
        $d = function(a, b) {
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" +
                100 * b + ")")
        },
        O = function(a, b) {
            a.style.display = b ? "" : "none"
        },
        Qd = function(a) {
            return "rtl" == Id(a, "direction")
        },
        ae = E ? "MozUserSelect" : F ? "WebkitUserSelect" : null,
        be = function(a, b) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var c = a.style.left,
                d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            var f = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return f
        },
        ce = function(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            return c ? be(a, c) : 0
        },
        de = function(a) {
            if (D) {
                var b = ce(a, "paddingLeft"),
                    c = ce(a, "paddingRight"),
                    d = ce(a, "paddingTop");
                a = ce(a, "paddingBottom");
                return new Cd(d, c, a, b)
            }
            b = Hd(a, "paddingLeft");
            c = Hd(a, "paddingRight");
            d = Hd(a, "paddingTop");
            a = Hd(a, "paddingBottom");
            return new Cd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        },
        ee = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        fe = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return c in ee ? ee[c] : be(a, c)
        },
        ge = function(a) {
            if (D) {
                var b = fe(a, "borderLeft"),
                    c = fe(a,
                        "borderRight"),
                    d = fe(a, "borderTop");
                a = fe(a, "borderBottom");
                return new Cd(d, c, a, b)
            }
            b = Hd(a, "borderLeftWidth");
            c = Hd(a, "borderRightWidth");
            d = Hd(a, "borderTopWidth");
            a = Hd(a, "borderBottomWidth");
            return new Cd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        },
        Ud = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
    var he = function(a, b, c) {
        N.call(this);
        this.target = a;
        this.handle = b || a;
        this.Re = c || new Dd(NaN, NaN, NaN, NaN);
        this.m = H(a);
        this.s = new yd(this);
        Lc(this, s(J, this.s));
        L(this.handle, ["touchstart", "mousedown"], this.Yf, !1, this)
    };
    u(he, N);
    var ie = D || E && G("1.9.3");
    e = he.prototype;
    e.clientX = 0;
    e.clientY = 0;
    e.screenX = 0;
    e.screenY = 0;
    e.$f = 0;
    e.ag = 0;
    e.Zb = 0;
    e.$b = 0;
    e.Ae = !0;
    e.Ib = !1;
    e.Zf = 0;
    e.Eh = 0;
    e.Dh = !1;
    e.Ed = !1;
    e.Z = function() {
        return this.s
    };
    var je = function(a, b) {
        a.Re = b || new Dd(NaN, NaN, NaN, NaN)
    };
    he.prototype.Aa = function(a) {
        this.Ae = a
    };
    he.prototype.e = function() {
        he.c.e.call(this);
        M(this.handle, ["touchstart", "mousedown"], this.Yf, !1, this);
        this.s.La();
        ie && this.m.releaseCapture();
        this.handle = this.target = null
    };
    var ke = function(a) {
        ga(a.mb) || (a.mb = Qd(a.target));
        return a.mb
    };
    he.prototype.Yf = function(a) {
        var b = "mousedown" == a.type;
        if (!this.Ae || this.Ib || b && !Xc(a)) this.dispatchEvent("earlycancel");
        else {
            le(a);
            if (0 == this.Zf)
                if (this.dispatchEvent(new me("start", this, a.clientX, a.clientY, a))) this.Ib = !0, a.preventDefault();
                else return;
            else a.preventDefault();
            var b = this.m,
                c = b.documentElement,
                d = !ie;
            this.s.d(b, ["touchmove", "mousemove"], this.Ch, d);
            this.s.d(b, ["touchend", "mouseup"], this.Fd, d);
            ie ? (c.setCapture(!1), this.s.d(c, "losecapture", this.Fd)) : this.s.d(dc(b), "blur", this.Fd);
            D && this.Dh &&
                this.s.d(b, "dragstart", Mc);
            this.Gh && this.s.d(this.Gh, "scroll", this.Fh, d);
            this.clientX = this.$f = a.clientX;
            this.clientY = this.ag = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.Ed ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Jd(a) || (c = H(a).documentElement), c ? (E ? (d = ge(c), b += d.left) : D && 8 <= Mb && (d = ge(c), b -= d.left), a = Qd(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
            this.Zb = a;
            this.$b = this.target.offsetTop;
            this.Ce = Cc(I(this.m));
            this.Eh = qa()
        }
    };
    he.prototype.Fd = function(a) {
        this.s.La();
        ie && this.m.releaseCapture();
        if (this.Ib) {
            le(a);
            this.Ib = !1;
            var b = ne(this, this.Zb),
                c = oe(this, this.$b);
            this.dispatchEvent(new me("end", this, a.clientX, a.clientY, a, b, c))
        } else this.dispatchEvent("earlycancel")
    };
    var le = function(a) {
        var b = a.type;
        "touchstart" == b || "touchmove" == b ? Uc(a, a.sb().targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || Uc(a, a.sb().changedTouches[0], a.currentTarget)
    };
    he.prototype.Ch = function(a) {
        if (this.Ae) {
            le(a);
            var b = (this.Ed && ke(this) ? -1 : 1) * (a.clientX - this.clientX),
                c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.Ib) {
                var d = this.$f - this.clientX,
                    f = this.ag - this.clientY;
                if (d * d + f * f > this.Zf)
                    if (this.dispatchEvent(new me("start", this, a.clientX, a.clientY, a))) this.Ib = !0;
                    else {
                        this.zb || this.Fd(a);
                        return
                    }
            }
            c = pe(this, b, c);
            b = c.x;
            c = c.y;
            this.Ib && this.dispatchEvent(new me("beforedrag", this, a.clientX,
                a.clientY, a, b, c)) && (qe(this, a, b, c), a.preventDefault())
        }
    };
    var pe = function(a, b, c) {
        var d = Cc(I(a.m));
        b += d.x - a.Ce.x;
        c += d.y - a.Ce.y;
        a.Ce = d;
        a.Zb += b;
        a.$b += c;
        b = ne(a, a.Zb);
        a = oe(a, a.$b);
        return new C(b, a)
    };
    he.prototype.Fh = function(a) {
        var b = pe(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        qe(this, a, b.x, b.y)
    };
    var qe = function(a, b, c, d) {
            a.Ed && ke(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
            a.target.style.top = d + "px";
            a.dispatchEvent(new me("drag", a, b.clientX, b.clientY, b, c, d))
        },
        ne = function(a, b) {
            var c = a.Re,
                d = isNaN(c.left) ? null : c.left,
                c = isNaN(c.width) ? 0 : c.width;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        },
        oe = function(a, b) {
            var c = a.Re,
                d = isNaN(c.top) ? null : c.top,
                c = isNaN(c.height) ? 0 : c.height;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        },
        me = function(a,
            b, c, d, f, g, h) {
            K.call(this, a);
            this.clientX = c;
            this.clientY = d;
            this.yh = f;
            this.left = ga(g) ? g : b.Zb;
            this.top = ga(h) ? h : b.$b
        };
    u(me, K);
    var re = "StopIteration" in m ? m.StopIteration : Error("StopIteration"),
        se = function() {};
    se.prototype.next = function() {
        throw re;
    };
    se.prototype.Vc = function() {
        return this
    };
    var te = function(a) {
            if (a instanceof se) return a;
            if ("function" == typeof a.Vc) return a.Vc(!1);
            if (ha(a)) {
                var b = 0,
                    c = new se;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw re;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        ue = function(a, b, c) {
            if (ha(a)) try {
                A(a, b, c)
            } catch (d) {
                if (d !== re) throw d;
            } else {
                a = te(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (f) {
                    if (f !== re) throw f;
                }
            }
        };
    var P = function(a, b) {
        this.S = {};
        this.u = [];
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.Te(a)
    };
    e = P.prototype;
    e.L = 0;
    e.Sc = 0;
    e.wa = function() {
        ve(this);
        for (var a = [], b = 0; b < this.u.length; b++) a.push(this.S[this.u[b]]);
        return a
    };
    e.$a = function() {
        ve(this);
        return this.u.concat()
    };
    e.cc = function(a) {
        return we(this.S, a)
    };
    e.clear = function() {
        this.S = {};
        this.Sc = this.L = this.u.length = 0
    };
    e.remove = function(a) {
        return we(this.S, a) ? (delete this.S[a], this.L--, this.Sc++, this.u.length > 2 * this.L && ve(this), !0) : !1
    };
    var ve = function(a) {
        if (a.L != a.u.length) {
            for (var b = 0, c = 0; b < a.u.length;) {
                var d = a.u[b];
                we(a.S, d) && (a.u[c++] = d);
                b++
            }
            a.u.length = c
        }
        if (a.L != a.u.length) {
            for (var f = {}, c = b = 0; b < a.u.length;) d = a.u[b], we(f, d) || (a.u[c++] = d, f[d] = 1), b++;
            a.u.length = c
        }
    };
    e = P.prototype;
    e.get = function(a, b) {
        return we(this.S, a) ? this.S[a] : b
    };
    e.set = function(a, b) {
        we(this.S, a) || (this.L++, this.u.push(a), this.Sc++);
        this.S[a] = b
    };
    e.Te = function(a) {
        var b;
        a instanceof P ? (b = a.$a(), a = a.wa()) : (b = db(a), a = cb(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    e.ea = function() {
        return new P(this)
    };
    e.Vc = function(a) {
        ve(this);
        var b = 0,
            c = this.u,
            d = this.S,
            f = this.Sc,
            g = this,
            h = new se;
        h.next = function() {
            for (;;) {
                if (f != g.Sc) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw re;
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };
    var we = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var xe = function(a) {
            if ("function" == typeof a.wa) return a.wa();
            if (q(a)) return a.split("");
            if (ha(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return cb(a)
        },
        ye = function(a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if (ha(a) || q(a)) A(a, b, c);
            else {
                var d;
                if ("function" == typeof a.$a) d = a.$a();
                else if ("function" != typeof a.wa)
                    if (ha(a) || q(a)) {
                        d = [];
                        for (var f = a.length, g = 0; g < f; g++) d.push(g)
                    } else d = db(a);
                else d = void 0;
                for (var f = xe(a), g = f.length, h = 0; h < g; h++) b.call(c, f[h], d && d[h], a)
            }
        };
    var ze = function(a) {
        N.call(this);
        this.b = a;
        a = D ? "focusout" : "blur";
        this.zh = L(this.b, D ? "focusin" : "focus", this, !D);
        this.Ah = L(this.b, a, this, !D)
    };
    u(ze, N);
    ze.prototype.handleEvent = function(a) {
        var b = new Vc(a.sb());
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    ze.prototype.e = function() {
        ze.c.e.call(this);
        od(this.zh);
        od(this.Ah);
        delete this.b
    };
    var Q = function(a, b, c) {
            if (ja(a)) c && (a = r(a, c));
            else if (a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
        },
        Ae = function(a) {
            m.clearTimeout(a)
        };
    var Be = function() {};
    ea(Be);
    Be.prototype.zi = 0;
    Be.ac();
    var R = function(a) {
        N.call(this);
        this.g = a || I();
        this.mb = Ce
    };
    u(R, N);
    R.prototype.yi = Be.ac();
    var Ce = null,
        De = function(a, b) {
            switch (a) {
                case 1:
                    return b ? "disable" : "enable";
                case 2:
                    return b ? "highlight" : "unhighlight";
                case 4:
                    return b ? "activate" : "deactivate";
                case 8:
                    return b ? "select" : "unselect";
                case 16:
                    return b ? "check" : "uncheck";
                case 32:
                    return b ? "focus" : "blur";
                case 64:
                    return b ? "open" : "close"
            }
            throw Error("Invalid component state");
        };
    e = R.prototype;
    e.Pa = null;
    e.D = !1;
    e.b = null;
    e.mb = null;
    e.G = null;
    e.K = null;
    e.ua = null;
    e.ib = null;
    e.cf = !1;
    var Ee = function(a) {
            return a.Pa || (a.Pa = ":" + (a.yi.zi++).toString(36))
        },
        Fe = function(a, b) {
            if (a.K && a.K.ib) {
                var c = a.K.ib,
                    d = a.Pa;
                d in c && delete c[d];
                c = a.K.ib;
                if (b in c) throw Error('The object already contains the key "' + b + '"');
                c[b] = a
            }
            a.Pa = b
        };
    e = R.prototype;
    e.a = function() {
        return this.b
    };
    e.Ja = function(a) {
        return this.b ? this.g.Ja(a, this.b) : []
    };
    e.mc = function(a) {
        return this.b ? this.g.mc(a, this.b) : null
    };
    e.Z = function() {
        return this.Tb || (this.Tb = new yd(this))
    };
    e.getParent = function() {
        return this.K
    };
    e.Be = function(a) {
        if (this.K && this.K != a) throw Error("Method not supported");
        R.c.Be.call(this, a)
    };
    e.l = function() {
        return this.g
    };
    e.h = function() {
        this.b = this.g.createElement("div")
    };
    e.M = function(a) {
        if (this.D) throw Error("Component already rendered");
        this.b || this.h();
        a ? a.insertBefore(this.b, null) : this.g.m.body.appendChild(this.b);
        this.K && !this.K.D || this.v()
    };
    e.Y = function(a) {
        if (this.D) throw Error("Component already rendered");
        if (a && this.lb(a)) {
            this.cf = !0;
            var b = H(a);
            this.g && this.g.m == b || (this.g = I(a));
            this.fb(a);
            this.v()
        } else throw Error("Invalid element to decorate");
    };
    e.lb = function() {
        return !0
    };
    e.fb = function(a) {
        this.b = a
    };
    e.v = function() {
        this.D = !0;
        Ge(this, function(a) {
            !a.D && a.a() && a.v()
        })
    };
    e.ja = function() {
        Ge(this, function(a) {
            a.D && a.ja()
        });
        this.Tb && this.Tb.La();
        this.D = !1
    };
    e.e = function() {
        this.D && this.ja();
        this.Tb && (this.Tb.j(), delete this.Tb);
        Ge(this, function(a) {
            a.j()
        });
        !this.cf && this.b && lc(this.b);
        this.K = this.G = this.b = this.ib = this.ua = null;
        R.c.e.call(this)
    };
    e.I = function() {
        return this.b
    };
    var He = function(a) {
        null == a.mb && (a.mb = Qd(a.D ? a.b : a.g.m.body));
        return a.mb
    };
    R.prototype.Xb = function(a) {
        if (this.D) throw Error("Component already rendered");
        this.mb = a
    };
    var Ge = function(a, b) {
        a.ua && A(a.ua, b, void 0)
    };
    R.prototype.removeChild = function(a, b) {
        if (a) {
            var c = q(a) ? a : Ee(a);
            a = this.ib && c ? (c in this.ib ? this.ib[c] : void 0) || null : null;
            if (c && a) {
                var d = this.ib;
                c in d && delete d[c];
                Wa(this.ua, a);
                b && (a.ja(), a.b && lc(a.b));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.K = null;
                R.c.Be.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    R.prototype.Wf = function(a) {
        for (var b = []; this.ua && 0 != this.ua.length;) b.push(this.removeChild(this.ua ? this.ua[0] || null : null, a));
        return b
    };
    var Ie = function(a, b) {
        N.call(this);
        this.w = new yd(this);
        this.lc(a || null);
        b && this.fd(b)
    };
    u(Ie, N);
    e = Ie.prototype;
    e.b = null;
    e.kh = !0;
    e.og = null;
    e.ia = !1;
    e.Zh = !1;
    e.oe = -1;
    e.Cf = -1;
    e.lh = !1;
    e.Xh = !0;
    e.Ca = "toggle_display";
    e.bg = function() {
        return this.Ca
    };
    e.fd = function(a) {
        this.Ca = a
    };
    e.a = function() {
        return this.b
    };
    e.lc = function(a) {
        if (this.ia) throw Error("Can not change this state of the popup while showing.");
        this.b = a
    };
    e.ed = function(a, b) {
        this.Qb = a;
        this.Ub = b
    };
    e.Z = function() {
        return this.w
    };
    e.A = function() {
        return this.ia
    };
    e.k = function(a) {
        this.Qb && this.Qb.stop();
        this.Ub && this.Ub.stop();
        a ? this.V() : this.U()
    };
    e.W = da;
    e.V = function() {
        if (!this.ia && this.fe()) {
            if (!this.b) throw Error("Caller must call setElement before trying to show the popup");
            this.W();
            var a = H(this.b);
            this.lh && this.w.d(a, "keydown", this.mh, !0);
            if (this.kh)
                if (this.w.d(a, "mousedown", this.Ff, !0), D) {
                    var b;
                    try {
                        b = a.activeElement
                    } catch (c) {}
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var d = nc(b)
                        } catch (f) {
                            break
                        }
                        a = d;
                        b = a.activeElement
                    }
                    this.w.d(a, "mousedown", this.Ff, !0);
                    this.w.d(a, "deactivate", this.Ef)
                } else this.w.d(a, "blur", this.Ef);
                "toggle_display" == this.Ca ? (this.b.style.visibility =
                "visible", O(this.b, !0)) : "move_offscreen" == this.Ca && this.W();
            this.ia = !0;
            this.oe = qa();
            this.Cf = -1;
            this.Qb ? (md(this.Qb, "end", this.Gf, !1, this), this.Qb.play()) : this.Gf()
        }
    };
    e.U = function(a) {
        if (!this.ia || !this.dispatchEvent({
                type: "beforehide",
                target: a
            })) return !1;
        this.w && this.w.La();
        this.ia = !1;
        this.Cf = qa();
        this.Ub ? (md(this.Ub, "end", s(this.sg, a), !1, this), this.Ub.play()) : this.sg(a);
        return !0
    };
    e.sg = function(a) {
        "toggle_display" == this.Ca ? this.Zh ? Q(this.pg, 0, this) : this.pg() : "move_offscreen" == this.Ca && (this.b.style.top = "-10000px");
        this.le(a)
    };
    e.pg = function() {
        this.b.style.visibility = "hidden";
        O(this.b, !1)
    };
    e.fe = function() {
        return this.dispatchEvent("beforeshow")
    };
    e.Gf = function() {
        this.dispatchEvent("show")
    };
    e.le = function(a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    e.Ff = function(a) {
        a = a.target;
        mc(this.b, a) || (this.og && !mc(this.og, a) || 150 > qa() - this.oe) || this.U(a)
    };
    e.mh = function(a) {
        27 == a.keyCode && this.U(a.target) && (a.preventDefault(), a.stopPropagation())
    };
    e.Ef = function(a) {
        if (this.Xh) {
            var b = H(this.b);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || mc(this.b, a) || "BODY" == a.tagName) return
            } else if (a.target != b) return;
            150 > qa() - this.oe || this.U()
        }
    };
    e.e = function() {
        Ie.c.e.call(this);
        this.w.j();
        J(this.Qb);
        J(this.Ub);
        delete this.b;
        delete this.w
    };
    var Je = function(a, b) {
        R.call(this, b);
        this.Qh = !!a;
        this.Lc = null
    };
    u(Je, R);
    e = Je.prototype;
    e.ae = null;
    e.Wa = !1;
    e.la = null;
    e.$ = null;
    e.Da = null;
    e.re = !1;
    e.q = function() {
        return "goog-modalpopup"
    };
    e.Pb = function() {
        return this.la
    };
    e.h = function() {
        Je.c.h.call(this);
        var a = this.a();
        Sb(a, this.q());
        sc(a, !0);
        O(a, !1);
        Ke(this);
        Le(this)
    };
    var Ke = function(a) {
            if (a.Qh && !a.$) {
                var b;
                b = a.l().h("iframe", {
                    frameborder: 0,
                    style: "border:0;vertical-align:bottom;",
                    src: 'javascript:""'
                });
                a.$ = b;
                a.$.className = a.q() + "-bg";
                O(a.$, !1);
                $d(a.$, 0)
            }
            a.la || (a.la = a.l().h("div", a.q() + "-bg"), O(a.la, !1))
        },
        Le = function(a) {
            a.Da || (a.Da = a.l().createElement("span"), O(a.Da, !1), sc(a.Da, !0), a.Da.style.position = "absolute")
        };
    e = Je.prototype;
    e.Df = function() {
        this.re = !1
    };
    e.lb = function(a) {
        return !!a && "DIV" == a.tagName
    };
    e.fb = function(a) {
        Je.c.fb.call(this, a);
        Sb(this.a(), this.q());
        Ke(this);
        Le(this);
        O(this.a(), !1)
    };
    e.v = function() {
        y(!!this.la, "Background element must not be null.");
        this.$ && kc(this.$, this.a());
        kc(this.la, this.a());
        Je.c.v.call(this);
        var a = this.a();
        a.parentNode && a.parentNode.insertBefore(this.Da, a.nextSibling);
        this.ae = new ze(zc(this.l()));
        this.Z().d(this.ae, "focusin", this.Vg);
        Me(this, !1)
    };
    e.ja = function() {
        this.A() && this.k(!1);
        J(this.ae);
        Je.c.ja.call(this);
        lc(this.$);
        lc(this.la);
        lc(this.Da)
    };
    e.k = function(a) {
        y(this.D, "ModalPopup must be rendered first.");
        a != this.Wa && (this.yb && this.yb.stop(), this.Sb && this.Sb.stop(), this.Db && this.Db.stop(), this.Wb && this.Wb.stop(), this.D && Me(this, a), a ? this.V() : this.U())
    };
    var Me = function(a, b) {
        for (var c = zc(a.l()).body.firstChild; c; c = c.nextSibling)
            if (1 == c.nodeType) {
                var d = c;
                b ? Ic(d, "hidden", b) : d.removeAttribute(Hc("hidden"))
            }
        c = a.b;
        y(c, "Can not call getElementStrict before rendering/decorating.");
        (d = !b) ? Ic(c, "hidden", d): c.removeAttribute(Hc("hidden"))
    };
    Je.prototype.ed = function(a, b, c, d) {
        this.yb = a;
        this.Db = b;
        this.Sb = c;
        this.Wb = d
    };
    Je.prototype.V = function() {
        if (this.dispatchEvent("beforeshow")) {
            try {
                this.Lc = zc(this.l()).activeElement
            } catch (a) {}
            this.xe();
            this.W();
            this.Z().d(Bc(this.l()), "resize", this.xe);
            Ne(this, !0);
            this.focus();
            this.Wa = !0;
            this.yb && this.Sb ? (md(this.yb, "end", this.yd, !1, this), this.Sb.play(), this.yb.play()) : this.yd()
        }
    };
    Je.prototype.U = function() {
        if (this.dispatchEvent("beforehide")) {
            this.Z().ba(Bc(this.l()), "resize", this.xe);
            this.Wa = !1;
            this.Db && this.Wb ? (md(this.Db, "end", this.Dd, !1, this), this.Wb.play(), this.Db.play()) : this.Dd();
            try {
                var a = zc(this.l()).body,
                    b = zc(this.l()).activeElement || a;
                this.Lc && (b == a && this.Lc != a) && this.Lc.focus()
            } catch (c) {}
            this.Lc = null
        }
    };
    var Ne = function(a, b) {
        a.$ && O(a.$, b);
        a.la && O(a.la, b);
        O(a.a(), b);
        O(a.Da, b)
    };
    e = Je.prototype;
    e.yd = function() {
        this.dispatchEvent("show")
    };
    e.Dd = function() {
        Ne(this, !1);
        this.dispatchEvent("hide")
    };
    e.A = function() {
        return this.Wa
    };
    e.focus = function() {
        this.Ig()
    };
    e.xe = function() {
        this.$ && O(this.$, !1);
        this.la && O(this.la, !1);
        var a = zc(this.l()),
            b = cc(dc(a) || window || window),
            c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
            a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.$ && (O(this.$, !0), Wd(this.$, c, a));
        this.la && (O(this.la, !0), Wd(this.la, c, a))
    };
    e.W = function() {
        var a = zc(this.l()),
            b = dc(a) || window;
        if ("fixed" == Jd(this.a())) var c = a = 0;
        else c = Cc(this.l()), a = c.x, c = c.y;
        var d = Yd(this.a()),
            b = cc(b || window),
            a = Math.max(a + b.width / 2 - d.width / 2, 0),
            c = Math.max(c + b.height / 2 - d.height / 2, 0);
        Ld(this.a(), a, c);
        Ld(this.Da, a, c)
    };
    e.Vg = function(a) {
        this.re ? this.Df() : a.target == this.Da && Q(this.Ig, 0, this)
    };
    e.Ig = function() {
        try {
            D && zc(this.l()).body.focus(), this.a().focus()
        } catch (a) {}
    };
    e.e = function() {
        J(this.yb);
        this.yb = null;
        J(this.Db);
        this.Db = null;
        J(this.Sb);
        this.Sb = null;
        J(this.Wb);
        this.Wb = null;
        Je.c.e.call(this)
    };
    var T = function(a, b, c) {
        Je.call(this, b, c);
        this.aa = a || "modal-dialog";
        this.P = S(S(new Oe, Pe, !0), Qe, !1, !0)
    };
    u(T, Je);
    e = T.prototype;
    e.nh = !0;
    e.Yd = !0;
    e.ef = !0;
    e.$d = !0;
    e.bd = 0.5;
    e.$c = "";
    e.H = "";
    e.jb = null;
    e.me = !1;
    e.X = null;
    e.Ia = null;
    e.cd = null;
    e.Ta = null;
    e.ca = null;
    e.N = null;
    e.Ze = "dialog";
    e.q = function() {
        return this.aa
    };
    e.za = function(a) {
        this.H = a;
        this.ca && (this.ca.innerHTML = a)
    };
    e.Gd = function() {
        return this.H
    };
    e.kc = function() {
        return this.Ze
    };
    e.I = function() {
        this.a() || this.M();
        return this.ca
    };
    e.Pb = function() {
        this.a() || this.M();
        return T.c.Pb.call(this)
    };
    var Re = function(a, b) {
            a.bd = b;
            if (a.a()) {
                var c = a.Pb();
                c && $d(c, a.bd)
            }
        },
        Se = function(a, b) {
            if (a.a()) {
                var c = a.X,
                    d = a.aa + "-title-draggable";
                b ? Sb(c, d) : Ub(c, d)
            }
            b && !a.jb ? (a.jb = new he(a.a(), a.X), Sb(a.X, a.aa + "-title-draggable"), L(a.jb, "start", a.ne, !1, a)) : !b && a.jb && (a.jb.j(), a.jb = null)
        };
    e = T.prototype;
    e.h = function() {
        T.c.h.call(this);
        var a = this.a();
        y(a, "getElement() returns null");
        var b = this.l();
        this.X = b.h("div", {
            className: this.aa + "-title",
            id: Ee(this)
        }, this.Ia = b.h("span", this.aa + "-title-text", this.$c), this.Ta = b.h("span", this.aa + "-title-close"));
        ic(a, this.X, this.ca = b.h("div", this.aa + "-content"), this.N = b.h("div", this.aa + "-buttons"));
        this.cd = this.X.id;
        Gc(a, this.kc());
        Ic(a, "labelledby", this.cd || "");
        this.H && (this.ca.innerHTML = this.H);
        O(this.Ta, this.Yd);
        this.P && (a = this.P, a.b = this.N, a.M());
        O(this.N, !!this.P);
        Re(this, this.bd)
    };
    e.fb = function(a) {
        T.c.fb.call(this, a);
        a = this.a();
        y(a, "The DOM element for dialog cannot be null.");
        var b = this.aa + "-content";
        (this.ca = Xb(document, null, b, a)[0]) ? this.H = this.ca.innerHTML: (this.ca = this.l().h("div", b), this.H && (this.ca.innerHTML = this.H), a.appendChild(this.ca));
        var b = this.aa + "-title",
            c = this.aa + "-title-text",
            d = this.aa + "-title-close";
        (this.X = Xb(document, null, b, a)[0]) ? (this.Ia = Xb(document, null, c, this.X)[0], this.Ta = Xb(document, null, d, this.X)[0], this.X.id || (this.X.id = Ee(this))) : (this.X = this.l().h("div", {
            className: b,
            id: Ee(this)
        }), a.insertBefore(this.X, this.ca));
        this.cd = this.X.id;
        this.Ia ? this.$c = uc(this.Ia) : (this.Ia = this.l().h("span", c, this.$c), this.X.appendChild(this.Ia));
        Ic(a, "labelledby", this.cd || "");
        this.Ta || (this.Ta = this.l().h("span", d), this.X.appendChild(this.Ta));
        O(this.Ta, this.Yd);
        b = this.aa + "-buttons";
        (this.N = Xb(document, null, b, a)[0]) ? (this.P = new Oe(this.l()), this.P.Y(this.N)) : (this.N = this.l().h("div", b), a.appendChild(this.N), this.P && (a = this.P, a.b = this.N, a.M()), O(this.N, !!this.P));
        Re(this,
            this.bd)
    };
    e.v = function() {
        T.c.v.call(this);
        this.Z().d(this.a(), "keydown", this.ff).d(this.a(), "keypress", this.ff);
        this.Z().d(this.N, "click", this.Sg);
        Se(this, this.$d);
        this.Z().d(this.Ta, "click", this.Tg);
        var a = this.a();
        y(a, "The DOM element for dialog cannot be null");
        Gc(a, this.kc());
        "" !== this.Ia.id && Ic(a, "labelledby", this.Ia.id);
        if (!this.ef && (this.ef = !1, this.D)) {
            var a = this.l(),
                b = this.Pb();
            a.removeNode(this.$);
            a.removeNode(b)
        }
    };
    e.ja = function() {
        this.A() && this.k(!1);
        Se(this, !1);
        T.c.ja.call(this)
    };
    e.k = function(a) {
        a != this.A() && (this.D || this.M(), T.c.k.call(this, a))
    };
    e.yd = function() {
        T.c.yd.call(this);
        this.dispatchEvent("aftershow")
    };
    e.Dd = function() {
        T.c.Dd.call(this);
        this.dispatchEvent("afterhide");
        this.me && this.j()
    };
    e.focus = function() {
        T.c.focus.call(this);
        if (this.P) {
            var a = this.P.dd;
            if (a)
                for (var b = zc(this.l()), c = this.N.getElementsByTagName("button"), d = 0, f; f = c[d]; d++)
                    if (f.name == a && !f.disabled) {
                        try {
                            if (F || yb) {
                                var g = b.createElement("input");
                                g.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
                                this.a().appendChild(g);
                                g.focus();
                                this.a().removeChild(g)
                            }
                            f.focus()
                        } catch (h) {}
                        break
                    }
        }
    };
    e.ne = function() {
        var a = zc(this.l()),
            b = cc(dc(a) || window || window),
            c = Math.max(a.body.scrollWidth, b.width),
            a = Math.max(a.body.scrollHeight, b.height),
            d = Yd(this.a());
        "fixed" == Jd(this.a()) ? je(this.jb, new Dd(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height))) : je(this.jb, new Dd(0, 0, c - d.width, a - d.height))
    };
    e.Tg = function() {
        if (this.Yd) {
            var a = this.P,
                b = a && a.pe;
            b ? (a = a.get(b), this.dispatchEvent(new Te(b, a)) && this.k(!1)) : this.k(!1)
        }
    };
    e.e = function() {
        this.N = this.Ta = null;
        T.c.e.call(this)
    };
    var Ue = function(a, b) {
        a.P = b;
        if (a.N) {
            if (a.P) {
                var c = a.P;
                c.b = a.N;
                c.M()
            } else a.N.innerHTML = "";
            O(a.N, !!a.P)
        }
    };
    T.prototype.Sg = function(a) {
        t: {
            for (a = a.target; null != a && a != this.N;) {
                if ("BUTTON" == a.tagName) break t;
                a = a.parentNode
            }
            a = null
        }
        if (a && !a.disabled) {
            a = a.name;
            var b = this.P.get(a);
            this.dispatchEvent(new Te(a, b)) && this.k(!1)
        }
    };
    T.prototype.ff = function(a) {
        var b = !1,
            c = !1,
            d = this.P,
            f = a.target;
        if ("keydown" == a.type)
            if (this.nh && 27 == a.keyCode) {
                var g = d && d.pe,
                    f = "SELECT" == f.tagName && !f.disabled;
                g && !f ? (c = !0, b = d.get(g), b = this.dispatchEvent(new Te(g, b))) : f || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && f == this.a()) {
                    this.re = !0;
                    try {
                        this.Da.focus()
                    } catch (h) {}
                    Q(this.Df, 0, this)
                }
            } else if (13 == a.keyCode) {
            if ("BUTTON" == f.tagName && !f.disabled) g = f.name;
            else if (d) {
                var k = d.dd,
                    l = k && Ve(d, k),
                    f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName || "A" == f.tagName) && !f.disabled;
                !l || (l.disabled || f) || (g = k)
            }
            g && d && (c = !0, b = this.dispatchEvent(new Te(g, String(d.get(g)))))
        }
        if (b || c) a.stopPropagation(), a.preventDefault();
        b && this.k(!1)
    };
    var Te = function(a, b) {
        this.type = "dialogselect";
        this.key = a;
        this.caption = b
    };
    u(Te, K);
    var Oe = function(a) {
        this.g = a || I();
        P.call(this)
    };
    u(Oe, P);
    e = Oe.prototype;
    e.aa = "goog-buttonset";
    e.dd = null;
    e.b = null;
    e.pe = null;
    e.set = function(a, b, c, d) {
        P.prototype.set.call(this, a, b);
        c && (this.dd = a);
        d && (this.pe = a);
        return this
    };
    var S = function(a, b, c, d) {
        return a.set(b.key, b.caption, c, d)
    };
    Oe.prototype.M = function() {
        if (this.b) {
            this.b.innerHTML = "";
            var a = I(this.b);
            ye(this, function(b, c) {
                var d = a.h("button", {
                    name: c
                }, b);
                c == this.dd && (d.className = this.aa + "-default");
                this.b.appendChild(d)
            }, this)
        }
    };
    Oe.prototype.Y = function(a) {
        if (a && 1 == a.nodeType) {
            this.b = a;
            a = this.b.getElementsByTagName("button");
            for (var b = 0, c, d, f; c = a[b]; b++)
                if (d = c.name || c.id, f = uc(c) || c.value, d) {
                    var g = 0 == b;
                    this.set(d, f, g, "cancel" == c.name);
                    g && Sb(c, this.aa + "-default")
                }
        }
    };
    Oe.prototype.a = function() {
        return this.b
    };
    Oe.prototype.l = function() {
        return this.g
    };
    var Ve = function(a, b) {
            for (var c = a.b.getElementsByTagName("BUTTON"), d = 0, f; f = c[d]; d++)
                if (f.name == b || f.id == b) return f;
            return null
        },
        Pe = {
            key: "ok",
            caption: "OK"
        },
        Qe = {
            key: "cancel",
            caption: "Cancel"
        },
        We = {
            key: "yes",
            caption: "Yes"
        },
        Ye = {
            key: "no",
            caption: "No"
        },
        Ze = {
            key: "save",
            caption: "Save"
        },
        $e = {
            key: "continue",
            caption: "Continue"
        };
    "undefined" != typeof document && (S(new Oe, Pe, !0, !0), S(S(new Oe, Pe, !0), Qe, !1, !0), S(S(new Oe, We, !0), Ye, !1, !0), S(S(S(new Oe, We), Ye, !0), Qe, !1, !0), S(S(S(new Oe, $e), Ze), Qe, !0, !0));
    var af = function() {
        return {
            key: "ok",
            caption: B("MSG_OK_BTN")
        }
    };
    kb({
        MSG_SAVE_BTN: "Save",
        MSG_CANCEL_BTN: "Cancel",
        MSG_OK_BTN: "Ok"
    });
    var bf = function(a, b, c) {
        K.call(this, a, b);
        this.data = c
    };
    u(bf, K);
    bf.prototype.e = function() {
        bf.c.e.call(this);
        delete this.data
    };
    var cf = function(a) {
        N.call(this);
        this.tc = {};
        this.vc = {};
        this.w = new yd(this);
        this.K = a
    };
    u(cf, N);
    var df = [D ? "readystatechange" : "load", "abort", "error"];
    cf.prototype.start = function() {
        var a = this.tc;
        A(db(a), function(b) {
            var c = a[b];
            if (c && (delete a[b], !this.zb)) {
                var d;
                d = this.K ? I(this.K).h("img") : new Image;
                this.w.d(d, df, this.cg);
                this.vc[b] = d;
                d.id = b;
                d.src = c
            }
        }, this)
    };
    cf.prototype.cg = function(a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type)
                if ("complete" == b.readyState) a.type = "load";
                else return;
                "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
            this.dispatchEvent({
                type: a.type,
                target: b
            });
            !this.zb && (a = b.id, delete this.tc[a], b = this.vc[a]) && (delete this.vc[a], this.w.ba(b, df, this.cg), fb(this.vc) && fb(this.tc) && this.dispatchEvent("complete"))
        }
    };
    cf.prototype.e = function() {
        delete this.tc;
        delete this.vc;
        J(this.w);
        cf.c.e.call(this)
    };
    var ef = function(a) {
        var b = a,
            c = window.GSA_getResourceRootPathPrefix;
        c && !v(c()) && (b = c() + encodeURIComponent(a));
        return b
    };
    var ff = function() {};
    ff.prototype.load = function(a, b, c) {
        var d = new cf;
        L(d, "load", s(this.Bi, b || ""), !1, this);
        c = ga(c) ? c : "images/cleardot.gif";
        if ("images/cleardot.gif" == c || "images/people_search_missing_image.gif" == c) c = ef(c);
        L(d, "error", s(this.Ai, c, b || ""), !1, this);
        a = Yb("async-img", a);
        for (b = 0; b < a.length; b++) c = x(a[b].innerHTML), (c = q(c) ? c : c.src) && (d.tc[a[b].id] = c);
        d.start();
        return d
    };
    var gf = function(a, b) {
        b && (a.className = b);
        var c = Wb(document, a.id);
        x(c.title) && (a.alt = c.title, a.title = c.title);
        if (c.parentNode) {
            var d = Yb("async-img-msg", c.parentNode);
            0 < d.length && (d[0].style.display = "none")
        }(d = c.parentNode) && d.replaceChild(a, c)
    };
    ff.prototype.Bi = function(a, b) {
        gf(b.target, a)
    };
    ff.prototype.Ai = function(a, b, c) {
        c = c.target;
        c.src = a;
        gf(c, b)
    };
    var hf = function(a) {
        N.call(this);
        this.b = a;
        a = D || F && !G("531") && "TEXTAREA" == a.tagName;
        this.s = new yd(this);
        this.s.d(this.b, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    };
    u(hf, N);
    hf.prototype.Rc = null;
    hf.prototype.handleEvent = function(a) {
        if ("input" == a.type) jf(this), yb && this.b != H(this.b).activeElement || this.dispatchEvent(kf(a));
        else if ("keydown" != a.type || ud(a)) {
            var b = "keydown" == a.type ? this.b.value : null;
            D && 229 == a.keyCode && (b = null);
            var c = kf(a);
            jf(this);
            this.Rc = Q(function() {
                this.Rc = null;
                this.b.value != b && this.dispatchEvent(c)
            }, 0, this)
        }
    };
    var jf = function(a) {
            null != a.Rc && (Ae(a.Rc), a.Rc = null)
        },
        kf = function(a) {
            a = new Vc(a.sb());
            a.type = "input";
            return a
        };
    hf.prototype.e = function() {
        hf.c.e.call(this);
        this.s.j();
        jf(this);
        delete this.b
    };
    var lf = {
            Bk: !0
        },
        mf = {
            Dk: !0
        },
        nf = {
            Ak: !0
        },
        of = {
            Ck: !0
        },
        pf = function() {
            throw Error("Do not instantiate directly");
        };
    pf.prototype.toString = function() {
        return this.content
    };
    var tf = function(a, b, c, d) {
            d = (d || I()).createElement("DIV");
            a = qf(a(b || rf, void 0, c));
            b = a.match(sf);
            y(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a);
            d.innerHTML = a;
            return 1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType) ? a : d
        },
        qf = function(a) {
            if (!ka(a)) return String(a);
            if (a instanceof pf) {
                if (a.na === lf) return Ja(a.content);
                if (a.na === of) return za(a.content)
            }
            Ia("Soy template output is unsafe for use as HTML: " +
                a);
            return "zSoyz"
        },
        sf = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i,
        rf = {};
    var uf = function(a, b, c) {
        this.Cc = a;
        this.ni = b || 0;
        this.w = c;
        this.mi = r(this.oi, this)
    };
    u(uf, Kc);
    e = uf.prototype;
    e.Pa = 0;
    e.e = function() {
        uf.c.e.call(this);
        this.stop();
        delete this.Cc;
        delete this.w
    };
    e.start = function(a) {
        this.stop();
        this.Pa = Q(this.mi, ga(a) ? a : this.ni)
    };
    e.stop = function() {
        this.Hb() && Ae(this.Pa);
        this.Pa = 0
    };
    e.Hb = function() {
        return 0 != this.Pa
    };
    e.oi = function() {
        this.Pa = 0;
        this.Cc && this.Cc.call(this.w)
    };
    var vf = {},
        wf = null,
        xf = function(a) {
            a = na(a);
            delete vf[a];
            fb(vf) && wf && wf.stop()
        },
        zf = function() {
            wf || (wf = new uf(function() {
                yf()
            }, 20));
            var a = wf;
            a.Hb() || a.start()
        },
        yf = function() {
            var a = qa();
            ab(vf, function(b) {
                Af(b, a)
            });
            fb(vf) || zf()
        };
    var Bf = function() {
        N.call(this);
        this.n = 0;
        this.Ge = this.startTime = null
    };
    u(Bf, N);
    Bf.prototype.fa = function(a) {
        this.dispatchEvent(a)
    };
    var Cf = function(a, b, c, d) {
        Bf.call(this);
        if (!n(a) || !n(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.Nc = a;
        this.ui = b;
        this.duration = c;
        this.Jg = d;
        this.coords = [];
        this.Ed = !1
    };
    u(Cf, Bf);
    e = Cf.prototype;
    e.di = 0;
    e.xa = 0;
    e.Ne = null;
    e.play = function(a) {
        if (a || 0 == this.n) this.xa = 0, this.coords = this.Nc;
        else if (1 == this.n) return !1;
        xf(this);
        this.startTime = a = qa(); - 1 == this.n && (this.startTime -= this.duration * this.xa);
        this.Ge = this.startTime + this.duration;
        this.Ne = this.startTime;
        this.xa || this.fa("begin");
        this.fa("play"); - 1 == this.n && this.fa("resume");
        this.n = 1;
        var b = na(this);
        b in vf || (vf[b] = this);
        zf();
        Af(this, a);
        return !0
    };
    e.stop = function(a) {
        xf(this);
        this.n = 0;
        a && (this.xa = 1);
        Df(this, this.xa);
        this.fa("stop");
        this.fa("end")
    };
    e.e = function() {
        0 == this.n || this.stop(!1);
        this.fa("destroy");
        Cf.c.e.call(this)
    };
    var Af = function(a, b) {
            a.xa = (b - a.startTime) / (a.Ge - a.startTime);
            1 <= a.xa && (a.xa = 1);
            a.di = 1E3 / (b - a.Ne);
            a.Ne = b;
            Df(a, a.xa);
            1 == a.xa ? (a.n = 0, xf(a), a.fa("finish"), a.fa("end")) : 1 == a.n && a.fa("animate")
        },
        Df = function(a, b) {
            ja(a.Jg) && (b = a.Jg(b));
            a.coords = Array(a.Nc.length);
            for (var c = 0; c < a.Nc.length; c++) a.coords[c] = (a.ui[c] - a.Nc[c]) * b + a.Nc[c]
        };
    Cf.prototype.fa = function(a) {
        this.dispatchEvent(new Ef(a, this))
    };
    var Ef = function(a, b) {
        K.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.xa = b.xa;
        this.state = b.n
    };
    u(Ef, K);
    var Gf = function(a, b, c, d, f) {
        function g(a) {
            a && (a.tabIndex = 0, Gc(a, h.xb()), Sb(a, "goog-zippy-header"), Ff(h, a), a && h.gf.d(a, "keydown", h.hh))
        }
        N.call(this);
        this.g = f || I();
        this.Ab = this.g.a(a) || null;
        this.od = this.g.a(d || null);
        this.Vb = (this.ie = ja(b) ? b : null) || !b ? null : this.g.a(b);
        this.hb = !0 == c;
        this.gf = new yd(this);
        this.be = new yd(this);
        var h = this;
        g(this.Ab);
        g(this.od);
        this.wc(this.hb)
    };
    u(Gf, N);
    e = Gf.prototype;
    e.Lb = !0;
    e.e = function() {
        Gf.c.e.call(this);
        J(this.gf);
        J(this.be)
    };
    e.xb = function() {
        return "tab"
    };
    e.I = function() {
        return this.Vb
    };
    e.expand = function() {
        this.wc(!0)
    };
    e.collapse = function() {
        this.wc(!1)
    };
    e.toggle = function() {
        this.wc(!this.hb)
    };
    e.wc = function(a) {
        this.Vb ? O(this.Vb, a) : a && this.ie && (this.Vb = this.ie());
        this.Vb && Sb(this.Vb, "goog-zippy-content");
        this.od ? (O(this.Ab, !a), O(this.od, a)) : Hf(this, a);
        this.hb = a;
        this.dispatchEvent(new If("toggle", this))
    };
    var Hf = function(a, b) {
        if (a.Ab) {
            var c = a.Ab;
            b ? Sb(c, "goog-zippy-expanded") : Ub(c, "goog-zippy-expanded");
            c = a.Ab;
            b ? Ub(c, "goog-zippy-collapsed") : Sb(c, "goog-zippy-collapsed");
            Ic(a.Ab, "expanded", b)
        }
    };
    Gf.prototype.Bf = function() {
        return this.Lb
    };
    Gf.prototype.ye = function(a) {
        this.Lb != a && ((this.Lb = a) ? (Ff(this, this.Ab), Ff(this, this.od)) : this.be.La())
    };
    var Ff = function(a, b) {
        b && a.be.d(b, "click", a.gi)
    };
    Gf.prototype.hh = function(a) {
        if (13 == a.keyCode || 32 == a.keyCode) this.toggle(), this.dispatchEvent(new K("action", this)), a.preventDefault(), a.stopPropagation()
    };
    Gf.prototype.gi = function() {
        this.toggle();
        this.dispatchEvent(new K("action", this))
    };
    var If = function(a, b) {
        K.call(this, a, b)
    };
    u(If, K);
    var Jf = function(a, b, c, d) {
        d = d || I();
        var f = d.h("div", {
            style: "overflow:hidden"
        });
        b = d.a(b);
        b.parentNode.replaceChild(f, b);
        f.appendChild(b);
        this.vd = f;
        this.ta = null;
        Gf.call(this, a, b, c, void 0, d);
        a = this.hb;
        this.vd.style.display = a ? "" : "none";
        Hf(this, a)
    };
    u(Jf, Gf);
    e = Jf.prototype;
    e.$e = 500;
    e.ji = function(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    e.wc = function(a) {
        if (this.hb != a || this.ta) {
            "none" == this.vd.style.display && (this.vd.style.display = "");
            var b = this.I().offsetHeight,
                c = 0;
            this.ta ? (a = this.hb, qd(this.ta), this.ta.stop(!1), c = parseInt(this.I().style.marginTop, 10), c = b - Math.abs(c)) : c = a ? 0 : b;
            Hf(this, a);
            this.ta = new Cf([0, c], [0, a ? b : 0], this.$e, this.ji);
            L(this.ta, ["begin", "animate", "end"], this.ki, !1, this);
            L(this.ta, "end", r(this.li, this, a));
            this.ta.play(!1)
        }
    };
    e.ki = function(a) {
        var b = this.I();
        b.style.marginTop = a.y - b.offsetHeight + "px"
    };
    e.li = function(a) {
        a && (this.I().style.marginTop = "0");
        qd(this.ta);
        this.hb = a;
        this.ta = null;
        a || (this.vd.style.display = "none");
        this.dispatchEvent(new If("toggle", this))
    };
    var Kf = !!m.DOMTokenList,
        Lf = Kf ? function(a) {
            return a.classList
        } : function(a) {
            a = a.className;
            return q(a) && a.match(/\S+/g) || []
        },
        Mf = Kf ? function(a, b) {
            y(!!a.classList);
            return a.classList.contains(b)
        } : function(a, b) {
            return Ua(Lf(a), b)
        },
        Nf = Kf ? function(a, b) {
            a.classList.add(b)
        } : function(a, b) {
            Mf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        },
        Of = Kf ? function(a, b) {
            A(b, function(b) {
                Nf(a, b)
            })
        } : function(a, b) {
            var c = {};
            A(Lf(a), function(a) {
                c[a] = !0
            });
            A(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className +=
                0 < a.className.length ? " " + d : d
        },
        Pf = Kf ? function(a, b) {
            a.classList.remove(b)
        } : function(a, b) {
            Mf(a, b) && (a.className = Oa(Lf(a), function(a) {
                return a != b
            }).join(" "))
        },
        Qf = Kf ? function(a, b) {
            A(b, function(b) {
                Pf(a, b)
            })
        } : function(a, b) {
            a.className = Oa(Lf(a), function(a) {
                return !Ua(b, a)
            }).join(" ")
        },
        Rf = function(a, b, c) {
            c ? Nf(a, b) : Pf(a, b)
        };
    var U = function(a, b) {
        R.call(this, b);
        this.Ma = a || ""
    };
    u(U, R);
    U.prototype.Oa = null;
    U.prototype.Ih = 10;
    var Sf = "placeholder" in document.createElement("input");
    e = U.prototype;
    e.uc = !1;
    e.h = function() {
        this.b = this.l().h("input", {
            type: "text"
        })
    };
    e.fb = function(a) {
        U.c.fb.call(this, a);
        this.Ma || (this.Ma = a.getAttribute("label") || "");
        yc(H(a)) == a && (this.uc = !0, a = this.a(), y(a), Pf(a, this.Dc));
        Sf ? this.a().placeholder = this.Ma : (a = this.a(), y(a, "The label input element cannot be null."), Ic(a, "label", this.Ma))
    };
    e.v = function() {
        U.c.v.call(this);
        var a = new yd(this);
        a.d(this.a(), "focus", this.lf);
        a.d(this.a(), "blur", this.dh);
        Sf ? this.s = a : (E && a.d(this.a(), ["keypress", "keydown", "keyup"], this.eh), a.d(dc(H(this.a())), "load", this.fh), this.s = a, Tf(this));
        Uf(this);
        this.a().bh = this
    };
    e.ja = function() {
        U.c.ja.call(this);
        this.s && (this.s.j(), this.s = null);
        this.a().bh = null
    };
    var Tf = function(a) {
        !a.oh && (a.s && a.a().form) && (a.s.d(a.a().form, "submit", a.ph), a.oh = !0)
    };
    e = U.prototype;
    e.e = function() {
        U.c.e.call(this);
        this.s && (this.s.j(), this.s = null)
    };
    e.Dc = "label-input-label";
    e.lf = function() {
        this.uc = !0;
        var a = this.a();
        y(a);
        Pf(a, this.Dc);
        if (!Sf && !Vf(this) && !this.Hh) {
            var b = this,
                a = function() {
                    b.a() && (b.a().value = "")
                };
            D ? Q(a, 10) : a()
        }
    };
    e.dh = function() {
        Sf || (this.s.ba(this.a(), "click", this.lf), this.Oa = null);
        this.uc = !1;
        Uf(this)
    };
    e.eh = function(a) {
        27 == a.keyCode && ("keydown" == a.type ? this.Oa = this.a().value : "keypress" == a.type ? this.a().value = this.Oa : "keyup" == a.type && (this.Oa = null), a.preventDefault())
    };
    e.ph = function() {
        Vf(this) || (this.a().value = "", Q(this.Ph, 10, this))
    };
    e.Ph = function() {
        Vf(this) || (this.a().value = this.Ma)
    };
    e.fh = function() {
        Uf(this)
    };
    var Vf = function(a) {
        return !!a.a() && "" != a.a().value && a.a().value != a.Ma
    };
    U.prototype.clear = function() {
        this.a().value = "";
        null != this.Oa && (this.Oa = "")
    };
    U.prototype.reset = function() {
        Vf(this) && (this.clear(), Uf(this))
    };
    U.prototype.Va = function(a) {
        null != this.Oa && (this.Oa = a);
        this.a().value = a;
        Uf(this)
    };
    U.prototype.F = function() {
        return null != this.Oa ? this.Oa : Vf(this) ? this.a().value : ""
    };
    var Uf = function(a) {
        var b = a.a();
        y(b, "The label input element cannot be null.");
        Sf ? a.a().placeholder != a.Ma && (a.a().placeholder = a.Ma) : (Tf(a), Ic(b, "label", a.Ma));
        Vf(a) ? (b = a.a(), y(b), Pf(b, a.Dc)) : (a.Hh || a.uc || (b = a.a(), y(b), Nf(b, a.Dc)), Sf || Q(a.Jh, a.Ih, a))
    };
    U.prototype.Aa = function(a) {
        this.a().disabled = !a;
        var b = this.a();
        y(b);
        Rf(b, this.Dc + "-disabled", !a)
    };
    U.prototype.isEnabled = function() {
        return !this.a().disabled
    };
    U.prototype.Jh = function() {
        !this.a() || (Vf(this) || this.uc) || (this.a().value = this.Ma)
    };
    var Wf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
        Yf = function(a) {
            if (Xf) {
                Xf = !1;
                var b = m.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = (c = Yf(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw Xf = !0, Error();
                }
            }
            return a.match(Wf)
        },
        Xf = F,
        Zf = function(a, b, c) {
            if (n(b)) {
                La(b);
                for (var d = 0; d < b.length; d++) Zf(a, String(b[d]), c)
            } else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
        };
    var $f = function() {},
        ag = new $f,
        bg = ["click", E ? "keypress" : "keydown"];
    $f.prototype.d = function(a, b, c, d, f) {
        var g = function(a) {
            if ("click" == a.type && Xc(a)) b.call(d, a);
            else if (13 == a.keyCode || 3 == a.keyCode || 32 == a.keyCode && "button" == (a.target.getAttribute("role") || null)) a.type = "keypress", b.call(d, a)
        };
        g.Cc = b;
        g.Wh = d;
        f ? f.d(a, bg, g, c) : L(a, bg, g, c)
    };
    $f.prototype.ba = function(a, b, c, d, f) {
        for (var g, h = 0; g = bg[h]; h++) {
            var k;
            var l = a;
            k = g;
            var t = !!c;
            k = Zc(l) ? l.Vd(k, t) : l ? (l = nd(l)) ? l.Vd(k, t) : [] : [];
            for (l = 0; t = k[l]; l++)
                if (t.Fa.Cc == b && t.Fa.Wh == d) {
                    f ? f.ba(a, g, t.Fa, c, d) : M(a, g, t.Fa, c, d);
                    break
                }
        }
    };
    var cg, dg = function(a, b) {
        n(b) || (b = [b]);
        y(0 < b.length, "At least one Css3Property should be specified.");
        var c = Pa(b, function(a) {
            if (q(a)) return a;
            Ka(a, "Expected css3 property to be an object.");
            var b = a.Og + " " + a.duration + "s " + a.timing + " " + a.Ng + "s";
            y(a.Og && ia(a.duration) && a.timing && ia(a.Ng), "Unexpected css3 property value: %s", b);
            return b
        });
        Fd(a, "transition", c.join(","))
    };
    var eg = function(a, b, c, d, f) {
        Bf.call(this);
        this.b = a;
        this.Yh = b;
        this.Rh = c;
        this.hg = d;
        this.$h = n(f) ? f : [f]
    };
    u(eg, Bf);
    e = eg.prototype;
    e.play = function() {
        if (1 == this.n) return !1;
        this.fa("begin");
        this.fa("play");
        this.startTime = qa();
        this.n = 1;
        if (!ga(cg))
            if (D) cg = G("10.0");
            else {
                var a = document.createElement("div"),
                    b = F ? "-webkit" : E ? "-moz" : D ? "-ms" : yb ? "-o" : null;
                a.innerHTML = '<div style="' + (b ? b + "-transition:opacity 1s linear;" : "") + 'transition:opacity 1s linear;">';
                a = a.firstChild;
                y(a.nodeType == Node.ELEMENT_NODE);
                b = a.style[Ea("transition")];
                cg = "" != ("undefined" !== typeof b ? b : a.style[Gd(a, "transition")] || "")
            }
        if (cg) return Fd(this.b, this.Rh), this.eg =
            Q(this.Sh, void 0, this), !0;
        this.Je(!1);
        return !1
    };
    e.Sh = function() {
        dg(this.b, this.$h);
        Fd(this.b, this.hg);
        this.eg = Q(r(this.Je, this, !1), 1E3 * this.Yh)
    };
    e.stop = function() {
        1 == this.n && this.Je(!0)
    };
    e.Je = function(a) {
        Fd(this.b, "transition", "");
        Ae(this.eg);
        Fd(this.b, this.hg);
        this.Ge = qa();
        this.n = 0;
        a ? this.fa("stop") : this.fa("finish");
        this.fa("end")
    };
    e.e = function() {
        this.stop();
        eg.c.e.call(this)
    };
    var fg = function(a, b, c, d, f) {
        return new eg(a, b, {
            opacity: d
        }, {
            opacity: f
        }, {
            Og: "opacity",
            duration: b,
            timing: c,
            Ng: 0
        })
    };
    var ig = function(a, b, c, d, f, g, h, k, l) {
            y(c);
            var t = gg(c),
                p = Zd(a),
                w = Rd(a);
            w && p.Cg(new Dd(w.left, w.top, w.right - w.left, w.bottom - w.top));
            var w = I(a),
                qb = I(c);
            if (w.m != qb.m) {
                var bb = w.m.body,
                    qb = Bc(qb),
                    Jc = new C(0, 0),
                    $b = dc(H(bb)),
                    Xe = bb;
                do {
                    var ih = $b == qb ? Pd(Xe) : Vd(y(Xe));
                    Jc.x += ih.x;
                    Jc.y += ih.y
                } while ($b && $b != qb && (Xe = $b.frameElement) && ($b = $b.parent));
                bb = lb(Jc, Pd(bb));
                D && !Ac(w) && (bb = lb(bb, Cc(w)));
                p.left += bb.x;
                p.top += bb.y
            }
            a = (b & 4 && Qd(a) ? b ^ 2 : b) & -5;
            p = new C(a & 2 ? p.left + p.width : p.left, a & 1 ? p.top + p.height : p.top);
            p = lb(p, t);
            f && (p.x +=
                (a & 2 ? -1 : 1) * f.x, p.y += (a & 1 ? -1 : 1) * f.y);
            var Da;
            if (h)
                if (l) Da = l;
                else if (Da = Rd(c)) Da.top -= t.y, Da.right -= t.x, Da.bottom -= t.y, Da.left -= t.x;
            return hg(p, c, d, g, Da, h, k)
        },
        gg = function(a) {
            var b;
            if (a = a.offsetParent) {
                var c = "HTML" == a.tagName || "BODY" == a.tagName;
                c && "static" == Jd(a) || (b = Pd(a), c || (c = (c = Qd(a)) && E ? -a.scrollLeft : !c || D && G("8") || "visible" == Id(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = lb(b, new C(c, a.scrollTop))))
            }
            return b || new C
        },
        hg = function(a, b, c, d, f, g, h) {
            a = a.ea();
            var k = 0,
                l = (c & 4 &&
                    Qd(b) ? c ^ 2 : c) & -5;
            c = Yd(b);
            h = h ? h.ea() : c.ea();
            if (d || 0 != l) l & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), l & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (g && (f ? (k = a, d = 0, 65 == (g & 65) && (k.x < f.left || k.x >= f.right) && (g &= -2), 132 == (g & 132) && (k.y < f.top || k.y >= f.bottom) && (g &= -5), k.x < f.left && g & 1 && (k.x = f.left, d |= 1), k.x < f.left && (k.x + h.width > f.right && g & 16) && (h.width = Math.max(h.width - (k.x + h.width - f.right), 0), d |= 4), k.x + h.width > f.right && g & 1 && (k.x = Math.max(f.right - h.width, f.left), d |= 1), g & 2 && (d |= (k.x < f.left ? 16 : 0) | (k.x +
                    h.width > f.right ? 32 : 0)), k.y < f.top && g & 4 && (k.y = f.top, d |= 2), k.y <= f.top && (k.y + h.height < f.bottom && g & 32) && (h.height = Math.max(h.height - (f.top - k.y), 0), k.y = f.top, d |= 8), k.y >= f.top && (k.y + h.height > f.bottom && g & 32) && (h.height = Math.max(h.height - (k.y + h.height - f.bottom), 0), d |= 8), k.y + h.height > f.bottom && g & 4 && (k.y = Math.max(f.bottom - h.height, f.top), d |= 2), g & 8 && (d |= (k.y < f.top ? 64 : 0) | (k.y + h.height > f.bottom ? 128 : 0)), k = d) : k = 256, k & 496)) return k;
            Ld(b, a);
            c == h || c && h && c.width == h.width && c.height == h.height || (f = Ac(I(H(b))), !D || f && G("8") ?
                (b = b.style, E ? b.MozBoxSizing = "border-box" : F ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(h.width, 0) + "px", b.height = Math.max(h.height, 0) + "px") : (a = b.style, f ? (f = de(b), b = ge(b), a.pixelWidth = h.width - b.left - f.left - f.right - b.right, a.pixelHeight = h.height - b.top - f.top - f.bottom - b.bottom) : (a.pixelWidth = h.width, a.pixelHeight = h.height)));
            return k
        };
    var jg = function() {};
    jg.prototype.W = function() {};
    var kg = function(a, b, c) {
        this.element = a;
        this.Pg = b;
        this.Di = c
    };
    u(kg, jg);
    kg.prototype.W = function(a, b, c) {
        ig(this.element, this.Pg, a, b, void 0, c, this.Di)
    };
    var lg = function(a, b) {
        this.Ye = a instanceof C ? a : new C(a, b)
    };
    u(lg, jg);
    lg.prototype.W = function(a, b, c, d) {
        ig(Md(a), 0, a, b, this.Ye, c, null, d)
    };
    var mg = function(a, b) {
        this.Bh = 4;
        this.ze = b || void 0;
        Ie.call(this, a)
    };
    u(mg, Ie);
    mg.prototype.ab = function(a) {
        this.ze = a || void 0;
        this.A() && this.W()
    };
    mg.prototype.W = function() {
        if (this.ze) {
            var a = !this.A() && "move_offscreen" != this.bg(),
                b = this.a();
            a && (b.style.visibility = "hidden", O(b, !0));
            this.ze.W(b, this.Bh, this.Gi);
            a && O(b, !1)
        }
    };
    var ng = function(a, b) {
        this.Ya = a;
        this.fi = !!b;
        this.zg = {
            0: this.Ya + "-arrowright",
            1: this.Ya + "-arrowup",
            2: this.Ya + "-arrowdown",
            3: this.Ya + "-arrowleft"
        }
    };
    u(ng, jg);
    e = ng.prototype;
    e.vg = !1;
    e.Ve = 2;
    e.Bg = 20;
    e.We = 3;
    e.wg = null;
    e.Se = -5;
    e.jc = function(a) {
        this.Kb = a
    };
    e.ab = function(a, b, c, d) {
        null != a && (this.We = a);
        null != b && (this.Ve = b);
        ia(c) && (this.Bg = Math.max(c, 15));
        ia(d) && (this.Se = d)
    };
    e.W = function(a, b, c) {
        y(this.ad, "Must call setElements first.");
        a = this.Ve;
        2 == a && (a = 0);
        og(this, this.We, a, 2 == this.Ve ? pg(this.We) ? this.ka.offsetHeight / 2 : this.ka.offsetWidth / 2 : this.Bg, c)
    };
    e.ic = function(a) {
        this.vg = a
    };
    var og = function(a, b, c, d, f, g) {
            if (a.Kb) {
                var h = qg(b, c),
                    k, l = a.Kb,
                    t = a.ka,
                    p = a.wg;
                k = Yd(l);
                t: {
                    k = (pg(b) ? k.height / 2 : k.width / 2) - d;
                    var w = (h & 4 && Qd(l) ? h ^ 2 : h) & -5;
                    if (p) p = p.ea(), t && (t = gg(t), p.left += t.x, p.right += t.x, p.top += t.y, p.bottom += t.y);
                    else if (p = Rd(l), !p) break t;
                    l = Zd(l);
                    l = new Cd(l.top, l.left + l.width, l.top + l.height, l.left);
                    pg(b) ? l.top < p.top && !(w & 1) ? k -= p.top - l.top : l.bottom > p.bottom && w & 1 && (k -= l.bottom - p.bottom) : l.left < p.left && !(w & 2) ? k -= p.left - l.left : l.right > p.right && w & 2 && (k -= l.right - p.right)
                }
                k = pg(b) ? new C(a.Se,
                    k) : new C(k, a.Se);
                w = pg(b) ? 6 : 9;
                l = b ^ 3;
                pg(b) && "rtl" == a.Kb.dir && (l = b);
                h = ig(a.Kb, qg(l, c), a.ka, h, k, f, a.vg ? w : 0, void 0, a.wg);
                if (!g && h & 496) {
                    og(a, b ^ 3, c, d, f, !0);
                    return
                }!a.fi || h & 496 || (f = parseFloat(a.ka.style.left), g = parseFloat(a.ka.style.top), y(!isNaN(f) && !isNaN(g), "Could not parse position."), isFinite(f) && 0 == f % 1 && isFinite(g) && 0 == g % 1 || Ld(a.ka, Math.round(f), Math.round(g)))
            }
            rg(a, b, c, d)
        },
        rg = function(a, b, c, d) {
            var f = a.ad;
            ab(a.zg, function(a) {
                Rf(f, a, !1)
            }, a);
            Nf(f, a.zg[b]);
            f.style.top = f.style.left = f.style.right = f.style.bottom =
                "";
            a.Kb ? (c = Td(a.Kb, a.ka), d = sg(a.Kb, b), pg(b) ? (a = 15 > a.ka.offsetHeight - 15 ? 15 : Math.min(Math.max(c.y + d.y, 15), a.ka.offsetHeight - 15), f.style.top = a + "px") : (a = 15 > a.ka.offsetWidth - 15 ? 15 : Math.min(Math.max(c.x + d.x, 15), a.ka.offsetWidth - 15), f.style.left = a + "px")) : f.style[0 == c ? pg(b) ? "top" : "left" : pg(b) ? "bottom" : "right"] = d + "px"
        },
        qg = function(a, b) {
            switch (a) {
                case 2:
                    return 0 == b ? 1 : 3;
                case 1:
                    return 0 == b ? 0 : 2;
                case 0:
                    return 0 == b ? 6 : 7;
                default:
                    return 0 == b ? 4 : 5
            }
        },
        sg = function(a, b) {
            var c = 0,
                d = 0,
                f = Yd(a);
            switch (b) {
                case 2:
                    c = f.width / 2;
                    break;
                case 1:
                    c = f.width / 2;
                    d = f.height;
                    break;
                case 0:
                    d = f.height / 2;
                    break;
                case 3:
                    c = f.width, d = f.height / 2
            }
            return new C(c, d)
        },
        pg = function(a) {
            return 0 == a || 3 == a
        };
    D && G(8);
    var tg = function() {
        pf.call(this)
    };
    u(tg, pf);
    tg.prototype.na = lf;
    var ug = function() {
        pf.call(this)
    };
    u(ug, pf);
    ug.prototype.na = {
        Fi: !0
    };
    var vg = function() {
        pf.call(this)
    };
    u(vg, pf);
    vg.prototype.na = {
        Fi: !0
    };
    var wg = function() {
        pf.call(this)
    };
    u(wg, pf);
    wg.prototype.na = mf;
    var xg = function() {
        pf.call(this)
    };
    u(xg, pf);
    xg.prototype.na = nf;
    var yg = function() {
        pf.call(this)
    };
    u(yg, pf);
    yg.prototype.na = {
        zk: !0
    };
    var zg = function(a) {
        this.content = String(a)
    };
    u(zg, pf);
    zg.prototype.na = of;
    var Ag = function(a) {
            function b() {}
            b.prototype = a.prototype;
            return function(a) {
                var d = new b;
                d.content = String(a);
                return d
            }
        },
        Bg = Ag(tg);
    Ag(ug);
    Ag(vg);
    Ag(wg);
    Ag(xg);
    Ag(yg);
    var Eg = function(a) {
            return a && a.na && a.na === lf ? (y(a.constructor === tg), a.content) : String(a).replace(Cg, Dg)
        },
        Ig = function(a) {
            return a && a.na && a.na === lf ? (y(a.constructor === tg), a = String(a.content).replace(Fg, "").replace(Gg, "&lt;"), String(a).replace(Hg, Dg)) : String(a).replace(Cg, Dg)
        },
        Mg = function(a) {
            if (a && a.na == mf) return y(a.constructor === wg), String(a).replace(Jg, Kg);
            a = String(a);
            Lg.test(a) ? a = a.replace(Jg, Kg) : (Ia("Bad value `%s` for |filterNormalizeUri", [a]), a = "#zSoyz");
            return a
        },
        Ng = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Dg = function(a) {
            return Ng[a]
        },
        Og = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Kg = function(a) {
            return Og[a]
        },
        Cg = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Hg = /[\x00\x22\x27\x3c\x3e]/g,
        Jg = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Lg = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Pg = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i,
        Fg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Gg = /</g;
    var Qg = function(a) {
        var b = '<div class="jfk-bubble"><div class="jfk-bubble-content-id"></div>';
        a.ih && (b += '<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="Close" role=button tabindex=0></div>');
        return Bg(b + '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>')
    };
    Qg.fc = "jfk.templates.bubble.main";
    var Rg = function(a) {
        R.call(this, a);
        this.nc = new ng(this.Ya, !0);
        this.Ua = new mg;
        this.Pf = 0;
        this.mf = []
    };
    u(Rg, R);
    e = Rg.prototype;
    e.Ya = "jfk-bubble";
    e.Xd = !0;
    e.me = !1;
    e.jc = function(a) {
        this.nc.jc(a);
        this.W()
    };
    e.ab = function(a, b, c, d) {
        y(!this.D, "Must call setPosition() before rendering");
        this.nc.ab(a, b, c, d)
    };
    e.qg = function(a) {
        y(!this.D, "Must call addClassName() before rendering");
        this.mf.push(a)
    };
    e.za = function(a) {
        y(q(a) || a.nodeType, "Content must be a string or HTML.");
        this.H = a;
        Sg(this, a)
    };
    var Sg = function(a, b) {
        var c = a.I();
        b && c && (q(b) ? c.innerHTML = b : (c.innerHTML = "", c.appendChild(b)))
    };
    e = Rg.prototype;
    e.ic = function(a) {
        this.nc.ic(a)
    };
    e.I = function() {
        return this.mc(this.Ya + "-content-id")
    };
    e.h = function() {
        this.b = tf(Qg, {
            ih: this.Xd
        }, void 0, this.l());
        Sg(this, this.H);
        O(this.a(), !1);
        this.Ua.lc(this.a());
        zb || this.Ua.ed(fg(this.a(), 0.218, "ease-out", 0, 1), fg(this.a(), 0.218, "ease-in", 1, 0));
        Of(this.a(), this.mf)
    };
    e.v = function() {
        Rg.c.v.call(this);
        this.Z().d(this.Ua, ["beforeshow", "show", "beforehide", "hide"], this.Ug);
        if (this.Xd) {
            var a = this.Z(),
                b = this.mc(this.Ya + "-closebtn-id"),
                c = s(this.k, !1);
            ag.d(b, c, void 0, a.w || a, a)
        }
        a = this.a();
        y(a, "getElement() returns null.");
        b = this.mc(this.Ya + "-arrow-id");
        y(b, "No arrow element is found!");
        c = this.nc;
        c.ka = a;
        c.ad = b;
        this.Ua.ab(this.nc)
    };
    e.k = function(a) {
        this.Ua.k(a)
    };
    e.A = function() {
        return this.Ua.A()
    };
    e.W = function() {
        this.A() && this.Ua.W()
    };
    e.e = function() {
        this.Ua.j();
        delete this.Ua;
        Rg.c.e.call(this)
    };
    e.Uf = function() {
        var a = Sd(this.a());
        this.Pf && a.y < this.Pf && this.k(!1);
        return !1
    };
    e.Ug = function(a) {
        if ("show" == a.type || "hide" == a.type) {
            var b = this.Z(),
                c = this.l(),
                c = D ? Bc(c) : c.m;
            "show" == a.type ? b.d(c, "scroll", this.Uf) : b.ba(c, "scroll", this.Uf)
        }
        b = this.dispatchEvent(a.type);
        this.me && "hide" == a.type && this.j();
        return b
    };
    var Tg = function(a, b) {
        R.call(this, b);
        this.H = a
    };
    u(Tg, R);
    Tg.prototype.Ca = "info";
    Tg.prototype.ge = !1;
    var Ug = {
        info: "jfk-butterBar-info",
        error: "jfk-butterBar-error",
        warning: "jfk-butterBar-warning",
        promo: "jfk-butterBar-promo"
    };
    e = Tg.prototype;
    e.bg = function() {
        return this.Ca
    };
    e.fd = function(a) {
        if (this.I()) {
            var b = this.a(),
                c = Ug[a];
            Pf(b, Ug[this.Ca]);
            Nf(b, c)
        }
        this.Ca = a
    };
    e.za = function(a) {
        this.H = a;
        if (a = this.a()) {
            var b = this.l();
            b.Wf(a);
            b.append(a, this.H)
        }
    };
    e.A = function() {
        var a = this.a();
        return null != a && Mf(a, "jfk-butterBar-shown")
    };
    e.k = function(a) {
        y(this.D, "setVisible must only be called after the butter bar is rendered.");
        Rf(this.a(), "jfk-butterBar-shown", a)
    };
    e.h = function() {
        this.b = this.l().h("div", "jfk-butterBar");
        var a = this.a();
        y(a, "The DOM element for the butter bar cannot be null.");
        Ic(a, "live", "assertive");
        Ic(a, "atomic", "true");
        this.za(this.H);
        this.ge = this.ge;
        (a = this.a()) && Rf(a, "jfk-butterBar-mini", this.ge);
        this.fd(this.Ca)
    };
    var Vg = function(a, b) {
        N.call(this);
        a && this.kd(a, b)
    };
    u(Vg, N);
    e = Vg.prototype;
    e.b = null;
    e.Kd = null;
    e.Le = null;
    e.Ld = null;
    e.ra = -1;
    e.pb = -1;
    e.Ue = !1;
    var Wg = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Xg = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Yg = D || F && G("525"),
        Zg = tb && E;
    e = Vg.prototype;
    e.ai = function(a) {
        F && (17 == this.ra && !a.ctrlKey || 18 == this.ra && !a.altKey || tb && 91 == this.ra && !a.metaKey) && (this.pb = this.ra = -1); - 1 == this.ra && (a.ctrlKey && 17 != a.keyCode ? this.ra = 17 : a.altKey && 18 != a.keyCode ? this.ra = 18 : a.metaKey && 91 != a.keyCode && (this.ra = 91));
        Yg && !wd(a.keyCode, this.ra, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.pb = E ? xd(a.keyCode) : a.keyCode, Zg && (this.Ue = a.altKey))
    };
    e.bi = function(a) {
        this.pb = this.ra = -1;
        this.Ue = a.altKey
    };
    e.handleEvent = function(a) {
        var b = a.sb(),
            c, d, f = b.altKey;
        D && "keypress" == a.type ? (c = this.pb, d = 13 != c && 27 != c ? b.keyCode : 0) : F && "keypress" == a.type ? (c = this.pb, d = 0 <= b.charCode && 63232 > b.charCode && vd(c) ? b.charCode : 0) : yb ? (c = this.pb, d = vd(c) ? b.keyCode : 0) : (c = b.keyCode || this.pb, d = b.charCode || 0, Zg && (f = this.Ue), tb && (63 == d && 224 == c) && (c = 191));
        var g = c,
            h = b.keyIdentifier;
        c ? 63232 <= c && c in Wg ? g = Wg[c] : 25 == c && a.shiftKey && (g = 9) : h && h in Xg && (g = Xg[h]);
        a = g == this.ra;
        this.ra = g;
        b = new $g(g, d, a, b);
        b.altKey = f;
        this.dispatchEvent(b)
    };
    e.a = function() {
        return this.b
    };
    e.kd = function(a, b) {
        this.Ld && this.detach();
        this.b = a;
        this.Kd = L(this.b, "keypress", this, b);
        this.Le = L(this.b, "keydown", this.ai, b, this);
        this.Ld = L(this.b, "keyup", this.bi, b, this)
    };
    e.detach = function() {
        this.Kd && (od(this.Kd), od(this.Le), od(this.Ld), this.Ld = this.Le = this.Kd = null);
        this.b = null;
        this.pb = this.ra = -1
    };
    e.e = function() {
        Vg.c.e.call(this);
        this.detach()
    };
    var $g = function(a, b, c, d) {
        d && Uc(this, d, void 0);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    u($g, Vc);
    var ah = function() {},
        bh;
    ea(ah);
    e = ah.prototype;
    e.xb = function() {};
    e.h = function(a) {
        var b = a.l().h("div", ch(this, a).join(" "), a.Gd());
        dh(this, a, b);
        return b
    };
    e.I = function(a) {
        return a
    };
    e.Eb = function(a, b, c) {
        if (a = a.a ? a.a() : a)
            if (D && !G("7")) {
                var d = eh(Rb(a), b);
                d.push(b);
                s(c ? Sb : Ub, a).apply(null, d)
            } else c ? Sb(a, b) : Ub(a, b)
    };
    e.lb = function() {
        return !0
    };
    e.Y = function(a, b) {
        b.id && Fe(a, b.id);
        var c = this.I(b);
        c && c.firstChild ? fh(a, c.firstChild.nextSibling ? Ya(c.childNodes) : c.firstChild) : a.H = null;
        var d = 0,
            f = this.q(),
            g = this.q(),
            h = !1,
            k = !1,
            c = !1,
            l = Rb(b);
        A(l, function(a) {
            if (h || a != f)
                if (k || a != g) {
                    var b = d;
                    if (!this.lg) {
                        this.Jd || gh(this);
                        var c = this.Jd,
                            l = {},
                            p;
                        for (p in c) l[c[p]] = p;
                        this.lg = l
                    }
                    a = parseInt(this.lg[a], 10);
                    d = b | (isNaN(a) ? 0 : a)
                } else k = !0;
            else h = !0, g == f && (k = !0)
        }, this);
        a.n = d;
        h || (l.push(f), g == f && (k = !0));
        k || l.push(g);
        var t = a.Ea;
        t && l.push.apply(l, t);
        if (D && !G("7")) {
            var p =
                eh(l);
            0 < p.length && (l.push.apply(l, p), c = !0)
        }
        if (!h || !k || t || c) b.className = l.join(" ");
        dh(this, a, b);
        return b
    };
    e.Af = function(a) {
        He(a) && this.Xb(a.a(), !0);
        a.isEnabled() && this.pc(a, a.A())
    };
    var hh = function(a, b, c) {
            if (a = c || a.xb()) y(b, "The element passed as a first parameter cannot be null."), Gc(b, a)
        },
        dh = function(a, b, c) {
            y(b);
            y(c);
            b.A() || Ic(c, "hidden", !b.A());
            b.isEnabled() || a.Ka(c, 1, !b.isEnabled());
            b.da & 8 && a.Ka(c, 8, !!(b.n & 8));
            b.da & 16 && a.Ka(c, 16, !!(b.n & 16));
            b.da & 64 && a.Ka(c, 64, !!(b.n & 64))
        };
    e = ah.prototype;
    e.oc = function(a, b) {
        var c = !b,
            d = D || yb ? a.getElementsByTagName("*") : null;
        if (ae) {
            if (c = c ? "none" : "", a.style[ae] = c, d)
                for (var f = 0, g; g = d[f]; f++) g.style[ae] = c
        } else if (D || yb)
            if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)
                for (f = 0; g = d[f]; f++) g.setAttribute("unselectable", c)
    };
    e.Xb = function(a, b) {
        this.Eb(a, this.q() + "-rtl", b)
    };
    e.tg = function(a) {
        var b;
        return a.da & 32 && (b = a.Bb()) ? rc(b) : !1
    };
    e.pc = function(a, b) {
        var c;
        if (a.da & 32 && (c = a.Bb())) {
            if (!b && a.n & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.n & 32 && a.vf()
            }
            rc(c) != b && sc(c, b)
        }
    };
    e.k = function(a, b) {
        O(a, b);
        a && Ic(a, "hidden", !b)
    };
    e.ma = function(a, b, c) {
        var d = a.a();
        if (d) {
            var f = jh(this, b);
            f && this.Eb(a, f, c);
            this.Ka(d, b, c)
        }
    };
    e.Ka = function(a, b, c) {
        bh || (bh = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        if (b = bh[b]) y(a, "The element passed as a first parameter cannot be null."), Ic(a, b, c)
    };
    e.za = function(a, b) {
        var c = this.I(a);
        if (c && (jc(c), b))
            if (q(b)) oc(c, b);
            else {
                var d = function(a) {
                    if (a) {
                        var b = H(c);
                        c.appendChild(q(a) ? b.createTextNode(a) : a)
                    }
                };
                n(b) ? A(b, d) : !ha(b) || "nodeType" in b ? d(b) : A(Ya(b), d)
            }
    };
    e.Bb = function(a) {
        return a.a()
    };
    e.q = function() {
        return "goog-control"
    };
    var ch = function(a, b) {
            var c = a.q(),
                d = [c],
                f = a.q();
            f != c && d.push(f);
            c = b.td();
            for (f = []; c;) {
                var g = c & -c;
                f.push(jh(a, g));
                c &= ~g
            }
            d.push.apply(d, f);
            (c = b.Ea) && d.push.apply(d, c);
            D && !G("7") && d.push.apply(d, eh(d));
            return d
        },
        eh = function(a, b) {
            var c = [];
            b && (a = a.concat([b]));
            A([], function(d) {
                !Qa(d, s(Ua, a)) || b && !Ua(d, b) || c.push(d.join("_"))
            });
            return c
        },
        jh = function(a, b) {
            a.Jd || gh(a);
            return a.Jd[b]
        },
        gh = function(a) {
            var b = a.q();
            a.Jd = {
                1: b + "-disabled",
                2: b + "-hover",
                4: b + "-active",
                8: b + "-selected",
                16: b + "-checked",
                32: b + "-focused",
                64: b + "-open"
            }
        };
    var kh = function() {};
    u(kh, ah);
    ea(kh);
    e = kh.prototype;
    e.xb = function() {
        return "button"
    };
    e.Ka = function(a, b, c) {
        switch (b) {
            case 8:
            case 16:
                y(a, "The button DOM element cannot be null.");
                Ic(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                kh.c.Ka.call(this, a, b, c)
        }
    };
    e.h = function(a) {
        var b = kh.c.h.call(this, a);
        this.hd(b, a.sc());
        var c = a.F();
        c && this.Va(b, c);
        a.da & 16 && this.Ka(b, 16, !!(a.n & 16));
        return b
    };
    e.Y = function(a, b) {
        b = kh.c.Y.call(this, a, b);
        var c = this.F(b);
        a.de = c;
        a.O = this.sc(b);
        a.da & 16 && this.Ka(b, 16, !!(a.n & 16));
        return b
    };
    e.F = da;
    e.Va = da;
    e.sc = function(a) {
        return a.title
    };
    e.hd = function(a, b) {
        a && b && (a.title = b)
    };
    e.Zc = function(a, b) {
        var c = He(a),
            d = this.q() + "-collapse-left",
            f = this.q() + "-collapse-right";
        a.Eb(c ? f : d, !!(b & 1));
        a.Eb(c ? d : f, !!(b & 2))
    };
    e.q = function() {
        return "goog-button"
    };
    var lh = function(a, b) {
            if (!a) throw Error("Invalid class name " + a);
            if (!ja(b)) throw Error("Invalid decorator function " + b);
        },
        mh = {};
    var V = function(a, b, c) {
        R.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = na(b);
                if (d = mh[d]) break;
                b = b.c ? b.c.constructor : null
            }
            b = d ? ja(d.ac) ? d.ac() : new d : null
        }
        this.i = b;
        this.H = ga(a) ? a : null
    };
    u(V, R);
    e = V.prototype;
    e.H = null;
    e.n = 0;
    e.da = 39;
    e.Kc = 255;
    e.hi = 0;
    e.Wa = !0;
    e.Ea = null;
    e.Lb = !0;
    e.gd = !1;
    e.Ze = null;
    e.Bf = function() {
        return this.Lb
    };
    e.ye = function(a) {
        this.D && a != this.Lb && nh(this, a);
        this.Lb = a
    };
    e.Bb = function() {
        return this.i.Bb(this)
    };
    e.qg = function(a) {
        a && (this.Ea ? Ua(this.Ea, a) || this.Ea.push(a) : this.Ea = [a], this.i.Eb(this, a, !0))
    };
    e.Eb = function(a, b) {
        b ? this.qg(a) : a && (this.Ea && Wa(this.Ea, a)) && (0 == this.Ea.length && (this.Ea = null), this.i.Eb(this, a, !1))
    };
    e.h = function() {
        var a = this.i.h(this);
        this.b = a;
        hh(this.i, a, this.kc());
        this.gd || this.i.oc(a, !1);
        this.A() || this.i.k(a, !1)
    };
    e.kc = function() {
        return this.Ze
    };
    e.I = function() {
        return this.i.I(this.a())
    };
    e.lb = function(a) {
        return this.i.lb(a)
    };
    e.fb = function(a) {
        this.b = a = this.i.Y(this, a);
        hh(this.i, a, this.kc());
        this.gd || this.i.oc(a, !1);
        this.Wa = "none" != a.style.display
    };
    e.v = function() {
        V.c.v.call(this);
        this.i.Af(this);
        if (this.da & -2 && (this.Bf() && nh(this, !0), this.da & 32)) {
            var a = this.Bb();
            if (a) {
                var b = this.Rb || (this.Rb = new Vg);
                b.kd(a);
                this.Z().d(b, "key", this.jh).d(a, "focus", this.rd).d(a, "blur", this.vf)
            }
        }
    };
    var nh = function(a, b) {
        var c = a.Z(),
            d = a.a();
        b ? (c.d(d, "mouseover", a.zc).d(d, "mousedown", a.pd).d(d, "mouseup", a.zf).d(d, "mouseout", a.yf), a.sd != da && c.d(d, "contextmenu", a.sd), D && c.d(d, "dblclick", a.xf)) : (c.ba(d, "mouseover", a.zc).ba(d, "mousedown", a.pd).ba(d, "mouseup", a.zf).ba(d, "mouseout", a.yf), a.sd != da && c.ba(d, "contextmenu", a.sd), D && c.ba(d, "dblclick", a.xf))
    };
    V.prototype.ja = function() {
        V.c.ja.call(this);
        this.Rb && this.Rb.detach();
        this.A() && this.isEnabled() && this.i.pc(this, !1)
    };
    V.prototype.e = function() {
        V.c.e.call(this);
        this.Rb && (this.Rb.j(), delete this.Rb);
        delete this.i;
        this.Ea = this.H = null
    };
    V.prototype.Gd = function() {
        return this.H
    };
    V.prototype.za = function(a) {
        this.i.za(this.a(), a);
        this.H = a
    };
    var fh = function(a, b) {
            a.H = b
        },
        oh = function(a) {
            return (a = a.Gd()) ? (q(a) ? a : n(a) ? Pa(a, vc).join("") : uc(a)).replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") : ""
        };
    e = V.prototype;
    e.Xb = function(a) {
        V.c.Xb.call(this, a);
        var b = this.a();
        b && this.i.Xb(b, a)
    };
    e.oc = function(a) {
        this.gd = a;
        var b = this.a();
        b && this.i.oc(b, a)
    };
    e.A = function() {
        return this.Wa
    };
    e.k = function(a, b) {
        if (b || this.Wa != a && this.dispatchEvent(a ? "show" : "hide")) {
            var c = this.a();
            c && this.i.k(c, a);
            this.isEnabled() && this.i.pc(this, a);
            this.Wa = a;
            return !0
        }
        return !1
    };
    e.isEnabled = function() {
        return !(this.n & 1)
    };
    e.Aa = function(a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !ph(this, 1, !a) || (a || (this.setActive(!1), qh(this, !1)), this.A() && this.i.pc(this, a), this.ma(1, !a))
    };
    var qh = function(a, b) {
        ph(a, 2, b) && a.ma(2, b)
    };
    e = V.prototype;
    e.Hb = function() {
        return !!(this.n & 4)
    };
    e.setActive = function(a) {
        ph(this, 4, a) && this.ma(4, a)
    };
    e.Td = function(a) {
        ph(this, 32, a) && this.ma(32, a)
    };
    e.td = function() {
        return this.n
    };
    e.ma = function(a, b) {
        this.da & a && b != !!(this.n & a) && (this.i.ma(this, a, b), this.n = b ? this.n | a : this.n & ~a)
    };
    var rh = function(a) {
            if (a.D && a.n & 32) throw Error("Component already rendered");
            a.n & 32 && a.ma(32, !1);
            a.da &= -33
        },
        sh = function(a, b) {
            return !!(a.Kc & b) && !!(a.da & b)
        },
        ph = function(a, b, c) {
            return !!(a.da & b) && !!(a.n & b) != c && (!(a.hi & b) || a.dispatchEvent(De(b, c))) && !a.zb
        };
    e = V.prototype;
    e.zc = function(a) {
        (!a.relatedTarget || !mc(this.a(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && sh(this, 2)) && qh(this, !0)
    };
    e.yf = function(a) {
        a.relatedTarget && mc(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (sh(this, 4) && this.setActive(!1), sh(this, 2) && qh(this, !1))
    };
    e.sd = da;
    e.pd = function(a) {
        this.isEnabled() && (sh(this, 2) && qh(this, !0), Xc(a) && (sh(this, 4) && this.setActive(!0), this.i.tg(this) && this.Bb().focus()));
        !this.gd && Xc(a) && a.preventDefault()
    };
    e.zf = function(a) {
        this.isEnabled() && (sh(this, 2) && qh(this, !0), this.Hb() && (this.Hc(a) && sh(this, 4)) && this.setActive(!1))
    };
    e.xf = function(a) {
        this.isEnabled() && this.Hc(a)
    };
    e.Hc = function(a) {
        if (sh(this, 16)) {
            var b = !(this.n & 16);
            ph(this, 16, b) && this.ma(16, b)
        }
        sh(this, 8) && ph(this, 8, !0) && this.ma(8, !0);
        sh(this, 64) && (b = !(this.n & 64), ph(this, 64, b) && this.ma(64, b));
        b = new K("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Pe = a.Pe);
        return this.dispatchEvent(b)
    };
    e.rd = function() {
        sh(this, 32) && this.Td(!0)
    };
    e.vf = function() {
        sh(this, 4) && this.setActive(!1);
        sh(this, 32) && this.Td(!1)
    };
    e.jh = function(a) {
        return this.A() && this.isEnabled() && this.we(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    e.we = function(a) {
        return 13 == a.keyCode && this.Hc(a)
    };
    if (!ja(V)) throw Error("Invalid component class " + V);
    if (!ja(ah)) throw Error("Invalid renderer class " + ah);
    var th = na(V);
    mh[th] = ah;
    lh("goog-control", function() {
        return new V(null)
    });
    var uh = function() {};
    u(uh, kh);
    ea(uh);
    e = uh.prototype;
    e.xb = function() {};
    e.h = function(a) {
        a.ye(!1);
        a.Kc &= -256;
        rh(a);
        return a.l().h("button", {
            "class": ch(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.sc() || "",
            value: a.F() || ""
        }, oh(a) || "")
    };
    e.lb = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    e.Y = function(a, b) {
        a.ye(!1);
        a.Kc &= -256;
        rh(a);
        b.disabled && Sb(b, jh(this, 1));
        return uh.c.Y.call(this, a, b)
    };
    e.Af = function(a) {
        a.Z().d(a.a(), "click", a.Hc)
    };
    e.oc = da;
    e.Xb = da;
    e.tg = function(a) {
        return a.isEnabled()
    };
    e.pc = da;
    e.ma = function(a, b, c) {
        uh.c.ma.call(this, a, b, c);
        (a = a.a()) && 1 == b && (a.disabled = c)
    };
    e.F = function(a) {
        return a.value
    };
    e.Va = function(a, b) {
        a && (a.value = b)
    };
    e.Ka = da;
    var vh = function(a, b, c) {
        V.call(this, a, b || uh.ac(), c)
    };
    u(vh, V);
    e = vh.prototype;
    e.F = function() {
        return this.de
    };
    e.Va = function(a) {
        this.de = a;
        this.i.Va(this.a(), a)
    };
    e.sc = function() {
        return this.O
    };
    e.hd = function(a) {
        this.O = a;
        this.i.hd(this.a(), a)
    };
    e.Zc = function(a) {
        this.i.Zc(this, a)
    };
    e.e = function() {
        vh.c.e.call(this);
        delete this.de;
        delete this.O
    };
    e.v = function() {
        vh.c.v.call(this);
        if (this.da & 32) {
            var a = this.Bb();
            a && this.Z().d(a, "keyup", this.we)
        }
    };
    e.we = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Hc(a) : 32 == a.keyCode
    };
    lh("goog-button", function() {
        return new vh(null)
    });
    var xh = function(a) {
        a = a || I();
        this.ca = a.h("div", wh() + "-contentId");
        this.ee = a.h("div", wh() + "-arrow", a.h("div", wh() + "-arrowimplbefore"), a.h("div", wh() + "-arrowimplafter"));
        this.Qc = a.h("div", {
            "class": wh(),
            role: "tooltip"
        }, this.ca, this.ee);
        Gc(this.Qc, this.xb());
        Ic(this.Qc, "live", "polite")
    };
    u(xh, Kc);
    var wh = function() {
        return "jfk-tooltip"
    };
    xh.prototype.a = function() {
        return this.Qc
    };
    xh.prototype.I = function() {
        return this.ca
    };
    xh.prototype.xb = function() {
        return "tooltip"
    };
    xh.prototype.e = function() {
        this.Qc && lc(this.Qc)
    };
    var yh = {},
        zh = function(a) {
            yd.call(this);
            this.kf = a;
            this.Ie = new uf(this.Vh, 0, this);
            Lc(this, s(J, this.Ie));
            a = a.m;
            this.d(a, ["mouseout", "mousedown", "click", "blur", Tc, "keydown"], this.Th, !0);
            this.d(a, ["mouseover", "focus", Sc], this.Uh, !0)
        };
    u(zh, yd);
    zh.prototype.e = function() {
        Ah(this);
        zh.c.e.call(this)
    };
    var Bh = function(a, b) {
        switch (b.type) {
            case "mousedown":
            case "mouseover":
            case "mouseout":
            case "click":
                a.yg = !1;
                break;
            case "keydown":
                a.yg = !0
        }
    };
    zh.prototype.Uh = function(a) {
        Bh(this, a);
        var b = "focus" == a.type || a.type == Sc;
        !this.yg && b ? this.t = null : (this.wh = b, this.t = a.target);
        Ah(this);
        this.Ie.start(this.Na ? 50 : 300)
    };
    zh.prototype.Th = function(a) {
        Bh(this, a);
        this.t = null;
        Ah(this);
        this.Ie.start(this.Na ? 50 : 300)
    };
    var Ah = function(a) {
        a.nd && (Ae(a.nd), a.nd = 0, a.Na = null)
    };
    zh.prototype.Vh = function() {
        if (!(this.Na && this.t && this.O && mc(this.O.a(), this.t))) {
            var a = !1;
            !this.Na || this.t && mc(this.Na, this.t) || (Ch(this), this.Na = null, a = !0);
            if (this.t && !this.Na) {
                var b = wc(this.t, function(a) {
                    return a.getAttribute && (a.getAttribute("data-tooltip") || a.getAttribute("data-tooltip-html")) && !a.getAttribute("data-tooltip-suspended")
                });
                if (b && (this.Na = b, !this.wh || "mouse" != b.getAttribute("data-tooltip-trigger"))) {
                    var c;
                    c = (c = b.getAttribute("data-tooltip")) ? ta(za(-1 != c.indexOf("&") ? "document" in
                        m ? Ba(c) : Ca(c) : c)) : b.getAttribute("data-tooltip-html");
                    var d = b.getAttribute("data-tooltip-align");
                    if (!a && (a = b.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                        this.nd = Q(s(this.Tf, this.Na, c, d), a, this);
                        return
                    }
                    this.Tf(this.Na, c, d)
                }
            }
        }
    };
    var Dh = function(a) {
        if (a) switch (a.toLowerCase().split(",")[0]) {
            case "l":
                return 0;
            case "t":
                return 2;
            case "r":
                return 3
        }
        return 1
    };
    zh.prototype.Tf = function(a, b, c) {
        this.nd = 0;
        if (!this.O) {
            this.O = new xh(this.kf);
            Ch(this);
            this.kf.m.body.appendChild(this.O.a());
            Lc(this, s(J, this.O));
            this.xc = new ng(wh(), !0);
            this.xc.ic(!0);
            var d = this.xc,
                f = this.O.ee;
            d.ka = this.O.a();
            d.ad = f
        }
        t: {
            if (c) switch (c.toLowerCase().split(",")[1]) {
                case "l":
                    d = 0;
                    break t;
                case "r":
                    d = 1;
                    break t
            }
            d = 2
        }
        this.xc.ab(Dh(c), d, void 0, -1);
        Pf(this.O.a(), "jfk-tooltip-hide");
        Ld(this.O.a(), 0, 0);
        this.O.I().innerHTML = b;
        this.xc.jc(a);
        this.xc.W(null, 0)
    };
    var Ch = function(a) {
        a.O && Nf(a.O.a(), "jfk-tooltip-hide")
    };
    var Eh = function(a) {
        a = a || {};
        var b = '<div role="button"' + (a.id ? ' id="' + Ig(a.id) + '"' : "") + ' class="',
            c;
        c = a || {};
        var d = "goog-inline-block jfk-button ";
        switch (c.style) {
            case 0:
                d += "jfk-button-standard";
                break;
            case 2:
                d += "jfk-button-action";
                break;
            case 3:
                d += "jfk-button-primary";
                break;
            case 1:
                d += "jfk-button-default";
                break;
            case 4:
                d += "jfk-button-flat";
                break;
            case 5:
                d += "jfk-button-mini";
                break;
            case 6:
                d += "jfk-button-contrast";
                break;
            default:
                d += "jfk-button-standard"
        }
        d += (1 == c.width ? " jfk-button-narrow" : "") + (c.checked ? " jfk-button-checked" :
            "") + (c.si ? " " + c.si : "") + (c.disabled ? " jfk-button-disabled" : "");
        b = b + Ig(new zg(d)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.ti ? Ig(a.ti) : "0") + '"') + (a.title ? " " + (a.Mh ? "data-tooltip" : "title") + '="' + Ig(a.title) + '"' : "") + (a.value ? ' value="' + Ig(a.value) + '"' : "");
        a.attributes ? ((c = a.attributes) && c.na === nf ? (y(c.constructor === xg), c = c.content.replace(/([^"'\s])$/, "$1 ")) : (c = String(c), Pg.test(c) || (Ia("Bad value `%s` for |filterHtmlAttributes", [c]), c = "zSoyz")), c = " " + c) : c = "";
        return Bg(b + c + ">" + Eg(null !=
            a.content ? a.content : "") + "</div>")
    };
    Eh.fc = "jfk.templates.button.strict";
    var Gh = function(a, b, c, d) {
        vh.call(this, a, Fh.ac(), b);
        this.ld = c || 0;
        this.md = d || 0;
        this.ce = !1
    };
    u(Gh, vh);
    Gh.prototype.hd = function(a) {
        this.O = a;
        var b = this.a();
        if (b && a)
            if (this.ce) {
                var c = void 0,
                    c = a;
                b.removeAttribute("title");
                a ? (b.setAttribute("data-tooltip", a), b.setAttribute("aria-label", c)) : (b.removeAttribute("data-tooltip"), b.removeAttribute("data-tooltip-html"), b.removeAttribute("aria-label"));
                a = I(b) || I();
                b = na(a.m);
                yh[b] || (yh[b] = new zh(a))
            } else b.title = a
    };
    Gh.prototype.Aa = function(a) {
        this.isEnabled() != a && (Gh.c.Aa.call(this, a), Hh(this))
    };
    Gh.prototype.Td = function(a) {
        Gh.c.Td.call(this, a);
        Ih(this, !1)
    };
    Gh.prototype.pd = function(a) {
        Gh.c.pd.call(this, a);
        this.isEnabled() && Ih(this, !0)
    };
    var Ih = function(a, b) {
            a.a() && Rf(a.a(), "jfk-button-clear-outline", b)
        },
        Hh = function(a) {
            a.a() && Jh(a.i, a)
        },
        Kh = function(a) {
            if (q(a)) {
                var b = a;
                a = fc("img");
                a.src = b;
                Wd(a, 21, 21)
            }
            Nf(a, "jfk-button-img");
            b = [];
            b.push(a);
            return b
        },
        Fh = function() {
            this.uf = this.q() + "-standard";
            this.nf = this.q() + "-action";
            this.tf = this.q() + "-primary";
            this.pf = this.q() + "-default";
            this.qf = this.q() + "-flat";
            this.sf = this.q() + "-narrow";
            this.rf = this.q() + "-mini";
            this.of = this.q() + "-contrast"
        };
    u(Fh, kh);
    ea(Fh);
    e = Fh.prototype;
    e.nb = function(a, b, c) {
        a && c.ld != a && (c.ld = a, Hh(c));
        b && c.md != b && (c.md = b, Hh(c))
    };
    e.q = function() {
        return "jfk-button"
    };
    e.h = function(a) {
        Ma(a, Gh, "Button is expected to be instance of jfk.Button");
        var b = a.l(),
            c = tf(Eh, {
                disabled: !a.isEnabled(),
                checked: !!(a.n & 16),
                style: a.ld,
                title: a.sc(),
                Mh: a.ce,
                value: a.F(),
                width: a.md
            }, void 0, b);
        b.append(c, a.Gd());
        this.Y(a, c);
        return c
    };
    e.Y = function(a, b) {
        Fh.c.Y.call(this, a, b);
        this.jg || (this.jg = ib(this.uf, s(this.nb, 0, null), this.nf, s(this.nb, 2, null), this.tf, s(this.nb, 3, null), this.pf, s(this.nb, 1, null), this.qf, s(this.nb, 4, null), this.rf, s(this.nb, 5, null), this.of, s(this.nb, 6, null), this.sf, s(this.nb, null, 1)));
        for (var c = Lf(b), d = 0; d < c.length; ++d) {
            var f = this.jg[c[d]];
            f && f(a)
        }
        if (c = b.getAttribute("data-tooltip")) a.O = c, a.ce = !0;
        return b
    };
    e.F = function(a) {
        return a.getAttribute("value") || ""
    };
    e.Va = function(a, b) {
        a && a.setAttribute("value", b)
    };
    e.ma = function(a, b, c) {
        Fh.c.ma.call(this, a, b, c);
        if (32 == b) try {
            var d = a.a();
            c ? d.focus() : d.blur()
        } catch (f) {}
    };
    var Jh = function(a, b) {
        function c(a, b) {
            (a ? d : f).push(b)
        }
        y(b.a(), "Button element must already exist when updating style.");
        var d = [],
            f = [],
            g = b.ld;
        c(0 == g, a.uf);
        c(2 == g, a.nf);
        c(3 == g, a.tf);
        c(4 == g, a.qf);
        c(5 == g, a.rf);
        c(1 == g, a.pf);
        c(6 == g, a.of);
        c(1 == b.md, a.sf);
        c(!b.isEnabled(), a.q() + "-disabled");
        Qf(b.a(), f);
        Of(b.a(), d)
    };
    var Nh = function(a) {
            var b = s(Lh, a, "ok");
            a.D ? b() : D ? md(a, "aftershow", b) : md(a, "beforeshow", b);
            var c = null;
            L(a, "aftershow", function() {
                a.$d && (c = new Mh(a))
            });
            L(a, "afterhide", function() {
                J(c)
            })
        },
        Lh = function(a, b) {
            Re(a, 0.75);
            var c = a.P;
            c && (c = Ve(c, b)) && Nf(c, "goog-buttonset-action");
            var c = fg(a.a(), 0.13, "ease-out", 0, 1),
                d = fg(a.a(), 0.13, "ease-in", 1, 0),
                f = fg(a.Pb(), 0.13, "ease-out", 0, 0.75),
                g = fg(a.Pb(), 0.13, "ease-in", 0.75, 0);
            a.ed(c, d, f, g)
        },
        Mh = function(a) {
            he.call(this, a.a());
            this.Gb = a;
            L(this, "start", this.Nh, !1, this)
        };
    u(Mh, he);
    Mh.prototype.Nh = function(a) {
        a = a.yh;
        if (this.Gb.$d && Mf(a.target, this.Gb.q())) {
            var b = Yd(this.Gb.a()),
                b = new Cd(0, b.width, b.height, 0),
                c = de(this.Gb.a());
            b.expand(-1 * c.top, -1 * c.right, -1 * c.bottom, -1 * c.left);
            if (!b.contains(new C(a.offsetX, a.offsetY))) return this.ne(), !0
        }
        return !1
    };
    Mh.prototype.ne = function() {
        var a = zc(this.Gb.l()),
            b = cc(dc(a) || window),
            c = Yd(this.Gb.a()),
            d;
        "fixed" == Jd(this.Gb.a()) ? (d = b.width - c.width, c = b.height - c.height) : (d = Math.max(a.body.scrollWidth, b.width), b = Math.max(a.body.scrollHeight, b.height), d -= c.width, c = b - c.height);
        je(this, new Dd(0, 0, Math.max(0, d), Math.max(0, c)))
    };
    var Oh = function(a) {
            this.S = new P;
            a && this.Te(a)
        },
        Ph = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + na(a) : b.substr(0, 1) + a
        };
    e = Oh.prototype;
    e.add = function(a) {
        this.S.set(Ph(a), a)
    };
    e.Te = function(a) {
        a = xe(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    e.La = function(a) {
        a = xe(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    e.remove = function(a) {
        return this.S.remove(Ph(a))
    };
    e.clear = function() {
        this.S.clear()
    };
    e.contains = function(a) {
        return this.S.cc(Ph(a))
    };
    e.Cg = function(a) {
        var b = new Oh;
        a = xe(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    };
    e.wa = function() {
        return this.S.wa()
    };
    e.ea = function() {
        return new Oh(this)
    };
    e.Vc = function() {
        return this.S.Vc(!1)
    };
    var Qh = function(a, b, c) {
        this.g = c || (a ? I(Wb(document, a)) : I());
        mg.call(this, this.g.h("div", {
            style: "position:absolute;display:none;"
        }));
        this.He = new C(1, 1);
        this.wb = new Oh;
        a && this.kd(a);
        null != b && this.mg(b)
    };
    u(Qh, mg);
    var Rh = [];
    e = Qh.prototype;
    e.t = null;
    e.className = "goog-tooltip";
    e.he = 500;
    e.wi = 0;
    e.l = function() {
        return this.g
    };
    e.kd = function(a) {
        a = Wb(document, a);
        this.wb.add(a);
        L(a, "mouseover", this.zc, !1, this);
        L(a, "mouseout", this.Wd, !1, this);
        L(a, "mousemove", this.Dg, !1, this);
        L(a, "focus", this.rd, !1, this);
        L(a, "blur", this.Wd, !1, this)
    };
    e.detach = function(a) {
        if (a) a = Wb(document, a), Sh(this, a), this.wb.remove(a);
        else {
            for (var b = this.wb.wa(), c = 0; a = b[c]; c++) Sh(this, a);
            this.wb.clear()
        }
    };
    var Sh = function(a, b) {
        M(b, "mouseover", a.zc, !1, a);
        M(b, "mouseout", a.Wd, !1, a);
        M(b, "mousemove", a.Dg, !1, a);
        M(b, "focus", a.rd, !1, a);
        M(b, "blur", a.Wd, !1, a)
    };
    e = Qh.prototype;
    e.mg = function(a) {
        oc(this.a(), a)
    };
    e.lc = function(a) {
        var b = this.a();
        b && lc(b);
        Qh.c.lc.call(this, a);
        a && (b = this.g.m.body, b.insertBefore(a, b.lastChild))
    };
    e.xg = function() {
        return uc(this.a())
    };
    e.td = function() {
        return this.ob ? this.A() ? 4 : 1 : this.Ac ? 3 : this.A() ? 2 : 0
    };
    e.fe = function() {
        if (!Ie.prototype.fe.call(this)) return !1;
        if (this.anchor)
            for (var a, b = 0; a = Rh[b]; b++) mc(a.a(), this.anchor) || a.k(!1);
        Ua(Rh, this) || Rh.push(this);
        a = this.a();
        a.className = this.className;
        Th(this);
        L(a, "mouseover", this.Of, !1, this);
        L(a, "mouseout", this.Nf, !1, this);
        Uh(this);
        return !0
    };
    e.le = function() {
        Wa(Rh, this);
        for (var a = this.a(), b, c = 0; b = Rh[c]; c++) b.anchor && mc(a, b.anchor) && b.k(!1);
        this.Rf && Vh(this.Rf);
        M(a, "mouseover", this.Of, !1, this);
        M(a, "mouseout", this.Nf, !1, this);
        this.anchor = void 0;
        0 == this.td() && (this.qd = !1);
        Ie.prototype.le.call(this)
    };
    e.ug = function(a, b) {
        this.anchor == a && this.wb.contains(this.anchor) && (this.qd || !this.Hi ? (this.k(!1), this.A() || (this.anchor = a, this.ab(b || this.Ke(0)), this.k(!0))) : this.anchor = void 0);
        this.ob = void 0
    };
    e.Kg = function() {
        return this.t
    };
    e.xi = function(a) {
        this.Ac = void 0;
        a == this.anchor && (null != this.t && (this.t == this.a() || this.wb.contains(this.t)) || this.Hf && this.Hf.t || this.k(!1))
    };
    var Wh = function(a, b) {
        var c = Cc(a.g);
        a.He.x = b.clientX + c.x;
        a.He.y = b.clientY + c.y
    };
    Qh.prototype.zc = function(a) {
        var b = Xh(this, a.target);
        this.t = b;
        Th(this);
        b != this.anchor && (this.anchor = b, this.ob || (this.ob = Q(r(this.ug, this, b, void 0), this.he)), Yh(this), Wh(this, a))
    };
    var Xh = function(a, b) {
        try {
            for (; b && !a.wb.contains(b);) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    };
    Qh.prototype.Dg = function(a) {
        Wh(this, a);
        this.qd = !0
    };
    Qh.prototype.rd = function(a) {
        this.t = a = Xh(this, a.target);
        this.qd = !0;
        if (this.anchor != a) {
            this.anchor = a;
            var b = this.Ke(1);
            Th(this);
            this.ob || (this.ob = Q(r(this.ug, this, a, b), this.he));
            Yh(this)
        }
    };
    Qh.prototype.Ke = function(a) {
        return 0 == a ? (a = this.He.ea(), new Zh(a)) : new $h(this.t)
    };
    var Yh = function(a) {
        if (a.anchor)
            for (var b, c = 0; b = Rh[c]; c++) mc(b.a(), a.anchor) && (b.Hf = a, a.Rf = b)
    };
    Qh.prototype.Wd = function(a) {
        var b = Xh(this, a.target),
            c = Xh(this, a.relatedTarget);
        b != c && (b == this.t && (this.t = null), Uh(this), this.qd = !1, !this.A() || a.relatedTarget && mc(this.a(), a.relatedTarget) ? this.anchor = void 0 : Vh(this))
    };
    Qh.prototype.Of = function() {
        var a = this.a();
        this.t != a && (Th(this), this.t = a)
    };
    Qh.prototype.Nf = function(a) {
        var b = this.a();
        this.t != b || a.relatedTarget && mc(b, a.relatedTarget) || (this.t = null, Vh(this))
    };
    var Uh = function(a) {
            a.ob && (Ae(a.ob), a.ob = void 0)
        },
        Vh = function(a) {
            2 == a.td() && (a.Ac = Q(r(a.xi, a, a.anchor), a.wi))
        },
        Th = function(a) {
            a.Ac && (Ae(a.Ac), a.Ac = void 0)
        };
    Qh.prototype.e = function() {
        this.k(!1);
        Uh(this);
        this.detach();
        this.a() && lc(this.a());
        this.t = null;
        delete this.g;
        Qh.c.e.call(this)
    };
    var Zh = function(a, b) {
        lg.call(this, a, b)
    };
    u(Zh, lg);
    Zh.prototype.W = function(a, b, c) {
        b = Md(a);
        b = Rd(b);
        c = c ? new Cd(c.top + 10, c.right, c.bottom, c.left + 10) : new Cd(10, 0, 0, 10);
        hg(this.Ye, a, 4, c, b, 9) & 496 && hg(this.Ye, a, 4, c, b, 5)
    };
    var $h = function(a) {
        kg.call(this, a, 3)
    };
    u($h, kg);
    $h.prototype.W = function(a, b, c) {
        var d = new C(10, 0);
        ig(this.element, this.Pg, a, b, d, c, 9) & 496 && ig(this.element, 2, a, 1, d, c, 5)
    };
    var ai = function(a, b, c, d) {
        c = c || (a ? I(Wb(document, a)) : I());
        this.i = new xh(c);
        c.m.body.appendChild(this.i.a());
        O(this.i.a(), !1);
        this.className = wh();
        Qh.call(this, a, b, c);
        Lc(this, s(J, this.i));
        this.lc(this.i.a());
        a = fg(this.i.a(), 0.13, "ease-out", 0, 1);
        b = fg(this.i.a(), 0.13, "ease-in", 1, 0);
        this.ed(a, b);
        this.yc = new ng(wh(), !0);
        this.yc.ab(d || 1, void 0, void 0, -1);
        d = this.yc;
        a = this.i.ee;
        d.ka = this.i.a();
        d.ad = a;
        this.yc.ic(!0);
        this.he = 300
    };
    u(ai, Qh);
    ai.prototype.Ke = function() {
        this.yc.jc(this.Kg());
        return this.yc
    };
    ai.prototype.I = function() {
        return this.i.I()
    };
    ai.prototype.mg = function(a) {
        oc(this.I(), a)
    };
    ai.prototype.xg = function() {
        return uc(this.I())
    };
    var ci = function(a, b, c) {
        b = '<div class="gsa-uar-container">' + (a.description ? '<h2 class="gsa-uar-description-header goog-inline-block">' + Eg(a.description) + "</h2>" : "") + '<ol class="gsa-uar-main-result-list">';
        for (var d = a.af, f = d.length, g = 0; g < f; g++) b += bi(d[g], 0, c);
        b += '<li class="gsa-uar-more-results-con"><div class="gsa-uar-more-results gsa-uar-hide"><ol class="gsa-uar-more-result-list">';
        d = a.bf;
        f = d.length;
        for (g = 0; g < f; g++) b += bi(d[g], 0, c);
        return b += '</ol></div></li></ol><div class="gsa-uar-no-results ' + (0 <
            a.af.length ? "gsa-uar-hide" : "") + '">' + Eg(c.ub.MSG_UAR_NO_RESULTS) + '</div><div class="gsa-uar-action-bar"><div class="goog-inline-block gsa-uar-expand-collapse-con ' + (0 == a.bf.length ? "gsa-uar-hide" : "") + '"></div><div class="goog-inline-block gsa-uar-add-btn"></div></div><div class="gsa-uar-clear"></div><div class="gsa-uar-record-action-con gsa-uar-hide"></div></div>'
    };
    ci.fc = "gsa.ui.uar.templates.desktop.uarcontainer";
    var bi = function(a, b, c) {
        return '<li class="gsa-uar-result-item"><div class="gsa-uar-record" ' + (a.id ? 'id="' + Ig(a.id) + '"' : "") + '><div class="gsa-uar-record-read-con ' + (a.id ? "" : "gsa-uar-hide") + '" tabindex="0"><div class="gsa-uar-record-text"><a class="gsa-uar-title-link" href="' + (a.url ? Ig(Mg(a.url)) : "#") + '">' + (a.title ? Eg(a.title) : "") + '</a><cite class="gsa-uar-url-link">' + (a.url ? Eg(a.url) : "") + '</cite><div class="gsa-uar-addedby-field">' + (a.Xa ? Eg(c.ub.MSG_UAR_ADDED_BY) + " " + Eg(a.Xa) : "") + '</div></div><div class="gsa-uar-info-action-bar"></div></div></div></li>'
    };
    bi.fc = "gsa.ui.uar.templates.desktop.newuar";
    var di = function(a, b, c) {
        return '<div class="gsa-uar-input-con gsa-uar-hide"><div><input type="text" class="jfk-textinput gsa-uar-title-field" label="' + Ig(c.ub.MSG_UAR_ENTER_TITLE_VALUE) + '" /><input type="text" class="jfk-textinput gsa-uar-url-field" label="' + Ig(c.ub.MSG_UAR_ENTER_URL_VALUE) + '" /><div class="gsa-uar-username-div-save-cancel-div-con"><div class="gsa-uar-username-field-con"><input type="text" class="jfk-textinput gsa-uar-username-field" label="' + Ig(c.ub.MSG_UAR_ENTER_USERNAME_VALUE) + '" /></div><div class="gsa-uar-save-cancel-con"></div><div class="gsa-uar-clear"></div></div></div></div>'
    };
    di.fc = "gsa.ui.uar.templates.desktop.uarinput";
    var ei = function() {
        return '<div class="gsa-uar-butter-bar-con gsa-uar-hide"><div class="gsa-uar-butter-bar goog-inline-block"></div></div>'
    };
    ei.fc = "gsa.ui.uar.templates.desktop.butterbar";
    var fi = function(a, b, c) {
        return a.gg ? '<div id="uar-user-img-con-' + Ig(a.fg) + '" class="gsa-uar-addedby-img-con">' + (a.bc ? '<a href="' + Ig(Mg(a.bc)) + '" target="_blank">' : "") + '<span id="uar-user-img-' + Ig(a.fg) + '" class="async-img gsa-uar-hide">' + Eg(a.gg) + "</span>" + (a.bc ? "</a>" : "") + "</div>" : '<div class="gsa-uar-addedby-con">' + Eg(c.ub.MSG_UAR_ADDED_BY) + ":" + (a.bc ? '<a href="' + Ig(Mg(a.bc)) + '" target="_blank">' : "") + '<span class="gsa-uar-addedby">' + Eg(a.Oh) + "</span>" + (a.bc ? "</a>" : "") + "</div>"
    };
    fi.fc = "gsa.ui.uar.templates.desktop.uaraddedby";
    kb({
        MSG_UAR_CONFIRM_DELETE_TITLE: "Confirm delete",
        MSG_UAR_CONFIRM_DELETE_TEXT: "Are you sure you want to delete the user added result?",
        MSG_UAR_CONFIRM_DELETE_MODERATION_REQUIRED: "The selected result will be deleted only after the administrator reviews and approves the same. The result will continue to show until review is done.",
        MSG_UAR_DELETE_IN_PROGRESS: "Deleting...",
        MSG_UAR_ADD_PENDING_REVIEW_TITLE: "New addition - Admin review pending",
        MSG_UAR_ADD_PENDING_REVIEW_CONTENT: "The result that you contributed has been submitted but it will be displayed only after the administrator reviews and approves the same.",
        MSG_UAR_UPDATE_PENDING_REVIEW_TITLE: "Edit - Admin review pending",
        MSG_UAR_UPDATE_PENDING_REVIEW_CONTENT: "The changes to result that you edited has been submitted but it will be displayed only after the administrator reviews and approves the same.",
        MSG_UAR_DELETE_PENDING_REVIEW_TITLE: "Delete - Admin review pending",
        MSG_UAR_DELETE_PENDING_REVIEW_CONTENT: "The request for deleting the result has been submitted but result will be deleted only after the administrator reviews and approves the same.",
        MSG_UAR_EXISTING_REVIEW_PENDING_TITLE: "Existing admin review pending",
        MSG_UAR_EXISTING_REVIEW_PENDING_CONTENT: "An existing request to update the same result is pending therefore this request is not processed. You can take action only after the administrator reviews the existing request.",
        MSG_UAR_CONFIRM_ADD_TITLE: "Confirm add - Admin review required",
        MSG_UAR_CONFIRM_ADD_CONTENT: "New result contribution will be submitted for administrator review. The result will be displayed only after the administrator will approve the same.",
        MSG_UAR_CONFIRM_UPDATE_TITLE: "Confirm edit - Admin review required",
        MSG_UAR_CONFIRM_UPDATE_CONTENT: "The changes to the result will be submitted for administrator review. The existing result will continue to show until the administrator approves the changes.",
        MSG_UAR_CONFIRM_SUBMIT_REQUEST: "Are you sure you want to submit this request?",
        MSG_UAR_REVIEW_NOTE: "Note that the existing result will continue to show until the review is done.",
        MSG_UAR_DISCARD_CHANGES_TITLE: "Discard changes",
        MSG_UAR_DISCARD_CHANGES_CONTENT: "Do you want to discard existing changes?",
        MSG_UAR_NO_RESULTS: "No results. Consider contributing a result.",
        MSG_UAR_ADDED_BY: "Added by",
        MSG_UAR_DESCRIPTION: "Description",
        MSG_UAR_ENTER_TITLE_VALUE: "Enter title to be displayed",
        MSG_UAR_ENTER_URL_VALUE: "Enter absolute URL of the document",
        MSG_UAR_ENTER_USERNAME_VALUE: "Enter user name",
        MSG_UAR_EDIT_THIS_RESULT: "Edit this result",
        MSG_UAR_DELETE_THIS_RESULT: "Delete this result",
        MSG_UAR_VIEW_ALL_RESULTS: "View all results",
        MSG_UAR_HIDE_FEW_RESULTS: "Hide few results",
        MSG_UAR_CONTRIBUTE_RESULT: "Contribute a result",
        MSG_UAR_LOADING_SETTINGS: "Loading settings. Please try again in a second.",
        MSG_UAR_SERVER_ERROR: "Server error! Please try again.",
        MSG_UAR_AUTHN_REQUIRED: "Authentication is required.",
        MSG_UAR_USERNAME_REQUIRED: "Username is required. Please specify the same.",
        MSG_UAR_SAVE_IN_PROGRESS: "Saving..."
    });
    var gi = function(a) {
        R.call(this, a.l());
        this.f = a;
        this.J = this.Z();
        this.Yc = {
            ub: jb
        }
    };
    u(gi, R);
    var hi = new P,
        ii = function(a) {
            var b = hi.get(a);
            if (b) return new b;
            throw Error("Requested command not found: " + a);
        };
    var ki = function(a, b) {
            try {
                var c;
                var d = ca("window.location.href");
                if (q(a)) c = {
                    message: a,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: d,
                    stack: "Not available"
                };
                else {
                    var f, g, h = !1;
                    try {
                        f = a.lineNumber || a.yk || "Not available"
                    } catch (k) {
                        f = "Not available", h = !0
                    }
                    try {
                        g = a.fileName || a.filename || a.sourceURL || m.$googDebugFname || d
                    } catch (l) {
                        g = "Not available", h = !0
                    }
                    c = !h && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
                        message: a.message || "Not available",
                        name: a.name || "UnknownError",
                        lineNumber: f,
                        fileName: g,
                        stack: a.stack || "Not available"
                    }
                }
                return "Message: " + za(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + za(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + za(ji(b) + "-> ")
            } catch (t) {
                return "Exception trying to expose exception! You win, we lose. " + t
            }
        },
        ji = function(a) {
            return li(a || arguments.callee.caller, [])
        },
        li = function(a, b) {
            var c = [];
            if (Ua(b, a)) c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(mi(a) + "(");
                for (var d = a.arguments, f = 0; f < d.length; f++) {
                    0 < f && c.push(", ");
                    var g;
                    g = d[f];
                    switch (typeof g) {
                        case "object":
                            g = g ? "object" : "null";
                            break;
                        case "string":
                            break;
                        case "number":
                            g = String(g);
                            break;
                        case "boolean":
                            g = g ? "true" : "false";
                            break;
                        case "function":
                            g = (g = mi(g)) ? g : "[fn]";
                            break;
                        default:
                            g = typeof g
                    }
                    40 < g.length && (g = g.substr(0, 40) + "...");
                    c.push(g)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(li(a.caller, b))
                } catch (h) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ? c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        },
        mi = function(a) {
            if (ni[a]) return ni[a];
            a = String(a);
            if (!ni[a]) {
                var b = /function ([^\(]+)/.exec(a);
                ni[a] = b ? b[1] : "[Anonymous]"
            }
            return ni[a]
        },
        ni = {};
    var oi = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };
    var pi = function(a, b, c, d, f) {
        this.reset(a, b, c, d, f)
    };
    pi.prototype.vi = 0;
    pi.prototype.Fg = null;
    pi.prototype.Eg = null;
    var qi = 0;
    pi.prototype.reset = function(a, b, c, d, f) {
        this.vi = "number" == typeof f ? f : qi++;
        d || qa();
        this.Uc = a;
        this.ri = b;
        delete this.Fg;
        delete this.Eg
    };
    pi.prototype.Hg = function(a) {
        this.Uc = a
    };
    var ri = function(a) {
        this.qc = a
    };
    ri.prototype.K = null;
    ri.prototype.Uc = null;
    ri.prototype.ua = null;
    ri.prototype.Mg = null;
    var si = function(a, b) {
        this.name = a;
        this.value = b
    };
    si.prototype.toString = function() {
        return this.name
    };
    var ti = new si("SEVERE", 1E3),
        ui = new si("WARNING", 900),
        vi = new si("INFO", 800),
        wi = new si("CONFIG", 700),
        xi = new si("FINE", 500),
        yi = new si("FINER", 400);
    ri.prototype.getParent = function() {
        return this.K
    };
    ri.prototype.Gg = function() {
        this.ua || (this.ua = {});
        return this.ua
    };
    ri.prototype.Hg = function(a) {
        this.Uc = a
    };
    var zi = function(a) {
        if (a.Uc) return a.Uc;
        if (a.K) return zi(a.K);
        Ia("Root logger has no level set.");
        return null
    };
    ri.prototype.log = function(a, b, c) {
        if (a.value >= zi(this).value)
            for (a = this.Ci(a, b, c), b = "log:" + a.ri, m.console && (m.console.timeStamp ? m.console.timeStamp(b) : m.console.markTimeline && m.console.markTimeline(b)), m.msWriteProfilerMark && m.msWriteProfilerMark(b), b = this; b;) {
                c = b;
                var d = a;
                if (c.Mg)
                    for (var f = 0, g = void 0; g = c.Mg[f]; f++) g(d);
                b = b.getParent()
            }
    };
    ri.prototype.Ci = function(a, b, c) {
        var d = new pi(a, String(b), this.qc);
        if (c) {
            d.Fg = c;
            var f = ki(c, arguments.callee.caller);
            d.Eg = f
        }
        return d
    };
    ri.prototype.Me = function(a, b) {
        this.log(ui, a, b)
    };
    ri.prototype.info = function(a, b) {
        this.log(vi, a, b)
    };
    var Ai = {},
        Bi = null,
        Ci = function(a) {
            Bi || (Bi = new ri(""), Ai[""] = Bi, Bi.Hg(wi));
            var b;
            if (!(b = Ai[a])) {
                b = new ri(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = Ci(a.substr(0, c));
                c.Gg()[d] = b;
                b.K = c;
                Ai[a] = b
            }
            return b
        };
    var Di = function(a, b) {
            a && a.info(b, void 0)
        },
        W = function(a, b) {
            a && a.log(xi, b, void 0)
        };
    var Ei = function(a, b) {
        var c;
        if (a instanceof Ei) this.va = ga(b) ? b : a.va, Fi(this, a.ec), c = a.Sd, Gi(this), this.Sd = c, c = a.Pc, Gi(this), this.Pc = c, Hi(this, a.Rd), c = a.Qd, Gi(this), this.Qd = c, Ii(this, a.Za.ea()), c = a.Pd, Gi(this), this.Pd = c;
        else if (a && (c = Yf(String(a)))) {
            this.va = !!b;
            Fi(this, c[1] || "", !0);
            var d = c[2] || "";
            Gi(this);
            this.Sd = d ? decodeURIComponent(d) : "";
            d = c[3] || "";
            Gi(this);
            this.Pc = d ? decodeURIComponent(d) : "";
            Hi(this, c[4]);
            d = c[5] || "";
            Gi(this);
            this.Qd = d ? decodeURIComponent(d) : "";
            Ii(this, c[6] || "", !0);
            c = c[7] || "";
            Gi(this);
            this.Pd = c ? decodeURIComponent(c) : ""
        } else this.va = !!b, this.Za = new Ji(null, 0, this.va)
    };
    e = Ei.prototype;
    e.ec = "";
    e.Sd = "";
    e.Pc = "";
    e.Rd = null;
    e.Qd = "";
    e.Pd = "";
    e.Ei = !1;
    e.va = !1;
    e.toString = function() {
        var a = [],
            b = this.ec;
        b && a.push(Ki(b, Li), ":");
        if (b = this.Pc) {
            a.push("//");
            var c = this.Sd;
            c && a.push(Ki(c, Li), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.Rd;
            null != b && a.push(":", String(b))
        }
        if (b = this.Qd) this.Pc && "/" != b.charAt(0) && a.push("/"), a.push(Ki(b, "/" == b.charAt(0) ? Mi : Ni));
        (b = this.Za.toString()) && a.push("?", b);
        (b = this.Pd) && a.push("#", Ki(b, Oi));
        return a.join("")
    };
    e.ea = function() {
        return new Ei(this)
    };
    var Fi = function(a, b, c) {
            Gi(a);
            a.ec = c ? b ? decodeURIComponent(b) : "" : b;
            a.ec && (a.ec = a.ec.replace(/:$/, ""))
        },
        Hi = function(a, b) {
            Gi(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.Rd = b
            } else a.Rd = null
        },
        Ii = function(a, b, c) {
            Gi(a);
            b instanceof Ji ? (a.Za = b, a.Za.Xe(a.va)) : (c || (b = Ki(b, Pi)), a.Za = new Ji(b, 0, a.va))
        },
        Gi = function(a) {
            if (a.Ei) throw Error("Tried to modify a read-only Uri");
        };
    Ei.prototype.Xe = function(a) {
        this.va = a;
        this.Za && this.Za.Xe(a);
        return this
    };
    var Ki = function(a, b) {
            return q(a) ? encodeURI(a).replace(b, Qi) : null
        },
        Qi = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Li = /[#\/\?@]/g,
        Ni = /[\#\?:]/g,
        Mi = /[\#\?]/g,
        Pi = /[\#\?@]/g,
        Oi = /#/g,
        Ji = function(a, b, c) {
            this.qa = a || null;
            this.va = !!c
        },
        Si = function(a) {
            if (!a.C && (a.C = new P, a.L = 0, a.qa))
                for (var b = a.qa.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        f = null,
                        g = null;
                    0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
                    f = decodeURIComponent(f.replace(/\+/g, " "));
                    f = Ri(a,
                        f);
                    a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
                }
        };
    e = Ji.prototype;
    e.C = null;
    e.L = null;
    e.add = function(a, b) {
        Si(this);
        this.qa = null;
        a = Ri(this, a);
        var c = this.C.get(a);
        c || this.C.set(a, c = []);
        c.push(b);
        this.L++;
        return this
    };
    e.remove = function(a) {
        Si(this);
        a = Ri(this, a);
        return this.C.cc(a) ? (this.qa = null, this.L -= this.C.get(a).length, this.C.remove(a)) : !1
    };
    e.clear = function() {
        this.C = this.qa = null;
        this.L = 0
    };
    e.cc = function(a) {
        Si(this);
        a = Ri(this, a);
        return this.C.cc(a)
    };
    e.$a = function() {
        Si(this);
        for (var a = this.C.wa(), b = this.C.$a(), c = [], d = 0; d < b.length; d++)
            for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
        return c
    };
    e.wa = function(a) {
        Si(this);
        var b = [];
        if (q(a)) this.cc(a) && (b = Xa(b, this.C.get(Ri(this, a))));
        else {
            a = this.C.wa();
            for (var c = 0; c < a.length; c++) b = Xa(b, a[c])
        }
        return b
    };
    e.set = function(a, b) {
        Si(this);
        this.qa = null;
        a = Ri(this, a);
        this.cc(a) && (this.L -= this.C.get(a).length);
        this.C.set(a, [b]);
        this.L++;
        return this
    };
    e.get = function(a, b) {
        var c = a ? this.wa(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    e.toString = function() {
        if (this.qa) return this.qa;
        if (!this.C) return "";
        for (var a = [], b = this.C.$a(), c = 0; c < b.length; c++)
            for (var d = b[c], f = encodeURIComponent(String(d)), d = this.wa(d), g = 0; g < d.length; g++) {
                var h = f;
                "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
                a.push(h)
            }
        return this.qa = a.join("&")
    };
    e.ea = function() {
        var a = new Ji;
        a.qa = this.qa;
        this.C && (a.C = this.C.ea(), a.L = this.L);
        return a
    };
    var Ri = function(a, b) {
        var c = String(b);
        a.va && (c = c.toLowerCase());
        return c
    };
    Ji.prototype.Xe = function(a) {
        a && !this.va && (Si(this), this.qa = null, ye(this.C, function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.qa = null, this.C.set(Ri(this, d), Ya(a)), this.L += a.length))
        }, this));
        this.va = a
    };
    var Vi = function() {
            N.call(this);
            this.qc = "closure_frame" + Ti++;
            this.Oe = [];
            Ui[this.qc] = this
        },
        Wi;
    u(Vi, N);
    var Ui = {},
        Ti = 0,
        Xi = function(a, b) {
            var c = new Vi;
            L(c, "ready", c.j, !1, c);
            b && L(c, "complete", b);
            c.send(a, "GET", !0, void 0)
        },
        Yi = function(a, b) {
            var c = I(a);
            ye(b, function(b, f) {
                var g = c.h("input", {
                    type: "hidden",
                    name: f,
                    value: b
                });
                a.appendChild(g)
            })
        };
    e = Vi.prototype;
    e.p = Ci("goog.net.IframeIo");
    e.B = null;
    e.R = null;
    e.Fb = null;
    e.xh = 0;
    e.Q = !1;
    e.Fc = !1;
    e.Md = !1;
    e.gb = null;
    e.Bc = null;
    e.Ba = 0;
    e.Yb = 0;
    e.Jc = null;
    e.If = null;
    e.Jb = null;
    e.Ic = !1;
    e.send = function(a, b, c, d) {
        if (this.Q) throw Error("[goog.net.IframeIo] Unable to send, already active.");
        this.gb = a = new Ei(a);
        b = b ? b.toUpperCase() : "GET";
        c && (Gi(a), c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ qa()).toString(36), Gi(a), a.Za.set("zx", c));
        Di(this.p, "Sending iframe request: " + a + " [" + b + "]");
        Wi || (Wi = fc("form"), Wi.acceptCharset = "utf-8", c = Wi.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow =
            "hidden", document.body.appendChild(Wi));
        this.B = Wi;
        "GET" == b && Yi(this.B, a.Za);
        d && Yi(this.B, d);
        this.B.action = a.toString();
        this.B.method = b;
        this.Q = !0;
        this.Fc = !1;
        this.Ba = 0;
        W(this.p, "Creating iframe");
        this.Fb = this.qc + "_" + (this.xh++).toString(36);
        d = {
            name: this.Fb,
            id: this.Fb
        };
        D && 7 > Jb && (d.src = 'javascript:""');
        this.R = I(this.B).h("iframe", d);
        d = this.R.style;
        d.visibility = "hidden";
        d.width = d.height = "10px";
        d.display = "none";
        F ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
        if (D) {
            this.B.target =
                this.Fb || "";
            zc(I(this.B)).body.appendChild(this.R);
            this.Ic || L(this.R, "readystatechange", this.ve, !1, this);
            try {
                this.te = !1, this.B.submit()
            } catch (f) {
                this.Ic || M(this.R, "readystatechange", this.ve, !1, this), Zi(this, 1)
            }
        } else {
            W(this.p, "Setting up iframes and cloning form");
            zc(I(this.B)).body.appendChild(this.R);
            d = this.Fb + "_inner";
            a = nc(this.R);
            c = "<body><iframe id=" + d + " name=" + d + "></iframe>";
            document.baseURI && (c = '<head><base href="' + za(document.baseURI) + '"></head>' + c);
            yb ? a.documentElement.innerHTML = c : a.write(c);
            this.Ic || L(a.getElementById(d), "load", this.Ad, !1, this);
            var g = this.B.getElementsByTagName("textarea");
            c = 0;
            for (b = g.length; c < b; c++) {
                var h = g[c].value;
                vc(g[c]) != h && (oc(g[c], h), g[c].value = h)
            }
            g = a.importNode(this.B, !0);
            g.target = d;
            g.action = this.B.action;
            a.body.appendChild(g);
            var h = this.B.getElementsByTagName("select"),
                k = g.getElementsByTagName("select");
            c = 0;
            for (b = h.length; c < b; c++)
                for (var l = h[c].getElementsByTagName("option"), t = k[c].getElementsByTagName("option"), p = 0, w = l.length; p < w; p++) t[p].selected = l[p].selected;
            h = this.B.getElementsByTagName("input");
            k = g.getElementsByTagName("input");
            c = 0;
            for (b = h.length; c < b; c++)
                if ("file" == h[c].type && h[c].value != k[c].value) {
                    W(this.p, "File input value not cloned properly.  Will submit using original form.");console.log('submittttt noooo');
                    this.B.target = d;
                    g = this.B;
                    break
                }
            W(this.p, "Submitting form");
            try {
                this.te = !1, g.submit(), a.close(), E && (this.If = Q(this.Jf, 250, this))
            } catch (qb) {
                c = this.p, b = "Error when submitting form: " + ki(qb), c && c.log(ti, b, void 0), this.Ic || M(a.getElementById(d), "load", this.Ad, !1, this), a.close(),
                    Zi(this, 2)
            }
        }
    };
    e.abort = function(a) {
        this.Q && (Di(this.p, "Request aborted"), qd($i(this)), this.Md = this.Q = this.Fc = !1, this.Ba = a || 7, this.dispatchEvent("abort"), aj(this))
    };
    e.e = function() {
        W(this.p, "Disposing iframeIo instance");
        this.Q && (W(this.p, "Aborting active request"), this.abort());
        Vi.c.e.call(this);
        this.R && bj(this);
        cj(this);
        delete this.wf;
        this.gb = this.Bc = this.B = null;
        this.Ba = 0;
        delete Ui[this.qc]
    };
    e.kg = function() {
        return this.Fc
    };
    e.ke = function() {
        return this.Md
    };
    e.Hb = function() {
        return this.Q
    };
    e.Fe = function() {
        return this.Bc
    };
    e.Hd = function() {
        return oi(this.Bc)
    };
    e.ig = function() {
        return this.R ? dj(this) : null
    };
    e.ve = function() {
        if ("complete" == this.R.readyState) {
            M(this.R, "readystatechange", this.ve, !1, this);
            var a;
            try {
                if (a = nc(this.R), D && "about:blank" == a.location && !navigator.onLine) {
                    Zi(this, 9);
                    return
                }
            } catch (b) {
                Zi(this, 1);
                return
            }
            ej(this, a)
        }
    };
    e.Ad = function() {
        yb && "about:blank" == dj(this).location || (M($i(this), "load", this.Ad, !1, this), ej(this, dj(this)))
    };
    var ej = function(a, b) {
            W(a.p, "Iframe loaded");
            a.Fc = !0;
            a.Q = !1;
            var c;
            try {
                var d = b.body;
                a.Bc = d.textContent || d.innerText
            } catch (f) {
                c = 1
            }
            c || "function" != typeof a.wf || (d = a.wf(b)) && (c = 4);
            (d = a.p) && d.log(yi, "Last content: " + a.Bc, void 0);
            (d = a.p) && d.log(yi, "Last uri: " + a.gb, void 0);
            c ? (W(a.p, "Load event occurred but failed"), Zi(a, c)) : (W(a.p, "Load succeeded"), a.Md = !0, a.Ba = 0, a.dispatchEvent("complete"), a.dispatchEvent("success"), aj(a))
        },
        Zi = function(a, b) {
            a.te || (a.Md = !1, a.Q = !1, a.Fc = !0, a.Ba = b, a.dispatchEvent("complete"),
                a.dispatchEvent("error"), aj(a), a.te = !0)
        },
        aj = function(a) {
            Di(a.p, "Ready for new requests");
            bj(a);
            cj(a);
            a.dispatchEvent("ready")
        },
        bj = function(a) {
            var b = a.R;
            b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.Oe.push(b));
            a.Jb && (Ae(a.Jb), a.Jb = null);
            E || yb ? a.Jb = Q(a.Ag, 2E3, a) : a.Ag();
            a.R = null;
            a.Fb = null
        };
    Vi.prototype.Ag = function() {
        this.Jb && (Ae(this.Jb), this.Jb = null);
        for (; 0 != this.Oe.length;) {
            var a = this.Oe.pop();
            Di(this.p, "Disposing iframe");
            lc(a)
        }
    };
    var cj = function(a) {
            a.B && a.B == Wi && jc(a.B);
            a.B = null
        },
        dj = function(a) {
            return a.R ? nc($i(a)) : null
        },
        $i = function(a) {
            return a.R ? D ? a.R : nc(a.R).getElementById(a.Fb + "_inner") : null
        };
    Vi.prototype.Jf = function() {
        if (this.Q) {
            var a = dj(this);
            a && !Oc(a, "documentUri") ? (this.Ic || M($i(this), "load", this.Ad, !1, this), navigator.onLine ? ((a = this.p) && a.Me("Silent Firefox error detected", void 0), Zi(this, 3)) : ((a = this.p) && a.Me("Firefox is offline so report offline error instead of silent error", void 0), Zi(this, 9))) : this.If = Q(this.Jf, 250, this)
        }
    };
    var fj = function() {};
    fj.prototype.Qg = null;
    var hj = function(a) {
        var b;
        (b = a.Qg) || (b = {}, gj(a) && (b[0] = !0, b[1] = !0), b = a.Qg = b);
        return b
    };
    var ij, jj = function() {};
    u(jj, fj);
    var kj = function(a) {
            return (a = gj(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        gj = function(a) {
            if (!a.Rg && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.Rg = d
                    } catch (f) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.Rg
        };
    ij = new jj;
    var X = function(a) {
        N.call(this);
        this.headers = new P;
        this.Cd = a || null;
        this.Q = !1;
        this.xd = this.o = null;
        this.Kf = this.gb = "";
        this.Ba = 0;
        this.Ec = "";
        this.Cb = this.se = this.wd = this.ue = !1;
        this.Yb = 0;
        this.Jc = null;
        this.jd = "";
        this.Bd = this.vh = !1
    };
    u(X, N);
    X.prototype.p = Ci("goog.net.XhrIo");
    var lj = /^https?$/i,
        mj = ["POST", "PUT"];
    X.prototype.send = function(a, b, c, d) {
        if (this.o) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.gb + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.gb = a;
        this.Ec = "";
        this.Ba = 0;
        this.Kf = b;
        this.ue = !1;
        this.Q = !0;
        this.o = this.Cd ? kj(this.Cd) : kj(ij);
        this.xd = this.Cd ? hj(this.Cd) : hj(ij);
        this.o.onreadystatechange = r(this.Mf, this);
        try {
            W(this.p, nj(this, "Opening Xhr")), this.se = !0, this.o.open(b, a, !0), this.se = !1
        } catch (f) {
            W(this.p, nj(this, "Error opening Xhr: " + f.message));
            oj(this, f);
            return
        }
        a = c || "";
        var g = this.headers.ea();
        d && ye(d, function(a, b) {
            g.set(b, a)
        });
        d = Ta(g.$a());
        c = m.FormData && a instanceof m.FormData;
        !Ua(mj, b) || (d || c) || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        ye(g, function(a, b) {
            this.o.setRequestHeader(b, a)
        }, this);
        this.jd && (this.o.responseType = this.jd);
        "withCredentials" in this.o && (this.o.withCredentials = this.vh);
        try {
            pj(this), 0 < this.Yb && (this.Bd = D && G(9) && ia(this.o.timeout) && ga(this.o.ontimeout), W(this.p, nj(this, "Will abort after " + this.Yb + "ms if incomplete, xhr2 " +
                this.Bd)), this.Bd ? (this.o.timeout = this.Yb, this.o.ontimeout = r(this.Xf, this)) : this.Jc = Q(this.Xf, this.Yb, this)), W(this.p, nj(this, "Sending request")), this.wd = !0, this.o.send(a), this.wd = !1
        } catch (h) {
            W(this.p, nj(this, "Send error: " + h.message)), oj(this, h)
        }
    };
    var Sa = function(a) {
        return "content-type" == a.toLowerCase()
    };
    X.prototype.Xf = function() {
        "undefined" != typeof aa && this.o && (this.Ec = "Timed out after " + this.Yb + "ms, aborting", this.Ba = 8, W(this.p, nj(this, this.Ec)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var oj = function(a, b) {
            a.Q = !1;
            a.o && (a.Cb = !0, a.o.abort(), a.Cb = !1);
            a.Ec = b;
            a.Ba = 5;
            qj(a);
            rj(a)
        },
        qj = function(a) {
            a.ue || (a.ue = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    X.prototype.abort = function(a) {
        this.o && this.Q && (W(this.p, nj(this, "Aborting")), this.Q = !1, this.Cb = !0, this.o.abort(), this.Cb = !1, this.Ba = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), rj(this))
    };
    X.prototype.e = function() {
        this.o && (this.Q && (this.Q = !1, this.Cb = !0, this.o.abort(), this.Cb = !1), rj(this, !0));
        X.c.e.call(this)
    };
    X.prototype.Mf = function() {
        this.zb || (this.se || this.wd || this.Cb ? sj(this) : this.qi())
    };
    X.prototype.qi = function() {
        sj(this)
    };
    var sj = function(a) {
            if (a.Q && "undefined" != typeof aa)
                if (a.xd[1] && 4 == tj(a) && 2 == uj(a)) W(a.p, nj(a, "Local request error detected and ignored"));
                else if (a.wd && 4 == tj(a)) Q(a.Mf, 0, a);
            else if (a.dispatchEvent("readystatechange"), a.kg()) {
                W(a.p, nj(a, "Request complete"));
                a.Q = !1;
                try {
                    if (a.ke()) a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        a.Ba = 6;
                        var b;
                        try {
                            b = 2 < tj(a) ? a.o.statusText : ""
                        } catch (c) {
                            W(a.p, "Can not get status: " + c.message), b = ""
                        }
                        a.Ec = b + " [" + uj(a) + "]";
                        qj(a)
                    }
                } finally {
                    rj(a)
                }
            }
        },
        rj = function(a, b) {
            if (a.o) {
                pj(a);
                var c = a.o,
                    d = a.xd[0] ? da : null;
                a.o = null;
                a.xd = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (f) {
                    (c = a.p) && c.log(ti, "Problem encountered resetting onreadystatechange: " + f.message, void 0)
                }
            }
        },
        pj = function(a) {
            a.o && a.Bd && (a.o.ontimeout = null);
            ia(a.Jc) && (Ae(a.Jc), a.Jc = null)
        };
    X.prototype.Hb = function() {
        return !!this.o
    };
    X.prototype.kg = function() {
        return 4 == tj(this)
    };
    X.prototype.ke = function() {
        var a = uj(this),
            b;
        t: switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                b = !0;
                break t;
            default:
                b = !1
        }
        if (!b) {
            if (a = 0 === a) a = Yf(String(this.gb))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), a = !lj.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    };
    var tj = function(a) {
            return a.o ? a.o.readyState : 0
        },
        uj = function(a) {
            try {
                return 2 < tj(a) ? a.o.status : -1
            } catch (b) {
                return (a = a.p) && a.Me("Can not get status: " + b.message, void 0), -1
            }
        };
    X.prototype.Fe = function() {
        try {
            return this.o ? this.o.responseText : ""
        } catch (a) {
            return W(this.p, "Can not get responseText: " + a.message), ""
        }
    };
    X.prototype.ig = function() {
        try {
            return this.o ? this.o.responseXML : null
        } catch (a) {
            return W(this.p, "Can not get responseXML: " + a.message), null
        }
    };
    X.prototype.Hd = function(a) {
        if (this.o) {
            var b = this.o.responseText;
            a && 0 == b.indexOf(a) && (b = b.substring(a.length));
            return oi(b)
        }
    };
    var nj = function(a, b) {
        return b + " [" + a.Kf + " " + a.gb + " " + uj(a) + "]"
    };
    var vj = function(a, b) {
        this.Lf = a;
        this.kb = new X;
        this.jd = b;
        this.zd = new P
    };
    u(vj, Kc);
    vj.prototype.e = function() {
        this.kb.j();
        this.kb = null;
        this.zd.clear();
        this.zd = null
    };
    vj.prototype.rc = function(a, b, c) {
        this.kb.Hb() && (this.kb.j(), this.kb = new X);
        var d = I().a("token");
        d && (a.push("token"), a.push(d.value));
        d = [];
        y(0 == Math.max(a.length - 0, 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
        for (var f = 0; f < a.length; f += 2) Zf(a[f], a[f + 1], d);
        d[0] = "";
        d = d.join("");
        md(this.kb, "complete", r(this.Gc, this, a, b, c), !1);
        c ? this.kb.send(ef(this.Lf), "POST", d) : this.kb.send(ef(this.Lf + "?" + d))
    };
    vj.prototype.Gc = function(a, b, c, d) {
        d = d.target;
        var f = this.zd.get(String(uj(d)));
        if (f) {
            var g = void 0;
            switch (f.responseType) {
                case "TEXT":
                    g = d.Fe();
                    break;
                case "JSON":
                    g = d.Hd()
            }
            f.callback(g)
        } else {
            if (503 == uj(d) || 400 == uj(d)) f = I().a("token").value, f = Na(a, f), -1 != f && $a(a, f - 1, 2);
            if (503 == uj(d)) Q(function() {
                this.rc(a, b, c)
            }, 1500, this);
            else {
                if (400 == uj(d)) try {
                    if ("invalid_token" == d.Hd().statusCode) {
                        wj(r(this.rc, this, a, b, c));
                        return
                    }
                } catch (h) {
                    throw Error("Unexpected error");
                }
                if (d.ke()) switch (this.jd) {
                    case "TEXT":
                        b(d.Fe());
                        break;
                    case "JSON":
                        b(d.Hd())
                }
            }
        }
    };
    var wj = function(a) {
            var b = Bc(I()).location.href + "&skip=os";
            Xi(b, function(b) {
                b = (new Vb(b.target.ig())).a("token").value;
                I().a("token").value = b;
                a()
            })
        },
        xj = function(a, b, c, d) {
            if (3 < arguments.length) {
                var f = Za(arguments, 3);
                A(f, function(d) {
                    d.zd.set(String(a), {
                        callback: b,
                        responseType: c
                    })
                })
            }
        };
    var yj = function() {
        vj.call(this, "/uar", "JSON")
    };
    u(yj, vj);
    yj.prototype.Qe = function(a, b, c) {
        this.rc(["action", "DELETE", "rid", a, "oneboxName", b], c, !0)
    };
    hi.set("UAR_DELETE", yj);
    var zj = function() {
        vj.call(this, "/uar", "JSON")
    };
    u(zj, vj);
    hi.set("UAR_GET_INFO", zj);
    var Aj = function() {
        vj.call(this, "/uar", "JSON")
    };
    u(Aj, vj);
    var Bj = function(a, b, c, d, f, g, h, k) {
        b = ["action", k ? "EDIT" : "ADD", "url", c, "title", b, "oneboxName", d];
        k ? (b.push("rid"), b.push(k)) : (b.push("query"), b.push(h));
        g && (b.push("addedby"), b.push(g));
        a.rc(b, f, !0)
    };
    Aj.prototype.Ee = function(a, b, c, d, f, g) {
        Bj(this, b, c, d, f, g, void 0, a)
    };
    Aj.prototype.De = function(a, b, c, d, f, g) {
        Bj(this, b, c, d, f, g, a)
    };
    hi.set("UAR_SAVE", Aj);
    var Cj = function(a) {
        R.call(this, a)
    };
    u(Cj, R);
    Cj.prototype.dispatchEvent = function(a, b, c) {
        Cj.c.dispatchEvent.call(this, new bf(a, c || this, b))
    };
    var Dj = new P;
    var Nj = function(a) {
        R.call(this, a);
        var b;
        ja(this) ? b = Dj.get(na(this)) : ka(this) && (b = Dj.get(na(this.constructor)));
        if (!b) throw Error("No renderer registered for " + this);
        this.i = new b(this);
        this.vb = new P;
        this.Zd = ii("UAR_GET_INFO");
        this.qe = ii("UAR_DELETE");
        this.ud = ii("UAR_SAVE");
        Y(this, "uarSettingsFetched", !1);
        Ej(this, !1);
        Y(this, "addModeration", !1);
        Y(this, "editModeration", !1);
        Y(this, "deleteModeration", !1);
        Fj(this, null);
        Gj(this, null);
        Hj(this, !1);
        Ij(this, 3);
        Jj(this, []);
        Kj(this, "text");
        Lj(this, null);
        Mj(this,
            null);
        xj(401, r(this.ei, this), void 0, this.Zd, this.qe, this.ud)
    };
    u(Nj, Cj);
    e = Nj.prototype;
    e.e = function() {
        Nj.c.e.call(this);
        this.qe.j();
        this.ud.j();
        this.Zd.j();
        this.i.j()
    };
    e.h = function() {
        var a = r(this.gh, this);
        this.Zd.rc(["action", "INFO", "modulename", Oj(this)], a, !0);
        this.i.h();
        this.b = this.i.a()
    };
    e.v = function() {
        Nj.c.v.call(this);
        this.i.v()
    };
    e.ja = function() {
        Nj.c.ja.call(this);
        this.i.ja()
    };
    e.lb = function(a) {
        return this.i.lb(a)
    };
    e.Y = function(a) {
        return this.i.Y(a)
    };
    var Y = function(a, b, c) {
            null == a.G && (a.G = {});
            a.G[b] = c
        },
        Ej = function(a, b) {
            Y(a, "requireAuthN", b)
        },
        Fj = function(a, b) {
            Y(a, "moduleName", b)
        },
        Gj = function(a, b) {
            Y(a, "moduleDescription", b)
        },
        Hj = function(a, b) {
            Y(a, "displayUarDescription", b)
        },
        Ij = function(a, b) {
            Y(a, "defaultVisibleResCount", null != b ? b : 3)
        },
        Jj = function(a, b) {
            Y(a, "results", b);
            a.vb.clear();
            A(Pj(a), function(a) {
                Qj(this, a, !1)
            }, a)
        },
        Rj = function(a, b) {
            a.vb.remove(b);
            var c = Pj(a),
                d = Ra(c, function(a) {
                    return a.id == b
                }, a);
            Va(c, d)
        },
        Qj = function(a, b, c) {
            a.vb.set(b.id, b);
            c && Pj(a).push(b)
        },
        Kj = function(a, b) {
            Y(a, "addedByUserType", null != b ? b : "text")
        },
        Lj = function(a, b) {
            Y(a, "addedByUserImgTmpl", b)
        },
        Mj = function(a, b) {
            Y(a, "addedByUserGoUrl", b)
        },
        Sj = function(a) {
            return a.G.requireAuthN
        },
        Tj = function(a) {
            return a.G.addModeration
        },
        Uj = function(a) {
            return a.G.editModeration
        },
        Vj = function(a) {
            return a.G.deleteModeration
        },
        Oj = function(a) {
            return a.G.moduleName
        },
        Wj = function(a) {
            return a.G.displayUarDescription
        },
        Xj = function(a) {
            return a.G.moduleDescription
        },
        Yj = function(a) {
            return a.G.defaultVisibleResCount
        },
        Pj = function(a) {
            return a.G.results
        },
        Zj = function(a) {
            var b = !1,
                c = !1,
                d = !1;
            switch (a) {
                case "MT_ALL":
                    b = c = d = !0;
                    break;
                case "MT_ADD":
                    b = !0;
                    break;
                case "MT_DELETE":
                    d = !0;
                    break;
                case "MT_EDIT":
                    c = !0
            }
            a = new P;
            a.set("addModeration", b);
            a.set("deleteModeration", d);
            a.set("editModeration", c);
            return a
        },
        ak = function(a, b) {
            var c = Zj(b);
            ue(c.$a(), function(a) {
                switch (a) {
                    case "addModeration":
                        a = c.get(a);
                        Y(this, "addModeration", a);
                        break;
                    case "editModeration":
                        a = c.get(a);
                        Y(this, "editModeration", a);
                        break;
                    case "deleteModeration":
                        a = c.get(a), Y(this, "deleteModeration", a)
                }
            }, a)
        };
    e = Nj.prototype;
    e.gh = function(a) {
        "ok" == a.statusCode && (a = a.response[0], ak(this, a.moderation), Ej(this, a.requireAuthn), Y(this, "uarSettingsFetched", !0))
    };
    e.Gc = function(a, b, c) {
        if ("error" == c.statusCode) this.dispatchEvent("SERVER_ERROR");
        else if ("username_required" == c.statusCode) Ej(this, !1), this.dispatchEvent("REQUIRE_USER_NAME");
        else if ("under_review" == c.statusCode) this.dispatchEvent("EXISTING_REVIEW_PENDING");
        else {
            var d = [],
                f = c.moderation;
            if (ga(f)) {
                var g = Zj(f);
                ue(g.$a(), function(a) {
                    var b;
                    switch (a) {
                        case "addModeration":
                            b = Tj(this);
                            break;
                        case "editModeration":
                            b = Uj(this);
                            break;
                        case "deleteModeration":
                            b = Vj(this)
                    }
                    b != g.get(a) && d.push(a)
                }, this);
                0 < d.length &&
                    ak(this, f)
            }
            var h = !1;
            switch (a) {
                case "ADD":
                    h = Tj(this);
                    f = "addModeration";
                    break;
                case "UPDATE":
                    h = Uj(this);
                    f = "editModeration";
                    break;
                case "DELETE":
                    h = Vj(this), f = "deleteModeration"
            }
            if (h) a = {
                action: a,
                Qf: b,
                ci: -1 != d.indexOf(f)
            }, this.dispatchEvent("MODERATION_REQUIRED", a);
            else {
                var k;
                switch (a) {
                    case "ADD":
                        Tj(this) || (b.id = "uar-" + c.resultId, Sj(this) && (b.Xa = c.addedBy), Qj(this, b, !0));
                        k = "ADD";
                        break;
                    case "UPDATE":
                        Uj(this) || "under_review" == c.statusCode || (k = this.vb.get(b.id), k.title = b.title, k.url = b.url);
                        k = "UPDATE";
                        break;
                    case "DELETE":
                        Vj(this) || "under_review" == c.statusCode || Rj(this, b.id), k = "DELETE"
                }
                a = {
                    action: a,
                    Qf: b
                };
                this.dispatchEvent(k, a)
            }
        }
    };
    e.ei = function() {
        Ej(this, !0);
        this.dispatchEvent("REQUIRE_AUTHN")
    };
    e.Qe = function(a) {
        this.qe.Qe(bk(a), Oj(this), r(this.Gc, this, "DELETE", {
            id: a
        }))
    };
    e.Ee = function(a, b, c, d) {
        this.ud.Ee(bk(a), b, c, Oj(this), r(this.Gc, this, "UPDATE", {
            id: a,
            title: b,
            url: c,
            Xa: d
        }), d)
    };
    var bk = function(a) {
        var b = a.indexOf("uar-");
        return -1 != b ? a.substring(b + 4) : a
    };
    Nj.prototype.De = function(a, b, c, d) {
        this.ud.De(a, b, c, Oj(this), r(this.Gc, this, "ADD", {
            title: b,
            url: c,
            Xa: d
        }), d)
    };
    ba("gsa.ui.uar.init", function(a, b) {
        var c = Yb("gsa-uar-data-container", document),
            d = function(a, b) {
                var c = Yb(a, b);
                return 0 == c.length ? null : x(c[0].value)
            },
            f = [];
        A(c, function(c) {
            var h = new Nj;
            f.push(h);
            var k = Yb("gsa-uar-record", c),
                l = [];
            A(k, function(a) {
                var b = d("gsa-uar-id-value", a),
                    c = d("gsa-uar-title-value", a),
                    f = d("gsa-uar-url-value", a);
                a = d("gsa-uar-username-value", a);
                l.push({
                    id: b,
                    title: c,
                    url: f,
                    Xa: a
                })
            });
            Fj(h, d("gsa-uar-module-name", c));
            Gj(h, d("gsa-uar-description", c));
            Hj(h, "1" == d("gsa-uar-display-description",
                c));
            Kj(h, d("gsa-uar-added-by-user-type", c));
            Mj(h, d("gsa-uar-added-by-user-go-url-tmpl", c));
            Lj(h, d("gsa-uar-added-by-user-img-url-tmpl", c));
            Ij(h, Number(d("gsa-uar-default-visible-count", c)));
            null == a || v(a) || (Kj(h, "image"), Lj(h, a));
            null != b && !v(b) && Mj(h, b);
            Jj(h, l);
            k = xc(c, "DIV", "gsa-uar-section-container");
            h.M(k);
            lc(c);
            L(window, "unload", s(J, h))
        });
        return f
    });
    var ck = function(a) {
        gi.call(this, a)
    };
    u(ck, gi);
    ck.prototype.v = function() {
        ck.c.v.call(this);
        this.J.d(this.f, "REQUIRE_USER_NAME", this.uh, !1, this);
        this.J.d(this.f, "REQUIRE_AUTHN", this.qh, !1, this);
        this.J.d(this.f, "SERVER_ERROR", this.th, !1, this);
        this.J.d(this.f, "EXISTING_REVIEW_PENDING", this.rh, !1, this);
        this.J.d(this.f, "MODERATION_REQUIRED", this.sh, !1, this)
    };
    var Z = function(a) {
        gi.call(this, a);
        this.f = a;
        this.cb = this.Qa = this.eb = this.gc = this.bb = this.tb = this.Ga = this.Mb = this.ga = null;
        this.sa = new U;
        this.oa = new U;
        this.ha = new U;
        this.r = null;
        a = B("MSG_SAVE_BTN");
        this.ya = new Gh(a, void 0, 2);
        this.Xc = new Gh(B("MSG_CANCEL_BTN"));
        this.Ra = new T;
        this.hc = null;
        this.Sa = new Rg;
        this.Ha = new Tg("");
        this.Ob = new P;
        this.Nb = []
    };
    u(Z, ck);
    Z.prototype.h = function() {
        var a = "";
        Wj(this.f) && Xj(this.f) && (a = Xj(this.f).substring(0, 30), 30 < Xj(this.f).length && (a += "..."));
        var b = Za(Pj(this.f), 0, Yj(this.f)),
            c = Za(Pj(this.f), Yj(this.f));
        this.ga = tf(ci, {
            description: a,
            af: b,
            bf: c
        }, this.Yc);
        this.gc = $(this, "gsa-uar-action-bar");
        this.eb = $(this, "gsa-uar-record-action-con");
        dk(this);
        a = $(this, "gsa-uar-add-btn");
        b = Kh(ef("images/add_sheet.png"));
        this.Mb = new Gh(b, void 0, 4);
        this.Mb.M(a);
        ek(this, this.Mb, B("MSG_UAR_CONTRIBUTE_RESULT"));
        a = $(this, "gsa-uar-more-results");
        this.Ga = new Jf(null, a);
        this.Ga.$e = 130;
        a.style.display = "block";
        this.V(a);
        a = Kh(ef("images/mail_expand_all.png"));
        this.tb = new Gh(a, void 0, 4);
        a = Kh(ef("images/collapse_all.png"));
        this.bb = new Gh(a, void 0, 4);
        a = $(this, "gsa-uar-expand-collapse-con");
        this.tb.M(a);
        this.bb.M(a);
        this.bb.k(!1);
        ek(this, this.tb, B("MSG_UAR_VIEW_ALL_RESULTS"));
        ek(this, this.bb, B("MSG_UAR_HIDE_FEW_RESULTS"));
        a = Kh(ef("images/mode_edit.png"));
        this.Qa = new Gh(a, null, void 0, 1);
        a = Kh(ef("images/delete.png"));
        this.cb = new Gh(a, null, void 0, 1);
        this.Qa.Zc(2);
        this.cb.Zc(1);
        this.Qa.M(this.eb);
        this.cb.M(this.eb);
        ek(this, this.Qa, B("MSG_UAR_EDIT_THIS_RESULT"));
        ek(this, this.cb, B("MSG_UAR_DELETE_THIS_RESULT"));
        this.r = tf(di, void 0, this.Yc);
        this.g.appendChild(this.ga, this.r);
        this.sa.Y($(this, "gsa-uar-title-field", this.r));
        a = new hf(this.sa.a());
        this.Nb.push(a);
        this.oa.Y($(this, "gsa-uar-url-field", this.r));
        a = new hf(this.oa.a());
        this.Nb.push(a);
        this.ha.Y($(this, "gsa-uar-username-field", this.r));
        a = new hf(this.ha.a());
        this.Nb.push(a);
        a = $(this, "gsa-uar-save-cancel-con",
            this.r);
        this.ya.Aa(!1);
        this.ya.M(a);
        this.Xc.M(a);
        this.Ra.M();
        this.hc = tf(ei);
        this.g.appendChild(this.ga, this.hc);
        this.Ha.M($(this, "gsa-uar-butter-bar", this.hc));
        this.Ha.k(!1);
        this.V(this.hc);
        Wj(this.f) && Xj(this.f) && (a = fc("DIV", {
                "class": "gsa-uar-bubble-con"
            }), this.g.appendChild(this.ga, a), this.U(a), this.Sa.ic(!0), this.Sa.jc($(this, "gsa-uar-description-header")), this.Sa.ab(3, 2), b = this.Sa, y(!b.D, "Must call setShowClosebox() before rendering"), b.Xd = !1, b = '<div class="gsa-uar-description-con"><div class="gsa-uar-description-label">' +
            Eg(this.Yc.ub.MSG_UAR_DESCRIPTION) + "</div><div>" + Eg(Xj(this.f)) + "</div></div>", this.Sa.za(b), this.Sa.M(a), this.Sa.k(!1));
        this.b = this.ga
    };
    var fk = function(a, b, c) {
            var d;
            "image" == a.f.G.addedByUserType && a.f.G.addedByUserImgTmpl && (d = a.f.G.addedByUserImgTmpl.replace("{UID}", c));
            var f;
            a.f.G.addedByUserGoUrl && (f = a.f.G.addedByUserGoUrl.replace("{UID}", c));
            d = tf(fi, {
                Oh: c,
                gg: d,
                fg: na({}),
                bc: f
            }, a.Yc);
            b = $(a, "gsa-uar-info-action-bar", b);
            a.g.appendChild(b, d);
            "image" == a.f.G.addedByUserType && (c = B("MSG_UAR_ADDED_BY") + " " + c, ek(a, $(a, "gsa-uar-addedby-img-con", b), c), (new ff).load(b, "gsa-uar-user-img", "images/people_search_missing_image.gif"))
        },
        dk = function(a) {
            var b =
                a.g.Ja("gsa-uar-record", a.ga);
            A(b, function(a) {
                var b = this.f.vb.get(a.id).Xa;
                fk(this, $(this, "gsa-uar-record-read-con", a), b)
            }, a)
        };
    Z.prototype.v = function() {
        Z.c.v.call(this);
        this.J.d(this.Mb, "action", s(this.hf, r(this.df, this, !1)));
        this.J.d(this.tb, "action", s(this.jf, !0));
        this.J.d(this.bb, "action", s(this.jf, !1));
        for (var a = this.g.Ja("gsa-uar-record-read-con", this.ga), b = 0; b < a.length; b++) gk(this, a[b]);
        this.J.d(this.Qa, "action", s(this.hf, r(this.Zg, this)));
        this.J.d(this.cb, "action", this.Xg);
        this.J.d(this.Xc, "action", this.Wg);
        this.J.d(this.ya, "action", this.$g);
        A(this.Nb, function(a) {
            a instanceof hf && this.J.d(a, "input", this.ah)
        }, this);
        Wj(this.f) && Xj(this.f) && this.J.d($(this, "gsa-uar-description-header"), ["mouseover", "mouseout"], this.Yg)
    };
    Z.prototype.Yg = function(a) {
        this.V($(this, "gsa-uar-bubble-con"));
        this.Sa.k("mouseover" == a.type)
    };
    var ik = function(a) {
            if (!a.f.G.uarSettingsFetched) {
                var b = B("MSG_UAR_LOADING_SETTINGS");
                hk(a, b, "info", void 0)
            }
            return a.f.G.uarSettingsFetched
        },
        hk = function(a, b, c, d) {
            a.Ha.fd(c);
            a.Ha.za(b);
            a.Ha.k(!0);
            d || Q(function() {
                this.Ha.k(!1)
            }, 3E3, a)
        },
        jk = function(a, b) {
            hk(a, b, "error", void 0)
        },
        ek = function(a, b, c) {
            b instanceof R ? a.Ob.set(Ee(b), new ai(b.a(), c, void 0, 1)) : a.Ob.get(b.id) || a.Ob.set(b.id, new ai(b, c, void 0, 1))
        },
        kk = function(a, b) {
            var c = b instanceof R ? a.Ob.get(Ee(b)) : b.id,
                d = c.xg();
            c.j();
            ek(a, b, d)
        },
        lk = function(a,
            b, c, d, f) {
            var g = a.Ra;
            g.$c = b;
            g.Ia && oc(g.Ia, b);
            a.Ra.za(c);
            a.J.Mc(a.Ra, "dialogselect", d);
            f ? Ue(a.Ra, S(new Oe, af(), !0)) : Ue(a.Ra, S(S(new Oe, af(), !0), {
                key: "cancel",
                caption: B("MSG_CANCEL_BTN")
            }, !1, !0));
            Nh(a.Ra);
            a.Ra.k(!0)
        },
        mk = function(a) {
            var b = $(a, "gsa-uar-expand-collapse-con");
            a.g.Ja("gsa-uar-record", a.ga).length > Yj(a.f) ? a.V(b) : a.ia(b) && a.U(b)
        },
        nk = function(a, b) {
            return a.g.je(b, "DIV", "gsa-uar-record")
        },
        $ = function(a, b, c) {
            a = a.g.Ja(b, c || a.ga);
            return 0 < a.length ? a[0] : null
        },
        ok = function(a, b, c, d) {
            a = $(a, b, d);
            "INPUT" ==
            a.tagName ? a.value = x(c) : a.innerHTML = x(c)
        };
    Z.prototype.ia = function(a) {
        return !Ua(Rb(a), "gsa-uar-hide")
    };
    Z.prototype.U = function(a) {
        this.ia(a) && Sb(a, "gsa-uar-hide")
    };
    Z.prototype.V = function(a) {
        this.ia(a) || Ub(a, "gsa-uar-hide")
    };
    var pk = function(a, b) {
            if (0 == a.g.Ja("gsa-uar-record", a.ga).length) {
                var c = $(a, "gsa-uar-no-results");
                b ? a.U(c) : a.V(c)
            }
        },
        qk = function(a) {
            if (a.ia(a.r)) {
                var b = nk(a, a.r);
                b.id ? (b = $(a, "gsa-uar-record-read-con", b), a.U(a.r), a.V(b)) : (a.g.removeNode(a.r), a.g.appendChild(a.ga, a.r), b = a.g.je(b, "LI"), a.g.removeNode(b), a.V(a.gc), a.U(a.r), pk(a))
            }
            a.sa.reset();
            a.oa.reset();
            a.ha.reset();
            a.ya.Aa(!1)
        },
        rk = function(a) {
            a.ha.reset();
            var b = a.ha.a();
            Sj(a.f) && a.ia(b) ? a.U(b) : Sj(a.f) || a.V(b)
        };
    e = Z.prototype;
    e.th = function() {
        sk(this, !0);
        jk(this, B("MSG_UAR_SERVER_ERROR"))
    };
    e.qh = function() {
        sk(this, !0);
        rk(this);
        jk(this, B("MSG_UAR_AUTHN_REQUIRED"))
    };
    e.uh = function() {
        sk(this, !0);
        rk(this);
        jk(this, B("MSG_UAR_USERNAME_REQUIRED"))
    };
    e.rh = function() {
        this.Ha.k(!1);
        sk(this, !0);
        lk(this, B("MSG_UAR_EXISTING_REVIEW_PENDING_TITLE"), tk(["MSG_UAR_EXISTING_REVIEW_PENDING_CONTENT", "MSG_UAR_REVIEW_NOTE"]), da, !0)
    };
    e.sh = function(a) {
        var b = a.data.action;
        if (a.data.ci) {
            a = "";
            var c = [];
            switch (b) {
                case "ADD":
                    a = "MSG_UAR_ADD_PENDING_REVIEW_TITLE";
                    c = ["MSG_UAR_ADD_PENDING_REVIEW_CONTENT"];
                    break;
                case "UPDATE":
                    a = "MSG_UAR_UPDATE_PENDING_REVIEW_TITLE";
                    c = ["MSG_UAR_UPDATE_PENDING_REVIEW_CONTENT", "MSG_UAR_REVIEW_NOTE"];
                    break;
                case "DELETE":
                    a = "MSG_UAR_DELETE_PENDING_REVIEW_TITLE", c = ["MSG_UAR_DELETE_PENDING_REVIEW_CONTENT", "MSG_UAR_REVIEW_NOTE"]
            }
            lk(this, B(a), tk(c), da, !0)
        }
        this.Ha.k(!1);
        sk(this, !0);
        qk(this)
    };
    e.dg = function(a, b) {
        this.Ha.k(!1);
        sk(this, !0);
        a(b)
    };
    e.Wg = function() {
        qk(this)
    };
    e.hf = function(a, b) {
        rk(this);
        if (this.ia(this.r)) {
            var c = this.ya.isEnabled();
            if (!nk(this, this.r).id) {
                var c = x(this.sa.F()),
                    d = x(this.oa.F()),
                    c = !v(c) && Vf(this.sa) || !v(d) && Vf(this.oa);
                Sj(this.f) || (d = x(this.ha.F()), c = c || !v(d) && Vf(this.ha))
            }
            if (c) {
                lk(this, B("MSG_UAR_DISCARD_CHANGES_TITLE"), B("MSG_UAR_DISCARD_CHANGES_CONTENT"), r(this.Kh, this, a, b));
                return
            }
        }
        a(b)
    };
    e.Kh = function(a, b, c) {
        "ok" == c.key && a(b)
    };
    e.Zg = function() {
        if (ik(this)) {
            qk(this);
            var a = nk(this, this.Qa.a()),
                b = $(this, "gsa-uar-record-read-con", a);
            this.U(b);
            this.g.removeNode(this.r);
            this.g.appendChild(a, this.r);
            a = this.f.vb.get(a.id);
            this.sa.Va(a.title);
            this.oa.Va(a.url);
            this.ha.Va(a.Xa);
            this.V(this.r);
            kk(this, this.Qa)
        }
    };
    e.$g = function() {
        if (ik(this)) {
            var a = nk(this, this.ya.a());
            !a.id && Tj(this.f) ? lk(this, B("MSG_UAR_CONFIRM_ADD_TITLE"), tk(["MSG_UAR_CONFIRM_ADD_CONTENT", "MSG_UAR_CONFIRM_SUBMIT_REQUEST"]), r(this.Sf, this, a)) : a.id && Uj(this.f) ? lk(this, B("MSG_UAR_CONFIRM_UPDATE_TITLE"), tk(["MSG_UAR_CONFIRM_UPDATE_CONTENT", "MSG_UAR_CONFIRM_SUBMIT_REQUEST"]), r(this.Sf, this, a)) : uk(this, a)
        }
    };
    e.Sf = function(a, b) {
        "ok" == b.key && uk(this, a)
    };
    var uk = function(a, b) {
            var c = B("MSG_UAR_SAVE_IN_PROGRESS");
            a.ya.za(c);
            sk(a, !1);
            a.ya.Aa(!1);
            var c = x(a.sa.F()),
                d = x(a.oa.F()),
                f = void 0;
            Sj(a.f) || (f = x(a.ha.F()));
            var g = r(a.dg, a, r(a.Lh, a));
            b.id ? (md(a.f, "UPDATE", g, !1), a.f.Ee(b.id, c, d, f)) : (md(a.f, "ADD", g, !1), a.f.De(document.getElementsByName("q")[0].value, c, d, f))
        },
        sk = function(a, b) {
            if (b) {
                var c = B("MSG_SAVE_BTN");
                a.ya.za(c)
            }
            vk(a);
            a.Xc.Aa(b);
            a.Qa.Aa(b);
            a.cb.Aa(b)
        };
    Z.prototype.Lh = function(a) {
        a = a.data.Qf;
        var b = nk(this, this.r),
            c = "",
            c = !b.id && Sj(this.f) ? a.Xa : this.ha.F();
        ok(this, "gsa-uar-title-link", this.sa.F(), b);
        $(this, "gsa-uar-title-link", b).setAttribute("href", this.oa.F());
        ok(this, "gsa-uar-url-link", this.oa.F(), b);
        var d = $(this, "gsa-uar-record-read-con", b);
        b.id || (b.setAttribute("id", a.id), fk(this, d, c), gk(this, d));
        this.U(this.r);
        this.V(d);
        mk(this);
        this.V(this.gc)
    };
    var vk = function(a) {
        if (a.ia(a.r)) {
            var b = x(a.sa.F()),
                c = x(a.oa.F()),
                d = x(a.ha.F()),
                f = nk(a, a.r),
                g = !1;
            if (f.id) {
                g = !v(b) && Vf(a.sa) || !v(c) && Vf(a.oa);
                Sj(a.f) || (g = g || !v(d) && Vf(a.ha));
                var h = !v(b) && !v(c),
                    f = a.f.vb.get(f.id),
                    b = !v(b) && b != f.title,
                    c = !v(c) && c != f.url,
                    k = !1;
                Sj(a.f) || (k = !v(d) && d != f.Xa, h = h && !v(d));
                g = g && h && (b || c || k)
            } else g = !v(b) && Vf(a.sa) && !v(c) && Vf(a.oa), Sj(a.f) || (g = g && !v(d) && Vf(a.ha));
            a.ya.Aa(g)
        }
    };
    Z.prototype.ah = function() {
        vk(this)
    };
    var tk = function(a) {
        for (var b = "", c = 0; c < a.length; c++) b += B(a[c]), c + 1 != a.length && (b += "<br/><br/>");
        return b
    };
    Z.prototype.Xg = function(a) {
        ik(this) && (a = nk(this, a.currentTarget.a()), kk(this, this.cb), Vj(this.f) ? lk(this, B("MSG_UAR_CONFIRM_DELETE_TITLE"), tk(["MSG_UAR_CONFIRM_DELETE_MODERATION_REQUIRED", "MSG_UAR_CONFIRM_SUBMIT_REQUEST"]), r(this.Vf, this, a)) : lk(this, B("MSG_UAR_CONFIRM_DELETE_TITLE"), B("MSG_UAR_CONFIRM_DELETE_TEXT"), r(this.Vf, this, a)))
    };
    Z.prototype.Vf = function(a, b) {
        if ("ok" == b.key) {
            sk(this, !1);
            var c = B("MSG_UAR_DELETE_IN_PROGRESS");
            hk(this, c, "info", !0);
            c = r(this.dg, this, r(this.ii, this, a));
            md(this.f, "DELETE", c, !1);
            this.f.Qe(a.id)
        }
    };
    Z.prototype.ii = function(a) {
        if (!Vj(this.f)) {
            var b = $(this, "gsa-uar-record-read-con", a);
            gk(this, b, !0);
            a = this.g.je(a, "LI");
            this.g.removeNode(a);
            a = this.g.Ja("gsa-uar-record", this.ga).length;
            b = this.g.Ja("gsa-uar-record", $(this, "gsa-uar-more-results-con")).length;
            a - b < Yj(this.f) && a >= Yj(this.f) && (a = $(this, "gsa-uar-more-results-con"), b = Xb(this.g.m, "LI", null, a)[0], this.g.removeNode(b), kc(b, a));
            mk(this);
            pk(this)
        }
    };
    var wk = function(a, b) {
        if (null == a.Ga.ta)
            if (a.Ga.hb) b();
            else {
                var c = a.tb,
                    d = a.bb;
                a.J.Mc(a.Ga, "toggle", function() {
                    c.k(!1);
                    d.k(!0);
                    d = c = null;
                    b()
                });
                a.Ga.expand()
            }
    };
    Z.prototype.df = function(a, b) {
        kk(this, this.Mb);
        if (ik(this))
            if (a) {
                qk(this);
                pk(this, !0);
                var c = tf(bi);
                if (this.g.Ja("gsa-uar-record", this.ga).length >= Yj(this.f)) {
                    var d = $(this, "gsa-uar-more-result-list");
                    this.g.appendChild(d, c)
                } else d = $(this, "gsa-uar-more-results-con"), kc(c, d);
                this.g.removeNode(this.r);
                c = $(this, "gsa-uar-record", c);
                this.g.appendChild(c, this.r);
                this.V(this.r);
                this.U(this.gc)
            } else wk(this, r(this.df, this, !0, b))
    };
    var gk = function(a, b, c) {
        var d = ["focus", "mouseover", "mouseout"];
        c ? a.J.ba(b, d, a.ng) : a.J.d(b, d, a.ng)
    };
    Z.prototype.ng = function(a) {
        "mouseout" == a.type ? this.U(this.eb) : (a = $(this, "gsa-uar-info-action-bar", a.currentTarget), this.g.removeNode(this.eb), this.g.appendChild(a, this.eb), this.V(this.eb))
    };
    Z.prototype.jf = function(a) {
        null == this.Ga.ta && (a ? this.Ga.expand() : this.Ga.collapse(), this.tb.k(!a), this.bb.k(a))
    };
    Z.prototype.e = function() {
        Z.c.e.call(this);
        this.ga = null;
        this.J.j();
        this.Mb.j();
        this.Ga.j();
        this.tb.j();
        this.bb.j();
        this.eb = this.gc = null;
        this.Qa.j();
        this.cb.j();
        this.sa.j();
        this.oa.j();
        this.ha.j();
        this.r = null;
        this.ya.j();
        this.Xc.j();
        this.Ra.j();
        this.hc = null;
        this.Sa.j();
        this.Ha.j();
        ue(this.Ob, function(a) {
            a.j()
        });
        this.Ob = null;
        A(this.Nb, function(a) {
            a.j()
        });
        this.Nb = null
    };
    Dj.set(na(Nj), Z);
})()
