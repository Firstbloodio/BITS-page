window.require;
"use strict";
var _createClass = function () {
    function a(f, c) {
        for (var b = 0;
             b < c.length; b++) {
            var d = c[b];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) {
                d.writable = true
            }
            Object.defineProperty(f, d.key, d)
        }
    }

    return function (d, b, c) {
        if (b) {
            a(d.prototype, b)
        }
        if (c) {
            a(d, c)
        }
        return d
    }
}();
var _get = function get(b, f, d) {
    if (b === null) {
        b = Function.prototype
    }
    var g = Object.getOwnPropertyDescriptor(b, f);
    if (g === undefined) {
        var c = Object.getPrototypeOf(b);
        if (c === null) {
            return undefined
        } else {
            return get(c, f, d)
        }
    } else {
        if ("value" in g) {
            return g.value
        } else {
            var a = g.get;
            if (a === undefined) {
                return undefined
            }
            return a.call(d)
        }
    }
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (a) {
    return typeof a
} : function (a) {
    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
var _templateObject = _taggedTemplateLiteral(["/105/media/", "/", "/", ""], ["/105/media/", "/", "/", ""]);

function _taggedTemplateLiteral(a, b) {
    return Object.freeze(Object.defineProperties(a, {raw: {value: Object.freeze(b)}}))
}

function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var c = 0, b = Array(a.length);
             c < a.length; c++) {
            b[c] = a[c]
        }
        return b
    } else {
        return Array.from(a)
    }
}

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _possibleConstructorReturn(a, b) {
    if (!a) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return b && (typeof b === "object" || typeof b === "function") ? b : a
}

function _inherits(b, a) {
    if (typeof a !== "function" && a !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof a)
    }
    b.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: b,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (a) {
        Object.setPrototypeOf ? Object.setPrototypeOf(b, a) : b.__proto__ = a
    }
}

(function e(b, g, d) {
    function c(m, j) {
        if (!g[m]) {
            if (!b[m]) {
                var i = typeof require == "function" && require;
                if (!j && i) {
                    return i(m, !0)
                }
                if (a) {
                    return a(m, !0)
                }
                var k = new Error("Cannot find module '" + m + "'");
                throw k.code = "MODULE_NOT_FOUND", k
            }
            var h = g[m] = {exports: {}};
            b[m][0].call(h.exports, function (l) {
                var o = b[m][1][l];
                return c(o ? o : l)
            }, h, h.exports, e, b, g, d)
        }
        return g[m].exports
    }

    var a = typeof require == "function" && require;
    for (var f = 0; f < d.length; f++) {
        c(d[f])
    }
    return c
})({
    1: [function (b, c, a) {
        c.exports = {path: b("./ac-path/path")}
    }, {"./ac-path/path": 2}],
    2: [function (b, c, a) {
        function d(f) {
            return d.parse(f)
        }

        d.basename = function (g, f) {
            d._assertStr(g);
            var i;
            var h = g.match(/[^/]*$/)[0];
            if (f) {
                i = h.match(new RegExp("(.*)" + f + "$"));
                if (i) {
                    h = i[1]
                }
            }
            return h
        };
        d.dirname = function (g) {
            d._assertStr(g);
            var f = g.match(/^(.*)\b\/|.*/);
            return f[1] || g
        };
        d.extname = function (f) {
            d._assertStr(f);
            var g = f.match(/\.[^.]*$/);
            return g ? g[0] : ""
        };
        d.filename = function (f) {
            d._assertStr(f);
            return d.basename(f, d.extname(f))
        };
        d.format = function (g, h) {
            d._assertObj(g);
            var f = g.dirname ? g.dirname + "/" : "";
            if (g.basename) {
                f += g.basename
            } else {
                if (g.filename) {
                    f += g.filename;
                    if (g.extname) {
                        f += g.extname
                    }
                }
            }
            if (h) {
                if (typeof h === "string") {
                    f += "?" + h
                } else {
                    if (Object.prototype.toString.call(h) === Object.prototype.toString.call([])) {
                        f += "?" + h.join("&")
                    }
                }
            }
            return f
        };
        d.isAbsolute = function (f) {
            d._assertStr(f);
            return !!f.match(/(^http(s?))/)
        };
        d.isRootRelative = function (f) {
            d._assertStr(f);
            return !!f.match(/^\/(?!\/)/)
        };
        d.parse = function (f) {
            d._assertStr(f);
            return {dirname: d.dirname(f), basename: d.basename(f), filename: d.filename(f), extname: d.extname(f)}
        };
        d._assertStr = function (f) {
            d._assertType(f, "string")
        };
        d._assertObj = function (f) {
            d._assertType(f, "object")
        };
        d._assertType = function (h, f) {
            var g = typeof h === "undefined" ? "undefined" : _typeof(h);
            if (g === "undefined" || g !== f) {
                throw new TypeError("path param must be of type " + f)
            }
        };
        c.exports = d
    }, {}],
    3: [function (b, c, a) {
        c.exports = {cname: b("./ac-cname/cname")}
    }, {"./ac-cname/cname": 4}],
    4: [function (c, d, a) {
        var f = c("ac-path").path;

        function b(g) {
            return b.addPrefix(g)
        }

        b._prefix = function () {
            var g = "https://images.apple.com/global/elements/blank.gif";
            return g.replace(/global\/.*/, "")
        }();
        b.addPrefix = function (g) {
            if (f.isAbsolute(g)) {
                return g
            }
            b._assertRootRelative(g);
            g = b._prefix + g.replace(/^\//, "");
            if (g.indexOf("/105/") > 0) {
                g = g.replace("/105/", "/")
            }
            return g
        };
        b.formatUrl = function (j, g, l, k) {
            var i = f.format({dirname: j, filename: g, extname: l}, k);
            if (f.isAbsolute(i)) {
                return i
            }
            b._assertRootRelative(j);
            var h = b.addPrefix(i);
            return h
        };
        b._assertRootRelative = function (g) {
            if (!f.isRootRelative(g)) {
                throw new URIError("Only root-relative paths are currently supported")
            }
        };
        d.exports = b
    }, {"ac-path": 1}],
    5: [function (b, c, a) {
        c.exports = 8
    }, {}],
    6: [function (b, c, a) {
        c.exports = 11
    }, {}],
    7: [function (b, c, a) {
        c.exports = 9
    }, {}],
    8: [function (b, c, a) {
        c.exports = 1
    }, {}],
    9: [function (b, c, a) {
        c.exports = 3
    }, {}],
    10: [function (b, c, a) {
        var d = b("../isNode");
        c.exports = function f(h, g) {
            if (!d(h)) {
                return false
            }
            if (typeof g === "number") {
                return h.nodeType === g
            }
            return g.indexOf(h.nodeType) !== -1
        }
    }, {"../isNode": 14}],
    11: [function (i, a, r) {
        var t = i("./isNodeType");
        var n = i("../COMMENT_NODE");
        var k = i("../DOCUMENT_FRAGMENT_NODE");
        var j = i("../ELEMENT_NODE");
        var s = i("../TEXT_NODE");
        var d = [j, s, n, k];
        var m = " must be an Element, TextNode, Comment, or Document Fragment";
        var l = [j, s, n];
        var f = " must be an Element, TextNode, or Comment";
        var q = [j, k];
        var b = " must be an Element, or Document Fragment";
        var o = " must have a parentNode";
        a.exports = {
            parentNode: function h(u, x, w, v) {
                v = v || "target";
                if ((u || x) && !t(u, q)) {
                    throw new TypeError(w + ": " + v + b)
                }
            }, childNode: function c(u, x, w, v) {
                v = v || "target";
                if (!u && !x) {
                    return
                }
                if (!t(u, l)) {
                    throw new TypeError(w + ": " + v + f)
                }
            }, insertNode: function g(u, x, w, v) {
                v = v || "node";
                if (!u && !x) {
                    return
                }
                if (!t(u, d)) {
                    throw new TypeError(w + ": " + v + m)
                }
            }, hasParentNode: function p(u, w, v) {
                v = v || "target";
                if (!u.parentNode) {
                    throw new TypeError(w + ": " + v + o)
                }
            }
        }
    }, {
        "../COMMENT_NODE": 5,
        "../DOCUMENT_FRAGMENT_NODE": 6,
        "../ELEMENT_NODE": 8,
        "../TEXT_NODE": 9,
        "./isNodeType": 10
    }],
    12: [function (c, d, b) {
        var g = c("./internal/isNodeType");
        var a = c("./DOCUMENT_FRAGMENT_NODE");
        d.exports = function f(h) {
            return g(h, a)
        }
    }, {"./DOCUMENT_FRAGMENT_NODE": 6, "./internal/isNodeType": 10}],
    13: [function (c, d, b) {
        var g = c("./internal/isNodeType");
        var a = c("./ELEMENT_NODE");
        d.exports = function f(h) {
            return g(h, a)
        }
    }, {"./ELEMENT_NODE": 8, "./internal/isNodeType": 10}],
    14: [function (b, c, a) {
        c.exports = function d(f) {
            return !!(f && f.nodeType)
        }
    }, {}],
    15: [function (c, d, b) {
        var f = c("./internal/validate");
        d.exports = function a(g) {
            f.childNode(g, true, "remove");
            if (!g.parentNode) {
                return g
            }
            return g.parentNode.removeChild(g)
        }
    }, {"./internal/validate": 11}],
    16: [function (c, d, b) {
        var g = c("@marcom/ac-dom-nodes/isElement");
        var a = c("./matchesSelector");
        var h = c("./internal/validate");
        d.exports = function f(m, j, i, l) {
            var k = [];
            h.childNode(m, true, "ancestors");
            h.selector(j, false, "ancestors");
            if (i && g(m) && (!j || a(m, j))) {
                k.push(m)
            }
            l = l || document.body;
            if (m !== l) {
                while ((m = m.parentNode) && g(m)) {
                    if (!j || a(m, j)) {
                        k.push(m)
                    }
                    if (m === l) {
                        break
                    }
                }
            }
            return k
        }
    }, {"./internal/validate": 18, "./matchesSelector": 19, "@marcom/ac-dom-nodes/isElement": 13}],
    17: [function (b, c, a) {
        c.exports = window.Element ? function (d) {
            return d.matches || d.matchesSelector || d.webkitMatchesSelector || d.mozMatchesSelector || d.msMatchesSelector || d.oMatchesSelector
        }(Element.prototype) : null
    }, {}],
    18: [function (g, a, q) {
        g("@marcom/ac-polyfills/Array/prototype.indexOf");
        var m = g("@marcom/ac-dom-nodes/isNode");
        var o = g("@marcom/ac-dom-nodes/COMMENT_NODE");
        var j = g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
        var i = g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
        var h = g("@marcom/ac-dom-nodes/ELEMENT_NODE");
        var r = g("@marcom/ac-dom-nodes/TEXT_NODE");
        var s = function s(u, t) {
            if (!m(u)) {
                return false
            }
            if (typeof t === "number") {
                return u.nodeType === t
            }
            return t.indexOf(u.nodeType) !== -1
        };
        var p = [h, i, j];
        var b = " must be an Element, Document, or Document Fragment";
        var l = [h, r, o];
        var d = " must be an Element, TextNode, or Comment";
        var k = " must be a string";
        a.exports = {
            parentNode: function f(t, w, v, u) {
                u = u || "node";
                if ((t || w) && !s(t, p)) {
                    throw new TypeError(v + ": " + u + b)
                }
            }, childNode: function c(t, w, v, u) {
                u = u || "node";
                if (!t && !w) {
                    return
                }
                if (!s(t, l)) {
                    throw new TypeError(v + ": " + u + d)
                }
            }, selector: function n(t, w, v, u) {
                u = u || "selector";
                if ((t || w) && typeof t !== "string") {
                    throw new TypeError(v + ": " + u + k)
                }
            }
        }
    }, {
        "@marcom/ac-dom-nodes/COMMENT_NODE": 5,
        "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 6,
        "@marcom/ac-dom-nodes/DOCUMENT_NODE": 7,
        "@marcom/ac-dom-nodes/ELEMENT_NODE": 8,
        "@marcom/ac-dom-nodes/TEXT_NODE": 9,
        "@marcom/ac-dom-nodes/isNode": 14,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 486
    }],
    19: [function (d, f, c) {
        var g = d("@marcom/ac-dom-nodes/isElement");
        var i = d("./internal/validate");
        var a = d("./internal/nativeMatches");
        var h = d("./shims/matchesSelector");
        f.exports = function b(k, j) {
            i.selector(j, true, "matchesSelector");
            if (!g(k)) {
                return false
            }
            if (!a) {
                return h(k, j)
            }
            return a.call(k, j)
        }
    }, {
        "./internal/nativeMatches": 17,
        "./internal/validate": 18,
        "./shims/matchesSelector": 22,
        "@marcom/ac-dom-nodes/isElement": 13
    }],
    20: [function (c, d, a) {
        var h = c("./internal/validate");
        var b = c("./shims/querySelector");
        var g = "querySelector" in document;
        d.exports = function f(i, j) {
            j = j || document;
            h.parentNode(j, true, "querySelector", "context");
            h.selector(i, true, "querySelector");
            if (!g) {
                return b(i, j)
            }
            return j.querySelector(i)
        }
    }, {"./internal/validate": 18, "./shims/querySelector": 23}],
    21: [function (b, c, a) {
        b("@marcom/ac-polyfills/Array/prototype.slice");
        var h = b("./internal/validate");
        var g = b("./shims/querySelectorAll");
        var f = "querySelectorAll" in document;
        c.exports = function d(i, j) {
            j = j || document;
            h.parentNode(j, true, "querySelectorAll", "context");
            h.selector(i, true, "querySelectorAll");
            if (!f) {
                return g(i, j)
            }
            return Array.prototype.slice.call(j.querySelectorAll(i))
        }
    }, {"./internal/validate": 18, "./shims/querySelectorAll": 24, "@marcom/ac-polyfills/Array/prototype.slice": 487}],
    22: [function (c, d, b) {
        var f = c("../querySelectorAll");
        d.exports = function a(l, g) {
            var k = l.parentNode || document;
            var h = f(g, k);
            var j;
            for (j = 0;
                 j < h.length; j++) {
                if (h[j] === l) {
                    return true
                }
            }
            return false
        }
    }, {"../querySelectorAll": 21}],
    23: [function (b, c, a) {
        var d = b("./querySelectorAll");
        c.exports = function f(h, i) {
            var g = d(h, i);
            return g.length ? g[0] : null
        }
    }, {"./querySelectorAll": 24}],
    24: [function (c, b, f) {
        c("@marcom/ac-polyfills/Array/prototype.indexOf");
        var j = c("@marcom/ac-dom-nodes/isElement");
        var h = c("@marcom/ac-dom-nodes/isDocumentFragment");
        var k = c("@marcom/ac-dom-nodes/remove");
        var d = "_ac_qsa_";
        var i = function i(n, l) {
            var m;
            if (l === document) {
                return true
            }
            m = n;
            while ((m = m.parentNode) && j(m)) {
                if (m === l) {
                    return true
                }
            }
            return false
        };
        var g = function g(l) {
            if ("recalc" in l) {
                l.recalc(false)
            } else {
                document.recalc(false)
            }
            window.scrollBy(0, 0)
        };
        b.exports = function a(l, n) {
            var p = document.createElement("style");
            var q = d + (Math.random() + "").slice(-6);
            var m = [];
            var o;
            n = n || document;
            document[q] = [];
            if (h(n)) {
                n.appendChild(p)
            } else {
                document.documentElement.firstChild.appendChild(p)
            }
            p.styleSheet.cssText = "*{display:recalc;}" + l + '{ac-qsa:expression(document["' + q + '"] && document["' + q + '"].push(this));}';
            g(n);
            while (document[q].length) {
                o = document[q].shift();
                o.style.removeAttribute("ac-qsa");
                if (m.indexOf(o) === -1 && i(o, n)) {
                    m.push(o)
                }
            }
            document[q] = null;
            k(p);
            g(n);
            return m
        }
    }, {
        "@marcom/ac-dom-nodes/isDocumentFragment": 12,
        "@marcom/ac-dom-nodes/isElement": 13,
        "@marcom/ac-dom-nodes/remove": 15,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 486
    }],
    25: [function (c, d, b) {
        var g = c("./ac-clock/Clock"), f = c("./ac-clock/ThrottledClock"), a = c("./ac-clock/sharedClockInstance");
        a.Clock = g;
        a.ThrottledClock = f;
        d.exports = a
    }, {"./ac-clock/Clock": 26, "./ac-clock/ThrottledClock": 27, "./ac-clock/sharedClockInstance": 28}],
    26: [function (c, d, b) {
        c("@marcom/ac-polyfills/Function/prototype.bind");
        c("@marcom/ac-polyfills/requestAnimationFrame");
        var g;
        var f = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var a = new Date().getTime();

        function h() {
            f.call(this);
            this.lastFrameTime = null;
            this._animationFrame = null;
            this._active = false;
            this._startTime = null;
            this._boundOnAnimationFrame = this._onAnimationFrame.bind(this);
            this._getTime = Date.now || function () {
                return new Date().getTime()
            }
        }

        g = h.prototype = new f(null);
        g.start = function () {
            if (this._active) {
                return
            }
            this._tick()
        };
        g.stop = function () {
            if (this._active) {
                window.cancelAnimationFrame(this._animationFrame)
            }
            this._animationFrame = null;
            this.lastFrameTime = null;
            this._active = false
        };
        g.destroy = function () {
            this.stop();
            this.off();
            var j;
            for (j in this) {
                if (this.hasOwnProperty(j)) {
                    this[j] = null
                }
            }
        };
        g.isRunning = function () {
            return this._active
        };
        g._tick = function () {
            if (!this._active) {
                this._active = true
            }
            this._animationFrame = window.requestAnimationFrame(this._boundOnAnimationFrame)
        };
        g._onAnimationFrame = function (k) {
            if (this.lastFrameTime === null) {
                this.lastFrameTime = k
            }
            var l = k - this.lastFrameTime;
            var j = 0;
            if (l >= 1000) {
                l = 0
            }
            if (l !== 0) {
                j = 1000 / l
            }
            if (this._firstFrame === true) {
                l = 0;
                this._firstFrame = false
            }
            if (j === 0) {
                this._firstFrame = true
            } else {
                var i = {time: k, delta: l, fps: j, naturalFps: j, timeNow: this._getTime()};
                this.trigger("update", i);
                this.trigger("draw", i)
            }
            this._animationFrame = null;
            this.lastFrameTime = k;
            if (this._active !== false) {
                this._tick()
            } else {
                this.lastFrameTime = null
            }
        };
        d.exports = h
    }, {
        "@marcom/ac-event-emitter-micro": 74,
        "@marcom/ac-polyfills/Function/prototype.bind": 492,
        "@marcom/ac-polyfills/requestAnimationFrame": 500
    }],
    27: [function (c, d, b) {
        c("@marcom/ac-polyfills/requestAnimationFrame");
        var g;
        var a = c("./sharedClockInstance"), f = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;

        function h(j, i) {
            if (j === null) {
                return
            }
            f.call(this);
            i = i || {};
            this._fps = j || null;
            this._clock = i.clock || a;
            this._lastThrottledTime = null;
            this._clockEvent = null;
            this._boundOnClockDraw = this._onClockDraw.bind(this);
            this._boundOnClockUpdate = this._onClockUpdate.bind(this);
            this._clock.on("update", this._boundOnClockUpdate)
        }

        g = h.prototype = new f(null);
        g.setFps = function (i) {
            this._fps = i;
            return this
        };
        g.getFps = function () {
            return this._fps
        };
        g.start = function () {
            this._clock.start();
            return this
        };
        g.stop = function () {
            this._clock.stop();
            return this
        };
        g.isRunning = function () {
            return this._clock.isRunning()
        };
        g.destroy = function () {
            this._clock.off("update", this._boundOnClockUpdate);
            this._clock.destroy.call(this)
        };
        g._onClockUpdate = function (i) {
            if (this._lastThrottledTime === null) {
                this._lastThrottledTime = this._clock.lastFrameTime
            }
            var j = i.time - this._lastThrottledTime;
            if (!this._fps) {
                throw new TypeError("FPS is not defined.")
            }
            if (Math.ceil(1000 / j) >= this._fps + 2) {
                return
            }
            this._clockEvent = i;
            this._clockEvent.delta = j;
            this._clockEvent.fps = 1000 / j;
            this._lastThrottledTime = this._clockEvent.time;
            this._clock.once("draw", this._boundOnClockDraw);
            this.trigger("update", this._clockEvent)
        };
        g._onClockDraw = function () {
            this.trigger("draw", this._clockEvent)
        };
        d.exports = h
    }, {
        "./sharedClockInstance": 28,
        "@marcom/ac-event-emitter-micro": 74,
        "@marcom/ac-polyfills/requestAnimationFrame": 500
    }],
    28: [function (b, c, a) {
        var d = b("./Clock");
        c.exports = new d()
    }, {"./Clock": 26}],
    29: [function (b, c, a) {
        c.exports = {Clip: b("./ac-clip/Clip")}
    }, {"./ac-clip/Clip": 30}],
    30: [function (c, b, d) {
        c("@marcom/ac-polyfills/Array/isArray");
        var g = c("@marcom/ac-object/create");
        var l = c("@marcom/ac-easing").createPredefined;
        var a = c("@marcom/ac-clock");
        var j = c("@marcom/ac-easing").Ease;
        var k = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var i = "ease";

        function h(o, n, q, m) {
            m = m || {};
            this._options = m;
            this._isYoyo = m.yoyo;
            this._direction = 1;
            this._timeScale = 1;
            this._loop = m.loop || 0;
            this._loopCount = 0;
            this._target = o;
            this.duration(n);
            this._delay = (m.delay || 0) * 1000;
            this._remainingDelay = this._delay;
            this._progress = 0;
            this._clock = m.clock || a;
            this._playing = false;
            this._getTime = Date.now || function () {
                return new Date().getTime()
            };
            this._propsTo = q || {};
            this._propsFrom = m.propsFrom || {};
            this._onStart = m.onStart || null;
            this._onUpdate = m.onUpdate || null;
            this._onDraw = m.onDraw || null;
            this._onComplete = m.onComplete || null;
            var p = m.ease || i;
            this._ease = typeof p === "function" ? new j(p) : l(p);
            this._start = this._start.bind(this);
            this._update = this._update.bind(this);
            this._draw = this._draw.bind(this);
            this._isPrepared = false;
            h._add(this);
            k.call(this)
        }

        var f = h.prototype = g(k.prototype);
        h.COMPLETE = "complete";
        h.PAUSE = "pause";
        h.PLAY = "play";
        f.play = function () {
            if (!this._playing) {
                this._playing = true;
                if (this._delay === 0 || this._remainingDelay === 0) {
                    this._start()
                } else {
                    if (!this._isPrepared) {
                        this._setDiff();
                        this._updateProps()
                    }
                    this._startTimeout = setTimeout(this._start, this._remainingDelay / this._timeScale);
                    this._delayStart = this._getTime()
                }
            }
            return this
        };
        f.pause = function () {
            if (this._playing) {
                if (this._startTimeout) {
                    this._remainingDelay = this._getTime() - this._delayStart;
                    clearTimeout(this._startTimeout)
                }
                this._stop();
                this.trigger(h.PAUSE, this)
            }
            return this
        };
        f.destroy = function () {
            this.pause();
            this._options = null;
            this._target = null;
            this._storeTarget = null;
            this._ease = null;
            this._clock = null;
            this._propsTo = null;
            this._propsFrom = null;
            this._storePropsTo = null;
            this._storePropsFrom = null;
            this._propsDiff = null;
            this._propsEase = null;
            this._onStart = null;
            this._onUpdate = null;
            this._onDraw = null;
            this._onComplete = null;
            h._remove(this);
            k.prototype.destroy.call(this);
            return this
        };
        f.reset = function () {
            if (!this._isPrepared) {
                return
            }
            this._stop();
            this._resetLoop(this._target, this._storeTarget);
            this._direction = 1;
            this._loop = this._options.loop || 0;
            this._loopCount = 0;
            this._propsFrom = this._storePropsFrom;
            this._propsTo = this._storePropsTo;
            this._progress = 0;
            this._setStartTime();
            if (this._onUpdate) {
                this._onUpdate.call(this, this)
            }
            if (this._onDraw) {
                this._onDraw.call(this, this)
            }
            return this
        };
        f.playing = function () {
            return this._playing
        };
        f.target = function () {
            return this._target
        };
        f.duration = function (m) {
            if (m !== undefined) {
                this._duration = m;
                this._durationMs = m * 1000 / this._timeScale;
                if (this._playing) {
                    this._setStartTime()
                }
            }
            return this._duration
        };
        f.timeScale = function (m) {
            if (m !== undefined) {
                this._timeScale = m;
                this.duration(this._duration)
            }
            return this._timeScale
        };
        f.currentTime = function (m) {
            if (m !== undefined) {
                return this.progress(m / this._duration) * this._duration
            }
            return this.progress() * this._duration
        };
        f.progress = function (m) {
            if (m !== undefined) {
                this._progress = Math.min(1, Math.max(0, m));
                this._setStartTime();
                if (!this._isPrepared) {
                    this._setDiff()
                }
                if (this._playing && m === 1) {
                    this._completeProps();
                    if (this._onUpdate) {
                        this._onUpdate.call(this, this)
                    }
                    if (this._onDraw) {
                        this._onDraw.call(this, this)
                    }
                    this._complete()
                } else {
                    this._updateProps();
                    if (this._onUpdate) {
                        this._onUpdate.call(this, this)
                    }
                    if (this._onDraw) {
                        this._onDraw.call(this, this)
                    }
                }
            }
            return this._progress
        };
        f._resetLoop = function (n, m) {
            var o;
            for (o in m) {
                if (m.hasOwnProperty(o)) {
                    if (m[o] !== null) {
                        if (_typeof(m[o]) === "object") {
                            this._resetLoop(n[o], m[o])
                        } else {
                            n[o] = m[o]
                        }
                    }
                }
            }
        };
        f._cloneObjects = function () {
            var o = {};
            var n = {};
            var m = {};
            this._cloneObjectsLoop(this._target, this._propsTo, this._propsFrom, o, n, m);
            return {target: o, propsTo: n, propsFrom: m}
        };
        f._cloneObjectsLoop = function (p, t, s, r, n, m) {
            var o;
            var q;
            for (q in s) {
                if (s.hasOwnProperty(q) && t[q] === undefined && p[q] !== undefined) {
                    r[q] = p[q];
                    n[q] = p[q];
                    m[q] = s[q]
                }
            }
            for (q in t) {
                if (p.hasOwnProperty(q)) {
                    o = _typeof(p[q]);
                    if (p[q] !== null && o === "object") {
                        if (Array.isArray(p[q])) {
                            r[q] = [];
                            n[q] = [];
                            m[q] = []
                        } else {
                            r[q] = {};
                            n[q] = {};
                            m[q] = {}
                        }
                        this._cloneObjectsLoop(p[q], t[q] || {}, s[q] || {}, r[q], n[q], m[q])
                    } else {
                        if (t[q] !== null && o === "number") {
                            r[q] = p[q];
                            n[q] = t[q];
                            if (s && s[q] !== undefined) {
                                m[q] = s[q]
                            }
                        }
                    }
                }
            }
        };
        f._prepareProperties = function () {
            if (!this._isPrepared) {
                var m = this._cloneObjects();
                this._storeTarget = m.target;
                this._propsTo = m.propsTo;
                this._storePropsTo = this._propsTo;
                this._propsFrom = m.propsFrom;
                this._storePropsFrom = this._propsFrom;
                this._isPrepared = true
            }
        };
        f._setStartTime = function () {
            this._startTime = this._getTime() - this.progress() * this._durationMs
        };
        f._setDiff = function () {
            if (!this._isPrepared) {
                this._prepareProperties()
            }
            this._propsDiff = {};
            this._setDiffLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff)
        };
        f._setDiffLoop = function (r, q, o, n) {
            var m;
            var p;
            for (p in r) {
                if (r.hasOwnProperty(p)) {
                    m = _typeof(r[p]);
                    if (r[p] !== null && m === "object") {
                        q[p] = q[p] || {};
                        n[p] = n[p] || {};
                        this._setDiffLoop(r[p], q[p], o[p], n[p])
                    } else {
                        if (m === "number" && o[p] !== undefined) {
                            if (q[p] !== undefined) {
                                o[p] = q[p]
                            } else {
                                q[p] = o[p]
                            }
                            n[p] = r[p] - o[p]
                        } else {
                            r[p] = null;
                            q[p] = null
                        }
                    }
                }
            }
        };
        f._start = function () {
            this._startTimeout = null;
            this._remainingDelay = 0;
            this._setStartTime();
            this._clock.on("update", this._update);
            this._clock.on("draw", this._draw);
            if (!this._clock.isRunning()) {
                this._clock.start()
            }
            this._setDiff();
            this._playing = true;
            this._running = true;
            if (this._onStart) {
                this._onStart.call(this, this)
            }
            this.trigger(h.PLAY, this)
        };
        f._stop = function () {
            this._playing = false;
            this._running = false;
            this._clock.off("update", this._update);
            this._clock.off("draw", this._draw)
        };
        f._updateProps = function () {
            var m;
            if (this._direction === 1) {
                m = this._ease.getValue(this._progress)
            } else {
                m = 1 - this._ease.getValue(1 - this._progress)
            }
            this._updatePropsLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff, m)
        };
        f._updatePropsLoop = function (r, q, o, n, m) {
            var p;
            for (p in r) {
                if (r.hasOwnProperty(p) && r[p] !== null) {
                    if (typeof r[p] !== "number") {
                        this._updatePropsLoop(r[p], q[p], o[p], n[p], m)
                    } else {
                        o[p] = q[p] + n[p] * m
                    }
                }
            }
        };
        f._completeProps = function () {
            this._completePropsLoop(this._propsTo, this._target)
        };
        f._completePropsLoop = function (o, m) {
            var n;
            for (n in o) {
                if (o.hasOwnProperty(n) && o[n] !== null) {
                    if (typeof o[n] !== "number") {
                        this._completePropsLoop(o[n], m[n])
                    } else {
                        m[n] = o[n]
                    }
                }
            }
        };
        f._complete = function () {
            if (this._isYoyo && (this._loop > 0 && this._loopCount <= this._loop || this._loop === 0 && this._loopCount === 0)) {
                this._propsFrom = this._direction === 1 ? this._storePropsTo : this._storePropsFrom;
                this._propsTo = this._direction === 1 ? this._storePropsFrom : this._storePropsTo;
                this._direction *= -1;
                if (this._direction === -1) {
                    ++this._loopCount
                }
                this.progress(0);
                this._start()
            } else {
                if (this._loopCount < this._loop) {
                    ++this._loopCount;
                    this.progress(0);
                    this._start()
                } else {
                    this.trigger(h.COMPLETE, this);
                    if (this._onComplete) {
                        this._onComplete.call(this, this)
                    }
                    if (this._options && this._options.destroyOnComplete) {
                        this.destroy()
                    }
                }
            }
        };
        f._update = function (m) {
            if (this._running) {
                this._progress = (m.timeNow - this._startTime) / this._durationMs;
                if (this._progress >= 1) {
                    this._progress = 1;
                    this._running = false;
                    this._completeProps()
                } else {
                    this._updateProps()
                }
                if (this._onUpdate) {
                    this._onUpdate.call(this, this)
                }
            }
        };
        f._draw = function (m) {
            if (this._onDraw) {
                this._onDraw.call(this, this)
            }
            if (!this._running) {
                this._stop();
                if (this._progress === 1) {
                    this._complete()
                }
            }
        };
        h._instantiate = function () {
            this._clips = [];
            return this
        };
        h._add = function (m) {
            this._clips.push(m)
        };
        h._remove = function (n) {
            var m = this._clips.indexOf(n);
            if (m > -1) {
                this._clips.splice(m, 1)
            }
        };
        h.getAll = function (o) {
            if (o !== undefined) {
                var m = [];
                var n = this._clips.length;
                while (n--) {
                    if (this._clips[n].target() === o) {
                        m.push(this._clips[n])
                    }
                }
                return m
            }
            return Array.prototype.slice.call(this._clips)
        };
        h.destroyAll = function (o) {
            var m = this.getAll(o);
            if (this._clips.length === m.length) {
                this._clips = []
            }
            var n = m.length;
            while (n--) {
                m[n].destroy()
            }
            return m
        };
        h.to = function (o, n, p, m) {
            m = m || {};
            if (m.destroyOnComplete === undefined) {
                m.destroyOnComplete = true
            }
            return new h(o, n, p, m).play()
        };
        h.from = function (p, o, m, n) {
            n = n || {};
            n.propsFrom = m;
            if (n.destroyOnComplete === undefined) {
                n.destroyOnComplete = true
            }
            return new h(p, o, n.propsTo, n).play()
        };
        b.exports = h._instantiate()
    }, {
        "@marcom/ac-clock": 25,
        "@marcom/ac-easing": 66,
        "@marcom/ac-event-emitter-micro": 74,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-polyfills/Array/isArray": 482
    }],
    31: [function (b, c, a) {
        var d = b("./ac-color/Color");
        d.decimalToHex = b("./ac-color/static/decimalToHex");
        d.hexToDecimal = b("./ac-color/static/hexToDecimal");
        d.hexToRgb = b("./ac-color/static/hexToRgb");
        d.isColor = b("./ac-color/static/isColor");
        d.isHex = b("./ac-color/static/isHex");
        d.isRgb = b("./ac-color/static/isRgb");
        d.isRgba = b("./ac-color/static/isRgba");
        d.mixColors = b("./ac-color/static/mixColors");
        d.rgbaToArray = b("./ac-color/static/rgbaToArray");
        d.rgbToArray = b("./ac-color/static/rgbToArray");
        d.rgbToDecimal = b("./ac-color/static/rgbToDecimal");
        d.rgbToHex = b("./ac-color/static/rgbToHex");
        d.rgbToHsl = b("./ac-color/static/rgbToHsl");
        d.rgbToHsv = b("./ac-color/static/rgbToHsv");
        d.rgbaToObject = b("./ac-color/static/rgbaToObject");
        d.rgbToObject = b("./ac-color/static/rgbToObject");
        d.shortToLongHex = b("./ac-color/static/shortToLongHex");
        c.exports = {Color: d}
    }, {
        "./ac-color/Color": 32,
        "./ac-color/static/decimalToHex": 34,
        "./ac-color/static/hexToDecimal": 35,
        "./ac-color/static/hexToRgb": 36,
        "./ac-color/static/isColor": 37,
        "./ac-color/static/isHex": 38,
        "./ac-color/static/isRgb": 39,
        "./ac-color/static/isRgba": 40,
        "./ac-color/static/mixColors": 41,
        "./ac-color/static/rgbToArray": 42,
        "./ac-color/static/rgbToDecimal": 43,
        "./ac-color/static/rgbToHex": 44,
        "./ac-color/static/rgbToHsl": 45,
        "./ac-color/static/rgbToHsv": 46,
        "./ac-color/static/rgbToObject": 47,
        "./ac-color/static/rgbaToArray": 48,
        "./ac-color/static/rgbaToObject": 49,
        "./ac-color/static/shortToLongHex": 50
    }],
    32: [function (d, a, q) {
        var h = d("./helpers/cssColorNames");
        var m = d("./static/hexToRgb");
        var l = d("./static/isColor");
        var f = d("./static/isHex");
        var b = d("./static/isRgba");
        var p = d("./static/mixColors");
        var k = d("./static/rgbaToArray");
        var n = d("./static/rgbToArray");
        var s = d("./static/rgbToDecimal");
        var i = d("./static/rgbToHex");
        var c = d("./static/rgbaToObject");
        var j = d("./static/rgbToObject");
        var o = d("./static/shortToLongHex");

        function r(t) {
            if (!l(t) && !h.nameToRgbObject[t]) {
                throw new Error(t + " is not a supported color.")
            }
            this._setColor(t)
        }

        var g = r.prototype;
        g._setColor = function (t) {
            this._color = {};
            if (f(t)) {
                this._color.hex = o(t);
                this._color.rgb = {color: m(t)}
            } else {
                if (b(t)) {
                    this._color.rgba = {color: t};
                    var v = this.rgbaObject();
                    this._color.rgb = {color: "rgb(" + v.r + ", " + v.g + ", " + v.b + ")"}
                } else {
                    if (h.nameToRgbObject[t]) {
                        var u = h.nameToRgbObject[t];
                        this._color.rgb = {object: u, color: "rgb(" + u.r + ", " + u.g + ", " + u.b + ")"}
                    } else {
                        this._color.rgb = {color: t}
                    }
                }
            }
        };
        g.rgb = function () {
            return this._color.rgb.color
        };
        g.rgba = function () {
            if (this._color.rgba === undefined) {
                var t = this.rgbObject();
                this._color.rgba = {color: "rgba(" + t.r + ", " + t.g + ", " + t.b + ", 1)"}
            }
            return this._color.rgba.color
        };
        g.hex = function () {
            if (this._color.hex === undefined) {
                this._color.hex = i.apply(this, this.rgbArray())
            }
            return this._color.hex
        };
        g.decimal = function () {
            if (this._color.decimal === undefined) {
                this._color.decimal = s(this.rgb())
            }
            return this._color.decimal
        };
        g.cssName = function () {
            return h.rgbToName[this.rgb()] || null
        };
        g.rgbArray = function () {
            if (this._color.rgb.array === undefined) {
                this._color.rgb.array = n(this.rgb())
            }
            return this._color.rgb.array
        };
        g.rgbaArray = function () {
            if (this._color.rgba === undefined) {
                this.rgba()
            }
            if (this._color.rgba.array === undefined) {
                this._color.rgba.array = k(this.rgba())
            }
            return this._color.rgba.array
        };
        g.rgbObject = function () {
            if (this._color.rgb.object === undefined) {
                this._color.rgb.object = j(this.rgb())
            }
            return this._color.rgb.object
        };
        g.rgbaObject = function () {
            if (this._color.rgba === undefined) {
                this.rgba()
            }
            if (this._color.rgba.object === undefined) {
                this._color.rgba.object = c(this.rgba())
            }
            return this._color.rgba.object
        };
        g.getRed = function () {
            return this.rgbObject().r
        };
        g.getGreen = function () {
            return this.rgbObject().g
        };
        g.getBlue = function () {
            return this.rgbObject().b
        };
        g.getAlpha = function () {
            if (this._color.rgba === undefined) {
                return 1
            }
            return this.rgbaObject().a
        };
        g.setRed = function (t) {
            if (t !== this.getRed()) {
                this._setColor("rgba(" + t + ", " + this.getGreen() + ", " + this.getBlue() + ", " + this.getAlpha() + ")")
            }
            return this.rgbObject().r
        };
        g.setGreen = function (t) {
            if (t !== this.getGreen()) {
                this._setColor("rgba(" + this.getRed() + ", " + t + ", " + this.getBlue() + ", " + this.getAlpha() + ")")
            }
            return this.rgbObject().g
        };
        g.setBlue = function (t) {
            if (t !== this.getBlue()) {
                this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + t + ", " + this.getAlpha() + ")")
            }
            return this.rgbObject().b
        };
        g.setAlpha = function (t) {
            if (t !== this.getAlpha()) {
                this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + this.getBlue() + ", " + t + ")")
            }
            return this.rgbaObject().a
        };
        g.mix = function (t, u) {
            var v = j(p(this.rgb(), t, u));
            this._setColor("rgba(" + v.r + ", " + v.g + ", " + v.b + ", " + this.getAlpha() + ")");
            return this.rgb()
        };
        g.clone = function () {
            return new r(this.rgb())
        };
        a.exports = r
    }, {
        "./helpers/cssColorNames": 33,
        "./static/hexToRgb": 36,
        "./static/isColor": 37,
        "./static/isHex": 38,
        "./static/isRgba": 40,
        "./static/mixColors": 41,
        "./static/rgbToArray": 42,
        "./static/rgbToDecimal": 43,
        "./static/rgbToHex": 44,
        "./static/rgbToObject": 47,
        "./static/rgbaToArray": 48,
        "./static/rgbaToObject": 49,
        "./static/shortToLongHex": 50
    }],
    33: [function (b, c, a) {
        var d = {
            "rgb(240, 248, 255)": "aliceblue",
            "rgb(250, 235, 215)": "antiquewhite",
            "rgb(0, 0, 0)": "black",
            "rgb(0, 0, 255)": "blue",
            "rgb(0, 255, 255)": "cyan",
            "rgb(0, 0, 139)": "darkblue",
            "rgb(0, 139, 139)": "darkcyan",
            "rgb(0, 100, 0)": "darkgreen",
            "rgb(0, 206, 209)": "darkturquoise",
            "rgb(0, 191, 255)": "deepskyblue",
            "rgb(0, 128, 0)": "green",
            "rgb(0, 255, 0)": "lime",
            "rgb(0, 0, 205)": "mediumblue",
            "rgb(0, 250, 154)": "mediumspringgreen",
            "rgb(0, 0, 128)": "navy",
            "rgb(0, 255, 127)": "springgreen",
            "rgb(0, 128, 128)": "teal",
            "rgb(25, 25, 112)": "midnightblue",
            "rgb(30, 144, 255)": "dodgerblue",
            "rgb(32, 178, 170)": "lightseagreen",
            "rgb(34, 139, 34)": "forestgreen",
            "rgb(46, 139, 87)": "seagreen",
            "rgb(47, 79, 79)": "darkslategray",
            "rgb(50, 205, 50)": "limegreen",
            "rgb(60, 179, 113)": "mediumseagreen",
            "rgb(64, 224, 208)": "turquoise",
            "rgb(65, 105, 225)": "royalblue",
            "rgb(70, 130, 180)": "steelblue",
            "rgb(72, 61, 139)": "darkslateblue",
            "rgb(72, 209, 204)": "mediumturquoise",
            "rgb(75, 0, 130)": "indigo",
            "rgb(85, 107, 47)": "darkolivegreen",
            "rgb(95, 158, 160)": "cadetblue",
            "rgb(100, 149, 237)": "cornflowerblue",
            "rgb(102, 205, 170)": "mediumaquamarine",
            "rgb(105, 105, 105)": "dimgray",
            "rgb(106, 90, 205)": "slateblue",
            "rgb(107, 142, 35)": "olivedrab",
            "rgb(112, 128, 144)": "slategray",
            "rgb(119, 136, 153)": "lightslategray",
            "rgb(123, 104, 238)": "mediumslateblue",
            "rgb(124, 252, 0)": "lawngreen",
            "rgb(127, 255, 212)": "aquamarine",
            "rgb(127, 255, 0)": "chartreuse",
            "rgb(128, 128, 128)": "gray",
            "rgb(128, 0, 0)": "maroon",
            "rgb(128, 128, 0)": "olive",
            "rgb(128, 0, 128)": "purple",
            "rgb(135, 206, 250)": "lightskyblue",
            "rgb(135, 206, 235)": "skyblue",
            "rgb(138, 43, 226)": "blueviolet",
            "rgb(139, 0, 139)": "darkmagenta",
            "rgb(139, 0, 0)": "darkred",
            "rgb(139, 69, 19)": "saddlebrown",
            "rgb(143, 188, 143)": "darkseagreen",
            "rgb(144, 238, 144)": "lightgreen",
            "rgb(147, 112, 219)": "mediumpurple",
            "rgb(148, 0, 211)": "darkviolet",
            "rgb(152, 251, 152)": "palegreen",
            "rgb(153, 50, 204)": "darkorchid",
            "rgb(154, 205, 50)": "yellowgreen",
            "rgb(160, 82, 45)": "sienna",
            "rgb(165, 42, 42)": "brown",
            "rgb(169, 169, 169)": "darkgray",
            "rgb(173, 255, 47)": "greenyellow",
            "rgb(173, 216, 230)": "lightblue",
            "rgb(175, 238, 238)": "paleturquoise",
            "rgb(176, 196, 222)": "lightsteelblue",
            "rgb(176, 224, 230)": "powderblue",
            "rgb(178, 34, 34)": "firebrick",
            "rgb(184, 134, 11)": "darkgoldenrod",
            "rgb(186, 85, 211)": "mediumorchid",
            "rgb(188, 143, 143)": "rosybrown",
            "rgb(189, 183, 107)": "darkkhaki",
            "rgb(192, 192, 192)": "silver",
            "rgb(199, 21, 133)": "mediumvioletred",
            "rgb(205, 92, 92)": "indianred",
            "rgb(205, 133, 63)": "peru",
            "rgb(210, 105, 30)": "chocolate",
            "rgb(210, 180, 140)": "tan",
            "rgb(211, 211, 211)": "lightgray",
            "rgb(216, 191, 216)": "thistle",
            "rgb(218, 165, 32)": "goldenrod",
            "rgb(218, 112, 214)": "orchid",
            "rgb(219, 112, 147)": "palevioletred",
            "rgb(220, 20, 60)": "crimson",
            "rgb(220, 220, 220)": "gainsboro",
            "rgb(221, 160, 221)": "plum",
            "rgb(222, 184, 135)": "burlywood",
            "rgb(224, 255, 255)": "lightcyan",
            "rgb(230, 230, 250)": "lavender",
            "rgb(233, 150, 122)": "darksalmon",
            "rgb(238, 232, 170)": "palegoldenrod",
            "rgb(238, 130, 238)": "violet",
            "rgb(240, 255, 255)": "azure",
            "rgb(240, 255, 240)": "honeydew",
            "rgb(240, 230, 140)": "khaki",
            "rgb(240, 128, 128)": "lightcoral",
            "rgb(244, 164, 96)": "sandybrown",
            "rgb(245, 245, 220)": "beige",
            "rgb(245, 255, 250)": "mintcream",
            "rgb(245, 222, 179)": "wheat",
            "rgb(245, 245, 245)": "whitesmoke",
            "rgb(248, 248, 255)": "ghostwhite",
            "rgb(250, 250, 210)": "lightgoldenrodyellow",
            "rgb(250, 240, 230)": "linen",
            "rgb(250, 128, 114)": "salmon",
            "rgb(253, 245, 230)": "oldlace",
            "rgb(255, 228, 196)": "bisque",
            "rgb(255, 235, 205)": "blanchedalmond",
            "rgb(255, 127, 80)": "coral",
            "rgb(255, 248, 220)": "cornsilk",
            "rgb(255, 140, 0)": "darkorange",
            "rgb(255, 20, 147)": "deeppink",
            "rgb(255, 250, 240)": "floralwhite",
            "rgb(255, 215, 0)": "gold",
            "rgb(255, 105, 180)": "hotpink",
            "rgb(255, 255, 240)": "ivory",
            "rgb(255, 240, 245)": "lavenderblush",
            "rgb(255, 250, 205)": "lemonchiffon",
            "rgb(255, 182, 193)": "lightpink",
            "rgb(255, 160, 122)": "lightsalmon",
            "rgb(255, 255, 224)": "lightyellow",
            "rgb(255, 0, 255)": "magenta",
            "rgb(255, 228, 225)": "mistyrose",
            "rgb(255, 228, 181)": "moccasin",
            "rgb(255, 222, 173)": "navajowhite",
            "rgb(255, 165, 0)": "orange",
            "rgb(255, 69, 0)": "orangered",
            "rgb(255, 239, 213)": "papayawhip",
            "rgb(255, 218, 185)": "peachpuff",
            "rgb(255, 192, 203)": "pink",
            "rgb(255, 0, 0)": "red",
            "rgb(255, 245, 238)": "seashell",
            "rgb(255, 250, 250)": "snow",
            "rgb(255, 99, 71)": "tomato",
            "rgb(255, 255, 255)": "white",
            "rgb(255, 255, 0)": "yellow",
            "rgb(102, 51, 153)": "rebeccapurple"
        };
        var f = {
            aqua: {r: 0, g: 255, b: 255},
            aliceblue: {r: 240, g: 248, b: 255},
            antiquewhite: {r: 250, g: 235, b: 215},
            black: {r: 0, g: 0, b: 0},
            blue: {r: 0, g: 0, b: 255},
            cyan: {r: 0, g: 255, b: 255},
            darkblue: {r: 0, g: 0, b: 139},
            darkcyan: {r: 0, g: 139, b: 139},
            darkgreen: {r: 0, g: 100, b: 0},
            darkturquoise: {r: 0, g: 206, b: 209},
            deepskyblue: {r: 0, g: 191, b: 255},
            green: {r: 0, g: 128, b: 0},
            lime: {r: 0, g: 255, b: 0},
            mediumblue: {r: 0, g: 0, b: 205},
            mediumspringgreen: {r: 0, g: 250, b: 154},
            navy: {r: 0, g: 0, b: 128},
            springgreen: {r: 0, g: 255, b: 127},
            teal: {r: 0, g: 128, b: 128},
            midnightblue: {r: 25, g: 25, b: 112},
            dodgerblue: {r: 30, g: 144, b: 255},
            lightseagreen: {r: 32, g: 178, b: 170},
            forestgreen: {r: 34, g: 139, b: 34},
            seagreen: {r: 46, g: 139, b: 87},
            darkslategray: {r: 47, g: 79, b: 79},
            darkslategrey: {r: 47, g: 79, b: 79},
            limegreen: {r: 50, g: 205, b: 50},
            mediumseagreen: {r: 60, g: 179, b: 113},
            turquoise: {r: 64, g: 224, b: 208},
            royalblue: {r: 65, g: 105, b: 225},
            steelblue: {r: 70, g: 130, b: 180},
            darkslateblue: {r: 72, g: 61, b: 139},
            mediumturquoise: {r: 72, g: 209, b: 204},
            indigo: {r: 75, g: 0, b: 130},
            darkolivegreen: {r: 85, g: 107, b: 47},
            cadetblue: {r: 95, g: 158, b: 160},
            cornflowerblue: {r: 100, g: 149, b: 237},
            mediumaquamarine: {r: 102, g: 205, b: 170},
            dimgray: {r: 105, g: 105, b: 105},
            dimgrey: {r: 105, g: 105, b: 105},
            slateblue: {r: 106, g: 90, b: 205},
            olivedrab: {r: 107, g: 142, b: 35},
            slategray: {r: 112, g: 128, b: 144},
            slategrey: {r: 112, g: 128, b: 144},
            lightslategray: {r: 119, g: 136, b: 153},
            lightslategrey: {r: 119, g: 136, b: 153},
            mediumslateblue: {r: 123, g: 104, b: 238},
            lawngreen: {r: 124, g: 252, b: 0},
            aquamarine: {r: 127, g: 255, b: 212},
            chartreuse: {r: 127, g: 255, b: 0},
            gray: {r: 128, g: 128, b: 128},
            grey: {r: 128, g: 128, b: 128},
            maroon: {r: 128, g: 0, b: 0},
            olive: {r: 128, g: 128, b: 0},
            purple: {r: 128, g: 0, b: 128},
            lightskyblue: {r: 135, g: 206, b: 250},
            skyblue: {r: 135, g: 206, b: 235},
            blueviolet: {r: 138, g: 43, b: 226},
            darkmagenta: {r: 139, g: 0, b: 139},
            darkred: {r: 139, g: 0, b: 0},
            saddlebrown: {r: 139, g: 69, b: 19},
            darkseagreen: {r: 143, g: 188, b: 143},
            lightgreen: {r: 144, g: 238, b: 144},
            mediumpurple: {r: 147, g: 112, b: 219},
            darkviolet: {r: 148, g: 0, b: 211},
            palegreen: {r: 152, g: 251, b: 152},
            darkorchid: {r: 153, g: 50, b: 204},
            yellowgreen: {r: 154, g: 205, b: 50},
            sienna: {r: 160, g: 82, b: 45},
            brown: {r: 165, g: 42, b: 42},
            darkgray: {r: 169, g: 169, b: 169},
            darkgrey: {r: 169, g: 169, b: 169},
            greenyellow: {r: 173, g: 255, b: 47},
            lightblue: {r: 173, g: 216, b: 230},
            paleturquoise: {r: 175, g: 238, b: 238},
            lightsteelblue: {r: 176, g: 196, b: 222},
            powderblue: {r: 176, g: 224, b: 230},
            firebrick: {r: 178, g: 34, b: 34},
            darkgoldenrod: {r: 184, g: 134, b: 11},
            mediumorchid: {r: 186, g: 85, b: 211},
            rosybrown: {r: 188, g: 143, b: 143},
            darkkhaki: {r: 189, g: 183, b: 107},
            silver: {r: 192, g: 192, b: 192},
            mediumvioletred: {r: 199, g: 21, b: 133},
            indianred: {r: 205, g: 92, b: 92},
            peru: {r: 205, g: 133, b: 63},
            chocolate: {r: 210, g: 105, b: 30},
            tan: {r: 210, g: 180, b: 140},
            lightgray: {r: 211, g: 211, b: 211},
            lightgrey: {r: 211, g: 211, b: 211},
            thistle: {r: 216, g: 191, b: 216},
            goldenrod: {r: 218, g: 165, b: 32},
            orchid: {r: 218, g: 112, b: 214},
            palevioletred: {r: 219, g: 112, b: 147},
            crimson: {r: 220, g: 20, b: 60},
            gainsboro: {r: 220, g: 220, b: 220},
            plum: {r: 221, g: 160, b: 221},
            burlywood: {r: 222, g: 184, b: 135},
            lightcyan: {r: 224, g: 255, b: 255},
            lavender: {r: 230, g: 230, b: 250},
            darksalmon: {r: 233, g: 150, b: 122},
            palegoldenrod: {r: 238, g: 232, b: 170},
            violet: {r: 238, g: 130, b: 238},
            azure: {r: 240, g: 255, b: 255},
            honeydew: {r: 240, g: 255, b: 240},
            khaki: {r: 240, g: 230, b: 140},
            lightcoral: {r: 240, g: 128, b: 128},
            sandybrown: {r: 244, g: 164, b: 96},
            beige: {r: 245, g: 245, b: 220},
            mintcream: {r: 245, g: 255, b: 250},
            wheat: {r: 245, g: 222, b: 179},
            whitesmoke: {r: 245, g: 245, b: 245},
            ghostwhite: {r: 248, g: 248, b: 255},
            lightgoldenrodyellow: {r: 250, g: 250, b: 210},
            linen: {r: 250, g: 240, b: 230},
            salmon: {r: 250, g: 128, b: 114},
            oldlace: {r: 253, g: 245, b: 230},
            bisque: {r: 255, g: 228, b: 196},
            blanchedalmond: {r: 255, g: 235, b: 205},
            coral: {r: 255, g: 127, b: 80},
            cornsilk: {r: 255, g: 248, b: 220},
            darkorange: {r: 255, g: 140, b: 0},
            deeppink: {r: 255, g: 20, b: 147},
            floralwhite: {r: 255, g: 250, b: 240},
            fuchsia: {r: 255, g: 0, b: 255},
            gold: {r: 255, g: 215, b: 0},
            hotpink: {r: 255, g: 105, b: 180},
            ivory: {r: 255, g: 255, b: 240},
            lavenderblush: {r: 255, g: 240, b: 245},
            lemonchiffon: {r: 255, g: 250, b: 205},
            lightpink: {r: 255, g: 182, b: 193},
            lightsalmon: {r: 255, g: 160, b: 122},
            lightyellow: {r: 255, g: 255, b: 224},
            magenta: {r: 255, g: 0, b: 255},
            mistyrose: {r: 255, g: 228, b: 225},
            moccasin: {r: 255, g: 228, b: 181},
            navajowhite: {r: 255, g: 222, b: 173},
            orange: {r: 255, g: 165, b: 0},
            orangered: {r: 255, g: 69, b: 0},
            papayawhip: {r: 255, g: 239, b: 213},
            peachpuff: {r: 255, g: 218, b: 185},
            pink: {r: 255, g: 192, b: 203},
            red: {r: 255, g: 0, b: 0},
            seashell: {r: 255, g: 245, b: 238},
            snow: {r: 255, g: 250, b: 250},
            tomato: {r: 255, g: 99, b: 71},
            white: {r: 255, g: 255, b: 255},
            yellow: {r: 255, g: 255, b: 0},
            rebeccapurple: {r: 102, g: 51, b: 153}
        };
        c.exports = {rgbToName: d, nameToRgbObject: f}
    }, {}],
    34: [function (c, d, b) {
        d.exports = function a(f) {
            return "#" + f.toString(16)
        }
    }, {}],
    35: [function (c, d, a) {
        d.exports = function b(f) {
            return parseInt(f.substr(1), 16)
        }
    }, {}],
    36: [function (d, f, c) {
        var a = d("./shortToLongHex");
        f.exports = function b(h) {
            h = a(h);
            var g = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
            return g ? "rgb(" + parseInt(g[1], 16) + ", " + parseInt(g[2], 16) + ", " + parseInt(g[3], 16) + ")" : null
        }
    }, {"./shortToLongHex": 50}],
    37: [function (c, f, b) {
        var h = c("./isRgb");
        var g = c("./isRgba");
        var a = c("./isHex");
        f.exports = function d(i) {
            return a(i) || h(i) || g(i)
        }
    }, {"./isHex": 38, "./isRgb": 39, "./isRgba": 40}],
    38: [function (c, d, b) {
        d.exports = function a(g) {
            var f = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
            return f.test(g)
        }
    }, {}],
    39: [function (b, c, a) {
        c.exports = function d(g) {
            var f = /^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
            return f.exec(g) !== null
        }
    }, {}],
    40: [function (b, c, a) {
        c.exports = function d(g) {
            var f = /^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
            return f.exec(g) !== null
        }
    }, {}],
    41: [function (d, f, c) {
        var b = d("./isHex");
        var a = d("./hexToRgb");
        var h = d("./rgbToObject");
        f.exports = function g(n, m, l) {
            n = b(n) ? a(n) : n;
            m = b(m) ? a(m) : m;
            n = h(n);
            m = h(m);
            var k = n.r + (m.r - n.r) * l;
            var j = n.g + (m.g - n.g) * l;
            var i = n.b + (m.b - n.b) * l;
            return "rgb(" + Math.round(k) + ", " + Math.round(j) + ", " + Math.round(i) + ")"
        }
    }, {"./hexToRgb": 36, "./isHex": 38, "./rgbToObject": 47}],
    42: [function (b, c, a) {
        var d = b("./rgbToObject");
        c.exports = function f(g) {
            var h = d(g);
            return [h.r, h.g, h.b]
        }
    }, {"./rgbToObject": 47}],
    43: [function (d, f, b) {
        var c = d("./hexToDecimal");
        var h = d("./rgbToArray");
        var g = d("./rgbToHex");
        f.exports = function a(i) {
            var j = g.apply(this, h(i));
            return c(j)
        }
    }, {"./hexToDecimal": 35, "./rgbToArray": 42, "./rgbToHex": 44}],
    44: [function (b, c, a) {
        c.exports = function d(i, h, f) {
            return "#" + ((1 << 24) + (i << 16) + (h << 8) + f).toString(16).slice(1)
        }
    }, {}],
    45: [function (c, d, b) {
        d.exports = function a(f, m, o) {
            if (arguments.length !== 3) {
                return false
            }
            f /= 255;
            m /= 255;
            o /= 255;
            var p = Math.max(f, m, o);
            var j = Math.min(f, m, o);
            var n = p + j;
            var q = p - j;
            var k;
            var t;
            var i = n / 2;
            if (p === j) {
                k = t = 0
            } else {
                t = i > 0.5 ? q / (2 - p - j) : q / n;
                switch (p) {
                    case f:
                        k = (m - o) / q;
                        break;
                    case m:
                        k = 2 + (o - f) / q;
                        break;
                    case o:
                        k = 4 + (f - m) / q;
                        break
                }
                k *= 60;
                if (k < 0) {
                    k += 360
                }
            }
            return [k, Math.round(100 * t), Math.round(100 * i)]
        }
    }, {}],
    46: [function (c, d, a) {
        d.exports = function b(f, m, n) {
            if (arguments.length !== 3) {
                return false
            }
            var i = f / 255;
            var j = m / 255;
            var p = n / 255;
            var o = Math.max(i, j, p);
            var k = Math.min(i, j, p);
            var l;
            var u;
            var t = o;
            var q = o - k;
            u = o === 0 ? 0 : q / o;
            if (o === k) {
                l = 0
            } else {
                switch (o) {
                    case i:
                        l = (j - p) / q + (j < p ? 6 : 0);
                        break;
                    case j:
                        l = (p - i) / q + 2;
                        break;
                    case p:
                        l = (i - j) / q + 4;
                        break
                }
                l /= 6
            }
            return [Math.round(360 * l), Math.round(100 * u), Math.round(100 * t)]
        }
    }, {}],
    47: [function (b, c, a) {
        c.exports = function d(g) {
            var h = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
            var f = h.exec(g);
            return {r: Number(f[1]), g: Number(f[2]), b: Number(f[3])}
        }
    }, {}],
    48: [function (b, c, a) {
        var f = b("./rgbaToObject");
        c.exports = function d(g) {
            var h = f(g);
            return [h.r, h.g, h.b, h.a]
        }
    }, {"./rgbaToObject": 49}],
    49: [function (b, c, a) {
        c.exports = function d(g) {
            var h = /rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
            var f = h.exec(g);
            return {r: Number(f[1]), g: Number(f[2]), b: Number(f[3]), a: Number(f[4])}
        }
    }, {}],
    50: [function (c, d, b) {
        d.exports = function a(g) {
            var f = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            g = g.replace(f, function (i, k, j, h) {
                return "#" + k + k + j + j + h + h
            });
            return g
        }
    }, {}],
    51: [function (d, f, c) {
        var b = d("./utils/getBoundingClientRect");
        f.exports = function a(g, i) {
            var h;
            if (i) {
                h = b(g);
                return {width: h.width, height: h.height}
            }
            return {width: g.offsetWidth, height: g.offsetHeight}
        }
    }, {"./utils/getBoundingClientRect": 52}],
    52: [function (c, d, b) {
        d.exports = function a(f) {
            var g = f.getBoundingClientRect();
            return {
                top: g.top,
                right: g.right,
                bottom: g.bottom,
                left: g.left,
                width: g.width || g.right - g.left,
                height: g.height || g.bottom - g.top
            }
        }
    }, {}],
    53: [function (d, f, c) {
        var b = d("./shared/stylePropertyCache");
        var h = d("./getStyleProperty");
        var g = d("./getStyleValue");
        f.exports = function a(k, j) {
            var i;
            k = h(k);
            if (!k) {
                return false
            }
            i = b[k].css;
            if (typeof j !== "undefined") {
                j = g(k, j);
                if (j === false) {
                    return false
                }
                i += ":" + j + ";"
            }
            return i
        }
    }, {"./getStyleProperty": 54, "./getStyleValue": 55, "./shared/stylePropertyCache": 58}],
    54: [function (f, d, h) {
        var a = f("./shared/stylePropertyCache");
        var i = f("./shared/getStyleTestElement");
        var b = f("./utils/toCSS");
        var k = f("./utils/toDOM");
        var j = f("./shared/prefixHelper");
        var c = function c(o, l) {
            var m = b(o);
            var n = l === false ? false : b(l);
            a[o] = a[l] = a[m] = a[n] = {dom: l, css: n};
            return l
        };
        d.exports = function g(p) {
            var n;
            var l;
            var o;
            var m;
            p += "";
            if (p in a) {
                return a[p].dom
            }
            o = i();
            p = k(p);
            l = p.charAt(0).toUpperCase() + p.substring(1);
            if (p === "filter") {
                n = ["WebkitFilter", "filter"]
            } else {
                n = (p + " " + j.dom.join(l + " ") + l).split(" ")
            }
            for (m = 0; m < n.length; m++) {
                if (typeof o.style[n[m]] !== "undefined") {
                    if (m !== 0) {
                        j.reduce(m - 1)
                    }
                    return c(p, n[m])
                }
            }
            return c(p, false)
        }
    }, {
        "./shared/getStyleTestElement": 56,
        "./shared/prefixHelper": 57,
        "./shared/stylePropertyCache": 58,
        "./utils/toCSS": 61,
        "./utils/toDOM": 62
    }],
    55: [function (d, b, h) {
        var f = d("./getStyleProperty");
        var k = d("./shared/styleValueAvailable");
        var j = d("./shared/prefixHelper");
        var a = d("./shared/stylePropertyCache");
        var i = {};
        var l = /(\([^\)]+\))/gi;
        var g = /([^ ,;\(]+(\([^\)]+\))?)/gi;
        b.exports = function c(o, n) {
            var m;
            n += "";
            o = f(o);
            if (!o) {
                return false
            }
            if (k(o, n)) {
                return n
            }
            m = a[o].css;
            n = n.replace(g, function (q) {
                var p;
                var t;
                var s;
                var r;
                if (q[0] === "#" || !isNaN(q[0])) {
                    return q
                }
                t = q.replace(l, "");
                s = m + ":" + t;
                if (s in i) {
                    if (i[s] === false) {
                        return ""
                    }
                    return q.replace(t, i[s])
                }
                p = j.css.map(function (u) {
                    return u + q
                });
                p = [q].concat(p);
                for (r = 0; r < p.length; r++) {
                    if (k(o, p[r])) {
                        if (r !== 0) {
                            j.reduce(r - 1)
                        }
                        i[s] = p[r].replace(l, "");
                        return p[r]
                    }
                }
                i[s] = false;
                return ""
            });
            n = n.trim();
            return n === "" ? false : n
        }
    }, {
        "./getStyleProperty": 54,
        "./shared/prefixHelper": 57,
        "./shared/stylePropertyCache": 58,
        "./shared/styleValueAvailable": 59
    }],
    56: [function (c, d, b) {
        var f;
        d.exports = function a() {
            if (!f) {
                f = document.createElement("_")
            } else {
                f.style.cssText = "";
                f.removeAttribute("style")
            }
            return f
        };
        d.exports.resetElement = function () {
            f = null
        }
    }, {}],
    57: [function (b, d, a) {
        var i = ["-webkit-", "-moz-", "-ms-"];
        var f = ["Webkit", "Moz", "ms"];
        var h = ["webkit", "moz", "ms"];
        var c = function c() {
            this.initialize()
        };
        var g = c.prototype;
        g.initialize = function () {
            this.reduced = false;
            this.css = i;
            this.dom = f;
            this.evt = h
        };
        g.reduce = function (j) {
            if (!this.reduced) {
                this.reduced = true;
                this.css = [this.css[j]];
                this.dom = [this.dom[j]];
                this.evt = [this.evt[j]]
            }
        };
        d.exports = new c()
    }, {}],
    58: [function (b, c, a) {
        c.exports = {}
    }, {}],
    59: [function (c, b, d) {
        var a = c("./stylePropertyCache");
        var f = c("./getStyleTestElement");
        var i = false;
        var k;
        var j;
        var g = function g() {
            var l;
            if (!i) {
                i = true;
                k = "CSS" in window && "supports" in window.CSS;
                j = false;
                l = f();
                try {
                    l.style.width = "invalid"
                } catch (m) {
                    j = true
                }
            }
        };
        b.exports = function h(o, n) {
            var m;
            var l;
            g();
            if (k) {
                o = a[o].css;
                return CSS.supports(o, n)
            }
            l = f();
            m = l.style[o];
            if (j) {
                try {
                    l.style[o] = n
                } catch (p) {
                    return false
                }
            } else {
                l.style[o] = n
            }
            return l.style[o] && l.style[o] !== m
        };
        b.exports.resetFlags = function () {
            i = false
        }
    }, {"./getStyleTestElement": 56, "./stylePropertyCache": 58}],
    60: [function (c, d, a) {
        var b = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
        d.exports = function f(g) {
            g = String.prototype.replace.call(g, b, "");
            return g.charAt(0).toLowerCase() + g.substring(1)
        }
    }, {}],
    61: [function (c, d, b) {
        var f = /^(webkit|moz|ms)/gi;
        d.exports = function a(h) {
            var g;
            if (h.toLowerCase() === "cssfloat") {
                return "float"
            }
            if (f.test(h)) {
                h = "-" + h
            }
            return h.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
        }
    }, {}],
    62: [function (b, c, a) {
        var f = /-([a-z])/g;
        c.exports = function d(h) {
            var g;
            if (h.toLowerCase() === "float") {
                return "cssFloat"
            }
            h = h.replace(f, function (j, i) {
                return i.toUpperCase()
            });
            if (h.substr(0, 2) === "Ms") {
                h = "ms" + h.substring(2)
            }
            return h
        }
    }, {}],
    63: [function (c, d, b) {
        var f = c("@marcom/ac-prefixer/getStyleProperty");
        var g = c("@marcom/ac-prefixer/stripPrefixes");
        d.exports = function a() {
            var k = Array.prototype.slice.call(arguments);
            var p = k.shift(k);
            var m = window.getComputedStyle(p);
            var l = {};
            var o;
            var h;
            var n;
            var j;
            if (typeof k[0] !== "string") {
                k = k[0]
            }
            for (j = 0; j < k.length; j++) {
                o = k[j];
                h = f(o);
                if (h) {
                    o = g(h);
                    n = m[h];
                    if (!n || n === "auto") {
                        n = null
                    }
                    if (n) {
                        n = g(n)
                    }
                } else {
                    n = null
                }
                l[o] = n
            }
            return l
        }
    }, {"@marcom/ac-prefixer/getStyleProperty": 54, "@marcom/ac-prefixer/stripPrefixes": 60}],
    64: [function (c, d, b) {
        d.exports = function a(j) {
            var h;
            var g;
            var f;
            if (!j && j !== 0) {
                return ""
            }
            if (Array.isArray(j)) {
                return j + ""
            }
            if ((typeof j === "undefined" ? "undefined" : _typeof(j)) === "object") {
                h = "";
                g = Object.keys(j);
                for (f = 0; f < g.length; f++) {
                    h += g[f] + "(" + j[g[f]] + ") "
                }
                return h.trim()
            }
            return j
        }
    }, {}],
    65: [function (d, f, c) {
        var a = d("@marcom/ac-prefixer/getStyleCSS");
        var g = d("@marcom/ac-prefixer/getStyleProperty");
        var b = d("./internal/normalizeValue");
        f.exports = function h(o, l) {
            var k = "";
            var j;
            var n;
            var i;
            var m;
            var p;
            if ((typeof l === "undefined" ? "undefined" : _typeof(l)) !== "object") {
                throw new TypeError("setStyle: styles must be an Object")
            }
            for (n in l) {
                m = b(l[n]);
                if (!m && m !== 0) {
                    i = g(n);
                    if ("removeAttribute" in o.style) {
                        o.style.removeAttribute(i)
                    } else {
                        o.style[i] = ""
                    }
                } else {
                    j = a(n, m);
                    if (j !== false) {
                        k += " " + j
                    }
                }
            }
            if (k.length) {
                p = o.style.cssText;
                if (p.charAt(p.length - 1) !== ";") {
                    p += ";"
                }
                p += k;
                o.style.cssText = p
            }
            return o
        }
    }, {
        "./internal/normalizeValue": 64,
        "@marcom/ac-prefixer/getStyleCSS": 53,
        "@marcom/ac-prefixer/getStyleProperty": 54
    }],
    66: [function (b, c, a) {
        c.exports = {
            createBezier: b("./ac-easing/createBezier"),
            createPredefined: b("./ac-easing/createPredefined"),
            createStep: b("./ac-easing/createStep"),
            Ease: b("./ac-easing/Ease")
        }
    }, {
        "./ac-easing/Ease": 67,
        "./ac-easing/createBezier": 68,
        "./ac-easing/createPredefined": 69,
        "./ac-easing/createStep": 70
    }],
    67: [function (b, c, a) {
        var g = "Ease expects an easing function.";

        function f(i, h) {
            if (typeof i !== "function") {
                throw new TypeError(g)
            }
            this.easingFunction = i;
            this.cssString = h || null
        }

        var d = f.prototype;
        d.getValue = function (h) {
            return this.easingFunction(h, 0, 1, 1)
        };
        c.exports = f
    }, {}],
    68: [function (b, c, a) {
        b("@marcom/ac-polyfills/Array/prototype.every");
        var f = b("./Ease");
        var h = b("./helpers/KeySpline");
        var d = "Bezier curve expects exactly four (4) numbers. Given: ";
        c.exports = function g(j, p, i, o) {
            var q = Array.prototype.slice.call(arguments);
            var m = q.every(function (r) {
                return typeof r === "number"
            });
            if (q.length !== 4 || !m) {
                throw new TypeError(d + q)
            }
            var n = new h(j, p, i, o);
            var k = function k(t, r, u, s) {
                return n.get(t / s) * u + r
            };
            var l = "cubic-bezier(" + q.join(", ") + ")";
            return new f(k, l)
        }
    }, {"./Ease": 67, "./helpers/KeySpline": 71, "@marcom/ac-polyfills/Array/prototype.every": 483}],
    69: [function (c, a, d) {
        var i = c("./createStep");
        var f = c("./helpers/cssAliases");
        var b = c("./helpers/easingFunctions");
        var h = c("./Ease");
        var g = 'Easing function "%TYPE%" not recognized among the following: ' + Object.keys(b).join(", ");
        a.exports = function j(k) {
            var l;
            if (k === "step-start") {
                return i(1, "start")
            } else {
                if (k === "step-end") {
                    return i(1, "end")
                } else {
                    l = b[k]
                }
            }
            if (!l) {
                throw new Error(g.replace("%TYPE%", k))
            }
            return new h(l, f[k])
        }
    }, {"./Ease": 67, "./createStep": 70, "./helpers/cssAliases": 72, "./helpers/easingFunctions": 73}],
    70: [function (d, f, c) {
        var g = d("./Ease");
        var b = "Step function expects a numeric value greater than zero. Given: ";
        var a = 'Step function direction must be either "start" or "end" (default). Given: ';
        f.exports = function h(i, l) {
            l = l || "end";
            if (typeof i !== "number" || i < 1) {
                throw new TypeError(b + i)
            }
            if (l !== "start" && l !== "end") {
                throw new TypeError(a + l)
            }
            var k = function k(q, m, r, p) {
                var o = r / i;
                var n = Math[l === "start" ? "floor" : "ceil"](q / p * i);
                return m + o * n
            };
            var j = "steps(" + i + ", " + l + ")";
            return new g(k, j)
        }
    }, {"./Ease": 67}],
    71: [function (b, c, a) {
        /*! MIT License
   *
   * KeySpline - use bezier curve for transition easing function
   * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
   *
   * Permission is hereby granted, free of charge, to any person obtaining a
   * copy of this software and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including without limitation
   * the rights to use, copy, modify, merge, publish, distribute, sublicense,
   * and/or sell copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
   * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */
        function d(o, l, n, j) {
            this.get = function (p) {
                if (o === l && n === j) {
                    return p
                }
                return g(k(p), l, j)
            };

            function i(p, q) {
                return 1 - 3 * q + 3 * p
            }

            function h(p, q) {
                return 3 * q - 6 * p
            }

            function f(p) {
                return 3 * p
            }

            function g(r, p, q) {
                return ((i(p, q) * r + h(p, q)) * r + f(p)) * r
            }

            function m(r, p, q) {
                return 3 * i(p, q) * r * r + 2 * h(p, q) * r + f(p)
            }

            function k(s) {
                var q = s;
                for (var r = 0; r < 4; ++r) {
                    var t = m(q, o, n);
                    if (t === 0) {
                        return q
                    }
                    var p = g(q, o, n) - s;
                    q -= p / t
                }
                return q
            }
        }

        c.exports = d
    }, {}],
    72: [function (c, d, b) {
        var a = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
            "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
            "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
            "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
            "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
            "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
            "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
            "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
            "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
            "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
            "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
            "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
            "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
            "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
            "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
            "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
            "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
            "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
            "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
        };
        a.easeIn = a["ease-in"];
        a.easeOut = a["ease-out"];
        a.easeInOut = a["ease-in-out"];
        a.easeInCubic = a["ease-in-cubic"];
        a.easeOutCubic = a["ease-out-cubic"];
        a.easeInOutCubic = a["ease-in-out-cubic"];
        a.easeInQuad = a["ease-in-quad"];
        a.easeOutQuad = a["ease-out-quad"];
        a.easeInOutQuad = a["ease-in-out-quad"];
        a.easeInQuart = a["ease-in-quart"];
        a.easeOutQuart = a["ease-out-quart"];
        a.easeInOutQuart = a["ease-in-out-quart"];
        a.easeInQuint = a["ease-in-quint"];
        a.easeOutQuint = a["ease-out-quint"];
        a.easeInOutQuint = a["ease-in-out-quint"];
        a.easeInSine = a["ease-in-sine"];
        a.easeOutSine = a["ease-out-sine"];
        a.easeInOutSine = a["ease-in-out-sine"];
        a.easeInExpo = a["ease-in-expo"];
        a.easeOutExpo = a["ease-out-expo"];
        a.easeInOutExpo = a["ease-in-out-expo"];
        a.easeInCirc = a["ease-in-circ"];
        a.easeOutCirc = a["ease-out-circ"];
        a.easeInOutCirc = a["ease-in-out-circ"];
        a.easeInBack = a["ease-in-back"];
        a.easeOutBack = a["ease-out-back"];
        a.easeInOutBack = a["ease-in-out-back"];
        d.exports = a
    }, {}],
    73: [function (d, b, F) {
        var J = d("../createBezier");
        var w = J(0.25, 0.1, 0.25, 1).easingFunction;
        var g = J(0.42, 0, 1, 1).easingFunction;
        var C = J(0, 0, 0.58, 1).easingFunction;
        var x = J(0.42, 0, 0.58, 1).easingFunction;
        var u = function u(Q, O, R, P) {
            return R * Q / P + O
        };
        var h = function h(Q, O, R, P) {
            return R * (Q /= P) * Q + O
        };
        var N = function N(Q, O, R, P) {
            return -R * (Q /= P) * (Q - 2) + O
        };
        var D = function D(Q, O, R, P) {
            if ((Q /= P / 2) < 1) {
                return R / 2 * Q * Q + O
            }
            return -R / 2 * (--Q * (Q - 2) - 1) + O
        };
        var i = function i(Q, O, R, P) {
            return R * (Q /= P) * Q * Q + O
        };
        var a = function a(Q, O, R, P) {
            return R * ((Q = Q / P - 1) * Q * Q + 1) + O
        };
        var j = function j(Q, O, R, P) {
            if ((Q /= P / 2) < 1) {
                return R / 2 * Q * Q * Q + O
            }
            return R / 2 * ((Q -= 2) * Q * Q + 2) + O
        };
        var o = function o(Q, O, R, P) {
            return R * (Q /= P) * Q * Q * Q + O
        };
        var m = function m(Q, O, R, P) {
            return -R * ((Q = Q / P - 1) * Q * Q * Q - 1) + O
        };
        var p = function p(Q, O, R, P) {
            if ((Q /= P / 2) < 1) {
                return R / 2 * Q * Q * Q * Q + O
            }
            return -R / 2 * ((Q -= 2) * Q * Q * Q - 2) + O
        };
        var y = function y(Q, O, R, P) {
            return R * (Q /= P) * Q * Q * Q * Q + O
        };
        var v = function v(Q, O, R, P) {
            return R * ((Q = Q / P - 1) * Q * Q * Q * Q + 1) + O
        };
        var z = function z(Q, O, R, P) {
            if ((Q /= P / 2) < 1) {
                return R / 2 * Q * Q * Q * Q * Q + O
            }
            return R / 2 * ((Q -= 2) * Q * Q * Q * Q + 2) + O
        };
        var c = function c(Q, O, R, P) {
            return -R * Math.cos(Q / P * (Math.PI / 2)) + R + O
        };
        var L = function L(Q, O, R, P) {
            return R * Math.sin(Q / P * (Math.PI / 2)) + O
        };
        var B = function B(Q, O, R, P) {
            return -R / 2 * (Math.cos(Math.PI * Q / P) - 1) + O
        };
        var G = function G(Q, O, R, P) {
            return Q === 0 ? O : R * Math.pow(2, 10 * (Q / P - 1)) + O
        };
        var A = function A(Q, O, R, P) {
            return Q === P ? O + R : R * (-Math.pow(2, -10 * Q / P) + 1) + O
        };
        var r = function r(Q, O, R, P) {
            if (Q === 0) {
                return O
            } else {
                if (Q === P) {
                    return O + R
                } else {
                    if ((Q /= P / 2) < 1) {
                        return R / 2 * Math.pow(2, 10 * (Q - 1)) + O
                    }
                }
            }
            return R / 2 * (-Math.pow(2, -10 * --Q) + 2) + O
        };
        var l = function l(Q, O, R, P) {
            return -R * (Math.sqrt(1 - (Q /= P) * Q) - 1) + O
        };
        var f = function f(Q, O, R, P) {
            return R * Math.sqrt(1 - (Q = Q / P - 1) * Q) + O
        };
        var I = function I(Q, O, R, P) {
            if ((Q /= P / 2) < 1) {
                return -R / 2 * (Math.sqrt(1 - Q * Q) - 1) + O
            }
            return R / 2 * (Math.sqrt(1 - (Q -= 2) * Q) + 1) + O
        };
        var E = function E(S, Q, U, R) {
            var O = 1.70158;
            var T = 0;
            var P = U;
            if (S === 0) {
                return Q
            } else {
                if ((S /= R) === 1) {
                    return Q + U
                }
            }
            if (!T) {
                T = R * 0.3
            }
            if (P < Math.abs(U)) {
                P = U;
                O = T / 4
            } else {
                O = T / (2 * Math.PI) * Math.asin(U / P)
            }
            return -(P * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * R - O) * (2 * Math.PI) / T)) + Q
        };
        var H = function H(S, Q, U, R) {
            var O = 1.70158;
            var T = 0;
            var P = U;
            if (S === 0) {
                return Q
            } else {
                if ((S /= R) === 1) {
                    return Q + U
                }
            }
            if (!T) {
                T = R * 0.3
            }
            if (P < Math.abs(U)) {
                P = U;
                O = T / 4
            } else {
                O = T / (2 * Math.PI) * Math.asin(U / P)
            }
            return P * Math.pow(2, -10 * S) * Math.sin((S * R - O) * (2 * Math.PI) / T) + U + Q
        };
        var t = function t(S, Q, U, R) {
            var O = 1.70158;
            var T = 0;
            var P = U;
            if (S === 0) {
                return Q
            } else {
                if ((S /= R / 2) === 2) {
                    return Q + U
                }
            }
            if (!T) {
                T = R * (0.3 * 1.5)
            }
            if (P < Math.abs(U)) {
                P = U;
                O = T / 4
            } else {
                O = T / (2 * Math.PI) * Math.asin(U / P)
            }
            if (S < 1) {
                return -0.5 * (P * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * R - O) * (2 * Math.PI) / T)) + Q
            }
            return P * Math.pow(2, -10 * (S -= 1)) * Math.sin((S * R - O) * (2 * Math.PI) / T) * 0.5 + U + Q
        };
        var s = function s(R, P, S, Q, O) {
            if (O === undefined) {
                O = 1.70158
            }
            return S * (R /= Q) * R * ((O + 1) * R - O) + P
        };
        var q = function q(R, P, S, Q, O) {
            if (O === undefined) {
                O = 1.70158
            }
            return S * ((R = R / Q - 1) * R * ((O + 1) * R + O) + 1) + P
        };
        var k = function k(R, P, S, Q, O) {
            if (O === undefined) {
                O = 1.70158
            }
            if ((R /= Q / 2) < 1) {
                return S / 2 * (R * R * (((O *= 1.525) + 1) * R - O)) + P
            }
            return S / 2 * ((R -= 2) * R * (((O *= 1.525) + 1) * R + O) + 2) + P
        };
        var K = function K(Q, O, R, P) {
            if ((Q /= P) < 1 / 2.75) {
                return R * (7.5625 * Q * Q) + O
            } else {
                if (Q < 2 / 2.75) {
                    return R * (7.5625 * (Q -= 1.5 / 2.75) * Q + 0.75) + O
                } else {
                    if (Q < 2.5 / 2.75) {
                        return R * (7.5625 * (Q -= 2.25 / 2.75) * Q + 0.9375) + O
                    }
                }
            }
            return R * (7.5625 * (Q -= 2.625 / 2.75) * Q + 0.984375) + O
        };
        var n = function n(Q, O, R, P) {
            return R - K(P - Q, 0, R, P) + O
        };
        var M = function M(Q, O, R, P) {
            if (Q < P / 2) {
                return n(Q * 2, 0, R, P) * 0.5 + O
            }
            return K(Q * 2 - P, 0, R, P) * 0.5 + R * 0.5 + O
        };
        b.exports = {
            linear: u,
            ease: w,
            easeIn: g,
            "ease-in": g,
            easeOut: C,
            "ease-out": C,
            easeInOut: x,
            "ease-in-out": x,
            easeInCubic: i,
            "ease-in-cubic": i,
            easeOutCubic: a,
            "ease-out-cubic": a,
            easeInOutCubic: j,
            "ease-in-out-cubic": j,
            easeInQuad: h,
            "ease-in-quad": h,
            easeOutQuad: N,
            "ease-out-quad": N,
            easeInOutQuad: D,
            "ease-in-out-quad": D,
            easeInQuart: o,
            "ease-in-quart": o,
            easeOutQuart: m,
            "ease-out-quart": m,
            easeInOutQuart: p,
            "ease-in-out-quart": p,
            easeInQuint: y,
            "ease-in-quint": y,
            easeOutQuint: v,
            "ease-out-quint": v,
            easeInOutQuint: z,
            "ease-in-out-quint": z,
            easeInSine: c,
            "ease-in-sine": c,
            easeOutSine: L,
            "ease-out-sine": L,
            easeInOutSine: B,
            "ease-in-out-sine": B,
            easeInExpo: G,
            "ease-in-expo": G,
            easeOutExpo: A,
            "ease-out-expo": A,
            easeInOutExpo: r,
            "ease-in-out-expo": r,
            easeInCirc: l,
            "ease-in-circ": l,
            easeOutCirc: f,
            "ease-out-circ": f,
            easeInOutCirc: I,
            "ease-in-out-circ": I,
            easeInBack: s,
            "ease-in-back": s,
            easeOutBack: q,
            "ease-out-back": q,
            easeInOutBack: k,
            "ease-in-out-back": k,
            easeInElastic: E,
            "ease-in-elastic": E,
            easeOutElastic: H,
            "ease-out-elastic": H,
            easeInOutElastic: t,
            "ease-in-out-elastic": t,
            easeInBounce: n,
            "ease-in-bounce": n,
            easeOutBounce: K,
            "ease-out-bounce": K,
            easeInOutBounce: M,
            "ease-in-out-bounce": M
        }
    }, {"../createBezier": 68}],
    74: [function (b, c, a) {
        c.exports = {EventEmitterMicro: b("./ac-event-emitter-micro/EventEmitterMicro")}
    }, {"./ac-event-emitter-micro/EventEmitterMicro": 75}],
    75: [function (b, c, a) {
        function f() {
            this._events = {}
        }

        var d = f.prototype;
        d.on = function (g, h) {
            this._events[g] = this._events[g] || [];
            this._events[g].unshift(h)
        };
        d.once = function (g, j) {
            var i = this;

            function h(k) {
                i.off(g, h);
                if (k !== undefined) {
                    j(k)
                } else {
                    j()
                }
            }

            this.on(g, h)
        };
        d.off = function (g, i) {
            if (!this.has(g)) {
                return
            }
            var h = this._events[g].indexOf(i);
            if (h === -1) {
                return
            }
            this._events[g].splice(h, 1)
        };
        d.trigger = function (g, j) {
            if (!this.has(g)) {
                return
            }
            for (var h = this._events[g].length - 1; h >= 0; h--) {
                if (j !== undefined) {
                    this._events[g][h](j)
                } else {
                    this._events[g][h]()
                }
            }
        };
        d.has = function (g) {
            if (g in this._events === false || this._events[g].length === 0) {
                return false
            }
            return true
        };
        d.destroy = function () {
            for (var g in this._events) {
                this._events[g] = null
            }
            this._events = null
        };
        c.exports = f
    }, {}],
    76: [function (b, c, a) {
        c.exports = {PageVisibilityManager: b("./ac-page-visibility/PageVisibilityManager")}
    }, {"./ac-page-visibility/PageVisibilityManager": 77}],
    77: [function (c, f, b) {
        var d = c("@marcom/ac-object/create");
        var h = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;

        function a() {
            if (typeof document.addEventListener === "undefined") {
                return
            }
            var i;
            if (typeof document.hidden !== "undefined") {
                this._hidden = "hidden";
                i = "visibilitychange"
            } else {
                if (typeof document.mozHidden !== "undefined") {
                    this._hidden = "mozHidden";
                    i = "mozvisibilitychange"
                } else {
                    if (typeof document.msHidden !== "undefined") {
                        this._hidden = "msHidden";
                        i = "msvisibilitychange"
                    } else {
                        if (typeof document.webkitHidden !== "undefined") {
                            this._hidden = "webkitHidden";
                            i = "webkitvisibilitychange"
                        }
                    }
                }
            }
            if (typeof document[this._hidden] === "undefined") {
                this.isHidden = false
            } else {
                this.isHidden = document[this._hidden]
            }
            if (i) {
                document.addEventListener(i, this._handleVisibilityChange.bind(this), false)
            }
            h.call(this)
        }

        var g = a.prototype = d(h.prototype);
        g.CHANGED = "changed";
        g._handleVisibilityChange = function (i) {
            this.isHidden = document[this._hidden];
            this.trigger(this.CHANGED, {isHidden: this.isHidden})
        };
        f.exports = new a()
    }, {"@marcom/ac-event-emitter-micro": 74, "@marcom/ac-object/create": 461}],
    78: [function (b, c, a) {
        c.exports = d;

        function d(f) {
            var g = new Float32Array(16);
            g[0] = f[0];
            g[1] = f[1];
            g[2] = f[2];
            g[3] = f[3];
            g[4] = f[4];
            g[5] = f[5];
            g[6] = f[6];
            g[7] = f[7];
            g[8] = f[8];
            g[9] = f[9];
            g[10] = f[10];
            g[11] = f[11];
            g[12] = f[12];
            g[13] = f[13];
            g[14] = f[14];
            g[15] = f[15];
            return g
        }
    }, {}],
    79: [function (b, d, a) {
        d.exports = c;

        function c() {
            var f = new Float32Array(16);
            f[0] = 1;
            f[1] = 0;
            f[2] = 0;
            f[3] = 0;
            f[4] = 0;
            f[5] = 1;
            f[6] = 0;
            f[7] = 0;
            f[8] = 0;
            f[9] = 0;
            f[10] = 1;
            f[11] = 0;
            f[12] = 0;
            f[13] = 0;
            f[14] = 0;
            f[15] = 1;
            return f
        }
    }, {}],
    80: [function (b, c, a) {
        c.exports = d;

        function d(t, r, o) {
            var l = r[0], k = r[1], j = r[2], m = r[3], u = l + l, f = k + k, n = j + j, i = l * u, h = l * f,
                g = l * n, s = k * f, p = k * n, C = j * n, D = m * u, B = m * f, A = m * n;
            t[0] = 1 - (s + C);
            t[1] = h + A;
            t[2] = g - B;
            t[3] = 0;
            t[4] = h - A;
            t[5] = 1 - (i + C);
            t[6] = p + D;
            t[7] = 0;
            t[8] = g + B;
            t[9] = p - D;
            t[10] = 1 - (i + s);
            t[11] = 0;
            t[12] = o[0];
            t[13] = o[1];
            t[14] = o[2];
            t[15] = 1;
            return t
        }
    }, {}],
    81: [function (c, d, b) {
        d.exports = a;

        function a(f) {
            f[0] = 1;
            f[1] = 0;
            f[2] = 0;
            f[3] = 0;
            f[4] = 0;
            f[5] = 1;
            f[6] = 0;
            f[7] = 0;
            f[8] = 0;
            f[9] = 0;
            f[10] = 1;
            f[11] = 0;
            f[12] = 0;
            f[13] = 0;
            f[14] = 0;
            f[15] = 1;
            return f
        }
    }, {}],
    82: [function (b, c, a) {
        c.exports = d;

        function d(y, D) {
            var H = D[0], F = D[1], E = D[2], B = D[3], j = D[4], i = D[5], h = D[6], g = D[7], x = D[8], w = D[9],
                v = D[10], u = D[11], J = D[12], I = D[13], G = D[14], C = D[15], t = H * i - F * j, s = H * h - E * j,
                r = H * g - B * j, q = F * h - E * i, p = F * g - B * i, o = E * g - B * h, n = x * I - w * J,
                m = x * G - v * J, l = x * C - u * J, k = w * G - v * I, A = w * C - u * I, z = v * C - u * G,
                f = t * z - s * A + r * k + q * l - p * m + o * n;
            if (!f) {
                return null
            }
            f = 1 / f;
            y[0] = (i * z - h * A + g * k) * f;
            y[1] = (E * A - F * z - B * k) * f;
            y[2] = (I * o - G * p + C * q) * f;
            y[3] = (v * p - w * o - u * q) * f;
            y[4] = (h * l - j * z - g * m) * f;
            y[5] = (H * z - E * l + B * m) * f;
            y[6] = (G * r - J * o - C * s) * f;
            y[7] = (x * o - v * r + u * s) * f;
            y[8] = (j * A - i * l + g * n) * f;
            y[9] = (F * l - H * A - B * n) * f;
            y[10] = (J * p - I * r + C * t) * f;
            y[11] = (w * r - x * p - u * t) * f;
            y[12] = (i * m - j * k - h * n) * f;
            y[13] = (H * k - F * m + E * n) * f;
            y[14] = (I * s - J * q - G * t) * f;
            y[15] = (x * q - w * s + v * t) * f;
            return y
        }
    }, {}],
    83: [function (c, d, b) {
        d.exports = a;

        function a(r, v, s) {
            var z = v[0], y = v[1], w = v[2], t = v[3], l = v[4], j = v[5], h = v[6], f = v[7], q = v[8], p = v[9],
                o = v[10], n = v[11], B = v[12], A = v[13], x = v[14], u = v[15];
            var m = s[0], k = s[1], i = s[2], g = s[3];
            r[0] = m * z + k * l + i * q + g * B;
            r[1] = m * y + k * j + i * p + g * A;
            r[2] = m * w + k * h + i * o + g * x;
            r[3] = m * t + k * f + i * n + g * u;
            m = s[4];
            k = s[5];
            i = s[6];
            g = s[7];
            r[4] = m * z + k * l + i * q + g * B;
            r[5] = m * y + k * j + i * p + g * A;
            r[6] = m * w + k * h + i * o + g * x;
            r[7] = m * t + k * f + i * n + g * u;
            m = s[8];
            k = s[9];
            i = s[10];
            g = s[11];
            r[8] = m * z + k * l + i * q + g * B;
            r[9] = m * y + k * j + i * p + g * A;
            r[10] = m * w + k * h + i * o + g * x;
            r[11] = m * t + k * f + i * n + g * u;
            m = s[12];
            k = s[13];
            i = s[14];
            g = s[15];
            r[12] = m * z + k * l + i * q + g * B;
            r[13] = m * y + k * j + i * p + g * A;
            r[14] = m * w + k * h + i * o + g * x;
            r[15] = m * t + k * f + i * n + g * u;
            return r
        }
    }, {}],
    84: [function (c, d, a) {
        d.exports = b;

        function b(E, L, N, f) {
            var p = f[0], o = f[1], n = f[2], F = Math.sqrt(p * p + o * o + n * n), w, J, v, P, O, M, K, m, l, k, j, D,
                C, B, A, u, r, q, I, H, G, i, h, g;
            if (Math.abs(F) < 0.000001) {
                return null
            }
            F = 1 / F;
            p *= F;
            o *= F;
            n *= F;
            w = Math.sin(N);
            J = Math.cos(N);
            v = 1 - J;
            P = L[0];
            O = L[1];
            M = L[2];
            K = L[3];
            m = L[4];
            l = L[5];
            k = L[6];
            j = L[7];
            D = L[8];
            C = L[9];
            B = L[10];
            A = L[11];
            u = p * p * v + J;
            r = o * p * v + n * w;
            q = n * p * v - o * w;
            I = p * o * v - n * w;
            H = o * o * v + J;
            G = n * o * v + p * w;
            i = p * n * v + o * w;
            h = o * n * v - p * w;
            g = n * n * v + J;
            E[0] = P * u + m * r + D * q;
            E[1] = O * u + l * r + C * q;
            E[2] = M * u + k * r + B * q;
            E[3] = K * u + j * r + A * q;
            E[4] = P * I + m * H + D * G;
            E[5] = O * I + l * H + C * G;
            E[6] = M * I + k * H + B * G;
            E[7] = K * I + j * H + A * G;
            E[8] = P * i + m * h + D * g;
            E[9] = O * i + l * h + C * g;
            E[10] = M * i + k * h + B * g;
            E[11] = K * i + j * h + A * g;
            if (L !== E) {
                E[12] = L[12];
                E[13] = L[13];
                E[14] = L[14];
                E[15] = L[15]
            }
            return E
        }
    }, {}],
    85: [function (c, d, a) {
        d.exports = b;

        function b(f, m, l) {
            var r = Math.sin(l), k = Math.cos(l), q = m[4], p = m[5], o = m[6], n = m[7], j = m[8], i = m[9], h = m[10],
                g = m[11];
            if (m !== f) {
                f[0] = m[0];
                f[1] = m[1];
                f[2] = m[2];
                f[3] = m[3];
                f[12] = m[12];
                f[13] = m[13];
                f[14] = m[14];
                f[15] = m[15]
            }
            f[4] = q * k + j * r;
            f[5] = p * k + i * r;
            f[6] = o * k + h * r;
            f[7] = n * k + g * r;
            f[8] = j * k - q * r;
            f[9] = i * k - p * r;
            f[10] = h * k - o * r;
            f[11] = g * k - n * r;
            return f
        }
    }, {}],
    86: [function (c, d, b) {
        d.exports = a;

        function a(j, q, p) {
            var r = Math.sin(p), o = Math.cos(p), i = q[0], h = q[1], g = q[2], f = q[3], n = q[8], m = q[9], l = q[10],
                k = q[11];
            if (q !== j) {
                j[4] = q[4];
                j[5] = q[5];
                j[6] = q[6];
                j[7] = q[7];
                j[12] = q[12];
                j[13] = q[13];
                j[14] = q[14];
                j[15] = q[15]
            }
            j[0] = i * o - n * r;
            j[1] = h * o - m * r;
            j[2] = g * o - l * r;
            j[3] = f * o - k * r;
            j[8] = i * r + n * o;
            j[9] = h * r + m * o;
            j[10] = g * r + l * o;
            j[11] = f * r + k * o;
            return j
        }
    }, {}],
    87: [function (c, d, b) {
        d.exports = a;

        function a(j, m, l) {
            var r = Math.sin(l), k = Math.cos(l), i = m[0], h = m[1], g = m[2], f = m[3], q = m[4], p = m[5], o = m[6],
                n = m[7];
            if (m !== j) {
                j[8] = m[8];
                j[9] = m[9];
                j[10] = m[10];
                j[11] = m[11];
                j[12] = m[12];
                j[13] = m[13];
                j[14] = m[14];
                j[15] = m[15]
            }
            j[0] = i * k + q * r;
            j[1] = h * k + p * r;
            j[2] = g * k + o * r;
            j[3] = f * k + n * r;
            j[4] = q * k - i * r;
            j[5] = p * k - h * r;
            j[6] = o * k - g * r;
            j[7] = n * k - f * r;
            return j
        }
    }, {}],
    88: [function (b, c, a) {
        c.exports = d;

        function d(i, g, h) {
            var f = h[0], k = h[1], j = h[2];
            i[0] = g[0] * f;
            i[1] = g[1] * f;
            i[2] = g[2] * f;
            i[3] = g[3] * f;
            i[4] = g[4] * k;
            i[5] = g[5] * k;
            i[6] = g[6] * k;
            i[7] = g[7] * k;
            i[8] = g[8] * j;
            i[9] = g[9] * j;
            i[10] = g[10] * j;
            i[11] = g[11] * j;
            i[12] = g[12];
            i[13] = g[13];
            i[14] = g[14];
            i[15] = g[15];
            return i
        }
    }, {}],
    89: [function (b, c, a) {
        c.exports = d;

        function d(r, t, m) {
            var l = m[0], k = m[1], j = m[2], A, w, u, s, i, h, g, f, q, p, o, n;
            if (t === r) {
                r[12] = t[0] * l + t[4] * k + t[8] * j + t[12];
                r[13] = t[1] * l + t[5] * k + t[9] * j + t[13];
                r[14] = t[2] * l + t[6] * k + t[10] * j + t[14];
                r[15] = t[3] * l + t[7] * k + t[11] * j + t[15]
            } else {
                A = t[0];
                w = t[1];
                u = t[2];
                s = t[3];
                i = t[4];
                h = t[5];
                g = t[6];
                f = t[7];
                q = t[8];
                p = t[9];
                o = t[10];
                n = t[11];
                r[0] = A;
                r[1] = w;
                r[2] = u;
                r[3] = s;
                r[4] = i;
                r[5] = h;
                r[6] = g;
                r[7] = f;
                r[8] = q;
                r[9] = p;
                r[10] = o;
                r[11] = n;
                r[12] = A * l + i * k + q * j + t[12];
                r[13] = w * l + h * k + p * j + t[13];
                r[14] = u * l + g * k + o * j + t[14];
                r[15] = s * l + f * k + n * j + t[15]
            }
            return r
        }
    }, {}],
    90: [function (b, c, a) {
        c.exports = d;

        function d(i, h) {
            if (i === h) {
                var m = h[1], k = h[2], j = h[3], f = h[6], l = h[7], g = h[11];
                i[1] = h[4];
                i[2] = h[8];
                i[3] = h[12];
                i[4] = m;
                i[6] = h[9];
                i[7] = h[13];
                i[8] = k;
                i[9] = f;
                i[11] = h[14];
                i[12] = j;
                i[13] = l;
                i[14] = g
            } else {
                i[0] = h[0];
                i[1] = h[4];
                i[2] = h[8];
                i[3] = h[12];
                i[4] = h[1];
                i[5] = h[5];
                i[6] = h[9];
                i[7] = h[13];
                i[8] = h[2];
                i[9] = h[6];
                i[10] = h[10];
                i[11] = h[14];
                i[12] = h[3];
                i[13] = h[7];
                i[14] = h[11];
                i[15] = h[15]
            }
            return i
        }
    }, {}],
    91: [function (b, d, a) {
        d.exports = c;

        function c() {
            var f = new Float32Array(3);
            f[0] = 0;
            f[1] = 0;
            f[2] = 0;
            return f
        }
    }, {}],
    92: [function (b, c, a) {
        c.exports = d;

        function d(g, l, k) {
            var f = l[0], n = l[1], m = l[2], j = k[0], i = k[1], h = k[2];
            g[0] = n * h - m * i;
            g[1] = m * j - f * h;
            g[2] = f * i - n * j;
            return g
        }
    }, {}],
    93: [function (c, d, b) {
        d.exports = a;

        function a(g, f) {
            return g[0] * f[0] + g[1] * f[1] + g[2] * f[2]
        }
    }, {}],
    94: [function (b, c, a) {
        c.exports = d;

        function d(f, i, h) {
            var g = new Float32Array(3);
            g[0] = f;
            g[1] = i;
            g[2] = h;
            return g
        }
    }, {}],
    95: [function (b, c, a) {
        c.exports = d;

        function d(g) {
            var f = g[0], i = g[1], h = g[2];
            return Math.sqrt(f * f + i * i + h * h)
        }
    }, {}],
    96: [function (c, d, b) {
        d.exports = a;

        function a(i, h) {
            var g = h[0], k = h[1], j = h[2];
            var f = g * g + k * k + j * j;
            if (f > 0) {
                f = 1 / Math.sqrt(f);
                i[0] = h[0] * f;
                i[1] = h[1] * f;
                i[2] = h[2] * f
            }
            return i
        }
    }, {}],
    97: [function (b, d, a) {
        d.exports = c;

        function c() {
            var f = new Float32Array(4);
            f[0] = 0;
            f[1] = 0;
            f[2] = 0;
            f[3] = 0;
            return f
        }
    }, {}],
    98: [function (b, c, a) {
        c.exports = d;

        function d(f, j, i, g) {
            var h = new Float32Array(4);
            h[0] = f;
            h[1] = j;
            h[2] = i;
            h[3] = g;
            return h
        }
    }, {}],
    99: [function (b, d, a) {
        d.exports = c;

        function c(j, i, g) {
            var f = i[0], l = i[1], k = i[2], h = i[3];
            j[0] = g[0] * f + g[4] * l + g[8] * k + g[12] * h;
            j[1] = g[1] * f + g[5] * l + g[9] * k + g[13] * h;
            j[2] = g[2] * f + g[6] * l + g[10] * k + g[14] * h;
            j[3] = g[3] * f + g[7] * l + g[11] * k + g[15] * h;
            return j
        }
    }, {}],
    100: [function (b, c, a) {
        c.exports = {Transform: b("./ac-transform/Transform")}
    }, {"./ac-transform/Transform": 101}],
    101: [function (l, d, H) {
        var k = l("./gl-matrix/mat4");
        var b = l("./gl-matrix/vec3");
        var a = l("./gl-matrix/vec4");
        var f = Math.PI / 180;
        var c = 180 / Math.PI;
        var F = 0, y = 0, D = 1, x = 1, B = 2, z = 3;
        var j = 4, w = 4, i = 5, v = 5, h = 6, g = 7;
        var t = 8, q = 9, o = 10, n = 11;
        var G = 12, u = 12, E = 13, s = 13, C = 14, A = 15;

        function p() {
            this.m = k.create()
        }

        var r = p.prototype;
        r.rotateX = function (J) {
            var I = f * J;
            k.rotateX(this.m, this.m, I);
            return this
        };
        r.rotateY = function (J) {
            var I = f * J;
            k.rotateY(this.m, this.m, I);
            return this
        };
        r.rotateZ = function (J) {
            var I = f * J;
            k.rotateZ(this.m, this.m, I);
            return this
        };
        r.rotate = r.rotateZ;
        r.rotate3d = function (J, M, L, K) {
            if (M === null || M === undefined) {
                M = J
            }
            if (L === null || M === undefined) {
                L = J
            }
            var I = f * K;
            k.rotate(this.m, this.m, I, [J, M, L]);
            return this
        };
        r.rotateAxisAngle = r.rotate3d;
        r.scale = function (J, I) {
            I = I || J;
            k.scale(this.m, this.m, [J, I, 1]);
            return this
        };
        r.scaleX = function (I) {
            k.scale(this.m, this.m, [I, 1, 1]);
            return this
        };
        r.scaleY = function (I) {
            k.scale(this.m, this.m, [1, I, 1]);
            return this
        };
        r.scaleZ = function (I) {
            k.scale(this.m, this.m, [1, 1, I]);
            return this
        };
        r.scale3d = function (K, J, I) {
            k.scale(this.m, this.m, [K, J, I]);
            return this
        };
        r.skew = function (K, J) {
            if (J === null || J === undefined) {
                return this.skewX(K)
            }
            K = f * K;
            J = f * J;
            var I = k.create();
            I[w] = Math.tan(K);
            I[x] = Math.tan(J);
            k.multiply(this.m, this.m, I);
            return this
        };
        r.skewX = function (J) {
            J = f * J;
            var I = k.create();
            I[w] = Math.tan(J);
            k.multiply(this.m, this.m, I);
            return this
        };
        r.skewY = function (J) {
            J = f * J;
            var I = k.create();
            I[x] = Math.tan(J);
            k.multiply(this.m, this.m, I);
            return this
        };
        r.translate = function (J, I) {
            I = I || 0;
            k.translate(this.m, this.m, [J, I, 0]);
            return this
        };
        r.translate3d = function (J, I, K) {
            k.translate(this.m, this.m, [J, I, K]);
            return this
        };
        r.translateX = function (I) {
            k.translate(this.m, this.m, [I, 0, 0]);
            return this
        };
        r.translateY = function (I) {
            k.translate(this.m, this.m, [0, I, 0]);
            return this
        };
        r.translateZ = function (I) {
            k.translate(this.m, this.m, [0, 0, I]);
            return this
        };
        r.perspective = function (J) {
            var I = k.create();
            if (J !== 0) {
                I[n] = -1 / J
            }
            k.multiply(this.m, this.m, I)
        };
        r.inverse = function () {
            var I = this.clone();
            I.m = k.invert(I.m, this.m);
            return I
        };
        r.reset = function () {
            k.identity(this.m);
            return this
        };
        r.getTranslateXY = function () {
            var I = this.m;
            if (this.isAffine()) {
                return [I[u], I[s]]
            }
            return [I[G], I[E]]
        };
        r.getTranslateXYZ = function () {
            var I = this.m;
            if (this.isAffine()) {
                return [I[u], I[s], 0]
            }
            return [I[G], I[E], I[C]]
        };
        r.getTranslateX = function () {
            var I = this.m;
            if (this.isAffine()) {
                return I[u]
            }
            return I[G]
        };
        r.getTranslateY = function () {
            var I = this.m;
            if (this.isAffine()) {
                return I[s]
            }
            return I[E]
        };
        r.getTranslateZ = function () {
            var I = this.m;
            if (this.isAffine()) {
                return 0
            }
            return I[C]
        };
        r.clone = function () {
            var I = new p();
            I.m = k.clone(this.m);
            return I
        };
        r.toArray = function () {
            var I = this.m;
            if (this.isAffine()) {
                return [I[y], I[x], I[w], I[v], I[u], I[s]]
            }
            return [I[F], I[D], I[B], I[z], I[j], I[i], I[h], I[g], I[t], I[q], I[o], I[n], I[G], I[E], I[C], I[A]]
        };
        r.fromArray = function (I) {
            this.m = Array.prototype.slice.call(I);
            return this
        };
        r.setMatrixValue = function (J) {
            J = String(J).trim();
            var I = k.create();
            if (J === "none") {
                this.m = I;
                return this
            }
            var L = J.slice(0, J.indexOf("(")), M, K;
            if (L === "matrix3d") {
                M = J.slice(9, -1).split(",");
                for (K = 0; K < M.length; K++) {
                    I[K] = parseFloat(M[K])
                }
            } else {
                if (L === "matrix") {
                    M = J.slice(7, -1).split(",");
                    for (K = M.length; K--;) {
                        M[K] = parseFloat(M[K])
                    }
                    I[F] = M[0];
                    I[D] = M[1];
                    I[G] = M[4];
                    I[j] = M[2];
                    I[i] = M[3];
                    I[E] = M[5]
                } else {
                    throw new TypeError("Invalid Matrix Value")
                }
            }
            this.m = I;
            return this
        };
        var m = function m(I) {
            return Math.abs(I) < 0.0001
        };
        r.decompose = function (T) {
            T = T || false;
            var X = k.clone(this.m);
            var O = b.create();
            var ad = b.create();
            var L = b.create();
            var Q = a.create();
            var J = a.create();
            var K = b.create();
            for (var Z = 0; Z < 16; Z++) {
                X[Z] /= X[A]
            }
            var V = k.clone(X);
            V[z] = 0;
            V[g] = 0;
            V[n] = 0;
            V[A] = 1;
            var aa = X[3], M = X[7], P = X[11], af = X[12], ae = X[13], ac = X[14], ab = X[15];
            var S = a.create();
            if (!m(X[z]) || !m(X[g]) || !m(X[n])) {
                S[0] = X[z];
                S[1] = X[g];
                S[2] = X[n];
                S[3] = X[A];
                var Y = k.invert(k.create(), V);
                var R = k.transpose(k.create(), Y);
                Q = a.transformMat4(Q, S, R)
            } else {
                Q = a.fromValues(0, 0, 0, 1)
            }
            O[0] = af;
            O[1] = ae;
            O[2] = ac;
            var N = [b.create(), b.create(), b.create()];
            N[0][0] = X[0];
            N[0][1] = X[1];
            N[0][2] = X[2];
            N[1][0] = X[4];
            N[1][1] = X[5];
            N[1][2] = X[6];
            N[2][0] = X[8];
            N[2][1] = X[9];
            N[2][2] = X[10];
            ad[0] = b.length(N[0]);
            b.normalize(N[0], N[0]);
            L[0] = b.dot(N[0], N[1]);
            N[1] = this._combine(N[1], N[0], 1, -L[0]);
            ad[1] = b.length(N[1]);
            b.normalize(N[1], N[1]);
            L[0] /= ad[1];
            L[1] = b.dot(N[0], N[2]);
            N[2] = this._combine(N[2], N[0], 1, -L[1]);
            L[2] = b.dot(N[1], N[2]);
            N[2] = this._combine(N[2], N[1], 1, -L[2]);
            ad[2] = b.length(N[2]);
            b.normalize(N[2], N[2]);
            L[1] /= ad[2];
            L[2] /= ad[2];
            var W = b.cross(b.create(), N[1], N[2]);
            if (b.dot(N[0], W) < 0) {
                for (Z = 0;
                     Z < 3; Z++) {
                    ad[Z] *= -1;
                    N[Z][0] *= -1;
                    N[Z][1] *= -1;
                    N[Z][2] *= -1
                }
            }
            J[0] = 0.5 * Math.sqrt(Math.max(1 + N[0][0] - N[1][1] - N[2][2], 0));
            J[1] = 0.5 * Math.sqrt(Math.max(1 - N[0][0] + N[1][1] - N[2][2], 0));
            J[2] = 0.5 * Math.sqrt(Math.max(1 - N[0][0] - N[1][1] + N[2][2], 0));
            J[3] = 0.5 * Math.sqrt(Math.max(1 + N[0][0] + N[1][1] + N[2][2], 0));
            if (N[2][1] > N[1][2]) {
                J[0] = -J[0]
            }
            if (N[0][2] > N[2][0]) {
                J[1] = -J[1]
            }
            if (N[1][0] > N[0][1]) {
                J[2] = -J[2]
            }
            var I = a.fromValues(J[0], J[1], J[2], 2 * Math.acos(J[3]));
            var U = this._rotationFromQuat(J);
            if (T) {
                L[0] = Math.round(L[0] * c * 100) / 100;
                L[1] = Math.round(L[1] * c * 100) / 100;
                L[2] = Math.round(L[2] * c * 100) / 100;
                U[0] = Math.round(U[0] * c * 100) / 100;
                U[1] = Math.round(U[1] * c * 100) / 100;
                U[2] = Math.round(U[2] * c * 100) / 100;
                I[3] = Math.round(I[3] * c * 100) / 100
            }
            return {translation: O, scale: ad, skew: L, perspective: Q, quaternion: J, eulerRotation: U, axisAngle: I}
        };
        r.recompose = function (O, N, K, L, M) {
            O = O || b.create();
            N = N || b.create();
            K = K || b.create();
            L = L || a.create();
            M = M || a.create();
            var J = k.fromRotationTranslation(k.create(), M, O);
            J[z] = L[0];
            J[g] = L[1];
            J[n] = L[2];
            J[A] = L[3];
            var I = k.create();
            if (K[2] !== 0) {
                I[q] = K[2];
                k.multiply(J, J, I)
            }
            if (K[1] !== 0) {
                I[q] = 0;
                I[t] = K[1];
                k.multiply(J, J, I)
            }
            if (K[0]) {
                I[t] = 0;
                I[4] = K[0];
                k.multiply(J, J, I)
            }
            k.scale(J, J, N);
            this.m = J;
            return this
        };
        r.isAffine = function () {
            return this.m[B] === 0 && this.m[z] === 0 && this.m[h] === 0 && this.m[g] === 0 && this.m[t] === 0 && this.m[q] === 0 && this.m[o] === 1 && this.m[n] === 0 && this.m[C] === 0 && this.m[A] === 1
        };
        r.toString = function () {
            var I = this.m;
            if (this.isAffine()) {
                return "matrix(" + I[y] + ", " + I[x] + ", " + I[w] + ", " + I[v] + ", " + I[u] + ", " + I[s] + ")"
            }
            return "matrix3d(" + I[F] + ", " + I[D] + ", " + I[B] + ", " + I[z] + ", " + I[j] + ", " + I[i] + ", " + I[h] + ", " + I[g] + ", " + I[t] + ", " + I[q] + ", " + I[o] + ", " + I[n] + ", " + I[G] + ", " + I[E] + ", " + I[C] + ", " + I[A] + ")"
        };
        r.toCSSString = r.toString;
        r._combine = function (J, M, L, K) {
            var I = b.create();
            I[0] = L * J[0] + K * M[0];
            I[1] = L * J[1] + K * M[1];
            I[2] = L * J[2] + K * M[2];
            return I
        };
        r._matrix2dToMat4 = function (I) {
            var K = k.create();
            for (var L = 0; L < 4; L++) {
                for (var J = 0; J < 4; J++) {
                    K[L * 4 + J] = I[L][J]
                }
            }
            return K
        };
        r._mat4ToMatrix2d = function (L) {
            var I = [];
            for (var K = 0; K < 4; K++) {
                I[K] = [];
                for (var J = 0; J < 4; J++) {
                    I[K][J] = L[K * 4 + J]
                }
            }
            return I
        };
        r._rotationFromQuat = function (I) {
            var M = I[3] * I[3];
            var L = I[0] * I[0];
            var K = I[1] * I[1];
            var J = I[2] * I[2];
            var R = L + K + J + M;
            var N = I[0] * I[1] + I[2] * I[3];
            var Q, P, O;
            if (N > 0.499 * R) {
                P = 2 * Math.atan2(I[0], I[3]);
                O = Math.PI / 2;
                Q = 0;
                return b.fromValues(Q, P, O)
            }
            if (N < -0.499 * R) {
                P = -2 * Math.atan2(I[0], I[3]);
                O = -Math.PI / 2;
                Q = 0;
                return b.fromValues(Q, P, O)
            }
            P = Math.atan2(2 * I[1] * I[3] - 2 * I[0] * I[2], L - K - J + M);
            O = Math.asin(2 * N / R);
            Q = Math.atan2(2 * I[0] * I[3] - 2 * I[1] * I[2], -L + K - J + M);
            return b.fromValues(Q, P, O)
        };
        d.exports = p
    }, {"./gl-matrix/mat4": 102, "./gl-matrix/vec3": 103, "./gl-matrix/vec4": 104}],
    102: [function (c, d, a) {
        var b = {
            create: c("gl-mat4/create"),
            rotate: c("gl-mat4/rotate"),
            rotateX: c("gl-mat4/rotateX"),
            rotateY: c("gl-mat4/rotateY"),
            rotateZ: c("gl-mat4/rotateZ"),
            scale: c("gl-mat4/scale"),
            multiply: c("gl-mat4/multiply"),
            translate: c("gl-mat4/translate"),
            invert: c("gl-mat4/invert"),
            clone: c("gl-mat4/clone"),
            transpose: c("gl-mat4/transpose"),
            identity: c("gl-mat4/identity"),
            fromRotationTranslation: c("gl-mat4/fromRotationTranslation")
        };
        d.exports = b
    }, {
        "gl-mat4/clone": 78,
        "gl-mat4/create": 79,
        "gl-mat4/fromRotationTranslation": 80,
        "gl-mat4/identity": 81,
        "gl-mat4/invert": 82,
        "gl-mat4/multiply": 83,
        "gl-mat4/rotate": 84,
        "gl-mat4/rotateX": 85,
        "gl-mat4/rotateY": 86,
        "gl-mat4/rotateZ": 87,
        "gl-mat4/scale": 88,
        "gl-mat4/translate": 89,
        "gl-mat4/transpose": 90
    }],
    103: [function (b, d, a) {
        var c = {
            create: b("gl-vec3/create"),
            dot: b("gl-vec3/dot"),
            normalize: b("gl-vec3/normalize"),
            length: b("gl-vec3/length"),
            cross: b("gl-vec3/cross"),
            fromValues: b("gl-vec3/fromValues")
        };
        d.exports = c
    }, {
        "gl-vec3/create": 91,
        "gl-vec3/cross": 92,
        "gl-vec3/dot": 93,
        "gl-vec3/fromValues": 94,
        "gl-vec3/length": 95,
        "gl-vec3/normalize": 96
    }],
    104: [function (c, d, a) {
        var b = {
            create: c("gl-vec4/create"),
            transformMat4: c("gl-vec4/transformMat4"),
            fromValues: c("gl-vec4/fromValues")
        };
        d.exports = b
    }, {"gl-vec4/create": 97, "gl-vec4/fromValues": 98, "gl-vec4/transformMat4": 99}],
    105: [function (g, d, h) {
        g("./helpers/Float32Array");
        var c = g("./helpers/transitionEnd");
        var i = g("@marcom/ac-clip").Clip;
        var k = g("./clips/ClipEasing");
        var f = g("./clips/ClipInlineCss");
        var j = g("./clips/ClipTransitionCss");

        function b(n, m, o, l) {
            if (n.nodeType) {
                if (c === undefined || l && l.inlineStyles) {
                    return new f(n, m, o, l)
                }
                return new j(n, m, o, l)
            }
            return new k(n, m, o, l)
        }

        for (var a in i) {
            if (typeof i[a] === "function" && a.substr(0, 1) !== "_") {
                b[a] = i[a].bind(i)
            }
        }
        b.to = function (n, m, o, l) {
            l = l || {};
            if (l.destroyOnComplete === undefined) {
                l.destroyOnComplete = true
            }
            return new b(n, m, o, l).play()
        };
        b.from = function (o, n, l, m) {
            m = m || {};
            m.propsFrom = l;
            if (m.destroyOnComplete === undefined) {
                m.destroyOnComplete = true
            }
            return new b(o, n, m.propsTo, m).play()
        };
        d.exports = b
    }, {
        "./clips/ClipEasing": 108,
        "./clips/ClipInlineCss": 109,
        "./clips/ClipTransitionCss": 110,
        "./helpers/Float32Array": 113,
        "./helpers/transitionEnd": 122,
        "@marcom/ac-clip": 29
    }],
    106: [function (b, c, a) {
        c.exports = b("./timeline/Timeline")
    }, {"./timeline/Timeline": 124}],
    107: [function (b, c, a) {
        c.exports = {Clip: b("./Clip"), Timeline: b("./Timeline")}
    }, {"./Clip": 105, "./Timeline": 106}],
    108: [function (b, a, c) {
        var k = b("@marcom/ac-object/clone");
        var g = b("@marcom/ac-object/create");
        var n = b("@marcom/ac-easing").createPredefined;
        var l = b("../helpers/isCssCubicBezierString");
        var f = b("../helpers/BezierCurveCssManager");
        var i = b("@marcom/ac-clip").Clip;
        var j = b("@marcom/ac-easing").Ease;

        function m(q, p, r, o) {
            if (o && l(o.ease)) {
                o.ease = f.create(o.ease).toEasingFunction()
            }
            o = o || {};
            this._propsEase = o.propsEase || {};
            i.call(this, q, p, r, o)
        }

        var h = i.prototype;
        var d = m.prototype = g(h);
        d.reset = function () {
            var p = h.reset.call(this);
            if (this._clips) {
                var o = this._clips.length;
                while (o--) {
                    this._clips[o].reset()
                }
            }
            return p
        };
        d.destroy = function () {
            if (this._clips) {
                var o = this._clips.length;
                while (o--) {
                    this._clips[o].destroy()
                }
                this._clips = null
            }
            this._eases = null;
            this._storeOnUpdate = null;
            return h.destroy.call(this)
        };
        d._prepareProperties = function () {
            var o = 0;
            var r = {};
            var p = {};
            var s = {};
            var v;
            var u;
            if (this._propsEase) {
                for (v in this._propsTo) {
                    if (this._propsTo.hasOwnProperty(v)) {
                        u = this._propsEase[v];
                        if (l(u)) {
                            u = f.create(u).toEasingFunction()
                        }
                        if (u === undefined) {
                            if (r[this._ease] === undefined) {
                                r[this._ease] = {};
                                p[this._ease] = {};
                                s[this._ease] = this._ease.easingFunction;
                                o++
                            }
                            r[this._ease][v] = this._propsTo[v];
                            p[this._ease][v] = this._propsFrom[v]
                        } else {
                            if (typeof u === "function") {
                                r[o] = {};
                                p[o] = {};
                                r[o][v] = this._propsTo[v];
                                p[o][v] = this._propsFrom[v];
                                s[o] = u;
                                o++
                            } else {
                                if (r[u] === undefined) {
                                    r[u] = {};
                                    p[u] = {};
                                    s[u] = u;
                                    o++
                                }
                                r[u][v] = this._propsTo[v];
                                p[u][v] = this._propsFrom[v]
                            }
                        }
                    }
                }
                if (o > 1) {
                    var q = k(this._options || {}, true);
                    var t = this._duration * 0.001;
                    this._storeOnUpdate = this._onUpdate;
                    this._onUpdate = this._onUpdateClips;
                    q.onStart = null;
                    q.onUpdate = null;
                    q.onDraw = null;
                    q.onComplete = null;
                    this._clips = [];
                    for (u in r) {
                        if (r.hasOwnProperty(u)) {
                            q.ease = s[u];
                            q.propsFrom = p[u];
                            this._clips.push(new i(this._target, t, r[u], q))
                        }
                    }
                    u = "linear";
                    this._propsTo = {};
                    this._propsFrom = {}
                } else {
                    for (v in s) {
                        if (s.hasOwnProperty(v)) {
                            u = s[v]
                        }
                    }
                }
                if (u !== undefined) {
                    this._ease = typeof u === "function" ? new j(u) : n(u)
                }
            }
            return h._prepareProperties.call(this)
        };
        d._onUpdateClips = function (q) {
            var o = this._direction === 1 ? q.progress() : 1 - q.progress();
            var p = this._clips.length;
            while (p--) {
                this._clips[p].progress(o)
            }
            if (typeof this._storeOnUpdate === "function") {
                this._storeOnUpdate.call(this, this)
            }
        };
        a.exports = m
    }, {
        "../helpers/BezierCurveCssManager": 112,
        "../helpers/isCssCubicBezierString": 118,
        "@marcom/ac-clip": 29,
        "@marcom/ac-easing": 66,
        "@marcom/ac-object/clone": 460,
        "@marcom/ac-object/create": 461
    }],
    109: [function (f, c, g) {
        var l = f("@marcom/ac-dom-styles/setStyle");
        var b = f("../helpers/convertToStyleObject");
        var d = f("../helpers/convertToTransitionableObjects");
        var i = f("@marcom/ac-object/create");
        var j = f("../helpers/removeTransitions");
        var m = f("./ClipEasing");

        function a(p, o, q, n) {
            n = n || {};
            this._el = p;
            this._storeOnStart = n.onStart || null;
            this._storeOnDraw = n.onDraw || null;
            this._storeOnComplete = n.onComplete || null;
            n.onStart = this._onStart;
            n.onDraw = this._onDraw;
            n.onComplete = this._onComplete;
            m.call(this, {}, o, q, n)
        }

        var k = m.prototype;
        var h = a.prototype = i(k);
        h.play = function () {
            var n = k.play.call(this);
            if (this._remainingDelay !== 0) {
                l(this._el, b(this._target))
            }
            return n
        };
        h.reset = function () {
            var n = k.reset.call(this);
            l(this._el, b(this._target));
            return n
        };
        h.destroy = function () {
            this._el = null;
            this._completeStyles = null;
            this._storeOnStart = null;
            this._storeOnDraw = null;
            this._storeOnComplete = null;
            return k.destroy.call(this)
        };
        h.target = function () {
            return this._el
        };
        h._prepareProperties = function () {
            var q = d(this._el, this._propsTo, this._propsFrom);
            this._target = q.target;
            this._propsFrom = q.propsFrom;
            this._propsTo = q.propsTo;
            j(this._el, this._target);
            var o = this._isYoyo ? this._propsFrom : this._propsTo;
            this._completeStyles = b(o);
            if (this._options.removeStylesOnComplete !== undefined) {
                var r;
                var p = this._options.removeStylesOnComplete;
                if (typeof p === "boolean" && p) {
                    for (r in this._completeStyles) {
                        if (this._completeStyles.hasOwnProperty(r)) {
                            this._completeStyles[r] = null
                        }
                    }
                } else {
                    if ((typeof p === "undefined" ? "undefined" : _typeof(p)) === "object" && p.length) {
                        var n = p.length;
                        while (n--) {
                            r = p[n];
                            if (this._completeStyles.hasOwnProperty(r)) {
                                this._completeStyles[r] = null
                            }
                        }
                    }
                }
            }
            return k._prepareProperties.call(this)
        };
        h._onStart = function (n) {
            if (this.playing() && this._direction === 1 && this._delay === 0) {
                l(this._el, b(this._propsFrom))
            }
            if (typeof this._storeOnStart === "function") {
                this._storeOnStart.call(this, this)
            }
        };
        h._onDraw = function (n) {
            l(this._el, b(this._target));
            if (typeof this._storeOnDraw === "function") {
                this._storeOnDraw.call(this, this)
            }
        };
        h._onComplete = function (n) {
            l(this._el, this._completeStyles);
            if (typeof this._storeOnComplete === "function") {
                this._storeOnComplete.call(this, this)
            }
        };
        c.exports = a
    }, {
        "../helpers/convertToStyleObject": 115,
        "../helpers/convertToTransitionableObjects": 116,
        "../helpers/removeTransitions": 119,
        "./ClipEasing": 108,
        "@marcom/ac-dom-styles/setStyle": 65,
        "@marcom/ac-object/create": 461
    }],
    110: [function (k, b, y) {
        var d = k("@marcom/ac-dom-styles/setStyle");
        var f = k("@marcom/ac-dom-styles/getStyle");
        var c = k("../helpers/convertToStyleObject");
        var p = k("../helpers/convertToTransitionableObjects");
        var x = k("@marcom/ac-object/clone");
        var n = k("@marcom/ac-object/create");
        var u = k("@marcom/ac-easing").createPredefined;
        var m = k("../helpers/isCssCubicBezierString");
        var v = k("../helpers/removeTransitions");
        var j = k("../helpers/transitionEnd");
        var o = k("../helpers/waitAnimationFrames");
        var w = k("../helpers/BezierCurveCssManager");
        var a = k("@marcom/ac-clip").Clip;
        var s = k("./ClipEasing");
        var t = k("@marcom/ac-page-visibility").PageVisibilityManager;
        var g = "ease";
        var i = "%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
        var l = "Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";

        function h(B, A, C, z) {
            z = z || {};
            this._el = B;
            this._storeEase = z.ease;
            if (typeof this._storeEase === "function") {
                throw new Error(l)
            }
            this._storeOnStart = z.onStart || null;
            this._storeOnComplete = z.onComplete || null;
            z.onStart = this._onStart.bind(this);
            z.onComplete = this._onComplete.bind(this);
            this._stylesTo = x(C, true);
            this._stylesFrom = z.propsFrom ? x(z.propsFrom, true) : {};
            this._propsEase = z.propsEase ? x(z.propsEase, true) : {};
            if (m(z.ease)) {
                z.ease = w.create(z.ease).toEasingFunction()
            }
            a.call(this, {}, A, {}, z);
            this._propsFrom = {}
        }

        var q = a.prototype;
        var r = h.prototype = n(q);
        r.play = function () {
            var z = q.play.call(this);
            if (this._direction === 1 && this.progress() === 0 && this._remainingDelay !== 0) {
                this._applyStyles(0, c(this._stylesFrom))
            }
            return z
        };
        r.reset = function () {
            var z = q.reset.call(this);
            this._stylesClip.reset();
            this._applyStyles(0, c(this._styles));
            return z
        };
        r.destroy = function () {
            t.off("changed", this._onVisibilityChanged);
            this._removeTransitionListener();
            this.off("pause", this._onPaused);
            this._onPaused();
            this._stylesClip.destroy();
            this._stylesClip = null;
            this._el = null;
            this._propsArray = null;
            this._styles = null;
            this._stylesFrom = null;
            this._stylesTo = null;
            this._completeStyles = null;
            this._storeOnStart = null;
            this._storeOnComplete = null;
            this._onTransitionEnded = null;
            return q.destroy.call(this)
        };
        r.target = function () {
            return this._el
        };
        r.duration = function (A) {
            var z = q.duration.call(this, A);
            if (A === undefined) {
                return z
            }
            if (this.playing()) {
                this.progress(this._progress)
            }
            return z
        };
        r.progress = function (z) {
            var A = q.progress.call(this, z);
            if (z === undefined) {
                return A
            }
            z = this._direction === 1 ? z : 1 - z;
            this._stylesClip.progress(z);
            this._applyStyles(0, c(this._styles));
            if (this.playing()) {
                this._isWaitingForStylesToBeApplied = true;
                o(this._setStylesAfterWaiting, 2)
            }
            return A
        };
        r._prepareProperties = function () {
            var B = p(this._el, this._stylesTo, this._stylesFrom);
            this._styles = B.target;
            this._stylesTo = B.propsTo;
            this._stylesFrom = B.propsFrom;
            var C = this._storeEase || g;
            this._eases = {};
            this._propsArray = [];
            var E;
            this._styleCompleteTo = c(this._stylesTo);
            this._styleCompleteFrom = c(this._stylesFrom);
            this._propsEaseKeys = {};
            var D;
            for (D in this._stylesTo) {
                if (this._stylesTo.hasOwnProperty(D)) {
                    this._propsArray[this._propsArray.length] = D;
                    if (this._propsEase[D] === undefined) {
                        if (this._eases[C] === undefined) {
                            E = this._convertEase(C);
                            this._eases[C] = E.css
                        }
                        this._propsEaseKeys[D] = C
                    } else {
                        if (this._eases[this._propsEase[D]] === undefined) {
                            E = this._convertEase(this._propsEase[D]);
                            this._eases[this._propsEase[D]] = E.css;
                            this._propsEaseKeys[D] = this._propsEase[D];
                            this._propsEase[D] = E.js
                        } else {
                            if (m(this._propsEase[D])) {
                                this._propsEaseKeys[D] = this._propsEase[D];
                                this._propsEase[D] = this._eases[this._propsEase[D]]["1"].toEasingFunction()
                            }
                        }
                    }
                }
            }
            this._onPaused = this._onPaused.bind(this);
            this.on("pause", this._onPaused);
            this._setOtherTransitions();
            this._currentTransitionStyles = this._otherTransitions;
            this._completeStyles = c(this._isYoyo ? this._stylesFrom : this._stylesTo);
            if (this._options.removeStylesOnComplete !== undefined) {
                var A = this._options.removeStylesOnComplete;
                if (typeof A === "boolean" && A) {
                    for (D in this._stylesTo) {
                        this._completeStyles[D] = null
                    }
                } else {
                    if ((typeof A === "undefined" ? "undefined" : _typeof(A)) === "object" && A.length) {
                        var z = A.length;
                        while (z--) {
                            this._completeStyles[A[z]] = null
                        }
                    }
                }
            }
            this._onTransitionEnded = this._onTransitionEnded.bind(this);
            this._setStylesAfterWaiting = this._setStylesAfterWaiting.bind(this);
            this._onVisibilityChanged = this._onVisibilityChanged.bind(this);
            t.on(t.CHANGED, this._onVisibilityChanged);
            this._stylesClip = new s(this._styles, 1, this._stylesTo, {
                ease: this._options.ease,
                propsFrom: this._stylesFrom,
                propsEase: this._options.propsEase
            });
            a._remove(this._stylesClip);
            return q._prepareProperties.call(this)
        };
        r._convertEase = function (B) {
            if (typeof B === "function") {
                throw new Error(l)
            }
            var z;
            var A;
            if (m(B)) {
                z = w.create(B);
                A = z.toEasingFunction()
            } else {
                var C = u(B);
                if (C.cssString === null) {
                    throw new Error(i.replace(/%EASE%/g, B))
                }
                z = w.create(C.cssString);
                A = B
            }
            return {css: {"1": z, "-1": z.reversed()}, js: A}
        };
        r._complete = function () {
            if ((this._isWaitingForStylesToBeApplied || this._isTransitionEnded || !this._isListeningForTransitionEnd) && this.progress() === 1) {
                this._isWaitingForStylesToBeApplied = false;
                q._complete.call(this)
            }
        };
        r._onTransitionEnded = function () {
            this._isTransitionEnded = true;
            this._complete()
        };
        r._addTransitionListener = function () {
            if (!this._isListeningForTransitionEnd && this._el && this._onTransitionEnded) {
                this._isListeningForTransitionEnd = true;
                this._isTransitionEnded = false;
                this._el.addEventListener(j, this._onTransitionEnded)
            }
        };
        r._removeTransitionListener = function () {
            if (this._isListeningForTransitionEnd && this._el && this._onTransitionEnded) {
                this._isListeningForTransitionEnd = false;
                this._isTransitionEnded = false;
                this._el.removeEventListener(j, this._onTransitionEnded)
            }
        };
        r._applyStyles = function (B, z) {
            if (B > 0) {
                var C = "";
                var A = {};
                var D;
                for (D in this._eases) {
                    if (this._eases.hasOwnProperty(D)) {
                        A[D] = this._eases[D][this._direction].splitAt(this.progress()).toCSSString()
                    }
                }
                for (D in this._stylesTo) {
                    if (this._stylesTo.hasOwnProperty(D)) {
                        C += D + " " + B + "ms " + A[this._propsEaseKeys[D]] + " 0ms, "
                    }
                }
                this._currentTransitionStyles = C.substr(0, C.length - 2);
                if (!this._doStylesMatchCurrentStyles(z)) {
                    this._addTransitionListener()
                } else {
                    this._removeTransitionListener()
                }
            } else {
                this._currentTransitionStyles = "";
                this._removeTransitionListener()
            }
            z.transition = this._getOtherClipTransitionStyles() + this._currentTransitionStyles;
            d(this._el, z)
        };
        r._doStylesMatchCurrentStyles = function (B) {
            var A = f.apply(this, [this._el].concat([this._propsArray]));
            var z;
            for (z in B) {
                if (B.hasOwnProperty(z) && A.hasOwnProperty(z) && B[z] !== A[z]) {
                    return false
                }
            }
            return true
        };
        r._setStylesAfterWaiting = function () {
            this._isWaitingForStylesToBeApplied = false;
            if (this.playing()) {
                var A = this._durationMs * (1 - this.progress());
                var z = this._direction > 0 ? this._styleCompleteTo : this._styleCompleteFrom;
                this._applyStyles(A, z)
            }
        };
        r._setOtherTransitions = function () {
            v(this._el, this._stylesTo);
            var z = a.getAll(this._el);
            var A = z.length;
            while (A--) {
                if (z[A] !== this && z[A].playing() && z[A]._otherTransitions && z[A]._otherTransitions.length) {
                    this._otherTransitions = z[A]._otherTransitions;
                    return
                }
            }
            this._otherTransitions = f(this._el, "transition").transition;
            if (this._otherTransitions === null || this._otherTransitions === "all 0s ease 0s") {
                this._otherTransitions = ""
            }
        };
        r._getTransitionStyles = function () {
            var z = this._getOtherClipTransitionStyles();
            if (this._otherTransitions.length) {
                z += this._otherTransitions
            } else {
                if (z.length) {
                    z = z.substr(0, z.length - 2)
                }
            }
            return z
        };
        r._getOtherClipTransitionStyles = function () {
            var B = "";
            var z = a.getAll(this._el);
            var A = z.length;
            while (A--) {
                if (z[A] !== this && z[A].playing() && z[A]._currentTransitionStyles && z[A]._currentTransitionStyles.length) {
                    B += z[A]._currentTransitionStyles + ", "
                }
            }
            return B
        };
        r._onVisibilityChanged = function (z) {
            if (this.playing() && !z.isHidden) {
                this._update({timeNow: this._getTime()});
                var A = this.progress();
                if (A < 1) {
                    this.progress(A)
                }
            }
        };
        r._onPaused = function (A) {
            var z = f.apply(this, [this._el].concat([this._propsArray]));
            z.transition = this._getTransitionStyles();
            this._removeTransitionListener();
            d(this._el, z)
        };
        r._onStart = function (z) {
            var A = this._direction === 1 && this.progress() === 0 && this._delay === 0 ? 2 : 0;
            if (A) {
                this._isWaitingForStylesToBeApplied = true;
                this._applyStyles(0, this._styleCompleteFrom)
            }
            o(this._setStylesAfterWaiting, A);
            if (typeof this._storeOnStart === "function") {
                this._storeOnStart.call(this, this)
            }
        };
        r._onComplete = function (z) {
            this._removeTransitionListener();
            this._completeStyles.transition = this._getTransitionStyles();
            d(this._el, this._completeStyles);
            if (typeof this._storeOnComplete === "function") {
                this._storeOnComplete.call(this, this)
            }
        };
        b.exports = h
    }, {
        "../helpers/BezierCurveCssManager": 112,
        "../helpers/convertToStyleObject": 115,
        "../helpers/convertToTransitionableObjects": 116,
        "../helpers/isCssCubicBezierString": 118,
        "../helpers/removeTransitions": 119,
        "../helpers/transitionEnd": 122,
        "../helpers/waitAnimationFrames": 123,
        "./ClipEasing": 108,
        "@marcom/ac-clip": 29,
        "@marcom/ac-dom-styles/getStyle": 63,
        "@marcom/ac-dom-styles/setStyle": 65,
        "@marcom/ac-easing": 66,
        "@marcom/ac-object/clone": 460,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-page-visibility": 76
    }],
    111: [function (c, d, a) {
        var g = c("@marcom/ac-easing").createBezier;

        function b(i, h) {
            this.manager = h;
            this.p1 = {x: i[0], y: i[1]};
            this.p2 = {x: i[2], y: i[3]};
            this._isLinear = this.p1.x === this.p1.y && this.p2.x === this.p2.y;
            this._cacheSplits = {}
        }

        var f = b.prototype;
        f.splitAt = function (k) {
            if (this._isLinear) {
                return this
            }
            k = Math.round(k * 40) / 40;
            if (k === 0) {
                return this
            } else {
                if (this._cacheSplits[k] !== undefined) {
                    return this._cacheSplits[k]
                }
            }
            var q = [this.p1.x, this.p2.x];
            var n = [this.p1.y, this.p2.y];
            var m = 0;
            var o = k;
            var i = 0;
            var p = 1;
            var j = this._getStartX(k, q);
            while (o !== j && m < 1000) {
                if (o < j) {
                    p = k
                } else {
                    i = k
                }
                k = i + (p - i) * 0.5;
                j = this._getStartX(k, q);
                ++m
            }
            var l = this._splitBezier(k, q, n);
            var r = this._normalize(l);
            var h = this.manager.create(r);
            this._cacheSplits[o] = h;
            return h
        };
        f.reversed = function () {
            var h = this.toArray();
            return this.manager.create([0.5 - (h[2] - 0.5), 0.5 - (h[3] - 0.5), 0.5 - (h[0] - 0.5), 0.5 - (h[1] - 0.5)])
        };
        f.toArray = function () {
            return [this.p1.x, this.p1.y, this.p2.x, this.p2.y]
        };
        f.toCSSString = function () {
            return "cubic-bezier(" + this.p1.x + ", " + this.p1.y + ", " + this.p2.x + ", " + this.p2.y + ")"
        };
        f.toEasingFunction = function () {
            return g.apply(this, this.toArray()).easingFunction
        };
        f._getStartX = function (m, h) {
            var l = m - 1;
            var k = m * m;
            var j = l * l;
            var i = k * m;
            return i - 3 * k * l * h[1] + 3 * m * j * h[0]
        };
        f._splitBezier = function (m, h, n) {
            var l = m - 1;
            var k = m * m;
            var j = l * l;
            var i = k * m;
            return [i - 3 * k * l * h[1] + 3 * m * j * h[0], i - 3 * k * l * n[1] + 3 * m * j * n[0], k - 2 * m * l * h[1] + j * h[0], k - 2 * m * l * n[1] + j * n[0], m - l * h[1], m - l * n[1]]
        };
        f._normalize = function (h) {
            return [(h[2] - h[0]) / (1 - h[0]), (h[3] - h[1]) / (1 - h[1]), (h[4] - h[0]) / (1 - h[0]), (h[5] - h[1]) / (1 - h[1])]
        };
        d.exports = b
    }, {"@marcom/ac-easing": 66}],
    112: [function (c, d, a) {
        var b = c("./BezierCurveCss");

        function g() {
            this._instances = {}
        }

        var f = g.prototype;
        f.create = function (k) {
            var j;
            if (typeof k === "string") {
                j = k.replace(/ /g, "")
            } else {
                j = "cubic-bezier(" + k.join(",") + ")"
            }
            if (this._instances[j] === undefined) {
                if (typeof k === "string") {
                    k = k.match(/\d*\.?\d+/g);
                    var h = k.length;
                    while (h--) {
                        k[h] = Number(k[h])
                    }
                }
                this._instances[j] = new b(k, this)
            }
            return this._instances[j]
        };
        d.exports = new g()
    }, {"./BezierCurveCss": 111}],
    113: [function (b, c, a) {
        if (typeof window.Float32Array === "undefined") {
            window.Float32Array = function () {
            }
        }
    }, {}],
    114: [function (f, g, d) {
        var a = f("@marcom/ac-dom-metrics/getDimensions");
        var c = f("./splitUnits");
        var b = {translateX: "width", translateY: "height"};

        function i(j, l, m) {
            this._transform = j;
            var k;
            var n;
            var o;
            for (o in m) {
                if (m.hasOwnProperty(o) && typeof this._transform[o] === "function") {
                    k = c(m[o]);
                    if (k.unit === "%") {
                        n = this._convertPercentToPixelValue(o, k.value, l)
                    } else {
                        n = k.value
                    }
                    this._transform[o].call(this._transform, n)
                }
            }
        }

        var h = i.prototype;
        h._convertPercentToPixelValue = function (m, l, k) {
            m = b[m];
            var j = a(k);
            if (j[m]) {
                l *= 0.01;
                return j[m] * l
            }
            return l
        };
        h.toArray = function () {
            return this._transform.toArray()
        };
        h.toCSSString = function () {
            return this._transform.toCSSString()
        };
        g.exports = i
    }, {"./splitUnits": 120, "@marcom/ac-dom-metrics/getDimensions": 51}],
    115: [function (b, c, a) {
        c.exports = function d(h) {
            var g = {};
            var f;
            var i;
            for (i in h) {
                if (h.hasOwnProperty(i) && h[i] !== null) {
                    if (h[i].isColor) {
                        if (h[i].isRgb) {
                            g[i] = "rgb(" + Math.round(h[i].r) + ", " + Math.round(h[i].g) + ", " + Math.round(h[i].b) + ")"
                        } else {
                            if (h[i].isRgba) {
                                g[i] = "rgba(" + Math.round(h[i].r) + ", " + Math.round(h[i].g) + ", " + Math.round(h[i].b) + ", " + h[i].a + ")"
                            }
                        }
                    } else {
                        if (i === "transform") {
                            f = h[i].length === 6 ? "matrix" : "matrix3d";
                            g[i] = f + "(" + h[i].join(",") + ")"
                        } else {
                            if (!h[i].unit) {
                                g[i] = h[i].value
                            } else {
                                g[i] = h[i].value + h[i].unit
                            }
                        }
                    }
                }
            }
            return g
        }
    }, {}],
    116: [function (h, d, j) {
        var m = h("@marcom/ac-dom-styles/getStyle");
        var o = h("@marcom/ac-object/clone");
        var f = h("./splitUnits");
        var b = h("./toCamCase");
        var c = h("@marcom/ac-color").Color;
        var l = h("@marcom/ac-feature/cssPropertyAvailable");
        var i = h("@marcom/ac-transform").Transform;
        var a = h("./TransformMatrix");
        var n = function n(s) {
            if (c.isRgba(s)) {
                s = new c(s).rgbaObject();
                s.isRgba = true
            } else {
                s = new c(s).rgbObject();
                s.isRgb = true
            }
            s.isColor = true;
            return s
        };
        var r = function r(s) {
            if (s.isRgb) {
                s.isRgb = false;
                s.isRgba = true;
                s.a = 1
            }
        };
        var q = function q(t, s, u) {
            if (t.isRgba || s.isRgba || u.isRgba) {
                r(t);
                r(s);
                r(u)
            }
        };
        var p = function p(s) {
            return [s[0], s[1], 0, 0, s[2], s[3], 0, 0, 0, 0, 1, 0, s[4], s[5], 0, 1]
        };
        var k = function k(t, s, u) {
            if (t.transform.length === 16 || s.transform.length === 16 || u.transform.length === 16) {
                if (t.transform.length === 6) {
                    t.transform = p(t.transform)
                }
                if (s.transform.length === 6) {
                    s.transform = p(s.transform)
                }
                if (u.transform.length === 6) {
                    u.transform = p(u.transform)
                }
            }
        };
        d.exports = function g(u, A, z) {
            var w = {};
            A = o(A, true);
            z = o(z, true);
            var t;
            var B;
            var x;
            var y;
            var v = l("transform");
            var s;
            for (s in A) {
                if (A.hasOwnProperty(s) && A[s] !== null) {
                    if (s === "transform") {
                        if (v) {
                            B = new i();
                            t = m(u, "transform")["transform"] || "none";
                            B.setMatrixValue(t);
                            x = new a(new i(), u, A[s])
                        }
                        if (x && x.toCSSString() !== B.toCSSString()) {
                            y = new a(z[s] ? new i() : B.clone(), u, z[s]);
                            w[s] = B.toArray();
                            A[s] = x.toArray();
                            z[s] = y.toArray()
                        } else {
                            w[s] = null;
                            A[s] = null
                        }
                    } else {
                        t = m(u, s)[b(s)] || z[s];
                        if (c.isColor(t)) {
                            w[s] = n(t);
                            z[s] = z[s] !== undefined ? n(z[s]) : o(w[s], true);
                            A[s] = n(A[s])
                        } else {
                            w[s] = f(t);
                            z[s] = z[s] !== undefined ? f(z[s]) : o(w[s], true);
                            A[s] = f(A[s])
                        }
                    }
                }
            }
            for (s in z) {
                if (z.hasOwnProperty(s) && z[s] !== null && (A[s] === undefined || A[s] === null)) {
                    if (s === "transform") {
                        if (v) {
                            B = new i();
                            B.setMatrixValue(getComputedStyle(u).transform || getComputedStyle(u).webkitTransform || "none");
                            y = new a(new i(), u, z[s])
                        }
                        if (y && y.toCSSString() !== B.toCSSString()) {
                            x = new a(B.clone());
                            w[s] = B.toArray();
                            A[s] = x.toArray();
                            z[s] = y.toArray()
                        } else {
                            w[s] = null;
                            A[s] = null;
                            z[s] = null
                        }
                    } else {
                        t = m(u, s)[b(s)];
                        if (c.isColor(t)) {
                            w[s] = n(t);
                            A[s] = o(w[s], true);
                            z[s] = n(z[s])
                        } else {
                            w[s] = f(t);
                            z[s] = f(z[s]);
                            A[s] = o(w[s], true)
                        }
                    }
                }
                if (w[s] && w[s].isColor) {
                    q(w[s], z[s], A[s])
                }
            }
            if (w.transform) {
                k(w, z, A)
            }
            return {target: w, propsTo: A, propsFrom: z}
        }
    }, {
        "./TransformMatrix": 114,
        "./splitUnits": 120,
        "./toCamCase": 121,
        "@marcom/ac-color": 31,
        "@marcom/ac-dom-styles/getStyle": 63,
        "@marcom/ac-feature/cssPropertyAvailable": 149,
        "@marcom/ac-object/clone": 460,
        "@marcom/ac-transform": 100
    }],
    117: [function (b, c, a) {
        c.exports = function d(j) {
            if (j.transitionProperty) {
                var m = "";
                var h = j.transitionProperty.split(", ");
                var k = j.transitionDuration.split(", ");
                var l = j.transitionTimingFunction.replace(/\d+[,]+[\s]/gi, function (i) {
                    return i.substr(0, i.length - 1)
                }).split(", ");
                var f = j.transitionDelay.split(", ");
                var g = h.length;
                while (g--) {
                    m += h[g] + " " + k[g] + " " + l[g] + " " + f[g] + ", "
                }
                return m.substr(0, m.length - 2)
            }
            return false
        }
    }, {}],
    118: [function (c, d, b) {
        d.exports = function a(f) {
            return typeof f === "string" && f.substr(0, 13) === "cubic-bezier("
        }
    }, {}],
    119: [function (d, f, c) {
        var h = d("@marcom/ac-dom-styles/setStyle");
        var a = d("@marcom/ac-dom-styles/getStyle");
        var g = d("./getShorthandTransition");
        f.exports = function b(l, n) {
            var m = a(l, "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay");
            m = m.transition || g(m);
            if (m && m.length) {
                m = m.split(",");
                var k = 0;
                var o;
                var j = m.length;
                while (j--) {
                    o = m[j].trim().split(" ")[0];
                    if (n[o] !== undefined) {
                        m.splice(j, 1);
                        ++k
                    }
                }
                if (k) {
                    if (m.length === 0) {
                        m = ["all"]
                    }
                    h(l, {transition: m.join(",").trim()})
                }
            }
        }
    }, {"./getShorthandTransition": 117, "@marcom/ac-dom-styles/getStyle": 63, "@marcom/ac-dom-styles/setStyle": 65}],
    120: [function (c, d, b) {
        d.exports = function a(i) {
            i = String(i);
            if (i.indexOf(" ") > -1) {
                throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
            }
            var h = /(\d*\.?\d*)(.*)/;
            var f = 1;
            if (i && i.substr(0, 1) === "-") {
                i = i.substr(1);
                f = -1
            }
            var g = String(i).match(h);
            return {value: Number(g[1]) * f, unit: g[2]}
        }
    }, {}],
    121: [function (c, d, b) {
        d.exports = function a(g) {
            var f = function f(i, j, k, h) {
                return k === 0 && h.substr(1, 3) !== "moz" ? j : j.toUpperCase()
            };
            return g.replace(/-(\w)/g, f)
        }
    }, {}],
    122: [function (d, f, c) {
        var a;
        f.exports = function b() {
            if (a) {
                return a
            }
            var g;
            var h = document.createElement("fakeelement");
            var i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (g in i) {
                if (h.style[g] !== undefined) {
                    a = i[g];
                    return a
                }
            }
        }()
    }, {}],
    123: [function (d, f, b) {
        var a = d("@marcom/ac-page-visibility").PageVisibilityManager;
        f.exports = function c(k, i) {
            if (i) {
                var j = function j(l) {
                    if (a.isHidden) {
                        setTimeout(l, 16)
                    } else {
                        window.requestAnimationFrame(l)
                    }
                };
                var h = 0;
                var g = function g() {
                    if (h === i) {
                        k.call(this)
                    } else {
                        ++h;
                        j(g)
                    }
                };
                g()
            } else {
                k.call(this)
            }
        }
    }, {"@marcom/ac-page-visibility": 76}],
    124: [function (c, a, d) {
        var h = c("@marcom/ac-object/create");
        var i = c("@marcom/ac-clip").Clip;
        var f = c("./TimelineClip");
        var b = c("./TimelineCallback");
        var l = c("./TimelineItemList");
        var k = i.prototype;

        function j(m) {
            m = m || {};
            m.ease = m.ease || "linear";
            m.destroyOnComplete = false;
            this.options = m;
            i.call(this, {t: 0}, 0, {t: 1}, m);
            this._itemList = new l()
        }

        var g = j.prototype = h(k);
        j.prototype.constructor = j;
        g._update = function (m) {
            k._update.call(this, m);
            this._render()
        };
        g.progress = function (m) {
            k.progress.call(this, m);
            if (m !== undefined) {
                this._render()
            }
            return this._progress
        };
        g._render = function () {
            if (this._itemList.length === 0) {
                return
            }
            var p = this._target.t * this._duration;
            var m = this._itemList.head;
            var n = m;
            while (n) {
                n = m.next;
                var o = p - m.position;
                m.currentTime(o);
                m = n
            }
        };
        g.addClip = function (o, n) {
            n = n === undefined ? this.duration() : n;
            var m = o._delay / 1000;
            this._itemList.append(new f(o, n + m));
            this._updateDuration()
        };
        g.addCallback = function (n, m) {
            m = m === undefined ? this.duration() : m;
            this._itemList.append(new b(n, m));
            this._updateDuration()
        };
        g.remove = function (m) {
            var n = this._itemList.getItem(m);
            if (n) {
                this._itemList.remove(n);
                this._updateDuration()
            }
        };
        g._updateDuration = function () {
            var m = this._itemList.head;
            var n = m.position + m.duration();
            this._itemList.forEach(function (p) {
                var o = p.position + p.duration();
                if (o >= n) {
                    m = p;
                    n = o
                }
            });
            this.duration(n)
        };
        g.destroy = function () {
            var m = this._itemList.head;
            while (m) {
                var n = m;
                m = n.next;
                this._itemList.remove(n)
            }
            this._duration = 0;
            return k.destroy.call(this)
        };
        a.exports = j
    }, {
        "./TimelineCallback": 125,
        "./TimelineClip": 126,
        "./TimelineItemList": 127,
        "@marcom/ac-clip": 29,
        "@marcom/ac-object/create": 461
    }],
    125: [function (b, c, a) {
        function f(h, g) {
            this.callback = h;
            this._delay = 0;
            this.position = g;
            this._hasTriggered = false;
            this.prev = null;
            this.next = null
        }

        var d = f.prototype;
        d.duration = function () {
            return 0
        };
        d.currentTime = function (g) {
            if (g >= 0 && !this._hasTriggered) {
                this.callback();
                this._hasTriggered = true
            }
            if (g < 0 && this._hasTriggered) {
                this.callback();
                this._hasTriggered = false
            }
            return 0
        };
        c.exports = f
    }, {}],
    126: [function (b, c, a) {
        function f(h, g) {
            this.clip = h;
            this.position = g;
            this.duration = this.clip.duration.bind(this.clip);
            this.lastProgress = -1;
            this.prev = null;
            this.next = null
        }

        var d = f.prototype;
        d.currentTime = function (h) {
            var g = Math.min(1, Math.max(0, h / this.clip._duration));
            if (g !== g) {
                g = 1
            }
            if (this.lastProgress === g) {
                return this.lastProgress
            }
            if (this.lastProgress === 0 || g === 0 || this.lastProgress === -1) {
                if (this.clip._storeOnStart) {
                    this.clip._storeOnStart(this.clip)
                }
            }
            this.clip._playing = g * this.clip._duration === this.clip._duration;
            this.lastProgress = this.clip.progress(g);
            return this.lastProgress
        };
        d.destroy = function () {
            this.clip.destroy();
            this.prev = null;
            this.next = null;
            this.duration = null
        };
        c.exports = f
    }, {}],
    127: [function (b, c, a) {
        var h = b("./TimelineClip");
        var f = b("./TimelineCallback");
        var g = function g() {
            this.head = null;
            this.tail = null;
            this.length = 0
        };
        var d = g.prototype;
        d.append = function (i) {
            i.prev = null;
            i.next = null;
            if (this.tail) {
                this.tail.next = i;
                i.prev = this.tail
            } else {
                this.head = i
            }
            this.tail = i;
            this.length++
        };
        d.remove = function (i) {
            if (i === this.head) {
                this.head = this.head.next
            } else {
                if (i === this.tail) {
                    this.tail = this.tail.prev
                }
            }
            if (i.prev) {
                i.prev.next = i.next
            }
            if (i.next) {
                i.next.prev = i.prev
            }
            i.next = i.prev = null;
            if (this.head === null) {
                this.tail = null
            }
            this.length--
        };
        d.getItem = function (i) {
            var j = this.head;
            while (j) {
                var k = j;
                if (k instanceof h && k.clip === i || k instanceof f && k.callback === i) {
                    return k
                }
                j = k.next
            }
            return null
        };
        d.forEach = function (m) {
            var j = 0;
            var k = this.head;
            while (k) {
                var l = k;
                m(l, j, this.length);
                k = l.next
            }
        };
        d.destroy = function () {
            while (this.head) {
                var i = this.head;
                this.remove(i);
                i.destroy()
            }
        };
        c.exports = g
    }, {"./TimelineCallback": 125, "./TimelineClip": 126}],
    128: [function (b, c, a) {
        c.exports = {EventEmitterMicro: b("./ac-event-emitter-micro/EventEmitterMicro")}
    }, {"./ac-event-emitter-micro/EventEmitterMicro": 129}],
    129: [function (b, c, a) {
        function f() {
            this._events = {}
        }

        var d = f.prototype;
        d.on = function (g, h) {
            this._events[g] = this._events[g] || [];
            this._events[g].unshift(h)
        };
        d.once = function (g, j) {
            var i = this;

            function h(k) {
                i.off(g, h);
                if (k !== undefined) {
                    j(k)
                } else {
                    j()
                }
            }

            this.on(g, h)
        };
        d.off = function (g, i) {
            if (!this.has(g)) {
                return
            }
            if (arguments.length === 1) {
                this._events[g] = null;
                delete this._events[g];
                return
            }
            var h = this._events[g].indexOf(i);
            if (h === -1) {
                return
            }
            this._events[g].splice(h, 1)
        };
        d.trigger = function (g, j) {
            if (!this.has(g)) {
                return
            }
            for (var h = this._events[g].length - 1;
                 h >= 0; h--) {
                if (j !== undefined) {
                    this._events[g][h](j)
                } else {
                    this._events[g][h]()
                }
            }
        };
        d.has = function (g) {
            if (g in this._events === false || this._events[g].length === 0) {
                return false
            }
            return true
        };
        d.destroy = function () {
            for (var g in this._events) {
                this._events[g] = null
            }
            this._events = null
        };
        c.exports = f
    }, {}],
    130: [function (c, d, b) {
        var a = function a() {
            var h = "";
            var g;
            for (g = 0; g < arguments.length; g++) {
                if (g > 0) {
                    h += ","
                }
                h += arguments[g]
            }
            return h
        };
        d.exports = function f(i, h) {
            h = h || a;
            var g = function g() {
                var j = arguments;
                var k = h.apply(this, j);
                if (!(k in g.cache)) {
                    g.cache[k] = i.apply(this, j)
                }
                return g.cache[k]
            };
            g.cache = {};
            return g
        }
    }, {}],
    131: [function (b, c, a) {
        c.exports = function d(g) {
            var f;
            return function () {
                if (typeof f === "undefined") {
                    f = g.apply(this, arguments)
                }
                return f
            }
        }
    }, {}],
    132: [function (d, b, f) {
        var g = d("./utils/eventTypeAvailable");
        var j = d("./shared/camelCasedEventTypes");
        var c = d("./shared/windowFallbackEventTypes");
        var h = d("./shared/prefixHelper");
        var a = {};
        b.exports = function i(m, l) {
            var n;
            var o;
            var k;
            l = l || "div";
            m = m.toLowerCase();
            if (!(l in a)) {
                a[l] = {}
            }
            o = a[l];
            if (m in o) {
                return o[m]
            }
            if (g(m, l)) {
                return o[m] = m
            }
            if (m in j) {
                for (k = 0; k < j[m].length;
                     k++) {
                    n = j[m][k];
                    if (g(n.toLowerCase(), l)) {
                        return o[m] = n
                    }
                }
            }
            for (k = 0; k < h.evt.length;
                 k++) {
                n = h.evt[k] + m;
                if (g(n, l)) {
                    h.reduce(k);
                    return o[m] = n
                }
            }
            if (l !== "window" && c.indexOf(m)) {
                return o[m] = i(m, "window")
            }
            return o[m] = false
        }
    }, {
        "./shared/camelCasedEventTypes": 135,
        "./shared/prefixHelper": 137,
        "./shared/windowFallbackEventTypes": 140,
        "./utils/eventTypeAvailable": 141
    }],
    133: [function (b, c, a) {
        arguments[4][54][0].apply(a, arguments)
    }, {
        "./shared/getStyleTestElement": 136,
        "./shared/prefixHelper": 137,
        "./shared/stylePropertyCache": 138,
        "./utils/toCSS": 142,
        "./utils/toDOM": 143,
        dup: 54
    }],
    134: [function (b, c, a) {
        arguments[4][55][0].apply(a, arguments)
    }, {
        "./getStyleProperty": 133,
        "./shared/prefixHelper": 137,
        "./shared/stylePropertyCache": 138,
        "./shared/styleValueAvailable": 139,
        dup: 55
    }],
    135: [function (b, c, a) {
        c.exports = {
            transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
            animationstart: ["webkitAnimationStart", "MSAnimationStart"],
            animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
            animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
            fullscreenchange: ["MSFullscreenChange"],
            fullscreenerror: ["MSFullscreenError"]
        }
    }, {}],
    136: [function (b, c, a) {
        arguments[4][56][0].apply(a, arguments)
    }, {dup: 56}],
    137: [function (b, c, a) {
        arguments[4][57][0].apply(a, arguments)
    }, {dup: 57}],
    138: [function (b, c, a) {
        arguments[4][58][0].apply(a, arguments)
    }, {dup: 58}],
    139: [function (b, c, a) {
        arguments[4][59][0].apply(a, arguments)
    }, {"./getStyleTestElement": 136, "./stylePropertyCache": 138, dup: 59}],
    140: [function (b, c, a) {
        c.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
    }, {}],
    141: [function (c, f, b) {
        var a = {window: window, document: document};
        f.exports = function d(i, g) {
            var h;
            i = "on" + i;
            if (!(g in a)) {
                a[g] = document.createElement(g)
            }
            h = a[g];
            if (i in h) {
                return true
            }
            if ("setAttribute" in h) {
                h.setAttribute(i, "return;");
                return typeof h[i] === "function"
            }
            return false
        }
    }, {}],
    142: [function (b, c, a) {
        arguments[4][61][0].apply(a, arguments)
    }, {dup: 61}],
    143: [function (b, c, a) {
        arguments[4][62][0].apply(a, arguments)
    }, {dup: 62}],
    144: [function (b, c, a) {
        c.exports = {
            canvasAvailable: b("./canvasAvailable"),
            continuousScrollEventsAvailable: b("./continuousScrollEventsAvailable"),
            cookiesAvailable: b("./cookiesAvailable"),
            cssLinearGradientAvailable: b("./cssLinearGradientAvailable"),
            cssPropertyAvailable: b("./cssPropertyAvailable"),
            cssViewportUnitsAvailable: b("./cssViewportUnitsAvailable"),
            elementAttributeAvailable: b("./elementAttributeAvailable"),
            eventTypeAvailable: b("./eventTypeAvailable"),
            isDesktop: b("./isDesktop"),
            isHandheld: b("./isHandheld"),
            isRetina: b("./isRetina"),
            isTablet: b("./isTablet"),
            localStorageAvailable: b("./localStorageAvailable"),
            mediaElementsAvailable: b("./mediaElementsAvailable"),
            mediaQueriesAvailable: b("./mediaQueriesAvailable"),
            prefersReducedMotion: b("./prefersReducedMotion"),
            sessionStorageAvailable: b("./sessionStorageAvailable"),
            svgAvailable: b("./svgAvailable"),
            threeDTransformsAvailable: b("./threeDTransformsAvailable"),
            touchAvailable: b("./touchAvailable"),
            webGLAvailable: b("./webGLAvailable")
        }
    }, {
        "./canvasAvailable": 145,
        "./continuousScrollEventsAvailable": 146,
        "./cookiesAvailable": 147,
        "./cssLinearGradientAvailable": 148,
        "./cssPropertyAvailable": 149,
        "./cssViewportUnitsAvailable": 150,
        "./elementAttributeAvailable": 151,
        "./eventTypeAvailable": 152,
        "./isDesktop": 154,
        "./isHandheld": 155,
        "./isRetina": 156,
        "./isTablet": 157,
        "./localStorageAvailable": 158,
        "./mediaElementsAvailable": 159,
        "./mediaQueriesAvailable": 160,
        "./prefersReducedMotion": 161,
        "./sessionStorageAvailable": 162,
        "./svgAvailable": 163,
        "./threeDTransformsAvailable": 164,
        "./touchAvailable": 165,
        "./webGLAvailable": 166
    }],
    145: [function (b, c, a) {
        var g = b("./helpers/globals");
        var f = b("@marcom/ac-function/once");
        var d = function d() {
            var h = g.getDocument();
            var i = h.createElement("canvas");
            return !!(typeof i.getContext === "function" && i.getContext("2d"))
        };
        c.exports = f(d);
        c.exports.original = d
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    146: [function (c, f, b) {
        var d = c("@marcom/ac-useragent");
        var a = c("./touchAvailable").original;
        var g = c("@marcom/ac-function/once");

        function h() {
            return !a() || d.os.ios && d.os.version.major >= 8 || d.browser.chrome
        }

        f.exports = g(h);
        f.exports.original = h
    }, {"./touchAvailable": 165, "@marcom/ac-function/once": 131, "@marcom/ac-useragent": 522}],
    147: [function (c, d, b) {
        var g = c("./helpers/globals");
        var f = c("@marcom/ac-function/once");

        function a() {
            var k = false;
            var h = g.getDocument();
            var j = g.getNavigator();
            try {
                if ("cookie" in h && !!j.cookieEnabled) {
                    h.cookie = "ac_feature_cookie=1";
                    k = h.cookie.indexOf("ac_feature_cookie") !== -1;
                    h.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                }
            } catch (i) {
            }
            return k
        }

        d.exports = f(a);
        d.exports.original = a
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    148: [function (c, d, b) {
        var g = c("@marcom/ac-prefixer/getStyleValue");
        var f = c("@marcom/ac-function/once");

        function a() {
            var h = ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"];
            return h.some(function (i) {
                return !!g("background-image", i)
            })
        }

        d.exports = f(a);
        d.exports.original = a
    }, {"@marcom/ac-function/once": 131, "@marcom/ac-prefixer/getStyleValue": 134}],
    149: [function (c, d, b) {
        var g = c("@marcom/ac-prefixer/getStyleValue");
        var f = c("@marcom/ac-prefixer/getStyleProperty");
        var h = c("@marcom/ac-function/memoize");

        function a(j, i) {
            if (typeof i !== "undefined") {
                return !!g(j, i)
            } else {
                return !!f(j)
            }
        }

        d.exports = h(a);
        d.exports.original = a
    }, {
        "@marcom/ac-function/memoize": 130,
        "@marcom/ac-prefixer/getStyleProperty": 133,
        "@marcom/ac-prefixer/getStyleValue": 134
    }],
    150: [function (b, c, a) {
        var f = b("@marcom/ac-prefixer/getStyleValue");
        var d = b("@marcom/ac-function/once");

        function g() {
            return !!f("margin", "1vw 1vh")
        }

        c.exports = d(g);
        c.exports.original = g
    }, {"@marcom/ac-function/once": 131, "@marcom/ac-prefixer/getStyleValue": 134}],
    151: [function (b, d, a) {
        var f = b("./helpers/globals");
        var g = b("@marcom/ac-function/memoize");

        function c(h, j) {
            var i = f.getDocument();
            var k;
            j = j || "div";
            k = i.createElement(j);
            return h in k
        }

        d.exports = g(c);
        d.exports.original = c
    }, {"./helpers/globals": 153, "@marcom/ac-function/memoize": 130}],
    152: [function (c, f, b) {
        var a = c("@marcom/ac-prefixer/getEventType");
        var g = c("@marcom/ac-function/memoize");

        function d(i, h) {
            return !!a(i, h)
        }

        f.exports = g(d);
        f.exports.original = d
    }, {"@marcom/ac-function/memoize": 130, "@marcom/ac-prefixer/getEventType": 132}],
    153: [function (b, d, a) {
        d.exports = {
            getWindow: function c() {
                return window
            }, getDocument: function f() {
                return document
            }, getNavigator: function g() {
                return navigator
            }
        }
    }, {}],
    154: [function (d, f, b) {
        var a = d("./touchAvailable").original;
        var h = d("./helpers/globals");
        var g = d("@marcom/ac-function/once");

        function c() {
            var i = h.getWindow();
            return !a() && !i.orientation
        }

        f.exports = g(c);
        f.exports.original = c
    }, {"./helpers/globals": 153, "./touchAvailable": 165, "@marcom/ac-function/once": 131}],
    155: [function (f, g, c) {
        var d = f("./isDesktop").original;
        var a = f("./isTablet").original;
        var h = f("@marcom/ac-function/once");

        function b() {
            return !d() && !a()
        }

        g.exports = h(b);
        g.exports.original = b
    }, {"./isDesktop": 154, "./isTablet": 157, "@marcom/ac-function/once": 131}],
    156: [function (b, c, a) {
        var d = b("./helpers/globals");
        c.exports = function f() {
            var g = d.getWindow();
            return "devicePixelRatio" in g && g.devicePixelRatio >= 1.5
        }
    }, {"./helpers/globals": 153}],
    157: [function (f, g, c) {
        var d = f("./isDesktop").original;
        var i = f("./helpers/globals");
        var h = f("@marcom/ac-function/once");
        var b = 600;

        function a() {
            var k = i.getWindow();
            var j = k.screen.width;
            if (k.orientation && k.screen.height < j) {
                j = k.screen.height
            }
            return !d() && j >= b
        }

        g.exports = h(a);
        g.exports.original = a
    }, {"./helpers/globals": 153, "./isDesktop": 154, "@marcom/ac-function/once": 131}],
    158: [function (c, d, a) {
        var g = c("./helpers/globals");
        var f = c("@marcom/ac-function/once");

        function b() {
            var j = g.getWindow();
            var i = false;
            try {
                i = !!(j.localStorage && j.localStorage.non_existent !== null)
            } catch (h) {
            }
            return i
        }

        d.exports = f(b);
        d.exports.original = b
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    159: [function (b, c, a) {
        var g = b("./helpers/globals");
        var d = b("@marcom/ac-function/once");

        function f() {
            var h = g.getWindow();
            return "HTMLMediaElement" in h
        }

        c.exports = d(f);
        c.exports.original = f
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    160: [function (c, d, b) {
        c("@marcom/ac-polyfills/matchMedia");
        var g = c("./helpers/globals");
        var f = c("@marcom/ac-function/once");

        function a() {
            var i = g.getWindow();
            var h = i.matchMedia("only all");
            return !!(h && h.matches)
        }

        d.exports = f(a);
        d.exports.original = a
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131, "@marcom/ac-polyfills/matchMedia": 498}],
    161: [function (b, c, a) {
        var f = b("./helpers/globals");

        function d() {
            var h = f.getWindow();
            var g = h.matchMedia("(prefers-reduced-motion)");
            return !!(g && g.matches)
        }

        c.exports = d
    }, {"./helpers/globals": 153}],
    162: [function (c, d, b) {
        var g = c("./helpers/globals");
        var f = c("@marcom/ac-function/once");

        function a() {
            var j = g.getWindow();
            var h = false;
            try {
                if ("sessionStorage" in j && typeof j.sessionStorage.setItem === "function") {
                    j.sessionStorage.setItem("ac_feature", "test");
                    h = true;
                    j.sessionStorage.removeItem("ac_feature", "test")
                }
            } catch (i) {
            }
            return h
        }

        d.exports = f(a);
        d.exports.original = a
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    163: [function (c, d, b) {
        var g = c("./helpers/globals");
        var f = c("@marcom/ac-function/once");

        function a() {
            var h = g.getDocument();
            return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }

        d.exports = f(a);
        d.exports.original = a
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    164: [function (b, c, a) {
        var g = b("@marcom/ac-prefixer/getStyleValue");
        var d = b("@marcom/ac-function/once");

        function f() {
            return !!(g("perspective", "1px") && g("transform", "translateZ(0)"))
        }

        c.exports = d(f);
        c.exports.original = f
    }, {"@marcom/ac-function/once": 131, "@marcom/ac-prefixer/getStyleValue": 134}],
    165: [function (c, d, b) {
        var g = c("./helpers/globals");
        var f = c("@marcom/ac-function/once");

        function a() {
            var j = g.getWindow();
            var h = g.getDocument();
            var i = g.getNavigator();
            return !!("ontouchstart" in j || j.DocumentTouch && h instanceof j.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
        }

        d.exports = f(a);
        d.exports.original = a
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    166: [function (c, d, b) {
        var g = c("./helpers/globals");
        var f = c("@marcom/ac-function/once");

        function a() {
            var h = g.getDocument();
            var i = h.createElement("canvas");
            if (typeof i.getContext === "function") {
                return !!(i.getContext("webgl") || i.getContext("experimental-webgl"))
            }
            return false
        }

        d.exports = f(a);
        d.exports.original = a
    }, {"./helpers/globals": 153, "@marcom/ac-function/once": 131}],
    167: [function (b, c, a) {
        b("@marcom/ac-polyfills/Array/prototype.slice");
        b("@marcom/ac-polyfills/Element/prototype.classList");
        var d = b("./className/add");
        c.exports = function f() {
            var j = Array.prototype.slice.call(arguments);
            var h = j.shift(j);
            var g;
            if (h.classList && h.classList.add) {
                h.classList.add.apply(h.classList, j);
                return
            }
            for (g = 0; g < j.length; g++) {
                d(h, j[g])
            }
        }
    }, {
        "./className/add": 169,
        "@marcom/ac-polyfills/Array/prototype.slice": 487,
        "@marcom/ac-polyfills/Element/prototype.classList": 491
    }],
    168: [function (b, c, a) {
        c.exports = {add: b("./className/add"), contains: b("./className/contains"), remove: b("./className/remove")}
    }, {"./className/add": 169, "./className/contains": 170, "./className/remove": 172}],
    169: [function (b, c, a) {
        var d = b("./contains");
        c.exports = function f(h, g) {
            if (!d(h, g)) {
                h.className += " " + g
            }
        }
    }, {"./contains": 170}],
    170: [function (b, c, a) {
        var f = b("./getTokenRegExp");
        c.exports = function d(h, g) {
            return f(g).test(h.className)
        }
    }, {"./getTokenRegExp": 171}],
    171: [function (b, c, a) {
        c.exports = function d(f) {
            return new RegExp("(\\s|^)" + f + "(\\s|$)")
        }
    }, {}],
    172: [function (c, d, b) {
        var f = c("./contains");
        var g = c("./getTokenRegExp");
        d.exports = function a(i, h) {
            if (f(i, h)) {
                i.className = i.className.replace(g(h), "$1").trim()
            }
        }
    }, {"./contains": 170, "./getTokenRegExp": 171}],
    173: [function (b, d, a) {
        b("@marcom/ac-polyfills/Element/prototype.classList");
        var f = b("./className/contains");
        d.exports = function c(h, g) {
            if (h.classList && h.classList.contains) {
                return h.classList.contains(g)
            }
            return f(h, g)
        }
    }, {"./className/contains": 170, "@marcom/ac-polyfills/Element/prototype.classList": 491}],
    174: [function (b, c, a) {
        c.exports = {add: b("./add"), contains: b("./contains"), remove: b("./remove"), toggle: b("./toggle")}
    }, {"./add": 167, "./contains": 173, "./remove": 175, "./toggle": 176}],
    175: [function (d, f, c) {
        d("@marcom/ac-polyfills/Array/prototype.slice");
        d("@marcom/ac-polyfills/Element/prototype.classList");
        var b = d("./className/remove");
        f.exports = function a() {
            var j = Array.prototype.slice.call(arguments);
            var h = j.shift(j);
            var g;
            if (h.classList && h.classList.remove) {
                h.classList.remove.apply(h.classList, j);
                return
            }
            for (g = 0; g < j.length; g++) {
                b(h, j[g])
            }
        }
    }, {
        "./className/remove": 172,
        "@marcom/ac-polyfills/Array/prototype.slice": 487,
        "@marcom/ac-polyfills/Element/prototype.classList": 491
    }],
    176: [function (c, d, b) {
        c("@marcom/ac-polyfills/Element/prototype.classList");
        var f = c("./className");
        d.exports = function a(j, i, k) {
            var h = typeof k !== "undefined";
            var g;
            if (j.classList && j.classList.toggle) {
                if (h) {
                    return j.classList.toggle(i, k)
                }
                return j.classList.toggle(i)
            }
            if (h) {
                g = !!k
            } else {
                g = !f.contains(j, i)
            }
            if (g) {
                f.add(j, i)
            } else {
                f.remove(j, i)
            }
            return g
        }
    }, {"./className": 168, "@marcom/ac-polyfills/Element/prototype.classList": 491}],
    177: [function (c, d, b) {
        var g = c("./utils/addEventListener");
        var a = c("./shared/getEventType");
        d.exports = function f(k, i, j, h) {
            i = a(k, i);
            return g(k, i, j, h)
        }
    }, {"./shared/getEventType": 187, "./utils/addEventListener": 191}],
    178: [function (d, f, c) {
        var a = d("./utils/dispatchEvent");
        var b = d("./shared/getEventType");
        f.exports = function g(j, i, h) {
            i = b(j, i);
            return a(j, i, h)
        }
    }, {"./shared/getEventType": 187, "./utils/dispatchEvent": 192}],
    179: [function (b, c, a) {
        c.exports = {
            addEventListener: b("./addEventListener"),
            dispatchEvent: b("./dispatchEvent"),
            preventDefault: b("./preventDefault"),
            removeEventListener: b("./removeEventListener"),
            stop: b("./stop"),
            stopPropagation: b("./stopPropagation"),
            target: b("./target")
        }
    }, {
        "./addEventListener": 177,
        "./dispatchEvent": 178,
        "./preventDefault": 185,
        "./removeEventListener": 186,
        "./stop": 188,
        "./stopPropagation": 189,
        "./target": 190
    }],
    180: [function (b, c, a) {
        arguments[4][132][0].apply(a, arguments)
    }, {
        "./shared/camelCasedEventTypes": 181,
        "./shared/prefixHelper": 182,
        "./shared/windowFallbackEventTypes": 183,
        "./utils/eventTypeAvailable": 184,
        dup: 132
    }],
    181: [function (b, c, a) {
        arguments[4][135][0].apply(a, arguments)
    }, {dup: 135}],
    182: [function (b, c, a) {
        arguments[4][57][0].apply(a, arguments)
    }, {dup: 57}],
    183: [function (b, c, a) {
        arguments[4][140][0].apply(a, arguments)
    }, {dup: 140}],
    184: [function (b, c, a) {
        arguments[4][141][0].apply(a, arguments)
    }, {dup: 141}],
    185: [function (c, d, a) {
        d.exports = function b(f) {
            f = f || window.event;
            if (f.preventDefault) {
                f.preventDefault()
            } else {
                f.returnValue = false
            }
        }
    }, {}],
    186: [function (d, f, c) {
        var b = d("./utils/removeEventListener");
        var a = d("./shared/getEventType");
        f.exports = function g(k, i, j, h) {
            i = a(k, i);
            return b(k, i, j, h)
        }
    }, {"./shared/getEventType": 187, "./utils/removeEventListener": 193}],
    187: [function (c, f, b) {
        var d = c("@marcom/ac-prefixer/getEventType");
        f.exports = function a(j, i) {
            var h;
            var g;
            if ("tagName" in j) {
                h = j.tagName
            } else {
                if (j === window) {
                    h = "window"
                } else {
                    h = "document"
                }
            }
            g = d(i, h);
            if (g) {
                return g
            }
            return i
        }
    }, {"@marcom/ac-prefixer/getEventType": 180}],
    188: [function (d, g, b) {
        var a = d("./stopPropagation");
        var c = d("./preventDefault");
        g.exports = function f(h) {
            h = h || window.event;
            a(h);
            c(h);
            h.stopped = true;
            h.returnValue = false
        }
    }, {"./preventDefault": 185, "./stopPropagation": 189}],
    189: [function (c, d, b) {
        d.exports = function a(f) {
            f = f || window.event;
            if (f.stopPropagation) {
                f.stopPropagation()
            } else {
                f.cancelBubble = true
            }
        }
    }, {}],
    190: [function (b, c, a) {
        c.exports = function d(f) {
            f = f || window.event;
            return typeof f.target !== "undefined" ? f.target : f.srcElement
        }
    }, {}],
    191: [function (b, c, a) {
        c.exports = function d(i, g, h, f) {
            if (i.addEventListener) {
                i.addEventListener(g, h, !!f)
            } else {
                i.attachEvent("on" + g, h)
            }
            return i
        }
    }, {}],
    192: [function (b, c, a) {
        b("@marcom/ac-polyfills/CustomEvent");
        c.exports = function d(i, h, g) {
            var f;
            if (i.dispatchEvent) {
                if (g) {
                    f = new CustomEvent(h, g)
                } else {
                    f = new CustomEvent(h)
                }
                i.dispatchEvent(f)
            } else {
                f = document.createEventObject();
                if (g && "detail" in g) {
                    f.detail = g.detail
                }
                i.fireEvent("on" + h, f)
            }
            return i
        }
    }, {"@marcom/ac-polyfills/CustomEvent": 489}],
    193: [function (b, c, a) {
        c.exports = function d(i, g, h, f) {
            if (i.removeEventListener) {
                i.removeEventListener(g, h, !!f)
            } else {
                i.detachEvent("on" + g, h)
            }
            return i
        }
    }, {}],
    194: [function (d, f, c) {
        var b = d("./utils/getBoundingClientRect");
        f.exports = function a(g, i) {
            var h = 1;
            if (i) {
                h = b(g).width / g.offsetWidth
            }
            return {width: g.scrollWidth * h, height: g.scrollHeight * h}
        }
    }, {"./utils/getBoundingClientRect": 204}],
    195: [function (b, c, a) {
        arguments[4][51][0].apply(a, arguments)
    }, {"./utils/getBoundingClientRect": 204, dup: 51}],
    196: [function (g, h, f) {
        var c = g("./getDimensions");
        var d = g("./utils/getBoundingClientRect");
        var b = g("./getScrollX");
        var a = g("./getScrollY");
        h.exports = function i(j, o) {
            var l;
            var n;
            var m;
            var k;
            if (o) {
                l = d(j);
                n = b();
                m = a();
                return {top: l.top + m, right: l.right + n, bottom: l.bottom + m, left: l.left + n}
            }
            k = c(j, o);
            l = {top: j.offsetTop, left: j.offsetLeft, width: k.width, height: k.height};
            while (j = j.offsetParent) {
                l.top += j.offsetTop;
                l.left += j.offsetLeft
            }
            return {top: l.top, right: l.left + l.width, bottom: l.top + l.height, left: l.left}
        }
    }, {"./getDimensions": 195, "./getScrollX": 200, "./getScrollY": 201, "./utils/getBoundingClientRect": 204}],
    197: [function (c, f, b) {
        var a = c("./getDimensions");
        var g = c("./getPixelsInViewport");
        f.exports = function d(j, k) {
            var i = g(j, k);
            var h = a(j, k).height;
            return i / h
        }
    }, {"./getDimensions": 195, "./getPixelsInViewport": 198}],
    198: [function (c, d, b) {
        var a = c("./getViewportPosition");
        d.exports = function f(h, k) {
            var j = document.documentElement.clientHeight;
            var g = a(h, k);
            var i;
            if (g.top >= j || g.bottom <= 0) {
                return 0
            }
            i = g.bottom - g.top;
            if (g.top < 0) {
                i += g.top
            }
            if (g.bottom > j) {
                i -= g.bottom - j
            }
            return i
        }
    }, {"./getViewportPosition": 202}],
    199: [function (d, f, c) {
        var a = d("./getDimensions");
        var b = d("./utils/getBoundingClientRect");
        f.exports = function g(i, l) {
            var k;
            var h;
            var j;
            if (l) {
                k = b(i);
                if (i.offsetParent) {
                    h = b(i.offsetParent);
                    k.top -= h.top;
                    k.left -= h.left
                }
            } else {
                j = a(i, l);
                k = {top: i.offsetTop, left: i.offsetLeft, width: j.width, height: j.height}
            }
            return {top: k.top, right: k.left + k.width, bottom: k.top + k.height, left: k.left}
        }
    }, {"./getDimensions": 195, "./utils/getBoundingClientRect": 204}],
    200: [function (c, d, b) {
        d.exports = function a(f) {
            var g;
            f = f || window;
            if (f === window) {
                g = window.pageXOffset;
                if (!g) {
                    f = document.documentElement || document.body.parentNode || document.body
                } else {
                    return g
                }
            }
            return f.scrollLeft
        }
    }, {}],
    201: [function (c, d, b) {
        d.exports = function a(f) {
            var g;
            f = f || window;
            if (f === window) {
                g = window.pageYOffset;
                if (!g) {
                    f = document.documentElement || document.body.parentNode || document.body
                } else {
                    return g
                }
            }
            return f.scrollTop
        }
    }, {}],
    202: [function (g, h, f) {
        var i = g("./getPagePosition");
        var d = g("./utils/getBoundingClientRect");
        var c = g("./getScrollX");
        var b = g("./getScrollY");
        h.exports = function a(k, n) {
            var j;
            var m;
            var l;
            if (n) {
                j = d(k);
                return {top: j.top, right: j.right, bottom: j.bottom, left: j.left}
            }
            j = i(k);
            m = c();
            l = b();
            return {top: j.top - l, right: j.right - m, bottom: j.bottom - l, left: j.left - m}
        }
    }, {"./getPagePosition": 196, "./getScrollX": 200, "./getScrollY": 201, "./utils/getBoundingClientRect": 204}],
    203: [function (b, d, a) {
        var g = b("./getPixelsInViewport");
        var c = b("./getPercentInViewport");
        d.exports = function f(j, k, h) {
            var i;
            h = h || 0;
            if (typeof h === "string" && h.slice(-2) === "px") {
                h = parseInt(h, 10);
                i = g(j, k)
            } else {
                i = c(j, k)
            }
            return i > 0 && i >= h
        }
    }, {"./getPercentInViewport": 197, "./getPixelsInViewport": 198}],
    204: [function (b, c, a) {
        arguments[4][52][0].apply(a, arguments)
    }, {dup: 52}],
    205: [function (b, c, a) {
        arguments[4][53][0].apply(a, arguments)
    }, {"./getStyleProperty": 206, "./getStyleValue": 207, "./shared/stylePropertyCache": 210, dup: 53}],
    206: [function (b, c, a) {
        arguments[4][54][0].apply(a, arguments)
    }, {
        "./shared/getStyleTestElement": 208,
        "./shared/prefixHelper": 209,
        "./shared/stylePropertyCache": 210,
        "./utils/toCSS": 213,
        "./utils/toDOM": 214,
        dup: 54
    }],
    207: [function (b, c, a) {
        arguments[4][55][0].apply(a, arguments)
    }, {
        "./getStyleProperty": 206,
        "./shared/prefixHelper": 209,
        "./shared/stylePropertyCache": 210,
        "./shared/styleValueAvailable": 211,
        dup: 55
    }],
    208: [function (b, c, a) {
        arguments[4][56][0].apply(a, arguments)
    }, {dup: 56}],
    209: [function (b, c, a) {
        arguments[4][57][0].apply(a, arguments)
    }, {dup: 57}],
    210: [function (b, c, a) {
        arguments[4][58][0].apply(a, arguments)
    }, {dup: 58}],
    211: [function (b, c, a) {
        arguments[4][59][0].apply(a, arguments)
    }, {"./getStyleTestElement": 208, "./stylePropertyCache": 210, dup: 59}],
    212: [function (b, c, a) {
        arguments[4][60][0].apply(a, arguments)
    }, {dup: 60}],
    213: [function (b, c, a) {
        arguments[4][61][0].apply(a, arguments)
    }, {dup: 61}],
    214: [function (b, c, a) {
        arguments[4][62][0].apply(a, arguments)
    }, {dup: 62}],
    215: [function (b, c, a) {
        c.exports = {getStyle: b("./getStyle"), setStyle: b("./setStyle")}
    }, {"./getStyle": 216, "./setStyle": 218}],
    216: [function (b, c, a) {
        arguments[4][63][0].apply(a, arguments)
    }, {"@marcom/ac-prefixer/getStyleProperty": 206, "@marcom/ac-prefixer/stripPrefixes": 212, dup: 63}],
    217: [function (b, c, a) {
        arguments[4][64][0].apply(a, arguments)
    }, {dup: 64}],
    218: [function (b, c, a) {
        arguments[4][65][0].apply(a, arguments)
    }, {
        "./internal/normalizeValue": 217,
        "@marcom/ac-prefixer/getStyleCSS": 205,
        "@marcom/ac-prefixer/getStyleProperty": 206,
        dup: 65
    }],
    219: [function (b, c, a) {
        c.exports = function d(f, h) {
            var g = null;
            return function () {
                if (g === null) {
                    f.apply(this, arguments);
                    g = setTimeout(function () {
                        g = null
                    }, h)
                }
            }
        }
    }, {}],
    220: [function (d, c, g) {
        var m = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var j = d("@marcom/ac-dom-events/utils/addEventListener");
        var b = d("@marcom/ac-dom-events/utils/removeEventListener");
        var i = d("@marcom/ac-object/create");
        var f = d("./internal/KeyEvent");
        var k = "keydown";
        var l = "keyup";

        function a(n) {
            this._keysDown = {};
            this._DOMKeyDown = this._DOMKeyDown.bind(this);
            this._DOMKeyUp = this._DOMKeyUp.bind(this);
            this._context = n || document;
            j(this._context, k, this._DOMKeyDown, true);
            j(this._context, l, this._DOMKeyUp, true);
            m.call(this)
        }

        var h = a.prototype = i(m.prototype);
        h.onDown = function (n, o) {
            return this.on(k + ":" + n, o)
        };
        h.onceDown = function (n, o) {
            return this.once(k + ":" + n, o)
        };
        h.offDown = function (n, o) {
            return this.off(k + ":" + n, o)
        };
        h.onUp = function (n, o) {
            return this.on(l + ":" + n, o)
        };
        h.onceUp = function (n, o) {
            return this.once(l + ":" + n, o)
        };
        h.offUp = function (n, o) {
            return this.off(l + ":" + n, o)
        };
        h.isDown = function (n) {
            n += "";
            return this._keysDown[n] || false
        };
        h.isUp = function (n) {
            return !this.isDown(n)
        };
        h.destroy = function () {
            b(this._context, k, this._DOMKeyDown, true);
            b(this._context, l, this._DOMKeyUp, true);
            this._keysDown = null;
            this._context = null;
            m.prototype.destroy.call(this);
            return this
        };
        h._DOMKeyDown = function (o) {
            var n = this._normalizeKeyboardEvent(o);
            var p = n.keyCode += "";
            this._trackKeyDown(p);
            this.trigger(k + ":" + p, n)
        };
        h._DOMKeyUp = function (o) {
            var n = this._normalizeKeyboardEvent(o);
            var p = n.keyCode += "";
            this._trackKeyUp(p);
            this.trigger(l + ":" + p, n)
        };
        h._normalizeKeyboardEvent = function (n) {
            return new f(n)
        };
        h._trackKeyUp = function (n) {
            if (this._keysDown[n]) {
                this._keysDown[n] = false
            }
        };
        h._trackKeyDown = function (n) {
            if (!this._keysDown[n]) {
                this._keysDown[n] = true
            }
        };
        c.exports = a
    }, {
        "./internal/KeyEvent": 222,
        "@marcom/ac-dom-events/utils/addEventListener": 191,
        "@marcom/ac-dom-events/utils/removeEventListener": 193,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-object/create": 461
    }],
    221: [function (c, d, b) {
        var a = c("./Keyboard");
        d.exports = new a()
    }, {"./Keyboard": 220}],
    222: [function (f, g, c) {
        var a = ["keyLocation"];

        function h(i) {
            this.originalEvent = i;
            var j;
            for (j in i) {
                if (a.indexOf(j) === -1 && typeof i[j] !== "function") {
                    this[j] = i[j]
                }
            }
            this.location = this.originalEvent.location !== undefined ? this.originalEvent.location : this.originalEvent.keyLocation
        }

        h.prototype = {
            preventDefault: function d() {
                if (typeof this.originalEvent.preventDefault !== "function") {
                    this.originalEvent.returnValue = false;
                    return
                }
                return this.originalEvent.preventDefault()
            }, stopPropagation: function b() {
                return this.originalEvent.stopPropagation()
            }
        };
        g.exports = h
    }, {}],
    223: [function (b, c, a) {
        c.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTRAPHE: 222,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191
        }
    }, {}],
    224: [function (b, c, a) {
        arguments[4][76][0].apply(a, arguments)
    }, {"./ac-page-visibility/PageVisibilityManager": 225, dup: 76}],
    225: [function (b, c, a) {
        arguments[4][77][0].apply(a, arguments)
    }, {"@marcom/ac-event-emitter-micro": 128, "@marcom/ac-object/create": 461, dup: 77}],
    226: [function (d, f, b) {
        var g = d("./ac-browser/BrowserData");
        var a = /applewebkit/i;
        var h = d("./ac-browser/IE");
        var c = g.create();
        c.isWebKit = function (i) {
            var j = i || window.navigator.userAgent;
            return j ? !!a.test(j) : false
        };
        c.lowerCaseUserAgent = navigator.userAgent.toLowerCase();
        if (c.name === "IE") {
            c.IE = {documentMode: h.getDocumentMode()}
        }
        f.exports = c
    }, {"./ac-browser/BrowserData": 227, "./ac-browser/IE": 228}],
    227: [function (f, c, j) {
        f("@marcom/ac-polyfills/Array/prototype.filter");
        f("@marcom/ac-polyfills/Array/prototype.some");
        var b = f("./data");

        function l() {
        }

        l.prototype = {
            __getBrowserVersion: function m(o, p) {
                var n;
                if (!o || !p) {
                    return
                }
                var q = b.browser.filter(function (r) {
                    return r.identity === p
                });
                q.some(function (t) {
                    var r = t.versionSearch || p;
                    var s = o.indexOf(r);
                    if (s > -1) {
                        n = parseFloat(o.substring(s + r.length + 1));
                        return true
                    }
                });
                return n
            }, __getName: function g(n) {
                return this.__getIdentityStringFromArray(n)
            }, __getIdentity: function h(n) {
                if (n.string) {
                    return this.__matchSubString(n)
                } else {
                    if (n.prop) {
                        return n.identity
                    }
                }
            }, __getIdentityStringFromArray: function a(n) {
                for (var q = 0, o = n.length, p; q < o; q++) {
                    p = this.__getIdentity(n[q]);
                    if (p) {
                        return p
                    }
                }
            }, __getOS: function k(n) {
                return this.__getIdentityStringFromArray(n)
            }, __getOSVersion: function i(p, s) {
                if (!p || !s) {
                    return
                }
                var r = b.os.filter(function (t) {
                    return t.identity === s
                })[0];
                var n = r.versionSearch || s;
                var q = new RegExp(n + " ([\\d_\\.]+)", "i");
                var o = p.match(q);
                if (o !== null) {
                    return o[1].replace(/_/g, ".")
                }
            }, __matchSubString: function d(o) {
                var n = o.subString;
                if (n) {
                    var p = n.test ? !!n.test(o.string) : o.string.indexOf(n) > -1;
                    if (p) {
                        return o.identity
                    }
                }
            }
        };
        l.create = function () {
            var n = new l();
            var o = {};
            o.name = n.__getName(b.browser);
            o.version = n.__getBrowserVersion(b.versionString, o.name);
            o.os = n.__getOS(b.os);
            o.osVersion = n.__getOSVersion(b.versionString, o.os);
            return o
        };
        c.exports = l
    }, {
        "./data": 229,
        "@marcom/ac-polyfills/Array/prototype.filter": 484,
        "@marcom/ac-polyfills/Array/prototype.some": 488
    }],
    228: [function (b, d, a) {
        d.exports = {
            getDocumentMode: function c() {
                var f;
                if (document.documentMode) {
                    f = parseInt(document.documentMode, 10)
                } else {
                    f = 5;
                    if (document.compatMode) {
                        if (document.compatMode === "CSS1Compat") {
                            f = 7
                        }
                    }
                }
                return f
            }
        }
    }, {}],
    229: [function (b, c, a) {
        c.exports = {
            browser: [{
                string: window.navigator.userAgent,
                subString: "Edge",
                identity: "Edge"
            }, {
                string: window.navigator.userAgent,
                subString: /silk/i,
                identity: "Silk"
            }, {
                string: window.navigator.userAgent,
                subString: /(android).*(version\/[0-9+].[0-9+])/i,
                identity: "Android"
            }, {
                string: window.navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            }, {
                string: window.navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            }, {
                string: window.navigator.userAgent,
                subString: /mobile\/[^\s]*\ssafari\//i,
                identity: "Safari Mobile",
                versionSearch: "Version"
            }, {
                string: window.navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            }, {prop: window.opera, identity: "Opera", versionSearch: "Version"}, {
                string: window.navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            }, {
                string: window.navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            }, {
                string: window.navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            }, {
                string: window.navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            }, {
                string: window.navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            }, {
                string: window.navigator.userAgent,
                subString: "MSIE",
                identity: "IE",
                versionSearch: "MSIE"
            }, {
                string: window.navigator.userAgent,
                subString: "Trident",
                identity: "IE",
                versionSearch: "rv"
            }, {
                string: window.navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            }, {
                string: window.navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }],
            os: [{
                string: window.navigator.platform,
                subString: "Win",
                identity: "Windows",
                versionSearch: "Windows NT"
            }, {
                string: window.navigator.platform,
                subString: "Mac",
                identity: "OS X"
            }, {
                string: window.navigator.userAgent,
                subString: "iPhone",
                identity: "iOS",
                versionSearch: "iPhone OS"
            }, {
                string: window.navigator.userAgent,
                subString: "iPad",
                identity: "iOS",
                versionSearch: "CPU OS"
            }, {
                string: window.navigator.userAgent,
                subString: /android/i,
                identity: "Android"
            }, {string: window.navigator.platform, subString: "Linux", identity: "Linux"}],
            versionString: window.navigator.userAgent || window.navigator.appVersion || undefined
        }
    }, {}],
    230: [function (b, c, a) {
        c.exports = {PointerTracker: b("./ac-pointer-tracker/PointerTracker")}
    }, {"./ac-pointer-tracker/PointerTracker": 231}],
    231: [function (b, a, f) {
        var n = b("@marcom/ac-browser");
        var l = b("@marcom/ac-dom-events");
        var k = b("@marcom/ac-dom-styles");
        var h = b("@marcom/ac-object/create");
        var c = n.os === "Android" || n.name === "IE" && n.version <= 8;
        var j = b("@marcom/ac-feature/touchAvailable")();
        var m = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;

        function d(p, q, o) {
            this._el = p;
            o = o || {};
            this._lockVertical = o.lockVertical !== false;
            this._swipeThreshold = o.swipeThreshold || d.DEFAULT_SWIPE_THRESHOLD;
            this._pointerEvents = q || {};
            this._trackHover = o.trackHover;
            if (!this._trackHover) {
                this._pointerEvents.down = this._pointerEvents.down || (j ? d.TOUCH_EVENTS.down : d.MOUSE_EVENTS.down);
                this._pointerEvents.up = this._pointerEvents.up || (j ? d.TOUCH_EVENTS.up : d.MOUSE_EVENTS.up)
            } else {
                this._pointerEvents.down = this._pointerEvents.down || d.MOUSE_EVENTS.over;
                this._pointerEvents.up = this._pointerEvents.up || d.MOUSE_EVENTS.out
            }
            this._pointerEvents.out = this._pointerEvents.out || (j ? d.TOUCH_EVENTS.out : d.MOUSE_EVENTS.out);
            this._pointerEvents.move = this._pointerEvents.move || (j ? d.TOUCH_EVENTS.move : d.MOUSE_EVENTS.move);
            this._onMouseDown = this._onMouseDown.bind(this);
            this._onMouseUp = this._onMouseUp.bind(this);
            this._onMouseOut = this._onMouseOut.bind(this);
            this._onMouseMove = this._onMouseMove.bind(this);
            m.call(this);
            l.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
            this._setCursorStyle("grab")
        }

        d.START = "start";
        d.END = "end";
        d.UPDATE = "update";
        d.SWIPE_RIGHT = "swiperight";
        d.SWIPE_LEFT = "swipeleft";
        d.DEFAULT_SWIPE_THRESHOLD = c ? 2 : 8;
        d.TOUCH_EVENTS = {down: "touchstart", up: "touchend", out: "mouseout", move: "touchmove"};
        d.MOUSE_EVENTS = {down: "mousedown", up: "mouseup", out: "mouseout", move: "mousemove", over: "mouseover"};
        var i = m.prototype;
        var g = d.prototype = h(i);
        g.destroy = function () {
            if (this._isDragging) {
                this._onMouseUp()
            }
            l.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
            this._setCursorStyle(null);
            this._el = null;
            this._pointerEvents = null;
            this._lockVertical = null;
            this._swipeThreshold = null;
            this._checkForTouchScrollY = null;
            this._isDragging = null;
            this._currentX = null;
            this._currentY = null;
            this._velocityX = null;
            this._velocityY = null;
            this._lastX = null;
            this._lastY = null;
            return i.destroy.call(this)
        };
        g._onMouseDown = function (o) {
            if (this._isDragging) {
                return
            }
            this._isDragging = true;
            this._setCursorStyle("grabbing");
            l.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
            l.addEventListener(document.body, this._pointerEvents.up, this._onMouseUp);
            l.addEventListener(document, this._pointerEvents.out, this._onMouseOut);
            l.addEventListener(document.body, this._pointerEvents.move, this._onMouseMove);
            this._checkForTouchScrollY = this._lockVertical && !!(o.touches && o.touches[0]);
            if (this._checkForTouchScrollY) {
                this._lastY = this._getTouchY(o)
            }
            var p = this._storeAndGetValues(o);
            this._velocityX = p.diffX = 0;
            this._velocityY = p.diffY = 0;
            this.trigger(d.START, p)
        };
        g._onMouseUp = function (o) {
            if (!this._isDragging) {
                return
            }
            this._isDragging = false;
            this._setCursorStyle("grab");
            l.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
            l.removeEventListener(document.body, this._pointerEvents.up, this._onMouseUp);
            l.removeEventListener(document, this._pointerEvents.out, this._onMouseOut);
            l.removeEventListener(document.body, this._pointerEvents.move, this._onMouseMove);
            var q;
            if (this._checkForTouchScrollY || this._trackHover) {
                q = null
            } else {
                if (this._velocityX > this._swipeThreshold) {
                    q = d.SWIPE_LEFT
                } else {
                    if (this._velocityX * -1 > this._swipeThreshold) {
                        q = d.SWIPE_RIGHT
                    }
                }
            }
            var p = this._storeAndGetValues(o);
            p.swipe = q;
            this.trigger(d.END, p);
            if (q && !this._trackHover) {
                this.trigger(q, p)
            }
        };
        g._onMouseOut = function (o) {
            o = o ? o : window.event;
            var p = o.relatedTarget || o.toElement;
            if (!p || p.nodeName === "HTML") {
                this._onMouseUp(o)
            }
        };
        g._onMouseMove = function (o) {
            if (this._checkForTouchScrollY && this._isVerticalTouchMove(o)) {
                this._onMouseUp(o);
                return
            }
            l.preventDefault(o);
            this.trigger(d.UPDATE, this._storeAndGetValues(o))
        };
        g._storeAndGetValues = function (o) {
            if (o === undefined) {
                return {}
            }
            this._currentX = this._getPointerX(o);
            this._currentY = this._getPointerY(o);
            this._velocityX = this._lastX - this._currentX;
            this._velocityY = this._lastY - this._currentY;
            var p = {
                x: this._currentX,
                y: this._currentY,
                lastX: this._lastX,
                lastY: this._lastY,
                diffX: this._velocityX,
                diffY: this._velocityY,
                interactionEvent: o
            };
            this._lastX = this._currentX;
            this._lastY = this._currentY;
            return p
        };
        g._getPointerX = function (o) {
            if (o.pageX) {
                return o.pageX
            } else {
                if (o.touches && o.touches[0]) {
                    return o.touches[0].pageX
                } else {
                    if (o.clientX) {
                        return o.clientX
                    }
                }
            }
            return 0
        };
        g._getPointerY = function (o) {
            if (o.pageY) {
                return o.pageY
            } else {
                if (o.touches && o.touches[0]) {
                    return o.touches[0].pageY
                } else {
                    if (o.clientY) {
                        return o.clientY
                    }
                }
            }
            return 0
        };
        g._getTouchX = function (o) {
            if (o.touches && o.touches[0]) {
                return o.touches[0].pageX
            }
            return 0
        };
        g._getTouchY = function (o) {
            if (o.touches && o.touches[0]) {
                return o.touches[0].pageY
            }
            return 0
        };
        g._isVerticalTouchMove = function (p) {
            var o = this._getTouchX(p);
            var s = this._getTouchY(p);
            var r = Math.abs(o - this._lastX);
            var q = Math.abs(s - this._lastY);
            this._checkForTouchScrollY = r < q;
            return this._checkForTouchScrollY
        };
        g._setCursorStyle = function (o) {
            k.setStyle(this._el, {cursor: o})
        };
        a.exports = d
    }, {
        "@marcom/ac-browser": 226,
        "@marcom/ac-dom-events": 179,
        "@marcom/ac-dom-styles": 215,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-feature/touchAvailable": 165,
        "@marcom/ac-object/create": 461
    }],
    232: [function (c, d, a) {
        var b = function () {
            var h = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
            var f = {
                "animation-delay": "transitionend",
                "-o-animation-delay": "oTransitionEnd",
                "-moz-animation-delay": "transitionend",
                "-webkit-animation-delay": "webkitTransitionEnd",
                "-ms-animation-delay": "transitionend"
            };
            var l = {
                "animation-delay": "animationstart",
                "-o-animation-delay": "oanimationstart",
                "-moz-animation-delay": "animationstart",
                "-webkit-animation-delay": "webkitAnimationStart",
                "-ms-animation-delay": "MSAnimationStart"
            };
            var i = {
                "animation-delay": "animationiteration",
                "-o-animation-delay": "oanimationiteration",
                "-moz-animation-delay": "animationiteration",
                "-webkit-animation-delay": "webkitAnimationIteration",
                "-ms-animation-delay": "MSAnimationIteration"
            };
            var o = {
                "animation-delay": "animationend",
                "-o-animation-delay": "oanimationend",
                "-moz-animation-delay": "animationend",
                "-webkit-animation-delay": "webkitAnimationEnd",
                "-ms-animation-delay": "MSAnimationEnd"
            };
            var g = document.createElement("_");
            var j = ["", "-webkit-", "-moz-", "-o-", "-ms-"];

            function n(r) {
                for (var p = 0;
                     p < j.length; p++) {
                    var q = h[p] + r;
                    if (g.style[q] !== undefined) {
                        return q
                    }
                }
                return undefined
            }

            var m = ["-webkit-", "", "-moz-", "-o-", "-ms-"];

            function k(r) {
                for (var p = 0; p < m.length;
                     p++) {
                    var q = m[p] + r;
                    if (g.style[q] !== undefined) {
                        return q
                    }
                }
                return undefined
            }

            return {
                filter: k("filter"),
                transform: n("transform"),
                transformOrigin: n("transform-origin"),
                transition: n("transition"),
                transitionDelay: n("transition-delay"),
                transitionDuration: n("transition-duration"),
                transitionProperty: n("transition-property"),
                transitionTimingFunction: n("transition-timing-function"),
                transitionEnd: f[n("animation-delay")],
                animation: n("animation"),
                animationDelay: n("animation-delay"),
                animationDirection: n("animation-direction"),
                animationDuration: n("animation-duration"),
                animationFillMode: n("animation-fill-mode"),
                animationIterationCount: n("animation-iteration-count"),
                animationName: n("animation-name"),
                animationTimingFunction: n("animation-timing-function"),
                animationPlayState: n("animation-play-state"),
                animationStart: l[n("animation-delay")],
                animationIteration: i[n("animation-delay")],
                animationEnd: o[n("animation-delay")]
            }
        }();
        d.exports = b
    }, {}],
    233: [function (b, c, a) {
        arguments[4][78][0].apply(a, arguments)
    }, {dup: 78}],
    234: [function (b, c, a) {
        arguments[4][79][0].apply(a, arguments)
    }, {dup: 79}],
    235: [function (b, c, a) {
        arguments[4][80][0].apply(a, arguments)
    }, {dup: 80}],
    236: [function (b, c, a) {
        arguments[4][81][0].apply(a, arguments)
    }, {dup: 81}],
    237: [function (b, c, a) {
        arguments[4][82][0].apply(a, arguments)
    }, {dup: 82}],
    238: [function (b, c, a) {
        arguments[4][83][0].apply(a, arguments)
    }, {dup: 83}],
    239: [function (b, c, a) {
        arguments[4][84][0].apply(a, arguments)
    }, {dup: 84}],
    240: [function (b, c, a) {
        arguments[4][85][0].apply(a, arguments)
    }, {dup: 85}],
    241: [function (b, c, a) {
        arguments[4][86][0].apply(a, arguments)
    }, {dup: 86}],
    242: [function (b, c, a) {
        arguments[4][87][0].apply(a, arguments)
    }, {dup: 87}],
    243: [function (b, c, a) {
        arguments[4][88][0].apply(a, arguments)
    }, {dup: 88}],
    244: [function (b, c, a) {
        arguments[4][89][0].apply(a, arguments)
    }, {dup: 89}],
    245: [function (b, c, a) {
        arguments[4][90][0].apply(a, arguments)
    }, {dup: 90}],
    246: [function (b, c, a) {
        arguments[4][91][0].apply(a, arguments)
    }, {dup: 91}],
    247: [function (b, c, a) {
        arguments[4][92][0].apply(a, arguments)
    }, {dup: 92}],
    248: [function (b, c, a) {
        arguments[4][93][0].apply(a, arguments)
    }, {dup: 93}],
    249: [function (b, c, a) {
        arguments[4][94][0].apply(a, arguments)
    }, {dup: 94}],
    250: [function (b, c, a) {
        arguments[4][95][0].apply(a, arguments)
    }, {dup: 95}],
    251: [function (b, c, a) {
        arguments[4][96][0].apply(a, arguments)
    }, {dup: 96}],
    252: [function (b, c, a) {
        arguments[4][97][0].apply(a, arguments)
    }, {dup: 97}],
    253: [function (b, c, a) {
        arguments[4][98][0].apply(a, arguments)
    }, {dup: 98}],
    254: [function (b, c, a) {
        arguments[4][99][0].apply(a, arguments)
    }, {dup: 99}],
    255: [function (b, c, a) {
        arguments[4][100][0].apply(a, arguments)
    }, {"./ac-transform/Transform": 256, dup: 100}],
    256: [function (b, c, a) {
        arguments[4][101][0].apply(a, arguments)
    }, {"./gl-matrix/mat4": 257, "./gl-matrix/vec3": 258, "./gl-matrix/vec4": 259, dup: 101}],
    257: [function (b, c, a) {
        arguments[4][102][0].apply(a, arguments)
    }, {
        dup: 102,
        "gl-mat4/clone": 233,
        "gl-mat4/create": 234,
        "gl-mat4/fromRotationTranslation": 235,
        "gl-mat4/identity": 236,
        "gl-mat4/invert": 237,
        "gl-mat4/multiply": 238,
        "gl-mat4/rotate": 239,
        "gl-mat4/rotateX": 240,
        "gl-mat4/rotateY": 241,
        "gl-mat4/rotateZ": 242,
        "gl-mat4/scale": 243,
        "gl-mat4/translate": 244,
        "gl-mat4/transpose": 245
    }],
    258: [function (b, c, a) {
        arguments[4][103][0].apply(a, arguments)
    }, {
        dup: 103,
        "gl-vec3/create": 246,
        "gl-vec3/cross": 247,
        "gl-vec3/dot": 248,
        "gl-vec3/fromValues": 249,
        "gl-vec3/length": 250,
        "gl-vec3/normalize": 251
    }],
    259: [function (b, c, a) {
        arguments[4][104][0].apply(a, arguments)
    }, {dup: 104, "gl-vec4/create": 252, "gl-vec4/fromValues": 253, "gl-vec4/transformMat4": 254}],
    260: [function (d, f, b) {
        var c = d("@marcom/ac-eclipse").Clip;
        var a = d("@marcom/ac-feature/cssPropertyAvailable");
        f.exports = function g(i, l, k, j, h) {
            if (a("opacity")) {
                h = h || {};
                if (j) {
                    h.autoplay = h.autoplay === false ? h.autoplay : true;
                    h.propsFrom = h.propsFrom || {};
                    h.propsFrom.opacity = l;
                    if (h.autoplay) {
                        return c.to(i, j, {opacity: k}, h)
                    }
                    return new c(i, j, {opacity: k}, h)
                }
                i.style.opacity = k;
                if (typeof h.onStart === "function") {
                    h.onStart()
                }
                if (typeof h.onComplete === "function") {
                    h.onComplete()
                }
            } else {
                i.style.visibility = k ? "visible" : "hidden";
                if (typeof h.onStart === "function") {
                    h.onStart()
                }
                if (typeof h.onComplete === "function") {
                    h.onComplete()
                }
            }
        }
    }, {"@marcom/ac-eclipse": 107, "@marcom/ac-feature/cssPropertyAvailable": 149}],
    261: [function (f, g, c) {
        var d = f("@marcom/ac-eclipse").Clip;
        var b = f("@marcom/ac-feature/cssPropertyAvailable");
        g.exports = function a(i, j, h) {
            var k = 1;
            h = h || {};
            if (b("opacity")) {
                if (j) {
                    h.autoplay = h.autoplay === false ? h.autoplay : true;
                    if (h.autoplay) {
                        return d.to(i, j, {opacity: k}, h)
                    }
                    return new d(i, j, {opacity: k}, h)
                }
                i.style.opacity = k;
                if (typeof h.onStart === "function") {
                    h.onStart()
                }
                if (typeof h.onComplete === "function") {
                    h.onComplete()
                }
            } else {
                i.style.visibility = "visible";
                if (typeof h.onStart === "function") {
                    h.onStart()
                }
                if (typeof h.onComplete === "function") {
                    h.onComplete()
                }
            }
        }
    }, {"@marcom/ac-eclipse": 107, "@marcom/ac-feature/cssPropertyAvailable": 149}],
    262: [function (d, f, b) {
        var c = d("@marcom/ac-eclipse").Clip;
        var a = d("@marcom/ac-feature/cssPropertyAvailable");
        f.exports = function g(i, j, h) {
            var k = 0;
            h = h || {};
            if (a("opacity")) {
                if (j) {
                    h.autoplay = h.autoplay === false ? h.autoplay : true;
                    if (h.autoplay) {
                        return c.to(i, j, {opacity: k}, h)
                    }
                    return new c(i, j, {opacity: k}, h)
                }
                i.style.opacity = k;
                if (typeof h.onStart === "function") {
                    h.onStart()
                }
                if (typeof h.onComplete === "function") {
                    h.onComplete()
                }
            } else {
                i.style.visibility = "hidden";
                if (typeof h.onStart === "function") {
                    h.onStart()
                }
                if (typeof h.onComplete === "function") {
                    h.onComplete()
                }
            }
        }
    }, {"@marcom/ac-eclipse": 107, "@marcom/ac-feature/cssPropertyAvailable": 149}],
    263: [function (d, f, b) {
        var c = d("@marcom/ac-eclipse").Clip;
        var g = d("@marcom/ac-dom-styles");
        f.exports = function a(k, h, o, l, j) {
            j = j || {};
            j.autoplay = j.autoplay === false ? j.autoplay : true;
            var i = j.onStart || null;
            var n = j.onComplete || null;
            var m;
            m = {transform: {translateX: h + "px", translateY: o + "px"}};
            if (l) {
                j.onStart = function () {
                    k.style.willChange = "transform";
                    if (i !== null) {
                        i.call(this)
                    }
                };
                j.onComplete = function () {
                    k.style.willChange = "";
                    if (n !== null) {
                        n.call(this)
                    }
                };
                if (j.autoplay) {
                    return c.to(k, l, m, j)
                }
                return new c(k, l, m, j)
            }
            g.setStyle(k, m);
            if (typeof j.onStart === "function") {
                j.onStart()
            }
            if (typeof j.onComplete === "function") {
                j.onComplete()
            }
        }
    }, {"@marcom/ac-dom-styles": 215, "@marcom/ac-eclipse": 107}],
    264: [function (f, g, b) {
        var d = f("@marcom/ac-browser-prefixed");
        var c = f("@marcom/ac-transform").Transform;
        var a = f("./move");
        g.exports = function h(l, i, m, k) {
            var j = new c();
            j.setMatrixValue(getComputedStyle(l)[d.transform]);
            return a(l, i, j.getTranslateY(), m, k)
        }
    }, {"./move": 263, "@marcom/ac-browser-prefixed": 232, "@marcom/ac-transform": 255}],
    265: [function (d, f, b) {
        var c = d("@marcom/ac-eclipse").Clip;
        f.exports = function a(g, o, k, i, r) {
            r = r || {};
            r.autoplay = r.autoplay === false ? r.autoplay : true;
            var h = g === window;
            var q;
            var n;
            if (h) {
                q = g.pageXOffset;
                n = g.pageYOffset
            } else {
                q = g.scrollLeft;
                n = g.scrollTop
            }
            var m = {x: q, y: n};
            var p = {x: o, y: k};
            if (typeof r.onDraw === "function") {
                var l = r.onDraw
            }
            var j = function j(s) {
                if (h) {
                    g.scrollTo(m.x, m.y)
                } else {
                    g.scrollLeft = m.x;
                    g.scrollTop = m.y
                }
                if (l) {
                    l.call(this, s)
                }
            };
            r.onDraw = j;
            if (r.autoplay) {
                return c.to(m, i, p, r)
            }
            return new c(m, i, p, r)
        }
    }, {"@marcom/ac-eclipse": 107}],
    266: [function (c, d, b) {
        var a = c("./scroll");
        d.exports = function f(k, g, l, j) {
            var i = k === window;
            var h;
            if (i) {
                h = k.pageYOffset
            } else {
                h = k.scrollTop
            }
            return a(k, g, h, l, j)
        }
    }, {"./scroll": 265}],
    267: [function (b, a, f) {
        var d = b("@marcom/ac-classlist");
        var j = b("./singletons/analyticsManager");
        var h = b("@marcom/ac-object/create");
        var l = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var c = b("./Item");

        function i(m) {
            m = m || {};
            this._wrapAround = m.wrapAround || false;
            this._itemType = m.itemType || c;
            this._items = [];
            this._itemsIdLookup = {};
            this.showNext = this.showNext.bind(this);
            this.showPrevious = this.showPrevious.bind(this);
            this._update = this._update.bind(this);
            this._updateItems = this._updateItems.bind(this);
            l.call(this);
            if (m.startAt) {
                this._startAt(m.startAt)
            }
            i._add(this, m.analyticsOptions)
        }

        i.FADE = "fade";
        i.FADE_SELECTOR = "[data-ac-gallery-fade]";
        i.SLIDE = "slide";
        i.SLIDE_SELECTOR = "[data-ac-gallery-slide]";
        i.UPDATE = "update";
        i.UPDATE_COMPLETE = "update:complete";
        var k = l.prototype;
        var g = i.prototype = h(k);
        g.addItem = function (n, m) {
            if (n.nodeType) {
                n = new this._itemType(n)
            } else {
                if (this._items.indexOf(n) > -1) {
                    return n
                }
            }
            if (typeof m === "number") {
                this._items.splice(m, 0, n)
            } else {
                this._items.push(n)
            }
            if (this._items.length === 1) {
                n.show();
                this._setCurrentItem(n)
            } else {
                n.hide();
                if (this.getNextItem() === n) {
                    this._setNextItem(n)
                }
                if (this.getPreviousItem() === n) {
                    this._setPreviousItem(n)
                }
            }
            if (n.getElementId() !== null) {
                this._itemsIdLookup[n.getElementId()] = n
            }
            n.on(c.SELECTED, this._update);
            return n
        };
        g.removeItem = function (q, p) {
            p = p || {};
            if (typeof q === "number") {
                q = this._items[q]
            }
            var o = this._items.indexOf(q);
            if (o > -1) {
                var m = this.getNextItem();
                var n = this.getPreviousItem();
                this._items.splice(o, 1);
                q.off(c.SELECTED, this._update);
                if (m === q) {
                    this._setNextItem(this.getNextItem())
                }
                if (n === q) {
                    this._setPreviousItem(this.getPreviousItem())
                }
            }
            if (q === this._currentItem && this._items.length && p.setCurrentItem !== false) {
                this._update({item: this._items[0]});
                this._setLastItem(null)
            }
            if (p.destroyItem && q.getElement()) {
                q.destroy()
            }
            return q
        };
        g.show = function (n, m) {
            if (typeof n === "number") {
                n = this._items[n]
            } else {
                if (typeof n === "string") {
                    n = this._itemsIdLookup[n]
                }
            }
            if (n) {
                m = m || {};
                this._update({item: n, interactionEvent: m.interactionEvent})
            }
            return n || null
        };
        g.showNext = function (m) {
            var n = this.getNextItem();
            if (n) {
                this.show(n, m)
            }
            return n
        };
        g.showPrevious = function (m) {
            var n = this.getPreviousItem();
            if (n) {
                this.show(n, m)
            }
            return n
        };
        g.isInView = function () {
            return this._currentItem && this._currentItem.isInView()
        };
        g.getTotalItems = function () {
            return this._items.length
        };
        g.getItems = function () {
            return this._items
        };
        g.getItem = function (m) {
            if (typeof m === "number") {
                return this.getItemAt(m)
            } else {
                if (typeof m === "string") {
                    return this.getItemById(m)
                }
            }
        };
        g.getItemAt = function (m) {
            return this._items[m] || null
        };
        g.getItemById = function (m) {
            return this._itemsIdLookup[m] || null
        };
        g.getItemIndex = function (m) {
            return this._items.indexOf(m)
        };
        g.getCurrentItem = function () {
            return this._currentItem || null
        };
        g.getLastItem = function () {
            return this._lastItem || null
        };
        g.getNextItem = function () {
            var n;
            var m = this._items.indexOf(this._currentItem);
            if (m < this._items.length - 1) {
                n = this._items[m + 1]
            } else {
                if (this._wrapAround) {
                    n = this._items[0]
                }
            }
            return n || null
        };
        g.getPreviousItem = function () {
            var n;
            var m = this._items.indexOf(this._currentItem);
            if (m > 0) {
                n = this._items[m - 1]
            } else {
                if (this._wrapAround) {
                    n = this._items[this._items.length - 1]
                }
            }
            return n || null
        };
        g.getId = function () {
            return this._id
        };
        g.destroy = function (m) {
            m = m || {};
            if (m.destroyItems === undefined) {
                m.destroyItems = true
            }
            this._setCurrentItem(null);
            if (m.destroyItems) {
                var n;
                while (this._items.length) {
                    n = this._items[0];
                    n.off(c.SELECTED, this._update);
                    this.removeItem(n, {destroyItem: true, setCurrentItem: false})
                }
            }
            this._items = null;
            this._itemsIdLookup = null;
            i._remove(this);
            return k.destroy.call(this)
        };
        g._startAt = function (m) {
            var n = this._items[m];
            if (n && this._currentItem !== n) {
                this._currentItem.hide();
                this._setCurrentItem(n);
                this._currentItem.show();
                this.trigger(i.UPDATE, this._items)
            }
        };
        g._setCurrentItem = function (m) {
            if (this._currentItem && this._currentItem.getElement() && this._currentItem !== m) {
                d.remove(this._currentItem.getElement(), c.CSS_CURRENT_ITEM);
                this._setLastItem(this._currentItem)
            }
            this._currentItem = m;
            if (this._currentItem && this._currentItem.getElement()) {
                d.add(this._currentItem.getElement(), c.CSS_CURRENT_ITEM);
                this._setNextItem(this.getNextItem());
                this._setPreviousItem(this.getPreviousItem())
            }
        };
        g._setLastItem = function (m) {
            if (this._lastItem && this._lastItem.getElement() && this._lastItem !== m) {
                d.remove(this._lastItem.getElement(), c.CSS_LAST_ITEM)
            }
            this._lastItem = m;
            if (this._lastItem && this._lastItem.getElement()) {
                d.add(this._lastItem.getElement(), c.CSS_LAST_ITEM)
            }
        };
        g._setNextItem = function (m) {
            if (this._nextItem && this._nextItem.getElement() && this._nextItem !== m) {
                d.remove(this._nextItem.getElement(), c.CSS_NEXT_ITEM)
            }
            this._nextItem = m;
            if (this._nextItem && this._nextItem.getElement()) {
                d.add(this._nextItem.getElement(), c.CSS_NEXT_ITEM)
            }
        };
        g._setPreviousItem = function (m) {
            if (this._previousItem && this._previousItem.getElement() && this._previousItem !== m) {
                d.remove(this._previousItem.getElement(), c.CSS_PREVIOUS_ITEM)
            }
            this._previousItem = m;
            if (this._previousItem && this._previousItem.getElement()) {
                d.add(this._previousItem.getElement(), c.CSS_PREVIOUS_ITEM)
            }
        };
        g._updateItems = function (n, m) {
            if (n.outgoing[0]) {
                n.outgoing[0].hide()
            }
            n.incoming[0].show();
            if (!m) {
                this.trigger(i.UPDATE_COMPLETE, n)
            }
        };
        g._update = function (m) {
            var o = this._currentItem !== m.item;
            if (o) {
                this._setCurrentItem(m.item)
            }
            var n = {
                incoming: [m.item],
                outgoing: this._lastItem ? [this._lastItem] : [],
                interactionEvent: m.interactionEvent || null
            };
            if (o) {
                this.trigger(i.UPDATE, n)
            }
            this._updateItems(n, !o)
        };
        i._instantiate = function () {
            this._galleries = [];
            this._idCounter = 0;
            return this
        };
        i._add = function (n, m) {
            this._galleries.push(n);
            n._id = ++this._idCounter;
            j.add(n, m)
        };
        i._remove = function (m) {
            var n = this._galleries.indexOf(m);
            if (n > -1) {
                this._galleries.splice(n, 1);
                j.remove(m)
            }
        };
        i.getAll = function () {
            return Array.prototype.slice.call(this._galleries)
        };
        i.getAllInView = function () {
            var n = [];
            var m = this._galleries.length;
            while (m--) {
                if (this._galleries[m].isInView()) {
                    n.push(this._galleries[m])
                }
            }
            return n
        };
        i.destroyAll = function () {
            var m = this._galleries.length;
            while (m--) {
                this._galleries[m].destroy()
            }
            this._galleries = []
        };
        a.exports = i._instantiate()
    }, {
        "./Item": 268,
        "./singletons/analyticsManager": 282,
        "@marcom/ac-classlist": 174,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-object/create": 461
    }],
    268: [function (m, b, s) {
        var c = m("@marcom/ac-classlist");
        var i = m("@marcom/ac-dom-events/addEventListener");
        var k = m("@marcom/ac-dom-events/removeEventListener");
        var l = m("@marcom/ac-dom-events/preventDefault");
        var h = m("@marcom/ac-dom-metrics/isInViewport");
        var a = m("@marcom/ac-dom-metrics/getPercentInViewport");
        var r = m("@marcom/ac-dom-traversal/querySelectorAll");
        var n = m("@marcom/ac-object/create");
        var g = m("./singletons/tabManager");
        var q = m("@marcom/ac-keyboard/keyMap");
        var o = m("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var f = m("@marcom/ac-keyboard");
        var j = "current";

        function d(u, t) {
            this._el = u;
            t = t || {};
            this._triggerKeys = [];
            this._triggerEls = {};
            this._isShown = false;
            this._isACaption = t.isACaption === undefined ? false : t.isACaption;
            this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this);
            this._onTriggered = this._onTriggered.bind(this);
            if (!this._isACaption) {
                this._el.setAttribute("role", "tabpanel")
            }
            this._focusableEls = r(g.focusableSelectors, u);
            o.call(this)
        }

        d.CSS_CURRENT_ITEM = "ac-gallery-currentitem";
        d.CSS_LAST_ITEM = "ac-gallery-lastitem";
        d.CSS_NEXT_ITEM = "ac-gallery-nextitem";
        d.CSS_PREVIOUS_ITEM = "ac-gallery-previousitem";
        d.SELECTED = "selected";
        d.SHOW = "show";
        d.HIDE = "hide";
        var p = d.prototype = n(o.prototype);
        p.show = function () {
            this._isShown = true;
            this._addCurrentClassToTriggers();
            this._setTabIndexOnFocusableItems(null);
            this._el.removeAttribute("aria-hidden");
            this.trigger(d.SHOW, this)
        };
        p.hide = function () {
            this._isShown = false;
            this._removeCurrentClassFromTriggers();
            this._setTabIndexOnFocusableItems("-1");
            this._el.setAttribute("aria-hidden", "true");
            this.trigger(d.HIDE, this)
        };
        p.addElementTrigger = function (v, u) {
            u = u || "click";
            if (this._triggerEls[u] === undefined) {
                this._triggerEls[u] = []
            }
            var t = this._triggerEls[u].indexOf(v);
            if (t < 0) {
                v.setAttribute("role", "tab");
                v.setAttribute("tabindex", "0");
                var w = this.getElementId();
                if (w) {
                    v.setAttribute("aria-controls", w)
                }
                w = v.getAttribute("id");
                if (w && this._el.getAttribute("aria-labelledby") === null) {
                    this._el.setAttribute("aria-labelledby", w)
                }
                i(v, u, this._onTriggered);
                this._triggerEls[u].push(v);
                if (this._isShown) {
                    v.setAttribute("aria-selected", "true");
                    c.add(v, j)
                } else {
                    v.setAttribute("aria-selected", "false")
                }
            }
        };
        p.removeElementTrigger = function (v, u) {
            u = u || "click";
            if (this._triggerEls[u] === undefined) {
                return
            }
            var t = this._triggerEls[u].indexOf(v);
            if (t > -1) {
                this._cleanElementTrigger(v, u)
            }
            if (this._triggerEls[u].length === 0) {
                this._triggerEls[u] = undefined
            }
        };
        p.addKeyTrigger = function (u) {
            if (typeof u === "string") {
                u = q[u.toUpperCase()]
            }
            if (typeof u === "number") {
                var t = this._triggerKeys.indexOf(u);
                if (t < 0) {
                    f.onDown(u, this._onKeyboardInteraction);
                    this._triggerKeys.push(u)
                }
            }
        };
        p.removeKeyTrigger = function (u) {
            if (typeof u === "string") {
                u = q[u.toUpperCase()]
            }
            if (typeof u === "number") {
                var t = this._triggerKeys.indexOf(u);
                if (t > -1) {
                    f.offDown(u, this._onKeyboardInteraction);
                    this._triggerKeys.splice(t, 1)
                }
            }
        };
        p.removeAllTriggers = function () {
            var u;
            var t = this._triggerKeys.length;
            while (t--) {
                u = this._triggerKeys[t];
                f.offDown(u, this._onKeyboardInteraction)
            }
            this._triggerKeys = [];
            var w;
            var v;
            for (v in this._triggerEls) {
                t = this._triggerEls[v].length;
                while (t--) {
                    w = this._triggerEls[v][t];
                    this._cleanElementTrigger(w, v)
                }
            }
            this._triggerEls = {}
        };
        p.isInView = function () {
            if (this._el) {
                return h(this._el)
            }
            return false
        };
        p.percentageInView = function () {
            if (this._el) {
                return a(this._el)
            }
            return 0
        };
        p.getElement = function () {
            return this._el
        };
        p.getElementId = function () {
            if (this._elId !== undefined) {
                return this._elId
            }
            this._elId = this._el.getAttribute("id") || null;
            return this._elId
        };
        p.destroy = function () {
            if (this._isShown) {
                this._isShown = null;
                c.remove(this._el, d.CSS_CURRENT_ITEM, d.CSS_LAST_ITEM, d.CSS_NEXT_ITEM, d.CSS_PREVIOUS_ITEM);
                this._removeCurrentClassFromTriggers()
            }
            this.removeAllTriggers();
            this._setTabIndexOnFocusableItems(null);
            this._el.removeAttribute("aria-hidden");
            this._el.removeAttribute("role");
            this._el.removeAttribute("aria-labelledby");
            this._isACaption = null;
            this._triggerKeys = null;
            this._triggerEls = null;
            this._el = null
        };
        p._addCurrentClassToTriggers = function () {
            var v;
            var u;
            var t;
            for (u in this._triggerEls) {
                t = this._triggerEls[u].length;
                while (t--) {
                    v = this._triggerEls[u][t];
                    v.setAttribute("aria-selected", "true");
                    c.add(v, j)
                }
            }
        };
        p._removeCurrentClassFromTriggers = function () {
            var v;
            var u;
            var t;
            for (u in this._triggerEls) {
                t = this._triggerEls[u].length;
                while (t--) {
                    v = this._triggerEls[u][t];
                    v.setAttribute("aria-selected", "false");
                    c.remove(v, j)
                }
            }
        };
        p._cleanElementTrigger = function (u, t) {
            u.removeAttribute("aria-selected");
            u.removeAttribute("role");
            u.removeAttribute("tabindex");
            u.removeAttribute("aria-controls");
            k(u, t, this._onTriggered);
            if (this._isShown) {
                c.remove(u, j)
            }
        };
        p._onKeyboardInteraction = function (t) {
            if (this.isInView()) {
                this._onTriggered(t)
            }
        };
        p._setTabIndexOnFocusableItems = function (u) {
            var t = u === null;
            var w = [];
            this._currentTabbableEls = this._currentTabbableEls || g.getTabbable(this._focusableEls);
            if (!t) {
                w = g.getTabbable(this._focusableEls);
                this._currentTabbableEls = w
            }
            var v = this._currentTabbableEls.length;
            while (v--) {
                if (t) {
                    this._currentTabbableEls[v].removeAttribute("tabindex")
                } else {
                    this._currentTabbableEls[v].setAttribute("tabindex", u)
                }
            }
        };
        p._onTriggered = function (t) {
            l(t);
            this.trigger(d.SELECTED, {item: this, interactionEvent: t})
        };
        b.exports = d
    }, {
        "./singletons/tabManager": 283,
        "@marcom/ac-classlist": 174,
        "@marcom/ac-dom-events/addEventListener": 177,
        "@marcom/ac-dom-events/preventDefault": 185,
        "@marcom/ac-dom-events/removeEventListener": 186,
        "@marcom/ac-dom-metrics/getPercentInViewport": 197,
        "@marcom/ac-dom-metrics/isInViewport": 203,
        "@marcom/ac-dom-traversal/querySelectorAll": 21,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-keyboard": 221,
        "@marcom/ac-keyboard/keyMap": 223,
        "@marcom/ac-object/create": 461
    }],
    269: [function (d, a, g) {
        var h = d("./helpers/extendProto");
        var j = d("./Gallery");
        var b = d("./auto/AutoGallery");
        var i = d("./fade/FadeGallery");
        var l = d("./fade/FadeItem");
        var c = d("./slide/SlideGallery");
        var k = d("./slide/SlideItem");
        var f = d("./Item");
        j.create = d("./factories/create");
        j.autoCreate = d("./factories/autoCreate");
        j.extend = h;
        b.extend = h;
        i.extend = h;
        l.extend = h;
        c.extend = h;
        k.extend = h;
        f.extend = h;
        a.exports = {
            Gallery: j,
            AutoGallery: b,
            FadeGallery: i,
            FadeGalleryItem: l,
            SlideGallery: c,
            SlideGalleryItem: k,
            Item: f,
            ToggleNav: d("./navigation/ToggleNav")
        }
    }, {
        "./Gallery": 267,
        "./Item": 268,
        "./auto/AutoGallery": 271,
        "./factories/autoCreate": 272,
        "./factories/create": 273,
        "./fade/FadeGallery": 274,
        "./fade/FadeItem": 275,
        "./helpers/extendProto": 276,
        "./navigation/ToggleNav": 281,
        "./slide/SlideGallery": 284,
        "./slide/SlideItem": 285
    }],
    270: [function (b, d, a) {
        var i;
        try {
            i = b("ac-analytics").observer.Gallery
        } catch (h) {
        }
        var g = "data-analytics-gallery-id";

        function c() {
            this._observers = {}
        }

        var f = c.prototype;
        f.add = function (j, l) {
            var m = j.getId();
            if (!i || this._observers[m]) {
                return
            }
            l = l || {};
            if (!l.galleryName) {
                l.galleryName = this._getAnalyticsId(j, l.dataAttribute) || m
            }
            if (!l.beforeUpdateEvent) {
                l.beforeUpdateEvent = "update"
            }
            if (!l.afterUpdateEvent) {
                l.afterUpdateEvent = "update:complete"
            }
            var k = new i(j, l);
            if (k.gallery) {
                this._observers[m] = k
            }
        };
        f.remove = function (j) {
            var k = j.getId();
            if (!i || !this._observers[k]) {
                return
            }
            if (typeof this._observers[k].destroy === "function") {
                this._observers[k].destroy()
            }
            this._observers[k] = null
        };
        f._getAnalyticsId = function (j, k) {
            if (typeof j.getElement === "function") {
                k = k || g;
                var l = j.getElement();
                return l.getAttribute(k) || l.getAttribute("id")
            }
            return null
        };
        d.exports = c
    }, {"ac-analytics": undefined}],
    271: [function (p, b, I) {
        p("@marcom/ac-polyfills/requestAnimationFrame");
        var c = p("@marcom/ac-classlist");
        var k = p("@marcom/ac-dom-events/addEventListener");
        var n = p("@marcom/ac-dom-events/removeEventListener");
        var o = p("@marcom/ac-dom-events/preventDefault");
        var w = p("@marcom/ac-dom-styles");
        var g = p("@marcom/ac-dom-traversal/querySelector");
        var F = p("@marcom/ac-dom-traversal/querySelectorAll");
        var r = p("@marcom/ac-object/create");
        var G = p("@marcom/ac-dom-metrics/getContentDimensions");
        var x = p("@marcom/ac-keyboard/keyMap");
        var E = p("./../helpers/selectElementFromDataAttributeValue");
        var q = p("./../helpers/selectElementThatHasDataAttribute");
        var m = p("./../helpers/inputHasFocus");
        var j = p("@marcom/ac-function/throttle");
        var l = p("@marcom/ac-feature/touchAvailable");
        var t = p("./../Gallery");
        var d = p("@marcom/ac-keyboard");
        var z = p("@marcom/ac-page-visibility").PageVisibilityManager;
        var i = p("@marcom/ac-pointer-tracker").PointerTracker;
        var v = p("./../navigation/ToggleNav");
        var B = "disabled";
        var A = 3;
        var f = 0.5;
        var y = "[data-ac-gallery-item]";
        var D = 0.12;
        var C = p("../templates/paddlenav.js");
        var H = "No element supplied.";
        var J = 'Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.';
        var h = 'Captions datatag needed when enableCaptions is on. Use the "data-related-gallery" tag (with an ID of the related captions container) on your gallery container to automatically use captions.';

        function s(O, M) {
            M = M || {};
            if (!O || O.nodeType === undefined) {
                throw new Error(H)
            }
            this._el = O;
            t.call(this, M);
            this._itemHeights = [];
            this._itemHeightsLookup = {};
            this._toggleNavDuration = M.toggleNavDuration;
            this._isRightToLeft = M.rightToLeft === undefined ? w.getStyle(O, "direction").direction === "rtl" : M.rightToLeft;
            this._keyboardThrottleDelay = (M.keyboardThrottleDelay === undefined ? D : M.keyboardThrottleDelay) * 1000;
            this._resizeContainer = !!M.resizeContainer;
            this._setUpContainerAutoResize(M.resizeContainerOnUpdate);
            this._createToggleNav();
            this._addPaddleNav(M.addPaddleNav);
            this._isACaptionsGallery = O.getAttribute("data-ac-gallery-captions") === "";
            this._addItems(M.itemSelector || y);
            if (!this._wrapAround) {
                this._updatePaddleNavState()
            }
            if (M.enableArrowKeys !== false) {
                this._enableArrowKeys = true;
                this._addKeyboardListener()
            }
            if (M.updateOnWindowResize !== false) {
                this._onWindowResize = this._onWindowResize.bind(this);
                k(window, "resize", this._onWindowResize)
            }
            this._componentsContainer = document.getElementById(M.container);
            if (M.startAt) {
                this._startAt(M.startAt)
            }
            this.stopAutoPlay = this.stopAutoPlay.bind(this);
            if (M.autoPlay) {
                if (!this._componentsContainer) {
                    throw new Error(J)
                }
                var L = typeof M.autoPlay === "number" ? M.autoPlay : A;
                this.startAutoPlay(L)
            }
            if (M.deeplink !== false) {
                var P = this._getDeeplinkedItem();
                if (P && P !== this._currentItem) {
                    this.show(P)
                }
            }
            if (this._containerResizeDuration !== false) {
                var K = this._itemHeightsLookup[this._currentItem.getElementId()];
                if (K) {
                    this._setElHeight(K)
                }
            }
            if (this._toggleNav) {
                this._toggleNav.start()
            }
            this._setUpSwiping(M.touch && l(), M.desktopSwipe);
            if (this._componentsContainer) {
                this._componentsContainer.setAttribute("tabIndex", -1)
            }
            var N = O.getAttribute("data-related-gallery");
            if (N) {
                this._captionsContainer = document.querySelector(N)
            }
            if (M.enableCaptions) {
                if (!this._captionsContainer) {
                    throw new Error(h)
                }
                this._captionsOptions = M.captionsOptions ? M.captionsOptions : false;
                this.enableCaptions()
            }
        }

        s.RESIZED = "resized";
        s.UPDATE = t.UPDATE;
        s.UPDATE_COMPLETE = t.UPDATE_COMPLETE;
        var a = t.prototype;
        var u = s.prototype = r(a);
        u.addItem = function (M, K) {
            if (M.nodeType) {
                var L = this._isACaptionsGallery;
                M = new this._itemType(M, {isACaption: L})
            } else {
                if (this._items.indexOf(M) > -1) {
                    return M
                }
            }
            if (this._resizeContainer) {
                this._storeItemHeight(M, this._containerResizeDuration === false)
            }
            this._addItemTriggers(M);
            return a.addItem.call(this, M, K)
        };
        u.removeItem = function (M, L) {
            if (this._resizeContainer) {
                var K = this._itemHeights.length;
                while (K--) {
                    if (this._itemHeights[K].item === M) {
                        this._itemHeights.splice(K, 1);
                        if (K === 0 && this._itemHeights.length) {
                            this._setElHeight(this._itemHeights[0].height)
                        }
                    }
                }
            }
            return a.removeItem.call(this, M, L)
        };
        u.startAutoPlay = function (L, K) {
            K = K || {};
            this._isAutoPlaying = true;
            this._autoPlayDelay = (L || A) * 1000;
            this._cancelAutoPlayOnInteraction = K.cancelOnInteraction === undefined ? true : K.cancelOnInteraction;
            setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay);
            if (this._cancelAutoPlayOnInteraction) {
                this.on(t.UPDATE, this.stopAutoPlay)
            }
            if (this._componentsContainer) {
                k(this._componentsContainer, "focus", this.stopAutoPlay, true);
                k(this._componentsContainer, "touchend", this.stopAutoPlay, true);
                k(this._componentsContainer, "click", this.stopAutoPlay, true)
            } else {
                throw new Error(J)
            }
        };
        u.stopAutoPlay = function () {
            this._isAutoPlaying = false;
            if (this._cancelAutoPlayOnInteraction) {
                this.off(t.UPDATE, this.stopAutoPlay)
            }
            if (this._componentsContainer) {
                n(this._componentsContainer, "focus", this.stopAutoPlay, true);
                n(this._componentsContainer, "touchend", this.stopAutoPlay, true);
                n(this._componentsContainer, "click", this.stopAutoPlay, true)
            }
        };
        u.getElement = function () {
            return this._el
        };
        u.getToggleNav = function () {
            return this._toggleNav || null
        };
        u.resize = function (L, K) {
            if (this._resizeContainer) {
                this._itemHeights = [];
                var M = this._items.length;
                while (M--) {
                    this._storeItemHeight(this._items[M], false)
                }
                if (this._containerResizeDuration !== false) {
                    this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
                } else {
                    this._setElHeight(this._itemHeights[0].height)
                }
            }
            if (this._toggleNav) {
                this._toggleNav.resize()
            }
            this.trigger(s.RESIZED, this)
        };
        u.enableKeyboard = function () {
            if (!this._enableArrowKeys) {
                this._enableArrowKeys = true;
                this._addKeyboardListener()
            }
        };
        u.disableKeyboard = function () {
            if (this._enableArrowKeys) {
                this._enableArrowKeys = false;
                d.offDown(x.ARROW_RIGHT, this._rightArrowFunc);
                d.offDown(x.ARROW_LEFT, this._leftArrowFunc)
            }
        };
        u.enableTouch = function () {
            if (!this._touchSwipe) {
                this._setUpSwiping(true, false)
            }
        };
        u.disableTouch = function () {
            if (this._touchSwipe) {
                this._touchSwipe.off(i.END, this._onSwipeEnd);
                this._touchSwipe.destroy();
                this._touchSwipe = null
            }
        };
        u.enableDesktopSwipe = function () {
            if (!this._clickSwipe) {
                this._setUpSwiping(false, true)
            }
        };
        u.disableDesktopSwipe = function () {
            if (this._clickSwipe) {
                this._clickSwipe.off(i.END, this._onSwipeEnd);
                this._clickSwipe.destroy();
                this._clickSwipe = null
            }
        };
        u.enableCaptions = function () {
            if (!this._galleryWithCaptions) {
                this._initCaptionsGallery(this._captionsContainer, this._captionsOptions)
            }
        };
        u.disableCaptions = function () {
            if (this._galleryWithCaptions) {
                this._galleryWithCaptions.destroy()
            }
        };
        u.destroy = function (L) {
            if (this._isAutoPlaying) {
                this.stopAutoPlay()
            }
            if (this._componentsContainer) {
                n(this._componentsContainer, "focus", this.stopAutoPlay, true);
                n(this._componentsContainer, "touchend", this.stopAutoPlay, true);
                n(this._componentsContainer, "click", this.stopAutoPlay, true)
            }
            if (this._resizeContainer) {
                w.setStyle(this._el, {height: null, transition: null})
            }
            if (this._enableArrowKeys) {
                d.offDown(x.ARROW_RIGHT, this._rightArrowFunc);
                d.offDown(x.ARROW_LEFT, this._leftArrowFunc)
            }
            var K;
            if (this._previousButtons) {
                K = this._previousButtons.length;
                while (K--) {
                    n(this._previousButtons[K], "click", this._onPaddlePrevious)
                }
                this._setPaddleDisabledState(this._previousButtons, false)
            }
            if (this._nextButtons) {
                K = this._nextButtons.length;
                while (K--) {
                    n(this._nextButtons[K], "click", this._onPaddleNext)
                }
                this._setPaddleDisabledState(this._nextButtons, false)
            }
            if (this._dynamicPaddleNav) {
                this._el.removeChild(this._dynamicPaddleNav)
            }
            if (this._hasPaddleNavStateHandler) {
                this.off(t.UPDATE, this._updatePaddleNavState)
            }
            this.disableTouch();
            this.disableDesktopSwipe();
            this.disableCaptions();
            if (this._toggleNav) {
                this._toggleNav.destroy();
                this._toggleNav = null
            }
            n(window, "resize", this._onWindowResize);
            this._el = null;
            this._itemHeights = null;
            this._itemHeightsLookup = null;
            this._resizeContainer = null;
            this._isRightToLeft = null;
            this._enableArrowKeys = null;
            this._previousButtons = null;
            this._onPaddlePrevious = null;
            this._nextButtons = null;
            this._onPaddleNext = null;
            this._isACaptionsGallery = null;
            this._componentsContainer = null;
            this._galleryWithCaptions = null;
            this._captionsContainer = null;
            this._captionsOptions = null;
            return a.destroy.call(this, L)
        };
        u._getDeeplinkedItem = function () {
            var M = window.location.hash.substr(1);
            var L;
            var K = this._items.length;
            while (K--) {
                L = this._items[K];
                if (M === L.getElementId()) {
                    return L
                }
            }
            return null
        };
        u._addItems = function (L) {
            var Q;
            var K;
            var O = /(^\[).*(\]$)/.test(L);
            if (O) {
                L = L.replace(/\[|\]/g, "");
                K = q(L, this._el)
            } else {
                K = F(L, this._el)
            }
            var M = 0;
            var P = K.length;
            var N = this._isACaptionsGallery;
            for (M; M < P; M++) {
                Q = new this._itemType(K[M], {isACaption: N});
                this.addItem(Q);
                this._addItemTriggers(Q)
            }
        };
        u._createToggleNav = function () {
            var M = this._getElementId();
            var K = '[data-ac-gallery-togglenav="' + M + '"], [data-ac-gallery-tabnav="' + M + '"]';
            var L = g(K);
            if (L) {
                this._toggleNav = new v(L, this, {duration: this._toggleNavDuration})
            }
        };
        u._addItemTriggers = function (O, K) {
            var M = E("data-ac-gallery-trigger", O.getElementId());
            if (K && K.length) {
                M = M.concat(K)
            }
            var L = 0;
            var N = M.length;
            for (L; L < N; L++) {
                O.addElementTrigger(M[L]);
                if (this._toggleNav) {
                    this._toggleNav.addTrigger(M[L], O)
                }
            }
        };
        u._addPaddleNav = function (O) {
            var M;
            var Q = this._getElementId();
            if (O) {
                var N = typeof O === "string" ? O : C;
                N = N.replace(/%ID%/g, this._getElementId());
                this._dynamicPaddleNav = document.createElement("div");
                this._dynamicPaddleNav.innerHTML = N;
                this._el.insertBefore(this._dynamicPaddleNav, this._el.firstChild)
            }
            this._previousButtons = E("data-ac-gallery-previous-trigger", Q);
            this._nextButtons = E("data-ac-gallery-next-trigger", Q);
            var K = this._el.getAttribute("aria-label") || "";
            if (K.length) {
                K = "(" + K + ")"
            }
            this._onPaddlePrevious = this._onPaddleInteraction.bind(null, this.showPrevious);
            M = this._previousButtons.length;
            if (M) {
                var P = this._el.getAttribute("data-ac-gallery-previouslabel");
                if (P && K.length) {
                    if (this._isRightToLeft) {
                        P = K + " " + P
                    } else {
                        P += " " + K
                    }
                }
                while (M--) {
                    if (P && this._previousButtons[M].getAttribute("aria-label") === null) {
                        this._previousButtons[M].setAttribute("aria-label", P)
                    }
                    k(this._previousButtons[M], "click", this._onPaddlePrevious)
                }
            }
            this._onPaddleNext = this._onPaddleInteraction.bind(null, this.showNext);
            M = this._nextButtons.length;
            if (M) {
                var L = this._el.getAttribute("data-ac-gallery-nextlabel");
                if (L && K.length) {
                    if (this._isRightToLeft) {
                        L = K + " " + L
                    } else {
                        L += " " + K
                    }
                }
                while (M--) {
                    if (L && this._nextButtons[M].getAttribute("aria-label") === null) {
                        this._nextButtons[M].setAttribute("aria-label", L)
                    }
                    k(this._nextButtons[M], "click", this._onPaddleNext)
                }
            }
            if (this._nextButtons.length || this._previousButtons.length) {
                this._hasPaddleNavStateHandler = true;
                this._updatePaddleNavState = this._updatePaddleNavState.bind(this);
                this.on(t.UPDATE, this._updatePaddleNavState)
            }
        };
        u._onPaddleInteraction = function (L, K) {
            o(K);
            L.call(null, {interactionEvent: K})
        };
        u._updatePaddleNavState = function () {
            if (!this._wrapAround) {
                var K = this._items.indexOf(this._currentItem);
                if (K === 0 && this._previousButtons.length) {
                    this._setPaddleDisabledState(this._previousButtons, true);
                    this._setPaddleDisabledState(this._nextButtons, false)
                } else {
                    if (K === this._items.length - 1 && this._nextButtons.length) {
                        this._setPaddleDisabledState(this._nextButtons, true);
                        this._setPaddleDisabledState(this._previousButtons, false)
                    } else {
                        this._setPaddleDisabledState(this._previousButtons, false);
                        this._setPaddleDisabledState(this._nextButtons, false)
                    }
                }
            } else {
                this._setPaddleDisabledState(this._previousButtons, false);
                this._setPaddleDisabledState(this._nextButtons, false)
            }
        };
        u._setPaddleDisabledState = function (M, K) {
            var L = M.length;
            while (L--) {
                M[L].disabled = K;
                if (K) {
                    c.add(M[L], B)
                } else {
                    c.remove(M[L], B)
                }
            }
        };
        u._addKeyboardListener = function () {
            if (this._enableArrowKeys) {
                this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this);
                var K;
                var L;
                if (this._isRightToLeft) {
                    K = this.showPrevious;
                    L = this.showNext
                } else {
                    K = this.showNext;
                    L = this.showPrevious
                }
                this._rightArrowFunc = j(this._onKeyboardInteraction.bind(null, K), this._keyboardThrottleDelay);
                this._leftArrowFunc = j(this._onKeyboardInteraction.bind(null, L), this._keyboardThrottleDelay);
                d.onDown(x.ARROW_RIGHT, this._rightArrowFunc);
                d.onDown(x.ARROW_LEFT, this._leftArrowFunc)
            }
        };
        u._onKeyboardInteraction = function (M, L) {
            if (this.isInView() && !m()) {
                var K = t.getAllInView();
                if (K.length > 1) {
                    K.sort(function (O, N) {
                        O = O._enableArrowKeys ? O.getCurrentItem().percentageInView() : 0;
                        N = N._enableArrowKeys ? N.getCurrentItem().percentageInView() : 0;
                        return N - O
                    });
                    if (this !== K[0]) {
                        return
                    }
                }
                M.call(null, {interactionEvent: L})
            }
        };
        u._setUpSwiping = function (L, K) {
            this._onSwipeEnd = this._onSwipeEnd.bind(this);
            if (L) {
                this._touchSwipe = new i(this._el, i.TOUCH_EVENTS);
                this._touchSwipe.on(i.END, this._onSwipeEnd)
            }
            if (K) {
                this._clickSwipe = new i(this._el, i.MOUSE_EVENTS);
                this._clickSwipe.on(i.END, this._onSwipeEnd)
            }
        };
        u._onSwipeEnd = function (L) {
            var P;
            var K = L.interactionEvent;
            var N = K.type !== "touchend" || K.type !== "touchstart" || K.type !== "touchmove";
            if (N) {
                var O = {type: "touchmove", target: K.target, srcElement: K.srcElement}
            }
            var M = {interactionEvent: O || K};
            if (L.swipe === i.SWIPE_RIGHT) {
                P = this._isRightToLeft ? this.showNext : this.showPrevious
            } else {
                if (L.swipe === i.SWIPE_LEFT) {
                    P = this._isRightToLeft ? this.showPrevious : this.showNext
                }
            }
            if (P) {
                return P.call(this, M)
            }
            K = null;
            return null
        };
        u._getElementId = function () {
            if (this._elementId === undefined) {
                this._elementId = this._el.getAttribute("id")
            }
            return this._elementId
        };
        u._setUpContainerAutoResize = function (K) {
            if (typeof K === "number") {
                this._containerResizeDuration = K
            } else {
                if (K) {
                    this._containerResizeDuration = f
                } else {
                    this._containerResizeDuration = false
                }
            }
            if (this._containerResizeDuration !== false) {
                this._resizeContainer = true;
                this._updateContainerSize = this._updateContainerSize.bind(this);
                this.on(t.UPDATE, this._updateContainerSize)
            }
        };
        u._updateContainerSize = function (L) {
            var K = this._itemHeightsLookup[L.incoming[0].getElementId()];
            if (K) {
                this._setElHeight(K, this._containerResizeDuration)
            }
        };
        u._storeItemHeight = function (L, M) {
            var K = G(L.getElement());
            this._itemHeights.push({item: L, height: K.height});
            this._itemHeightsLookup[L.getElementId()] = K.height;
            this._itemHeights.sort(function (O, N) {
                return N.height - O.height
            });
            if (M && this._itemHeights[0].item === L) {
                this._setElHeight(K.height)
            }
        };
        u._setElHeight = function (K, M) {
            var L = {height: K + "px"};
            if (M) {
                L.transition = "height " + M + "s"
            } else {
                L.transition = null
            }
            w.setStyle(this._el, L)
        };
        u._initCaptionsGallery = function (K, L) {
            if (!K) {
                return
            }
            this._galleryWithCaptions = t.create(K, "fade", L ? L : {crossFade: true});
            if (this._enableArrowKeys) {
                this._galleryWithCaptions._enableArrowKeys = false
            }
            this.on(t.UPDATE, function (M) {
                var N = this.getItemIndex(M.incoming[0]);
                this._galleryWithCaptions.show(N)
            }.bind(this))
        };
        u._onAutoPlayToNextItem = function () {
            if (this._isAutoPlaying) {
                if (!z.isHidden && this._currentItem.isInView()) {
                    if (this._cancelAutoPlayOnInteraction) {
                        this.off(t.UPDATE, this.stopAutoPlay)
                    }
                    var K = this.showNext();
                    if (K !== null) {
                        if (this._cancelAutoPlayOnInteraction) {
                            this.on(t.UPDATE, this.stopAutoPlay)
                        }
                        setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay)
                    }
                } else {
                    setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay)
                }
            }
        };
        u._onWindowResize = function (K) {
            window.requestAnimationFrame(function () {
                if (this._el) {
                    this.resize()
                }
            }.bind(this))
        };
        b.exports = s
    }, {
        "../templates/paddlenav.js": 287,
        "./../Gallery": 267,
        "./../helpers/inputHasFocus": 278,
        "./../helpers/selectElementFromDataAttributeValue": 279,
        "./../helpers/selectElementThatHasDataAttribute": 280,
        "./../navigation/ToggleNav": 281,
        "@marcom/ac-classlist": 174,
        "@marcom/ac-dom-events/addEventListener": 177,
        "@marcom/ac-dom-events/preventDefault": 185,
        "@marcom/ac-dom-events/removeEventListener": 186,
        "@marcom/ac-dom-metrics/getContentDimensions": 194,
        "@marcom/ac-dom-styles": 215,
        "@marcom/ac-dom-traversal/querySelector": 20,
        "@marcom/ac-dom-traversal/querySelectorAll": 21,
        "@marcom/ac-feature/touchAvailable": 165,
        "@marcom/ac-function/throttle": 219,
        "@marcom/ac-keyboard": 221,
        "@marcom/ac-keyboard/keyMap": 223,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-page-visibility": 224,
        "@marcom/ac-pointer-tracker": 230,
        "@marcom/ac-polyfills/requestAnimationFrame": 500
    }],
    272: [function (c, b, d) {
        var h = c("./create");
        var j = c("./../helpers/selectElementThatHasDataAttribute");
        var i = c("./../Gallery");
        var a = i.FADE_SELECTOR.replace(/\[|\]/g, "");
        var g = i.SLIDE_SELECTOR.replace(/\[|\]/g, "");
        b.exports = function f(l) {
            l = l || {};
            var m = l.context || document.body;
            var n;
            var k;
            n = j(g, m);
            k = n.length;
            while (k--) {
                h(n[k], i.SLIDE, l)
            }
            n = j(a, m);
            k = n.length;
            while (k--) {
                h(n[k], i.FADE, l)
            }
            return i.getAll()
        }
    }, {"./../Gallery": 267, "./../helpers/selectElementThatHasDataAttribute": 280, "./create": 273}],
    273: [function (d, b, f) {
        var i = d("./../fade/FadeGallery");
        var k = d("./../Gallery");
        var c = d("./../slide/SlideGallery");
        var j = "%TYPE% is not a supported gallery type and el has no gallery data attribute.";
        var a = k.FADE_SELECTOR.replace(/\[|\]/g, "");
        var h = k.SLIDE_SELECTOR.replace(/\[|\]/g, "");
        b.exports = function g(o, n, m) {
            var l;
            if (typeof n === "string") {
                if (n === k.SLIDE) {
                    l = c
                } else {
                    if (n === k.FADE) {
                        l = i
                    }
                }
            }
            if (l === undefined) {
                if (o.getAttribute(h) !== null) {
                    l = c
                } else {
                    if (o.getAttribute(a) !== null) {
                        l = i
                    }
                }
            }
            if (l === undefined) {
                throw new Error(j.replace(/%TYPE%/g, n))
            }
            return new l(o, m)
        }
    }, {"./../Gallery": 267, "./../fade/FadeGallery": 274, "./../slide/SlideGallery": 284}],
    274: [function (c, a, f) {
        var j = c("@marcom/ac-object/clone");
        var h = c("@marcom/ac-object/create");
        var d = c("./FadeItem");
        var b = c("./../auto/AutoGallery");
        var k = 0.5;

        function i(n, m) {
            m = j(m) || {};
            m.itemType = m.itemType || d;
            this._fadeDuration = m.duration || k;
            m.toggleNavDuration = m.toggleNavDuration === undefined ? this._fadeDuration : m.toggleNavDuration;
            this._crossFade = m.crossFade;
            this._zIndexCount = m.startZIndex || 1;
            this._ease = m.ease;
            if (m.resizeContainerOnUpdate === true) {
                m.resizeContainerOnUpdate = this._fadeDuration
            }
            this._onItemShowComplete = this._onItemShowComplete.bind(this);
            b.call(this, n, m);
            if (this._currentItem) {
                this._currentItem.fadeIn(0)
            }
        }

        i.RESIZED = b.RESIZED;
        i.UPDATE = b.UPDATE;
        i.UPDATE_COMPLETE = b.UPDATE_COMPLETE;
        var l = b.prototype;
        var g = i.prototype = h(l);
        g.addItem = function (o, m) {
            if (o.nodeType) {
                o = new this._itemType(o)
            }
            var n = l.addItem.call(this, o, m);
            if (o !== this._currentItem) {
                o.fadeOut()
            } else {
                o.fadeIn(0)
            }
            return n
        };
        g.destroy = function (m) {
            var n = l.destroy.call(this, m);
            this._fadeDuration = null;
            this._crossFade = null;
            this._zIndexCount = null;
            this._ease = null;
            this._onItemShowComplete = null;
            return n
        };
        g._startAt = function (m) {
            var n = this._items[m];
            if (n && this._currentItem !== n) {
                this._currentItem.fadeOut(0);
                this._currentItem.hide();
                this._setCurrentItem(n);
                this._currentItem.show();
                this._currentItem.fadeIn(0);
                this.trigger(i.UPDATE, this._items)
            }
        };
        g._onItemShowComplete = function (o) {
            if (o && o.target() !== this._currentItem.getElement()) {
                if (!this._currentItem.isFading()) {
                    this._currentItem.fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete)
                }
                return
            }
            var n;
            var m = this._items.length;
            while (m--) {
                n = this._items[m];
                if (n !== this._currentItem) {
                    n.fadeOut()
                }
            }
            if (this._incomingOutgoingItems) {
                this.trigger(i.UPDATE_COMPLETE, this._incomingOutgoingItems)
            }
        };
        g._updateItems = function (n, m) {
            if (m) {
                return
            }
            if (this._crossFade) {
                var o = m ? null : this.trigger.bind(this, i.UPDATE_COMPLETE, n);
                n.outgoing[0].fadeOut(this._fadeDuration * 0.99, this._ease);
                n.incoming[0].fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, o)
            } else {
                this._incomingOutgoingItems = m ? false : n;
                if (!n.outgoing[0].isFading()) {
                    n.incoming[0].fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete)
                }
            }
            n.outgoing[0].hide();
            n.incoming[0].show()
        };
        a.exports = i
    }, {
        "./../auto/AutoGallery": 271,
        "./FadeItem": 275,
        "@marcom/ac-object/clone": 460,
        "@marcom/ac-object/create": 461
    }],
    275: [function (b, a, g) {
        var k = b("@marcom/ac-dom-styles/setStyle");
        var j = b("@marcom/ac-object/create");
        var f = b("@marcom/ac-solar/fade");
        var l = b("@marcom/ac-solar/fadeIn");
        var i = b("@marcom/ac-solar/fadeOut");
        var d = b("./../Item");

        function c(o, n) {
            d.call(this, o, n);
            k(o, {position: "absolute"})
        }

        c.SELECTED = d.SELECTED;
        c.SHOW = d.SHOW;
        c.HIDE = d.HIDE;
        var m = d.prototype;
        var h = c.prototype = j(m);
        h.fadeIn = function (n, o, q, p) {
            if (n) {
                k(this._el, {zIndex: q || 1});
                this._destroyCurrentClip();
                this._clip = f(this._el, 0, 1, n, {ease: o, onComplete: p})
            } else {
                l(this._el, 0);
                k(this._el, {zIndex: q || 1})
            }
        };
        h.fadeOut = function (n, o) {
            if (n) {
                this._destroyCurrentClip();
                this._clip = i(this._el, n, {ease: o})
            } else {
                i(this._el, 0)
            }
        };
        h.isFading = function () {
            return !!(this._clip && this._clip.playing())
        };
        h.destroy = function () {
            k(this._el, {position: null, opacity: null, zIndex: null});
            m.destroy.call(this);
            this._destroyCurrentClip();
            this._clip = null
        };
        h._destroyCurrentClip = function () {
            if (this.isFading()) {
                this._clip.destroy()
            }
        };
        a.exports = c
    }, {
        "./../Item": 268,
        "@marcom/ac-dom-styles/setStyle": 218,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-solar/fade": 260,
        "@marcom/ac-solar/fadeIn": 261,
        "@marcom/ac-solar/fadeOut": 262
    }],
    276: [function (c, f, b) {
        var d = c("@marcom/ac-object/create");
        var g = c("@marcom/ac-object/extend");
        f.exports = function a(k) {
            var i = this;
            var j = function j() {
                i.apply(this, arguments)
            };
            var h = d(this.prototype);
            j.prototype = g(h, k);
            g(j, this);
            return j
        }
    }, {"@marcom/ac-object/create": 461, "@marcom/ac-object/extend": 463}],
    277: [function (d, f, c) {
        var b = d("@marcom/ac-dom-styles/getStyle");
        var a = d("@marcom/ac-dom-metrics/getContentDimensions");
        f.exports = function g(h) {
            var i = b(h, "margin-right", "margin-left");
            return Math.round(a(h).width) + parseInt(i.marginRight, 10) + parseInt(i.marginLeft, 10)
        }
    }, {"@marcom/ac-dom-metrics/getContentDimensions": 194, "@marcom/ac-dom-styles/getStyle": 216}],
    278: [function (b, c, a) {
        c.exports = function d() {
            var f = ["input", "select", "textarea"];
            return f.indexOf(document.activeElement.nodeName.toLowerCase()) > -1
        }
    }, {}],
    279: [function (c, f, b) {
        var g = c("@marcom/ac-dom-traversal/querySelectorAll");
        var a = function a(i, n) {
            var j;
            var m = document.getElementsByTagName("*");
            var h = 0;
            var k = m.length;
            var l = [];
            for (h; h < k; h++) {
                j = m[h];
                if (j.getAttribute(i) !== null && j.getAttribute(i).split(" ").indexOf(n) > -1) {
                    l[l.length] = j
                }
            }
            return l
        };
        f.exports = function d(j, m) {
            var l = g("[" + j + '*="' + m + '"]');
            if (l.length === 0 && document.documentMode === 7) {
                return a(j, m)
            }
            var n = [];
            var i = 0;
            var k = l.length;
            var h;
            for (i; i < k; i++) {
                h = l[i].getAttribute(j);
                if (h === m) {
                    n.push(l[i])
                } else {
                    if (h && h.length) {
                        h = h.split(" ");
                        if (h.indexOf(m) > -1) {
                            n.push(l[i])
                        }
                    }
                }
            }
            return n
        }
    }, {"@marcom/ac-dom-traversal/querySelectorAll": 21}],
    280: [function (c, d, b) {
        var h = c("@marcom/ac-dom-traversal/querySelectorAll");
        var f = c("@marcom/ac-dom-traversal/ancestors");
        var a = function a(j, k) {
            var l;
            var o = document.getElementsByTagName("*");
            var i = 0;
            var m = o.length;
            var n = [];
            for (i; i < m; i++) {
                l = o[i];
                if (l.getAttribute(j) !== null && (!k || f(l).indexOf(k) > -1)) {
                    n[n.length] = l
                }
            }
            return n
        };
        d.exports = function g(i, j) {
            j = j || document.body;
            var k = h("[" + i + "]", j);
            if (k.length === 0 && document.documentMode === 7) {
                return a(i, j)
            }
            return k
        }
    }, {"@marcom/ac-dom-traversal/ancestors": 16, "@marcom/ac-dom-traversal/querySelectorAll": 21}],
    281: [function (i, c, s) {
        var g = i("@marcom/ac-dom-events/addEventListener");
        var h = i("@marcom/ac-dom-events/removeEventListener");
        var m = i("@marcom/ac-dom-metrics/getDimensions");
        var r = i("@marcom/ac-dom-metrics/getPosition");
        var f = i("@marcom/ac-dom-styles/getStyle");
        var d = i("@marcom/ac-dom-styles/setStyle");
        var a = i("@marcom/ac-dom-traversal/ancestors");
        var j = i("@marcom/ac-object/create");
        var q = i("@marcom/ac-solar/scrollX");
        var k = i("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var n = i("./../Gallery");
        var l = 0.5;

        function p(v, t, u) {
            u = u || {};
            this._el = v;
            this._isRightToLeft = u.rightToLeft === undefined ? f(v, "direction").direction === "rtl" : u.rightToLeft;
            this._scrollType = this._scrollDirection();
            this._gallery = t;
            this._triggers = {};
            this._ordered = [];
            this._containerEl = this._el.children[0];
            this._slideDuration = u.duration === undefined ? l : u.duration;
            k.call(this)
        }

        var b = k.prototype;
        var o = p.prototype = j(b);
        o.start = function () {
            this._onWindowLoad = this._onWindowLoad.bind(this);
            this._onGalleryUpdated = this._onGalleryUpdated.bind(this);
            this._gallery.on(n.UPDATE, this._onGalleryUpdated);
            this.resize();
            g(window, "load", this._onWindowLoad)
        };
        o.addTrigger = function (u, v) {
            if (this._triggers[v.getElementId()] !== undefined) {
                return
            }
            var t = a(u);
            if (t.indexOf(this._el) > -1) {
                var w = {el: u};
                this._triggers[v.getElementId()] = w;
                this._ordered.push(w)
            }
        };
        o.resize = function () {
            if (!this._ordered.length) {
                return
            }
            d(this._containerEl, {paddingLeft: null, paddingRight: null});
            this._containerWidth = m(this._containerEl).width;
            this._width = m(this._el).width;
            this._viewCenter = Math.round(this._width * 0.5);
            var v = this._ordered.length;
            while (v--) {
                this._setTriggerData(this._ordered[v])
            }
            this._ordered.sort(function (A, z) {
                return A.left - z.left
            });
            if (this._containerWidth > this._width) {
                var x = this._ordered[0];
                var w = this._ordered[this._ordered.length - 1];
                var u = (this._width - x.width) * 0.5;
                var y = (this._width - w.width) * 0.5;
                d(this._containerEl, {paddingLeft: u + "px", paddingRight: y + "px"});
                var t = this._triggers[this._gallery.getCurrentItem().getElementId()];
                if (t) {
                    this._centerNav(t)
                }
            }
        };
        o.destroy = function () {
            this._gallery.off(n.UPDATE, this._onGalleryUpdated);
            h(window, "load", this._onWindowLoad);
            d(this._containerEl, {paddingLeft: null, paddingRight: null});
            this._el = null;
            this._gallery = null;
            this._triggers = null;
            this._ordered = null;
            this._containerEl = null;
            this._destroyCurrentClip();
            this._clip = null;
            return b.destroy.call(this)
        };
        o._onWindowLoad = function () {
            h(window, "load", this._onWindowLoad);
            this.resize()
        };
        o._setTriggerData = function (u) {
            u.width = m(u.el).width;
            var t = r(u.el);
            u.left = t.left;
            u.right = t.right;
            u.center = u.left + u.width * 0.5
        };
        o._centerNav = function (t, v) {
            this._setTriggerData(t);
            this._width = m(this._el).width;
            this._viewCenter = Math.round(this._width * 0.5);
            var u = Math.round(t.center - this._viewCenter);
            if (this._isRightToLeft) {
                if (this._scrollType !== "negative") {
                    u = Math.abs(u)
                }
                if (this._scrollType === "default") {
                    u = this._el.scrollWidth - this._el.clientWidth - u
                }
            }
            this._destroyCurrentClip();
            if (v) {
                this._clip = q(this._el, u, v)
            } else {
                this._el.scrollLeft = u
            }
        };
        o._onGalleryUpdated = function (t) {
            var u = this._triggers[t.incoming[0].getElementId()];
            if (u) {
                this._centerNav(u, this._slideDuration)
            }
        };
        o._destroyCurrentClip = function () {
            if (this._clip && this._clip.playing()) {
                this._clip.destroy()
            }
        };
        o._scrollDirection = function () {
            var u = "reverse";
            var t = document.createElement("div");
            t.style.cssText = "width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;";
            t.style.direction = "rtl";
            t.innerHTML = "test";
            document.body.appendChild(t);
            if (t.scrollLeft > 0) {
                u = "default"
            } else {
                t.scrollLeft = 1;
                if (t.scrollLeft === 0) {
                    u = "negative"
                }
            }
            document.body.removeChild(t);
            return u
        };
        c.exports = p
    }, {
        "./../Gallery": 267,
        "@marcom/ac-dom-events/addEventListener": 177,
        "@marcom/ac-dom-events/removeEventListener": 186,
        "@marcom/ac-dom-metrics/getDimensions": 195,
        "@marcom/ac-dom-metrics/getPosition": 199,
        "@marcom/ac-dom-styles/getStyle": 216,
        "@marcom/ac-dom-styles/setStyle": 218,
        "@marcom/ac-dom-traversal/ancestors": 16,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-solar/scrollX": 266
    }],
    282: [function (b, d, a) {
        var c = b("./../analytics/AnalyticsManager");
        d.exports = new c()
    }, {"./../analytics/AnalyticsManager": 270}],
    283: [function (c, d, b) {
        var g = ["input", "select", "textarea", "button", "object"];
        var h = ["href", "tabindex", "contenteditable"];
        var a = function a() {
            this.focusableSelectors = g.concat(h.map(function (i) {
                return i === "href" ? "a[" + i + "]" : "*[" + i + "]"
            })).join(",")
        };
        var f = a.prototype;
        f.isFocusable = function (k, i) {
            var l = k.nodeName.toLowerCase();
            var j = g.indexOf(l) > -1;
            if (l === "a") {
                return true
            }
            if (j) {
                return !k.disabled
            }
            if (!k.contentEditable) {
                return true
            }
            i = i || k.tabIndex;
            return isNaN(i)
        };
        f.isTabbable = function (j) {
            var i = j.getAttribute("tabindex");
            if (!isNaN(i)) {
                return i >= 0
            } else {
                return this.isFocusable(j, i)
            }
        };
        f.getTabbable = function (n) {
            var k = n.length;
            var j = [];
            for (var m = 0; m < k; m++) {
                if (this.isTabbable(n[m])) {
                    j.push(n[m])
                }
            }
            return j
        };
        d.exports = new a()
    }, {}],
    284: [function (g, c, w) {
        var d = g("@marcom/ac-classlist");
        var o = g("@marcom/ac-dom-styles");
        var u = g("@marcom/ac-dom-traversal/querySelectorAll");
        var s = g("@marcom/ac-object/clone");
        var i = g("@marcom/ac-object/create");
        var v = g("./../helpers/getElementFullWidth");
        var m = g("@marcom/ac-solar/moveX");
        var t = g("./../helpers/selectElementFromDataAttributeValue");
        var h = g("./../helpers/selectElementThatHasDataAttribute");
        var l = g("./../auto/AutoGallery");
        var f = g("@marcom/ac-pointer-tracker").PointerTracker;
        var q = g("./SlideItem");
        var j = g("./SlideItemWrapper");
        var a = 0.5;
        var k = 0.5;
        var r = true;

        function p(z, y) {
            y = s(y) || {};
            y.itemType = y.itemType || q;
            this._itemsPerSlide = y.itemsPerSlide || 1;
            var x = y.deeplink !== false;
            y.deeplink = false;
            this._slideDuration = y.duration !== undefined ? y.duration : k;
            y.toggleNavDuration = y.toggleNavDuration === undefined ? this._slideDuration : y.toggleNavDuration;
            this._itemCenterPoint = y.itemCenterPoint !== undefined ? y.itemCenterPoint : a;
            this._edgePullResistance = y.edgePullResistance ? y.edgePullResistance : r;
            this._slideOptions = {ease: y.ease};
            if (y.resizeContainerOnUpdate === true) {
                y.resizeContainerOnUpdate = this._slideDuration
            }
            y.touch = y.touch !== false;
            this._originalWrapAround = y.wrapAround || false;
            l.call(this, z, y);
            if (x) {
                var A = this._getDeeplinkedItem();
                if (A) {
                    if (this._currentItem !== A) {
                        this._currentItem.hide();
                        this._setCurrentItem(A);
                        this._currentItem.show()
                    }
                }
            }
            this._positionItems = this._positionItems.bind(this);
            this._createContainer();
            if (this._items.length !== 0) {
                this._positionItems()
            }
            this._isInstantiated = true
        }

        p.RESIZED = l.RESIZED;
        p.UPDATE = l.UPDATE;
        p.UPDATE_COMPLETE = l.UPDATE_COMPLETE;
        var b = l.prototype;
        var n = p.prototype = i(b);
        n.addItem = function (z, x) {
            if (z.nodeType) {
                z = new this._itemType(z)
            }
            var y = b.addItem.call(this, z, x);
            if (this._containerEl !== undefined) {
                this._addItemToContainer(z);
                this._positionItems()
            }
            this._updateWrapAround();
            return y
        };
        n.removeItem = function (A, y) {
            if (this._containerEl && A.getElement().parentElement === this._containerEl) {
                var x = A.getOriginalParentElement();
                if (x) {
                    x.appendChild(A.getElement())
                } else {
                    if (typeof A.removeItems === "function") {
                        A.removeItems();
                        y.destroyItem = true
                    }
                }
                var z = b.removeItem.call(this, A, y);
                if (this._currentItem) {
                    this._positionItems(this._currentItem)
                }
                this._updateWrapAround();
                return z
            }
            return b.removeItem.call(this, A, y)
        };
        n.resize = function () {
            this._positionItems();
            this._snapToPosition(this._currentItem.position());
            return b.resize.call(this)
        };
        n.destroy = function (y) {
            this._destroyCurrentClip();
            this._clip = null;
            var x = this._items.length;
            while (x--) {
                this._items[x].off(q.CENTER_POINT_CHANGED, this._positionItems)
            }
            if (this._touchSwipe) {
                this._touchSwipe.off(f.START, this._onSwipeStart);
                this._touchSwipe.off(f.UPDATE, this._onSwipeUpdate)
            }
            if (this._clickSwipe) {
                this._clickSwipe.off(f.START, this._onSwipeStart);
                this._clickSwipe.off(f.UPDATE, this._onSwipeUpdate)
            }
            var A = this._el;
            var z = b.destroy.call(this, y);
            A.removeChild(this._containerEl);
            this._containerEl = null;
            this._slideDuration = null;
            this._itemCenterPoint = null;
            this._positionItems = null;
            this._slideOptions = null;
            return z
        };
        n._addItems = function (A) {
            if (this._itemsPerSlide > 1) {
                var F;
                var z = /(^\[).*(\]$)/.test(A);
                if (z) {
                    F = h(A.replace(/\[|\]/g, ""), this._el)
                } else {
                    F = u(A, this._el)
                }
                var x;
                var E;
                var B;
                var C = 0;
                var D = 0;
                var y = F.length;
                for (D; D < y; D++) {
                    if (C === 0) {
                        x = new j()
                    }
                    x.addItem(F[D]);
                    B = F[D].getAttribute("id");
                    if (B) {
                        E = t("data-ac-gallery-trigger", B);
                        this._addItemTriggers(x, E)
                    }
                    if (++C === this._itemsPerSlide || D === y - 1) {
                        C = 0;
                        x.resize();
                        this.addItem(x)
                    }
                }
            } else {
                b._addItems.call(this, A)
            }
        };
        n._createContainer = function () {
            this._containerEl = document.createElement("div");
            d.add(this._containerEl, "ac-gallery-slidecontainer");
            o.setStyle(this._containerEl, {position: "absolute", left: "0", top: "0", width: "100%", height: "100%"});
            this._el.appendChild(this._containerEl);
            var x = 0;
            var y = this._items.length;
            for (x;
                 x < y; x++) {
                this._addItemToContainer(this._items[x])
            }
        };
        n._addItemToContainer = function (x) {
            this._containerEl.appendChild(x.getElement());
            x.on(q.CENTER_POINT_CHANGED, this._positionItems)
        };
        n._positionItems = function (B) {
            B = B || this._currentItem;
            var F = this._items;
            if (this._wrapAround) {
                F = this._shuffleItems()
            }
            var H = this._getActualPositionX() - B.position() || 0;
            var G = parseInt(o.getStyle(this._el, "width").width, 10);
            var y = 0;
            var D = 0;
            var A = F.length;
            var I;
            var z;
            var x;
            var C;
            var E;
            for (D; D < A; D++) {
                I = F[D];
                I.resize();
                z = I.getElement();
                o.setStyle(z, {left: y + "px"});
                x = v(z);
                C = G - x;
                E = I.centerPoint && I.centerPoint() !== null ? I.centerPoint() : this._itemCenterPoint;
                I.position(y * -1 + C * E);
                if (this._isRightToLeft) {
                    y -= x
                } else {
                    y += x
                }
            }
            y = B.position() + H;
            this._snapToPosition(y)
        };
        n._getActualPositionX = function () {
            var y = o.getStyle(this._containerEl, "transform").transform;
            if (!y || y === "none") {
                var z = o.getStyle(this._containerEl, "left").left;
                return parseInt(z, 10)
            } else {
                if (y === this._transformStyles && this._actualPositionX !== undefined) {
                    return this._actualPositionX
                }
            }
            this._transformStyles = y;
            var x = this._transformStyles.split(",");
            this._actualPositionX = x[4] || this._currentItem.position();
            return this._actualPositionX * 1
        };
        n._snapToPosition = function (x) {
            this._destroyCurrentClip();
            this._positionX = x;
            o.setStyle(this._containerEl, {transition: "transform 0s, left 0s"});
            m(this._containerEl, x, 0, this._slideOptions)
        };
        n._slideToPosition = function (x, y, z) {
            this._positionX = x;
            this._clip = m(this._containerEl, x, y, {ease: this._slideOptions.ease, onComplete: z})
        };
        n._setUpSwiping = function (y, x) {
            var z = b._setUpSwiping.call(this, y, x);
            this._onSwipeStart = this._onSwipeStart.bind(this);
            this._onSwipeUpdate = this._onSwipeUpdate.bind(this);
            if (this._touchSwipe) {
                this._touchSwipe.on(f.START, this._onSwipeStart);
                this._touchSwipe.on(f.UPDATE, this._onSwipeUpdate)
            }
            if (this._clickSwipe) {
                this._clickSwipe.on(f.START, this._onSwipeStart);
                this._clickSwipe.on(f.UPDATE, this._onSwipeUpdate)
            }
            return z
        };
        n._onSwipeStart = function (x) {
            if (this._clip && this._clip.playing()) {
                this._destroyCurrentClip();
                this._positionX = this._getActualPositionX()
            }
        };
        n._onSwipeUpdate = function (x) {
            this._destroyCurrentClip();
            var z = this.getItems().slice(-1)[0].position();
            var A = this._positionX > 0 || this._positionX < z;
            var y = x.diffX;
            if (this._edgePullResistance && !this._wrapAround && A) {
                y *= 0.5
            }
            this._snapToPosition(this._positionX - y)
        };
        n._onSwipeEnd = function (x) {
            var y = b._onSwipeEnd.call(this, x);
            if (y === null) {
                y = this.show(this._currentItem, {interactionEvent: x.interactionEvent})
            }
            return y
        };
        n._shuffleItems = function () {
            var B = this._items.length === 2 && !this._isAutoPlaying;
            if (B) {
                return this._items.slice()
            }
            var E = this._items.length;
            var y = this._items.indexOf(this._currentItem);
            var D = Math.floor(E * 0.5);
            var A;
            var x;
            var z;
            if (y < D) {
                A = D - y;
                var C = E - A;
                x = this._items.slice(C);
                z = this._items.slice(0, C);
                return x.concat(z)
            } else {
                if (y > D) {
                    A = y - D;
                    x = this._items.slice(0, A);
                    z = this._items.slice(A);
                    return z.concat(x)
                }
            }
            return this._items
        };
        n._updateItems = function (y, x) {
            this._destroyCurrentClip();
            if (this._wrapAround) {
                this._positionItems(y.outgoing[0])
            }
            if (this.getItemIndex(y.outgoing[0]) > -1) {
                var A = x ? null : this.trigger.bind(this, p.UPDATE_COMPLETE, y);
                var z = this._slideDuration;
                this._slideToPosition(y.incoming[0].position(), z, A);
                if (y.incoming[0] !== y.outgoing[0]) {
                    y.incoming[0].show();
                    y.outgoing[0].hide()
                }
            } else {
                this._slideToPosition(this._currentItem.position(), this._slideDuration);
                y.incoming[0].show();
                if (!x) {
                    this.trigger(p.UPDATE_COMPLETE, y)
                }
            }
        };
        n._updateWrapAround = function () {
            if (this._items.length <= 2) {
                this._wrapAround = false
            } else {
                if (this._originalWrapAround) {
                    this._wrapAround = this._originalWrapAround
                }
            }
            if (this._isInstantiated && (this._previousButtons || this._nextButtons)) {
                this._updatePaddleNavState()
            }
        };
        n._destroyCurrentClip = function () {
            if (this._clip && this._clip.playing()) {
                this._clip.destroy()
            }
        };
        c.exports = p
    }, {
        "./../auto/AutoGallery": 271,
        "./../helpers/getElementFullWidth": 277,
        "./../helpers/selectElementFromDataAttributeValue": 279,
        "./../helpers/selectElementThatHasDataAttribute": 280,
        "./SlideItem": 285,
        "./SlideItemWrapper": 286,
        "@marcom/ac-classlist": 174,
        "@marcom/ac-dom-styles": 215,
        "@marcom/ac-dom-traversal/querySelectorAll": 21,
        "@marcom/ac-object/clone": 460,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-pointer-tracker": 230,
        "@marcom/ac-solar/moveX": 264
    }],
    285: [function (b, a, d) {
        var h = b("@marcom/ac-dom-styles/setStyle");
        var g = b("@marcom/ac-object/create");
        var c = b("./../Item");

        function i(l, k) {
            c.call(this, l, k);
            h(l, {position: "absolute", transform: {translateZ: 0}});
            this._parentElement = l.parentElement
        }

        i.CENTER_POINT_CHANGED = "centerpointchanged";
        i.SELECTED = c.SELECTED;
        i.SHOW = c.SHOW;
        i.HIDE = c.HIDE;
        var j = c.prototype;
        var f = i.prototype = g(j);
        f.position = function (k) {
            if (k !== undefined) {
                this._position = k
            }
            return this._position || 0
        };
        f.centerPoint = function (k) {
            if (k !== undefined) {
                this._centerPoint = k;
                this.trigger(i.CENTER_POINT_CHANGED)
            }
            return this._centerPoint !== undefined ? this._centerPoint : null
        };
        f.getOriginalParentElement = function () {
            return this._parentElement
        };
        f.resize = function () {
        };
        f.destroy = function () {
            h(this._el, {position: null, left: null, transform: null});
            j.destroy.call(this)
        };
        a.exports = i
    }, {"./../Item": 268, "@marcom/ac-dom-styles/setStyle": 218, "@marcom/ac-object/create": 461}],
    286: [function (g, d, h) {
        var n = g("@marcom/ac-classlist");
        var k = g("@marcom/ac-dom-styles/setStyle");
        var c = g("@marcom/ac-dom-traversal/querySelectorAll");
        var j = g("@marcom/ac-object/create");
        var o = g("./../singletons/tabManager");
        var a = g("./../helpers/getElementFullWidth");
        var l = g("./SlideItem");
        var b = "ac-gallery-slideitemwrapper";

        function f() {
            l.call(this, document.createElement("div"));
            this._items = [];
            this._currentWidth = 0;
            n.add(this._el, b)
        }

        var m = l.prototype;
        var i = f.prototype = j(m);
        i.addItem = function (r) {
            this._items.push({el: r, parentElement: r.parentElement});
            this._el.appendChild(r);
            var p = r.getAttribute("id");
            if (p) {
                var s = this._el.getAttribute("id") || "";
                var q = s.length ? "-" : "";
                s += q + p;
                this._el.setAttribute("id", s)
            }
            this._focusableEls = this._focusableEls.concat(c(o.focusableSelectors, r))
        };
        i.removeItems = function () {
            var r;
            var p;
            var q = 0;
            var s = this._items.length;
            for (q; q < s;
                 q++) {
                r = this._items[q].el;
                k(r, {position: null, left: null});
                p = this._items[q].parentElement;
                if (p) {
                    p.appendChild(r)
                }
            }
        };
        i.resize = function () {
            this._currentWidth = 0;
            var q;
            var p = 0;
            var r = this._items.length;
            for (p; p < r; p++) {
                q = this._items[p].el;
                k(q, {position: "absolute", left: this._currentWidth + "px"});
                this._currentWidth += a(q)
            }
            k(this._el, {width: this._currentWidth + "px"})
        };
        i.destroy = function () {
            this.removeItems();
            this._items = null;
            this._currentWidth = null;
            var p = this._el.parentElement;
            if (p) {
                p.removeChild(this._el)
            }
            m.destroy.call(this)
        };
        d.exports = f
    }, {
        "./../helpers/getElementFullWidth": 277,
        "./../singletons/tabManager": 283,
        "./SlideItem": 285,
        "@marcom/ac-classlist": 174,
        "@marcom/ac-dom-styles/setStyle": 218,
        "@marcom/ac-dom-traversal/querySelectorAll": 21,
        "@marcom/ac-object/create": 461
    }],
    287: [function (b, c, a) {
        var d = "";
        d += '<nav class="paddlenav">';
        d += "<ul>";
        d += '<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
        d += '<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
        d += "</ul>";
        d += "</nav>";
        c.exports = d
    }, {}],
    288: [function (b, c, a) {
        var f = {};
        c.exports = function d(h, g, l) {
            h = h.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            if (l || !f.hasOwnProperty(h)) {
                var j = new RegExp("[\\?&]" + h + "=([^&#]*)");
                var i = j.exec(location.search);
                var k = i === null ? g : decodeURIComponent(i[1].replace(/\+/g, " "));
                if (k === "true" || k === "false") {
                    k = k === "true"
                }
                if (!isNaN(parseFloat(k))) {
                    k = parseFloat(k)
                }
                f[h] = k
            }
            return f[h]
        }
    }, {}],
    289: [function (c, d, b) {
        var a = c("@marcom/ac-jetpack-lib/core/BaseComponent");
        var i = a.prototype;
        var h = {ELEMENT_ENGAGEMENT: "data-engaged"};

        function g(o, q, j, m, k, p, l) {
            this.name = "EngagedElementComponent_" + l;
            a.call(this, o, q, j, m, k, p, l);
            this.timeToEngage = 300;
            this.inViewThreshold = 0.75;
            if (this.element.hasAttribute(h.ELEMENT_ENGAGEMENT)) {
                try {
                    this._overwriteElementEngagementProps()
                } catch (n) {
                    console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!", n)
                }
            }
            this.trackedElement = this.section.elementEngagement.addElement(this.element, {
                timeToEngage: this.timeToEngage,
                inViewThreshold: this.inViewThreshold
            })
        }

        var f = g.prototype = Object.create(a.prototype);
        g.prototype.constructor = g;
        f.setupEvents = function () {
            i.setupEvents.call(this);
            this._onElementEngaged = this._onElementEngaged.bind(this);
            this.trackedElement.once("engaged", this._onElementEngaged)
        };
        f._onElementEngaged = function (j) {
            this.element.classList.add("engaged")
        };
        f._overwriteElementEngagementProps = function () {
            var k = this.element.getAttribute(h.ELEMENT_ENGAGEMENT);
            var j = JSON.parse(k);
            this.timeToEngage = j.timeToEngage === undefined ? this.timeToEngage : parseFloat(j.timeToEngage);
            this.inViewThreshold = j.inViewThreshold === undefined ? this.inViewThreshold : parseFloat(j.inViewThreshold)
        };
        d.exports = g
    }, {"@marcom/ac-jetpack-lib/core/BaseComponent": 306}],
    290: [function (c, b, g) {
        var d = c("@marcom/ac-jetpack-lib/core/BaseComponent");
        var m = document.querySelector("#ac-localnav");
        var a = m.clientHeight;
        var l = "";
        var f = null;
        var j = 0;
        var i = {THEME: "data-localnav-theme"};

        function k(r, t, n, q, o, s, p) {
            this.name = "LocalnavThemeChangerComponent_" + j++;
            d.call(this, r, t, n, q, o, s, p);
            this.theme = this.element.getAttribute(i.THEME);
            this.top = this.element.getBoundingClientRect().top + o;
            this.bottom = this.element.getBoundingClientRect().bottom + o
        }

        var h = k.prototype = Object.create(d.prototype);
        k.prototype.constructor = k;
        h.onSectionWillAppear = function (n, o) {
            this.onScroll(null, n, o)
        };
        h.onSectionWillDisappear = function (n, o) {
            this.onScroll(null, n, o)
        };
        h.onScroll = function (p, o, q) {
            var n = o + a;
            if (this.top < n && this.bottom > n) {
                if (f && f.theme !== this.theme) {
                    f.removeTheme()
                }
                f = this;
                this.setTheme()
            } else {
                if (f === this) {
                    this.removeTheme();
                    f = null
                }
            }
        };
        h.onResizeImmediate = function (o, n, p) {
            this.top = this.element.getBoundingClientRect().top + n;
            this.bottom = this.element.getBoundingClientRect().bottom + n;
            a = m.clientHeight
        };
        h.setTheme = function () {
            if (l === this.theme) {
                return
            }
            if (l !== "") {
                m.classList.remove(l)
            }
            m.classList.add(this.theme);
            l = this.theme
        };
        h.removeTheme = function () {
            if (l !== this.theme) {
                return
            }
            m.classList.remove(l);
            l = ""
        };
        b.exports = k
    }, {"@marcom/ac-jetpack-lib/core/BaseComponent": 306}],
    291: [function (g, c, i) {
        var h = g("@marcom/ac-jetpack-lib/core/BaseComponent");
        var d = g("@marcom/ac-jetpack-lib/model/EnabledFeatures");
        var q = h.prototype;
        var r = g("path");
        var n = g("@marcom/ac-feature/canvasAvailable");
        var o = g("@marcom/ac-media-object");
        var p = g("@marcom/ac-viewport-emitter");
        var l = g("@marcom/ac-cname").cname;
        var f = g("@marcom/ac-eclipse/Clip");
        var b = 0.2;
        var m = 0;
        var k = {ELEMENT_ENGAGEMENT: "data-engaged", MEDIA: "data-media"};

        function a(x, z, s, v, t, y, u) {
            this._name = "MediaObjectComponent_" + u + "-" + m++;
            h.call(this, x, z, s, v, t, y, u);
            if (!n()) {
                return
            }
            this.uriPattern = a.URI_PATTERN;
            this.type = "flow";
            this.name = null;
            this.locale = "us";
            this.rewindWhenInactive = false;
            this.loop = false;
            this.playbackRate = 1;
            this.mute = false;
            this.transitionIn = false;
            this.iosInline = false;
            try {
                this._overwriteMediaProps()
            } catch (w) {
                console.error("MediaObjectComponent::_overwriteMediaProps bad JSON in data-attribute!", w)
            }
            if (!this.name) {
                console.log("Missing media name for " + this.element);
                return
            }
            this._media = null;
            this._fadeClip = null;
            this._breakpoint = v;
            this._retina = p.retina;
            this._canLoad = false;
            this._loadCalled = false;
            this._enhanceCalled = false;
            this._isEngaged = false;
            this._isSectionVisible = false;
            this._isShown = false;
            this._mediaIsPlaying = false;
            this._mediaHasPlayed = false;
            this._playOnceReady = false;
            this._onMediaLoaded = this._onMediaLoaded.bind(this);
            this._onMediaEnhanced = this._onMediaEnhanced.bind(this);
            this._onMediaReady = this._onMediaReady.bind(this);
            this._onFadeInComplete = this._onFadeInComplete.bind(this);
            this.timeToEngage = 0;
            this.inViewThreshold = 0.75;
            if (this.element.hasAttribute(k.ELEMENT_ENGAGEMENT)) {
                try {
                    this._overwriteElementEngagementProps()
                } catch (w) {
                    console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!", w)
                }
            }
            this.trackedElement = this.section.elementEngagement.addElement(this.element, {
                timeToEngage: this.timeToEngage,
                inViewThreshold: this.inViewThreshold
            });
            this._initializeMedia()
        }

        var j = a.prototype = Object.create(h.prototype);
        a.prototype.constructor = a;
        a.URI_PATTERN = "";
        j.setupEvents = function () {
            q.setupEvents.call(this);
            this._onElementEngaged = this._onElementEngaged.bind(this);
            if (this.trackedElement) {
                this.trackedElement.on("engaged", this._onElementEngaged)
            }
        };
        j.onSectionWillAppear = function (s, t) {
            q.onSectionWillAppear.call(this, s, t);
            this._isSectionVisible = true;
            this._loadMedia()
        };
        j.onSectionWillDisappear = function (s, t) {
            q.onSectionWillDisappear.call(this, s, t);
            this._isSectionVisible = false;
            if (this.rewindWhenInactive) {
                this._rewindMedia()
            } else {
                this._pauseMedia()
            }
        };
        j.onBreakpoint = function (t, v, s, u) {
            q.onSectionWillDisappear.call(this, t, v, s, u);
            this._rebuildIfChanged("_breakpoint", t)
        };
        j.onRetinaChange = function (v, t, s, u) {
            q.onSectionWillDisappear.call(this, v, t, s, u);
            this._rebuildIfChanged("_retina", v)
        };
        j._viewportForName = function (t, s) {
            if (s.indexOf("xlarge") > -1) {
                return "large" + (s.indexOf("_2x") > -1 ? "_2x" : "")
            }
            return s
        };
        j._uriPatternForName = function (s, t) {
            return t
        };
        j._rebuildIfChanged = function (w, v) {
            var u = JSON.stringify(this._getMediaSource());
            this[w] = v;
            var t = JSON.stringify(this._getMediaSource());
            if (u != t) {
                var s = this._mediaIsPlaying;
                this._destroyMedia();
                this._initializeMedia();
                if (this._isSectionVisible) {
                    if (s) {
                        this._playMedia()
                    } else {
                        this._loadMedia()
                    }
                }
            }
        };
        j._overwriteMediaProps = function () {
            var t = this.element.getAttribute(k.MEDIA);
            var s = JSON.parse(t);
            this.uriPattern = s.uriPattern === undefined ? this.uriPattern : s.uriPattern;
            this.type = s.type === undefined ? this.type : s.type;
            this.name = s.name === undefined ? this.name : s.name;
            this.locale = s.locale === undefined ? this.locale : s.locale;
            this.rewindWhenInactive = s.rewindWhenInactive === undefined ? this.rewindWhenInactive : s.rewindWhenInactive;
            this.loop = s.loop === undefined ? this.loop : s.loop;
            this.playbackRate = s.playbackRate === undefined ? this.playbackRate : s.playbackRate;
            this.mute = s.mute === undefined ? this.mute : s.mute;
            this.iosInline = s.iosInline === undefined ? this.iosInline : s.iosInline;
            this.transitionIn = s.transitionIn === undefined ? this.transitionIn : s.transitionIn
        };
        j._overwriteElementEngagementProps = function () {
            var t = this.element.getAttribute(k.ELEMENT_ENGAGEMENT);
            var s = JSON.parse(t);
            this.timeToEngage = s.timeToEngage === undefined ? this.timeToEngage : parseFloat(s.timeToEngage);
            this.inViewThreshold = s.inViewThreshold === undefined ? this.inViewThreshold : parseFloat(s.inViewThreshold)
        };
        j._getMediaSource = function () {
            var w = this._uriPatternForName(this.name, this.uriPattern);
            var t = this._retina ? this._breakpoint.concat("_2x") : this._breakpoint;
            t = this._viewportForName(this.name, t);
            if ((typeof w === "undefined" ? "undefined" : _typeof(w)) == "object") {
                w = w[this.type]
            }
            var v = w.replace("{{locale}}", this.locale).replace("{{name}}", this.name).replace("{{type}}", this.type).replace("{{viewport}}", t);
            if (r.isAbsolute(v)) {
                v = l.addPrefix(v)
            }
            var u = r.dirname(v);
            var s = r.basename(v);
            if (this.type === "split-file" && d.IS_DESKTOP) {
                return {basePath: r.dirname(v) + "/" + r.basename(v), splitFileLoading: true}
            } else {
                return {
                    basePath: r.dirname(v),
                    filename: r.basename(v),
                    fileFormat: this.type === "flow" ? "jpg" : "mp4"
                }
            }
        };
        j._initializeMedia = function () {
            var s;
            if (this.type == "flow") {
                s = o.createFlow
            } else {
                s = o.createVideo
            }
            this.element.classList.remove("mediaobject-destroyed", "mediaobject-enhanced", "mediaobject-ended");
            this._media = s(this.element, this._getMediaSource(), {
                looping: this.loop,
                playbackRate: this.playbackRate,
                iosInline: this.iosInline
            });
            this._media.on("ready", this._onMediaReady);
            this._canLoad = true;
            this._loadCalled = false;
            this._enhanceCalled = false;
            this._mediaIsPlaying = false;
            this._mediaHasPlayed = false;
            this._isShown = false;
            this._playOnceReady = false
        };
        j._onElementEngaged = function (s) {
            this.element.classList.add("engaged");
            if (this._media && (!this._isEngaged || !this._media.getEnded() || this.rewindWhenInactive || this.loop)) {
                this._isEngaged = true;
                this._playMedia()
            }
        };
        j._onMediaLoaded = function () {
            this._enhanceMedia()
        };
        j._onMediaEnhanced = function () {
            if (this.transitionIn) {
                this._media.mediaElement.style.opacity = 0
            }
            if (this._playOnceReady) {
                this._playMedia()
            }
        };
        j._onMediaReady = function () {
            if (this._playOnceReady) {
                this._playMedia()
            }
        };
        j._fadeIn = function () {
            this._fadeClip = new f(this._media.mediaElement, b, {opacity: 1}, {
                ease: "easeInQuad",
                onComplete: this._onFadeInComplete
            }).play()
        };
        j._onFadeInComplete = function () {
            this._isShown = true;
            if (this._playOnceReady) {
                this._playMedia()
            }
        };
        j._loadMedia = function () {
            if (this._media && this._canLoad && !this._loadCalled) {
                this._loadCalled = true;
                this._media.on("loaded", this._onMediaLoaded);
                this._media.load()
            }
        };
        j._enhanceMedia = function () {
            if (this._media && !this._enhanceCalled) {
                this._enhanceCalled = true;
                this._media.on("enhanced", this._onMediaEnhanced);
                this._media.enhance()
            }
        };
        j._playMedia = function () {
            this._mediaHasPlayed = true;
            this._playOnceReady = true;
            if (!this._media) {
                return
            }
            if (this._media.getReady()) {
                if (this.transitionIn) {
                    if ((!this._fadeClip || !this._fadeClip.playing()) && !this._isShown) {
                        this._fadeClip = new f(this._media.mediaElement, b, {opacity: 1}, {
                            ease: "easeInQuad",
                            onComplete: this._onFadeInComplete
                        }).play()
                    } else {
                        this._startMedia()
                    }
                } else {
                    this._startMedia()
                }
            } else {
                this._loadMedia()
            }
        };
        j._startMedia = function () {
            this._playOnceReady = false;
            this._mediaIsPlaying = true;
            this._media.play();
            if (this.mute) {
                this._media.mediaElement.muted = true
            }
        };
        j._pauseMedia = function () {
            if (this._media && this._mediaIsPlaying) {
                this._mediaIsPlaying = false;
                try {
                    this._media.pause()
                } catch (s) {
                }
            }
        };
        j._rewindMedia = function () {
            if (this._media && this._mediaIsPlaying) {
                this._mediaIsPlaying = false;
                try {
                    this._media.pause();
                    this._media.setCurrentTime(0);
                    this._media.pause()
                } catch (s) {
                }
            }
        };
        j._destroyMedia = function () {
            if (this._media) {
                this._media.off();
                this._pauseMedia();
                this._media.destroy();
                this._media = null;
                this._canLoad = true;
                this._loadCalled = false;
                this._enhanceCalled = false;
                this._mediaIsPlaying = false;
                this._mediaHasPlayed = false;
                this._isShown = false;
                this._playOnceReady = false
            }
            if (this._fadeClip && this._fadeClip.playing()) {
                this._fadeClip.destroy();
                this._fadeClip = null
            }
        };
        c.exports = a
    }, {
        "@marcom/ac-cname": 3,
        "@marcom/ac-eclipse/Clip": 105,
        "@marcom/ac-feature/canvasAvailable": 145,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 311,
        "@marcom/ac-media-object": 446,
        "@marcom/ac-viewport-emitter": 528,
        path: 558
    }],
    292: [function (c, d, b) {
        d.exports = function a(f, h) {
            var g;
            if (h) {
                g = f.getBoundingClientRect();
                return {width: g.width, height: g.height}
            }
            return {width: f.offsetWidth, height: f.offsetHeight}
        }
    }, {}],
    293: [function (f, g, d) {
        var c = f("./getDimensions");
        var b = f("./getScrollX");
        var a = f("./getScrollY");
        g.exports = function h(i, n) {
            var k;
            var m;
            var l;
            var j;
            if (n) {
                k = i.getBoundingClientRect();
                m = b();
                l = a();
                return {top: k.top + l, right: k.right + m, bottom: k.bottom + l, left: k.left + m}
            }
            j = c(i, n);
            k = {top: i.offsetTop, left: i.offsetLeft, width: j.width, height: j.height};
            while (i = i.offsetParent) {
                k.top += i.offsetTop;
                k.left += i.offsetLeft
            }
            return {top: k.top, right: k.left + k.width, bottom: k.top + k.height, left: k.left}
        }
    }, {"./getDimensions": 292, "./getScrollX": 294, "./getScrollY": 295}],
    294: [function (c, d, b) {
        d.exports = function a(f) {
            f = f || window;
            if (f === window) {
                return window.scrollX || window.pageXOffset
            }
            return f.scrollLeft
        }
    }, {}],
    295: [function (c, d, b) {
        d.exports = function a(f) {
            f = f || window;
            if (f === window) {
                return window.scrollY || window.pageYOffset
            }
            return f.scrollTop
        }
    }, {}],
    296: [function (b, d, a) {
        var c = b("./ac-element-engagement/ElementEngagement");
        d.exports = new c();
        d.exports.ElementEngagement = c
    }, {"./ac-element-engagement/ElementEngagement": 297}],
    297: [function (c, b, f) {
        var g;
        var k = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var d = {defaults: c("@marcom/ac-object/defaults"), extend: c("@marcom/ac-object/extend")};
        var h = c("@marcom/ac-element-tracker").ElementTracker;
        var j = {timeToEngage: 500, inViewThreshold: 0.75, stopOnEngaged: true};
        var i = {thresholdEnterTime: 0, thresholdExitTime: 0, inThreshold: false, engaged: false, tracking: true};
        var a = function a(l) {
            h.call(this, null, l);
            k.call(this);
            this._thresholdEnter = this._thresholdEnter.bind(this);
            this._thresholdExit = this._thresholdExit.bind(this);
            this._enterView = this._enterView.bind(this);
            this._exitView = this._exitView.bind(this)
        };
        g = a.prototype = Object.create(h.prototype);
        g = d.extend(g, k.prototype);
        g._decorateTrackedElement = function (m, l) {
            var n;
            n = d.defaults(j, l || {});
            d.extend(m, n);
            d.extend(m, i)
        };
        g._attachElementListeners = function (l) {
            l.on("thresholdenter", this._thresholdEnter, this);
            l.on("thresholdexit", this._thresholdExit, this);
            l.on("enterview", this._enterView, this);
            l.on("exitview", this._exitView, this)
        };
        g._removeElementListeners = function (l) {
            l.off("thresholdenter", this._thresholdEnter);
            l.off("thresholdexit", this._thresholdExit);
            l.off("enterview", this._enterView);
            l.off("exitview", this._exitView)
        };
        g._attachAllElementListeners = function () {
            this.elements.forEach(function (l) {
                if (!l.stopOnEngaged) {
                    this._attachElementListeners(l)
                } else {
                    if (!l.engaged) {
                        this._attachElementListeners(l)
                    }
                }
            }, this)
        };
        g._removeAllElementListeners = function () {
            this.elements.forEach(function (l) {
                this._removeElementListeners(l)
            }, this)
        };
        g._elementInViewPastThreshold = function (m) {
            var l = false;
            if (m.pixelsInView === this._windowHeight) {
                l = true
            } else {
                l = m.percentInView > m.inViewThreshold
            }
            return l
        };
        g._ifInView = function (l, n) {
            var m = l.inThreshold;
            h.prototype._ifInView.apply(this, arguments);
            if (!m && this._elementInViewPastThreshold(l)) {
                l.inThreshold = true;
                l.trigger("thresholdenter", l);
                if (typeof l.timeToEngage === "number" && l.timeToEngage >= 0) {
                    l.engagedTimeout = window.setTimeout(this._engaged.bind(this, l), l.timeToEngage)
                }
            }
        };
        g._ifAlreadyInView = function (l) {
            var m = l.inThreshold;
            h.prototype._ifAlreadyInView.apply(this, arguments);
            if (m && !this._elementInViewPastThreshold(l)) {
                l.inThreshold = false;
                l.trigger("thresholdexit", l);
                if (l.engagedTimeout) {
                    window.clearTimeout(l.engagedTimeout);
                    l.engagedTimeout = null
                }
            }
        };
        g._engaged = function (l) {
            l.engagedTimeout = null;
            this._elementEngaged(l);
            l.trigger("engaged", l);
            this.trigger("engaged", l)
        };
        g._thresholdEnter = function (l) {
            l.thresholdEnterTime = Date.now();
            l.thresholdExitTime = 0;
            this.trigger("thresholdenter", l)
        };
        g._thresholdExit = function (l) {
            l.thresholdExitTime = Date.now();
            this.trigger("thresholdexit", l)
        };
        g._enterView = function (l) {
            this.trigger("enterview", l)
        };
        g._exitView = function (l) {
            this.trigger("exitview", l)
        };
        g._elementEngaged = function (l) {
            l.engaged = true;
            if (l.stopOnEngaged) {
                this.stop(l)
            }
        };
        g.stop = function (l) {
            if (this.tracking && !l) {
                this._removeAllElementListeners();
                h.prototype.stop.call(this)
            }
            if (l && l.tracking) {
                l.tracking = false;
                this._removeElementListeners(l);
                this.removeElement(l)
            }
        };
        g.start = function (l) {
            if (!l) {
                this._attachAllElementListeners()
            }
            if (l && !l.tracking) {
                if (!l.stopOnEngaged) {
                    l.tracking = true;
                    this._attachElementListeners(l)
                } else {
                    if (!l.engaged) {
                        l.tracking = true;
                        this._attachElementListeners(l)
                    }
                }
            }
            if (!this.tracking) {
                h.prototype.start.call(this)
            } else {
                this.refreshAllElementMetrics();
                this.refreshAllElementStates()
            }
        };
        g.addElement = function (n, l) {
            l = l || {};
            var m = h.prototype.addElement.call(this, n, l.useRenderedPosition);
            this._decorateTrackedElement(m, l);
            return m
        };
        g.addElements = function (m, l) {
            [].forEach.call(m, function (n) {
                this.addElement(n, l)
            }, this)
        };
        b.exports = a
    }, {
        "@marcom/ac-element-tracker": 303,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-object/defaults": 462,
        "@marcom/ac-object/extend": 463
    }],
    298: [function (b, c, a) {
        arguments[4][8][0].apply(a, arguments)
    }, {dup: 8}],
    299: [function (b, c, a) {
        arguments[4][10][0].apply(a, arguments)
    }, {"../isNode": 301, dup: 10}],
    300: [function (b, c, a) {
        arguments[4][13][0].apply(a, arguments)
    }, {"./ELEMENT_NODE": 298, "./internal/isNodeType": 299, dup: 13}],
    301: [function (b, c, a) {
        arguments[4][14][0].apply(a, arguments)
    }, {dup: 14}],
    302: [function (c, d, b) {
        var f = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        d.exports = function a(g) {
            if (!g) {
                return false
            }
            if (typeof g.length !== "number") {
                return false
            }
            if (_typeof(g[0]) === "object" && (!g[0] || !g[0].nodeType)) {
                return false
            }
            return f.test(Object.prototype.toString.call(g))
        }
    }, {}],
    303: [function (b, c, a) {
        var f = b("./ac-element-tracker/ElementTracker");
        var d = b("./ac-element-tracker/TrackedElement");
        c.exports = new f();
        c.exports.ElementTracker = f;
        c.exports.TrackedElement = d
    }, {"./ac-element-tracker/ElementTracker": 304, "./ac-element-tracker/TrackedElement": 305}],
    304: [function (d, c, h) {
        var k = {isNodeList: d("@marcom/ac-dom-nodes/isNodeList"), isElement: d("@marcom/ac-dom-nodes/isElement")};
        var a = {
            getDimensions: d("@marcom/ac-dom-metrics/getDimensions"),
            getPagePosition: d("@marcom/ac-dom-metrics/getPagePosition"),
            getScrollY: d("@marcom/ac-dom-metrics/getScrollY")
        };
        var f = {clone: d("@marcom/ac-object/clone"), extend: d("@marcom/ac-object/extend")};
        var j = d("./TrackedElement");
        var g = {autoStart: false, useRenderedPosition: false};

        function b(m, l) {
            this.options = f.clone(g);
            this.options = (typeof l === "undefined" ? "undefined" : _typeof(l)) === "object" ? f.extend(this.options, l) : this.options;
            this._scrollY = this._getScrollY();
            this._windowHeight = this._getWindowHeight();
            this.tracking = false;
            this.elements = [];
            if (m && (Array.isArray(m) || k.isNodeList(m) || k.isElement(m))) {
                this.addElements(m)
            }
            this.refreshAllElementStates = this.refreshAllElementStates.bind(this);
            this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this);
            if (this.options.autoStart) {
                this.start()
            }
        }

        var i = b.prototype;
        i.destroy = function () {
            var m, l;
            this.stop();
            for (m = 0, l = this.elements.length; m < l; m++) {
                this.elements[m].destroy()
            }
            this.elements = null;
            this.options = null
        };
        i._registerTrackedElements = function (l) {
            var m = [].concat(l);
            m.forEach(function (n) {
                if (this._elementInDOM(n.element)) {
                    n.offsetTop = n.element.offsetTop;
                    this.elements.push(n)
                }
            }, this)
        };
        i._elementInDOM = function (n) {
            var m = false;
            var l = document.getElementsByTagName("body")[0];
            if (k.isElement(n) && l.contains(n)) {
                m = true
            }
            return m
        };
        i._elementPercentInView = function (l) {
            return l.pixelsInView / l.height
        };
        i._elementPixelsInView = function (m) {
            var l = m.top - this._scrollY;
            var n = m.bottom - this._scrollY;
            if (l > this._windowHeight || n < 0) {
                return 0
            }
            return Math.min(n, this._windowHeight) - Math.max(l, 0)
        };
        i._ifInView = function (l, m) {
            if (!m) {
                l.trigger("enterview", l)
            }
        };
        i._ifAlreadyInView = function (l) {
            if (!l.inView) {
                l.trigger("exitview", l)
            }
        };
        i.addElements = function (o, n) {
            if (typeof n === "undefined") {
                n = this.options.useRenderedPosition
            }
            o = k.isNodeList(o) ? Array.prototype.slice.call(o) : [].concat(o);
            for (var m = 0, l = o.length;
                 m < l; m++) {
                this.addElement(o[m], n)
            }
        };
        i.addElement = function (m, n) {
            var l = null;
            if (typeof n === "undefined") {
                n = this.options.useRenderedPosition
            }
            if (k.isElement(m)) {
                l = new j(m, n);
                this._registerTrackedElements(l);
                this.refreshElementMetrics(l);
                this.refreshElementState(l)
            } else {
                throw new TypeError("ElementTracker: " + m + " is not a valid DOM element")
            }
            return l
        };
        i.removeElement = function (n) {
            var m = [];
            var l;
            this.elements.forEach(function (p, o) {
                if (p === n || p.element === n) {
                    m.push(o)
                }
            });
            l = this.elements.filter(function (p, o) {
                return m.indexOf(o) < 0
            });
            this.elements = l
        };
        i.start = function () {
            if (this.tracking === false) {
                this.tracking = true;
                window.addEventListener("resize", this.refreshAllElementMetrics);
                window.addEventListener("orientationchange", this.refreshAllElementMetrics);
                window.addEventListener("scroll", this.refreshAllElementStates);
                this.refreshAllElementMetrics()
            }
        };
        i.stop = function () {
            if (this.tracking === true) {
                this.tracking = false;
                window.removeEventListener("resize", this.refreshAllElementMetrics);
                window.removeEventListener("orientationchange", this.refreshAllElementMetrics);
                window.removeEventListener("scroll", this.refreshAllElementStates)
            }
        };
        i.refreshAllElementMetrics = function (l, m) {
            if (typeof l !== "number") {
                l = this._getScrollY()
            }
            if (typeof m !== "number") {
                m = this._getWindowHeight()
            }
            this._scrollY = l;
            this._windowHeight = m;
            this.elements.forEach(this.refreshElementMetrics, this)
        };
        i.refreshElementMetrics = function (m) {
            if (!m.isActive) {
                return m
            }
            var n = a.getDimensions(m.element, m.useRenderedPosition);
            var l = a.getPagePosition(m.element, m.useRenderedPosition);
            m = f.extend(m, n, l);
            return this.refreshElementState(m)
        };
        i.refreshAllElementStates = function (l) {
            if (typeof l !== "number") {
                l = this._getScrollY()
            }
            this._scrollY = l;
            this.elements.forEach(this.refreshElementState, this)
        };
        i.refreshElementState = function (l) {
            if (!l.isActive) {
                return l
            }
            var m = l.inView;
            l.pixelsInView = this._elementPixelsInView(l);
            l.percentInView = this._elementPercentInView(l);
            l.inView = l.pixelsInView > 0;
            if (l.inView) {
                this._ifInView(l, m)
            }
            if (m) {
                this._ifAlreadyInView(l)
            }
            return l
        };
        i.pauseElementTracking = function (l) {
            if (l) {
                l.isActive = false
            }
        };
        i.resumeElementTracking = function (l) {
            if (l) {
                l.isActive = true
            }
        };
        i._getWindowHeight = function () {
            return window.innerHeight
        };
        i._getScrollY = function () {
            return a.getScrollY()
        };
        c.exports = b
    }, {
        "./TrackedElement": 305,
        "@marcom/ac-dom-metrics/getDimensions": 292,
        "@marcom/ac-dom-metrics/getPagePosition": 293,
        "@marcom/ac-dom-metrics/getScrollY": 295,
        "@marcom/ac-dom-nodes/isElement": 300,
        "@marcom/ac-dom-nodes/isNodeList": 302,
        "@marcom/ac-object/clone": 460,
        "@marcom/ac-object/extend": 463
    }],
    305: [function (c, d, b) {
        var a = {isElement: c("@marcom/ac-dom-nodes/isElement")};
        var g = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var i = g.prototype;

        function h(j, k) {
            if (!a.isElement(j)) {
                throw new TypeError("TrackedElement: " + j + " is not a valid DOM element")
            }
            g.call(this);
            this.element = j;
            this.inView = false;
            this.isActive = true;
            this.percentInView = 0;
            this.pixelsInView = 0;
            this.offsetTop = 0;
            this.top = 0;
            this.right = 0;
            this.bottom = 0;
            this.left = 0;
            this.width = 0;
            this.height = 0;
            this.useRenderedPosition = k || false
        }

        var f = h.prototype = Object.create(i);
        f.destroy = function () {
            this.element = null;
            i.destroy.call(this)
        };
        d.exports = h
    }, {"@marcom/ac-dom-nodes/isElement": 300, "@marcom/ac-event-emitter-micro": 128}],
    306: [function (d, f, c) {
        d("@marcom/ac-polyfills/Object/create");
        var a = d("@marcom/ac-raf-emitter/RAFEmitter");
        var h = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var i = h.prototype;

        function b(n, p, j, m, k, o, l) {
            if (arguments.length !== 7) {
                throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
            }
            h.call(this);
            this.section = n;
            this.element = p;
            this.componentName = j;
            this.index = l;
            this.isEnabled = true
        }

        var g = b.prototype = Object.create(h.prototype);
        b.prototype.constructor = b;
        g.destroy = function () {
            this.teardownEvents();
            this.teardownRAFEmitter();
            this.section = null;
            i.destroy.call(this)
        };
        g.setupEvents = function () {
        };
        g.teardownEvents = function () {
        };
        g.setupRAFEmitter = function () {
            if (this._rafEmitter) {
                return
            }
            this._rafEmitter = new a();
            this.onDOMRead = this.onDOMRead.bind(this);
            this.onDOMWrite = this.onDOMWrite.bind(this);
            this._rafEmitter.on("update", this.onDOMRead);
            this._rafEmitter.on("draw", this.onDOMWrite)
        };
        g.teardownRAFEmitter = function () {
            if (!this._rafEmitter) {
                return
            }
            this._rafEmitter.destroy();
            this._rafEmitter = null
        };
        g.parsePropsFromDataAttribute = function (r, p, l) {
            l = l || this.element;
            p = p || {};
            r = "data-" + r;
            var q = l.getAttribute(r) || "{}";
            var n = null;
            try {
                n = JSON.parse(q)
            } catch (o) {
                throw new Error(this.componentName + "::parsePropsFromDataAttribute bad JSON in `" + r + "`", o)
            }
            var m = {};
            for (var j in p) {
                m[j] = n[j];
                if (!n.hasOwnProperty(j)) {
                    if (p[j] === null) {
                        throw new Error(this.componentName + "::parsePropsFromDataAttribute `" + j + "` is required in `" + r + "`")
                    } else {
                        m[j] = p[j]
                    }
                }
            }
            return m
        };
        g.onSectionWillAppearWithPadding = function (j, k) {
        };
        g.onSectionWillAppear = function (j, k) {
        };
        g.activate = function () {
        };
        g.animateIn = function () {
        };
        g.requestDOMChange = function () {
            if (!this.isEnabled || !this.section.isVisible) {
                return false
            }
            if (!this._rafEmitter) {
                this.setupRAFEmitter()
            }
            return this._rafEmitter.run()
        };
        g.onDOMRead = function (j) {
        };
        g.onDOMWrite = function (j) {
        };
        g.deactivate = function () {
        };
        g.onScroll = function (k, j, l) {
        };
        g.onSectionWillDisappearWithPadding = function (j, k) {
        };
        g.onSectionWillDisappear = function (j, k) {
        };
        g.onResizeDebounced = function (k, j, l) {
        };
        g.onResizeImmediate = function (k, j, l) {
        };
        g.onOrientationChange = function (l, k, j, m) {
        };
        g.onBreakpoint = function (k, m, j, l) {
        };
        g.onRetinaChange = function (m, k, j, l) {
        };
        f.exports = b
    }, {
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-polyfills/Object/create": 494,
        "@marcom/ac-raf-emitter/RAFEmitter": 514
    }],
    307: [function (f, c, i) {
        f("@marcom/ac-polyfills/console.log");
        var b = f("@marcom/ac-element-tracker").ElementTracker;
        var l = f("@marcom/ac-viewport-emitter");
        if (!l.viewport) {
            console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.\n\tBreakpoint will always be 'large' and no `onBreakPoint` events will be fired");
            l = f("../utils/ViewportEmitterStub")()
        }
        var k = f("../utils/Page");
        var a = f("../model/SectionMap");
        var h = f("../model/DataAttributes");
        var d = f("../model/EnabledFeatures");

        function g(m) {
            d.init();
            k.setPage(this);
            this.name = this.name || "[NOT SET]";
            this._mainEl = document.querySelector("main,.main");
            this._sections = [];
            this._visibleSections = [];
            this._visibleSectionsWithPadding = [];
            this._elementTracker = new b(null, {autoStart: true});
            this._currentSection = null;
            this._sectionUnderLocalNav = null;
            this._currentBreakpoint = l.viewport;
            this.isRetina = l.retina;
            this._cachedScrollY = this._getScrollY(true);
            this._cachedWindowHeight = this.getWindowHeight(true);
            this._resizeTimeout = -1;
            this._resizeTimeoutDelay = this._resizeTimeoutDelay || 250;
            this.setupSections();
            this.setupEvents();
            this._updateSectionVisibility()
        }

        var j = g.prototype;
        j.destroy = function () {
            for (var n = 0, m = this._sections.length; n < m; n++) {
                this._sections[n].destroy()
            }
            this.teardownEvents();
            this._elementTracker.destroy();
            this._elementTracker = null;
            this._sections = null;
            this._currentSection = null;
            this._sectionUnderLocalNav = null;
            this._visibleSections = null;
            this._mainEl = null;
            k.removePage(this)
        };
        j.setupEvents = function () {
            this._onScroll = this._onScroll.bind(this);
            this._onBreakpoint = this._onBreakpoint.bind(this);
            this._onRetinaChange = this._onRetinaChange.bind(this);
            this._onPageDidAppear = this._onPageDidAppear.bind(this);
            this._onResizeImmediate = this._onResizeImmediate.bind(this);
            this._onOrientationChange = this._onOrientationChange.bind(this);
            this._onPageWillDisappear = this._onPageWillDisappear.bind(this);
            this.performDeepMetricsRefresh = this.performDeepMetricsRefresh.bind(this);
            window.addEventListener("scroll", this._onScroll);
            window.addEventListener("resize", this._onResizeImmediate);
            window.addEventListener("orientationchange", this._onOrientationChange);
            l.on("change", this._onBreakpoint);
            l.on("retinachange", this._onRetinaChange);
            k.on(k.DEEP_REFRESH_ALL_METRICS, this.performDeepMetricsRefresh)
        };
        j.teardownEvents = function () {
            window.removeEventListener("scroll", this._onScroll);
            window.removeEventListener("resize", this._onResizeImmediate);
            window.removeEventListener("orientationchange", this._onOrientationChange);
            l.off("change", this._onBreakpoint);
            l.off("retinachange", this._onRetinaChange);
            k.off(k.DEEP_REFRESH_ALL_METRICS, this.performDeepMetricsRefresh);
            this._elementTracker.stop();
            clearTimeout(this._resizeTimeout)
        };
        j.setupSections = function () {
            var n = this._mainEl.querySelectorAll("section,.section,[data-section-type]");
            for (var p = 0, m = n.length; p < m; p++) {
                if (n[p].parentElement !== this._mainEl) {
                    console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.", n[p]);
                    continue
                }
                var o = n[p];
                this._addSectionImp(o)
            }
        };
        j.addSection = function (m) {
            var n = this.getBaseSectionForElement(m);
            if (n) {
                return n
            }
            n = this._addSectionImp(m);
            this._updateSectionVisibility();
            return n
        };
        j.removeSection = function (m) {
            var o = m instanceof a.BaseSection;
            var n = o ? m : this.getBaseSectionForElement(m);
            if (n) {
                this._sections.splice(this._sections.indexOf(n), 1)
            }
            this._updateSectionVisibility();
            return n
        };
        j._addSectionImp = function (o) {
            if (o.parentNode !== this._mainEl && this._isNestedSection(o)) {
                console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.", o);
                return null
            }
            var n = this._elementTracker.addElement(o);
            this._elementTracker.refreshElementState(n);
            var p = o.hasAttribute(h.SECTION_TYPE) ? o.getAttribute(h.SECTION_TYPE) : "BaseSection";
            if (p === "") {
                p = "BaseSection"
            }
            if (!a.hasOwnProperty(p)) {
                throw"BasePage::setupSections parsing '#" + o.id + " ." + o.className + "' no section type '" + p + "'found!"
            }
            var m = a[p];
            var q = new m(o, n, this._getCurrentBreakpoint(), this._getScrollY(), this.getWindowHeight(), this._sections.length);
            q.setupEvents();
            this._sections.push(q);
            return q
        };
        j.getWindowHeight = function (m) {
            if (m) {
                this._cachedWindowHeight = window.innerHeight
            }
            return this._cachedWindowHeight
        };
        j._activateSection = function (m) {
            if (this._currentSection === m) {
                return
            }
            if (this._currentSection) {
                this._currentSection.deactivate()
            }
            this._currentSection = m;
            this._currentSection.activate()
        };
        j._updateSectionVisibility = function () {
            var A = this._getScrollY();
            var m = this.getWindowHeight();
            var q = k.getViewportPadding();
            var r = [];
            var t = this._sections[0];
            var p = [];
            var y = 0;
            var w = [];
            var C = A - q;
            var o = A + m + q;
            for (var s = 0, v = this._sections.length;
                 s < v; s++) {
                var B = this._sections[s];
                var z = B.trackedElement;
                var x = z.pixelsInView;
                if (B.isFixedHero) {
                    x = m - A
                }
                if (x > y) {
                    t = B;
                    y = x
                }
                if (x > 0.000001) {
                    r.push(B);
                    p.push(B);
                    w.push(B)
                } else {
                    if (o > z.top && C < z.bottom) {
                        r.push(B);
                        w.push(B)
                    }
                }
            }
            var n = {};
            var u = {};
            for (s = 0, v = Math.max(this._visibleSections.length, r.length);
                 s < v; s++) {
                if (this._visibleSectionsWithPadding[s]) {
                    if (typeof n[s] === "undefined") {
                        n[s] = w.indexOf(this._visibleSectionsWithPadding[s]) === -1
                    }
                    if (n[s]) {
                        this._visibleSectionsWithPadding[s].onSectionWillDisappearWithPadding(A, m)
                    }
                }
                if (this._visibleSections[s] && p.indexOf(this._visibleSections[s]) === -1) {
                    this._visibleSections[s].onSectionWillDisappear(A, m)
                }
                if (w[s]) {
                    if (typeof u[s] === "undefined") {
                        u[s] = this._visibleSectionsWithPadding.indexOf(w[s]) === -1
                    }
                    if (u[s]) {
                        w[s].onSectionWillAppearWithPadding(A, m)
                    }
                }
                if (p[s] && this._visibleSections.indexOf(p[s]) === -1) {
                    p[s].onSectionWillAppear(A, m)
                }
            }
            this._visibleSections = p;
            this._visibleSectionsWithPadding = w;
            this._activateSection(t)
        };
        j._onPageDidAppear = function (m) {
        };
        j._onPageWillDisappear = function (m) {
            this.destroy()
        };
        j._onBreakpoint = function (r) {
            var n = r.to;
            var p = r.from;
            this._currentBreakpoint = n;
            var o = this._getScrollY();
            var s = this.getWindowHeight();
            this._elementTracker.refreshAllElementMetrics(o, s);
            for (var q = 0, m = this._sections.length; q < m; q++) {
                this._sections[q].onBreakpoint(n, p, o, s)
            }
            this.performDeepMetricsRefresh()
        };
        j._onRetinaChange = function (q) {
            var n = this._getScrollY(true);
            var r = this.getWindowHeight(true);
            this.isRetina = l.retina;
            var p = this._currentBreakpoint;
            this._elementTracker.refreshAllElementMetrics(n, r);
            for (var o = 0, m = this._sections.length;
                 o < m; o++) {
                this._sections[o].onRetinaChange(this.isRetina, p, n, r)
            }
        };
        j._onScroll = function (p) {
            var n = this._getScrollY(true);
            var q = this.getWindowHeight();
            this._updateSectionVisibility();
            for (var o = 0, m = this._visibleSections.length;
                 o < m; o++) {
                this._visibleSections[o].onScroll(p, n, q)
            }
        };
        j._onResizeDebounced = function (q) {
            var n = this._getScrollY();
            var r = this.getWindowHeight();
            var p = false;
            for (var o = 0, m = this._sections.length; o < m;
                 o++) {
                if (!p && this._sections[o]["onResize"]) {
                    console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
                    p = true
                }
                this._sections[o].onResizeDebounced(q, n, r)
            }
            this._updateSectionVisibility()
        };
        j.performDeepMetricsRefresh = function () {
            var n = this._getScrollY();
            var p = this.getWindowHeight();
            this._elementTracker.refreshAllElementMetrics(n, p);
            for (var o = 0, m = this._sections.length;
                 o < m; o++) {
                this._sections[o].elementEngagement.refreshAllElementMetrics(n, p);
                this._sections[o].updateScrollToPosition()
            }
            this._updateSectionVisibility()
        };
        j._onOrientationChange = function (q) {
            var o = this._getScrollY(true);
            var r = this.getWindowHeight(true);
            var n = q.orientation;
            for (var p = 0, m = this._sections.length;
                 p < m; p++) {
                this._sections[p].onOrientationChange(q, n, o, r)
            }
        };
        j._onResizeImmediate = function (q) {
            var n = this._getScrollY();
            var r = this.getWindowHeight(true);
            var p = false;
            for (var o = 0, m = this._sections.length;
                 o < m; o++) {
                if (!p && this._sections[o]["onResizeWillBeCalledAfterDelay"]) {
                    console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
                    p = true
                }
                this._sections[o].onResizeImmediate(q, n, r)
            }
            window.clearTimeout(this._resizeTimeout);
            this._resizeTimeout = window.setTimeout(this._onResizeDebounced.bind(this, q), this._resizeTimeoutDelay)
        };
        j._getScrollY = function (m) {
            if (m) {
                this._cachedScrollY = window.pageYOffset || (document.documentElement || document.body).scrollTop
            }
            return this._cachedScrollY
        };
        j._getVisibleBottomOfPage = function () {
            return this._getScrollY() + this.getWindowHeight()
        };
        j._getCurrentBreakpoint = function () {
            return this._currentBreakpoint
        };
        j._isNestedSection = function (o) {
            var p = o;
            var m = this._sections.length;
            while (p = p.parentElement) {
                for (var n = 0; n < m; n++) {
                    if (this._sections[n].element === p) {
                        return true
                    }
                }
            }
            return false
        };
        j.getBaseSectionForElement = function (o) {
            for (var n = 0, m = this._sections.length;
                 n < m; n++) {
                if (this._sections[n].element === o) {
                    return this._sections[n]
                }
            }
            return null
        };
        c.exports = g
    }, {
        "../model/DataAttributes": 310,
        "../model/EnabledFeatures": 311,
        "../model/SectionMap": 312,
        "../utils/Page": 313,
        "../utils/ViewportEmitterStub": 314,
        "@marcom/ac-element-tracker": 303,
        "@marcom/ac-polyfills/console.log": 497,
        "@marcom/ac-viewport-emitter": 528
    }],
    308: [function (c, b, g) {
        c("@marcom/ac-polyfills/Object/create");
        c("@marcom/ac-polyfills/console.log");
        var n = {};
        var k = {getPagePosition: c("@marcom/ac-dom-metrics/getPagePosition")};
        var a = c("@marcom/ac-element-engagement").ElementEngagement;
        var f = c("./../model/DataAttributes");
        var h = c("./../model/ComponentMap");
        var d = c("./BaseComponent");
        var l = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var m = l.prototype;

        function j(s, r, q, o, t, p) {
            if (arguments.length !== 6) {
                throw new Error("Incorrect number of arguments passed to BaseSection")
            }
            l.call(this);
            this.element = s;
            this.trackedElement = r;
            this.elementEngagement = new a(null, {autoStart: false});
            this.index = p;
            this.isVisible = this.trackedElement.pixelsInView > 0;
            this.isVisibleWithPadding = false;
            this.hasAnimatedIn = false;
            this.isActive = false;
            this.isFixedHero = false;
            this.cachedBreakpoint = q;
            this.cachedScrollPosition = o;
            this.cachedWindowHeight = t;
            this.name = this.name || this.element.className;
            this.scrollToPosition = 0;
            this.updateScrollToPosition();
            this._components = [];
            this.setupComponents(q, o, t);
            this.setIsFixedHero();
            this.performDeprecatedMethodCheck()
        }

        var i = j.prototype = Object.create(l.prototype);
        j.prototype.constructor = j;
        i.performDeprecatedMethodCheck = function () {
            if (this["onViewWillAppear"]) {
                throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass")
            }
            if (this["onViewWillDisappear"]) {
                throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass")
            }
            return true
        };
        i.destroy = function () {
            this.teardownEvents();
            this.elementEngagement.stop();
            this.elementEngagement = null;
            for (var p = 0, o = this._components.length; p < o; p++) {
                this._components[p].destroy()
            }
            this._components = null;
            this.trackedElement = null;
            this.element = null;
            m.destroy.call(this)
        };
        i.setupEvents = function () {
            for (var p = 0, o = this._components.length; p < o; p++) {
                this._components[p].setupEvents()
            }
        };
        i.teardownEvents = function () {
            for (var p = 0, o = this._components.length; p < o; p++) {
                this._components[p].teardownEvents()
            }
        };
        i.setupComponents = function () {
            var t = Array.prototype.slice.call(this.element.querySelectorAll("[" + f.COMPONENT_LIST + "]"));
            if (this.element.hasAttribute(f.COMPONENT_LIST)) {
                t.push(this.element)
            }
            for (var r = 0;
                 r < t.length; r++) {
                var v = t[r];
                var u = v.getAttribute(f.COMPONENT_LIST);
                if (u.indexOf("|") !== -1) {
                    throw"BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '" + u + "'"
                }
                var s = u.split(" ");
                for (var q = 0, o = s.length; q < o; q++) {
                    var p = s[q];
                    if (p === "" || p === " ") {
                        continue
                    }
                    this.addComponentOfType(p, v)
                }
                setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement), 100)
            }
        };
        i.addComponentOfType = function (p, r) {
            if (!h.hasOwnProperty(p)) {
                throw"BaseSection::setupComponents parsing '#" + r.id + " ." + r.className + "' no component type '" + p + "'found!"
            }
            var q = h[p];
            if (!this.componentIsSupported(q, p)) {
                if (n[p] === undefined) {
                    console.log("BaseSection::setupComponents unsupported component '" + p + "'. Reason: '" + p + ".IS_SUPPORTED' returned false");
                    n[p] = true
                }
                return
            }
            var o = new q(this, r, p, this.cachedBreakpoint, this.cachedScrollPosition, this.cachedWindowHeight, this._components.length);
            this._components.push(o);
            return o
        };
        i.removeComponentOfType = function (o) {
            var p = this.getComponentOfType(o);
            if (p === null) {
                return
            }
            this.removeComponent(p)
        };
        i.removeComponent = function (p) {
            var o = this._components.indexOf(p);
            if (o === -1) {
                return
            }
            this._components.splice(o, 1);
            p.destroy()
        };
        i.activate = function () {
            for (var p = 0, o = this._components.length;
                 p < o; p++) {
                if (!this._components[p].isEnabled) {
                    continue
                }
                this._components[p].activate()
            }
            this.isActive = true;
            if (!this.hasAnimatedIn) {
                this.animateIn();
                this.hasAnimatedIn = true
            }
        };
        i.deactivate = function () {
            this.isActive = false;
            for (var p = 0, o = this._components.length;
                 p < o; p++) {
                if (!this._components[p].isEnabled) {
                    continue
                }
                this._components[p].deactivate()
            }
        };
        i.animateIn = function () {
            for (var p = 0, o = this._components.length; p < o; p++) {
                if (!this._components[p].isEnabled) {
                    continue
                }
                this._components[p].animateIn()
            }
        };
        i.onResizeImmediate = function (s, p, t) {
            this.cachedScrollPosition = p;
            this.cachedWindowHeight = t;
            var r = false;
            for (var q = 0, o = this._components.length; q < o;
                 q++) {
                if (!this._components[q].isEnabled) {
                    continue
                }
                if (!r && this._components[q]["onResizeWillBeCalledAfterDelay"]) {
                    console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
                    r = true
                }
                this._components[q].onResizeImmediate(s, p, t)
            }
        };
        i.onResizeDebounced = function (s, p, t) {
            this.updateScrollToPosition();
            var r = false;
            for (var q = 0, o = this._components.length; q < o; q++) {
                if (!this._components[q].isEnabled) {
                    continue
                }
                if (!r && this._components[q]["onResize"]) {
                    console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
                    r = true
                }
                this._components[q].onResizeDebounced(s, p, t)
            }
            this.elementEngagement.refreshAllElementMetrics(p, t)
        };
        i.onBreakpoint = function (q, t, p, s) {
            this.cachedBreakpoint = q;
            for (var r = 0, o = this._components.length;
                 r < o; r++) {
                if (!this._components[r].isEnabled) {
                    continue
                }
                this._components[r].onBreakpoint(q, t, p, s)
            }
        };
        i.onRetinaChange = function (t, r, p, s) {
            for (var q = 0, o = this._components.length; q < o;
                 q++) {
                if (!this._components[q].isEnabled) {
                    continue
                }
                this._components[q].onRetinaChange(t, r, p, s)
            }
            this.elementEngagement.refreshAllElementMetrics(p, s)
        };
        i.onOrientationChange = function (s, q, p, t) {
            this.cachedScrollPosition = p;
            this.cachedWindowHeight = t;
            for (var r = 0, o = this._components.length; r < o; r++) {
                if (!this._components[r].isEnabled) {
                    continue
                }
                this._components[r].onOrientationChange(s, q, p, t)
            }
        };
        i.onScroll = function (r, p, s) {
            this.cachedScrollPosition = p;
            this.elementEngagement.refreshAllElementStates(p);
            for (var q = 0, o = this._components.length;
                 q < o; q++) {
                if (!this._components[q].isEnabled) {
                    continue
                }
                this._components[q].onScroll(r, p, s)
            }
        };
        i.onSectionWillAppearWithPadding = function (p, r) {
            this.cachedScrollPosition = p;
            this.isVisibleWithPadding = true;
            this.elementEngagement.refreshAllElementStates(p);
            for (var q = 0, o = this._components.length;
                 q < o; q++) {
                this._components[q].onSectionWillAppearWithPadding(p, r)
            }
        };
        i.onSectionWillAppear = function (p, r) {
            this.cachedScrollPosition = p;
            this.isVisible = true;
            this.elementEngagement.refreshAllElementStates(p);
            for (var q = 0, o = this._components.length;
                 q < o; q++) {
                this._components[q].onSectionWillAppear(p, r)
            }
        };
        i.onSectionWillDisappearWithPadding = function (p, r) {
            this.cachedScrollPosition = p;
            this.isVisibleWithPadding = false;
            for (var q = 0, o = this._components.length; q < o; q++) {
                this._components[q].onSectionWillDisappearWithPadding(p, r)
            }
        };
        i.onSectionWillDisappear = function (p, r) {
            this.cachedScrollPosition = p;
            this.isVisible = false;
            for (var q = 0, o = this._components.length; q < o; q++) {
                this._components[q].onSectionWillDisappear(p, r)
            }
        };
        i.getComponentOfType = function (p) {
            if (!h.hasOwnProperty(p)) {
                throw"BaseSection::getComponentOfType no component type '" + p + "' exist in ComponentMap!"
            }
            for (var q = 0, o = this._components.length; q < o; q++) {
                if (this._components[q].componentName === p) {
                    return this._components[q]
                }
            }
            return null
        };
        i.getAllComponentsOfType = function (p) {
            if (!h.hasOwnProperty(p)) {
                throw"BaseSection::getAllComponentsOfType no component type '" + p + "' exist in ComponentMap!"
            }
            var r = [];
            for (var q = 0, o = this._components.length; q < o; q++) {
                if (this._components[q].componentName === p) {
                    r.push(this._components[q])
                }
            }
            return r
        };
        i.updateScrollToPosition = function () {
            return this.scrollToPosition = k.getPagePosition(this.element).top
        };
        i.setIsFixedHero = function () {
            if (this.index !== 0) {
                this.isFixedHero = false
            } else {
                var o = window.getComputedStyle(this.element);
                this.isFixedHero = o.position === "fixed"
            }
        };
        j.prototype.componentIsSupported = function (r, p) {
            var o = r.IS_SUPPORTED;
            if (o === undefined) {
                return true
            }
            if (typeof o !== "function") {
                console.error('BaseSection::setupComponents error in "' + p + '".IS_SUPPORTED - it should be a function which returns true/false');
                return true
            }
            var q = r.IS_SUPPORTED();
            if (q === undefined) {
                console.error('BaseSection::setupComponents error in "' + p + '".IS_SUPPORTED - it should be a function which returns true/false');
                return true
            }
            return q
        };
        b.exports = j
    }, {
        "./../model/ComponentMap": 309,
        "./../model/DataAttributes": 310,
        "./BaseComponent": 306,
        "@marcom/ac-dom-metrics/getPagePosition": 293,
        "@marcom/ac-element-engagement": 296,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-polyfills/Object/create": 494,
        "@marcom/ac-polyfills/console.log": 497
    }],
    309: [function (b, c, a) {
        c.exports = {BaseComponent: b("../core/BaseComponent")}
    }, {"../core/BaseComponent": 306}],
    310: [function (b, c, a) {
        c.exports = {
            PAGE_TYPE: "data-page-type",
            SECTION_TYPE: "data-section-type",
            JUMP_SECTION_NAME: "data-page-jump-name",
            COMPONENT_LIST: "data-component-list"
        }
    }, {}],
    311: [function (c, d, b) {
        var a = {
            isDesktop: c("@marcom/ac-feature/isDesktop"),
            isRetina: c("@marcom/ac-feature/isRetina"),
            threeDTransformsAvailable: c("@marcom/ac-feature/threeDTransformsAvailable"),
            prefersReducedMotion: c("@marcom/ac-feature/prefersReducedMotion")
        };
        d.exports = {
            TOUCH: undefined,
            SVG: undefined,
            PAGE_JUMP: undefined,
            IS_DESKTOP: undefined,
            IS_RETINA: undefined,
            THREE_D_TRANSFORMS: undefined,
            REDUCED_MOTION: undefined,
            IS_AOW: undefined,
            init: function f() {
                var h = document.getElementsByTagName("html")[0];
                this.TOUCH = h.classList.contains("touch");
                this.SVG = h.classList.contains("svg");
                this.PAGE_JUMP = h.classList.contains("pageJump");
                this.IS_DESKTOP = a.isDesktop();
                this.IS_RETINA = a.isRetina();
                this.THREE_D_TRANSFORMS = a.threeDTransformsAvailable();
                this.REDUCED_MOTION = a.prefersReducedMotion();
                this.IS_AOW = h.classList.contains("aow")
            },
            extend: function g(j) {
                if (!j.hasOwnProperty("init") || typeof j.init !== "function") {
                    throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
                }
                var k = this.init;
                var i = j.init;
                var h = Object.assign(this, j);
                h.init = function () {
                    if (this.HAS_INITIALIZED) {
                        return
                    }
                    this.HAS_INITIALIZED = true;
                    k.call(h);
                    i.call(h)
                };
                return h
            },
            HAS_INITIALIZED: false
        }
    }, {
        "@marcom/ac-feature/isDesktop": 154,
        "@marcom/ac-feature/isRetina": 156,
        "@marcom/ac-feature/prefersReducedMotion": 161,
        "@marcom/ac-feature/threeDTransformsAvailable": 164
    }],
    312: [function (b, c, a) {
        c.exports = {BaseSection: b("../core/BaseSection")}
    }, {"../core/BaseSection": 308}],
    313: [function (b, d, a) {
        var g = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;

        function c() {
            g.call(this);
            this._page = null;
            this.viewportPaddingRatio = 1
        }

        var f = c.prototype = Object.create(g.prototype);
        c.prototype.constructor = c;
        f.getPage = function () {
            return this._page
        };
        f.setPage = function (h) {
            this._page = h
        };
        f.removePage = function (h) {
            if (h === this._page) {
                this._page = null
            }
        };
        f.getViewportPadding = function () {
            return this.getPage().getWindowHeight() * this.viewportPaddingRatio
        };
        f.deepRefreshAllElementMetrics = function () {
            this.trigger(c.prototype.DEEP_REFRESH_ALL_METRICS)
        };
        f.onPageHeightSettled = function (l, h) {
            var i = document.documentElement.scrollHeight;
            var j = 0;
            var h = h || 30;
            window.requestAnimationFrame(function k() {
                var m = document.documentElement.scrollHeight;
                if (i !== m) {
                    j = 0
                } else {
                    j++;
                    if (j >= h) {
                        l();
                        return
                    }
                }
                i = m;
                window.requestAnimationFrame(k)
            })
        };
        f.DEEP_REFRESH_ALL_METRICS = "page.deep_refresh_all_metrics";
        d.exports = new c()
    }, {"@marcom/ac-event-emitter-micro": 128}],
    314: [function (b, c, a) {
        c.exports = function () {
            var d;
            if (window.ViewportEmitterTestProxy) {
                d = window.ViewportEmitterTestProxy
            } else {
                d = {};
                d.viewport = "large";
                d.on = d.off = function () {
                }
            }
            return d
        }
    }, {}],
    315: [function (b, f, a) {
        var d = b("./ac-ajax/Ajax");
        var c = b("./ac-ajax/Request");
        f.exports = new d();
        f.exports.Ajax = d;
        f.exports.Request = c
    }, {"./ac-ajax/Ajax": 316, "./ac-ajax/Request": 317}],
    316: [function (g, d, h) {
        var a = g("./Request");
        var q = g("./XDomain-request");
        var k = g("./URLParser");
        var b = function b() {
        };
        b._Request = a;
        b.prototype = {
            _defaults: {method: "get", timeout: 5000}, _extend: function c() {
                for (var t = 1;
                     t < arguments.length; t++) {
                    for (var s in arguments[t]) {
                        if (arguments[t].hasOwnProperty(s)) {
                            arguments[0][s] = arguments[t][s]
                        }
                    }
                }
                return arguments[0]
            }, _getOptions: function r(s, t) {
                return this._extend({}, this._defaults, t, s)
            }, _isCrossDomainRequest: function o(v) {
                var u = new k();
                var t = u.parse(window.location.href).origin;
                var s = u.parse(v).origin;
                u.destroy();
                return s !== t
            }, create: function i(s) {
                return new a(s)
            }, cors: function l(t) {
                var s = window.XDomainRequest && document.documentMode < 10 ? q : a;
                return new s(t)
            }, get: function f(t) {
                var s;
                t = this._getOptions({method: "get"}, t);
                if (this._isCrossDomainRequest(t.url)) {
                    s = this.cors(t)
                } else {
                    s = this.create(t)
                }
                return s.send()
            }, getJSON: function j(s) {
                return this.get(s).then(function (t) {
                    return JSON.parse(t.responseText)
                })
            }, head: function m(s) {
                s = this._getOptions({method: "head"}, s);
                return this.create(s).send()
            }, isCrossDomainRequest: function p(s) {
                return this._isCrossDomainRequest(s)
            }, post: function n(s) {
                s = this._getOptions({method: "post"}, s);
                return this.create(s).send()
            }
        };
        d.exports = b
    }, {"./Request": 317, "./URLParser": 318, "./XDomain-request": 319}],
    317: [function (d, c, i) {
        var a = function a(p) {
            this._initialize(p)
        };
        a.create = function () {
            var p = function p() {
            };
            p.prototype = a.prototype;
            return new p()
        };
        a.prototype = {
            _addReadyStateChangeHandler: function b() {
                this.xhr.onreadystatechange = function (p) {
                    if (this.xhr.readyState === 4) {
                        clearTimeout(this._timeout);
                        if (this.xhr.status >= 200 && this.xhr.status < 300) {
                            this.resolve(this.xhr)
                        } else {
                            this.reject(this.xhr)
                        }
                    }
                }.bind(this)
            }, _getPromise: function o() {
                this.promise = new Promise(function (q, p) {
                    this.resolve = q;
                    this.reject = p
                }.bind(this))
            }, _getTransport: function n() {
                return new XMLHttpRequest()
            }, _initialize: function j(r) {
                var q = this._validateConfiguration(r);
                if (q) {
                    throw q
                }
                this._configuration = r;
                var p = this._configuration.method.toUpperCase();
                this.xhr = this._getTransport();
                this._getPromise();
                this.xhr.open(p, this._configuration.url);
                this._setRequestHeaders(r.headers);
                this._addReadyStateChangeHandler()
            }, _sendXHR: function g() {
                if (this.xhr) {
                    if (this._configuration && this._configuration.data) {
                        this.xhr.send(this._configuration.data)
                    } else {
                        this.xhr.send()
                    }
                }
            }, _setRequestHeaders: function l(p) {
                if (p) {
                    p.forEach(function (q) {
                        this.xhr.setRequestHeader(q.name, q.value)
                    }, this)
                }
            }, _setTimeout: function k(p) {
                if (!p) {
                    if (this._configuration && this._configuration.timeout) {
                        p = this._configuration.timeout
                    } else {
                        clearTimeout(this._timeout);
                        this._timeout = null
                    }
                }
                if (this._timeout !== null) {
                    clearTimeout(this._timeout)
                }
                if (p > 0) {
                    this._timeout = setTimeout(function () {
                        this.xhr.abort();
                        this.reject()
                    }.bind(this), p)
                }
            }, _timeout: null, _validateConfiguration: function f(r) {
                if (!r) {
                    return "Must provide a configuration object"
                }
                var q = [];
                var p = r.headers;
                if (!r.url) {
                    q.push("Must provide a url")
                }
                if (!r.method) {
                    q.push("Must provide a method")
                }
                if (p) {
                    if (!Array.isArray(p)) {
                        return "Must provide an array of headers"
                    }
                    this._validateHeaders(p, q)
                }
                return q.join(", ")
            }, _validateHeaders: function m(r, s) {
                for (var q = 0, p = r.length; q < p;
                     q++) {
                    if (!r[q].hasOwnProperty("name") || !r[q].hasOwnProperty("value")) {
                        s.push("Must provide a name and value key for all headers");
                        break
                    }
                }
            }, promise: null, reject: null, resolve: null, send: function h() {
                this._setTimeout();
                this._sendXHR();
                return this.promise
            }, xhr: null
        };
        c.exports = a
    }, {}],
    318: [function (c, d, b) {
        var a = function a() {
            this.parser = null
        };
        var f = a.prototype;
        f.parse = function (k) {
            var i;
            var l;
            var h;
            var g;
            var j;
            if (typeof k !== "string") {
                throw new TypeError(k + " must be a string")
            }
            if (!this.parser) {
                this.parser = document.createElement("a")
            }
            this._qualifyPath(k);
            h = this.parser.hostname;
            l = this.parser.protocol;
            g = this._normalizePort(this.parser);
            i = this.parser.origin || this._constructOriginString(this.parser, g);
            j = this.parser.search;
            return {
                originalPath: k,
                qualifiedPath: this.parser.href,
                protocol: l,
                hostname: h,
                origin: i,
                port: g,
                search: j
            }
        };
        f.destroy = function () {
            this.parser = null
        };
        f._constructOriginString = function (i, g) {
            var h = g ? ":" + g : "";
            return i.protocol + "//" + i.hostname + h
        };
        f._normalizePort = function (g) {
            return g.port === "80" || g.port === "443" || g.port === "0" ? "" : g.port
        };
        f._qualifyPath = function (g) {
            this.parser.href = g;
            this.parser.href = this.parser.href
        };
        d.exports = a
    }, {}],
    319: [function (b, d, a) {
        var c = b("./Request");
        var f = function f(g) {
            c.apply(this, arguments)
        };
        f.prototype = c.create();
        f.prototype._getTransport = function () {
            return new XDomainRequest()
        };
        f.prototype._addReadyStateChangeHandler = function () {
            this.xhr.ontimeout = function () {
                this.reject(this.xhr)
            }.bind(this);
            this.xhr.onerror = function () {
                this.reject(this.xhr)
            }.bind(this);
            this.xhr.onload = function () {
                this.resolve(this.xhr)
            }.bind(this)
        };
        f.prototype._setTimeout = function (g) {
            if (!g) {
                if (this._configuration && this._configuration.timeout) {
                    g = this._configuration.timeout
                }
            }
            if (g > 0) {
                this.xhr.timeout = g
            }
        };
        f.prototype._sendXHR = function () {
            setTimeout(function () {
                c.prototype._sendXHR.call(this)
            }.bind(this), 0)
        };
        d.exports = f
    }, {"./Request": 317}],
    320: [function (b, c, a) {
        c.exports = {
            Queue: b("./ac-queue/Queue"),
            QueueItem: b("./ac-queue/QueueItem"),
            LiveQueue: b("./ac-queue/LiveQueue")
        }
    }, {"./ac-queue/LiveQueue": 321, "./ac-queue/Queue": 322, "./ac-queue/QueueItem": 323}],
    321: [function (b, c, a) {
        b("@marcom/ac-polyfills/Promise");
        b("@marcom/ac-polyfills/requestAnimationFrame");
        b("@marcom/ac-polyfills/Function/prototype.bind");
        var g = b("./Queue");
        var h = b("./QueueItem");

        function f(i) {
            this._queue = new g();
            this._maxProcesses = i || 1;
            this._availableSlots = this._maxProcesses;
            this._rafId = 0;
            this._isRunning = false;
            this._boundFunctions = {_run: this._run.bind(this), _releaseSlot: this._releaseSlot.bind(this)}
        }

        var d = f.prototype;
        d.start = function () {
            if (this._isRunning) {
                cancelAnimationFrame(this._rafId)
            }
            this._rafId = requestAnimationFrame(this._boundFunctions._run);
            this._isRunning = true
        };
        d.pause = function () {
            if (this._isRunning) {
                cancelAnimationFrame(this._rafId);
                this._rafId = 0
            }
            this._isRunning = false
        };
        d.stop = function () {
            this.pause();
            this.clear()
        };
        d.enqueue = function (i, j) {
            if (typeof i !== "function") {
                throw new Error("LiveQueue can only enqueue functions")
            }
            if (j === undefined) {
                j = g.PRIORITY_DEFAULT
            }
            var k = new h(i, j);
            return this.enqueueQueueItem(k)
        };
        d.enqueueQueueItem = function (i) {
            this._queue.enqueueQueueItem(i);
            if (this._isRunning && this._rafId === 0) {
                this.start()
            }
            return i
        };
        d.dequeueQueueItem = function (i) {
            return this._queue.dequeueQueueItem(i)
        };
        d.clear = function () {
            this._queue = new g()
        };
        d.destroy = function () {
            this.pause();
            this._isRunning = false;
            this._queue = null;
            this._boundFunctions = null
        };
        d.count = function () {
            return this._queue.count() + this.pending()
        };
        d.pending = function () {
            return this._maxProcesses - this._availableSlots
        };
        d.isEmpty = function () {
            return this.count() === 0
        };
        d._run = function () {
            if (!this._isRunning) {
                return
            }
            this._rafId = requestAnimationFrame(this._boundFunctions._run);
            if (this._queue.isEmpty() || this._availableSlots === 0) {
                return
            }
            var j = this._queue.dequeue();
            var i = j.data();
            if (this._isPromise(i)) {
                this._retainSlot();
                i.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)
            }
            this._stopRunningIfDone()
        };
        d._retainSlot = function () {
            this._availableSlots--
        };
        d._releaseSlot = function () {
            this._availableSlots++;
            this._stopRunningIfDone()
        };
        d._stopRunningIfDone = function () {
            if (this._rafId != 0 && this._queue.count() === 0 && this._availableSlots == this._maxProcesses) {
                cancelAnimationFrame(this._rafId);
                this._rafId = 0
            }
        };
        d._isPromise = function (i) {
            return !!(i && typeof i.then === "function")
        };
        c.exports = f
    }, {
        "./Queue": 322,
        "./QueueItem": 323,
        "@marcom/ac-polyfills/Function/prototype.bind": 492,
        "@marcom/ac-polyfills/Promise": 496,
        "@marcom/ac-polyfills/requestAnimationFrame": 500
    }],
    322: [function (b, c, a) {
        var g = b("./QueueItem");

        function f() {
            this._items = []
        }

        var d = f.prototype;
        d.enqueue = function (j, h) {
            if (h === undefined) {
                h = f.PRIORITY_DEFAULT
            }
            var i = new g(j, h);
            return this.enqueueQueueItem(i)
        };
        d.enqueueQueueItem = function (h) {
            if (this._items.indexOf(h) === -1) {
                this._items.push(h)
            }
            return h
        };
        d.dequeue = function () {
            this._heapSort();
            var i = this._items.length - 1;
            var h = this._items[0];
            this._items[0] = this._items[i];
            this._items.pop();
            return h
        };
        d.dequeueQueueItem = function (i) {
            var h = this._items.indexOf(i);
            if (h > -1) {
                this._items.splice(h, 1)
            }
            return i
        };
        d.peek = function () {
            if (this.count() == 0) {
                return null
            }
            this._heapSort();
            return this._items[0]
        };
        d.isEmpty = function () {
            return this._items.length === 0
        };
        d.count = function () {
            return this._items.length
        };
        d.toString = function () {
            var j = ["Queue total items: " + this.count() + "\n"];
            for (var h = 0; h < this.count(); ++h) {
                j.push(this._items[h].toString() + "\n")
            }
            return j.join("")
        };
        d._heapSort = function () {
            var h = 0;
            for (var m = this._items.length - 1; m >= 0; m--) {
                var n = m;
                while (n > 0) {
                    h++;
                    var j = Math.floor((n - 1) / 2);
                    if (this._items[n].compareTo(this._items[j]) >= 0) {
                        break
                    }
                    var l = this._items[n];
                    this._items[n] = this._items[j];
                    this._items[j] = l;
                    n = j
                }
            }
        };
        f.PRIORITY_LOW = 10;
        f.PRIORITY_DEFAULT = 5;
        f.PRIORITY_HIGH = 1;
        c.exports = f
    }, {"./QueueItem": 323}],
    323: [function (b, c, a) {
        var g = 0;

        function f(i, h) {
            this.priority = h;
            this.data = i;
            this.insertionOrder = g++
        }

        var d = f.prototype;
        d.compareTo = function (h) {
            if (this.priority < h.priority) {
                return -1
            } else {
                if (this.priority > h.priority) {
                    return 1
                } else {
                    return this.insertionOrder < h.insertionOrder ? -1 : 1
                }
            }
        };
        d.toString = function () {
            return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
        };
        c.exports = f
    }, {}],
    324: [function (d, f, c) {
        var h;
        var g = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var b = d("@marcom/ac-object/defaults");
        var i = {priority: 5};

        function a(k, j) {
            g.call(this);
            this.options = b(i, j || {});
            this.src = k;
            this.data = null;
            this.error = null;
            this.priority = this.options.priority;
            this.status = "idle";
            this._onLoad = this._onLoad.bind(this);
            this._onError = this._onError.bind(this)
        }

        h = a.prototype = Object.create(g.prototype);
        h.load = function () {
            if (this.status === "idle") {
                this.status = "pending";
                this._load()
            }
        };
        h.destroy = function () {
            g.prototype.destroy.call(this);
            this.status = "destroyed";
            this.data = null
        };
        h._load = function () {
            this.data = {src: this.src};
            window.setTimeout(this._onLoad.bind(this), 20)
        };
        h._onLoad = function () {
            if (this.status !== "destroyed") {
                this.status = "loaded";
                this.trigger("loaded", this)
            }
        };
        h._onError = function (j) {
            if (this.status !== "destroyed") {
                this.error = j;
                this.status = "error";
                this.trigger("error", this)
            }
        };
        f.exports = a
    }, {"@marcom/ac-event-emitter-micro": 128, "@marcom/ac-object/defaults": 462}],
    325: [function (b, c, a) {
        var f;
        var d = b("../Asset");

        function g(i, h) {
            d.apply(this, arguments)
        }

        f = g.prototype = Object.create(d.prototype);
        f._load = function () {
            this.data = new Image();
            this.data.addEventListener("load", this._onLoad);
            this.data.addEventListener("error", this._onError);
            this.data.src = this.src
        };
        f.destroy = function () {
            if (this.data) {
                this.data.removeEventListener("load", this._onLoad);
                this.data.removeEventListener("error", this._onError)
            }
            this.status = "destroyed";
            this.data = null
        };
        c.exports = g
    }, {"../Asset": 324}],
    326: [function (d, b, g) {
        d("@marcom/ac-polyfills/Promise");
        var h = d("@marcom/ac-object/defaults");
        var a = d("./XHR/ArrayBuffer");
        var l = d("./XHR/JSON");
        var j = d("../Asset");
        var k = d("../AssetGroup");
        var i;
        var f = {manifestTimeout: 5000, chunkTimeout: 10000};
        var c = function c(p, n) {
            var o = h(f, n || {});
            j.call(this, p, o);
            if (p.lastIndexOf("/") !== p.length - 1) {
                p = p + "/"
            }
            var m = "j";
            this._manifestPath = p + "manifest." + m + "son";
            this._chunks = [];
            this._loadChunks = this._loadChunks.bind(this);
            this._onChunksLoaded = this._onChunksLoaded.bind(this);
            this._manifestLoader = null;
            this._chunkLoader = null
        };
        i = c.prototype = Object.create(j.prototype);
        i._load = function () {
            this._loadManifest().then(this._loadChunks).then(this._onChunksLoaded)["catch"](this._onError)
        };
        i._loadManifest = function () {
            var m = new l(this._manifestPath, {timeout: this.options.manifestTimeout});
            var n = new k(m, {privateQueue: this.options.queue});
            n.load();
            this._manifestLoader = n;
            return new Promise(function (p, o) {
                n.once("load", function (q) {
                    p(q.latest)
                });
                n.once("error", function (q) {
                    o(q.latest.error)
                })
            })
        };
        i._loadChunks = function (n) {
            this._manifest = n.data;
            this._manifestLoader.destroy();
            this._manifestLoader = null;
            var m = [];
            this._manifest.files.forEach(function (r, q) {
                m.push(this._getOrCreateChunkObject(r, q))
            }, this);
            var p = new k(m, {privateQueue: this.options.queue, failFast: true});
            var o = new Promise(function (r, q) {
                p.once("load", r);
                p.once("error", function (s) {
                    q(s.latest.error)
                })
            });
            p.load();
            this._chunkLoader = p;
            return o
        };
        i._getOrCreateChunkObject = function (o, m) {
            var p = this.options.chunkTimeout ? {timeout: this.options.chunkTimeout} : null;
            if (!this._chunks[m]) {
                var r = o.path;
                if (!r.match(/(^http(s?))/)) {
                    r = this.src + "/" + r
                } else {
                    if (!!this.src.match(/(^http(s?))/)) {
                        var q = r.indexOf("/", 10);
                        var n = this.src.indexOf("/", 10);
                        r = this.src.substring(0, n) + r.substring(q)
                    }
                }
                this._chunks[m] = new a(r, p)
            }
            return this._chunks[m]
        };
        i._onChunksLoaded = function () {
            var m = this._chunks.length;
            var n = [];
            for (var o = 0; o < m; o++) {
                n.push(this._chunks[o].data);
                this._chunks[o].off()
            }
            this.data = new Blob(n, {type: this._manifest.mimeType});
            n = this._chunks = null;
            this._chunkLoader.destroy();
            this._chunkLoader = null;
            this._onLoad()
        };
        i.pause = function () {
            if (this._manifestLoader) {
                this._manifestLoader.pause()
            }
            if (this._chunkLoader) {
                this._chunkLoader.pause()
            }
        };
        i.resume = function () {
            if (this._manifestLoader) {
                this._manifestLoader.resume()
            }
            if (this._chunkLoader) {
                this._chunkLoader.resume()
            }
        };
        i.destroy = function () {
            this.pause();
            if (this._manifestLoader) {
                this._manifestLoader.destroy()
            }
            if (this._chunkLoader) {
                this._chunkLoader.destroy()
            }
            this._chunks = null;
            j.prototype.destroy.call(this)
        };
        b.exports = c
    }, {
        "../Asset": 324,
        "../AssetGroup": 331,
        "./XHR/ArrayBuffer": 329,
        "./XHR/JSON": 330,
        "@marcom/ac-object/defaults": 462,
        "@marcom/ac-polyfills/Promise": 496
    }],
    327: [function (c, d, b) {
        var g;
        var f = c("../Asset");
        var h = c("./SplitFile");

        function a(j, i) {
            f.apply(this, arguments);
            this.options = i || {};
            this._binary = this.options.binary || this._createAssetType()
        }

        g = a.prototype = Object.create(f.prototype);
        g._canUseBlob = function () {
            return window.Blob !== undefined && window.URL !== undefined && typeof window.URL.createObjectURL === "function"
        };
        g._createAssetType = function () {
            if (this._canUseBlob()) {
                return new h(this.src, this.options)
            }
        };
        g._load = function () {
            this._binary.on("loaded", this._onLoad);
            this._binary.on("error", this._onError);
            this._binary.load()
        };
        g._onLoad = function (i) {
            this.data = i;
            if (this.data instanceof window.Blob) {
                this.data = this.options.element;
                if (!this.data) {
                    this.data = document.createElement("video")
                }
                if (this.data.getAttribute("type") !== i.type) {
                    this.data.setAttribute("type", i.type)
                }
                this.data.src = window.URL.createObjectURL(i)
            }
            f.prototype._onLoad.call(this, this.data)
        };
        g.pause = function () {
            this._binary.pause()
        };
        g.destroy = function () {
            this._binary.destroy();
            f.prototype.destroy.call(this)
        };
        d.exports = a
    }, {"../Asset": 324, "./SplitFile": 326}],
    328: [function (b, a, d) {
        var g;
        var j = b("@marcom/ac-ajax");
        var i = b("../Asset");
        var f = b("@marcom/ac-object/defaults");
        var c = {timeout: 30 * 1000, responseType: ""};

        function h(m, k) {
            var l = f(c, k || {});
            i.call(this, m, l);
            this._request = this._createRequest();
            this._request.xhr.responseType = this.options.responseType
        }

        g = h.prototype = Object.create(i.prototype);
        g.destroy = function () {
            if (this.status === "idle" || this.status === "loaded") {
                this._request = null
            }
            if (this.status === "pending") {
                this._request.xhr.abort();
                i.prototype.destroy.call(this);
                return
            }
            i.prototype.destroy.call(this)
        };
        g._createRequest = function () {
            return j.create({
                url: this.src,
                method: "GET",
                timeout: this.options.timeout,
                responseType: this.options.responseType
            })
        };
        g._load = function () {
            this._request.send().then(this._onLoad)["catch"](this._onError)
        };
        g._onLoad = function (k) {
            this.data = this.data || k.response;
            this._request = null;
            i.prototype._onLoad.call(this)
        };
        a.exports = h
    }, {"../Asset": 324, "@marcom/ac-ajax": 315, "@marcom/ac-object/defaults": 462}],
    329: [function (d, f, b) {
        var g;
        var a = d("../XHR");
        var c = d("@marcom/ac-object/extend");
        var h = {responseType: "arraybuffer"};

        function i(l, j) {
            var k = c(j || {}, h);
            a.call(this, l, k)
        }

        g = i.prototype = Object.create(a.prototype);
        f.exports = i
    }, {"../XHR": 328, "@marcom/ac-object/extend": 463}],
    330: [function (b, c, a) {
        var f;
        var d = b("../XHR");

        function g(i, h) {
            d.apply(this, arguments)
        }

        f = g.prototype = Object.create(d.prototype);
        f._onLoad = function (i) {
            try {
                this.data = JSON.parse(i.response || i.responseText)
            } catch (h) {
                this._onError(h)
            }
            d.prototype._onLoad.call(this, i)
        };
        c.exports = g
    }, {"../XHR": 328}],
    331: [function (c, b, f) {
        c("@marcom/ac-polyfills/Promise");
        var i = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var g = c("@marcom/ac-object/defaults");
        var a = c("./utils/enqueueAsset");
        var k = c("./utils/selectQueue");
        var j = c("./queue");
        var d = {failFast: true, privateQueue: false, privateQueueThreads: j.DEFAULT_THREADS};
        var l = function l(n, m) {
            i.call(this);
            this.options = g(d, m || {});
            this._onGroupError = this._onGroupError.bind(this);
            this._onAssetError = this._onAssetError.bind(this);
            this._onScheduled = this._onScheduled.bind(this);
            this._onProgress = this._onProgress.bind(this);
            this._onComplete = this._onComplete.bind(this);
            this.errors = [];
            this._queue = k(this.options.privateQueue, this.options.privateQueueThreads);
            this._assets = [].concat(n);
            this._loaded = [];
            this._errored = [];
            this._enqueued = [];
            this._dequeued = [];
            this._pending = [];
            this._isRunning = false;
            this._isComplete = false;
            this._isErrored = false;
            this._destroyPending = false
        };
        var h = l.prototype = Object.create(i.prototype);
        h.load = function () {
            var m = this._assets.map(function (o) {
                var q = {
                    asset: o,
                    success: this._onProgress,
                    failure: this._onAssetError,
                    scheduled: this._onScheduled
                };
                var p = a(this._queue, q, this.options.failFast);
                this._enqueued.push(p);
                return p.promise
            }, this);
            Promise.all(m).then(this._onComplete)["catch"](this._onGroupError);
            this._isRunning = true;
            this._queue.start();
            var n = new Promise(function (p, o) {
                this.once("load", p);
                if (this.options.failFast) {
                    this.once("error", p)
                }
            }.bind(this));
            return n
        };
        h.isRunning = function () {
            return this._isRunning
        };
        h.count = function () {
            return this._enqueued.length
        };
        h.pending = function () {
            return this._pending.length
        };
        h.loadedCount = function () {
            return this._loaded.length
        };
        h.isComplete = function () {
            return this._isComplete
        };
        h.isErrored = function () {
            return this._isErrored
        };
        h.pause = function () {
            if (!this.isComplete() && !this.isErrored() && this.isRunning()) {
                this._dequeueItems();
                this._pauseAssets();
                this._isRunning = false
            }
        };
        h.resume = function () {
            if (!this.isComplete() && !this.isErrored() && !this.isRunning() && !this._destroyPending) {
                this._reenqueueItems();
                this._resumeAssets();
                this._isRunning = true
            }
        };
        h.destroy = function () {
            if (!this._destroyPending) {
                i.prototype.destroy.call(this);
                this.pause();
                this._destroyPending = true;
                this._assets.forEach(function (m) {
                    m.destroy()
                });
                if (this.pending() === 0) {
                    this._destroy()
                }
            }
        };
        h.trigger = function () {
            if (!this._destroyPending) {
                i.prototype.trigger.apply(this, arguments)
            }
        };
        h._destroy = function () {
            if (this.privateQueue) {
                this._queue.destroy();
                this._queue = null;
                this.options.privateQueue = null
            }
            this.errors = null;
            this._assets = null;
            this._loaded = null;
            this._errored = null;
            this._enqueued = null;
            this._dequeued = null;
            this._pending = null
        };
        h._pauseAssets = function () {
            this._assets.forEach(function (m) {
                if (typeof m.pause === "function") {
                    m.pause()
                }
            })
        };
        h._resumeAssets = function () {
            this._assets.forEach(function (m) {
                if (typeof m.resume === "function") {
                    m.resume()
                }
            })
        };
        h._onProgress = function (o) {
            if (!this.isErrored()) {
                var m = this._pending.indexOf(o);
                var p = this._pending.splice(m, 1)[0];
                if (p && p.asset.status === "loaded") {
                    this._loaded.push(p.asset)
                }
                if (this._destroyPending) {
                    if (this.pending() === 0) {
                        this._destroy()
                    }
                    return
                }
                var n = this._makeDataObject(o.asset);
                this.trigger("progress", n)
            }
        };
        h._onScheduled = function (n) {
            var m = this._enqueued.indexOf(n);
            if (m > -1) {
                this._enqueued.splice(m, 1);
                this._pending.push(n)
            }
        };
        h._onComplete = function (m) {
            this._isRunning = false;
            this._isComplete = true;
            var n = this._makeDataObject(this._loaded[this._loaded.length - 1]);
            this.trigger("load", n)
        };
        h._onAssetError = function (n) {
            this.errors.push(n.error);
            this._errored.push(n);
            var m = this._pending.indexOf(n);
            this._pending.splice(m, 1);
            var o = this._makeDataObject(n.asset);
            this.trigger("error", o)
        };
        h._onGroupError = function (m) {
            if (this.options.failFast) {
                this.pause();
                this._isErrored = true;
                this._isRunning = false;
                this._isComplete = false
            }
        };
        h._makeDataObject = function (o) {
            var n = this.errors.length;
            var m = this.errors.map(function (p) {
                return this._assets.indexOf(p)
            }, this);
            return {latest: o, assets: this._assets, error: !!(n > 0), errored: this.errors}
        };
        h._dequeueItems = function () {
            this._enqueued.forEach(function (m) {
                this._queue.dequeueQueueItem(m.queueItem);
                this._dequeued.push(m)
            }, this);
            this._enqueued = []
        };
        h._reenqueueItems = function () {
            this._dequeued.forEach(function (m) {
                this._queue.enqueueQueueItem(m.queueItem);
                this._enqueued.push(m)
            }, this);
            this._dequeued = []
        };
        b.exports = l
    }, {
        "./queue": 336,
        "./utils/enqueueAsset": 337,
        "./utils/selectQueue": 338,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-object/defaults": 462,
        "@marcom/ac-polyfills/Promise": 496
    }],
    332: [function (b, c, a) {
        c.exports.assetLoader = b("./assetLoader");
        c.exports.types = b("./assetTypes");
        c.exports.AssetGroup = b("./AssetGroup");
        c.exports.createAsset = b("./createAsset")
    }, {"./AssetGroup": 331, "./assetLoader": 333, "./assetTypes": 334, "./createAsset": 335}],
    333: [function (j, b, w) {
        var q = j("./queue");
        var r = j("./AssetGroup");
        var k = j("./assetTypes");
        var v = j("./createAsset");
        var a = j("./utils/selectQueue");
        var s = j("@marcom/ac-object/clone");

        function u(x, y) {
            x = [].concat(x);
            return x.map(function (z) {
                return v(z, y)
            })
        }

        function t(z, x) {
            var y = s(x || {});
            y.privateQueue = a(y.privateQueue, y.privateQueueThreads);
            z = u(z, y.privateQueue);
            return new r(z, y)
        }

        b.exports = {
            count: function g() {
                return q.getInstance().count()
            }, pending: function d() {
                return q.getInstance().pending()
            }, pause: function f() {
                return q.getInstance().pause()
            }, stop: function p() {
                return q.getInstance().stop()
            }, clear: function o() {
                return q.getInstance().clear()
            }, isEmpty: function n() {
                return q.getInstance().isEmpty()
            }, load: function i(y, x) {
                var z = t(y, x);
                return z.load()
            }, resume: function c() {
                return q.getInstance().start()
            }, setThreads: function l(x) {
                q.setThreads(x)
            }, createAssets: function m(y, x) {
                return u(y, x)
            }, createAssetGroup: function h(y, x) {
                return t(y, x)
            }, types: k
        }
    }, {
        "./AssetGroup": 331,
        "./assetTypes": 334,
        "./createAsset": 335,
        "./queue": 336,
        "./utils/selectQueue": 338,
        "@marcom/ac-object/clone": 460
    }],
    334: [function (c, b, f) {
        var g = c("./Asset/XHR");
        var d = c("./Asset/SplitFile");
        var h = c("./Asset/Img");
        var i = c("./Asset/Video");
        var a = c("./Asset/XHR/ArrayBuffer");
        var j = c("./Asset/XHR/JSON");
        b.exports = {
            XHR_ASSET: g,
            JSON_ASSET: j,
            SPLITFILE_ASSET: d,
            IMG_ASSET: h,
            VIDEO_ASSET: i,
            ARRAY_BUFFER_ASSET: a
        }
    }, {
        "./Asset/Img": 325,
        "./Asset/SplitFile": 326,
        "./Asset/Video": 327,
        "./Asset/XHR": 328,
        "./Asset/XHR/ArrayBuffer": 329,
        "./Asset/XHR/JSON": 330
    }],
    335: [function (c, f, b) {
        var d = c("./assetTypes");
        var a = c("./Asset");
        var i = {
            txt: d.XHR_ASSET,
            xml: d.XHR_ASSET,
            csv: d.XHR_ASSET,
            json: d.JSON_ASSET,
            png: d.IMG_ASSET,
            jpg: d.IMG_ASSET,
            gif: d.IMG_ASSET,
            svg: d.IMG_ASSET,
            splitfile: d.SPLITFILE_ASSET
        };

        function h(j) {
            j = j.replace(/([?#].*)$/, "");
            return i[j.split(".").pop()]
        }

        f.exports = function g(k, j) {
            var l = {};
            if (a.prototype.isPrototypeOf(k)) {
                return src
            }
            if (typeof k === "string") {
                l.src = k;
                l.type = h(k)
            }
            if ((typeof k === "undefined" ? "undefined" : _typeof(k)) === "object") {
                l = k;
                if (typeof l.type === "string") {
                    l.type = h(l.type)
                }
                if (!l.type) {
                    l.type = h(l.src)
                }
            }
            if (!l.options) {
                l.options = {}
            }
            if (j) {
                l.options.queue = j
            }
            return new l.type(l.src, l.options)
        }
    }, {"./Asset": 324, "./assetTypes": 334}],
    336: [function (f, b, i) {
        var h = f("@marcom/ac-queue").LiveQueue;
        var a = 4;
        var p = a;
        var o;

        function k() {
            return p
        }

        function n(q) {
            q = q || a;
            return new h(q)
        }

        function d(q) {
            q = q || p;
            if (!o) {
                o = n(q)
            }
            return o
        }

        function m(q) {
            p = q
        }

        b.exports = {
            getInstance: function g(q) {
                return d(q)
            }, setThreads: function j(q) {
                m(q)
            }, newInstance: function l(q) {
                return n(q)
            }, isLiveQueue: function c(q) {
                return q instanceof h
            }, DEFAULT_THREADS: a
        }
    }, {"@marcom/ac-queue": 320}],
    337: [function (c, d, a) {
        c("@marcom/ac-polyfills/Promise");

        function b(h, g) {
            if (typeof h[g] === "function") {
                h[g](h)
            }
        }

        d.exports = function f(h, k, l) {
            var j = function j(n, m) {
                k.scheduled(k);
                k.asset.once("loaded", function (o) {
                    n(k)
                });
                k.asset.once("error", function (o) {
                    if (l) {
                        return m(o)
                    }
                    n(k)
                });
                k.asset.load()
            };
            var i = function i() {
                return new Promise(j)
            };
            var g = new Promise(function (n, m) {
                k.asset.once("loaded", function (o) {
                    b(k, "success");
                    n(o)
                });
                k.asset.once("error", function (o) {
                    k.error = o;
                    b(k, "failure");
                    if (l) {
                        return m(o)
                    }
                    n(k)
                })
            });
            k.queueItem = h.enqueue(i, k.asset.priority);
            k.promise = g;
            return k
        }
    }, {"@marcom/ac-polyfills/Promise": 496}],
    338: [function (c, d, b) {
        var a = c("../queue");
        d.exports = function f(h, g) {
            g = g || a.DEFAULT_THREADS;
            if (a.isLiveQueue(h)) {
                return h
            }
            if (h === true) {
                return a.newInstance(g)
            }
            return a.getInstance()
        }
    }, {"../queue": 336}],
    339: [function (b, c, a) {
        arguments[4][177][0].apply(a, arguments)
    }, {"./shared/getEventType": 348, "./utils/addEventListener": 351, dup: 177}],
    340: [function (b, c, a) {
        arguments[4][178][0].apply(a, arguments)
    }, {"./shared/getEventType": 348, "./utils/dispatchEvent": 352, dup: 178}],
    341: [function (b, c, a) {
        arguments[4][132][0].apply(a, arguments)
    }, {
        "./shared/camelCasedEventTypes": 342,
        "./shared/prefixHelper": 343,
        "./shared/windowFallbackEventTypes": 344,
        "./utils/eventTypeAvailable": 345,
        dup: 132
    }],
    342: [function (b, c, a) {
        arguments[4][135][0].apply(a, arguments)
    }, {dup: 135}],
    343: [function (b, c, a) {
        arguments[4][57][0].apply(a, arguments)
    }, {dup: 57}],
    344: [function (b, c, a) {
        arguments[4][140][0].apply(a, arguments)
    }, {dup: 140}],
    345: [function (b, c, a) {
        arguments[4][141][0].apply(a, arguments)
    }, {dup: 141}],
    346: [function (b, c, a) {
        arguments[4][185][0].apply(a, arguments)
    }, {dup: 185}],
    347: [function (b, c, a) {
        arguments[4][186][0].apply(a, arguments)
    }, {"./shared/getEventType": 348, "./utils/removeEventListener": 353, dup: 186}],
    348: [function (b, c, a) {
        arguments[4][187][0].apply(a, arguments)
    }, {"@marcom/ac-prefixer/getEventType": 341, dup: 187}],
    349: [function (b, c, a) {
        arguments[4][189][0].apply(a, arguments)
    }, {dup: 189}],
    350: [function (b, c, a) {
        arguments[4][190][0].apply(a, arguments)
    }, {dup: 190}],
    351: [function (b, c, a) {
        arguments[4][191][0].apply(a, arguments)
    }, {dup: 191}],
    352: [function (b, c, a) {
        arguments[4][192][0].apply(a, arguments)
    }, {"@marcom/ac-polyfills/CustomEvent": 489, dup: 192}],
    353: [function (b, c, a) {
        arguments[4][193][0].apply(a, arguments)
    }, {dup: 193}],
    354: [function (b, c, a) {
        c.exports.EventEmitter = b("./ac-event-emitter/EventEmitter")
    }, {"./ac-event-emitter/EventEmitter": 355}],
    355: [function (d, c, f) {
        var h = "EventEmitter:propagation";
        var k = function k(l) {
            if (l) {
                this.context = l
            }
        };
        var g = k.prototype;
        var i = function i() {
            if (!this.hasOwnProperty("_events") && _typeof(this._events) !== "object") {
                this._events = {}
            }
            return this._events
        };
        var a = function a(m, o) {
            var p = m[0];
            var q = m[1];
            var n = m[2];
            if (typeof p !== "string" && (typeof p === "undefined" ? "undefined" : _typeof(p)) !== "object" || p === null || Array.isArray(p)) {
                throw new TypeError("Expecting event name to be a string or object.")
            }
            if (typeof p === "string" && !q) {
                throw new Error("Expecting a callback function to be provided.")
            }
            if (q && typeof q !== "function") {
                if ((typeof p === "undefined" ? "undefined" : _typeof(p)) === "object" && (typeof q === "undefined" ? "undefined" : _typeof(q)) === "object") {
                    n = q
                } else {
                    throw new TypeError("Expecting callback to be a function.")
                }
            }
            if ((typeof p === "undefined" ? "undefined" : _typeof(p)) === "object") {
                for (var l in p) {
                    o.call(this, l, p[l], n)
                }
            }
            if (typeof p === "string") {
                p = p.split(" ");
                p.forEach(function (r) {
                    o.call(this, r, q, n)
                }, this)
            }
        };
        var j = function j(o, p) {
            var l;
            var m;
            var n;
            l = i.call(this)[o];
            if (!l || l.length === 0) {
                return
            }
            l = l.slice();
            this._stoppedImmediatePropagation = false;
            for (m = 0, n = l.length; m < n; m++) {
                if (this._stoppedImmediatePropagation || p(l[m], m)) {
                    break
                }
            }
        };
        var b = function b(m, n, o) {
            var l = -1;
            j.call(this, n, function (q, p) {
                if (q.callback === o) {
                    l = p;
                    return true
                }
            });
            if (l === -1) {
                return
            }
            m[n].splice(l, 1)
        };
        g.on = function () {
            var l = i.call(this);
            a.call(this, arguments, function (n, o, m) {
                l[n] = l[n] || (l[n] = []);
                l[n].push({callback: o, context: m})
            });
            return this
        };
        g.once = function () {
            a.call(this, arguments, function (m, o, l) {
                var n = function n(p) {
                    o.call(l || this, p);
                    this.off(m, n)
                };
                this.on(m, n, this)
            });
            return this
        };
        g.off = function (n, p) {
            var m = i.call(this);
            if (arguments.length === 0) {
                this._events = {}
            } else {
                if (!n || typeof n !== "string" && (typeof n === "undefined" ? "undefined" : _typeof(n)) !== "object" || Array.isArray(n)) {
                    throw new TypeError("Expecting event name to be a string or object.")
                }
            }
            if ((typeof n === "undefined" ? "undefined" : _typeof(n)) === "object") {
                for (var o in n) {
                    b.call(this, m, o, n[o])
                }
            }
            if (typeof n === "string") {
                var l = n.split(" ");
                if (l.length === 1) {
                    if (p) {
                        b.call(this, m, n, p)
                    } else {
                        m[n] = []
                    }
                } else {
                    l.forEach(function (q) {
                        m[q] = []
                    })
                }
            }
            return this
        };
        g.trigger = function (m, n, l) {
            if (!m) {
                throw new Error("trigger method requires an event name")
            }
            if (typeof m !== "string") {
                throw new TypeError("Expecting event names to be a string.")
            }
            if (l && typeof l !== "boolean") {
                throw new TypeError("Expecting doNotPropagate to be a boolean.")
            }
            m = m.split(" ");
            m.forEach(function (o) {
                j.call(this, o, function (p) {
                    p.callback.call(p.context || this.context || this, n)
                }.bind(this));
                if (!l) {
                    j.call(this, h, function (q) {
                        var p = o;
                        if (q.prefix) {
                            p = q.prefix + p
                        }
                        q.emitter.trigger(p, n)
                    })
                }
            }, this);
            return this
        };
        g.propagateTo = function (m, n) {
            var l = i.call(this);
            if (!l[h]) {
                this._events[h] = []
            }
            l[h].push({emitter: m, prefix: n})
        };
        g.stopPropagatingTo = function (o) {
            var m = i.call(this);
            if (!o) {
                m[h] = [];
                return
            }
            var p = m[h];
            var n = p.length;
            var l;
            for (l = 0; l < n; l++) {
                if (p[l].emitter === o) {
                    p.splice(l, 1);
                    break
                }
            }
        };
        g.stopImmediatePropagation = function () {
            this._stoppedImmediatePropagation = true
        };
        g.has = function (l, s, p) {
            var o = i.call(this);
            var m = o[l];
            if (arguments.length === 0) {
                return Object.keys(o)
            }
            if (!m) {
                return false
            }
            if (!s) {
                return m.length > 0 ? true : false
            }
            for (var n = 0, q = m.length;
                 n < q; n++) {
                var r = m[n];
                if (p && s && r.context === p && r.callback === s) {
                    return true
                } else {
                    if (s && !p && r.callback === s) {
                        return true
                    }
                }
            }
            return false
        };
        c.exports = k
    }, {}],
    356: [function (b, c, a) {
        c.exports = {DOMEmitter: b("./ac-dom-emitter/DOMEmitter")}
    }, {"./ac-dom-emitter/DOMEmitter": 357}],
    357: [function (c, b, d) {
        var f;
        var k = c("ac-event-emitter").EventEmitter, j = c("./DOMEmitterEvent"), g = {
            addEventListener: c("@marcom/ac-dom-events/addEventListener"),
            removeEventListener: c("@marcom/ac-dom-events/removeEventListener"),
            dispatchEvent: c("@marcom/ac-dom-events/dispatchEvent")
        }, a = {
            querySelectorAll: c("@marcom/ac-dom-traversal/querySelectorAll"),
            matchesSelector: c("@marcom/ac-dom-traversal/matchesSelector")
        };
        var i = "dom-emitter";

        function h(l) {
            if (l === null) {
                return
            }
            this.el = l;
            this._bindings = {};
            this._delegateFuncs = {};
            this._eventEmitter = new k()
        }

        f = h.prototype;
        f.on = function () {
            this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._on);
            return this
        };
        f.once = function () {
            this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._once);
            return this
        };
        f.off = function () {
            this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._off);
            return this
        };
        f.has = function (l, q, p, n) {
            var o, r;
            if (typeof q === "string") {
                o = q;
                r = p
            } else {
                r = q;
                n = p
            }
            if (o) {
                var m = this._getDelegateFuncBindingIdx(l, o, r, n, true);
                if (m > -1) {
                    return true
                }
                return false
            }
            if (this._eventEmitter && this._eventEmitter.has.apply(this._eventEmitter, arguments)) {
                return true
            }
            return false
        };
        f.trigger = function (n, m, o, s) {
            n = this._parseEventNames(n);
            n = this._cleanStringData(n);
            var q, r, p, l = n.length;
            if (typeof m === "string") {
                q = this._cleanStringData(m);
                r = o
            } else {
                r = m;
                s = o
            }
            for (p = 0; p < l; p++) {
                this._triggerDOMEvents(n[p], r, q)
            }
            return this
        };
        f.emitterTrigger = function (m, o, p) {
            if (!this._eventEmitter) {
                return this
            }
            m = this._parseEventNames(m);
            m = this._cleanStringData(m);
            o = new j(o, this);
            var n, l = m.length;
            for (n = 0; n < l; n++) {
                this._eventEmitter.trigger(m[n], o, p)
            }
            return this
        };
        f.propagateTo = function (l, m) {
            this._eventEmitter.propagateTo(l, m);
            return this
        };
        f.stopPropagatingTo = function (l) {
            this._eventEmitter.stopPropagatingTo(l);
            return this
        };
        f.stopImmediatePropagation = function () {
            this._eventEmitter.stopImmediatePropagation();
            return this
        };
        f.destroy = function () {
            this._triggerInternalEvent("willdestroy");
            this.off();
            var l;
            for (l in this) {
                if (this.hasOwnProperty(l)) {
                    this[l] = null
                }
            }
        };
        f._parseEventNames = function (l) {
            if (!l) {
                return [l]
            }
            return l.split(" ")
        };
        f._onListenerEvent = function (n, m) {
            var l = new j(m, this);
            this._eventEmitter.trigger(n, l, false)
        };
        f._setListener = function (l) {
            this._bindings[l] = this._onListenerEvent.bind(this, l);
            g.addEventListener(this.el, l, this._bindings[l])
        };
        f._removeListener = function (l) {
            g.removeEventListener(this.el, l, this._bindings[l]);
            this._bindings[l] = null
        };
        f._triggerInternalEvent = function (l, m) {
            this.emitterTrigger(i + ":" + l, m)
        };
        f._normalizeArgumentsAndCall = function (l, n) {
            var r = {};
            if (l.length === 0) {
                n.call(this, r);
                return
            }
            if (typeof l[0] === "string" || l[0] === null) {
                l = this._cleanStringData(l);
                r.events = l[0];
                if (typeof l[1] === "string") {
                    r.delegateQuery = l[1];
                    r.callback = l[2];
                    r.context = l[3]
                } else {
                    r.callback = l[1];
                    r.context = l[2]
                }
                n.call(this, r);
                return
            }
            var m, p, q = ":", o = l[0];
            for (m in o) {
                if (o.hasOwnProperty(m)) {
                    r = {};
                    p = this._cleanStringData(m.split(q));
                    r.events = p[0];
                    r.delegateQuery = p[1];
                    r.callback = o[m];
                    r.context = l[1];
                    n.call(this, r)
                }
            }
        };
        f._registerDelegateFunc = function (n, p, q, l, o) {
            var m = this._delegateFunc.bind(this, n, p, q, o);
            this._delegateFuncs[p] = this._delegateFuncs[p] || {};
            this._delegateFuncs[p][n] = this._delegateFuncs[p][n] || [];
            this._delegateFuncs[p][n].push({func: l, context: o, delegateFunc: m});
            return m
        };
        f._cleanStringData = function (o) {
            var n = false;
            if (typeof o === "string") {
                o = [o];
                n = true
            }
            var m = [], q, s, r, p, l = o.length;
            for (q = 0; q < l; q++) {
                s = o[q];
                if (typeof s === "string") {
                    if (s === "" || s === " ") {
                        continue
                    }
                    r = s.length;
                    while (s[0] === " ") {
                        s = s.slice(1, r);
                        r--
                    }
                    while (s[r - 1] === " ") {
                        s = s.slice(0, r - 1);
                        r--
                    }
                }
                m.push(s)
            }
            if (n) {
                return m[0]
            }
            return m
        };
        f._unregisterDelegateFunc = function (n, q, l, p) {
            if (!this._delegateFuncs[q] || !this._delegateFuncs[q][n]) {
                return
            }
            var o = this._getDelegateFuncBindingIdx(n, q, l, p), m;
            if (o > -1) {
                m = this._delegateFuncs[q][n][o].delegateFunc;
                this._delegateFuncs[q][n].splice(o, 1);
                if (this._delegateFuncs[q][n].length === 0) {
                    this._delegateFuncs[q][n] = null
                }
            }
            return m
        };
        f._unregisterDelegateFuncs = function (l, n) {
            if (!this._delegateFuncs[n]) {
                return
            }
            if (l !== null && !this._delegateFuncs[n][l]) {
                return
            }
            if (l === null) {
                var m;
                for (m in this._delegateFuncs[n]) {
                    if (this._delegateFuncs[n].hasOwnProperty(m)) {
                        this._unbindDelegateFunc(m, n)
                    }
                }
                return
            }
            this._unbindDelegateFunc(l, n)
        };
        f._unbindDelegateFunc = function (l, n) {
            var o, p, m = 0;
            while (this._delegateFuncs[n][l] && this._delegateFuncs[n][l][m]) {
                o = this._delegateFuncs[n][l][m];
                p = this._delegateFuncs[n][l][m].length;
                this._off({events: l, delegateQuery: n, callback: o.func, context: o.context});
                if (this._delegateFuncs[n][l] && p === this._delegateFuncs[n][l].length) {
                    m++
                }
            }
            o = p = null
        };
        f._unregisterDelegateFuncsByEvent = function (l) {
            var m;
            for (m in this._delegateFuncs) {
                if (this._delegateFuncs.hasOwnProperty(m)) {
                    this._unregisterDelegateFuncs(l, m)
                }
            }
        };
        f._delegateFunc = function (l, p, r, n, q) {
            if (this._targetHasDelegateAncestor(q.target, p)) {
                var m = Array.prototype.slice.call(arguments, 0), o = m.slice(4, m.length);
                n = n || window;
                if (_typeof(q.detail) === "object") {
                    o[0] = q.detail
                }
                r.apply(n, o)
            }
        };
        f._targetHasDelegateAncestor = function (n, m) {
            var l = n;
            while (l && l !== this.el && l !== document.documentElement) {
                if (a.matchesSelector(l, m)) {
                    return true
                }
                l = l.parentNode
            }
            return false
        };
        f._on = function (p) {
            var m = p.events, q = p.callback, o = p.delegateQuery, n = p.context, l = p.unboundCallback || q;
            m = this._parseEventNames(m);
            m.forEach(function (v, r, t, u, s) {
                if (!this.has(s)) {
                    this._setListener(s)
                }
                if (typeof u === "string") {
                    v = this._registerDelegateFunc(s, u, v, r, t)
                }
                this._triggerInternalEvent("willon", {evt: s, callback: v, context: t, delegateQuery: u});
                this._eventEmitter.on(s, v, t);
                this._triggerInternalEvent("didon", {evt: s, callback: v, context: t, delegateQuery: u})
            }.bind(this, q, l, n, o));
            m = q = l = o = n = null
        };
        f._off = function (q) {
            var m = q.events, r = q.callback, p = q.delegateQuery, o = q.context, l = q.unboundCallback || r;
            if (typeof m === "undefined") {
                this._eventEmitter.off();
                var n;
                for (n in this._bindings) {
                    if (this._bindings.hasOwnProperty(n)) {
                        this._removeListener(n)
                    }
                }
                for (n in this._delegateFuncs) {
                    if (this._delegateFuncs.hasOwnProperty(n)) {
                        this._delegateFuncs[n] = null
                    }
                }
                return
            }
            m = this._parseEventNames(m);
            m.forEach(function (w, s, u, v, t) {
                if (typeof v === "string" && typeof s === "function") {
                    w = this._unregisterDelegateFunc(t, v, s, u);
                    if (!w) {
                        return
                    }
                }
                if (typeof v === "string" && typeof w === "undefined") {
                    this._unregisterDelegateFuncs(t, v);
                    return
                }
                if (typeof t === "string" && typeof w === "undefined") {
                    this._unregisterDelegateFuncsByEvent(t);
                    if (typeof v === "string") {
                        return
                    }
                }
                this._triggerInternalEvent("willoff", {evt: t, callback: w, context: u, delegateQuery: v});
                this._eventEmitter.off(t, w, u);
                this._triggerInternalEvent("didoff", {evt: t, callback: w, context: u, delegateQuery: v});
                if (!this.has(t)) {
                    this._removeListener(t)
                }
            }.bind(this, r, l, o, p));
            m = r = l = p = o = null
        };
        f._once = function (o) {
            var l = o.events, p = o.callback, n = o.delegateQuery, m = o.context;
            l = this._parseEventNames(l);
            l.forEach(function (t, r, s, q) {
                if (typeof s === "string") {
                    return this._handleDelegateOnce(q, t, r, s)
                }
                if (!this.has(q)) {
                    this._setListener(q)
                }
                this._triggerInternalEvent("willonce", {evt: q, callback: t, context: r, delegateQuery: s});
                this._eventEmitter.once.call(this, q, t, r);
                this._triggerInternalEvent("didonce", {evt: q, callback: t, context: r, delegateQuery: s})
            }.bind(this, p, m, n));
            l = p = n = m = null
        };
        f._handleDelegateOnce = function (l, o, m, n) {
            this._triggerInternalEvent("willonce", {evt: l, callback: o, context: m, delegateQuery: n});
            this._on({
                events: l,
                context: m,
                delegateQuery: n,
                callback: this._getDelegateOnceCallback.bind(this, l, o, m, n),
                unboundCallback: o
            });
            this._triggerInternalEvent("didonce", {evt: l, callback: o, context: m, delegateQuery: n});
            return this
        };
        f._getDelegateOnceCallback = function (l, q, n, p) {
            var m = Array.prototype.slice.call(arguments, 0), o = m.slice(4, m.length);
            q.apply(n, o);
            this._off({events: l, delegateQuery: p, callback: q, context: n})
        };
        f._getDelegateFuncBindingIdx = function (s, p, n, l, t) {
            var r = -1;
            if (this._delegateFuncs[p] && this._delegateFuncs[p][s]) {
                var o, m, q = this._delegateFuncs[p][s].length;
                for (o = 0; o < q; o++) {
                    m = this._delegateFuncs[p][s][o];
                    if (t && typeof n === "undefined") {
                        n = m.func
                    }
                    if (m.func === n && m.context === l) {
                        r = o;
                        break
                    }
                }
            }
            return r
        };
        f._triggerDOMEvents = function (n, q, p) {
            var m = [this.el];
            if (p) {
                m = a.querySelectorAll(p, this.el)
            }
            var o, r, l = m.length;
            for (o = 0; o < l; o++) {
                g.dispatchEvent(m[o], n, {bubbles: true, cancelable: true, detail: q})
            }
        };
        b.exports = h
    }, {
        "./DOMEmitterEvent": 358,
        "@marcom/ac-dom-events/addEventListener": 339,
        "@marcom/ac-dom-events/dispatchEvent": 340,
        "@marcom/ac-dom-events/removeEventListener": 347,
        "@marcom/ac-dom-traversal/matchesSelector": 19,
        "@marcom/ac-dom-traversal/querySelectorAll": 21,
        "ac-event-emitter": 354
    }],
    358: [function (b, c, a) {
        var f = {
            preventDefault: b("@marcom/ac-dom-events/preventDefault"),
            stopPropagation: b("@marcom/ac-dom-events/stopPropagation"),
            target: b("@marcom/ac-dom-events/target")
        };
        var d;
        var g = function g(i, h) {
            this._domEmitter = h;
            this.originalEvent = i || {};
            this._originalTarget = f.target(this.originalEvent);
            this.target = this._originalTarget || this._domEmitter.el;
            this.currentTarget = this._domEmitter.el;
            this.timeStamp = this.originalEvent.timeStamp || Date.now();
            if (this._isDOMEvent(this.originalEvent)) {
                if (_typeof(this.originalEvent.detail) === "object") {
                    this.data = this.originalEvent.detail
                }
            } else {
                if (i) {
                    this.data = this.originalEvent;
                    this.originalEvent = {}
                }
            }
        };
        d = g.prototype;
        d.preventDefault = function () {
            f.preventDefault(this.originalEvent)
        };
        d.stopPropagation = function () {
            f.stopPropagation(this.originalEvent)
        };
        d.stopImmediatePropagation = function () {
            if (this.originalEvent.stopImmediatePropagation) {
                this.originalEvent.stopImmediatePropagation()
            }
            this._domEmitter.stopImmediatePropagation()
        };
        d._isDOMEvent = function (h) {
            if (this._originalTarget || document.createEvent !== "undefined" && typeof CustomEvent !== "undefined" && h instanceof CustomEvent) {
                return true
            }
            return false
        };
        c.exports = g
    }, {
        "@marcom/ac-dom-events/preventDefault": 346,
        "@marcom/ac-dom-events/stopPropagation": 349,
        "@marcom/ac-dom-events/target": 350
    }],
    359: [function (b, c, a) {
        arguments[4][5][0].apply(a, arguments)
    }, {dup: 5}],
    360: [function (b, c, a) {
        arguments[4][6][0].apply(a, arguments)
    }, {dup: 6}],
    361: [function (b, c, a) {
        arguments[4][7][0].apply(a, arguments)
    }, {dup: 7}],
    362: [function (b, c, a) {
        c.exports = 10
    }, {}],
    363: [function (b, c, a) {
        arguments[4][8][0].apply(a, arguments)
    }, {dup: 8}],
    364: [function (b, c, a) {
        arguments[4][9][0].apply(a, arguments)
    }, {dup: 9}],
    365: [function (b, c, a) {
        c.exports = {
            createDocumentFragment: b("./createDocumentFragment"),
            filterByNodeType: b("./filterByNodeType"),
            hasAttribute: b("./hasAttribute"),
            indexOf: b("./indexOf"),
            insertAfter: b("./insertAfter"),
            insertBefore: b("./insertBefore"),
            insertFirstChild: b("./insertFirstChild"),
            insertLastChild: b("./insertLastChild"),
            isComment: b("./isComment"),
            isDocument: b("./isDocument"),
            isDocumentFragment: b("./isDocumentFragment"),
            isDocumentType: b("./isDocumentType"),
            isElement: b("./isElement"),
            isNode: b("./isNode"),
            isNodeList: b("./isNodeList"),
            isTextNode: b("./isTextNode"),
            remove: b("./remove"),
            replace: b("./replace"),
            COMMENT_NODE: b("./COMMENT_NODE"),
            DOCUMENT_FRAGMENT_NODE: b("./DOCUMENT_FRAGMENT_NODE"),
            DOCUMENT_NODE: b("./DOCUMENT_NODE"),
            DOCUMENT_TYPE_NODE: b("./DOCUMENT_TYPE_NODE"),
            ELEMENT_NODE: b("./ELEMENT_NODE"),
            TEXT_NODE: b("./TEXT_NODE")
        }
    }, {
        "./COMMENT_NODE": 359,
        "./DOCUMENT_FRAGMENT_NODE": 360,
        "./DOCUMENT_NODE": 361,
        "./DOCUMENT_TYPE_NODE": 362,
        "./ELEMENT_NODE": 363,
        "./TEXT_NODE": 364,
        "./createDocumentFragment": 366,
        "./filterByNodeType": 367,
        "./hasAttribute": 368,
        "./indexOf": 369,
        "./insertAfter": 370,
        "./insertBefore": 371,
        "./insertFirstChild": 372,
        "./insertLastChild": 373,
        "./isComment": 376,
        "./isDocument": 377,
        "./isDocumentFragment": 378,
        "./isDocumentType": 379,
        "./isElement": 380,
        "./isNode": 381,
        "./isNodeList": 382,
        "./isTextNode": 383,
        "./remove": 384,
        "./replace": 385
    }],
    366: [function (c, d, b) {
        d.exports = function a(g) {
            var f = document.createDocumentFragment();
            var h;
            if (g) {
                h = document.createElement("div");
                h.innerHTML = g;
                while (h.firstChild) {
                    f.appendChild(h.firstChild)
                }
            }
            return f
        }
    }, {}],
    367: [function (d, f, c) {
        d("@marcom/ac-polyfills/Array/prototype.slice");
        d("@marcom/ac-polyfills/Array/prototype.filter");
        var g = d("./internal/isNodeType");
        var a = d("./ELEMENT_NODE");
        f.exports = function b(i, h) {
            h = h || a;
            i = Array.prototype.slice.call(i);
            return i.filter(function (j) {
                return g(j, h)
            })
        }
    }, {
        "./ELEMENT_NODE": 363,
        "./internal/isNodeType": 374,
        "@marcom/ac-polyfills/Array/prototype.filter": 484,
        "@marcom/ac-polyfills/Array/prototype.slice": 487
    }],
    368: [function (c, d, a) {
        d.exports = function b(g, f) {
            if ("hasAttribute" in g) {
                return g.hasAttribute(f)
            }
            return g.attributes.getNamedItem(f) !== null
        }
    }, {}],
    369: [function (c, d, b) {
        c("@marcom/ac-polyfills/Array/prototype.indexOf");
        c("@marcom/ac-polyfills/Array/prototype.slice");
        var g = c("./internal/validate");
        var a = c("./filterByNodeType");
        d.exports = function f(k, i) {
            var h = k.parentNode;
            var j;
            if (!h) {
                return 0
            }
            j = h.childNodes;
            if (i !== false) {
                j = a(j, i)
            } else {
                j = Array.prototype.slice.call(j)
            }
            return j.indexOf(k)
        }
    }, {
        "./filterByNodeType": 367,
        "./internal/validate": 375,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 486,
        "@marcom/ac-polyfills/Array/prototype.slice": 487
    }],
    370: [function (b, c, a) {
        var f = b("./internal/validate");
        c.exports = function d(g, h) {
            f.insertNode(g, true, "insertAfter");
            f.childNode(h, true, "insertAfter");
            f.hasParentNode(h, "insertAfter");
            if (!h.nextSibling) {
                return h.parentNode.appendChild(g)
            }
            return h.parentNode.insertBefore(g, h.nextSibling)
        }
    }, {"./internal/validate": 375}],
    371: [function (c, d, a) {
        var f = c("./internal/validate");
        d.exports = function b(g, h) {
            f.insertNode(g, true, "insertBefore");
            f.childNode(h, true, "insertBefore");
            f.hasParentNode(h, "insertBefore");
            return h.parentNode.insertBefore(g, h)
        }
    }, {"./internal/validate": 375}],
    372: [function (c, d, b) {
        var f = c("./internal/validate");
        d.exports = function a(g, h) {
            f.insertNode(g, true, "insertFirstChild");
            f.parentNode(h, true, "insertFirstChild");
            if (!h.firstChild) {
                return h.appendChild(g)
            }
            return h.insertBefore(g, h.firstChild)
        }
    }, {"./internal/validate": 375}],
    373: [function (b, c, a) {
        var d = b("./internal/validate");
        c.exports = function f(g, h) {
            d.insertNode(g, true, "insertLastChild");
            d.parentNode(h, true, "insertLastChild");
            return h.appendChild(g)
        }
    }, {"./internal/validate": 375}],
    374: [function (b, c, a) {
        arguments[4][10][0].apply(a, arguments)
    }, {"../isNode": 381, dup: 10}],
    375: [function (b, c, a) {
        arguments[4][11][0].apply(a, arguments)
    }, {
        "../COMMENT_NODE": 359,
        "../DOCUMENT_FRAGMENT_NODE": 360,
        "../ELEMENT_NODE": 363,
        "../TEXT_NODE": 364,
        "./isNodeType": 374,
        dup: 11
    }],
    376: [function (c, d, a) {
        var g = c("./internal/isNodeType");
        var f = c("./COMMENT_NODE");
        d.exports = function b(h) {
            return g(h, f)
        }
    }, {"./COMMENT_NODE": 359, "./internal/isNodeType": 374}],
    377: [function (c, d, b) {
        var g = c("./internal/isNodeType");
        var a = c("./DOCUMENT_NODE");
        d.exports = function f(h) {
            return g(h, a)
        }
    }, {"./DOCUMENT_NODE": 361, "./internal/isNodeType": 374}],
    378: [function (b, c, a) {
        arguments[4][12][0].apply(a, arguments)
    }, {"./DOCUMENT_FRAGMENT_NODE": 360, "./internal/isNodeType": 374, dup: 12}],
    379: [function (b, c, a) {
        var g = b("./internal/isNodeType");
        var f = b("./DOCUMENT_TYPE_NODE");
        c.exports = function d(h) {
            return g(h, f)
        }
    }, {"./DOCUMENT_TYPE_NODE": 362, "./internal/isNodeType": 374}],
    380: [function (b, c, a) {
        arguments[4][13][0].apply(a, arguments)
    }, {"./ELEMENT_NODE": 363, "./internal/isNodeType": 374, dup: 13}],
    381: [function (b, c, a) {
        arguments[4][14][0].apply(a, arguments)
    }, {dup: 14}],
    382: [function (b, c, a) {
        arguments[4][302][0].apply(a, arguments)
    }, {dup: 302}],
    383: [function (c, d, a) {
        var g = c("./internal/isNodeType");
        var b = c("./TEXT_NODE");
        d.exports = function f(h) {
            return g(h, b)
        }
    }, {"./TEXT_NODE": 364, "./internal/isNodeType": 374}],
    384: [function (b, c, a) {
        arguments[4][15][0].apply(a, arguments)
    }, {"./internal/validate": 375, dup: 15}],
    385: [function (b, d, a) {
        var f = b("./internal/validate");
        d.exports = function c(g, h) {
            f.insertNode(g, true, "insertFirstChild", "newNode");
            f.childNode(h, true, "insertFirstChild", "oldNode");
            f.hasParentNode(h, "insertFirstChild", "oldNode");
            return h.parentNode.replaceChild(g, h)
        }
    }, {"./internal/validate": 375}],
    386: [function (b, c, a) {
        arguments[4][53][0].apply(a, arguments)
    }, {"./getStyleProperty": 387, "./getStyleValue": 388, "./shared/stylePropertyCache": 391, dup: 53}],
    387: [function (b, c, a) {
        arguments[4][54][0].apply(a, arguments)
    }, {
        "./shared/getStyleTestElement": 389,
        "./shared/prefixHelper": 390,
        "./shared/stylePropertyCache": 391,
        "./utils/toCSS": 394,
        "./utils/toDOM": 395,
        dup: 54
    }],
    388: [function (b, c, a) {
        arguments[4][55][0].apply(a, arguments)
    }, {
        "./getStyleProperty": 387,
        "./shared/prefixHelper": 390,
        "./shared/stylePropertyCache": 391,
        "./shared/styleValueAvailable": 392,
        dup: 55
    }],
    389: [function (b, c, a) {
        arguments[4][56][0].apply(a, arguments)
    }, {dup: 56}],
    390: [function (b, c, a) {
        arguments[4][57][0].apply(a, arguments)
    }, {dup: 57}],
    391: [function (b, c, a) {
        arguments[4][58][0].apply(a, arguments)
    }, {dup: 58}],
    392: [function (b, c, a) {
        arguments[4][59][0].apply(a, arguments)
    }, {"./getStyleTestElement": 389, "./stylePropertyCache": 391, dup: 59}],
    393: [function (b, c, a) {
        arguments[4][60][0].apply(a, arguments)
    }, {dup: 60}],
    394: [function (b, c, a) {
        arguments[4][61][0].apply(a, arguments)
    }, {dup: 61}],
    395: [function (b, c, a) {
        arguments[4][62][0].apply(a, arguments)
    }, {dup: 62}],
    396: [function (b, c, a) {
        arguments[4][215][0].apply(a, arguments)
    }, {"./getStyle": 397, "./setStyle": 399, dup: 215}],
    397: [function (b, c, a) {
        arguments[4][63][0].apply(a, arguments)
    }, {"@marcom/ac-prefixer/getStyleProperty": 387, "@marcom/ac-prefixer/stripPrefixes": 393, dup: 63}],
    398: [function (b, c, a) {
        arguments[4][64][0].apply(a, arguments)
    }, {dup: 64}],
    399: [function (b, c, a) {
        arguments[4][65][0].apply(a, arguments)
    }, {
        "./internal/normalizeValue": 398,
        "@marcom/ac-prefixer/getStyleCSS": 386,
        "@marcom/ac-prefixer/getStyleProperty": 387,
        dup: 65
    }],
    400: [function (b, c, a) {
        b("@marcom/ac-polyfills/Promise");
        b("@marcom/ac-polyfills/JSON");
        c.exports = {createFlow: b("./ac-flow/flow/factory"), Player: b("./ac-flow/flow/Player")}
    }, {
        "./ac-flow/flow/Player": 403,
        "./ac-flow/flow/factory": 414,
        "@marcom/ac-polyfills/JSON": 493,
        "@marcom/ac-polyfills/Promise": 496
    }],
    401: [function (c, a, d) {
        var k = c("@marcom/ac-event-emitter-micro").EventEmitterMicro, j = c("./compositor/decorator/Keyframe"),
            i = c("./compositor/decorator/Superframe"), h = c("./compositor/decorator/SuperKeyframe"),
            m = c("./compositor/decorator/Cache");
        var l = c("./compositor/Sequence");

        function f(n, p, q, o) {
            k.call(this);
            this._compositor = new l(p, q, o);
            this.options = n || {}
        }

        var g = f.prototype = new k(null);
        g._gotoImageFrame = function (n) {
            if (this._rendering) {
                return Promise.resolve()
            } else {
                if (this._currentFrame === n) {
                    return Promise.resolve()
                }
            }
            this._rendering = true;
            return this._compositor.compositeFrames(this._currentFrame, n).then(function () {
                this._rendering = false;
                this._currentFrame = n
            }.bind(this))
        };
        g.init = function () {
            var n;
            if (this.options.element.nodeName === "CANVAS") {
                n = this.options.element
            } else {
                n = document.createElement("canvas");
                this.options.element.appendChild(n)
            }
            this.gotoFrame = this._gotoImageFrame;
            return this._compositor.init(n).then(this._decorateCompositor.bind(this))
        };
        g.resumeLoading = function () {
            return this._compositor.resumeLoading()
        };
        g.pauseLoading = function () {
            this._compositor.pauseLoading()
        };
        g._decorateCompositor = function () {
            var n = this._compositor;
            var p;
            var o;
            if (n) {
                p = this._compositor._diffRender.flowData;
                o = this._compositor.canvas;
                if (p.superframeFrequency) {
                    n = new i(n, p.superframeFrequency)
                }
                if (p.version >= 4) {
                    n = new j(n)
                }
                if (p.version >= 4 && p.superframeFrequency) {
                    n = new h(n)
                }
                if (this.options.keyframeCache) {
                    n = new m(n, this.options.keyframeCache)
                }
                if (n === this._compositor) {
                    return Promise.resolve()
                } else {
                    this._compositor = n;
                    return this._compositor.init(o)
                }
            } else {
                return Promise.reject()
            }
        };
        g._destroy = function () {
            this.off();
            this._compositor.destroy()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(g, {
            _currentFrame: {value: 0, enumerable: false, writable: true}, frameCount: {
                get: function b() {
                    return this._compositor.frameCount
                }, enumerable: true
            }
        });
        a.exports = f
    }, {
        "./compositor/Sequence": 404,
        "./compositor/decorator/Cache": 405,
        "./compositor/decorator/Keyframe": 406,
        "./compositor/decorator/SuperKeyframe": 407,
        "./compositor/decorator/Superframe": 408,
        "@marcom/ac-event-emitter-micro": 128
    }],
    402: [function (b, c, a) {
        var h = b("@marcom/ac-asset-loader/assetLoader");
        var f = b("./data/provider/Async");
        var g = function g(i, j, k) {
            this._manifestUrl = i;
            this._keyframeUrls = j;
            this._imageUrlPattern = k;
            this.state = {
                manifestLoaded: false,
                keyframesLoaded: false,
                diffsLoaded: false,
                diffCountLoaded: 0,
                totalDiffs: null
            };
            this.assets = {keyframes: null, manifest: null, diffs: null};
            this._promises = {};
            this._loaders = {};
            this._activeLoaders = [];
            this._resumeQueue = [];
            this._paused = true;
            this._shouldPause = false;
            this._boundOnManifestLoaded = this._onManifestLoaded.bind(this);
            this._boundOnKeyframesLoaded = this._onKeyframesLoaded.bind(this);
            this._boundOnDiffsLoaded = this._onDiffsLoaded.bind(this)
        };
        var d = g.prototype;
        d.setManifestUrl = function (i) {
            this._manifestUrl = i;
            return this
        };
        d.setKeyframeUrls = function (i) {
            this._keyframeUrls = i;
            return this
        };
        d.setImageUrlPattern = function (i) {
            this._imageUrlPattern = i;
            return this
        };
        d.pause = function () {
            this._shouldPause = true;
            var k, j = this._activeLoaders.length;
            for (k = 0; k < j; k++) {
                this._activeLoaders[k].pause()
            }
            this._paused = true
        };
        d.destroy = function () {
            var j, i, k;
            this.pause();
            for (j in this._loaders) {
                if (this._loaders.hasOwnProperty(j)) {
                    this._loaders[j].destroy()
                }
            }
            for (i in this._promises) {
                if (this._promises.hasOwnProperty(i)) {
                    if (this._promises[i].status() === "pending") {
                        this._promises[i].reject()
                    }
                }
            }
            for (k in this) {
                if (this.hasOwnProperty(k)) {
                    this[k] = null
                }
            }
        };
        d.load = function () {
            if (this._paused && (this._activeLoaders.length > 0 || this._resumeQueue.length > 0)) {
                this._resume();
                return true
            }
        };
        d._resume = function () {
            this._shouldPause = false;
            var n, k = this._activeLoaders.length;
            for (n = 0; n < k; n++) {
                this._activeLoaders[n].load()
            }
            var m, l = this._resumeQueue.length;
            for (m = 0; m < l; m++) {
                this._resumeQueue[m].call(this)
            }
            this._resumeQueue = [];
            this._paused = false
        };
        d.loadManifest = function () {
            if (this._shouldPause) {
                this._resumeQueue.push(this.loadManifest);
                return
            }
            if (this.assets.manifest) {
                return this.assets.manifest
            } else {
                this._paused = false;
                this._loaders.manifest = new f(this._getManifestAssetsData());
                this._activeLoaders.push(this._loaders.manifest);
                return this._loaders.manifest.load().then(this._boundOnManifestLoaded)
            }
        };
        d.loadKeyframes = function () {
            var i;
            if (this._shouldPause) {
                this._resumeQueue.push(this.loadKeyframes)
            }
            if (this.assets.keyframes) {
                i = Promise.resolve(this.assets.keyframes)
            } else {
                this._paused = false;
                this._loaders.keyframes = h.createAssetGroup(this._getKeyframesAssetsData());
                this._activeLoaders.push(this._loaders.keyframes);
                i = this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
            }
            this._promises.keyframes = i;
            return this._promises.keyframes
        };
        d.loadDiffs = function () {
            var i;
            if (this._shouldPause) {
                this._resumeQueue.push(this.loadDiffs)
            }
            if (this.assets.diffs) {
                i = this._promises.diffs.resolve(this.assets.diffs)
            } else {
                this._paused = false;
                this._loaders.diffs = h.createAssetGroup(this._getDiffsAssetsData());
                this._activeLoaders.push(this._loaders.diffs);
                i = this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
            }
            this._promises.diffs = i;
            return this._promises.diffs
        };
        d._getManifestAssetsData = function () {
            return this._manifestUrl
        };
        d._getKeyframesAssetsData = function () {
            return this._keyframeUrls
        };
        d._getDiffsAssetsData = function () {
            var l = this.assets.manifest.imagesRequired, j = [], m, k, n = this._imageUrlPattern.match(/#/g).length;
            for (m = 1; m <= l; m++) {
                k = "0000" + m;
                k = k.substring(k.length - n);
                j.push(this._imageUrlPattern.replace(/#{2,}/g, k))
            }
            return j
        };
        d._onManifestLoaded = function (i) {
            if (this.assets) {
                this.assets.manifest = i;
                this.state.manifestLoaded = true;
                this._paused = true;
                this._removeFromActiveLoaders(this._loaders.manifest);
                return this.assets.manifest
            }
        };
        d._onKeyframesLoaded = function (i) {
            if (this.assets) {
                this.assets.keyframes = i;
                this.state.keyframeLoaded = true;
                this._paused = true;
                this._removeFromActiveLoaders(this._loaders.keyframes);
                return Promise.resolve(this.assets.keyframes)
            }
        };
        d._onDiffsLoaded = function (i) {
            if (this.assets) {
                this.assets.diffs = i;
                this.state.diffsLoaded = true;
                this._paused = true;
                this._removeFromActiveLoaders(this._loaders.diffs);
                return Promise.resolve(this.assets.diffs)
            }
        };
        d._removeFromActiveLoaders = function (l) {
            var k, j = this._activeLoaders.length;
            for (k = 0; k < j; k++) {
                if (this._activeLoaders[k] === l) {
                    this._activeLoaders.splice(k, 1);
                    return
                }
            }
        };
        c.exports = g
    }, {"./data/provider/Async": 412, "@marcom/ac-asset-loader/assetLoader": 333}],
    403: [function (d, a, f) {
        var i = d("@marcom/ac-dom-emitter").DOMEmitter;
        var j = d("@marcom/ac-raf-emitter/RAFEmitter");

        function c(k, l) {
            this.element = l;
            this._domEmitter = new i(l);
            this._frameRate = 30;
            this.paused = true;
            this.loop = false;
            this._destroyed = false;
            this._flow = k;
            this._rafEmitter = new j();
            this._rafDrawSet = false;
            this._shouldAdvanceToTimeGlobal = false;
            this._shouldGlobalTimeUpdate = false;
            this._shouldLocalTimeUpdate = false;
            this._boundAdvanceTimeToGlobal = this._advanceToTimeGlobal.bind(this);
            this._onBoundGlobalTimeUpdate = this._onGlobalTimeUpdate.bind(this);
            this._onBoundLocalTimeUpdate = this._onLocalTimeUpdate.bind(this);
            this._rafEmitter.on("draw", this._onDraw.bind(this))
        }

        var g = c.prototype;
        g._timeToFrame = function (k) {
            var l;
            l = Math.round(k / this.duration * this._flow.frameCount);
            l = l % (this._flow.frameCount + 1);
            return l < 0 ? this._flow.frameCount + l : l
        };
        g._advanceToTimeGlobal = function (l) {
            if (this._rafDrawSet) {
                this._prevTime = this._prevTime || l.time;
                this._currentTime += (l.time - this._prevTime) / 1000 * this.playbackRate;
                this._prevTime = l.time;
                this._pauseAfterRender = false;
                var k = this._timeToFrame(this._currentTime);
                if (!this.loop) {
                    if (this.playbackRate > 0 && this._currentTime > this.duration) {
                        k = this._flow.frameCount;
                        this._currentTime = this.duration;
                        this._pauseAfterRender = true
                    } else {
                        if (this.playbackRate < 0 && this._currentTime < 0) {
                            k = 0;
                            this._currentTime = 0;
                            this._pauseAfterRender = true
                        }
                    }
                } else {
                    this._currentTime = (this.duration + this._currentTime) % this.duration
                }
                if (!this.paused && !this.seeking) {
                    return this._flow.gotoFrame(k).then(this._onBoundGlobalTimeUpdate)
                }
            }
        };
        g._onGlobalTimeUpdate = function () {
            this.trigger("timeupdate");
            if (this._pauseAfterRender) {
                this.paused = true;
                this.trigger("ended")
            } else {
                this._bindAdvanceToTimeGlobal()
            }
        };
        g._onLocalTimeUpdate = function () {
            this.seeking = false;
            this.trigger("timeupdate");
            this.trigger("seeked");
            this._bindAdvanceToTimeGlobal()
        };
        g._advanceToTimeLocal = function (k) {
            if (!this.seeking) {
                this.seeking = true;
                this.trigger("seeking");
                this._currentTime = 1 * k;
                this._prevTime = null;
                this._cancelFrame();
                this._flow.gotoFrame(this._timeToFrame(k)).then(this._onBoundLocalTimeUpdate)
            }
        };
        g._onLoaded = function () {
            this.trigger("loaded");
            this.trigger("canplaythrough")
        };
        g._nullProperties = function (l) {
            var k;
            for (k in l) {
                if (l.hasOwnProperty(k)) {
                    l[k] = null
                }
            }
            return l
        };
        g.destroy = function () {
            this._rafEmitter.destroy();
            this.trigger("destroy");
            this.pause();
            this.off();
            this._flow.destroy();
            this._flow = this._nullProperties(this._flow);
            this._nullProperties(this)
        };
        g.load = function () {
            if (this._flow.resumeLoading()) {
                return
            }
            this.trigger("loadstart");
            return this._flow.init().then(function (m) {
                var l = function () {
                    this._onLoaded()
                }.bind(this);
                var k = function () {
                    if (this._destroyed === false) {
                        this.trigger("error")
                    }
                }.bind(this);
                if (m) {
                    return m.then(l, k)
                } else {
                    l()
                }
            }.bind(this))
        };
        g.pauseLoading = function () {
            this._flow.pauseLoading()
        };
        g.play = function () {
            if (this.paused) {
                this.paused = false;
                this.trigger("play");
                this._prevTime = null;
                this._bindAdvanceToTimeGlobal()
            }
            return this
        };
        g.pause = function () {
            if (!this.paused) {
                this.paused = true;
                this._cancelFrame();
                this.trigger("pause")
            }
            return this
        };
        g.on = function () {
            this._domEmitter.on.apply(this._domEmitter, arguments)
        };
        g.once = function () {
            this._domEmitter.once.apply(this._domEmitter, arguments)
        };
        g.trigger = function () {
            this._domEmitter.trigger.apply(this._domEmitter, arguments)
        };
        g.off = function () {
            this._domEmitter.off.apply(this._domEmitter, arguments)
        };
        g._cancelFrame = function () {
            this._rafEmitter.cancel();
            this._rafDrawSet = false
        };
        g._onDraw = function (k) {
            if (this._shouldAdvanceToTimeGlobal) {
                this._advanceToTimeGlobal(k)
            } else {
                if (this._shouldGlobalTimeUpdate) {
                    this._onGlobalTimeUpdate(k)
                } else {
                    if (this._shouldLocalTimeUpdate) {
                        this._onLocalTimeUpdate(k)
                    }
                }
            }
            this._shouldLocalTimeUpdate = false;
            this._shouldGlobalTimeUpdate = false;
            this._shouldLocalTimeUpdate = false
        };
        g._bindAdvanceToTimeGlobal = function () {
            this._rafDrawSet = true;
            this._shouldAdvanceToTimeGlobal = true;
            this._rafEmitter.run()
        };
        g._bindGlobalTimeUpdate = function () {
            this._rafDrawSet = true;
            this._shouldGlobalTimeUpdate = true;
            this._rafEmitter.run()
        };
        g._bindLocalTimeUpdate = function () {
            this._rafDrawSet = true;
            this._shouldLocalTimeUpdate = true;
            this._rafEmitter.run()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(g, {
            _currentTime: {value: 0, enumerable: false, writable: true},
            _playbackRate: {value: 1, enumerable: false, writable: true},
            currentTime: {
                get: function b() {
                    return this._currentTime * 1
                }, set: g._advanceToTimeLocal, enumerable: true
            },
            frameRate: {
                get: function b() {
                    return this._frameRate
                }, set: function h(k) {
                    if (isFinite(k)) {
                        this._frameRate = k;
                        this.trigger("durationchange")
                    }
                }, enumerable: true
            },
            playbackRate: {
                get: function b() {
                    return this._playbackRate * 1
                }, set: function h(k) {
                    if (isFinite(k)) {
                        this._playbackRate = 1 * k;
                        this.trigger("ratechange")
                    }
                }, enumerable: true
            },
            duration: {
                get: function b() {
                    return this._flow.frameCount / this.frameRate
                }, enumerable: true
            }
        });
        a.exports = c
    }, {"@marcom/ac-dom-emitter": 356, "@marcom/ac-raf-emitter/RAFEmitter": 442}],
    404: [function (d, a, f) {
        var h = d("../diff/Render");
        var j = d("../LoadController");

        function b(l, m, k) {
            this._keyframes = m;
            this._imageUrlPattern = k;
            this._loadController = new j(l, m, k)
        }

        var g = b.prototype;
        g._initDiffRender = function (k) {
            this._images = k.assets.map(function (l) {
                return l.data
            });
            this.canvas.height = this._images[0].height;
            this.canvas.width = this._images[0].width;
            this.applyFrame(this._images[0])
        };
        g.init = function (k) {
            this.canvas = k || document.createElement("canvas");
            this.context = k.getContext("2d");
            return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
        };
        g.resumeLoading = function () {
            return this._loadController.load()
        };
        g.pauseLoading = function () {
            this._loadController.pause()
        };
        g.createDiffRender = function (k) {
            this._diffRender = new h(k, this._imageUrlPattern, this._loadController);
            return this._diffRender.init()
        };
        g.applyFrame = function (l) {
            var k = this.context;
            k.drawImage(l, 0, 0)
        };
        g.calculateRenderCount = function (k, l) {
            var m = 0;
            if (Math.abs(l - k) >= l) {
                k = 1;
                m = 1
            } else {
                if (Math.abs(l - k) >= this.frameCount - l && this._images[1]) {
                    k = this.frameCount - 2;
                    m = 1
                }
            }
            if (l > 0 && l < this.frameCount - 1) {
                return Math.abs(k - l) + m
            } else {
                return m
            }
        };
        g.compositeFrames = function (k, l) {
            l = this.frameCount < l ? this.frameCount - 1 : l < 0 ? 0 : l;
            k = this.frameCount - 2 < k ? this.frameCount - 2 : k < 0 ? 0 : k;
            var m;
            if (Math.abs(l - k) >= l) {
                k = 1;
                this.applyFrame(this._images[0])
            } else {
                if (Math.abs(l - k) >= this.frameCount - l && this._images[1]) {
                    k = this.frameCount - 2;
                    this.applyFrame(this._images[1])
                }
            }
            m = k > l ? -1 : k < l ? 1 : 0;
            if (l > 0 && l < this.frameCount - 1) {
                while (k !== l) {
                    this._diffRender.renderDiff(this.canvas, k);
                    k += m
                }
            }
            return Promise.resolve(k)
        };
        g.destroy = function () {
            this._loadController.destroy()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(g, {
            frameCount: {
                get: function c() {
                    return this._diffRender.frames.length + 2
                }, enumerable: true
            }, canvas: {
                get: function c() {
                    return this._canvas
                }, set: function i(k) {
                    return this._canvas = k
                }, enumerable: true
            }, mainCompositor: {
                get: function c() {
                    var k = this;
                    while (k._compositor) {
                        k = k._compositor
                    }
                    return k
                }, enumerable: true
            }
        });
        a.exports = b
    }, {"../LoadController": 402, "../diff/Render": 413}],
    405: [function (d, f, b) {
        function a(j, i) {
            this._compositor = j;
            this._keyframeInterval = i || 8;
            this._keyframes = []
        }

        var g = a.prototype;
        g._getClosestKeyframe = function (i) {
            var j = i % this._keyframeInterval,
                k = Math.floor(i / this._keyframeInterval) + (j > this._keyframeInterval / 2 ? 1 : 0);
            return k
        };
        g._getFrameFromKeyframe = function (i) {
            return i * this._keyframeInterval
        };
        g._saveKeyframe = function (k) {
            var i, j = Math.floor(k / this._keyframeInterval);
            if (k % this._keyframeInterval === 0 && !this._keyframes[j]) {
                i = document.createElement("canvas");
                i.width = this._compositor.canvas.width;
                i.height = this._compositor.canvas.height;
                i.getContext("2d").drawImage(this._compositor.canvas, 0, 0);
                this._keyframes[j] = i
            }
        };
        g.init = function (i) {
            return this._compositor.init.apply(this._compositor, arguments)
        };
        g.resumeLoading = function () {
            return this._compositor.resumeLoading()
        };
        g.pauseLoading = function () {
            return this._compositor.pauseLoading()
        };
        g.applyFrame = function () {
            this._compositor.applyFrame.apply(this._compositor, arguments)
        };
        g.calculateRenderCount = function (i, j) {
            i = this._getFrameFromKeyframe(this._getClosestKeyframe(j));
            return this._compositor.calculateRenderCount(i, j) + 1
        };
        g.compositeFrames = function (i, k) {
            var l = this._getClosestKeyframe(k);
            if (this._keyframes[l] && this._compositor.calculateRenderCount(i, k) > this.calculateRenderCount(i, k)) {
                i = this._getFrameFromKeyframe(l);
                this.applyFrame(this._keyframes[l]);
                return this._compositor.compositeFrames(i, k).then(function j() {
                })
            } else {
                return this._compositor.compositeFrames(i, k).then(function j() {
                }, null, this._saveKeyframe.bind(this))
            }
        };
        g.destroy = function () {
            return this._compositor.destroy()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(g, {
            frameCount: {
                get: function c() {
                    return this._compositor.frameCount
                }, enumerable: true
            }, canvas: {
                get: function c() {
                    return this._compositor.canvas
                }, set: function h(i) {
                    return this._compositor.canvas = i
                }, enumerable: true
            }
        });
        f.exports = a
    }, {}],
    406: [function (d, f, a) {
        var c = d("../../keyframe/Render");

        function h(j) {
            this._compositor = j;
            this._flowDataProvider = this.mainCompositor._loadController._loaders.manifest
        }

        var g = h.prototype;
        g.init = function (j) {
            this._keyframeDiffRender = new c(this._flowDataProvider._data, this.mainCompositor._imageUrlPattern);
            return this._keyframeDiffRender.init()
        };
        g.resumeLoading = function () {
            return this._compositor.resumeLoading()
        };
        g.pauseLoading = function () {
            return this._compositor.pauseLoading()
        };
        g.applyFrame = function (j) {
            return this._compositor.applyFrame.apply(this._compositor, arguments)
        };
        g.applyKeyframe = function (j, k) {
            this._keyframeDiffRender.renderKeyframe(this.canvas, j, k)
        };
        g.compositeFrames = function (j, k) {
            if (!this._isKeyframeDiff(k - 1)) {
                return this._compositor.compositeFrames.apply(this._compositor, arguments)
            }
            this.applyKeyframe(k - 1);
            return Promise.resolve(j - 1)
        };
        g._isKeyframeDiff = function (j) {
            return j in this._keyframeDiffRender._loader._keyframes
        };
        g.calculateRenderCount = function (j, k) {
            return this._compositor.calculateRenderCount.apply(this._compositor, arguments)
        };
        g.destroy = function () {
            return this._compositor.destroy()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(g, {
            frameCount: {
                get: function b() {
                    return this._compositor.frameCount
                }, enumerable: true
            }, canvas: {
                get: function b() {
                    return this._compositor.canvas
                }, set: function i(j) {
                    return this._compositor.canvas = j
                }, enumerable: true
            }, mainCompositor: {
                get: function b() {
                    return this._compositor.mainCompositor
                }, enumerable: true
            }
        });
        f.exports = h
    }, {"../../keyframe/Render": 416}],
    407: [function (c, d, a) {
        function h(i) {
            this._compositor = i;
            this._frames = this.mainCompositor._loadController._loaders.manifest._data.frames;
            this._superframeInterval = this.mainCompositor._diffRender.flowData.superframeFrequency
        }

        var f = h.prototype;
        f.init = function (i) {
            return this._compositor.init.apply(this._compositor, arguments)
        };
        f.resumeLoading = function () {
            return this._compositor.resumeLoading()
        };
        f.pauseLoading = function () {
            return this._compositor.pauseLoading()
        };
        f.applyFrame = function (i) {
            return this._compositor.applyFrame.apply(this._compositor, arguments)
        };
        f.applyKeyframe = function (i, j) {
            this._compositor.applyKeyframe.apply(this._compositor, arguments)
        };
        f.compositeFrames = function (i, k) {
            var l, j;
            if (k < 1 || k > this.frameCount - 2) {
                return this._compositor.compositeFrames.apply(this._compositor, arguments)
            }
            if (this._isKeyframeDiff(k - 1)) {
                l = Math.abs(i - k) === 1 ? true : false;
                this.applyKeyframe(k - 1, l);
                return Promise.resolve(i - 1)
            }
            if (Math.abs(k - i) > this._superframeInterval) {
                j = this._getShortestRender(i, k);
                if (this._isKeyframeDiff(j - 1) || j <= 0 || j >= this.frameCount - 2) {
                    return this._compositeFromSuperKeyframe(j, k)
                }
            }
            return this._compositor.compositeFrames.apply(this._compositor, [i, k])
        };
        f._getShortestRender = function (i, k) {
            var m = this._compositor.calculateRenderCount, l = this._getClosestSuperKeyframe(k - 1),
                j = m.apply(this._compositor, [l, k]) + 1, n = m.apply(this._compositor, [i, k]);
            if (j <= n) {
                return l
            } else {
                return i
            }
        };
        f._compositeFromSuperKeyframe = function (m, k) {
            var i = this.canvas.getContext("2d"),
                j = m <= 0 ? this.mainCompositor._images[0] : m >= this.frameCount - 2 ? this.mainCompositor._images[1] : this._frames[m - 1].image,
                l;
            i.drawImage(j, 0, 0);
            return this._compositor.compositeFrames.call(this._compositor, m, k)
        };
        f._getClosestSuperFrame = function (i) {
            return Math.round(i / this._superframeInterval) * this._superframeInterval
        };
        f._getClosestSuperKeyframe = function (k) {
            var n, o, m, l, j = this._frames.length;
            if (k < j + 1 && k > 0) {
                l = k - 1;
                while (l >= 0) {
                    if (this._frames[l].type === "keyframe") {
                        n = l + 1;
                        break
                    }
                    l -= 1
                }
                l = k + 1;
                while (l <= j - 1) {
                    if (this._frames[l].type === "keyframe") {
                        o = l + 1;
                        break
                    }
                    l += 1
                }
            }
            n = n ? n : 0;
            o = o ? o : this.frameCount;
            m = k - n < o - k ? n : o;
            return m
        };
        f._isKeyframeDiff = function (i) {
            return this._compositor._isKeyframeDiff.apply(this._compositor, arguments)
        };
        f.destroy = function () {
            return this._compositor.destroy()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(f, {
            frameCount: {
                get: function b() {
                    return this._compositor.frameCount
                }, enumerable: true
            }, canvas: {
                get: function b() {
                    return this._compositor.canvas
                }, set: function g(i) {
                    return this._compositor.canvas = i
                }, enumerable: true
            }, mainCompositor: {
                get: function b() {
                    return this._compositor.mainCompositor
                }, enumerable: true
            }
        });
        d.exports = h
    }, {}],
    408: [function (c, d, a) {
        function g(j, i) {
            this._compositor = j;
            this._superframeInterval = i || 4
        }

        var f = g.prototype;
        f._getClosestSuperframe = function (i) {
            return Math.round(i / this._superframeInterval) * this._superframeInterval
        };
        f.init = function (i) {
            this._screenCanvas = i
        };
        f.resumeLoading = function () {
            return this._compositor.resumeLoading()
        };
        f.pauseLoading = function () {
            return this._compositor.pauseLoading()
        };
        f.applyFrame = function () {
            this._compositor.applyFrame.apply(this._compositor, arguments)
        };
        f.calculateRenderCount = function (i, k) {
            var j = this._getClosestSuperframe(i);
            if (Math.abs(j - k) > this._superframeInterval / 2) {
                i = j + (i > k ? -1 : 1) * this._superframeInterval;
                return this.calculateRenderCount(i, k) + 1
            } else {
                return Math.abs(j - k) + 1
            }
        };
        f.compositeFrames = function (i, l) {
            var m, j;
            if (l <= 0 || l >= this.frameCount - 2) {
                this._compositor.compositeFrames(i, l)
            }
            if (i > this.frameCount - 2) {
                i = this.frameCount - 2
            } else {
                if (i <= 0) {
                    i = 1
                }
            }
            j = this._getClosestSuperframe(i);
            if (this._compositor.calculateRenderCount(i, l) > this.calculateRenderCount(i, l)) {
                m = this._compositor.compositeFrames(j, j).then(function k() {
                    var n = j + (i > l ? -1 : 1) * this._superframeInterval;
                    this._compositor.compositeFrames(j, n).then(function () {
                        return this.compositeFrames(n, l)
                    }.bind(this))
                }.bind(this))
            } else {
                m = this._compositor.compositeFrames(i, l).then(function k() {
                }.bind(this))
            }
            m.then(function k() {
            }.bind(this));
            return m
        };
        f.destroy = function () {
            return this._compositor.destroy()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(f, {
            frameCount: {
                get: function b() {
                    return this._compositor.frameCount
                }, enumerable: true
            }, canvas: {
                get: function b() {
                    return this._compositor.canvas
                }, set: function h(i) {
                    return this._compositor.canvas = i
                }, enumerable: true
            }, mainCompositor: {
                get: function b() {
                    return this._compositor.mainCompositor
                }, enumerable: true
            }
        });
        d.exports = g
    }, {}],
    409: [function (b, c, a) {
        function d(f, g) {
            this.location = f;
            this.length = g
        }

        c.exports = d
    }, {}],
    410: [function (c, d, b) {
        function a() {
        }

        d.exports = a
    }, {}],
    411: [function (f, c, h) {
        var i = f("./Manifest"), d = f("./Block"), j;
        var l = {
            parseData: function g(m) {
                j = 0;
                var n = m.frames.map(this._parseFrame, this);
                return Object.create(i.prototype, {
                    version: {value: m.version},
                    framecount: {value: m.frameCount},
                    blockSize: {value: m.blockSize},
                    imagesRequired: {value: m.imagesRequired},
                    reversible: {value: m.reversible},
                    superframeFrequency: {value: m.superframeFrequency},
                    frames: {value: n}
                })
            }, _valueForCharAt: function k(o, m) {
                var n = o.charCodeAt(m);
                if (n > 64 && n < 91) {
                    return n - 65
                }
                if (n > 96 && n < 123) {
                    return n - 71
                }
                if (n > 47 && n < 58) {
                    return n + 4
                }
                if (n === 43) {
                    return 62
                }
                if (n === 47) {
                    return 63
                }
            }, _createNumberFromBase64Range: function b(q, m, p) {
                var o = 0, n;
                while (p--) {
                    n = this._valueForCharAt(q, m++);
                    o += n << p * 6
                }
                return o
            }, _parseFrame: function a(q) {
                var p, t = [], o = q.value, n = q.startImageIndex, s = q.startBlockIndex, r, m;
                if (q.type === "keyframe") {
                    t.type = "keyframe";
                    t.width = q.width;
                    t.height = q.height;
                    t.x = q.x;
                    t.y = q.y;
                    return t
                }
                for (p = 0; p < o.length; p += 5) {
                    m = this._createNumberFromBase64Range(o, p, 3);
                    r = this._createNumberFromBase64Range(o, p + 3, 2);
                    t.push(Object.create(d.prototype, {
                        location: {value: m, enumerable: true},
                        length: {value: r, enumerable: true},
                        block: {value: (s += r) - r, enumerable: true},
                        startImageIndex: {value: n, enumerable: true}
                    }))
                }
                return t
            }
        };
        c.exports = l
    }, {"./Block": 409, "./Manifest": 410}],
    412: [function (b, c, a) {
        var h = b("@marcom/ac-asset-loader/assetLoader");
        var g = b("../processor");

        function f(i) {
            this.url = i
        }

        var d = f.prototype;
        d.load = function () {
            return h.load(this.url).then(function (j) {
                var i;
                if (j && j.latest && j.latest.data) {
                    i = g.parseData(j.latest.data);
                    this._data = i
                }
                return i
            }.bind(this))
        };
        c.exports = f
    }, {"../processor": 411, "@marcom/ac-asset-loader/assetLoader": 333}],
    413: [function (d, f, b) {
        function a(k, i, j) {
            this.flowData = k;
            this.flowData.imageUrlPattern = i;
            this._loadController = j
        }

        var g = a.prototype;
        g._storeImages = function (l) {
            var j = l.assets.length;
            this.images = l.assets.map(function (i) {
                return i.data
            });
            this._blocksPerFullDiff = [];
            this._blockCountUpToIndex = [];
            var m = 0;
            for (var k = 0; k < j; k++) {
                this._blocksPerFullDiff[k] = this.images[k].width / this.flowData.blockSize * (this.images[k].height / this.flowData.blockSize);
                m += this._blocksPerFullDiff[k];
                this._blockCountUpToIndex[k] = m
            }
        };
        g._applyDiffRange = function (k, q) {
            var u = q.block, l = q.length, j = k.canvas.width / this.flowData.blockSize, n = q.startImageIndex,
                w = this.images[n].width, i = u % this._blockCountUpToIndex[n], v = w / this.flowData.blockSize,
                t = i % v * this.flowData.blockSize, s = Math.floor(i / (v || 1)) * this.flowData.blockSize,
                p = q.location % j * this.flowData.blockSize, o = Math.floor(q.location / j) * this.flowData.blockSize,
                m, r;
            while (l) {
                m = Math.min(l * this.flowData.blockSize, k.canvas.width - p, w - t);
                r = m / this.flowData.blockSize;
                k.drawImage(this.images[n], t, s, m, this.flowData.blockSize, p, o, m, this.flowData.blockSize);
                l -= r;
                if (l) {
                    if ((t += m) >= w) {
                        t = 0;
                        s += this.flowData.blockSize
                    }
                    if ((p += m) >= k.canvas.width) {
                        p = 0;
                        o += this.flowData.blockSize
                    }
                    u += r
                }
            }
        };
        g.init = function () {
            return this._loadController.loadDiffs().then(this._storeImages.bind(this))
        };
        g.renderDiff = function (k, n) {
            var m = k.getContext("2d");
            n -= 1;
            for (var l = 0, j = this.frames[n].length;
                 l < j; l++) {
                this._applyDiffRange(m, this.frames[n][l])
            }
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(g, {
            frames: {
                get: function c() {
                    return this.flowData.frames
                }, set: function h(i) {
                    this.flowData.frames = i
                }, enumerable: true
            }
        });
        f.exports = a
    }, {}],
    414: [function (f, c, h) {
        var k = f("@marcom/ac-object/defaults");
        var j = f("./Flow");
        var d = f("./Player");
        var b = {keyframeCache: 8, preload: true};
        var g = {
            fileFormat: "jpg",
            baseName: "flow",
            imageUrlPattern: "###",
            startframeFileFormat: null,
            endframeFileFormat: null,
            basePath: null,
            manifestPath: null,
            manifestFileFormat: "json",
            diffPath: null,
            framePath: null
        };
        var a = function a(n) {
            if (n.lastIndexOf("/") !== n.length - 1) {
                n = n + "/"
            }
            return n
        };
        var l = function l(q) {
            var t = q.basePath ? a(q.basePath) : null;
            var p = q.framePath ? a(q.framePath) : null;
            var o = q.diffPath ? a(q.diffPath) : null;
            var s = q.manifestPath ? a(q.manifestPath) : null;
            var n = q.baseName + "_";
            var r = {};
            r.startframe = (p || t) + n + "startframe." + (q.startframeFileFormat || q.fileFormat);
            r.endframe = (p || t) + n + "endframe." + (q.endframeFileFormat || q.fileFormat);
            r.imageUrlPattern = (o || t) + n + q.imageUrlPattern + "." + q.fileFormat;
            r.manifest = (s || t) + n + "manifest." + q.manifestFileFormat;
            return r
        };
        var m = function m(o, p) {
            var n = l(p);
            var q = [n.startframe, n.endframe];
            return new j(o, n.manifest, q, n.imageUrlPattern)
        };
        var i = function i(q, r) {
            var n = q || {};
            var p = r || {};
            n = k(b, q);
            p = k(g, r);
            if (!n.element) {
                q.element = document.createElement("canvas")
            }
            var o = m(n, p);
            var s = new d(o, n.element);
            if (n.preload) {
                s.load()
            }
            return s
        };
        c.exports = i
    }, {"./Flow": 401, "./Player": 403, "@marcom/ac-object/defaults": 462}],
    415: [function (d, f, b) {
        var h = d("@marcom/ac-asset-loader/assetLoader");

        function a(i, l) {
            var k, j = i.match(/#/g).length;
            this._keyframes = {};
            i = i.replace(/([^#]+)(#+)(\..*)/, "$1key_$2$3");
            this._imageUrls = [];
            if (l.frames) {
                l.frames.forEach(function (n, m) {
                    if (n.type === "keyframe") {
                        k = "0000" + m;
                        k = k.substring(k.length - j);
                        this._imageUrls.push(i.replace(/#+/g, k));
                        this._keyframes[m] = n
                    }
                }.bind(this))
            }
        }

        var g = a.prototype;
        g.load = function () {
            if (this._imageUrls.length > 0) {
                return h.load(this._imageUrls)
            }
            return Promise.resolve()
        };
        if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function () {
            }
        }
        Object.defineProperties(g, {
            keyframes: {
                get: function c() {
                    return this._keyframes
                }, enumerable: true
            }
        });
        f.exports = a
    }, {"@marcom/ac-asset-loader/assetLoader": 333}],
    416: [function (b, c, a) {
        var g = b("./Loader");

        function f(i, h) {
            this.flowData = i;
            this.flowData.imageUrlPattern = h
        }

        var d = f.prototype;
        d._storeImages = function (k) {
            var j = 0, l;
            if (k && k.assets.length > 0) {
                for (var h in this._loader._keyframes) {
                    if (this._loader._keyframes.hasOwnProperty(h)) {
                        l = k.assets[j];
                        this._loader._keyframes[h].image = l.data;
                        j += 1
                    }
                }
            }
        };
        d.init = function () {
            this._loader = new g(this.flowData.imageUrlPattern, this.flowData);
            return this._loader.load().then(this._storeImages.bind(this))
        };
        d.renderKeyframe = function (k, j, r) {
            var i = k.getContext("2d"), l = this._loader.keyframes[j], m = l.image, p = l.x, o = l.y, q = l.width,
                n = l.height;
            if (r === true) {
                i.drawImage(m, p, o, q, n, p, o, q, n)
            } else {
                if (this.flowData.reversible) {
                    i.drawImage(m, 0, 0)
                } else {
                    i.drawImage(m, p, o, q, n)
                }
            }
        };
        c.exports = f
    }, {"./Loader": 415}],
    417: [function (b, c, a) {
        c.exports = {SharedInstance: b("./ac-shared-instance/SharedInstance")}
    }, {"./ac-shared-instance/SharedInstance": 418}],
    418: [function (d, h, c) {
        var i = window, g = "AC", a = "SharedInstance", f = i[g];
        var b = function () {
            var k = {};
            return {
                get: function l(p, o) {
                    var q = null;
                    if (k[p] && k[p][o]) {
                        q = k[p][o]
                    }
                    return q
                }, set: function n(q, o, p) {
                    if (!k[q]) {
                        k[q] = {}
                    }
                    if (typeof p === "function") {
                        k[q][o] = new p()
                    } else {
                        k[q][o] = p
                    }
                    return k[q][o]
                }, share: function m(q, o, p) {
                    var r = this.get(q, o);
                    if (!r) {
                        r = this.set(q, o, p)
                    }
                    return r
                }, remove: function j(p, o) {
                    var q = typeof o === "undefined" ? "undefined" : _typeof(o);
                    if (q === "string" || q === "number") {
                        if (!k[p] || !k[p][o]) {
                            return
                        }
                        k[p][o] = null;
                        return
                    }
                    if (k[p]) {
                        k[p] = null
                    }
                }
            }
        }();
        if (!f) {
            f = i[g] = {}
        }
        if (!f[a]) {
            f[a] = b
        }
        h.exports = f[a]
    }, {}],
    419: [function (b, c, a) {
        c.exports = {CID: b("./ac-mvc-cid/CID")}
    }, {"./ac-mvc-cid/CID": 420}],
    420: [function (c, f, b) {
        var a = c("@marcom/ac-shared-instance").SharedInstance;
        var g = "ac-mvc-cid:CID", d = "1.0.0";

        function i() {
            this._idCount = 0
        }

        var h = i.prototype;
        h._cidPrefix = "cid";
        h.getNewCID = function () {
            var j = this._cidPrefix + "-" + this._idCount;
            this._idCount++;
            return j
        };
        f.exports = a.share(g, d, i)
    }, {"@marcom/ac-shared-instance": 417}],
    421: [function (b, c, a) {
        c.exports = {Model: b("./ac-mvc-model/Model")}
    }, {"./ac-mvc-model/Model": 422}],
    422: [function (f, a, g) {
        var k = f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var b = f("@marcom/ac-object/defaults");
        var i = f("@marcom/ac-object/create");
        var c = f("@marcom/ac-mvc-cid").CID;

        function d(l) {
            k.call(this);
            this.attributes = b(this.defaultAttributes, l || {});
            this.cid = c.getNewCID();
            if (this.attributes[this.idAttribute]) {
                this.id = this.attributes[this.idAttribute]
            }
        }

        var j = k.prototype;
        var h = d.prototype = i(j);
        h.defaultAttributes = {};
        h.idAttribute = "id";
        h.get = function (l) {
            if (!this.attributes) {
                return
            }
            return this.attributes[l]
        };
        h.set = function (m, l) {
            if (!this.attributes) {
                return
            }
            var q;
            var p;
            var o;
            var n = {};
            var r = false;
            for (q in m) {
                if (m.hasOwnProperty(q)) {
                    o = this.get(q);
                    if (o === m[q] || (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && _typeof(m[q]) === "object" && JSON.stringify(o) === JSON.stringify(m[q])) {
                        continue
                    }
                    r = true;
                    this.attributes[q] = m[q];
                    p = {value: m[q], previous: o};
                    n[q] = p;
                    this._triggerChange(q, p, l)
                }
            }
            if (r) {
                this._trigger("change", n, l)
            }
        };
        h.hasAttribute = function (l) {
            if (!this.attributes) {
                return false
            }
            return this.attributes[l] !== undefined
        };
        h.eachAttribute = function (m, l) {
            if (!this.attributes) {
                return
            }
            var n;
            for (n in this.attributes) {
                if (this.attributes.hasOwnProperty(n)) {
                    m.call(l, {attribute: n, value: this.attributes[n]})
                }
            }
        };
        h.destroy = function () {
            this.trigger("destroy");
            j.destroy.call(this);
            var l;
            for (l in this) {
                if (this.hasOwnProperty(l)) {
                    this[l] = null
                }
            }
        };
        h._trigger = function (n, m, l) {
            l = l || {};
            if (l.silent !== true) {
                this.trigger(n, m)
            }
        };
        h._triggerChange = function (n, m, l) {
            return this._trigger("change:" + n, m, l)
        };
        a.exports = d
    }, {
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-mvc-cid": 419,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-object/defaults": 462
    }],
    423: [function (b, c, a) {
        arguments[4][167][0].apply(a, arguments)
    }, {
        "./className/add": 424,
        "@marcom/ac-polyfills/Array/prototype.slice": 487,
        "@marcom/ac-polyfills/Element/prototype.classList": 491,
        dup: 167
    }],
    424: [function (b, c, a) {
        arguments[4][169][0].apply(a, arguments)
    }, {"./contains": 425, dup: 169}],
    425: [function (b, c, a) {
        arguments[4][170][0].apply(a, arguments)
    }, {"./getTokenRegExp": 426, dup: 170}],
    426: [function (b, c, a) {
        arguments[4][171][0].apply(a, arguments)
    }, {dup: 171}],
    427: [function (b, c, a) {
        arguments[4][172][0].apply(a, arguments)
    }, {"./contains": 425, "./getTokenRegExp": 426, dup: 172}],
    428: [function (b, c, a) {
        arguments[4][175][0].apply(a, arguments)
    }, {
        "./className/remove": 427,
        "@marcom/ac-polyfills/Array/prototype.slice": 487,
        "@marcom/ac-polyfills/Element/prototype.classList": 491,
        dup: 175
    }],
    429: [function (b, c, a) {
        arguments[4][417][0].apply(a, arguments)
    }, {"./ac-shared-instance/SharedInstance": 430, dup: 417}],
    430: [function (b, c, a) {
        arguments[4][418][0].apply(a, arguments)
    }, {dup: 418}],
    431: [function (b, c, a) {
        arguments[4][419][0].apply(a, arguments)
    }, {"./ac-mvc-cid/CID": 432, dup: 419}],
    432: [function (b, c, a) {
        arguments[4][420][0].apply(a, arguments)
    }, {"@marcom/ac-shared-instance": 429, dup: 420}],
    433: [function (b, c, a) {
        c.exports = {View: b("./ac-mvc-view/View")}
    }, {"./ac-mvc-view/View": 434}],
    434: [function (d, b, g) {
        var k = d("@marcom/ac-dom-emitter").DOMEmitter;
        var c = d("@marcom/ac-mvc-cid").CID;
        var f = {create: d("@marcom/ac-object/create"), defaults: d("@marcom/ac-object/defaults")};
        var j = {insertLastChild: d("@marcom/ac-dom-nodes/insertLastChild"), remove: d("@marcom/ac-dom-nodes/remove")};
        var i = d("@marcom/ac-classlist/add");
        var l = d("@marcom/ac-classlist/remove");

        function a(m) {
            var o;
            var n;
            var p;
            this.options = f.defaults(this.defaultOptions, m || {});
            this.cid = c.getNewCID();
            this.model = this.options.model;
            if (this.options.template) {
                this.template = this.options.template
            }
            o = this.options.tagName || this.tagName;
            n = this.options.element;
            p = this.options.className || this.className;
            if (!n) {
                n = document.createElement(o)
            }
            k.call(this, n);
            if (p) {
                this.addClassName(p)
            }
            if (this.options.events) {
                this.delegateEvents(this.options.events)
            }
        }

        var h = a.prototype = f.create(k.prototype);
        h.tagName = "div";
        h.defaultOptions = {};
        h.getTagName = function () {
            return this.el.tagName.toLowerCase()
        };
        h.appendTo = function (m) {
            j.insertLastChild(this.el, m);
            return this
        };
        h.render = function () {
        };
        h.addClassName = function (m) {
            return this._manipulateClassName(m, i)
        };
        h.removeClassName = function (m) {
            return this._manipulateClassName(m, l)
        };
        h.destroy = function () {
            this.emitterTrigger("destroy");
            this.off();
            j.remove(this.el);
            var m;
            for (m in this) {
                if (this.hasOwnProperty(m)) {
                    this[m] = null
                }
            }
        };
        h.delegateEvents = function (n, o) {
            o = o || this;
            var m, p;
            for (m in n) {
                if (n.hasOwnProperty(m)) {
                    p = n[m];
                    if (typeof p === "string") {
                        n[m] = this[n[m]]
                    }
                }
            }
            this.on(n, o);
            return this
        };
        h._manipulateClassName = function (n, o) {
            var m;
            if (typeof n === "string") {
                m = n.split(" ")
            } else {
                if ((typeof n === "undefined" ? "undefined" : _typeof(n)) === "object" && Array.isArray(n)) {
                    m = n.slice()
                } else {
                    return this
                }
            }
            m.unshift(this.el);
            o.apply(this.el, m);
            return this
        };
        b.exports = a
    }, {
        "@marcom/ac-classlist/add": 423,
        "@marcom/ac-classlist/remove": 428,
        "@marcom/ac-dom-emitter": 356,
        "@marcom/ac-dom-nodes/insertLastChild": 373,
        "@marcom/ac-dom-nodes/remove": 384,
        "@marcom/ac-mvc-cid": 431,
        "@marcom/ac-object/create": 461,
        "@marcom/ac-object/defaults": 462
    }],
    435: [function (b, c, a) {
        arguments[4][417][0].apply(a, arguments)
    }, {"./ac-shared-instance/SharedInstance": 436, dup: 417}],
    436: [function (b, c, a) {
        arguments[4][418][0].apply(a, arguments)
    }, {dup: 418}],
    437: [function (c, f, b) {
        var a = c("@marcom/ac-shared-instance").SharedInstance;
        var g = "ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance", d = "1.0.3";
        var h = function h() {
            this._currentID = 0
        };
        h.prototype.getNewID = function () {
            this._currentID++;
            return "raf:" + this._currentID
        };
        f.exports = a.share(g, d, h)
    }, {"@marcom/ac-shared-instance": 435}],
    438: [function (b, c, a) {
        arguments[4][417][0].apply(a, arguments)
    }, {"./ac-shared-instance/SharedInstance": 439, dup: 417}],
    439: [function (b, c, a) {
        arguments[4][418][0].apply(a, arguments)
    }, {dup: 418}],
    440: [function (b, d, a) {
        b("@marcom/ac-polyfills/performance/now");
        var f;

        function c(g) {
            g = g || {};
            this._reset();
            this._willRun = false;
            this._boundOnAnimationFrame = this._onAnimationFrame.bind(this);
            this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }

        f = c.prototype;
        f.subscribe = function (g) {
            if (this._nextFrameSubscribers[g.id]) {
                return false
            }
            this._nextFrameSubscribers[g.id] = g;
            this._nextFrameSubscriberCount++;
            this._run();
            return true
        };
        f.unsubscribe = function (g) {
            if (!this._nextFrameSubscribers[g.id]) {
                return false
            }
            this._nextFrameSubscribers[g.id] = null;
            this._nextFrameSubscriberCount--;
            if (this._nextFrameSubscriberCount === 0) {
                this._cancel()
            }
            return true
        };
        f.trigger = function (j, h) {
            var g;
            for (g in this._subscribers) {
                if (this._subscribers.hasOwnProperty(g) && this._subscribers[g] !== null && this._subscribers[g]._didDestroy === false) {
                    this._subscribers[g].trigger(j, h)
                }
            }
        };
        f.destroy = function () {
            var g = this._cancel();
            this._subscribers = null;
            this._nextFrameSubscribers = null;
            this._rafData = null;
            this._boundOnAnimationFrame = null;
            this._onExternalAnimationFrame = null;
            return g
        };
        f.useExternalAnimationFrame = function (g) {
            if (typeof g !== "boolean") {
                return
            }
            var h = this._isUsingExternalAnimationFrame;
            if (g && this._animationFrame) {
                cancelAnimationFrame(this._animationFrame);
                this._animationFrame = null
            }
            if (this._willRun && !g && !this._animationFrame) {
                this._animationFrame = window.requestAnimationFrame(this._boundOnAnimationFrame)
            }
            this._isUsingExternalAnimationFrame = g;
            if (g) {
                return this._boundOnExternalAnimationFrame
            }
            return h || false
        };
        f._run = function () {
            if (!this._willRun) {
                this._willRun = true;
                if (this.lastFrameTime === 0) {
                    this.lastFrameTime = performance.now()
                }
                this._animationFrameActive = true;
                if (!this._isUsingExternalAnimationFrame) {
                    this._animationFrame = requestAnimationFrame(this._boundOnAnimationFrame)
                }
                return true
            }
        };
        f._cancel = function () {
            var g = false;
            if (this._animationFrameActive) {
                if (this._animationFrame) {
                    cancelAnimationFrame(this._animationFrame);
                    this._animationFrame = null
                }
                this._animationFrameActive = false;
                this._willRun = false;
                g = true
            }
            if (!this._isRunning) {
                this._reset()
            }
            return g
        };
        f._onSubscribersAnimationFrameStart = function (h) {
            var g;
            for (g in this._subscribers) {
                if (this._subscribers.hasOwnProperty(g) && this._subscribers[g] !== null && this._subscribers[g]._didDestroy === false) {
                    this._subscribers[g]._onAnimationFrameStart(h)
                }
            }
        };
        f._onSubscribersAnimationFrameEnd = function (h) {
            var g;
            for (g in this._subscribers) {
                if (this._subscribers.hasOwnProperty(g) && this._subscribers[g] !== null && this._subscribers[g]._didDestroy === false) {
                    this._subscribers[g]._onAnimationFrameEnd(h)
                }
            }
        };
        f._onAnimationFrame = function (g) {
            this._subscribers = this._nextFrameSubscribers;
            this._nextFrameSubscribers = {};
            this._nextFrameSubscriberCount = 0;
            this._isRunning = true;
            this._willRun = false;
            this._didRequestNextRAF = false;
            this._rafData.delta = g - this.lastFrameTime;
            this.lastFrameTime = g;
            this._rafData.fps = 0;
            if (this._rafData.delta >= 1000) {
                this._rafData.delta = 0
            }
            if (this._rafData.delta !== 0) {
                this._rafData.fps = 1000 / this._rafData.delta
            }
            this._rafData.time = g;
            this._rafData.naturalFps = this._rafData.fps;
            this._rafData.timeNow = Date.now();
            this._onSubscribersAnimationFrameStart(this._rafData);
            this.trigger("update", this._rafData);
            this.trigger("draw", this._rafData);
            this._onSubscribersAnimationFrameEnd(this._rafData);
            if (!this._willRun) {
                this._reset()
            }
        };
        f._onExternalAnimationFrame = function (g) {
            if (!this._isUsingExternalAnimationFrame) {
                return
            }
            this._onAnimationFrame(g)
        };
        f._reset = function () {
            this._rafData = {time: 0, delta: 0, fps: 0, naturalFps: 0, timeNow: 0};
            this._subscribers = {};
            this._nextFrameSubscribers = {};
            this._nextFrameSubscriberCount = 0;
            this._didEmitFrameData = false;
            this._animationFrame = null;
            this._animationFrameActive = false;
            this._isRunning = false;
            this._shouldReset = false;
            this.lastFrameTime = 0
        };
        d.exports = c
    }, {"@marcom/ac-polyfills/performance/now": 499}],
    441: [function (c, g, b) {
        var a = c("@marcom/ac-shared-instance").SharedInstance;
        var h = "ac-raf-executor:sharedRAFExecutorInstance", f = "1.0.3";
        var d = c("./RAFExecutor");
        g.exports = a.share(h, f, d)
    }, {"./RAFExecutor": 440, "@marcom/ac-shared-instance": 438}],
    442: [function (f, g, d) {
        var i;
        var h = f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var c = f("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
        var b = f("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");

        function a(j) {
            j = j || {};
            h.call(this);
            this.id = b.getNewID();
            this.executor = j.executor || c;
            this._reset();
            this._willRun = false;
            this._didDestroy = false
        }

        i = a.prototype = Object.create(h.prototype);
        i.run = function () {
            if (!this._willRun) {
                this._willRun = true;
                this.executor.subscribe(this);
                return true
            }
            return false
        };
        i.cancel = function () {
            var j = false;
            if (this._willRun) {
                this.executor.unsubscribe(this);
                this._willRun = false;
                j = true
            }
            this._reset();
            return j
        };
        i.destroy = function () {
            var j = this.cancel();
            this.executor.unsubscribe(this);
            this.executor = null;
            h.prototype.destroy.call(this);
            this._didDestroy = true;
            return j
        };
        i.willRun = function () {
            return this._willRun
        };
        i.isRunning = function () {
            return this._isRunning
        };
        i._onAnimationFrameStart = function (j) {
            this._isRunning = true;
            this._willRun = false;
            if (!this._didEmitFrameData) {
                this._didEmitFrameData = true;
                this.trigger("start", j)
            }
        };
        i._onAnimationFrameEnd = function (j) {
            if (!this._willRun) {
                this.trigger("stop", j);
                this._reset()
            }
        };
        i._reset = function () {
            this._didEmitFrameData = false;
            this._isRunning = false
        };
        g.exports = a
    }, {
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 437,
        "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 441
    }],
    443: [function (d, f, c) {
        var h;
        var a = d("./RAFEmitter");
        var i = d("@marcom/ac-object/clone");
        var g = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;

        function b(k, j) {
            g.call(this);
            j = j || {};
            this._fps = k || 0;
            this._delta = 0;
            this._currentFps = 0;
            this._rafEmitter = j.rafEmitter || new a();
            this._lastThrottledTime = 0;
            this._didEmitFrameData = false;
            this._rafEmitterEvent = null;
            this._shouldDraw = false;
            this._boundOnRAFEmitterUpdate = this._onRAFEmitterUpdate.bind(this);
            this._boundOnRAFEmitterDraw = this._onRAFEmitterDraw.bind(this);
            this._boundOnRAFEmitterStop = this._onRAFEmitterStop.bind(this);
            this._rafEmitter.on("update", this._boundOnRAFEmitterUpdate);
            this._rafEmitter.on("draw", this._boundOnRAFEmitterDraw);
            this._rafEmitter.on("stop", this._boundOnRAFEmitterStop)
        }

        h = b.prototype = Object.create(g.prototype);
        h.setFps = function (j) {
            if (j === this._fps) {
                return false
            }
            this._fps = j;
            return true
        };
        h.getFps = function () {
            return this._fps
        };
        h.run = function () {
            return this._rafEmitter.run()
        };
        h.cancel = function () {
            return this._rafEmitter.cancel()
        };
        h.willRun = function () {
            return this._rafEmitter.willRun()
        };
        h.isRunning = function () {
            return this._rafEmitter.isRunning()
        };
        h.destroy = function () {
            var j = this._rafEmitter.destroy();
            g.prototype.destroy.call(this);
            this._rafEmitter = null;
            this._boundOnRAFEmitterUpdate = null;
            this._boundOnRAFEmitterDraw = null;
            this._boundOnRAFEmitterStop = null;
            this._rafEmitterEvent = null;
            return j
        };
        h._onRAFEmitterUpdate = function (j) {
            if (this._lastThrottledTime === 0) {
                this._lastThrottledTime = this._rafEmitter.executor.lastFrameTime
            }
            this._delta = j.time - this._lastThrottledTime;
            if (!this._fps) {
                throw new TypeError("FPS is not defined.")
            }
            this._currentFps = 1000 / this._delta;
            if (this._currentFps > this._fps) {
                this._rafEmitter.run();
                return
            }
            this._rafEmitterEvent = i(j);
            this._rafEmitterEvent.delta = this._delta;
            this._rafEmitterEvent.fps = this._currentFps;
            this._lastThrottledTime = this._rafEmitterEvent.time;
            this._shouldDraw = true;
            if (!this._didEmitFrameData) {
                this.trigger("start", this._rafEmitterEvent);
                this._didEmitFrameData = true
            }
            this.trigger("update", this._rafEmitterEvent)
        };
        h._onRAFEmitterDraw = function () {
            if (this._shouldDraw) {
                this._shouldDraw = false;
                this.trigger("draw", this._rafEmitterEvent)
            }
        };
        h._onRAFEmitterStop = function () {
            this._lastThrottledTime = 0;
            this._didEmitFrameData = false;
            this.trigger("stop", this._rafEmitterEvent)
        };
        f.exports = b
    }, {"./RAFEmitter": 442, "@marcom/ac-event-emitter-micro": 128, "@marcom/ac-object/clone": 460}],
    444: [function (b, d, a) {
        var c = b("./singleCall");
        d.exports = c("draw")
    }, {"./singleCall": 445}],
    445: [function (d, f, c) {
        var a = d("./RAFEmitter");
        var b = d("./ThrottledRAFEmitter");
        f.exports = function (g) {
            return function (j, i) {
                var h;
                if (i) {
                    h = new b(i)
                } else {
                    h = new a()
                }
                h.once(g, function (k) {
                    j(k);
                    h.destroy();
                    j = h = null
                });
                h.run()
            }
        }
    }, {"./RAFEmitter": 442, "./ThrottledRAFEmitter": 443}],
    446: [function (b, d, a) {
        var f = b("./ac-media-object/factories/createVideo");
        var c = b("./ac-media-object/factories/createFlow");
        d.exports = {createFlow: c, createVideo: f}
    }, {"./ac-media-object/factories/createFlow": 447, "./ac-media-object/factories/createVideo": 448}],
    447: [function (c, d, b) {
        var a = c("./../views/FlowView");
        var f = c("@marcom/ac-object/clone");
        d.exports = function (j, l, i) {
            var k = f(i || {}, true);
            var g;
            k.type = "flow";

            function h(m) {
                throw new Error(m)
            }

            if (!l) {
                h("Please provide both a valid container element and a valid mediaSrc object as arguments.")
            } else {
                if (!l.basePath) {
                    h("Please provide a valid mediaSrc object with a basePath property.")
                }
            }
            if (!k.mediaObjectView) {
                g = new a(j, l, k);
                g.options.mediaObjectView = g
            } else {
                g = k.mediaObjectView
            }
            return g
        }
    }, {"./../views/FlowView": 451, "@marcom/ac-object/clone": 460}],
    448: [function (f, g, d) {
        var b = f("./../views/VideoView");
        var h = f("./../views/InlinePolyfillVideoView");
        var c = f("@marcom/ac-feature").isHandheld;
        var a = f("@marcom/ac-feature").isTablet;
        var i = f("@marcom/ac-object/clone");
        g.exports = function (m, o, l) {
            var n = i(l || {}, true);
            var j;
            n.type = "video";

            function k(p) {
                throw new Error(p)
            }

            if (!o) {
                k("Please provide both a valid container element and a valid mediaSrc object as arguments.")
            } else {
                if (!o.basePath) {
                    k("Please provide a valid mediaSrc object with a basePath property.")
                }
            }
            if (!n.mediaObjectView) {
                if (n.iosInline && !window.matchMedia("(-webkit-video-playable-inline)").matches && (c() || a())) {
                    j = new h(m, o, n)
                } else {
                    j = new b(m, o, n)
                }
                j.options.mediaObjectView = j
            } else {
                j = n.mediaObjectView
            }
            return j
        }
    }, {
        "./../views/InlinePolyfillVideoView": 452,
        "./../views/VideoView": 453,
        "@marcom/ac-feature": 144,
        "@marcom/ac-object/clone": 460
    }],
    449: [function (d, f, c) {
        var h = d("@marcom/ac-mvc-model").Model;
        var b = d("@marcom/ac-object");

        function a(i) {
            h.apply(this, arguments)
        }

        var g = a.prototype = b.create(h.prototype);
        g.defaultAttributes = {
            type: "video",
            paused: true,
            ended: false,
            ready: false,
            loadStart: false,
            loaded: false,
            error: false,
            destroyed: false,
            currentTime: 0,
            playbackRate: 1,
            duration: 0,
            preload: false,
            autoplay: false,
            frameRate: 24,
            enhanced: false,
            looping: false
        };
        g.getType = function () {
            return this.get("type")
        };
        g.getPaused = function () {
            return this.get("paused")
        };
        g.getEnded = function () {
            return this.get("ended")
        };
        g.getReady = function () {
            return this.get("ready")
        };
        g.getDestroyed = function () {
            return this.get("destroyed")
        };
        g.getLoadStart = function () {
            return this.get("loadedStart")
        };
        g.getLoaded = function () {
            return this.get("loaded")
        };
        g.getError = function () {
            return this.get("error")
        };
        g.getCurrentTime = function () {
            return this.get("currentTime")
        };
        g.getPlaybackRate = function () {
            return this.get("playbackRate")
        };
        g.getDuration = function () {
            return this.get("duration")
        };
        g.getPreload = function () {
            return this.get("preload")
        };
        g.getAutoplay = function () {
            return this.get("autoplay")
        };
        g.getFrameRate = function () {
            return this.get("frameRate")
        };
        g.getEnhanced = function () {
            return this.get("enhanced")
        };
        g.getLooping = function () {
            return this.get("looping")
        };
        g.setPaused = function (i) {
            this.set({paused: i})
        };
        g.setEnded = function (i) {
            this.set({ended: i})
        };
        g.setReady = function (i) {
            this.set({ready: i})
        };
        g.setDestroyed = function (i) {
            this.set({destroyed: i})
        };
        g.setDuration = function (i) {
            this.set({duration: i})
        };
        g.setLoadStart = function (i) {
            this.set({loadStart: i})
        };
        g.setLoaded = function (i) {
            this.set({loaded: i})
        };
        g.setError = function (i) {
            this.set({error: i})
        };
        g.setCurrentTime = function (i) {
            this.set({currentTime: i})
        };
        g.setPlaybackRate = function (i) {
            this.set({playbackRate: i})
        };
        g.setPreload = function (i) {
            this.set({preload: i})
        };
        g.setAutoplay = function (i) {
            this.set({autoplay: i})
        };
        g.setFrameRate = function (i) {
            this.set({frameRate: i})
        };
        g.setEnhanced = function (i) {
            this.set({enhanced: i})
        };
        g.setLooping = function (i) {
            this.set({looping: i})
        };
        f.exports = a
    }, {"@marcom/ac-mvc-model": 421, "@marcom/ac-object": 459}],
    450: [function (d, g, c) {
        var a = d("./../models/MediaModel");
        var i = d("@marcom/ac-mvc-view").View;
        var b = d("@marcom/ac-object");
        var f = function f(k, l, j) {
            i.call(this, {element: k});
            this.options = b.clone(j || {}, true);
            this.mediaSrc = l || "";
            this.model = this.options.model || new a(this.options);
            this._onLoadStartChange = this._onLoadStartChange.bind(this);
            this._onLoadedChange = this._onLoadedChange.bind(this);
            this._onPausedChange = this._onPausedChange.bind(this);
            this._onReadyChange = this._onReadyChange.bind(this);
            this._onErrorChange = this._onErrorChange.bind(this);
            this._onEnhancedChange = this._onEnhancedChange.bind(this);
            this._onCurrentTimeChange = this._onCurrentTimeChange.bind(this);
            this._onPlaybackRateChange = this._onPlaybackRateChange.bind(this);
            this._onDestroyedChange = this._onDestroyedChange.bind(this);
            this._onEndedChange = this._onEndedChange.bind(this);
            this._respondToPlay = this._respondToPlay.bind(this);
            this._respondToPause = this._respondToPause.bind(this);
            this._respondToTimeUpdate = this._respondToTimeUpdate.bind(this);
            this._respondToEnded = this._respondToEnded.bind(this);
            this._respondToDurationChange = this._respondToDurationChange.bind(this);
            this._respondToRateChange = this._respondToRateChange.bind(this);
            this._init()
        };
        var h = f.prototype = b.create(i.prototype);
        h._init = function () {
            this._createMediaElement();
            this._createMediaEmitter();
            this._createMediaLoader();
            this._bindEvents();
            this._config()
        };
        h._createMediaElement = function () {
        };
        h._createMediaEmitter = function () {
        };
        h._createMediaLoader = function () {
        };
        h._config = function () {
            if (this.options.preload === true) {
                this._setPreload(true);
                this.load()
            }
            if (this.options.autoplay === true) {
                this._setAutoplay(true)
            }
            if (this.options.looping === true) {
                this._setLooping(true)
            }
            if (this.options.frameRate) {
                this._setFrameRate(this.options.frameRate)
            }
        };
        h._bindEvents = function () {
            this._bindViewEvents();
            this._bindModelEvents()
        };
        h.destroy = function () {
            if (!this.getDestroyed()) {
                this._destroy();
                this._setDestroyed(true);
                this.model.off();
                this.off();
                for (var j in this) {
                    if (this.hasOwnProperty(j) && typeof this[j] !== "function") {
                        this[j] = null
                    }
                }
            }
        };
        h._bindModelEvents = function () {
            this.model.on("change:loadStart", this._onLoadStartChange);
            this.model.on("change:loaded", this._onLoadedChange);
            this.model.on("change:paused", this._onPausedChange);
            this.model.on("change:ready", this._onReadyChange);
            this.model.on("change:error", this._onErrorChange);
            this.model.on("change:enhanced", this._onEnhancedChange);
            this.model.on("change:currentTime", this._onCurrentTimeChange);
            this.model.on("change:playbackRate", this._onPlaybackRateChange);
            this.model.on("change:destroyed", this._onDestroyedChange);
            this.model.on("change:ended", this._onEndedChange)
        };
        h._onLoadStartChange = function () {
            this.trigger("loadstart")
        };
        h._onLoadedChange = function () {
            this.trigger("loaded")
        };
        h._onPausedChange = function (j) {
            if (j.value === true) {
                this.trigger("pause");
                this.el.classList.remove("mediaobject-playing")
            } else {
                this.trigger("play");
                this.el.classList.remove("mediaobject-ended");
                this.el.classList.add("mediaobject-playing")
            }
        };
        h._onReadyChange = function () {
            this.trigger("ready")
        };
        h._onErrorChange = function () {
            this.trigger("error")
        };
        h._onEnhancedChange = function () {
            this.el.classList.add("mediaobject-enhanced");
            this.mediaElement.classList.add("mediaobject-element");
            this.trigger("enhanced")
        };
        h._onCurrentTimeChange = function () {
            this.trigger("timeupdate")
        };
        h._onPlaybackRateChange = function () {
            this.trigger("ratechange")
        };
        h._onDestroyedChange = function () {
            this.el.classList.remove("mediaobject-playing");
            this.el.classList.remove("mediaobject-ended");
            this.el.classList.remove("mediaobject-enhanced");
            this.el.classList.add("mediaobject-destroyed");
            this.trigger("destroyed")
        };
        h._onEndedChange = function (j) {
            if (j.value === true) {
                this.trigger("ended")
            }
        };
        h._bindViewEvents = function () {
            if (!this.mediaEmitter) {
                return
            }
            this.mediaEmitter.on("play", this._respondToPlay);
            this.mediaEmitter.on("pause", this._respondToPause);
            this.mediaEmitter.on("timeupdate", this._respondToTimeUpdate);
            this.mediaEmitter.on("ended", this._respondToEnded);
            this.mediaEmitter.on("durationchange", this._respondToDurationChange);
            this.mediaEmitter.on("ratechange", this._respondToRateChange)
        };
        h._respondToPlay = function () {
            this.model.set({ended: false, paused: false})
        };
        h._respondToPause = function () {
            this.model.setPaused(true)
        };
        h._respondToTimeUpdate = function () {
            var j = 0;
            if (this.mediaElement.currentTime) {
                j = this.mediaElement.currentTime
            } else {
                if (this.mediaEmitter.currentTime) {
                    j = this.mediaEmitter.currentTime
                } else {
                    return
                }
            }
            if (this.getCurrentTime() !== j) {
                this.model.set({currentTime: j})
            }
        };
        h._respondToEnded = function () {
            this.model.set({ended: true, paused: true});
            this.el.classList.remove("mediaobject-playing");
            this.el.classList.add("mediaobject-ended")
        };
        h._respondToDurationChange = function () {
            var j = 0;
            if (this.mediaElement.duration) {
                j = this.mediaElement.duration
            } else {
                if (this.mediaEmitter.duration) {
                    j = this.mediaEmitter.duration
                } else {
                    return
                }
            }
            this.model.set({duration: j})
        };
        h._respondToRateChange = function () {
            var j = 0;
            if (this.mediaElement.playbackRate) {
                j = this.mediaElement.playbackRate
            } else {
                if (this.mediaEmitter.playbackRate) {
                    j = this.mediaEmitter.playbackRate
                } else {
                    return
                }
            }
            this.model.set({playbackRate: j})
        };
        h.enhance = function () {
        };
        h.play = function () {
        };
        h.pause = function () {
        };
        h.reset = function () {
        };
        h.setCurrentTime = function (j) {
        };
        h.setPlaybackRate = function (j) {
        };
        h.goToFrame = function (k) {
            var j = k / this.model.frameRate;
            return this.setCurrentTime(j)
        };
        h.goToPercent = function (j) {
            var k = j * this.getDuration();
            return this.setCurrentTime(k)
        };
        h._setReady = function (j) {
            this.model.setReady(j)
        };
        h._setLoadStart = function (j) {
            this.model.setLoadStart(j)
        };
        h._setLoaded = function (j) {
            this.model.setLoaded(j)
        };
        h._setError = function (j) {
            this.model.setError(j)
        };
        h._setDuration = function (j) {
            this.model.setDuration(j)
        };
        h._setPreload = function (j) {
            this.model.setPreload(j)
        };
        h._setAutoplay = function (j) {
            this.model.setAutoplay(j)
        };
        h._setFrameRate = function (j) {
            this.model.setFrameRate(j)
        };
        h._setEnhanced = function (j) {
            this.model.setEnhanced(j)
        };
        h._setDestroyed = function (j) {
            this.model.setDestroyed(j)
        };
        h._setLooping = function (j) {
        };
        h._destroy = function () {
        };
        h.getType = function () {
            return this.model.getType()
        };
        h.getPaused = function () {
            return this.model.getPaused()
        };
        h.getEnded = function () {
            return this.model.getEnded()
        };
        h.getReady = function () {
            return this.model.getReady()
        };
        h.getLoadStart = function () {
            return this.model.getLoadStart()
        };
        h.getLoaded = function () {
            return this.model.getLoaded()
        };
        h.getError = function () {
            return this.model.getError()
        };
        h.getDuration = function () {
            return this.model.getDuration()
        };
        h.getEnhanced = function () {
            return this.model.getEnhanced()
        };
        h.getCurrentTime = function () {
            return this.model.getCurrentTime()
        };
        h.getCurrentFrame = function () {
            return Math.floor(this.getCurrentTime() * this.options.frameRate)
        };
        h.getCurrentPercent = function () {
            return this.model.getCurrentTime() / this.getDuration() || 0
        };
        h.getPlaybackRate = function () {
            return this.model.getPlaybackRate()
        };
        h.getFrameRate = function () {
            return this.model.getFrameRate()
        };
        h.getPreload = function () {
            return this.model.getPreload()
        };
        h.getAutoplay = function () {
            return this.model.getAutoplay()
        };
        h.getLooping = function () {
            return this.model.getLooping()
        };
        h.getDestroyed = function () {
            if (this.model) {
                return this.model.getDestroyed()
            } else {
                return true
            }
        };
        g.exports = f
    }, {"./../models/MediaModel": 449, "@marcom/ac-mvc-view": 433, "@marcom/ac-object": 459}],
    451: [function (b, a, c) {
        var d = b("./BaseView");
        var i = b("@marcom/ac-dom-nodes");
        var g = b("@marcom/ac-flow").createFlow;
        var j = b("@marcom/ac-raf-emitter/draw");
        var h = function h(l, m, k) {
            d.call(this, l, m, k);
            this._onLoad = this._onLoad.bind(this);
            this._onError = this._onError.bind(this);
            this._onReady = this._onReady.bind(this)
        };
        var f = h.prototype = Object.create(d.prototype);
        f._createMediaElement = function () {
            this.mediaElement = document.createElement("canvas")
        };
        f._createMediaEmitter = function () {
            this.flowOptions = {
                element: this.mediaElement,
                preload: false,
                keyframeCache: this.options.keyframeCache || false
            };
            this.mediaEmitter = g(this.flowOptions, this.mediaSrc)
        };
        f._createMediaLoader = function () {
            this.mediaLoader = this.mediaEmitter
        };
        f.load = function () {
            this._setLoadStart(true);
            this.mediaLoader.once("loaded", this._onLoad);
            this.mediaLoader.once("error", this._onError);
            this.mediaEmitter.once("canplaythrough", this._onReady);
            if (!this.loaded) {
                this.mediaLoader.load()["catch"](this._onError)
            }
        };
        f._onLoad = function () {
            this._setLoaded(true)
        };
        f._onError = function () {
            if (this.model) {
                this._setError(true)
            }
        };
        f._onReady = function () {
            this._setReady(true);
            this._setDuration(this.mediaEmitter.duration);
            this.setPlaybackRate(this.getPlaybackRate());
            this._totalFrames = this._getTotalFrames();
            if (this.getAutoplay()) {
                if (this.getEnhanced === false) {
                    this.enhance()
                }
                this.play()
            }
        };
        f._getTotalFrames = function () {
            return this.getDuration() * this.getFrameRate()
        };
        f.enhance = function () {
            this._setEnhanced(true);
            j(function () {
                if (this.mediaElement) {
                    this._inject()
                }
            }.bind(this))
        };
        f._inject = function () {
            i.insertFirstChild(this.mediaElement, this.el)
        };
        f._destroy = function () {
            this._remove();
            if (this.mediaEmitter) {
                this.mediaEmitter.destroy()
            }
        };
        f._remove = function () {
            i.remove(this.mediaElement)
        };
        f.play = function () {
            if (this.model.getPaused() === false) {
                return
            }
            if (this.mediaEmitter.currentTime >= this.getDuration()) {
                this.setCurrentTime(0)
            }
            if (this.getReady() && this.mediaEmitter !== null) {
                this.mediaEmitter.play()
            }
        };
        f.pause = function () {
            if (this.model.getPaused() === true) {
                return
            }
            this.mediaEmitter.pause()
        };
        f.reset = function () {
            if (this.model.getCurrentTime() === 0) {
                return
            }
            this.setCurrentTime(0);
            this.pause()
        };
        f.setCurrentTime = function (k) {
            if (k < 0) {
                k = 0
            }
            if (k > this.getDuration()) {
                k = this.getDuration()
            }
            this.mediaEmitter.currentTime = k
        };
        f.setPlaybackRate = function (k) {
            this.mediaEmitter.playbackRate = k
        };
        f._setLooping = function (k) {
            this.mediaEmitter.loop = k;
            this.model.setLooping(k)
        };
        a.exports = h
    }, {"./BaseView": 450, "@marcom/ac-dom-nodes": 365, "@marcom/ac-flow": 400, "@marcom/ac-raf-emitter/draw": 444}],
    452: [function (d, f, c) {
        var b = d("./VideoView");
        var i = b.prototype;
        var a = d("@marcom/ac-raf-emitter/RAFEmitter");
        var g = function g(k, l, j) {
            b.call(this, k, l, j);
            this._polyfillRAFEmitter = j.polyfillRAFEmitter || new a();
            this._boundHandlePolyfillRAFEmitterDraw = this._handlePolyfillRAFEmitterDraw.bind(this);
            this._polyfillRAFEmitter.on("draw", this._boundHandlePolyfillRAFEmitterDraw)
        };
        var h = g.prototype = Object.create(b.prototype);
        h._initInlineVideo = function () {
            i._initInlineVideo.apply(this, arguments);
            this._shouldLoop = false
        };
        h._destroy = function () {
            i._destroy.apply(this, arguments);
            if (this._polyfillRAFEmitter) {
                this._polyfillRAFEmitter.destroy();
                this._polyfillRAFEmitter = null
            }
        };
        h.play = function () {
            if (this.model.getPaused() === false) {
                return
            }
            this.model.setPaused(false);
            this._polyfillRAFEmitter.run()
        };
        h.pause = function () {
            if (this.model.getPaused() === true) {
                return
            }
            this.model.setPaused(true);
            this._polyfillRAFEmitter.cancel()
        };
        h.setCurrentTime = function (j) {
            i.setCurrentTime.apply(this, arguments);
            this._polyfillRAFEmitter.run()
        };
        h._handlePolyfillRAFEmitterDraw = function (p) {
            var m = this.model.getCurrentTime();
            var l = this.model.getPlaybackRate();
            var o = this.mediaElement.duration;
            var q = p.delta / 1000 * l;
            if (this.model.getPaused()) {
                return
            }
            m += q;
            var j = m <= 0;
            var r = m >= o;
            var n = l >= 0;
            var k = l < 0;
            if (j) {
                m = 0
            }
            if (r) {
                m = o
            }
            if (this._shouldLoop) {
                this._shouldLoop = false;
                if (n) {
                    this.setCurrentTime(q)
                } else {
                    this.setCurrentTime(o - q)
                }
                return
            }
            this.setCurrentTime(m);
            if (j && k || r && n) {
                if (this.model.getLooping()) {
                    this._shouldLoop = true
                } else {
                    this.pause();
                    this.model.setEnded(true)
                }
            }
        };
        f.exports = g
    }, {"./VideoView": 453, "@marcom/ac-raf-emitter/RAFEmitter": 442}],
    453: [function (c, b, f) {
        var g = c("./BaseView");
        var o = g.prototype;
        var m = c("@marcom/ac-raf-emitter/draw");
        var k = c("@marcom/ac-dom-nodes");
        var n = c("@marcom/ac-dom-emitter").DOMEmitter;
        var l = c("@marcom/ac-dom-styles");
        var d = c("@marcom/ac-asset-loader").assetLoader;
        var a = c("@marcom/ac-useragent");
        var j = c("@marcom/ac-feature").isHandheld;
        var i = c("@marcom/ac-feature").isTablet;
        var p = function p(r, s, q) {
            this.srcForVideoEl = null;
            this._cannotPlayInlineVideo = null;
            this._onLoaded = this._onLoaded.bind(this);
            this._onReady = this._onReady.bind(this);
            g.call(this, r, s, q);
            if (q.iosInline) {
                this._initInlineVideo()
            }
        };
        var h = p.prototype = Object.create(g.prototype);
        h.inlineClassName = "mediaobject-ios-inline-video";
        h.inlineAttribute = "playsinline";
        h._cannotPlayInlineVideo = null;
        h._initInlineVideo = function () {
            if (this.mediaElement.hasAttribute("controls")) {
                this.mediaElement.removeAttribute("controls")
            }
            this.mediaElement.setAttribute(this.inlineAttribute, "");
            this.mediaElement.classList.add(this.inlineClassName)
        };
        h._createMediaElement = function () {
            this.mediaElement = document.createElement("video")
        };
        h._createMediaEmitter = function () {
            this.mediaEmitter = new n(this.mediaElement)
        };
        h._createMediaLoader = function () {
            var r, s;
            this.mediaSrc.basePath = this._forceTrailingSlash(this.mediaSrc.basePath);
            if (this.mediaSrc.splitFileLoading) {
                r = this.mediaSrc.basePath;
                var q = {src: r, type: "splitfile"};
                this.mediaLoader = d.createAssetGroup(q)
            } else {
                this.mediaSrc.fileFormat = this._checkFileFormat(this.mediaSrc.fileFormat);
                r = this.mediaSrc.basePath + this.mediaSrc.filename + this.mediaSrc.fileFormat;
                this.srcForVideoEl = r
            }
        };
        h._forceTrailingSlash = function (q) {
            if (q && q.lastIndexOf("/") !== q.length - 1) {
                q = q + "/"
            }
            return q
        };
        h._checkFileFormat = function (q) {
            if (q && q.lastIndexOf(".") !== 0) {
                q = "." + q
            }
            return q
        };
        h.load = function () {
            this._setLoadStart(true);
            if (this.mediaSrc.splitFileLoading) {
                var q = function (s) {
                    var r = window.URL.createObjectURL(s.latest.data);
                    if (this.mediaEmitter) {
                        this.mediaEmitter.once("loadeddata", this._onLoaded);
                        this.mediaEmitter.once("canplaythrough", this._onReady)
                    }
                    this.mediaElement.src = r;
                    this.mediaElement.load();
                    this.mediaLoader.destroy()
                }.bind(this);
                this.mediaLoader.load().then(q)["catch"](this._setError.bind(this, true))
            } else {
                if (!this.cannotPlayInlineVideo()) {
                    this.mediaEmitter.once("loadeddata", this._onLoaded);
                    this.mediaEmitter.once("canplaythrough", this._onReady)
                }
                this.mediaElement.src = this.srcForVideoEl;
                if (this.cannotPlayInlineVideo()) {
                    this._onLoaded()
                } else {
                    this.mediaElement.load()
                }
            }
        };
        h._onLoaded = function () {
            this._setLoaded(true)
        };
        h.cannotPlayInlineVideo = function () {
            if (this._cannotPlayInlineVideo !== null) {
                return this._cannotPlayInlineVideo
            }
            var q = a.os === "iOS" && j();
            var r = a.os === "iOS" && i() && a.version < 8;
            this._cannotPlayInlineVideo = q || r;
            return this._cannotPlayInlineVideo
        };
        h._onReady = function () {
            this._setReady(true);
            if (this.getAutoplay()) {
                if (!this.getEnhanced()) {
                    this.enhance()
                }
                this.play()
            }
        };
        h.enhance = function () {
            this._setEnhanced(true);
            m(function () {
                if (this.mediaElement.tagName === "VIDEO") {
                    k.insertLastChild(this.mediaElement, this.el);
                    l.setStyle(this.mediaElement, {visibility: "hidden"});
                    m(function () {
                        if (this.mediaElement) {
                            this.setPlaybackRate(this.getPlaybackRate());
                            l.setStyle(this.mediaElement, {visibility: "visible"})
                        }
                    }.bind(this))
                }
            }.bind(this))
        };
        h._destroy = function () {
            this._remove();
            if (this.mediaEmitter) {
                this.mediaEmitter.off()
            }
            if (this.mediaLoader) {
                this.mediaLoader.destroy()
            }
        };
        h._remove = function () {
            k.remove(this.mediaElement)
        };
        h._onEndedChange = function (q) {
            o._onEndedChange.call(this, q);
            if (a.os === "iOS" && j() && q.value === true) {
                this.mediaElement.webkitExitFullScreen()
            }
        };
        h.play = function () {
            if (this.model.getPaused() === false) {
                return
            }
            this.mediaElement.play()
        };
        h.pause = function () {
            if (this.model.getPaused() === true) {
                return
            }
            this.mediaElement.pause()
        };
        h.reset = function () {
            if (this.model.getCurrentTime() === 0) {
                return
            }
            this.setCurrentTime(0);
            this.pause()
        };
        h.setCurrentTime = function (q) {
            if (!this.mediaElement.duration) {
                return
            }
            this.model.setCurrentTime(q);
            this.mediaElement.currentTime = q
        };
        h.setPlaybackRate = function (q) {
            this.mediaElement.playbackRate = q
        };
        h._setLooping = function (q) {
            this.mediaElement.loop = q;
            this.model.setLooping(q)
        };
        b.exports = p
    }, {
        "./BaseView": 450,
        "@marcom/ac-asset-loader": 332,
        "@marcom/ac-dom-emitter": 356,
        "@marcom/ac-dom-nodes": 365,
        "@marcom/ac-dom-styles": 396,
        "@marcom/ac-feature": 144,
        "@marcom/ac-raf-emitter/draw": 444,
        "@marcom/ac-useragent": 522
    }],
    454: [function (d, f, c) {
        var a = d("qs");
        f.exports = function b(h, g) {
            var i = a.stringify(h, {strictNullHandling: true});
            if (i && g !== false) {
                i = "?" + i
            }
            return i
        }
    }, {qs: 455}],
    455: [function (b, d, a) {
        var g = b("./stringify");
        var c = b("./parse");
        var f = {};
        d.exports = {stringify: g, parse: c}
    }, {"./parse": 456, "./stringify": 457}],
    456: [function (b, c, a) {
        var f = b("./utils");
        var d = {
            delimiter: "&",
            depth: 5,
            arrayLimit: 20,
            parameterLimit: 1000,
            strictNullHandling: false,
            plainObjects: false,
            allowPrototypes: false
        };
        d.parseValues = function (m, q) {
            var k = {};
            var j = m.split(q.delimiter, q.parameterLimit === Infinity ? undefined : q.parameterLimit);
            for (var l = 0, o = j.length; l < o; ++l) {
                var g = j[l];
                var n = g.indexOf("]=") === -1 ? g.indexOf("=") : g.indexOf("]=") + 1;
                if (n === -1) {
                    k[f.decode(g)] = "";
                    if (q.strictNullHandling) {
                        k[f.decode(g)] = null
                    }
                } else {
                    var p = f.decode(g.slice(0, n));
                    var h = f.decode(g.slice(n + 1));
                    if (!Object.prototype.hasOwnProperty.call(k, p)) {
                        k[p] = h
                    } else {
                        k[p] = [].concat(k[p]).concat(h)
                    }
                }
            }
            return k
        };
        d.parseObject = function (l, n, k) {
            if (!l.length) {
                return n
            }
            var g = l.shift();
            var m;
            if (g === "[]") {
                m = [];
                m = m.concat(d.parseObject(l, n, k))
            } else {
                m = k.plainObjects ? Object.create(null) : {};
                var j = g[0] === "[" && g[g.length - 1] === "]" ? g.slice(1, g.length - 1) : g;
                var i = parseInt(j, 10);
                var h = "" + i;
                if (!isNaN(i) && g !== j && h === j && i >= 0 && k.parseArrays && i <= k.arrayLimit) {
                    m = [];
                    m[i] = d.parseObject(l, n, k)
                } else {
                    m[j] = d.parseObject(l, n, k)
                }
            }
            return m
        };
        d.parseKeys = function (j, n, g) {
            if (!j) {
                return
            }
            if (g.allowDots) {
                j = j.replace(/\.([^\.\[]+)/g, "[$1]")
            }
            var k = /^([^\[\]]*)/;
            var o = /(\[[^\[\]]*\])/g;
            var m = k.exec(j);
            var l = [];
            if (m[1]) {
                if (!g.plainObjects && Object.prototype.hasOwnProperty(m[1])) {
                    if (!g.allowPrototypes) {
                        return
                    }
                }
                l.push(m[1])
            }
            var h = 0;
            while ((m = o.exec(j)) !== null && h < g.depth) {
                ++h;
                if (!g.plainObjects && Object.prototype.hasOwnProperty(m[1].replace(/\[|\]/g, ""))) {
                    if (!g.allowPrototypes) {
                        continue
                    }
                }
                l.push(m[1])
            }
            if (m) {
                l.push("[" + j.slice(m.index) + "]")
            }
            return d.parseObject(l, n, g)
        };
        c.exports = function (k, p) {
            p = p || {};
            p.delimiter = typeof p.delimiter === "string" || f.isRegExp(p.delimiter) ? p.delimiter : d.delimiter;
            p.depth = typeof p.depth === "number" ? p.depth : d.depth;
            p.arrayLimit = typeof p.arrayLimit === "number" ? p.arrayLimit : d.arrayLimit;
            p.parseArrays = p.parseArrays !== false;
            p.allowDots = p.allowDots !== false;
            p.plainObjects = typeof p.plainObjects === "boolean" ? p.plainObjects : d.plainObjects;
            p.allowPrototypes = typeof p.allowPrototypes === "boolean" ? p.allowPrototypes : d.allowPrototypes;
            p.parameterLimit = typeof p.parameterLimit === "number" ? p.parameterLimit : d.parameterLimit;
            p.strictNullHandling = typeof p.strictNullHandling === "boolean" ? p.strictNullHandling : d.strictNullHandling;
            if (k === "" || k === null || typeof k === "undefined") {
                return p.plainObjects ? Object.create(null) : {}
            }
            var l = typeof k === "string" ? d.parseValues(k, p) : k;
            var h = p.plainObjects ? Object.create(null) : {};
            var o = Object.keys(l);
            for (var j = 0, m = o.length; j < m; ++j) {
                var n = o[j];
                var g = d.parseKeys(n, l[n], p);
                h = f.merge(h, g, p)
            }
            return f.compact(h)
        }
    }, {"./utils": 458}],
    457: [function (b, c, a) {
        var g = b("./utils");
        var d = {
            delimiter: "&", arrayPrefixGenerators: {
                brackets: function i(k, j) {
                    return k + "[]"
                }, indices: function h(k, j) {
                    return k + "[" + j + "]"
                }, repeat: function f(k, j) {
                    return k
                }
            }, strictNullHandling: false
        };
        d.stringify = function (n, p, j, l, k) {
            if (typeof k === "function") {
                n = k(p, n)
            } else {
                if (g.isBuffer(n)) {
                    n = n.toString()
                } else {
                    if (n instanceof Date) {
                        n = n.toISOString()
                    } else {
                        if (n === null) {
                            if (l) {
                                return g.encode(p)
                            }
                            n = ""
                        }
                    }
                }
            }
            if (typeof n === "string" || typeof n === "number" || typeof n === "boolean") {
                return [g.encode(p) + "=" + g.encode(n)]
            }
            var s = [];
            if (typeof n === "undefined") {
                return s
            }
            var m = Array.isArray(k) ? k : Object.keys(n);
            for (var o = 0, q = m.length; o < q; ++o) {
                var r = m[o];
                if (Array.isArray(n)) {
                    s = s.concat(d.stringify(n[r], j(p, r), j, l, k))
                } else {
                    s = s.concat(d.stringify(n[r], p + "[" + r + "]", j, l, k))
                }
            }
            return s
        };
        c.exports = function (q, u) {
            u = u || {};
            var l = typeof u.delimiter === "undefined" ? d.delimiter : u.delimiter;
            var n = typeof u.strictNullHandling === "boolean" ? u.strictNullHandling : d.strictNullHandling;
            var p;
            var m;
            if (typeof u.filter === "function") {
                m = u.filter;
                q = m("", q)
            } else {
                if (Array.isArray(u.filter)) {
                    p = m = u.filter
                }
            }
            var t = [];
            if ((typeof q === "undefined" ? "undefined" : _typeof(q)) !== "object" || q === null) {
                return ""
            }
            var j;
            if (u.arrayFormat in d.arrayPrefixGenerators) {
                j = u.arrayFormat
            } else {
                if ("indices" in u) {
                    j = u.indices ? "indices" : "repeat"
                } else {
                    j = "indices"
                }
            }
            var k = d.arrayPrefixGenerators[j];
            if (!p) {
                p = Object.keys(q)
            }
            for (var o = 0, r = p.length;
                 o < r; ++o) {
                var s = p[o];
                t = t.concat(d.stringify(q[s], s, k, n, m))
            }
            return t.join(l)
        }
    }, {"./utils": 458}],
    458: [function (b, c, a) {
        var f = {};
        f.hexTable = new Array(256);
        for (var d = 0; d < 256; ++d) {
            f.hexTable[d] = "%" + ((d < 16 ? "0" : "") + d.toString(16)).toUpperCase()
        }
        a.arrayToObject = function (k, h) {
            var l = h.plainObjects ? Object.create(null) : {};
            for (var j = 0, g = k.length;
                 j < g; ++j) {
                if (typeof k[j] !== "undefined") {
                    l[j] = k[j]
                }
            }
            return l
        };
        a.merge = function (o, n, h) {
            if (!n) {
                return o
            }
            if ((typeof n === "undefined" ? "undefined" : _typeof(n)) !== "object") {
                if (Array.isArray(o)) {
                    o.push(n)
                } else {
                    if ((typeof o === "undefined" ? "undefined" : _typeof(o)) === "object") {
                        o[n] = true
                    } else {
                        o = [o, n]
                    }
                }
                return o
            }
            if ((typeof o === "undefined" ? "undefined" : _typeof(o)) !== "object") {
                o = [o].concat(n);
                return o
            }
            if (Array.isArray(o) && !Array.isArray(n)) {
                o = a.arrayToObject(o, h)
            }
            var l = Object.keys(n);
            for (var g = 0, j = l.length; g < j; ++g) {
                var i = l[g];
                var m = n[i];
                if (!Object.prototype.hasOwnProperty.call(o, i)) {
                    o[i] = m
                } else {
                    o[i] = a.merge(o[i], m, h)
                }
            }
            return o
        };
        a.decode = function (h) {
            try {
                return decodeURIComponent(h.replace(/\+/g, " "))
            } catch (g) {
                return h
            }
        };
        a.encode = function (k) {
            if (k.length === 0) {
                return k
            }
            if (typeof k !== "string") {
                k = "" + k
            }
            var h = "";
            for (var j = 0, g = k.length; j < g; ++j) {
                var l = k.charCodeAt(j);
                if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122) {
                    h += k[j];
                    continue
                }
                if (l < 128) {
                    h += f.hexTable[l];
                    continue
                }
                if (l < 2048) {
                    h += f.hexTable[192 | l >> 6] + f.hexTable[128 | l & 63];
                    continue
                }
                if (l < 55296 || l >= 57344) {
                    h += f.hexTable[224 | l >> 12] + f.hexTable[128 | l >> 6 & 63] + f.hexTable[128 | l & 63];
                    continue
                }
                ++j;
                l = 65536 + ((l & 1023) << 10 | k.charCodeAt(j) & 1023);
                h += f.hexTable[240 | l >> 18] + f.hexTable[128 | l >> 12 & 63] + f.hexTable[128 | l >> 6 & 63] + f.hexTable[128 | l & 63]
            }
            return h
        };
        a.compact = function (o, j) {
            if ((typeof o === "undefined" ? "undefined" : _typeof(o)) !== "object" || o === null) {
                return o
            }
            j = j || [];
            var n = j.indexOf(o);
            if (n !== -1) {
                return j[n]
            }
            j.push(o);
            if (Array.isArray(o)) {
                var g = [];
                for (var l = 0, h = o.length; l < h; ++l) {
                    if (typeof o[l] !== "undefined") {
                        g.push(o[l])
                    }
                }
                return g
            }
            var m = Object.keys(o);
            for (l = 0, h = m.length; l < h; ++l) {
                var k = m[l];
                o[k] = a.compact(o[k], j)
            }
            return o
        };
        a.isRegExp = function (g) {
            return Object.prototype.toString.call(g) === "[object RegExp]"
        };
        a.isBuffer = function (g) {
            if (g === null || typeof g === "undefined") {
                return false
            }
            return !!(g.constructor && g.constructor.isBuffer && g.constructor.isBuffer(g))
        }
    }, {}],
    459: [function (b, c, a) {
        c.exports = {
            clone: b("./clone"),
            create: b("./create"),
            defaults: b("./defaults"),
            extend: b("./extend"),
            getPrototypeOf: b("./getPrototypeOf"),
            isDate: b("./isDate"),
            isEmpty: b("./isEmpty"),
            isRegExp: b("./isRegExp"),
            toQueryParameters: b("./toQueryParameters")
        }
    }, {
        "./clone": 460,
        "./create": 461,
        "./defaults": 462,
        "./extend": 463,
        "./getPrototypeOf": 464,
        "./isDate": 465,
        "./isEmpty": 466,
        "./isRegExp": 467,
        "./toQueryParameters": 468
    }],
    460: [function (c, d, b) {
        c("@marcom/ac-polyfills/Array/isArray");
        var h = c("./extend");
        var a = Object.prototype.hasOwnProperty;
        var f = function f(i, j) {
            var k;
            for (k in j) {
                if (a.call(j, k)) {
                    if (j[k] === null) {
                        i[k] = null
                    } else {
                        if (_typeof(j[k]) === "object") {
                            i[k] = Array.isArray(j[k]) ? [] : {};
                            f(i[k], j[k])
                        } else {
                            i[k] = j[k]
                        }
                    }
                }
            }
            return i
        };
        d.exports = function g(j, i) {
            if (i) {
                return f({}, j)
            }
            return h({}, j)
        }
    }, {"./extend": 463, "@marcom/ac-polyfills/Array/isArray": 482}],
    461: [function (b, d, a) {
        var f = function f() {
        };
        d.exports = function c(g) {
            if (arguments.length > 1) {
                throw new Error("Second argument not supported")
            }
            if (g === null || (typeof g === "undefined" ? "undefined" : _typeof(g)) !== "object") {
                throw new TypeError("Object prototype may only be an Object.")
            }
            if (typeof Object.create === "function") {
                return Object.create(g)
            } else {
                f.prototype = g;
                return new f()
            }
        }
    }, {}],
    462: [function (b, c, a) {
        var f = b("./extend");
        c.exports = function d(h, g) {
            if ((typeof h === "undefined" ? "undefined" : _typeof(h)) !== "object") {
                throw new TypeError("defaults: must provide a defaults object")
            }
            g = g || {};
            if ((typeof g === "undefined" ? "undefined" : _typeof(g)) !== "object") {
                throw new TypeError("defaults: options must be a typeof object")
            }
            return f({}, h, g)
        }
    }, {"./extend": 463}],
    463: [function (c, d, b) {
        c("@marcom/ac-polyfills/Array/prototype.forEach");
        var a = Object.prototype.hasOwnProperty;
        d.exports = function f() {
            var h;
            var g;
            if (arguments.length < 2) {
                h = [{}, arguments[0]]
            } else {
                h = [].slice.call(arguments)
            }
            g = h.shift();
            h.forEach(function (j) {
                if (j != null) {
                    for (var i in j) {
                        if (a.call(j, i)) {
                            g[i] = j[i]
                        }
                    }
                }
            });
            return g
        }
    }, {"@marcom/ac-polyfills/Array/prototype.forEach": 485}],
    464: [function (c, d, b) {
        var a = Object.prototype.hasOwnProperty;
        d.exports = function f(i) {
            if (Object.getPrototypeOf) {
                return Object.getPrototypeOf(i)
            } else {
                if ((typeof i === "undefined" ? "undefined" : _typeof(i)) !== "object") {
                    throw new Error("Requested prototype of a value that is not an object.")
                } else {
                    if (_typeof(this.__proto__) === "object") {
                        return i.__proto__
                    } else {
                        var g = i.constructor;
                        var h;
                        if (a.call(i, "constructor")) {
                            h = g;
                            if (!delete i.constructor) {
                                return null
                            }
                            g = i.constructor;
                            i.constructor = h
                        }
                        return g ? g.prototype : null
                    }
                }
            }
        }
    }, {}],
    465: [function (b, d, a) {
        d.exports = function c(f) {
            return Object.prototype.toString.call(f) === "[object Date]"
        }
    }, {}],
    466: [function (c, d, b) {
        var a = Object.prototype.hasOwnProperty;
        d.exports = function f(g) {
            var h;
            if ((typeof g === "undefined" ? "undefined" : _typeof(g)) !== "object") {
                throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
            }
            for (h in g) {
                if (a.call(g, h)) {
                    return false
                }
            }
            return true
        }
    }, {}],
    467: [function (c, d, b) {
        d.exports = function a(f) {
            return window.RegExp ? f instanceof RegExp : false
        }
    }, {}],
    468: [function (c, f, b) {
        var a = c("@marcom/ac-url/joinSearchParams");
        f.exports = function d(g) {
            if ((typeof g === "undefined" ? "undefined" : _typeof(g)) !== "object") {
                throw new TypeError("toQueryParameters error: argument is not an object")
            }
            return a(g, false)
        }
    }, {"@marcom/ac-url/joinSearchParams": 454}],
    469: [function (b, c, a) {
        (function (h) {
            if (!h.console) {
                h.console = {}
            }
            var d = h.console;
            var k, j;
            var i = function i() {
            };
            var g = ["memory"];
            var f = ("assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");
            while (k = g.pop()) {
                if (!d[k]) {
                    d[k] = {}
                }
            }
            while (j = f.pop()) {
                if (typeof d[j] !== "function") {
                    d[j] = i
                }
            }
        })(typeof window === "undefined" ? this : window)
    }, {}],
    470: [function (b, c, a) {
        var d = b("./promise/promise").Promise;
        var f = b("./promise/polyfill").polyfill;
        a.Promise = d;
        a.polyfill = f
    }, {"./promise/polyfill": 474, "./promise/promise": 475}],
    471: [function (c, d, b) {
        var a = c("./utils").isArray;
        var g = c("./utils").isFunction;

        function f(h) {
            var i = this;
            if (!a(h)) {
                throw new TypeError("You must pass an array to all.")
            }
            return new i(function (o, n) {
                var l = [], m = h.length, q;
                if (m === 0) {
                    o([])
                }

                function p(r) {
                    return function (s) {
                        j(r, s)
                    }
                }

                function j(r, s) {
                    l[r] = s;
                    if (--m === 0) {
                        o(l)
                    }
                }

                for (var k = 0; k < h.length; k++) {
                    q = h[k];
                    if (q && g(q.then)) {
                        q.then(p(k), n)
                    } else {
                        j(k, q)
                    }
                }
            })
        }

        b.all = f
    }, {"./utils": 479}],
    472: [function (b, c, a) {
        (function (f, g) {
            var o = typeof window !== "undefined" ? window : {};
            var l = o.MutationObserver || o.WebKitMutationObserver;
            var n = typeof g !== "undefined" ? g : this === undefined ? window : this;

            function m() {
                return function () {
                    f.nextTick(p)
                }
            }

            function i() {
                var s = 0;
                var q = new l(p);
                var r = document.createTextNode("");
                q.observe(r, {characterData: true});
                return function () {
                    r.data = s = ++s % 2
                }
            }

            function k() {
                return function () {
                    n.setTimeout(p, 1)
                }
            }

            var j = [];

            function p() {
                for (var s = 0;
                     s < j.length; s++) {
                    var r = j[s];
                    var t = r[0], q = r[1];
                    t(q)
                }
                j = []
            }

            var h;
            if (typeof f !== "undefined" && {}.toString.call(f) === "[object process]") {
                h = m()
            } else {
                if (l) {
                    h = i()
                } else {
                    h = k()
                }
            }

            function d(s, q) {
                var r = j.push([s, q]);
                if (r === 1) {
                    h()
                }
            }

            a.asap = d
        }).call(this, b("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {_process: 559}],
    473: [function (d, f, a) {
        var c = {instrument: false};

        function b(g, h) {
            if (arguments.length === 2) {
                c[g] = h
            } else {
                return c[g]
            }
        }

        a.config = c;
        a.configure = b
    }, {}],
    474: [function (b, c, a) {
        (function (f) {
            var d = b("./promise").Promise;
            var h = b("./utils").isFunction;

            function g() {
                var j;
                if (typeof f !== "undefined") {
                    j = f
                } else {
                    if (typeof window !== "undefined" && window.document) {
                        j = window
                    } else {
                        j = self
                    }
                }
                var i = "Promise" in j && "resolve" in j.Promise && "reject" in j.Promise && "all" in j.Promise && "race" in j.Promise && function () {
                    var k;
                    new j.Promise(function (l) {
                        k = l
                    });
                    return h(k)
                }();
                if (!i) {
                    j.Promise = d
                }
            }

            a.polyfill = g
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {"./promise": 475, "./utils": 479}],
    475: [function (q, d, F) {
        var D = q("./config").config;
        var C = q("./config").configure;
        var s = q("./utils").objectOrFunction;
        var a = q("./utils").isFunction;
        var f = q("./utils").now;
        var g = q("./all").all;
        var j = q("./race").race;
        var l = q("./resolve").resolve;
        var c = q("./reject").reject;
        var u = q("./asap").asap;
        var r = 0;
        D.async = u;

        function h(G) {
            if (!a(G)) {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            if (!(this instanceof h)) {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            this._subscribers = [];
            B(G, this)
        }

        function B(K, J) {
            function G(L) {
                v(J, L)
            }

            function I(L) {
                k(J, L)
            }

            try {
                K(G, I)
            } catch (H) {
                I(H)
            }
        }

        function y(N, P, M, I) {
            var G = a(M), L, K, O, H;
            if (G) {
                try {
                    L = M(I);
                    O = true
                } catch (J) {
                    H = true;
                    K = J
                }
            } else {
                L = I;
                O = true
            }
            if (t(P, L)) {
                return
            } else {
                if (G && O) {
                    v(P, L)
                } else {
                    if (H) {
                        k(P, K)
                    } else {
                        if (N === b) {
                            v(P, L)
                        } else {
                            if (N === E) {
                                k(P, L)
                            }
                        }
                    }
                }
            }
        }

        var m = void 0;
        var p = 0;
        var b = 1;
        var E = 2;

        function o(G, L, K, J) {
            var I = G._subscribers;
            var H = I.length;
            I[H] = L;
            I[H + b] = K;
            I[H + E] = J
        }

        function w(K, G) {
            var M, L, J = K._subscribers, I = K._detail;
            for (var H = 0;
                 H < J.length; H += 3) {
                M = J[H];
                L = J[H + G];
                y(G, M, L, I)
            }
            K._subscribers = null
        }

        h.prototype = {
            constructor: h, _state: undefined, _detail: undefined, _subscribers: undefined, then: function A(L, J) {
                var K = this;
                var H = new this.constructor(function () {
                });
                if (this._state) {
                    var I = arguments;
                    D.async(function G() {
                        y(K._state, H, I[K._state - 1], K._detail)
                    })
                } else {
                    o(this, H, L, J)
                }
                return H
            }, "catch": function x(G) {
                return this.then(null, G)
            }
        };
        h.all = g;
        h.race = j;
        h.resolve = l;
        h.reject = c;

        function t(K, I) {
            var J = null, G;
            try {
                if (K === I) {
                    throw new TypeError("A promises callback cannot return that same promise.")
                }
                if (s(I)) {
                    J = I.then;
                    if (a(J)) {
                        J.call(I, function (L) {
                            if (G) {
                                return true
                            }
                            G = true;
                            if (I !== L) {
                                v(K, L)
                            } else {
                                i(K, L)
                            }
                        }, function (L) {
                            if (G) {
                                return true
                            }
                            G = true;
                            k(K, L)
                        });
                        return true
                    }
                }
            } catch (H) {
                if (G) {
                    return true
                }
                k(K, H);
                return true
            }
            return false
        }

        function v(H, G) {
            if (H === G) {
                i(H, G)
            } else {
                if (!t(H, G)) {
                    i(H, G)
                }
            }
        }

        function i(H, G) {
            if (H._state !== m) {
                return
            }
            H._state = p;
            H._detail = G;
            D.async(z, H)
        }

        function k(H, G) {
            if (H._state !== m) {
                return
            }
            H._state = p;
            H._detail = G;
            D.async(n, H)
        }

        function z(G) {
            w(G, G._state = b)
        }

        function n(G) {
            w(G, G._state = E)
        }

        F.Promise = h
    }, {
        "./all": 471,
        "./asap": 472,
        "./config": 473,
        "./race": 476,
        "./reject": 477,
        "./resolve": 478,
        "./utils": 479
    }],
    476: [function (c, f, b) {
        var a = c("./utils").isArray;

        function d(g) {
            var h = this;
            if (!a(g)) {
                throw new TypeError("You must pass an array to race.")
            }
            return new h(function (m, l) {
                var k = [], n;
                for (var j = 0; j < g.length; j++) {
                    n = g[j];
                    if (n && typeof n.then === "function") {
                        n.then(m, l)
                    } else {
                        m(n)
                    }
                }
            })
        }

        b.race = d
    }, {"./utils": 479}],
    477: [function (b, c, a) {
        function d(g) {
            var f = this;
            return new f(function (i, h) {
                h(g)
            })
        }

        a.reject = d
    }, {}],
    478: [function (b, c, a) {
        function d(g) {
            if (g && (typeof g === "undefined" ? "undefined" : _typeof(g)) === "object" && g.constructor === this) {
                return g
            }
            var f = this;
            return new f(function (h) {
                h(g)
            })
        }

        a.resolve = d
    }, {}],
    479: [function (d, f, b) {
        function g(i) {
            return h(i) || (typeof i === "undefined" ? "undefined" : _typeof(i)) === "object" && i !== null
        }

        function h(i) {
            return typeof i === "function"
        }

        function a(i) {
            return Object.prototype.toString.call(i) === "[object Array]"
        }

        var c = Date.now || function () {
            return new Date().getTime()
        };
        b.objectOrFunction = g;
        b.isFunction = h;
        b.isArray = a;
        b.now = c
    }, {}],
    480: [function (b, c, a) {
        /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
        (function () {
            if (window.matchMedia && window.matchMedia("all").addListener) {
                return false
            }
            var i = window.matchMedia, d = i("only all").matches, h = false, j = 0, g = [], f = function f(k) {
                clearTimeout(j);
                j = setTimeout(function () {
                    for (var p = 0, m = g.length; p < m; p++) {
                        var l = g[p].mql, q = g[p].listeners || [], r = i(l.media).matches;
                        if (r !== l.matches) {
                            l.matches = r;
                            for (var n = 0, o = q.length; n < o; n++) {
                                q[n].call(window, l)
                            }
                        }
                    }
                }, 30)
            };
            window.matchMedia = function (n) {
                var k = i(n), m = [], l = 0;
                k.addListener = function (o) {
                    if (!d) {
                        return
                    }
                    if (!h) {
                        h = true;
                        window.addEventListener("resize", f, true)
                    }
                    if (l === 0) {
                        l = g.push({mql: k, listeners: m})
                    }
                    m.push(o)
                };
                k.removeListener = function (q) {
                    for (var p = 0, o = m.length; p < o; p++) {
                        if (m[p] === q) {
                            m.splice(p, 1)
                        }
                    }
                };
                return k
            }
        })()
    }, {}],
    481: [function (b, c, a) {
        /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
        window.matchMedia || (window.matchMedia = function () {
            var g = window.styleMedia || window.media;
            if (!g) {
                var h = document.createElement("style"), d = document.getElementsByTagName("script")[0], i = null;
                h.type = "text/css";
                h.id = "matchmediajs-test";
                d.parentNode.insertBefore(h, d);
                i = "getComputedStyle" in window && window.getComputedStyle(h, null) || h.currentStyle;
                g = {
                    matchMedium: function f(j) {
                        var k = "@media " + j + "{ #matchmediajs-test { width: 1px; } }";
                        if (h.styleSheet) {
                            h.styleSheet.cssText = k
                        } else {
                            h.textContent = k
                        }
                        return i.width === "1px"
                    }
                }
            }
            return function (j) {
                return {matches: g.matchMedium(j || "all"), media: j || "all"}
            }
        }())
    }, {}],
    482: [function (b, c, a) {
        if (!Array.isArray) {
            Array.isArray = function (d) {
                return Object.prototype.toString.call(d) === "[object Array]"
            }
        }
    }, {}],
    483: [function (b, c, a) {
        if (!Array.prototype.every) {
            Array.prototype.every = function d(k, j) {
                var h = Object(this);
                var f = h.length >>> 0;
                var g;
                if (typeof k !== "function") {
                    throw new TypeError(k + " is not a function")
                }
                for (g = 0; g < f; g += 1) {
                    if (g in h && !k.call(j, h[g], g, h)) {
                        return false
                    }
                }
                return true
            }
        }
    }, {}],
    484: [function (b, c, a) {
        if (!Array.prototype.filter) {
            Array.prototype.filter = function d(l, k) {
                var j = Object(this);
                var f = j.length >>> 0;
                var h;
                var g = [];
                if (typeof l !== "function") {
                    throw new TypeError(l + " is not a function")
                }
                for (h = 0; h < f; h += 1) {
                    if (h in j && l.call(k, j[h], h, j)) {
                        g.push(j[h])
                    }
                }
                return g
            }
        }
    }, {}],
    485: [function (b, c, a) {
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function d(l, k) {
                var j = Object(this);
                var f;
                var g;
                if (typeof l !== "function") {
                    throw new TypeError("No function object passed to forEach.")
                }
                var h = this.length;
                for (f = 0; f < h; f += 1) {
                    g = j[f];
                    l.call(k, g, f, j)
                }
            }
        }
    }, {}],
    486: [function (b, c, a) {
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function d(g, h) {
                var i = h || 0;
                var f = 0;
                if (i < 0) {
                    i = this.length + h - 1;
                    if (i < 0) {
                        throw"Wrapped past beginning of array while looking up a negative start index."
                    }
                }
                for (f = 0; f < this.length; f++) {
                    if (this[f] === g) {
                        return f
                    }
                }
                return -1
            }
        }
    }, {}],
    487: [function (b, c, a) {
        (function () {
            var d = Array.prototype.slice;
            try {
                d.call(document.documentElement)
            } catch (f) {
                Array.prototype.slice = function (n, j) {
                    j = typeof j !== "undefined" ? j : this.length;
                    if (Object.prototype.toString.call(this) === "[object Array]") {
                        return d.call(this, n, j)
                    }
                    var l, h = [], k, g = this.length;
                    var o = n || 0;
                    o = o >= 0 ? o : g + o;
                    var m = j ? j : g;
                    if (j < 0) {
                        m = g + j
                    }
                    k = m - o;
                    if (k > 0) {
                        h = new Array(k);
                        if (this.charAt) {
                            for (l = 0; l < k; l++) {
                                h[l] = this.charAt(o + l)
                            }
                        } else {
                            for (l = 0;
                                 l < k; l++) {
                                h[l] = this[o + l]
                            }
                        }
                    }
                    return h
                }
            }
        })()
    }, {}],
    488: [function (b, c, a) {
        if (!Array.prototype.some) {
            Array.prototype.some = function d(k, j) {
                var g = Object(this);
                var f = g.length >>> 0;
                var h;
                if (typeof k !== "function") {
                    throw new TypeError(k + " is not a function")
                }
                for (h = 0; h < f; h += 1) {
                    if (h in g && k.call(j, g[h], h, g) === true) {
                        return true
                    }
                }
                return false
            }
        }
    }, {}],
    489: [function (b, c, a) {
        if (document.createEvent) {
            try {
                new window.CustomEvent("click")
            } catch (d) {
                window.CustomEvent = function () {
                    function f(h, i) {
                        i = i || {bubbles: false, cancelable: false, detail: undefined};
                        var g = document.createEvent("CustomEvent");
                        g.initCustomEvent(h, i.bubbles, i.cancelable, i.detail);
                        return g
                    }

                    f.prototype = window.Event.prototype;
                    return f
                }()
            }
        }
    }, {}],
    490: [function (c, d, a) {
        if (!Date.now) {
            Date.now = function b() {
                return new Date().getTime()
            }
        }
    }, {}],
    491: [function (b, c, a) {
        /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
        if ("document" in self) {
            if (!("classList" in document.createElement("_"))) {
                (function (n) {
                    if (!("Element" in n)) {
                        return
                    }
                    var d = "classList", j = "prototype", q = n.Element[j], f = Object,
                        o = String[j].trim || function () {
                            return this.replace(/^\s+|\s+$/g, "")
                        }, g = Array[j].indexOf || function (u) {
                            var t = 0, s = this.length;
                            for (; t < s; t++) {
                                if (t in this && this[t] === u) {
                                    return t
                                }
                            }
                            return -1
                        }, r = function r(s, t) {
                            this.name = s;
                            this.code = DOMException[s];
                            this.message = t
                        }, k = function k(t, s) {
                            if (s === "") {
                                throw new r("SYNTAX_ERR", "An invalid or illegal string was specified")
                            }
                            if (/\s/.test(s)) {
                                throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character")
                            }
                            return g.call(t, s)
                        }, h = function h(w) {
                            var v = o.call(w.getAttribute("class") || ""), u = v ? v.split(/\s+/) : [], t = 0, s = u.length;
                            for (; t < s; t++) {
                                this.push(u[t])
                            }
                            this._updateClassName = function () {
                                w.setAttribute("class", this.toString())
                            }
                        }, i = h[j] = [], m = function m() {
                            return new h(this)
                        };
                    r[j] = Error[j];
                    i.item = function (s) {
                        return this[s] || null
                    };
                    i.contains = function (s) {
                        s += "";
                        return k(this, s) !== -1
                    };
                    i.add = function () {
                        var w = arguments, v = 0, t = w.length, u, s = false;
                        do {
                            u = w[v] + "";
                            if (k(this, u) === -1) {
                                this.push(u);
                                s = true
                            }
                        } while (++v < t);
                        if (s) {
                            this._updateClassName()
                        }
                    };
                    i.remove = function () {
                        var x = arguments, w = 0, t = x.length, v, s = false, u;
                        do {
                            v = x[w] + "";
                            u = k(this, v);
                            while (u !== -1) {
                                this.splice(u, 1);
                                s = true;
                                u = k(this, v)
                            }
                        } while (++w < t);
                        if (s) {
                            this._updateClassName()
                        }
                    };
                    i.toggle = function (t, u) {
                        t += "";
                        var s = this.contains(t), v = s ? u !== true && "remove" : u !== false && "add";
                        if (v) {
                            this[v](t)
                        }
                        if (u === true || u === false) {
                            return u
                        } else {
                            return !s
                        }
                    };
                    i.toString = function () {
                        return this.join(" ")
                    };
                    if (f.defineProperty) {
                        var p = {get: m, enumerable: true, configurable: true};
                        try {
                            f.defineProperty(q, d, p)
                        } catch (l) {
                            if (l.number === -2146823252) {
                                p.enumerable = false;
                                f.defineProperty(q, d, p)
                            }
                        }
                    } else {
                        if (f[j].__defineGetter__) {
                            q.__defineGetter__(d, m)
                        }
                    }
                })(self)
            } else {
                (function () {
                    var f = document.createElement("_");
                    f.classList.add("c1", "c2");
                    if (!f.classList.contains("c2")) {
                        var g = function g(i) {
                            var h = DOMTokenList.prototype[i];
                            DOMTokenList.prototype[i] = function (l) {
                                var k, j = arguments.length;
                                for (k = 0; k < j; k++) {
                                    l = arguments[k];
                                    h.call(this, l)
                                }
                            }
                        };
                        g("add");
                        g("remove")
                    }
                    f.classList.toggle("c3", false);
                    if (f.classList.contains("c3")) {
                        var d = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function (h, i) {
                            if (1 in arguments && !this.contains(h) === !i) {
                                return i
                            } else {
                                return d.call(this, h)
                            }
                        }
                    }
                    f = null
                })()
            }
        }
    }, {}],
    492: [function (b, c, a) {
        if (!Function.prototype.bind) {
            Function.prototype.bind = function (d) {
                if (typeof this !== "function") {
                    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
                }
                var i = Array.prototype.slice.call(arguments, 1);
                var h = this;
                var f = function f() {
                };
                var g = function g() {
                    return h.apply(this instanceof f && d ? this : d, i.concat(Array.prototype.slice.call(arguments)))
                };
                f.prototype = this.prototype;
                g.prototype = new f();
                return g
            }
        }
    }, {}],
    493: [function (require, module, exports) {
        if ((typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) !== "object") {
            JSON = {}
        }
        (function () {
            function f(n) {
                return n < 10 ? "0" + n : n
            }

            if (typeof Date.prototype.toJSON !== "function") {
                Date.prototype.toJSON = function () {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                };
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                    return this.valueOf()
                }
            }
            var cx, escapable, gap, indent, meta, rep;

            function quote(string) {
                escapable.lastIndex = 0;
                return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                    var c = meta[a];
                    return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + string + '"'
            }

            function str(key, holder) {
                var i, k, v, length, mind = gap, partial, value = holder[key];
                if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && typeof value.toJSON === "function") {
                    value = value.toJSON(key)
                }
                if (typeof rep === "function") {
                    value = rep.call(holder, key, value)
                }
                switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
                    case"string":
                        return quote(value);
                    case"number":
                        return isFinite(value) ? String(value) : "null";
                    case"boolean":
                    case"null":
                        return String(value);
                    case"object":
                        if (!value) {
                            return "null"
                        }
                        gap += indent;
                        partial = [];
                        if (Object.prototype.toString.apply(value) === "[object Array]") {
                            length = value.length;
                            for (i = 0; i < length; i += 1) {
                                partial[i] = str(i, value) || "null"
                            }
                            v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                            gap = mind;
                            return v
                        }
                        if (rep && (typeof rep === "undefined" ? "undefined" : _typeof(rep)) === "object") {
                            length = rep.length;
                            for (i = 0; i < length; i += 1) {
                                if (typeof rep[i] === "string") {
                                    k = rep[i];
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ": " : ":") + v)
                                    }
                                }
                            }
                        } else {
                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ": " : ":") + v)
                                    }
                                }
                            }
                        }
                        v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                        gap = mind;
                        return v
                }
            }

            if (typeof JSON.stringify !== "function") {
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
                JSON.stringify = function (value, replacer, space) {
                    var i;
                    gap = "";
                    indent = "";
                    if (typeof space === "number") {
                        for (i = 0;
                             i < space; i += 1) {
                            indent += " "
                        }
                    } else {
                        if (typeof space === "string") {
                            indent = space
                        }
                    }
                    rep = replacer;
                    if (replacer && typeof replacer !== "function" && ((typeof replacer === "undefined" ? "undefined" : _typeof(replacer)) !== "object" || typeof replacer.length !== "number")) {
                        throw new Error("JSON.stringify")
                    }
                    return str("", {"": value})
                }
            }
            if (typeof JSON.parse !== "function") {
                cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                JSON.parse = function (text, reviver) {
                    var j;

                    function walk(holder, key) {
                        var k, v, value = holder[key];
                        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = walk(value, k);
                                    if (v !== undefined) {
                                        value[k] = v
                                    } else {
                                        delete value[k]
                                    }
                                }
                            }
                        }
                        return reviver.call(holder, key, value)
                    }

                    text = String(text);
                    cx.lastIndex = 0;
                    if (cx.test(text)) {
                        text = text.replace(cx, function (a) {
                            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                        })
                    }
                    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                        j = eval("(" + text + ")");
                        return typeof reviver === "function" ? walk({"": j}, "") : j
                    }
                    throw new SyntaxError("JSON.parse")
                }
            }
        })()
    }, {}],
    494: [function (b, c, a) {
        if (!Object.create) {
            var d = function d() {
            };
            Object.create = function (f) {
                if (arguments.length > 1) {
                    throw new Error("Second argument not supported")
                }
                if (f === null || (typeof f === "undefined" ? "undefined" : _typeof(f)) !== "object") {
                    throw new TypeError("Object prototype may only be an Object.")
                }
                d.prototype = f;
                return new d()
            }
        }
    }, {}],
    495: [function (b, c, a) {
        if (!Object.keys) {
            Object.keys = function d(g) {
                var f = [];
                var h;
                if (!g || typeof g.hasOwnProperty !== "function") {
                    throw"Object.keys called on non-object."
                }
                for (h in g) {
                    if (g.hasOwnProperty(h)) {
                        f.push(h)
                    }
                }
                return f
            }
        }
    }, {}],
    496: [function (b, c, a) {
        c.exports = b("es6-promise").polyfill()
    }, {"es6-promise": 470}],
    497: [function (b, c, a) {
        b("console-polyfill")
    }, {"console-polyfill": 469}],
    498: [function (b, c, a) {
        b("matchmedia-polyfill");
        b("matchmedia-polyfill/matchMedia.addListener")
    }, {"matchmedia-polyfill": 481, "matchmedia-polyfill/matchMedia.addListener": 480}],
    499: [function (b, c, a) {
        /*! MIT License
   *
   * performance.now polyfill
   * copyright Paul Irish 2015
   *
   */
        b("../Date/now");
        (function () {
            if ("performance" in window == false) {
                window.performance = {}
            }
            if ("now" in window.performance == false) {
                var f = Date.now();
                if (performance.timing && performance.timing.navigationStart) {
                    f = performance.timing.navigationStart
                }
                window.performance.now = function d() {
                    return Date.now() - f
                }
            }
        })()
    }, {"../Date/now": 490}],
    500: [function (b, c, a) {
        (function () {
            var f = 0;
            var g = ["ms", "moz", "webkit", "o"];
            for (var d = 0; d < g.length && !window.requestAnimationFrame;
                 ++d) {
                window.requestAnimationFrame = window[g[d] + "RequestAnimationFrame"];
                window.cancelAnimationFrame = window[g[d] + "CancelAnimationFrame"] || window[g[d] + "CancelRequestAnimationFrame"]
            }
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function (l, i) {
                    var h = Date.now();
                    var j = Math.max(0, 16 - (h - f));
                    var k = window.setTimeout(function () {
                        l(h + j)
                    }, j);
                    f = h + j;
                    return k
                }
            }
            if (!window.cancelAnimationFrame) {
                window.cancelAnimationFrame = function (h) {
                    clearTimeout(h)
                }
            }
        })()
    }, {}],
    501: [function (b, c, a) {
        arguments[4][320][0].apply(a, arguments)
    }, {"./ac-queue/LiveQueue": 502, "./ac-queue/Queue": 503, "./ac-queue/QueueItem": 504, dup: 320}],
    502: [function (b, c, a) {
        arguments[4][321][0].apply(a, arguments)
    }, {
        "./Queue": 503,
        "./QueueItem": 504,
        "@marcom/ac-polyfills/Function/prototype.bind": 492,
        "@marcom/ac-polyfills/Promise": 496,
        "@marcom/ac-polyfills/requestAnimationFrame": 500,
        dup: 321
    }],
    503: [function (b, c, a) {
        arguments[4][322][0].apply(a, arguments)
    }, {"./QueueItem": 504, dup: 322}],
    504: [function (b, c, a) {
        arguments[4][323][0].apply(a, arguments)
    }, {dup: 323}],
    505: [function (c, b, g) {
        var f = c("@marcom/ac-object/defaults");
        var d = c("@marcom/ac-jetpack-lib/core/BaseComponent");
        var k = c("./ProgressiveImageLoader");
        var i = {};
        a.Events = {ImageLoad: "progressive-image-load", Complete: "progressive-image-complete"};

        function a(q, s, l, p, m, r, o) {
            this.name = l + "_" + o;
            d.apply(this, arguments);
            if (this.section.getComponentOfType(this.componentName)) {
                throw new Error("Each Jetpack Section can only contain one ProgressiveImageComponent. Mark progressive images with the [data-progressive-image] attribute, or use [data-progressive-image-group] to distinctly load multiple groups of images in a section")
            }
            try {
                this._loadOptions = JSON.parse(this.element.getAttribute("data-progressive-image-options"))
            } catch (n) {
                this._loadOptions = null
            }
            this.imageLoader = new k({container: this.element, includeContainer: true})
        }

        var h = a.prototype = Object.create(d.prototype);
        var j = d.prototype;
        a.IS_SUPPORTED = function () {
            var l = document.getElementsByTagName("html")[0];
            return l.classList.contains("progressive-image")
        };
        h.setupEvents = function () {
            j.setupEvents.apply(this, arguments);
            this._onImageLoad = this._onImageLoad.bind(this);
            this._onComplete = this._onComplete.bind(this);
            this.imageLoader.on(k.Events.ImageLoad, this._onImageLoad);
            this.imageLoader.on(k.Events.Complete, this._onComplete)
        };
        h.onSectionWillAppearWithPadding = function () {
            j.onSectionWillAppearWithPadding.apply(this, arguments);
            this.imageLoader.load(this._loadOptions)
        };
        h.destroy = function () {
            this.imageLoader.destroy();
            this.imageLoader = null;
            j.destroy.apply(this, arguments)
        };
        h._onImageLoad = function (l) {
            this.section.trigger(a.Events.ImageLoad, l)
        };
        h._onComplete = function () {
            this.section.trigger(a.Events.Complete)
        };
        b.exports = a
    }, {
        "./ProgressiveImageLoader": 506,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-object/defaults": 462
    }],
    506: [function (b, a, h) {
        var d = b("@marcom/ac-object/defaults");
        var f = b("@marcom/ac-queue").LiveQueue;
        var l = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var g = b("@marcom/ac-raf-emitter/update");
        var j = b("@marcom/ac-raf-emitter/draw");
        var c = {container: document.body, includeContainer: false};
        var k = {
            loadingPoolSize: 8,
            timeout: null,
            imageDataAttribute: "data-progressive-image",
            imageAnimate: true,
            imageAnimateClass: "progressive-image-animated"
        };
        m.Events = {ImageLoad: "image-load", Complete: "complete"};

        function m(n) {
            l.call(this);
            this.options = d(c, n);
            this.loadingOptions = null;
            this.els = [];
            this.loadingQueue = null;
            this._queueItems = [];
            this._queueItemsObj = {};
            this._loadOrder = [];
            this._timeout = null;
            this._didCallLoad = false
        }

        var i = m.prototype = Object.create(l.prototype);
        i.load = function (n) {
            if (this._didCallLoad) {
                return
            }
            this._didCallLoad = true;
            this.loadingOptions = d(k, n);
            this.loadingQueue = new f(this.loadingOptions.loadingPoolSize);
            this.els = Array.from(this._getProgressiveImageElements());
            if (this.options.includeContainer && this.options.container.hasAttribute(this._getProgressiveImageDataAttribute())) {
                this.els.unshift(this.options.container)
            }
            j(function () {
                var p, o = this.els.length, q;
                for (p = 0; p < o; p++) {
                    q = {
                        queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, p), p),
                        el: this.els[p],
                        id: p
                    };
                    this._queueItems.push(q);
                    this._queueItemsObj[p] = q;
                    if (this.loadingOptions.imageAnimate) {
                        this.els[p].classList.add(this.loadingOptions.imageAnimateClass)
                    }
                }
                g(function () {
                    this.loadingQueue.start();
                    if (typeof this.loadingOptions.timeout === "number") {
                        this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout)
                    }
                }.bind(this))
            }.bind(this))
        };
        i.setVisible = function (n) {
            return new Promise(function (p, o) {
                j(function () {
                    n.removeAttribute(this._getProgressiveImageDataAttribute());
                    p();
                    n = null
                }.bind(this))
            }.bind(this))
        };
        i.cancel = function () {
            if (this.els) {
                var o, n = this.els.length;
                for (o = 0; o < n; o++) {
                    this.setVisible(this.els[o]);
                    if (this.loadingOptions.imageAnimate) {
                        j(function () {
                            this.els[o].setAttribute("data-progressive-image-loaded", "")
                        }.bind(this, o))
                    }
                }
            }
            this._handleLoadingComplete()
        };
        i.destroy = function () {
            this.cancel();
            this.off();
            l.prototype.destroy.call(this)
        };
        i._loadNextItem = function (n) {
            return new Promise(function (o, q, p) {
                var r = this._queueItemsObj[o];
                this._loadAndSetVisible(r.el).then(function () {
                    var s = this._queueItems.indexOf(r);
                    this._queueItems.splice(s, 1);
                    this._queueItemsObj[r.id] = null;
                    q();
                    this._handleImageLoad(r.el);
                    r = q = null;
                    if (this.loadingQueue.count() === 1) {
                        this._handleLoadingComplete()
                    }
                }.bind(this))
            }.bind(this, n))
        };
        i._loadAndSetVisible = function (n) {
            return new Promise(function (p, o) {
                this.setVisible(n).then(function () {
                    this._getBackgroundImageSrc(n).then(function (q) {
                        this._loadImage(q).then(p);
                        n = null
                    }.bind(this))
                }.bind(this))
            }.bind(this))
        };
        i._getBackgroundImageSrc = function (n) {
            return new Promise(function (p, o) {
                g(function () {
                    var q = n.currentStyle;
                    if (!q) {
                        q = window.getComputedStyle(n, false)
                    }
                    n = null;
                    if (q.backgroundImage.indexOf("url(") === 0) {
                        p(q.backgroundImage.slice(4, -1).replace(/"/g, ""));
                        return
                    }
                    p(null)
                }.bind(this))
            }.bind(this))
        };
        i._getProgressiveImageDataAttribute = function () {
            return this.loadingOptions.imageDataAttribute
        };
        i._getProgressiveImageCSSQuery = function () {
            return "[" + this._getProgressiveImageDataAttribute() + "]"
        };
        i._getProgressiveImageElements = function () {
            return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery()) || []
        };
        i._loadImage = function (n) {
            return new Promise(this._loadImagePromiseFunc.bind(this, n))
        };
        i._loadImagePromiseFunc = function (r, q, p) {
            function o() {
                this.removeEventListener("load", o);
                q(this);
                q = null
            }

            if (!r) {
                q(null);
                return
            }
            var n = new Image();
            n.addEventListener("load", o);
            n.src = r
        };
        i._clearTimeout = function () {
            if (this._timeout) {
                window.clearTimeout(this._timeout);
                this._timeout = null
            }
        };
        i._handleImageLoad = function (n) {
            j(function () {
                this.trigger(m.Events.ImageLoad, n);
                if (this.loadingOptions.imageAnimate) {
                    n.setAttribute("data-progressive-image-loaded", "")
                }
                n = null
            }.bind(this))
        };
        i._handleLoadingComplete = function () {
            this.loadingQueue.stop();
            this._clearTimeout();
            this.trigger(m.Events.Complete)
        };
        a.exports = m
    }, {
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-object/defaults": 462,
        "@marcom/ac-queue": 501,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521
    }],
    507: [function (b, c, a) {
        arguments[4][417][0].apply(a, arguments)
    }, {"./ac-shared-instance/SharedInstance": 508, dup: 417}],
    508: [function (b, c, a) {
        arguments[4][418][0].apply(a, arguments)
    }, {dup: 418}],
    509: [function (b, c, a) {
        arguments[4][437][0].apply(a, arguments)
    }, {"@marcom/ac-shared-instance": 507, dup: 437}],
    510: [function (b, c, a) {
        arguments[4][417][0].apply(a, arguments)
    }, {"./ac-shared-instance/SharedInstance": 511, dup: 417}],
    511: [function (b, c, a) {
        arguments[4][418][0].apply(a, arguments)
    }, {dup: 418}],
    512: [function (b, d, a) {
        b("@marcom/ac-polyfills/performance/now");
        var f;

        function c(g) {
            g = g || {};
            this._reset();
            this._willRun = false;
            this._totalSubscribeCount = -1;
            this._requestAnimationFrame = window.requestAnimationFrame;
            this._cancelAnimationFrame = window.cancelAnimationFrame;
            this._boundOnAnimationFrame = this._onAnimationFrame.bind(this);
            this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }

        f = c.prototype;
        f.subscribe = function (g, h) {
            this._totalSubscribeCount++;
            if (!this._nextFrameSubscribers[g.id]) {
                if (h) {
                    this._nextFrameSubscribersOrder.unshift(g.id)
                } else {
                    this._nextFrameSubscribersOrder.push(g.id)
                }
                this._nextFrameSubscribers[g.id] = g;
                this._nextFrameSubscriberArrayLength++;
                this._nextFrameSubscriberCount++;
                this._run()
            }
            return this._totalSubscribeCount
        };
        f.unsubscribe = function (g) {
            if (!this._nextFrameSubscribers[g.id]) {
                return false
            }
            this._nextFrameSubscribers[g.id] = null;
            this._nextFrameSubscriberCount--;
            if (this._nextFrameSubscriberCount === 0) {
                this._cancel()
            }
            return true
        };
        f.trigger = function (j, h) {
            var g;
            for (g = 0; g < this._subscriberArrayLength;
                 g++) {
                if (this._subscribers[this._subscribersOrder[g]] !== null && this._subscribers[this._subscribersOrder[g]]._didDestroy === false) {
                    this._subscribers[this._subscribersOrder[g]].trigger(j, h)
                }
            }
        };
        f.destroy = function () {
            var g = this._cancel();
            this._subscribers = null;
            this._subscribersOrder = null;
            this._nextFrameSubscribers = null;
            this._nextFrameSubscribersOrder = null;
            this._rafData = null;
            this._boundOnAnimationFrame = null;
            this._onExternalAnimationFrame = null;
            return g
        };
        f.useExternalAnimationFrame = function (g) {
            if (typeof g !== "boolean") {
                return
            }
            var h = this._isUsingExternalAnimationFrame;
            if (g && this._animationFrame) {
                this._cancelAnimationFrame.call(window, this._animationFrame);
                this._animationFrame = null
            }
            if (this._willRun && !g && !this._animationFrame) {
                this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)
            }
            this._isUsingExternalAnimationFrame = g;
            if (g) {
                return this._boundOnExternalAnimationFrame
            }
            return h || false
        };
        f._run = function () {
            if (!this._willRun) {
                this._willRun = true;
                if (this.lastFrameTime === 0) {
                    this.lastFrameTime = performance.now()
                }
                this._animationFrameActive = true;
                if (!this._isUsingExternalAnimationFrame) {
                    this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)
                }
                return true
            }
        };
        f._cancel = function () {
            var g = false;
            if (this._animationFrameActive) {
                if (this._animationFrame) {
                    this._cancelAnimationFrame.call(window, this._animationFrame);
                    this._animationFrame = null
                }
                this._animationFrameActive = false;
                this._willRun = false;
                g = true
            }
            if (!this._isRunning) {
                this._reset()
            }
            return g
        };
        f._onSubscribersAnimationFrameStart = function (h) {
            var g;
            for (g = 0; g < this._subscriberArrayLength; g++) {
                if (this._subscribers[this._subscribersOrder[g]] !== null && this._subscribers[this._subscribersOrder[g]]._didDestroy === false) {
                    this._subscribers[this._subscribersOrder[g]]._onAnimationFrameStart(h)
                }
            }
        };
        f._onSubscribersAnimationFrameEnd = function (h) {
            var g;
            for (g = 0; g < this._subscriberArrayLength;
                 g++) {
                if (this._subscribers[this._subscribersOrder[g]] !== null && this._subscribers[this._subscribersOrder[g]]._didDestroy === false) {
                    this._subscribers[this._subscribersOrder[g]]._onAnimationFrameEnd(h)
                }
            }
        };
        f._onAnimationFrame = function (g) {
            this._subscribers = this._nextFrameSubscribers;
            this._subscribersOrder = this._nextFrameSubscribersOrder;
            this._subscriberArrayLength = this._nextFrameSubscriberArrayLength;
            this._subscriberCount = this._nextFrameSubscriberCount;
            this._nextFrameSubscribers = {};
            this._nextFrameSubscribersOrder = [];
            this._nextFrameSubscriberArrayLength = 0;
            this._nextFrameSubscriberCount = 0;
            this._isRunning = true;
            this._willRun = false;
            this._didRequestNextRAF = false;
            this._rafData.delta = g - this.lastFrameTime;
            this.lastFrameTime = g;
            this._rafData.fps = 0;
            if (this._rafData.delta >= 1000) {
                this._rafData.delta = 0
            }
            if (this._rafData.delta !== 0) {
                this._rafData.fps = 1000 / this._rafData.delta
            }
            this._rafData.time = g;
            this._rafData.naturalFps = this._rafData.fps;
            this._rafData.timeNow = Date.now();
            this._onSubscribersAnimationFrameStart(this._rafData);
            this.trigger("update", this._rafData);
            this.trigger("external", this._rafData);
            this.trigger("draw", this._rafData);
            this._onSubscribersAnimationFrameEnd(this._rafData);
            if (!this._willRun) {
                this._reset()
            }
        };
        f._onExternalAnimationFrame = function (g) {
            if (!this._isUsingExternalAnimationFrame) {
                return
            }
            this._onAnimationFrame(g)
        };
        f._reset = function () {
            this._rafData = {time: 0, delta: 0, fps: 0, naturalFps: 0, timeNow: 0};
            this._subscribers = {};
            this._subscribersOrder = [];
            this._subscriberArrayLength = 0;
            this._subscriberCount = 0;
            this._nextFrameSubscribers = {};
            this._nextFrameSubscribersOrder = [];
            this._nextFrameSubscriberArrayLength = 0;
            this._nextFrameSubscriberCount = 0;
            this._didEmitFrameData = false;
            this._animationFrame = null;
            this._animationFrameActive = false;
            this._isRunning = false;
            this._shouldReset = false;
            this.lastFrameTime = 0
        };
        d.exports = c
    }, {"@marcom/ac-polyfills/performance/now": 499}],
    513: [function (c, g, b) {
        var a = c("@marcom/ac-shared-instance").SharedInstance;
        var h = "ac-raf-executor:sharedRAFExecutorInstance", f = "2.0.1";
        var d = c("./RAFExecutor");
        g.exports = a.share(h, f, d)
    }, {"./RAFExecutor": 512, "@marcom/ac-shared-instance": 510}],
    514: [function (f, g, d) {
        var i;
        var h = f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var c = f("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
        var b = f("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");

        function a(j) {
            j = j || {};
            h.call(this);
            this.id = b.getNewID();
            this.executor = j.executor || c;
            this._reset();
            this._willRun = false;
            this._didDestroy = false
        }

        i = a.prototype = Object.create(h.prototype);
        i.run = function () {
            if (!this._willRun) {
                this._willRun = true
            }
            return this._subscribe()
        };
        i.cancel = function () {
            this._unsubscribe();
            if (this._willRun) {
                this._willRun = false
            }
            this._reset()
        };
        i.destroy = function () {
            var j = this.willRun();
            this.cancel();
            this.executor = null;
            h.prototype.destroy.call(this);
            this._didDestroy = true;
            return j
        };
        i.willRun = function () {
            return this._willRun
        };
        i.isRunning = function () {
            return this._isRunning
        };
        i._subscribe = function () {
            return this.executor.subscribe(this)
        };
        i._unsubscribe = function () {
            return this.executor.unsubscribe(this)
        };
        i._onAnimationFrameStart = function (j) {
            this._isRunning = true;
            this._willRun = false;
            if (!this._didEmitFrameData) {
                this._didEmitFrameData = true;
                this.trigger("start", j)
            }
        };
        i._onAnimationFrameEnd = function (j) {
            if (!this._willRun) {
                this.trigger("stop", j);
                this._reset()
            }
        };
        i._reset = function () {
            this._didEmitFrameData = false;
            this._isRunning = false
        };
        g.exports = a
    }, {
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 509,
        "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 513
    }],
    515: [function (b, c, a) {
        var d = b("./SingleCallRAFEmitter");
        var g = function g(h) {
            this.rafEmitter = new d();
            this.rafEmitter.on(h, this._onRAFExecuted.bind(this));
            this.requestAnimationFrame = this.requestAnimationFrame.bind(this);
            this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this);
            this._frameCallbacks = [];
            this._nextFrameCallbacks = [];
            this._currentFrameID = -1;
            this._cancelFrameIdx = -1;
            this._frameCallbackLength = 0;
            this._nextFrameCallbacksLength = 0;
            this._frameCallbackIteration = 0
        };
        var f = g.prototype;
        f.requestAnimationFrame = function (h) {
            this._currentFrameID = this.rafEmitter.run();
            this._nextFrameCallbacks.push(this._currentFrameID, h);
            this._nextFrameCallbacksLength += 2;
            return this._currentFrameID
        };
        f.cancelAnimationFrame = function (h) {
            this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(h);
            if (this._cancelFrameIdx === -1) {
                return
            }
            this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2);
            this._nextFrameCallbacksLength -= 2;
            if (this._nextFrameCallbacksLength === 0) {
                this.rafEmitter.cancel()
            }
        };
        f._onRAFExecuted = function (h) {
            this._frameCallbacks = this._nextFrameCallbacks;
            this._frameCallbackLength = this._nextFrameCallbacksLength;
            this._nextFrameCallbacks = [];
            this._nextFrameCallbacksLength = 0;
            for (this._frameCallbackIteration = 0;
                 this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) {
                this._frameCallbacks[this._frameCallbackIteration + 1](h.time, h)
            }
        };
        c.exports = g
    }, {"./SingleCallRAFEmitter": 517}],
    516: [function (b, c, a) {
        var g = b("./RAFInterface");
        var f = function f() {
            this.events = {}
        };
        var d = f.prototype;
        d.requestAnimationFrame = function (h) {
            if (!this.events[h]) {
                this.events[h] = new g(h)
            }
            return this.events[h].requestAnimationFrame
        };
        d.cancelAnimationFrame = function (h) {
            if (!this.events[h]) {
                this.events[h] = new g(h)
            }
            return this.events[h].cancelAnimationFrame
        };
        c.exports = new f()
    }, {"./RAFInterface": 515}],
    517: [function (c, d, b) {
        var a = c("./RAFEmitter");
        var f = function f(h) {
            a.call(this, h)
        };
        var g = f.prototype = Object.create(a.prototype);
        g._subscribe = function () {
            return this.executor.subscribe(this, true)
        };
        d.exports = f
    }, {"./RAFEmitter": 514}],
    518: [function (b, c, a) {
        var d = b("./RAFInterfaceController");
        c.exports = d.cancelAnimationFrame("draw")
    }, {"./RAFInterfaceController": 516}],
    519: [function (b, c, a) {
        var d = b("./RAFInterfaceController");
        c.exports = d.requestAnimationFrame("draw")
    }, {"./RAFInterfaceController": 516}],
    520: [function (b, c, a) {
        var d = b("./RAFInterfaceController");
        c.exports = d.requestAnimationFrame("external")
    }, {"./RAFInterfaceController": 516}],
    521: [function (b, c, a) {
        var d = b("./RAFInterfaceController");
        c.exports = d.requestAnimationFrame("update")
    }, {"./RAFInterfaceController": 516}],
    522: [function (b, c, a) {
        var d = {ua: window.navigator.userAgent, platform: window.navigator.platform, vendor: window.navigator.vendor};
        c.exports = b("./parseUserAgent")(d)
    }, {"./parseUserAgent": 525}],
    523: [function (b, c, a) {
        c.exports = {
            browser: {
                safari: false,
                chrome: false,
                firefox: false,
                ie: false,
                opera: false,
                android: false,
                edge: false,
                version: {name: "", major: 0, minor: 0, patch: 0, documentMode: false}
            },
            os: {
                osx: false,
                ios: false,
                android: false,
                windows: false,
                linux: false,
                fireos: false,
                chromeos: false,
                version: {name: "", major: 0, minor: 0, patch: 0}
            }
        }
    }, {}],
    524: [function (c, d, a) {
        d.exports = {
            browser: [{
                name: "edge", userAgent: "Edge", version: ["rv", "Edge"], test: function f(g) {
                    return g.ua.indexOf("Edge") > -1 || g.ua === "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                }
            }, {name: "chrome", userAgent: "Chrome"}, {
                name: "firefox", test: function f(g) {
                    return g.ua.indexOf("Firefox") > -1 && g.ua.indexOf("Opera") === -1
                }, version: "Firefox"
            }, {name: "android", userAgent: "Android"}, {
                name: "safari", test: function f(g) {
                    return g.ua.indexOf("Safari") > -1 && g.vendor.indexOf("Apple") > -1
                }, version: "Version"
            }, {
                name: "ie", test: function f(g) {
                    return g.ua.indexOf("IE") > -1 || g.ua.indexOf("Trident") > -1
                }, version: ["MSIE", "rv"], parseDocumentMode: function b() {
                    var g = false;
                    if (document.documentMode) {
                        g = parseInt(document.documentMode, 10)
                    }
                    return g
                }
            }, {name: "opera", userAgent: "Opera", version: ["Version", "Opera"]}], os: [{
                name: "windows", test: function f(g) {
                    return g.platform.indexOf("Win") > -1
                }, version: "Windows NT"
            }, {
                name: "osx", userAgent: "Mac", test: function f(g) {
                    return g.platform.indexOf("Mac") > -1
                }
            }, {
                name: "ios", test: function f(g) {
                    return g.ua.indexOf("iPhone") > -1 || g.ua.indexOf("iPad") > -1
                }, version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux", userAgent: "Linux", test: function f(g) {
                    return g.platform.indexOf("Linux") > -1 && g.ua.indexOf("Android") === -1
                }
            }, {
                name: "fireos", test: function f(g) {
                    return g.ua.indexOf("Firefox") > -1 && g.ua.indexOf("Mobile") > -1
                }, version: "rv"
            }, {name: "android", userAgent: "Android"}, {name: "chromeos", userAgent: "CrOS"}]
        }
    }, {}],
    525: [function (b, a, d) {
        var c = b("./defaults");
        var h = b("./dictionary");

        function g(k) {
            return new RegExp(k + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
        }

        function f(n, m) {
            if (typeof n.parseVersion === "function") {
                return n.parseVersion(m)
            } else {
                var p = n.version || n.userAgent;
                if (typeof p === "string") {
                    p = [p]
                }
                var o = p.length;
                var k;
                for (var l = 0; l < o; l++) {
                    k = m.match(g(p[l]));
                    if (k && k.length > 1) {
                        return k[1].replace(/_/g, ".")
                    }
                }
            }
        }

        function j(m, r, p) {
            var o = m.length;
            var q;
            var k;
            for (var n = 0; n < o; n++) {
                if (typeof m[n].test === "function") {
                    if (m[n].test(p) === true) {
                        q = m[n].name
                    }
                } else {
                    if (p.ua.indexOf(m[n].userAgent) > -1) {
                        q = m[n].name
                    }
                }
                if (q) {
                    r[q] = true;
                    k = f(m[n], p.ua);
                    if (typeof k === "string") {
                        var l = k.split(".");
                        r.version.name = k;
                        if (l && l.length > 0) {
                            r.version.major = parseInt(l[0] || 0);
                            r.version.minor = parseInt(l[1] || 0);
                            r.version.patch = parseInt(l[2] || 0)
                        }
                    } else {
                        if (q === "edge") {
                            r.version.name = "12.0.0";
                            r.version.major = "12";
                            r.version.minor = "0";
                            r.version.patch = "0"
                        }
                    }
                    if (typeof m[n].parseDocumentMode === "function") {
                        r.version.documentMode = m[n].parseDocumentMode()
                    }
                    return r
                }
            }
            return r
        }

        function i(l) {
            var k = {};
            k.browser = j(h.browser, c.browser, l);
            k.os = j(h.os, c.os, l);
            return k
        }

        a.exports = i
    }, {"./defaults": 523, "./dictionary": 524}],
    526: [function (b, c, a) {
        arguments[4][191][0].apply(a, arguments)
    }, {dup: 191}],
    527: [function (b, a, f) {
        b("@marcom/ac-polyfills/Function/prototype.bind");
        b("@marcom/ac-polyfills/Object/keys");
        b("@marcom/ac-polyfills/Object/create");
        var l = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var i = b("@marcom/ac-dom-events/utils/addEventListener");
        var h = b("@marcom/ac-feature/mediaQueriesAvailable");
        var c = "viewport-emitter";
        var j = "::before";
        var d = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";

        function k(m) {
            l.call(this);
            this._initializeElement(m);
            if (h()) {
                this._updateViewport = this._updateViewport.bind(this);
                i(window, "resize", this._updateViewport);
                i(window, "orientationchange", this._updateViewport);
                this._retinaQuery = window.matchMedia(d);
                this._updateRetina();
                if (this._retinaQuery.addListener) {
                    this._updateRetina = this._updateRetina.bind(this);
                    this._retinaQuery.addListener(this._updateRetina)
                }
            }
            this._updateViewport()
        }

        var g = k.prototype = Object.create(l.prototype);
        g.viewport = false;
        g.retina = false;
        g._initializeElement = function (n) {
            var m;
            n = n || c;
            m = document.getElementById(n);
            if (!m) {
                m = document.createElement("div");
                m.id = n;
                m = document.body.appendChild(m)
            }
            this._el = m
        };
        g._getElementContent = function () {
            var m;
            if ("currentStyle" in this._el) {
                m = this._el.currentStyle["x-content"]
            } else {
                this._invalidateStyles();
                m = window.getComputedStyle(this._el, j).content
            }
            if (m) {
                m = m.replace(/["']/g, "")
            }
            if (m) {
                return m
            }
            return false
        };
        g._updateViewport = function () {
            var m = this.viewport;
            var n;
            var o;
            this.viewport = this._getElementContent();
            if (this.viewport) {
                this.viewport = this.viewport.split(":").pop()
            }
            if (m && this.viewport !== m) {
                o = {from: m, to: this.viewport};
                this.trigger("change", o);
                this.trigger("from:" + m, o);
                this.trigger("to:" + this.viewport, o)
            }
        };
        g._updateRetina = function (m) {
            var n = this.retina;
            this.retina = this._retinaQuery.matches;
            if (n !== this.retina) {
                this.trigger("retinachange", {from: n, to: this.retina})
            }
        };
        g._invalidateStyles = function () {
            document.documentElement.clientWidth;
            this._el.innerHTML = this._el.innerHTML === " " ? "Â " : " ";
            document.documentElement.clientWidth
        };
        a.exports = k
    }, {
        "@marcom/ac-dom-events/utils/addEventListener": 526,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-feature/mediaQueriesAvailable": 160,
        "@marcom/ac-polyfills/Function/prototype.bind": 492,
        "@marcom/ac-polyfills/Object/create": 494,
        "@marcom/ac-polyfills/Object/keys": 495
    }],
    528: [function (c, d, b) {
        var a = c("./ViewportEmitter");
        d.exports = new a()
    }, {"./ViewportEmitter": 527}],
    529: [function (m, f, J) {
        var l = {
            create: m("gl-mat4/create"),
            invert: m("gl-mat4/invert"),
            clone: m("gl-mat4/clone"),
            transpose: m("gl-mat4/transpose")
        };
        var b = {
            create: m("gl-vec3/create"),
            dot: m("gl-vec3/dot"),
            normalize: m("gl-vec3/normalize"),
            length: m("gl-vec3/length"),
            cross: m("gl-vec3/cross"),
            fromValues: m("gl-vec3/fromValues")
        };
        var a = {
            create: m("gl-vec4/create"),
            transformMat4: m("gl-vec4/transformMat4"),
            fromValues: m("gl-vec4/fromValues")
        };
        var g = Math.PI / 180;
        var d = 180 / Math.PI;
        var H = 0, A = 0, F = 1, z = 1, D = 2, B = 3;
        var k = 4, y = 4, j = 5, x = 5, i = 6, h = 7;
        var v = 8, t = 9, s = 10, r = 11;
        var I = 12, w = 12, G = 13, u = 13, E = 14, C = 15;
        var c = function c(W, V) {
            V = V || false;
            var aa = l.clone(W);
            var Q = b.create();
            var ag = b.create();
            var N = b.create();
            var S = a.create();
            var L = a.create();
            var M = b.create();
            for (var ac = 0; ac < 16; ac++) {
                aa[ac] /= aa[C]
            }
            var Y = l.clone(aa);
            Y[B] = 0;
            Y[h] = 0;
            Y[r] = 0;
            Y[C] = 1;
            var ad = aa[3], O = aa[7], R = aa[11], ai = aa[12], ah = aa[13], af = aa[14], ae = aa[15];
            var U = a.create();
            if (!q(aa[B]) || !q(aa[h]) || !q(aa[r])) {
                U[0] = aa[B];
                U[1] = aa[h];
                U[2] = aa[r];
                U[3] = aa[C];
                var ab = l.invert(l.create(), Y);
                var T = l.transpose(l.create(), ab);
                S = a.transformMat4(S, U, T)
            } else {
                S = a.fromValues(0, 0, 0, 1)
            }
            Q[0] = ai;
            Q[1] = ah;
            Q[2] = af;
            var P = [b.create(), b.create(), b.create()];
            P[0][0] = aa[0];
            P[0][1] = aa[1];
            P[0][2] = aa[2];
            P[1][0] = aa[4];
            P[1][1] = aa[5];
            P[1][2] = aa[6];
            P[2][0] = aa[8];
            P[2][1] = aa[9];
            P[2][2] = aa[10];
            ag[0] = b.length(P[0]);
            b.normalize(P[0], P[0]);
            N[0] = b.dot(P[0], P[1]);
            P[1] = o(P[1], P[0], 1, -N[0]);
            ag[1] = b.length(P[1]);
            b.normalize(P[1], P[1]);
            N[0] /= ag[1];
            N[1] = b.dot(P[0], P[2]);
            P[2] = o(P[2], P[0], 1, -N[1]);
            N[2] = b.dot(P[1], P[2]);
            P[2] = o(P[2], P[1], 1, -N[2]);
            ag[2] = b.length(P[2]);
            b.normalize(P[2], P[2]);
            N[1] /= ag[2];
            N[2] /= ag[2];
            var Z = b.cross(b.create(), P[1], P[2]);
            if (b.dot(P[0], Z) < 0) {
                for (ac = 0; ac < 3;
                     ac++) {
                    ag[ac] *= -1;
                    P[ac][0] *= -1;
                    P[ac][1] *= -1;
                    P[ac][2] *= -1
                }
            }
            L[0] = 0.5 * Math.sqrt(Math.max(1 + P[0][0] - P[1][1] - P[2][2], 0));
            L[1] = 0.5 * Math.sqrt(Math.max(1 - P[0][0] + P[1][1] - P[2][2], 0));
            L[2] = 0.5 * Math.sqrt(Math.max(1 - P[0][0] - P[1][1] + P[2][2], 0));
            L[3] = 0.5 * Math.sqrt(Math.max(1 + P[0][0] + P[1][1] + P[2][2], 0));
            if (P[2][1] > P[1][2]) {
                L[0] = -L[0]
            }
            if (P[0][2] > P[2][0]) {
                L[1] = -L[1]
            }
            if (P[1][0] > P[0][1]) {
                L[2] = -L[2]
            }
            var K = a.fromValues(L[0], L[1], L[2], 2 * Math.acos(L[3]));
            var X = p(L);
            if (V) {
                N[0] = Math.round(N[0] * d * 100) / 100;
                N[1] = Math.round(N[1] * d * 100) / 100;
                N[2] = Math.round(N[2] * d * 100) / 100;
                X[0] = Math.round(X[0] * d * 100) / 100;
                X[1] = Math.round(X[1] * d * 100) / 100;
                X[2] = Math.round(X[2] * d * 100) / 100;
                K[3] = Math.round(K[3] * d * 100) / 100
            }
            return {translation: Q, scale: ag, skew: N, perspective: S, quaternion: L, eulerRotation: X, axisAngle: K}
        };
        var o = function o(L, O, N, M) {
            var K = b.create();
            K[0] = N * L[0] + M * O[0];
            K[1] = N * L[1] + M * O[1];
            K[2] = N * L[2] + M * O[2];
            return K
        };
        var p = function p(K) {
            var O = K[3] * K[3];
            var N = K[0] * K[0];
            var M = K[1] * K[1];
            var L = K[2] * K[2];
            var T = N + M + L + O;
            var P = K[0] * K[1] + K[2] * K[3];
            var S, R, Q;
            if (P > 0.499 * T) {
                R = 2 * Math.atan2(K[0], K[3]);
                Q = Math.PI / 2;
                S = 0;
                return b.fromValues(S, R, Q)
            }
            if (P < -0.499 * T) {
                R = -2 * Math.atan2(K[0], K[3]);
                Q = -Math.PI / 2;
                S = 0;
                return b.fromValues(S, R, Q)
            }
            R = Math.atan2(2 * K[1] * K[3] - 2 * K[0] * K[2], N - M - L + O);
            Q = Math.asin(2 * P / T);
            S = Math.atan2(2 * K[0] * K[3] - 2 * K[1] * K[2], -N + M - L + O);
            return b.fromValues(S, R, Q)
        };
        var q = function q(K) {
            return Math.abs(K) < 0.0001
        };
        var n = function n(N) {
            var L = String(getComputedStyle(N).transform).trim();
            var K = l.create();
            if (L === "none") {
                return K
            }
            var O = L.slice(0, L.indexOf("(")), P, M;
            if (O === "matrix3d") {
                P = L.slice(9, -1).split(",");
                for (M = 0; M < P.length; M++) {
                    K[M] = parseFloat(P[M])
                }
            } else {
                if (O === "matrix") {
                    P = L.slice(7, -1).split(",");
                    for (M = P.length; M--;) {
                        P[M] = parseFloat(P[M])
                    }
                    K[H] = P[0];
                    K[F] = P[1];
                    K[I] = P[4];
                    K[k] = P[2];
                    K[j] = P[3];
                    K[G] = P[5]
                } else {
                    throw new TypeError("Invalid Matrix Value")
                }
            }
            return K
        };
        f.exports = function (M, L) {
            var K = n(M);
            return c(K, L)
        }
    }, {
        "gl-mat4/clone": 530,
        "gl-mat4/create": 531,
        "gl-mat4/invert": 532,
        "gl-mat4/transpose": 533,
        "gl-vec3/create": 534,
        "gl-vec3/cross": 535,
        "gl-vec3/dot": 536,
        "gl-vec3/fromValues": 537,
        "gl-vec3/length": 538,
        "gl-vec3/normalize": 539,
        "gl-vec4/create": 540,
        "gl-vec4/fromValues": 541,
        "gl-vec4/transformMat4": 542
    }],
    530: [function (b, c, a) {
        arguments[4][78][0].apply(a, arguments)
    }, {dup: 78}],
    531: [function (b, c, a) {
        arguments[4][79][0].apply(a, arguments)
    }, {dup: 79}],
    532: [function (b, c, a) {
        arguments[4][82][0].apply(a, arguments)
    }, {dup: 82}],
    533: [function (b, c, a) {
        arguments[4][90][0].apply(a, arguments)
    }, {dup: 90}],
    534: [function (b, c, a) {
        arguments[4][91][0].apply(a, arguments)
    }, {dup: 91}],
    535: [function (b, c, a) {
        arguments[4][92][0].apply(a, arguments)
    }, {dup: 92}],
    536: [function (b, c, a) {
        arguments[4][93][0].apply(a, arguments)
    }, {dup: 93}],
    537: [function (b, c, a) {
        arguments[4][94][0].apply(a, arguments)
    }, {dup: 94}],
    538: [function (b, c, a) {
        arguments[4][95][0].apply(a, arguments)
    }, {dup: 95}],
    539: [function (b, c, a) {
        arguments[4][96][0].apply(a, arguments)
    }, {dup: 96}],
    540: [function (b, c, a) {
        arguments[4][97][0].apply(a, arguments)
    }, {dup: 97}],
    541: [function (b, c, a) {
        arguments[4][98][0].apply(a, arguments)
    }, {dup: 98}],
    542: [function (b, c, a) {
        arguments[4][99][0].apply(a, arguments)
    }, {dup: 99}],
    543: [function (c, b, f) {
        var l = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var g = c("@marcom/sm-math-utils");
        var j = c("./Model/AnimSystemModel");
        var h = c("./Model/ElementMetricsLookup");
        var o = c("./Keyframes/AnimatedContentKeyframe");
        var a = c("./Keyframes/AnimatedContentKeyframeTrigger");
        var n = c("./Keyframes/AnimatedContentKeyframeEvent");
        var d = c("./Utils/BaseComponentShim");
        var m = c("./AnimatedContentController");
        var k = {
            create: c("@marcom/ac-raf-emitter/RAFEmitter"),
            update: c("@marcom/ac-raf-emitter/update"),
            draw: c("@marcom/ac-raf-emitter/draw")
        };
        var i = function (s) {
            _inherits(H, s);

            function H(I) {
                _classCallCheck(this, H);
                var J = _possibleConstructorReturn(this, (H.__proto__ || Object.getPrototypeOf(H)).call(this));
                if (I instanceof HTMLElement) {
                    J.element = I
                } else {
                    if (arguments.length > 1) {
                        d.make(J, arguments)
                    } else {
                        throw new TypeError("Cannot invalid constructor. Attach anim systems to the containing elements.")
                    }
                }
                H.StaticInit();
                J.isEnabled = true;
                J.timelines = new j.Timeline();
                J.oldValues = new j.Timeline();
                J.metrics = new h();
                J.metrics.add(J.element);
                J.boundsMin = 0;
                J.boundsMax = 0;
                J.lastPosition = 0;
                J.keyFrames = new j.KeyFrames(J.metrics.get(J.element), j.pageMetrics.windowHeight);
                J.animatedContentControllers = [];
                J.setupRAFEmitter();
                J.setupAnimatedContent();
                J.updateProgress(j.pageMetrics.scrollY);
                J.gui = null;
                if (H.GUI_CLASS && H.GUI_CLASS.IS_ENABLED) {
                    H.GUI_CLASS.REGISTER(J)
                }
                H.systems.push(J);
                return J
            }

            _createClass(H, [{
                key: "destroy", value: function F() {
                    for (var J = 0, I = this.animatedContentControllers.length;
                         J < I; J++) {
                        this.animatedContentControllers[J].destroy()
                    }
                    this.timelines = null;
                    this.keyFrames = null;
                    this.oldValues = null;
                    _get(H.prototype.__proto__ || Object.getPrototypeOf(H.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setupAnimatedContent", value: function t() {
                    var O = this;
                    var J = [];
                    [o.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE, n.DATA_ATTRIBUTE].forEach(function (Q) {
                        for (var R = 0;
                             R < 12; R++) {
                            J.push(Q + (R === 0 ? "" : "-" + (R - 1)))
                        }
                    });
                    for (var N = 0; N < J.length; N++) {
                        var L = J[N];
                        var P = this.element.querySelectorAll("[" + L + "]");
                        for (var K = 0; K < P.length; K++) {
                            var M = P[K];
                            var I = this.getControllerForElement(M);
                            if (I === null) {
                                I = new m(this, M, this.animatedContentControllers.length);
                                this.animatedContentControllers.push(I)
                            }
                            I.addKeyframe(L)
                        }
                    }
                    k.update(function () {
                        for (var R = 0, Q = O.animatedContentControllers.length;
                             R < Q; R++) {
                            O.animatedContentControllers[R].determineActiveKeyframes();
                            O.animatedContentControllers[R].updateAnimationConstraints()
                        }
                        O.updateProgress(j.pageMetrics.scrollY);
                        O.updateBounds();
                        O.trigger(j.EVENTS.ON_KEYFRAMES_CREATED, O);
                        O._onScroll(j.pageMetrics.scrollY)
                    })
                }
            }, {
                key: "updateBounds", value: function A() {
                    if (this.animatedContentControllers.length === 0) {
                        this.boundsMin = 0;
                        this.boundsMax = 0.1;
                        return
                    }
                    var K = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
                    for (var L = 0, I = this.animatedContentControllers.length; L < I; L++) {
                        this.animatedContentControllers[L].getBounds(K)
                    }
                    var M = this.convertTValueToScrollPosition(K.min);
                    var J = this.convertTValueToScrollPosition(K.max);
                    if (J - M < j.pageMetrics.windowHeight) {
                        K.min = this.convertScrollPositionToTValue(M - j.pageMetrics.windowHeight * 0.5);
                        K.max = this.convertScrollPositionToTValue(J + j.pageMetrics.windowHeight * 0.5)
                    } else {
                        K.min -= 0.001;
                        K.max += 0.001
                    }
                    this.boundsMin = K.min;
                    this.boundsMax = K.max;
                    this.lastPosition = g.lerp(Math.random(), this.boundsMin, this.boundsMax)
                }
            }, {
                key: "_onBreakpointChange", value: function E(L, K) {
                    for (var J = 0, I = this.animatedContentControllers.length;
                         J < I; J++) {
                        this.animatedContentControllers[J].determineActiveKeyframes()
                    }
                }
            }, {
                key: "_onResizeDebounced", value: function G(J) {
                    if (!this.isEnabled) {
                        return
                    }
                    this.metrics.refreshAll();
                    this.keyFrames = new j.KeyFrames(this.metrics.get(this.element), j.pageMetrics.windowHeight);
                    this.updateProgress(j.pageMetrics.scrollY);
                    if (!this.hasDuration()) {
                        return
                    }
                    for (var K = 0, I = this.animatedContentControllers.length;
                         K < I; K++) {
                        this.animatedContentControllers[K].updateAnimationConstraints()
                    }
                    this.updateBounds();
                    if (this.gui !== null) {
                        this.gui.onResizeDebounced()
                    }
                    if (J) {
                        this.timelines.local = this.timelines.localUnclamped = g.randFloat(this.boundsMin, this.boundsMax)
                    }
                    if (this.timelines.localUnclamped >= this.boundsMin && this.timelines.localUnclamped <= this.boundsMax) {
                        this.oldValues.local = -Math.random();
                        this._onScroll(j.pageMetrics.scrollY)
                    }
                }
            }, {
                key: "updateProgress", value: function v(I) {
                    if (!this.hasDuration()) {
                        this.timelines.local = this.timelines.localUnclamped = 0;
                        return
                    }
                    this.timelines.localUnclamped = g.map(I, this.keyFrames.a, this.keyFrames.d, 0, 1)
                }
            }, {
                key: "performTimelineDispatch", value: function z() {
                    if (this.oldValues.local !== this.timelines.local) {
                        this.trigger(j.EVENTS.ON_UPDATE_T_LOCAL, this.timelines);
                        for (var J = 0, I = this.animatedContentControllers.length; J < I; J++) {
                            this.animatedContentControllers[J].onScrollUpdate(this.timelines)
                        }
                    }
                    this.oldValues.local = this.timelines.local
                }
            }, {
                key: "_onScroll", value: function x(I) {
                    if (!this.isEnabled) {
                        return false
                    }
                    this.updateProgress(I);
                    if (this.timelines.localUnclamped >= this.boundsMin && this.timelines.localUnclamped <= this.boundsMax) {
                        this.timelines.local = g.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax);
                        this.lastPosition = this.timelines.localUnclamped;
                        this.performTimelineDispatch();
                        this.requestDOMChange();
                        return
                    }
                    var J = this.lastPosition === this.boundsMin || this.lastPosition === this.boundsMax;
                    if (J) {
                        return
                    }
                    var L = this.lastPosition > this.boundsMin && this.lastPosition < this.boundsMax;
                    var K = this.timelines.localUnclamped < this.boundsMin || this.timelines.localUnclamped > this.boundsMax;
                    if (L && K) {
                        this.timelines.local = g.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax);
                        this.lastPosition = this.timelines.localUnclamped;
                        this.performTimelineDispatch();
                        this.requestDOMChange();
                        return
                    }
                    if (this.gui !== null) {
                    }
                }
            }, {
                key: "setupRAFEmitter", value: function D() {
                    this._rafEmitter = new k.create();
                    this.onDOMRead = this.onDOMRead.bind(this);
                    this.onDOMWrite = this.onDOMWrite.bind(this);
                    this._rafEmitter.on("update", this.onDOMRead);
                    this._rafEmitter.on("draw", this.onDOMWrite)
                }
            }, {
                key: "requestDOMChange", value: function y() {
                    if (!this.isEnabled) {
                        return false
                    }
                    if (!this._rafEmitter) {
                        this.setupRAFEmitter()
                    }
                    return this._rafEmitter.run()
                }
            }, {
                key: "onDOMRead", value: function w() {
                    for (var J = 0, I = this.animatedContentControllers.length;
                         J < I; J++) {
                        this.animatedContentControllers[J].onDOMRead(this.timelines)
                    }
                }
            }, {
                key: "onDOMWrite", value: function p() {
                    for (var J = 0, I = this.animatedContentControllers.length;
                         J < I; J++) {
                        this.animatedContentControllers[J].onDOMWrite(this.timelines)
                    }
                    if (this.needsUpdate()) {
                        this.requestDOMChange()
                    }
                }
            }, {
                key: "needsUpdate", value: function u() {
                    for (var J = 0, I = this.animatedContentControllers.length;
                         J < I; J++) {
                        if (this.animatedContentControllers[J].needsUpdate()) {
                            return true
                        }
                    }
                    return false
                }
            }, {
                key: "getControllerForElement", value: function q(K) {
                    for (var J = 0, I = this.animatedContentControllers.length;
                         J < I; J++) {
                        if (this.animatedContentControllers[J].element === K) {
                            return this.animatedContentControllers[J]
                        }
                    }
                    return null
                }
            }, {
                key: "convertScrollPositionToTValue", value: function B(I) {
                    if (!this.hasDuration()) {
                        return 0
                    }
                    return g.map(I, this.keyFrames.a, this.keyFrames.d, 0, 1)
                }
            }, {
                key: "convertTValueToScrollPosition", value: function C(I) {
                    if (!this.hasDuration()) {
                        return 0
                    }
                    return g.map(I, 0, 1, this.keyFrames.a, this.keyFrames.d)
                }
            }, {
                key: "hasDuration", value: function r() {
                    return this.keyFrames.a !== this.keyFrames.d
                }
            }]);
            return H
        }(l);
        i.GUI_CLASS = null;
        i.systems = [];
        i.onScroll = function () {
            j.pageMetrics.scrollY = window.scrollY || window.pageYOffset;
            for (var q = 0, p = i.systems.length; q < p; q++) {
                i.systems[q]._onScroll(j.pageMetrics.scrollY)
            }
        };
        i.onResizedDebounced = function () {
            k.update(function () {
                var t = j.pageMetrics.breakpoint;
                var v = j.getBreakpoint();
                if (v !== t) {
                    j.DOCUMENT_ELEMENT_CLASSES = Array.from(document.documentElement.classList);
                    j.pageMetrics.breakpoint = v;
                    for (var s = 0, q = i.systems.length; s < q; s++) {
                        i.systems[s]._onBreakpointChange(v, t)
                    }
                }
                var p = v !== t;
                for (var u = 0, r = i.systems.length; u < r; u++) {
                    i.systems[u]._onResizeDebounced(p)
                }
            })
        };
        i.INITIALIZED = false;
        i.StaticInit = function () {
            if (i.INITIALIZED) {
                return
            }
            i.INITIALIZED = true;
            j.DOCUMENT_ELEMENT_CLASSES = Array.from(document.documentElement.classList);
            j.pageMetrics.windowHeight = window.innerHeight;
            j.pageMetrics.windowWidth = window.innerWidth;
            j.pageMetrics.scrollY = window.scrollY || window.pageYOffset;
            j.pageMetrics.breakpoint = j.getBreakpoint();
            window.addEventListener("resize", function () {
                j.pageMetrics.windowHeight = window.innerHeight;
                j.pageMetrics.windowWidth = window.innerWidth;
                j.pageMetrics.scrollY = window.scrollY || window.pageYOffset;
                window.clearTimeout(j.RESIZE_TIMEOUT);
                j.RESIZE_TIMEOUT = window.setTimeout(i.onResizedDebounced, 250)
            });
            window.addEventListener("scroll", i.onScroll);
            try {
                var q = c("@marcom/ac-jetpack-lib/utils/Page");
                q.on(q.DEEP_REFRESH_ALL_METRICS, i.onResizedDebounced)
            } catch (p) {
            }
        };
        b.exports = i
    }, {
        "./AnimatedContentController": 544,
        "./Keyframes/AnimatedContentKeyframe": 545,
        "./Keyframes/AnimatedContentKeyframeEvent": 546,
        "./Keyframes/AnimatedContentKeyframeTrigger": 547,
        "./Model/AnimSystemModel": 548,
        "./Model/ElementMetricsLookup": 550,
        "./Utils/BaseComponentShim": 555,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-jetpack-lib/utils/Page": 557,
        "@marcom/ac-raf-emitter/RAFEmitter": 514,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/sm-math-utils": 556
    }],
    544: [function (d, b, f) {
        var i = d("./Model/AnimSystemModel");
        var o = d("./Keyframes/AnimatedContentKeyframe");
        var a = d("./Keyframes/AnimatedContentKeyframeTrigger");
        var m = d("./Keyframes/AnimatedContentKeyframeEvent");
        var h = d("./Parsing/ExpressionParser");
        var g = d("./Parsing/TimeParser");
        var l = d("./Model/UUID");
        var n = d("@marcom/decompose-css-transform");
        var j = {
            update: d("@marcom/ac-raf-emitter/update"),
            external: d("@marcom/ac-raf-emitter/external"),
            draw: d("@marcom/ac-raf-emitter/draw")
        };

        function k(p, q) {
            this.animSystem = p;
            this.element = q;
            this.element._animController = this;
            this.uuid = l();
            this.element._animationInfo = {
                x: new i.TargetValue(0, 0.05, false),
                y: new i.TargetValue(0, 0.05, false),
                rotation: new i.TargetValue(0, 0.05, false),
                scale: new i.TargetValue(0, 0.05, false),
                scaleX: new i.TargetValue(0, 0.05, false),
                scaleY: new i.TargetValue(0, 0.05, false),
                opacity: new i.TargetValue(0, 0.05, false),
                targetStyles: {},
                targetClasses: {add: [], remove: []}
            };
            this.eventObject = new i.EventObject(this, new o(this, "--fake--"));
            this.needsStyleUpdate = false;
            this.needsClassUpdate = false;
            this.elementMetrics = this.animSystem.metrics.add(this.element);
            this._parentElementMetrics = null;
            this.expressionParser = new h(this);
            this.timeParser = new g(this);
            this.attributes = [];
            this.keyframes = {};
            this._allKeyframes = [];
            this._activeKeyframes = [];
            this.keyframesRequiringDispatch = [];
            this.updateCachedValuesFromElement();
            this.onKeyframesCreated = this.onKeyframesCreated.bind(this);
            this.animSystem.on(i.EVENTS.ON_KEYFRAMES_CREATED, this.onKeyframesCreated)
        }

        k.prototype.constructor = k;
        k.prototype.destroy = function () {
            this.element._animController = null;
            this.element._animationInfo = null;
            this.eventObject.controller = null;
            this.eventObject.element = null;
            this.eventObject.keyframe = null;
            this.eventObject.animationInfo = null;
            this.elementMetrics.destroy();
            this.animSystem.off(i.EVENTS.ON_KEYFRAMES_CREATED, this.onKeyframesCreated);
            this.animSystem = null;
            for (var p = 0; p < this._allKeyframes.length; p++) {
                this._allKeyframes[p].destroy()
            }
            this._allKeyframes = null;
            this._activeKeyframes = null;
            this.attributes = null;
            this.keyframes = null;
            this.expressionParser.destroy();
            this.expressionParser = null;
            this.timeParser.destroy();
            this.timeParser = null
        };
        k.prototype.updateCachedValuesFromElement = function () {
            var q = getComputedStyle(this.element);
            var p = n(this.element, true);
            this.element._animationInfo.x.initialValue = this.element._animationInfo.x.target = this.element._animationInfo.x.current = p.translation[0];
            this.element._animationInfo.y.initialValue = this.element._animationInfo.y.target = this.element._animationInfo.y.current = p.translation[1];
            this.element._animationInfo.rotation.initialValue = this.element._animationInfo.rotation.target = this.element._animationInfo.rotation.current = p.eulerRotation[2];
            this.element._animationInfo.scale.initialValue = this.element._animationInfo.scale.target = this.element._animationInfo.scale.current = p.scale[0];
            this.element._animationInfo.scaleX.initialValue = this.element._animationInfo.scaleX.target = this.element._animationInfo.scaleX.current = p.scale[0];
            this.element._animationInfo.scaleY.initialValue = this.element._animationInfo.scaleY.target = this.element._animationInfo.scaleY.current = p.scale[1];
            this.element._animationInfo.opacity.initialValue = this.element._animationInfo.opacity.target = this.element._animationInfo.opacity.current = parseFloat(q.opacity)
        };
        k.prototype.addKeyframe = function (p) {
            var q = null;
            if (p.indexOf(o.DATA_ATTRIBUTE) !== -1) {
                q = new o(this, p)
            } else {
                if (p.indexOf(m.DATA_ATTRIBUTE) !== -1) {
                    q = new m(this, p)
                } else {
                    if (p.indexOf(a.DATA_ATTRIBUTE) !== -1) {
                        q = new a(this, p)
                    }
                }
            }
            if (!q) {
                throw new Error("Cannot create keyframe for type `" + p + "`")
            }
            q.parseOptions(q.jsonProps);
            q.id = this._allKeyframes.length;
            this._allKeyframes.push(q)
        };
        k.prototype.needsUpdate = function () {
            for (var r = 0, p = this.attributes.length;
                 r < p; r++) {
                var q = this.attributes[r];
                var s = this.element._animationInfo[q];
                var t = Math.abs(s.current - s.target);
                if (t > s.epsilon) {
                    return true
                }
            }
            return false
        };
        k.prototype.onScrollUpdate = function (t) {
            for (var s = 0, p = this.attributes.length;
                 s < p; s++) {
                var q = this.attributes[s];
                var u = this.keyframes[this.attributes[s]];
                if (u.length === 1) {
                    u[0].onScrollUpdate(t.local);
                    continue
                }
                var r = this.getNearestKeyframeForAttribute(t.local, q, true);
                if (r) {
                    r.onScrollUpdate(t.local)
                }
            }
        };
        k.prototype.onKeyframesCreated = function (q) {
            for (var t = 0, p = this.attributes.length;
                 t < p; t++) {
                var r = this.attributes[t];
                var s = this.getNearestKeyframeForAttribute(q.timelines.local, r, true);
                if (s) {
                    s.onScrollUpdate(q.timelines.local);
                    if (this.element._animationInfo[r].snapAtCreation) {
                        s.reconcile(r)
                    }
                }
            }
        };
        k.prototype.determineActiveKeyframes = function () {
            var v = this;
            var q = this._activeKeyframes;
            var u = this.attributes;
            this._activeKeyframes = [];
            this.attributes = [];
            this.keyframes = {};
            for (var s = 0; s < this._allKeyframes.length; s++) {
                var r = this._allKeyframes[s];
                if (!r.setEnabled()) {
                    continue
                }
                this._activeKeyframes.push(r);
                for (var w in r.animValues) {
                    this.keyframes[w] = this.keyframes[w] || [];
                    this.keyframes[w].push(r);
                    if (this.attributes.indexOf(w) === -1) {
                        this.attributes.push(w)
                    }
                }
            }
            var t = q.filter(function (x) {
                return v._activeKeyframes.indexOf(x) === -1
            });
            if (t.length === 0) {
                return
            }
            var p = u.filter(function (x) {
                return v.attributes.indexOf(x) === -1
            });
            if (p.length == 0) {
                return
            }
            j.external(function () {
                var y = ["x", "y", "scale", "scaleX", "scaleY", "rotation"];
                var C = p.filter(function (G) {
                    return y.indexOf(G) !== -1
                });
                if (C.length !== -1) {
                    v.element.style.removeProperty("transform")
                }
                for (var F = 0, A = p.length;
                     F < A; ++F) {
                    var B = p[F];
                    var z = v.element._animationInfo[B];
                    z.current = z.target = z.initialValue;
                    if (B === "opacity") {
                        v.element.style.removeProperty("opacity")
                    }
                }
                for (var E = 0, x = t.length;
                     E < x; ++E) {
                    var D = t[E];
                    if (!(D instanceof a)) {
                        continue
                    }
                    D._unapply()
                }
            })
        };
        k.prototype.onDOMRead = function (t) {
            for (var s = 0, p = this.attributes.length;
                 s < p; s++) {
                var q = this.attributes[s];
                var r = this.getNearestKeyframeForAttribute(t.local, q, true);
                if (r) {
                    r.onDOMRead(q)
                }
            }
        };
        k.prototype.onDOMWrite = function (r) {
            var t = this.element._animationInfo;
            var q = "";
            if (typeof this.keyframes.rotation !== "undefined") {
                q += "rotate(" + t.rotation.current + "deg) "
            }
            if (typeof this.keyframes.scale !== "undefined") {
                q += "scale(" + t.scale.current + "," + t.scale.current + ") "
            } else {
                var w = typeof this.keyframes.scaleX !== "undefined";
                var v = typeof this.keyframes.scaleY !== "undefined";
                if (w || v) {
                    q += "scale(" + t.scaleX.current + "," + t.scaleY.current + ") "
                }
            }
            if (typeof this.keyframes.y !== "undefined" || typeof this.keyframes.x !== "undefined") {
                q += "translate(" + t.x.current + "px," + t.y.current + "px)"
            }
            if (q !== "") {
                this.element.style.transform = q
            }
            if (typeof this.keyframes.opacity !== "undefined") {
                this.element.style.opacity = t.opacity.current
            }
            if (this.needsStyleUpdate) {
                for (var p in this.element._animationInfo.targetStyles) {
                    if (this.element._animationInfo.targetStyles[p] !== null) {
                        this.element.style[p] = this.element._animationInfo.targetStyles[p]
                    }
                    this.element._animationInfo.targetStyles[p] = null
                }
                this.needsStyleUpdate = false
            }
            if (this.needsClassUpdate) {
                if (this.element._animationInfo.targetClasses.add.length > 0) {
                    this.element.classList.add.apply(this.element.classList, this.element._animationInfo.targetClasses.add)
                }
                if (this.element._animationInfo.targetClasses.remove.length > 0) {
                    this.element.classList.remove.apply(this.element.classList, this.element._animationInfo.targetClasses.remove)
                }
                this.element._animationInfo.targetClasses.add.length = 0;
                this.element._animationInfo.targetClasses.remove.length = 0;
                this.needsClassUpdate = false
            }
            if (this.keyframesRequiringDispatch.length === 0) {
                return
            }
            for (var s = 0, u = this.keyframesRequiringDispatch.length; s < u; s++) {
                var x = this.keyframesRequiringDispatch[s];
                x.needsEventDispatch = false;
                this.eventObject.keyframe = x;
                this.eventObject.event = x.event;
                this.animSystem.trigger(x.event, this.eventObject)
            }
            this.keyframesRequiringDispatch.length = 0
        };
        k.prototype.updateAnimationConstraints = function () {
            var t = this;
            for (var s = 0, p = this.attributes.length;
                 s < p; s++) {
                var u = this.keyframes[this.attributes[s]];
                for (var q = 0; q < u.length; q++) {
                    var r = u[q];
                    r.updateAnimationConstraints(r.jsonProps)
                }
            }
            this.attributes.forEach(function (v) {
                if (t.keyframes[v].length === 1) {
                    return
                }
                t.keyframes[v].sort(i.KeyframeComparison)
            })
        };
        k.prototype.getBounds = function (t) {
            for (var s = 0, p = this.attributes.length;
                 s < p; s++) {
                var u = this.keyframes[this.attributes[s]];
                for (var q = 0; q < u.length; q++) {
                    var r = u[q];
                    t.min = Math.min(r.start, t.min);
                    t.max = Math.max(r.end, t.max)
                }
            }
        };
        k.prototype.getNearestKeyframeForAttribute = function (q, r, w) {
            var t = null;
            var y = Number.POSITIVE_INFINITY;
            var v = this.keyframes[r];
            var u = v.length;
            if (u === 0) {
                return null
            }
            if (u === 1) {
                return v[0]
            }
            for (var s = 0; s < u; s++) {
                var x = v[s];
                if (x.isInRange(q)) {
                    t = x;
                    break
                }
                var p = Number.POSITIVE_INFINITY;
                if (w) {
                    p = Math.min(Math.abs(q - x.start), Math.abs(q - x.end))
                } else {
                    p = Math.min(Math.abs(q - x.start), Math.abs(q - x.end))
                }
                if (p < y) {
                    y = p;
                    t = x
                }
            }
            return t
        };
        k.prototype.getAllKeyframesForAttribute = function (p) {
            return this.keyframes[p]
        };
        k.prototype.updateAnimation = function (r, q) {
            var p = this;
            r.parseOptions(q);
            r.updateAnimationConstraints();
            this.animSystem.updateBounds();
            this.animSystem._onScroll(i.pageMetrics.scrollY);
            this.onScrollUpdate(this.animSystem.timelines);
            this.animSystem.requestDOMChange();
            j.update(function () {
                p.animSystem.trigger(i.EVENTS.ON_KEYFRAME_UPDATED, r)
            })
        };
        Object.defineProperty(k.prototype, "parentElementMetrics", {
            get: function c() {
                if (this._parentElementMetrics === null) {
                    this._parentElementMetrics = this.animSystem.metrics.add(this.element.parentElement)
                }
                return this._parentElementMetrics
            }
        });
        b.exports = k
    }, {
        "./Keyframes/AnimatedContentKeyframe": 545,
        "./Keyframes/AnimatedContentKeyframeEvent": 546,
        "./Keyframes/AnimatedContentKeyframeTrigger": 547,
        "./Model/AnimSystemModel": 548,
        "./Model/UUID": 551,
        "./Parsing/ExpressionParser": 552,
        "./Parsing/TimeParser": 554,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/external": 520,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/decompose-css-transform": 529
    }],
    545: [function (f, g, c) {
        var a = f("../Model/AnimSystemModel");
        var b = f("@marcom/sm-math-utils");
        var h = f("../Model/EasingFunctions");

        function d(i, j) {
            this.controller = i;
            this.relativeTo = i.element;
            this.relativeToQS = "";
            this.attributeName = j;
            var k = this.controller.element.getAttribute(this.attributeName);
            this.jsonProps = k === null ? {} : JSON.parse(k);
            this.ease = a.KeyframeDefaults.ease;
            this.easeFunctionString = a.KeyframeDefaults.easeFunctionString;
            this.easeFunction = h[this.easeFunctionString];
            this.start = 0;
            this.end = 0;
            this.localT = 0;
            this.id = 0;
            this.event = "";
            this.needsEventDispatch = false;
            this.snapAtCreation = false;
            this.isEnabled = false;
            this.animValues = {};
            this.breakpointMask = "SMLX";
            this.disabledWhen = "";
            this.keyframeType = a.KeyframeTypes.Interpolation;
            this.hold = false
        }

        d.prototype.constructor = d;
        d.prototype.destroy = function () {
            this.controller = null;
            this.jsonProps = null;
            this.easeFunction = null;
            this.animValues = null
        };
        d.prototype.parseOptions = function (j) {
            if (j.relativeTo === "") {
                this.relativeTo = this.controller.element
            } else {
                if (j.relativeTo) {
                    this.relativeToQS = j.relativeTo;
                    this.relativeTo = this.controller.animSystem.element.querySelector(j.relativeTo);
                    if (this.relativeTo === null) {
                        console.warn("AnimatedContentKeyframe for", this, "failed to find 'relativeTo:" + j.relativeTo + "' setting to this.element");
                        this.relativeTo = this.controller.element
                    }
                    this.controller.animSystem.metrics.add(this.relativeTo)
                }
            }
            if (j.ease) {
                this.ease = parseFloat(j.ease)
            } else {
                j.ease = this.ease
            }
            if (j.snapAtCreation) {
                this.snapAtCreation = j.snapAtCreation
            } else {
                j.snapAtCreation = this.snapAtCreation
            }
            if (j.easeFunction) {
                this.easeFunction = j.easeFunction
            } else {
                j.easeFunction = this.easeFunctionString
            }
            if (j.breakpointMask) {
                this.breakpointMask = j.breakpointMask
            } else {
                j.breakpointMask = this.breakpointMask
            }
            if (j.disabledWhen) {
                this.disabledWhen = j.disabledWhen
            } else {
                j.disabledWhen = this.disabledWhen
            }
            if (j.hold) {
                this.hold = j.hold
            } else {
                j.hold = this.hold
            }
            if (!h.hasOwnProperty(j.easeFunction)) {
                console.error("AnimatedContentKeyframe parseOptions cannot find EasingFunction named '" + j.easingFunction + "'")
            }
            this.easeFunction = h[j.easeFunction];
            for (var k in j) {
                var l = j[k];
                if (a.KeyframeJSONReservedWords.indexOf(k) !== -1) {
                    continue
                }
                if (!Array.isArray(l)) {
                    continue
                }
                this.animValues[k] = this.controller.expressionParser.parse(this, l);
                if (this.controller.element._animationInfo[k] === undefined) {
                    var i = this.animValues[k][0];
                    this.controller.element._animationInfo[k] = new a.TargetValue(i, 0.01, this.snapAtCreation)
                }
            }
            this.keyframeType = this.hold ? a.KeyframeTypes.InterpolationForward : a.KeyframeTypes.Interpolation;
            if (j.event) {
                this.event = j.event
            }
        };
        d.prototype.onScrollUpdate = function (j) {
            if (this.start === this.end || j > this.end) {
                this.localT = 1;
                return
            }
            var i = this.hold ? this.localT : 0;
            this.localT = b.mapClamp(j, this.start, this.end, i, 1)
        };
        d.prototype.reconcile = function (j) {
            var k = this.easeFunction(this.localT);
            var l = this.animValues[j];
            var i = this.controller.element._animationInfo[j];
            i.target = l[0] + k * (l[1] - l[0]);
            if (i.current !== i.target) {
                i.current = i.target;
                if (!this.needsEventDispatch) {
                    this.needsEventDispatch = true;
                    this.controller.keyframesRequiringDispatch.push(this)
                }
            }
        };
        d.prototype.reset = function (k) {
            this.localT = k || 0;
            var i = this.ease;
            this.ease = 1;
            for (var j in this.animValues) {
                this.reconcile(j)
            }
            this.ease = i
        };
        d.prototype.onDOMRead = function (k) {
            var l = this.easeFunction(this.localT);
            var n = this.animValues[k];
            var j = this.controller.element._animationInfo[k];
            j.target = n[0] + l * (n[1] - n[0]);
            var i = j.current;
            j.current += (j.target - j.current) * this.ease;
            var m = j.current - j.target;
            if (m < j.epsilon && m > -j.epsilon) {
                j.current = j.target;
                m = 0
            }
            if (this.event === "" || this.needsEventDispatch) {
                return
            }
            if (m > j.epsilon || m < -j.epsilon || m === 0 && i !== j.current) {
                this.needsEventDispatch = true;
                this.controller.keyframesRequiringDispatch.push(this)
            }
        };
        d.prototype.isInRange = function (i) {
            return i >= this.start && i <= this.end
        };
        d.prototype.setEnabled = function () {
            var j = this.breakpointMask.indexOf(a.pageMetrics.breakpoint) !== -1;
            var i = false;
            if (this.disabledWhen !== "") {
                i = a.DOCUMENT_ELEMENT_CLASSES.indexOf(this.disabledWhen) !== -1
            }
            this.isEnabled = j && !i;
            return this.isEnabled
        };
        d.prototype.updateAnimationConstraints = function () {
            this.start = this.controller.timeParser.parse(this, this.jsonProps.start);
            this.end = this.controller.timeParser.parse(this, this.jsonProps.end);
            for (var i in this.animValues) {
                var j = this.jsonProps[i];
                this.animValues[i] = this.controller.expressionParser.parse(this, j)
            }
        };
        d.DATA_ATTRIBUTE = "data-animated-content";
        g.exports = d
    }, {"../Model/AnimSystemModel": 548, "../Model/EasingFunctions": 549, "@marcom/sm-math-utils": 556}],
    546: [function (d, f, b) {
        var c = d("./AnimatedContentKeyframe");
        var a = d("../Model/AnimSystemModel.js");
        var g = function (o) {
            _inherits(l, o);

            function l(p, r) {
                _classCallCheck(this, l);
                var q = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, p, r));
                q.keyframeType = a.KeyframeTypes.Event;
                q.isApplied = false;
                q.hasDuration = false;
                q.isCurrentlyInRange = false;
                return q
            }

            _createClass(l, [{
                key: "parseOptions", value: function k(p) {
                    p.x = undefined;
                    p.y = undefined;
                    p.scale = undefined;
                    p.scaleX = undefined;
                    p.scaleY = undefined;
                    p.rotation = undefined;
                    p.style = undefined;
                    p.cssClass = undefined;
                    p.rotation = undefined;
                    p.opacity = undefined;
                    p.hold = undefined;
                    if (p.end === undefined) {
                        p.end = p.start
                    }
                    this.event = p.event;
                    this.animValues[this.event] = [0, 0];
                    if (typeof this.controller.element._animationInfo[this.event] === "undefined") {
                        this.controller.element._animationInfo[this.event] = new a.TargetValue(0, 1, false)
                    }
                    _get(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "parseOptions", this).call(this, p);
                    this.keyframeType = a.KeyframeTypes.Event
                }
            }, {
                key: "onScrollUpdate", value: function n(r) {
                    if (this.hasDuration) {
                        var q = this.isCurrentlyInRange;
                        var p = r >= this.start && r <= this.end;
                        if (q === p) {
                            return
                        }
                        if (p && !q) {
                            this._trigger(this.event + ":enter")
                        } else {
                            if (q && !p) {
                                this._trigger(this.event + ":exit")
                            }
                        }
                        this.isCurrentlyInRange = p;
                        return
                    }
                    if (!this.isApplied && r > this.start) {
                        this._trigger(this.event);
                        this.isApplied = true
                    } else {
                        if (this.isApplied && r < this.start) {
                            this.isApplied = false
                        }
                    }
                }
            }, {
                key: "_trigger", value: function h(p) {
                    this.controller.eventObject.event = p;
                    this.controller.eventObject.keyframe = this;
                    this.controller.animSystem.trigger(p, this.controller.eventObject)
                }
            }, {
                key: "updateAnimationConstraints", value: function m() {
                    this.start = this.controller.timeParser.parse(this, this.jsonProps.start);
                    this.end = this.controller.timeParser.parse(this, this.jsonProps.end);
                    this.hasDuration = this.start !== this.end
                }
            }, {
                key: "onDOMRead", value: function j(p, q) {
                }
            }, {
                key: "reconcile", value: function i(p, q) {
                }
            }]);
            return l
        }(c);
        g.DATA_ATTRIBUTE = "data-trigger-event";
        f.exports = g
    }, {"../Model/AnimSystemModel.js": 548, "./AnimatedContentKeyframe": 545}],
    547: [function (d, f, b) {
        var c = d("./AnimatedContentKeyframe");
        var a = d("../Model/AnimSystemModel.js");

        function g(h, i) {
            c.call(this, h, i);
            this.keyframeType = a.KeyframeTypes.Trigger;
            this._triggerType = g.TRIGGER_TYPE_CSS_CLASS;
            this.cssClass = "";
            this.friendlyName = "";
            this.style = {on: null, off: null};
            this.toggle = false;
            this.isApplied = false
        }

        g.prototype = Object.create(c.prototype);
        g.prototype.constructor = g;
        g.prototype.parseOptions = function (i) {
            i.x = undefined;
            i.y = undefined;
            i.scale = undefined;
            i.scaleX = undefined;
            i.scaleY = undefined;
            i.rotation = undefined;
            i.opacity = undefined;
            i.hold = undefined;
            if (i.toggle !== undefined) {
                this.toggle = i.toggle
            }
            if (i.cssClass !== undefined) {
                this._triggerType = g.TRIGGER_TYPE_CSS_CLASS;
                this.cssClass = i.cssClass;
                this.friendlyName = "." + this.cssClass
            } else {
                if (i.style !== undefined && this.isValidStyleProperty(i.style)) {
                    this._triggerType = g.TRIGGER_TYPE_STYLE_PROPERTY;
                    this.style = i.style;
                    this.toggle = this.style.off !== undefined ? true : this.toggle;
                    if (this.toggle && this.style.off === undefined) {
                        this.style.off = {};
                        for (var k in this.style.on) {
                            this.style.off[k] = ""
                        }
                    }
                } else {
                    throw new TypeError("AnimatedContentKeyframeTrigger no 'cssClass` property found. If using `style` property its also missing or invalid")
                }
            }
            if (i.end === undefined) {
                i.end = i.start
            }
            if (this._triggerType === g.TRIGGER_TYPE_CSS_CLASS) {
                this.isApplied = this.controller.element.classList.contains(this.cssClass)
            } else {
                var h = getComputedStyle(this.controller.element);
                this.isApplied = true;
                for (var j in this.style.on) {
                    if (h[j] !== this.style.on[j]) {
                        this.isApplied = false;
                        break
                    }
                }
            }
            c.prototype.parseOptions.call(this, i);
            this.animValues[this.friendlyName] = [0, 0];
            if (this.controller.element._animationInfo[this.friendlyName] === undefined) {
                this.controller.element._animationInfo[this.friendlyName] = new a.TargetValue(0, 1, false)
            }
            this.keyframeType = a.KeyframeTypes.Trigger
        };
        g.prototype.onScrollUpdate = function (h) {
            if (this.isApplied && !this.toggle) {
                return
            }
            if (this.start !== this.end) {
                if (!this.isApplied && h > this.start && h < this.end) {
                    this._apply()
                } else {
                    if (this.isApplied && this.toggle && (h < this.start || h > this.end)) {
                        this._unapply()
                    }
                }
            } else {
                if (!this.isApplied && h > this.start) {
                    this._apply()
                } else {
                    if (this.isApplied && this.toggle && h < this.start) {
                        this._unapply()
                    }
                }
            }
        };
        g.prototype._apply = function () {
            if (this._triggerType === g.TRIGGER_TYPE_CSS_CLASS) {
                this.controller.element._animationInfo.targetClasses.add.push(this.cssClass);
                this.controller.needsClassUpdate = true
            } else {
                for (var h in this.style.on) {
                    this.controller.element._animationInfo.targetStyles[h] = this.style.on[h]
                }
                this.controller.needsStyleUpdate = true
            }
            this.isApplied = true
        };
        g.prototype._unapply = function () {
            if (this._triggerType === g.TRIGGER_TYPE_CSS_CLASS) {
                this.controller.element._animationInfo.targetClasses.remove.push(this.cssClass);
                this.controller.needsClassUpdate = true
            } else {
                for (var h in this.style.off) {
                    this.controller.element._animationInfo.targetStyles[h] = this.style.off[h]
                }
                this.controller.needsStyleUpdate = true
            }
            this.isApplied = false
        };
        g.prototype.updateAnimationConstraints = function () {
            this.start = this.controller.timeParser.parse(this, this.jsonProps.start);
            this.end = this.controller.timeParser.parse(this, this.jsonProps.end)
        };
        g.prototype.isValidStyleProperty = function (h) {
            if (!h.hasOwnProperty("on")) {
                return false
            }
            if (_typeof(h.on) !== "object") {
                throw new TypeError("AnimatedContentKeyframeTrigger `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}")
            }
            if (this.toggle && h.hasOwnProperty("off") && _typeof(h.off) !== "object") {
                throw new TypeError("AnimatedContentKeyframeTrigger `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}")
            }
            return true
        };
        g.prototype.reconcile = function (h, i) {
        };
        g.prototype.onDOMRead = function (h, i) {
        };
        g.TRIGGER_TYPE_CSS_CLASS = 0;
        g.TRIGGER_TYPE_STYLE_PROPERTY = 1;
        g.DATA_ATTRIBUTE = "data-trigger";
        f.exports = g
    }, {"../Model/AnimSystemModel.js": 548, "./AnimatedContentKeyframe": 545}],
    548: [function (d, b, f) {
        var k = {
            COMPONENT_NAME: "AnimSystem",
            DOCUMENT_ELEMENT_CLASSES: [],
            RESIZE_TIMEOUT: -1,
            BREAKPOINTS: [{name: "S", min: 0, max: 735, fullName: "small"}, {
                name: "M",
                min: 736,
                max: 1068,
                fullName: "medium"
            }, {name: "L", min: 1069, max: Number.POSITIVE_INFINITY, fullName: "large"}],
            getBreakpoint: function c() {
                for (var l = 0;
                     l < k.BREAKPOINTS.length; l++) {
                    var m = k.BREAKPOINTS[l];
                    if (k.pageMetrics.windowWidth <= m.max) {
                        return m.name
                    }
                }
                console.warn("AnimSystem Could not determine breakpoint via ViewportEmitter or internal reasonable defaults")
            },
            KeyframeDefaults: {
                ease: 0.1,
                easeFunctionString: "linear",
                easeFunction: "linear",
                relativeToQS: "",
                snapAtCreation: false,
                breakpointMask: "SMLX",
                cssClass: ""
            },
            KeyframeTypes: {Interpolation: 0, InterpolationForward: 1, Trigger: 2, Event: 3},
            EVENTS: {
                ON_CONSTRAINTS_UPDATED: "ON_CONSTRAINTS_UPDATED",
                ON_KEYFRAMES_CREATED: "ON_KEYFRAMES_CREATED",
                ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
                ON_UPDATE_T_LOCAL: "ON_UPDATE_T_LOCAL"
            },
            KeyframeJSONReservedWords: ["event", "relativeTo", "start", "end", "easeFunction", "easing", "breakpointMask"],
            TargetValue: function g(l, n, m) {
                this.epsilon = parseFloat(n);
                this.snapAtCreation = m;
                this.initialValue = l;
                this.target = 0;
                this.current = 0
            },
            Timeline: function h() {
                this.local = 0;
                this.localUnclamped = 0
            },
            KeyFrames: function i(l, m) {
                this.a = l.top - m;
                if (this.a < 0) {
                    this.a = l.top
                }
                this.b = l.top;
                this.d = l.bottom;
                this.c = Math.max(this.d - m, this.b)
            },
            pageMetrics: new function () {
                this.scrollY = 0;
                this.windowHeight = 0;
                this.windowWidth = 0;
                this.breakpoint = ""
            }(),
            EventObject: function j(l, m) {
                this.controller = l;
                this.element = this.controller.element;
                this.keyframe = m;
                this.event = "";
                this.animationInfo = this.element._animationInfo
            },
            KeyframeComparison: function a(m, l) {
                if (m.start < l.start) {
                    return -1
                } else {
                    if (m.start > l.start) {
                        return 1
                    }
                }
                return 0
            }
        };
        b.exports = k
    }, {}],
    549: [function (b, c, a) {
        var d = function d() {
            _classCallCheck(this, d);
            this.linear = function (f) {
                return f
            }, this.easeInQuad = function (f) {
                return f * f
            }, this.easeOutQuad = function (f) {
                return f * (2 - f)
            }, this.easeInOutQuad = function (f) {
                return f < 0.5 ? 2 * f * f : -1 + (4 - 2 * f) * f
            }, this.easeInCubic = function (f) {
                return f * f * f
            }, this.easeOutCubic = function (f) {
                return --f * f * f + 1
            }, this.easeInOutCubic = function (f) {
                return f < 0.5 ? 4 * f * f * f : (f - 1) * (2 * f - 2) * (2 * f - 2) + 1
            }, this.easeInQuart = function (f) {
                return f * f * f * f
            }, this.easeOutQuart = function (f) {
                return 1 - --f * f * f * f
            }, this.easeInOutQuart = function (f) {
                return f < 0.5 ? 8 * f * f * f * f : 1 - 8 * --f * f * f * f
            }, this.easeInQuint = function (f) {
                return f * f * f * f * f
            }, this.easeOutQuint = function (f) {
                return 1 + --f * f * f * f * f
            }, this.easeInOutQuint = function (f) {
                return f < 0.5 ? 16 * f * f * f * f * f : 1 + 16 * --f * f * f * f * f
            }
        };
        c.exports = new d()
    }, {}],
    550: [function (d, f, b) {
        var g = window.Symbol || function () {
            var h = 0;
            return function () {
                return ++h + ""
            }
        }();
        var a = function () {
            function h() {
                _classCallCheck(this, h);
                this._symbols = [];
                this._lut = {}
            }

            _createClass(h, [{
                key: "destroy", value: function k() {
                    for (var o = 0, n = this._symbols.length;
                         o < n; o++) {
                        var p = this._lut[this._symbols[o]];
                        p.el.__animSystemSymbol = null;
                        p.el = null
                    }
                    this._lut = null
                }
            }, {
                key: "add", value: function m(o) {
                    if (o.__animSystemSymbol === undefined) {
                        o.__animSystemSymbol = g()
                    }
                    if (this._lut[o.__animSystemSymbol] === undefined) {
                        var n = new c(o);
                        this._refreshMetrics(n);
                        this._lut[o.__animSystemSymbol] = n;
                        this._symbols.push(o.__animSystemSymbol)
                    }
                    return this._lut[o.__animSystemSymbol]
                }
            }, {
                key: "get", value: function i(n) {
                    return this._lut[n.__animSystemSymbol]
                }
            }, {
                key: "refreshAll", value: function j() {
                    for (var o = 0, n = this._symbols.length;
                         o < n; o++) {
                        var p = this._lut[this._symbols[o]];
                        this._refreshMetrics(p)
                    }
                }
            }, {
                key: "_refreshMetrics", value: function l(o) {
                    var n = o.el;
                    if (n.offsetWidth === undefined) {
                        var q = n.getBoundingClientRect();
                        o.width = q.width;
                        o.height = q.height;
                        o.top = window.pageYOffset + q.top;
                        o.left = window.pageXOffset + q.left;
                        o.right = o.left + o.width;
                        o.bottom = o.top + o.height;
                        return
                    }
                    o.width = n.offsetWidth;
                    o.height = n.offsetHeight;
                    o.top = 0;
                    o.left = 0;
                    var p = n;
                    while (p) {
                        o.top += p.offsetTop;
                        o.left += p.offsetLeft;
                        p = p.offsetParent
                    }
                    o.right = o.left + o.width;
                    o.bottom = o.top + o.height
                }
            }]);
            return h
        }();
        var c = function () {
            function h(k) {
                _classCallCheck(this, h);
                this.el = k;
                this.top = 0;
                this.bottom = 0;
                this.left = 0;
                this.right = 0;
                this.height = 0;
                this.width = 0
            }

            _createClass(h, [{
                key: "toString", value: function j() {
                    return "top:" + top + ", bottom:" + bottom + ", left:" + left + ", right:" + right + ", height:" + height + ", width:" + width
                }
            }, {
                key: "toObject", value: function i() {
                    return {
                        top: this.top,
                        bottom: this.bottom,
                        left: this.left,
                        right: this.right,
                        height: this.height,
                        width: this.width
                    }
                }
            }]);
            return h
        }();
        f.exports = a
    }, {}],
    551: [function (b, c, a) {
        c.exports = function d() {
            var f = "";
            for (var g = 0; g < 32; g++) {
                var h = Math.random() * 16 | 0;
                if (g === 8 || g === 12 || g === 16 || g === 20) {
                    f += "-"
                }
                f += (g === 12 ? 4 : g === 16 ? h & 3 | 8 : h).toString(16)
            }
            return f
        }
    }, {}],
    552: [function (d, f, b) {
        var a = d("../Model/AnimSystemModel");
        var g = d("./Operations");
        var i = /([-|\+])?(\d+\.?\d*)(px|vh|vw|pw|ph|\%w|\%h|rw|rh|\%)?|(-|\+|\*|\/)/g;
        var h = /(px|vh|vw|pw|ph|\%w|\%h|rw|rh|\%)/g;
        var c = function () {
            function q(s) {
                _classCallCheck(this, q);
                this.controller = s
            }

            _createClass(q, [{
                key: "parse", value: function m(s, t) {
                    if (Array.isArray(t)) {
                        return this.parseArray(s, t)
                    } else {
                        throw new Error("AnimatedContentKeyframe value `" + t + "` is not supported. Only arrays in the form of [start,end] are currently supported")
                    }
                }
            }, {
                key: "parseArray", value: function k(t, w) {
                    var x = 0;
                    var s = 0;
                    var v = w[0];
                    var u = w[1];
                    if (typeof v === "number") {
                        x = v
                    } else {
                        x = this.parseExpression(t, v)
                    }
                    if (typeof u === "number") {
                        s = u
                    } else {
                        s = this.parseExpression(t, u)
                    }
                    return [x, s]
                }
            }, {
                key: "parseExpression", value: function j(z, J) {
                    if (typeof J === "number") {
                        return J
                    }
                    var w = 5;
                    var t = void 0;
                    while ((t = J.indexOf("(")) !== -1 && --w > 0) {
                        var u = this.captureParenthesis(J, t);
                        var D = this.parseExpression(z, u);
                        J = J.replace("(" + u + ")", D)
                    }
                    var A = void 0;
                    var H = [];
                    while ((A = i.exec(J)) !== null) {
                        if (A.index === i.lastIndex) {
                            i.lastIndex++
                        }
                        if (A[4]) {
                            H.push(g.GetOpCode(A[4]))
                        } else {
                            var B = A[1];
                            var G = parseFloat(A[2]);
                            var F = A[3];
                            if (B === "-") {
                                G *= -1
                            }
                            var M = this.parseSplitUnit(z, G, F);
                            H.push(M)
                        }
                    }
                    var L = H.length;
                    if (L === 3) {
                        return H[1](H[0], H[2])
                    }
                    for (var x = 0; x < L; x++) {
                        if (typeof H[x] === "function" && H[x].priority === 1) {
                            var I = H[x - 1];
                            var y = H[x + 1];
                            var E = H[x](I, y);
                            H[x - 1] = null;
                            H[x + 0] = null;
                            H[x + 1] = E;
                            x += 1
                        }
                    }
                    var K = 0;
                    while (H[K] == null && K < L) {
                        K += 1
                    }
                    var v = H[K];
                    var C = null;
                    var s = null;
                    for (K = K + 1; K < L; K++) {
                        if (H[K] === null) {
                            K += 1;
                            continue
                        }
                        if (H[K] instanceof Function) {
                            C = H[K];
                            continue
                        }
                        if (s === null) {
                            s = H[K]
                        }
                        if (s !== null) {
                            C = C || g.add;
                            v = C(v, s);
                            C = null;
                            s = null
                        }
                    }
                    return v
                }
            }, {
                key: "parseSplitUnit", value: function o(s, u, t) {
                    if (typeof t === "undefined") {
                        return parseFloat(u)
                    }
                    switch (t) {
                        case"vh":
                            return u * 0.01 * a.pageMetrics.windowHeight;
                            break;
                        case"%":
                            return u * 0.01 * this.controller.elementMetrics.height;
                            break;
                        case"px":
                            return u;
                            break;
                        case"rh":
                            return u * 0.01 * this.controller.animSystem.metrics.get(s.relativeTo).height;
                            break;
                        case"vw":
                            return u * 0.01 * a.pageMetrics.windowWidth;
                            break;
                        case"rw":
                            return u * 0.01 * this.controller.animSystem.metrics.get(s.relativeTo).width;
                            break;
                        case"%w":
                            return u * 0.01 * this.controller.elementMetrics.width;
                            break;
                        case"%h":
                            return u * 0.01 * this.controller.elementMetrics.height;
                            break;
                        case"pw":
                            return u * 0.01 * this.controller.parentElementMetrics.width;
                            break;
                        case"ph":
                            return u * 0.01 * this.controller.parentElementMetrics.height;
                            break;
                        default:
                            throw new Error("AnimatedContentKeyframe no strategy found for unit `" + t + "` only `vh, vw, %, ph, pw` are supported")
                    }
                    return 0
                }
            }, {
                key: "captureParenthesis", value: function p(y, x) {
                    var t = "";
                    var w = 0;
                    var v = false;
                    var s = y.length;
                    for (var u = x; u < s; u++) {
                        if (y[u] === "(") {
                            w += 1;
                            if (v) {
                                t += y[u]
                            }
                            v = true
                        } else {
                            if (y[u] === ")") {
                                w -= 1;
                                if (w !== 0) {
                                    t += y[u]
                                }
                            } else {
                                if (v) {
                                    t += y[u]
                                }
                            }
                        }
                        if (v && w === 0) {
                            return t
                        }
                    }
                }
            }, {
                key: "isUnitlessNumber", value: function l(s) {
                    return String(s).match(h) === null
                }
            }, {
                key: "destroy", value: function r() {
                    this.controller = null
                }
            }, {
                key: "logParts", value: function n(s) {
                    console.log(s.reduce(function (t, u) {
                        if (typeof u === "function") {
                            return t + u.friendlyName + " "
                        }
                        return t + (u + " ")
                    }, ""))
                }
            }]);
            return q
        }();
        f.exports = c
    }, {"../Model/AnimSystemModel": 548, "./Operations": 553}],
    553: [function (b, c, a) {
        var d = function d() {
            _classCallCheck(this, d);
            this.sub = function (f, g) {
                return f - g
            };
            this.add = function (f, g) {
                return f + g
            };
            this.mul = function (f, g) {
                return f * g
            };
            this.div = function (f, g) {
                return f / g
            };
            this.add.friendlyName = "add";
            this.sub.friendlyName = "sub";
            this.mul.friendlyName = "mul";
            this.div.friendlyName = "div";
            this.add.priority = 0;
            this.sub.priority = 0;
            this.mul.priority = 1;
            this.div.priority = 1;
            this.GetOpCode = function (f) {
                switch (f) {
                    case"-":
                        return this.sub;
                        break;
                    case"+":
                        return this.add;
                        break;
                    case"*":
                        return this.mul;
                        break;
                    case"/":
                        return this.div;
                        break;
                    default:
                        throw new Error('AnimSystem.parsing.Operations - op code "' + f + "\" was found. Only '+ - * /' are supported. Check expression for typos/spacing issues")
                }
            }
        };
        c.exports = new d()
    }, {}],
    554: [function (b, c, a) {
        var d = function () {
            function g(i) {
                _classCallCheck(this, g);
                this.controller = i
            }

            _createClass(g, [{
                key: "parse", value: function h(l, m) {
                    if (typeof m === "number") {
                        return m
                    }
                    var k = this.controller.animSystem.metrics.get(l.relativeTo).top;
                    var i = this.controller.expressionParser.parseExpression(l, m);
                    var j = i + k;
                    return this.controller.animSystem.convertScrollPositionToTValue(j)
                }
            }, {
                key: "destroy", value: function f() {
                    this.controller = null
                }
            }]);
            return g
        }();
        c.exports = d
    }, {}],
    555: [function (d, f, c) {
        var b = function b() {
        };
        b.destroy = function () {
        };
        b.setupEvents = function () {
        };
        b.teardownEvents = function () {
        };
        b.onSectionWillAppearWithPadding = function (g, h) {
        };
        b.onSectionWillAppear = function (g, h) {
        };
        b.activate = function () {
        };
        b.deactivate = function () {
        };
        b.animateIn = function () {
        };
        b.onScroll = function (h, g, i) {
        };
        b.onSectionWillDisappearWithPadding = function (g, h) {
        };
        b.onSectionWillDisappear = function (g, h) {
        };
        b.onResizeImmediate = function (h, g, i) {
        };
        b.onResizeDebounced = function (h, g, i) {
        };
        b.onBreakpoint = function (h, j, g, i) {
        };
        b.onRetinaChange = function (j, h, g, i) {
        };
        b.onOrientationChange = function (i, h, g, j) {
        };
        f.exports = {
            make: function a(h, g) {
                h.section = g[0];
                h.element = g[1];
                h.index = g[6];
                h.componentName = "AnimSystem";
                h.destroy = b.destroy;
                h.setupEvents = b.setupEvents;
                h.teardownEvents = b.teardownEvents;
                h.onSectionWillAppearWithPadding = b.onSectionWillAppearWithPadding;
                h.onSectionWillAppear = b.onSectionWillAppear;
                h.activate = b.activate;
                h.deactivate = b.deactivate;
                h.animateIn = b.animateIn;
                h.onScroll = b.onScroll;
                h.onSectionWillDisappearWithPadding = b.onSectionWillDisappearWithPadding;
                h.onSectionWillDisappear = b.onSectionWillDisappear;
                h.onResizeImmediate = b.onResizeImmediate;
                h.onResizeDebounced = b.onResizeDebounced;
                h.onOrientationChange = b.onOrientationChange;
                h.onBreakpoint = b.onBreakpoint;
                h.onRetinaChange = b.onRetinaChange
            }
        }
    }, {}],
    556: [function (d, c, h) {
        c.exports = {
            lerp: function f(m, n, l) {
                return n + (l - n) * m
            }, map: function b(o, n, l, m, p) {
                return m + (p - m) * (o - n) / (l - n)
            }, mapClamp: function k(o, n, l, m, q) {
                var p = m + (q - m) * (o - n) / (l - n);
                return Math.max(m, Math.min(q, p))
            }, norm: function a(n, m, l) {
                return (n - m) / (l - m)
            }, clamp: function j(n, m, l) {
                return Math.max(m, Math.min(l, n))
            }, randFloat: function g(m, l) {
                return Math.random() * (l - m) + m
            }, randInt: function i(m, l) {
                return Math.floor(Math.random() * (l - m) + m)
            }
        }
    }, {}],
    557: [function (b, c, a) {
    }, {}],
    558: [function (b, c, a) {
        (function (j) {
            function h(o, l) {
                var k = 0;
                for (var m = o.length - 1; m >= 0; m--) {
                    var n = o[m];
                    if (n === ".") {
                        o.splice(m, 1)
                    } else {
                        if (n === "..") {
                            o.splice(m, 1);
                            k++
                        } else {
                            if (k) {
                                o.splice(m, 1);
                                k--
                            }
                        }
                    }
                }
                if (l) {
                    for (; k--; k) {
                        o.unshift("..")
                    }
                }
                return o
            }

            var g = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            var d = function d(k) {
                return g.exec(k).slice(1)
            };
            a.resolve = function () {
                var m = "", k = false;
                for (var l = arguments.length - 1; l >= -1 && !k;
                     l--) {
                    var n = l >= 0 ? arguments[l] : j.cwd();
                    if (typeof n !== "string") {
                        throw new TypeError("Arguments to path.resolve must be strings")
                    } else {
                        if (!n) {
                            continue
                        }
                    }
                    m = n + "/" + m;
                    k = n.charAt(0) === "/"
                }
                m = h(f(m.split("/"), function (o) {
                    return !!o
                }), !k).join("/");
                return (k ? "/" : "") + m || "."
            };
            a.normalize = function (m) {
                var l = a.isAbsolute(m), k = i(m, -1) === "/";
                m = h(f(m.split("/"), function (n) {
                    return !!n
                }), !l).join("/");
                if (!m && !l) {
                    m = "."
                }
                if (m && k) {
                    m += "/"
                }
                return (l ? "/" : "") + m
            };
            a.isAbsolute = function (k) {
                return k.charAt(0) === "/"
            };
            a.join = function () {
                var k = Array.prototype.slice.call(arguments, 0);
                return a.normalize(f(k, function (m, l) {
                    if (typeof m !== "string") {
                        throw new TypeError("Arguments to path.join must be strings")
                    }
                    return m
                }).join("/"))
            };
            a.relative = function (q, r) {
                q = a.resolve(q).substr(1);
                r = a.resolve(r).substr(1);

                function m(t) {
                    var v = 0;
                    for (; v < t.length; v++) {
                        if (t[v] !== "") {
                            break
                        }
                    }
                    var u = t.length - 1;
                    for (; u >= 0; u--) {
                        if (t[u] !== "") {
                            break
                        }
                    }
                    if (v > u) {
                        return []
                    }
                    return t.slice(v, u - v + 1)
                }

                var p = m(q.split("/"));
                var l = m(r.split("/"));
                var k = Math.min(p.length, l.length);
                var s = k;
                for (var o = 0; o < k;
                     o++) {
                    if (p[o] !== l[o]) {
                        s = o;
                        break
                    }
                }
                var n = [];
                for (var o = s; o < p.length; o++) {
                    n.push("..")
                }
                n = n.concat(l.slice(s));
                return n.join("/")
            };
            a.sep = "/";
            a.delimiter = ":";
            a.dirname = function (n) {
                var k = d(n), l = k[0], m = k[1];
                if (!l && !m) {
                    return "."
                }
                if (m) {
                    m = m.substr(0, m.length - 1)
                }
                return l + m
            };
            a.basename = function (m, k) {
                var l = d(m)[2];
                if (k && l.substr(-1 * k.length) === k) {
                    l = l.substr(0, l.length - k.length)
                }
                return l
            };
            a.extname = function (k) {
                return d(k)[3]
            };

            function f(k, n) {
                if (k.filter) {
                    return k.filter(n)
                }
                var m = [];
                for (var l = 0; l < k.length;
                     l++) {
                    if (n(k[l], l, k)) {
                        m.push(k[l])
                    }
                }
                return m
            }

            var i = "ab".substr(-1) === "b" ? function (l, m, k) {
                return l.substr(m, k)
            } : function (l, m, k) {
                if (m < 0) {
                    m = l.length + m
                }
                return l.substr(m, k)
            }
        }).call(this, b("_process"))
    }, {_process: 559}],
    559: [function (g, a, s) {
        var j = a.exports = {};
        var k;
        var m;

        function h() {
            throw new Error("setTimeout has not been defined")
        }

        function q() {
            throw new Error("clearTimeout has not been defined")
        }

        (function () {
            try {
                if (typeof setTimeout === "function") {
                    k = setTimeout
                } else {
                    k = h
                }
            } catch (t) {
                k = h
            }
            try {
                if (typeof clearTimeout === "function") {
                    m = clearTimeout
                } else {
                    m = q
                }
            } catch (t) {
                m = q
            }
        })();

        function f(t) {
            if (k === setTimeout) {
                return setTimeout(t, 0)
            }
            if ((k === h || !k) && setTimeout) {
                k = setTimeout;
                return setTimeout(t, 0)
            }
            try {
                return k(t, 0)
            } catch (u) {
                try {
                    return k.call(null, t, 0)
                } catch (u) {
                    return k.call(this, t, 0)
                }
            }
        }

        function d(t) {
            if (m === clearTimeout) {
                return clearTimeout(t)
            }
            if ((m === q || !m) && clearTimeout) {
                m = clearTimeout;
                return clearTimeout(t)
            }
            try {
                return m(t)
            } catch (u) {
                try {
                    return m.call(null, t)
                } catch (u) {
                    return m.call(this, t)
                }
            }
        }

        var n = [];
        var r = false;
        var i;
        var o = -1;

        function l() {
            if (!r || !i) {
                return
            }
            r = false;
            if (i.length) {
                n = i.concat(n)
            } else {
                o = -1
            }
            if (n.length) {
                p()
            }
        }

        function p() {
            if (r) {
                return
            }
            var u = f(l);
            r = true;
            var t = n.length;
            while (t) {
                i = n;
                n = [];
                while (++o < t) {
                    if (i) {
                        i[o].run()
                    }
                }
                o = -1;
                t = n.length
            }
            i = null;
            r = false;
            d(u)
        }

        j.nextTick = function (t) {
            var u = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var v = 1;
                     v < arguments.length; v++) {
                    u[v - 1] = arguments[v]
                }
            }
            n.push(new b(t, u));
            if (n.length === 1 && !r) {
                f(p)
            }
        };

        function b(t, u) {
            this.fun = t;
            this.array = u
        }

        b.prototype.run = function () {
            this.fun.apply(null, this.array)
        };
        j.title = "browser";
        j.browser = true;
        j.env = {};
        j.argv = [];
        j.version = "";
        j.versions = {};

        function c() {
        }

        j.on = c;
        j.addListener = c;
        j.once = c;
        j.off = c;
        j.removeListener = c;
        j.removeAllListeners = c;
        j.emit = c;
        j.prependListener = c;
        j.prependOnceListener = c;
        j.listeners = function (t) {
            return []
        };
        j.binding = function (t) {
            throw new Error("process.binding is not supported")
        };
        j.cwd = function () {
            return "/"
        };
        j.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        };
        j.umask = function () {
            return 0
        }
    }, {}],
    560: [function (h, d, n) {
        var j = h("@marcom/ac-jetpack-lib/core/BaseComponent");
        var i = h("../shared/video/MediaObjectVideo");
        var m = h("./Animoji/VideoCanvas");
        var f = h("@marcom/ac-gallery").SlideGallery;
        var g = h("./Animoji/AnimojiGalleryItem");
        var r = h("@marcom/ac-raf-emitter/draw");
        var l = h("../shared/helpers/isFallbackGPU");
        var p = h("../shared/model/prefersReducedMotion");
        var b = h("../shared/model/videoCanvasSupported");
        var a = 500;
        var o = 0.5;
        var q = {disableRetina: true, autoload: true, ignoreViewportShrink: false};
        var k = {
            video_width_large: 676,
            video_height_large: 676,
            video_width_medium: 384,
            video_height_medium: 386,
            video_width_small: 414,
            video_height_small: 336,
            start_y_large: 320,
            start_y_medium: 192,
            start_y_small: 176
        };
        var c = function (F) {
            _inherits(J, F);

            function J(ai, ak, ae, ah, af, aj, ag) {
                _classCallCheck(this, J);
                var ad = _possibleConstructorReturn(this, (J.__proto__ || Object.getPrototypeOf(J)).apply(this, arguments));
                ad.name = "Animoji_" + ag;
                ad._currentBreakpoint = ah;
                ad._hasBeenInitialized = false;
                ad._video = null;
                ad._sourceVideoContainer = ad.element.querySelector(".source-video");
                ad._faceVideoContainer = ad.element.querySelector(".video-container");
                ad._faceVideoCanvas = null;
                ad._videoShouldPlay = false;
                ad._videoEnded = false;
                ad._gallery = null;
                ad._galleryContainer = ad.element.querySelector(".animoji-gallery");
                ad._galleryNav = ad.element.querySelector(".gallery-nav");
                ad._galleryStartframe = ad.element.querySelector(".animoji-gallery-startframe");
                ad._galleryItems = [];
                ad._currentGalleryId = 0;
                ad._replayButton = ad.element.querySelector(".video-wrapper .replay-button");
                ad._replayButtonSmall = ad.element.querySelector(".animoji-gallery-wrapper .replay-button");
                ad.modalWrapperElement = ad.section.element.querySelector("[data-modal-content]");
                if (ad.modalWrapperElement) {
                    ad.modalName = ad.modalWrapperElement.getAttribute("data-modal-content")
                }
                ad._trackedElement = null;
                return ad
            }

            _createClass(J, [{
                key: "onSectionWillAppear", value: function A(ad, ae) {
                    this._initialize()
                }
            }, {
                key: "onBreakpoint", value: function z(ae, ag, ad, af) {
                    this._currentBreakpoint = ae;
                    if (this._videoEnded) {
                        this._hideReplay();
                        this._showReplay()
                    }
                }
            }, {
                key: "_initialize", value: function P() {
                    if (l) {
                        return
                    } else {
                        if (!b || p) {
                            this._initializeFallback();
                            return
                        } else {
                            if (b && !p && !this._hasBeenInitialized) {
                                this._initializeAnimojiGallery()
                            }
                        }
                    }
                }
            }, {
                key: "_initializeAnimojiGallery", value: function B() {
                    this._hasBeenInitialized = true;
                    this._initializeVideoSource();
                    this._initializeFaceCanvasVideo();
                    this._initializeElementTracker();
                    this._initializeReplay()
                }
            }, {
                key: "_initializeFallback", value: function X() {
                    this._initializeGallery()
                }
            }, {
                key: "_initializeVideoSource", value: function W() {
                    var ad = this._sourceVideoContainer;
                    var ae = ad.getAttribute("data-media-name");
                    this._video = new i(ae, ad, q);
                    this._video.on("video_reset", this._onVideoReset.bind(this));
                    this._video.on("video_ready", this._onVideoReady.bind(this));
                    this._video.on("video_ended", this._onVideoEnded.bind(this))
                }
            }, {
                key: "_checkVideoPlay", value: function G() {
                    if (this._trackedElement.engaged && this._videoShouldPlay && !this._videoEnded) {
                        this._executeComponents()
                    }
                }
            }, {
                key: "_executeComponents", value: function ac() {
                    this._playVideo();
                    if (this._gallery === null) {
                        this._initializeGallery()
                    } else {
                        this._resetFaceCanvasVideo();
                        this._resetGalleryVideo()
                    }
                }
            }, {
                key: "_playVideo", value: function K() {
                    this._videoShouldPlay = true;
                    this._video.play();
                    this._startFaceCanvasVideo()
                }
            }, {
                key: "_pauseVideo", value: function N() {
                    this._video.pause();
                    this._stopFaceCanvasVideo()
                }
            }, {
                key: "_onVideoReset", value: function ab(ad) {
                    this._checkVideoPlay();
                    if (this._videoEnded) {
                        this._resetFaceCanvasVideo()
                    }
                }
            }, {
                key: "_onVideoReady", value: function C(ad) {
                    this._videoShouldPlay = true
                }
            }, {
                key: "_onVideoEnded", value: function u(ad) {
                    this._videoShouldPlay = false;
                    this._videoEnded = true;
                    this._video.progress = 1;
                    this._resetAnimojiComponent();
                    this._showReplay()
                }
            }, {
                key: "_initializeFaceCanvasVideo", value: function R() {
                    var ad = ".source-video";
                    this._faceVideoCanvas = new m(ad, this._faceVideoContainer, 0, k)
                }
            }, {
                key: "_resetFaceCanvasVideo", value: function U() {
                    this._faceVideoCanvas.reset()
                }
            }, {
                key: "_startFaceCanvasVideo", value: function O() {
                    if (this._videoShouldPlay) {
                        this._faceVideoCanvas.start()
                    }
                }
            }, {
                key: "_stopFaceCanvasVideo", value: function t() {
                    this._faceVideoCanvas.stop()
                }
            }, {
                key: "_initializeReplay", value: function v() {
                    this._replayButton.addEventListener("click", this._replayVideo.bind(this));
                    this._replayButtonSmall.addEventListener("click", this._replayVideo.bind(this))
                }
            }, {
                key: "_replayVideo", value: function T() {
                    this._videoEnded = false;
                    this._video.progress = 0;
                    this._hideReplay();
                    this._playVideo();
                    this._startFaceCanvasVideo();
                    this._startGalleryVideo()
                }
            }, {
                key: "_showReplay", value: function aa() {
                    if (this._currentBreakpoint !== "small") {
                        this._replayButton.classList.add("show")
                    } else {
                        this._replayButtonSmall.classList.add("show")
                    }
                }
            }, {
                key: "_hideReplay", value: function y() {
                    this._replayButton.classList.remove("show");
                    this._replayButtonSmall.classList.remove("show")
                }
            }, {
                key: "_initializeGallery", value: function L() {
                    this._gallery = new f(this._galleryContainer, {
                        itemType: g,
                        resizeContainer: true,
                        updateOnWindowResize: true,
                        enableArrowKeys: true,
                        desktopSwipe: true,
                        duration: 0.5,
                        touch: true
                    });
                    this._gallery.on("update:complete", this._onGalleryUpdateComplete.bind(this));
                    this._galleryItems = this._gallery._items;
                    this._galleryContainer.classList.add("show");
                    this._galleryNav.classList.add("show");
                    var ad = setTimeout(this._onHideGalleryStartframe.bind(this), 500)
                }
            }, {
                key: "_onHideGalleryStartframe", value: function D() {
                    this._galleryStartframe.style.display = "none"
                }
            }, {
                key: "_onGalleryUpdateComplete", value: function V(ad) {
                    this._currentGalleryId = ad.incoming[0]._id
                }
            }, {
                key: "_startGalleryVideo", value: function w() {
                    if (this._videoShouldPlay) {
                        this._galleryItems[this._currentGalleryId].startCanvasVideo()
                    }
                }
            }, {
                key: "_stopGalleryVideo", value: function H() {
                    this._galleryItems[this._currentGalleryId].stopCanvasVideo()
                }
            }, {
                key: "_resetGalleryVideo", value: function I() {
                    this._resetAllGalleryVideoCanvas();
                    this._startGalleryVideo()
                }
            }, {
                key: "_resetAllGalleryVideoCanvas", value: function s() {
                    for (var ae = 0, ad = this._galleryItems.length;
                         ae < ad; ae++) {
                        this._galleryItems[ae].resetCanvasVideo()
                    }
                }
            }, {
                key: "_refreshGalleryLayout", value: function S() {
                    if (this._gallery) {
                        this._gallery.resize()
                    }
                }
            }, {
                key: "_resetAnimojiComponent", value: function Q() {
                    this._pauseVideo();
                    this._stopFaceCanvasVideo();
                    this._stopGalleryVideo()
                }
            }, {
                key: "_initializeElementTracker", value: function Z() {
                    this._trackedElement = this.section.elementEngagement.addElement(this.element, {
                        timeToEngage: a,
                        inViewThreshold: o
                    });
                    this._trackedElement.on("engaged", this._onEngaged.bind(this));
                    this._trackedElement.on("exitview", this._onExitView.bind(this))
                }
            }, {
                key: "_onEngaged", value: function E(ad) {
                    this._checkVideoPlay()
                }
            }, {
                key: "_onExitView", value: function M(ad) {
                    this._pauseVideo()
                }
            }, {
                key: "modalWillClose", value: function Y(ae, ag, af) {
                    var ad = this;
                    if (!this._hasBeenInitialized || af.name !== this.modalName) {
                        return ae()
                    }
                    r(function () {
                        if (ad._gallery) {
                            ad._onVideoEnded();
                            ad._resetFaceCanvasVideo();
                            ad._resetAllGalleryVideoCanvas()
                        }
                        r(function () {
                            for (var ai = 0, ah = ad._galleryItems.length; ai < ah; ai++) {
                                ad._galleryItems[ai].hideElements()
                            }
                            if (ad._sourceVideoContainer) {
                                ad._sourceVideoContainer.style.display = "none"
                            }
                            ad._faceVideoContainer.style.display = "none";
                            r(function () {
                                ae()
                            })
                        })
                    })
                }
            }, {
                key: "modalDidOpen", value: function x(ad, af, ae) {
                    var ag = this;
                    if (!this._hasBeenInitialized || ae.name !== this.modalName) {
                        return ad()
                    }
                    r(function () {
                        for (var ai = 0, ah = ag._galleryItems.length;
                             ai < ah; ai++) {
                            ag._galleryItems[ai].showElements()
                        }
                        if (ag._sourceVideoContainer) {
                            ag._sourceVideoContainer.style.display = ""
                        }
                        ag._faceVideoContainer.style.display = "";
                        ag._refreshGalleryLayout();
                        r(function () {
                            ad()
                        })
                    })
                }
            }]);
            return J
        }(j);
        d.exports = c
    }, {
        "../shared/helpers/isFallbackGPU": 588,
        "../shared/model/prefersReducedMotion": 595,
        "../shared/model/videoCanvasSupported": 596,
        "../shared/video/MediaObjectVideo": 598,
        "./Animoji/AnimojiGalleryItem": 561,
        "./Animoji/VideoCanvas": 562,
        "@marcom/ac-gallery": 269,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-raf-emitter/draw": 519
    }],
    561: [function (d, g, b) {
        var f = d("@marcom/ac-gallery").SlideGalleryItem;
        var h = d("./VideoCanvas");
        var c = {
            video_width_large: 370,
            video_height_large: 320,
            video_width_medium: 222,
            video_height_medium: 192,
            video_width_small: 204,
            video_height_small: 176,
            start_y_large: 0,
            start_y_medium: 0,
            start_y_small: 0
        };
        var a = function (k) {
            _inherits(j, k);

            function j() {
                _classCallCheck(this, j);
                var t = _possibleConstructorReturn(this, (j.__proto__ || Object.getPrototypeOf(j)).apply(this, arguments));
                t._videoCanvas = null;
                t._videoSourceSelector = ".source-video";
                t._videoCanvasContainer = t._el.querySelector(".animoji-gallery-video");
                t._id = t._getID();
                t._intialize();
                return t
            }

            _createClass(j, [{
                key: "_intialize", value: function i() {
                    this._videoCanvas = new h(this._videoSourceSelector, this._videoCanvasContainer, this._id, c)
                }
            }, {
                key: "show", value: function r() {
                    f.prototype.show.call(this);
                    var t = document.querySelector(this._videoSourceSelector).classList.contains("mediaobject-ended");
                    if (!t) {
                        this._videoCanvas.start()
                    } else {
                        this._videoCanvas.reset()
                    }
                }
            }, {
                key: "hide", value: function n() {
                    f.prototype.hide.call(this);
                    this._videoCanvas.stop()
                }
            }, {
                key: "resetCanvasVideo", value: function p() {
                    this._videoCanvas.reset()
                }
            }, {
                key: "startCanvasVideo", value: function s() {
                    this._videoCanvas.start()
                }
            }, {
                key: "stopCanvasVideo", value: function m() {
                    this._videoCanvas.stop()
                }
            }, {
                key: "hideElements", value: function l() {
                    this._videoCanvas._videoCanvas.style.display = "none"
                }
            }, {
                key: "showElements", value: function o() {
                    this._videoCanvas._videoCanvas.style.display = ""
                }
            }, {
                key: "_getID", value: function q() {
                    var u = this._el.id;
                    var t = u.split("-");
                    return t[t.length - 1] - 1
                }
            }]);
            return j
        }(f);
        g.exports = a
    }, {"./VideoCanvas": 562, "@marcom/ac-gallery": 269}],
    562: [function (f, g, d) {
        var a = f("@marcom/ac-raf-emitter/RAFEmitter");
        var c = f("@marcom/ac-viewport-emitter");
        var h = f("../../shared/helpers/clampViewport");
        var b = ".mediaobject-element";
        var i = function () {
            function p(w, u, x, v) {
                _classCallCheck(this, p);
                this._id = x;
                this._DATA = v;
                this._videoSourceSelector = w;
                this._videoSource = null;
                this._videoCanvas = u;
                this._videoSourceWidth = this._DATA.video_width_large;
                this._videoSourceHeight = this._DATA.video_height_large;
                this._videoCanvasContext = this._videoCanvas.getContext("2d");
                this._rafEmitter = null;
                this._offsetX = 0;
                this._startY = 0;
                this._intialize()
            }

            _createClass(p, [{
                key: "_intialize", value: function m() {
                    this._intializeRAFEmitter()
                }
            }, {
                key: "_intializeRAFEmitter", value: function n() {
                    this._rafEmitter = new a();
                    this._rafEmitter.on("start", this._onRafStart.bind(this));
                    this._rafEmitter.on("update", this._onRafUpdate.bind(this));
                    this._rafEmitter.on("draw", this._onRafDraw.bind(this))
                }
            }, {
                key: "_onRafStart", value: function o() {
                    this._updateCanvas()
                }
            }, {
                key: "_onRafUpdate", value: function l() {
                    this._rafEmitter.run()
                }
            }, {
                key: "_onRafDraw", value: function t() {
                    this._drawCanvas()
                }
            }, {
                key: "_updateCanvas", value: function r() {
                    var u = h(c.viewport);
                    switch (u) {
                        case"large":
                            this._videoSourceWidth = this._DATA.video_width_large;
                            this._videoSourceHeight = this._DATA.video_height_large;
                            this._startY = this._DATA.start_y_large;
                            break;
                        case"medium":
                            this._videoSourceWidth = this._DATA.video_width_medium;
                            this._videoSourceHeight = this._DATA.video_height_medium;
                            this._startY = this._DATA.start_y_medium;
                            break;
                        case"small":
                            this._videoSourceWidth = this._DATA.video_width_small;
                            this._videoSourceHeight = this._DATA.video_height_small;
                            this._startY = this._DATA.start_y_small;
                            break;
                        default:
                            break
                    }
                    this._videoCanvas.width = this._videoSourceWidth;
                    this._videoCanvas.height = this._videoSourceHeight;
                    this._offsetX = this._id * this._videoSourceWidth
                }
            }, {
                key: "_drawCanvas", value: function j() {
                    this._videoSource = document.querySelector(this._videoSourceSelector + " " + b);
                    if (this._videoSource) {
                        this._videoCanvasContext.drawImage(this._videoSource, this._offsetX, this._startY, this._videoSourceWidth, this._videoSourceHeight, 0, 0, this._videoSourceWidth, this._videoSourceHeight)
                    }
                }
            }, {
                key: "reset", value: function q() {
                    this._updateCanvas();
                    this._drawCanvas()
                }
            }, {
                key: "start", value: function k() {
                    this._rafEmitter.run()
                }
            }, {
                key: "stop", value: function s() {
                    this._rafEmitter.cancel()
                }
            }]);
            return p
        }();
        g.exports = i
    }, {
        "../../shared/helpers/clampViewport": 585,
        "@marcom/ac-raf-emitter/RAFEmitter": 514,
        "@marcom/ac-viewport-emitter": 528
    }],
    563: [function (c, b, h) {
        var d = c("@marcom/ac-jetpack-lib/core/BaseComponent");
        var n = c("@marcom/ac-jetpack-lib/utils/Page");
        var m = c("@marcom/ac-gallery").Gallery;
        var i = c("@marcom/ac-gallery").FadeGallery;
        var o = c("./GesturesVideoGallery/GesturesVideoGalleryItem");
        var g = c("../shared/helpers/isFallbackGPU");
        var l = c("../shared/model/prefersReducedMotion");
        var j = function j() {
            if (g || l) {
                return false
            }
            return c("../shared/model/inlineVideoAutoplaySupported")()
        };
        var k = 0.75;
        var a = 0;
        var f = function (s) {
            _inherits(t, s);

            function t() {
                _classCallCheck(this, t);
                var A = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                A._hasInitialized = false;
                A._shouldResize = false;
                return A
            }

            _createClass(t, [{
                key: "setupEvents", value: function v() {
                    this._initializeGallery()
                }
            }, {
                key: "onSectionWillAppear", value: function p() {
                    if (!this._hasInitialized) {
                        this._hasInitialized = true;
                        this._resizeGallery();
                        this._initializeTracker()
                    } else {
                        if (this._shouldResize) {
                            this._resizeGallery()
                        }
                    }
                }
            }, {
                key: "onBreakpoint", value: function q(A) {
                    this._shouldResize = true
                }
            }, {
                key: "_onEngaged", value: function r() {
                    if (j()) {
                        this._galleryObject.getCurrentItem().loadAndPlay()
                    }
                }
            }, {
                key: "_onUpdate", value: function u() {
                    if (this._galleryObject.isInView() && j()) {
                        this._galleryObject.getCurrentItem().loadAndPlay()
                    }
                }
            }, {
                key: "_onUpdateComplete", value: function w() {
                    this._galleryObject.getLastItem().reset()
                }
            }, {
                key: "_initializeGallery", value: function z() {
                    this._galleryObject = new i(this.element, {itemType: o, resizeContainer: true, touch: true});
                    this._galleryObject.on(m.UPDATE, this._onUpdate.bind(this));
                    this._galleryObject.on(m.UPDATE_COMPLETE, this._onUpdateComplete.bind(this));
                    if (!j()) {
                        var A = this._galleryObject.getItems();
                        var D = A.length;
                        for (var B = 0; B < D; B++) {
                            var C = A[B];
                            C.showFallbackImage()
                        }
                    }
                }
            }, {
                key: "_resizeGallery", value: function y() {
                    this._shouldResize = false;
                    this._galleryObject.resize();
                    n.deepRefreshAllElementMetrics()
                }
            }, {
                key: "_initializeTracker", value: function x() {
                    this.trackedElement = this.section.elementEngagement.addElement(this.element, {
                        timeToEngage: a,
                        inViewThreshold: k
                    });
                    this.trackedElement.on("engaged", this._onEngaged.bind(this))
                }
            }]);
            return t
        }(d);
        b.exports = f
    }, {
        "../shared/helpers/isFallbackGPU": 588,
        "../shared/model/inlineVideoAutoplaySupported": 594,
        "../shared/model/prefersReducedMotion": 595,
        "./GesturesVideoGallery/GesturesVideoGalleryItem": 564,
        "@marcom/ac-gallery": 269,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-jetpack-lib/utils/Page": 313
    }],
    564: [function (d, f, b) {
        var c = d("@marcom/ac-gallery").FadeGalleryItem;
        var a = d("../../shared/video/MediaObjectVideo");
        var h = 3000;
        var g = function (k) {
            _inherits(r, k);

            function r() {
                _classCallCheck(this, r);
                var w = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
                w._screenContainer = w._el.querySelector(".screen-container");
                w._videoElement = w._el.querySelector(".screen-video");
                if (w._videoElement) {
                    w._mediaName = w._videoElement.getAttribute("data-media-name");
                    var v = {autoload: false, autoplay: false, disableRetina: false, ignoreViewportShrink: true};
                    w._video = new a(w._mediaName, w._videoElement, v);
                    w._video.on("video_ready", w._onVideoReady.bind(w));
                    w._video.on("video_reset", w._onVideoReset.bind(w));
                    w._videoLoadStarted = false;
                    w._videoLoadTimeout = null
                }
                return w
            }

            _createClass(r, [{
                key: "_onVideoReady", value: function q() {
                    this._playVideo()
                }
            }, {
                key: "_onVideoReset", value: function n() {
                    this._videoLoadStarted = false
                }
            }, {
                key: "_onVideoLoadTimeout", value: function u() {
                    this.showFallbackImage()
                }
            }, {
                key: "show", value: function t() {
                    _get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "show", this).call(this)
                }
            }, {
                key: "hide", value: function o() {
                    _get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "hide", this).call(this);
                    if (this._video) {
                        this._video.pause();
                        this._stopLoadTimer()
                    }
                }
            }, {
                key: "loadAndPlay", value: function m() {
                    if (this._video) {
                        if (this._videoLoadStarted) {
                            this._playVideo()
                        } else {
                            this._video.load();
                            this._startLoadTimer();
                            this._videoLoadStarted = true
                        }
                    }
                }
            }, {
                key: "showFallbackImage", value: function i() {
                    this._screenContainer.classList.add("fallback");
                    this._screenContainer.classList.remove("playing")
                }
            }, {
                key: "reset", value: function p() {
                    if (this._video) {
                        this._video.pause();
                        this._video.progress = 0
                    }
                }
            }, {
                key: "_playVideo", value: function s() {
                    this._stopLoadTimer();
                    this._screenContainer.classList.remove("fallback");
                    this._screenContainer.classList.add("playing");
                    this._video.progress = 0;
                    this._video.play()
                }
            }, {
                key: "_startLoadTimer", value: function j() {
                    var v = this;
                    this._stopLoadTimer();
                    this._videoLoadTimeout = setTimeout(function () {
                        return v._onVideoLoadTimeout()
                    }, h)
                }
            }, {
                key: "_stopLoadTimer", value: function l() {
                    clearTimeout(this._videoLoadTimeout)
                }
            }]);
            return r
        }(c);
        f.exports = g
    }, {"../../shared/video/MediaObjectVideo": 598, "@marcom/ac-gallery": 269}],
    565: [function (d, b, h) {
        var f = d("@marcom/ac-jetpack-lib/core/BaseComponent");
        var c = d("@marcom/ac-jetpack-lib/model/EnabledFeatures");
        var l = d("@marcom/anim-system/Model/AnimSystemModel");
        var a = d("./MaskedX");
        var m = {update: d("@marcom/ac-raf-emitter/update"), draw: d("@marcom/ac-raf-emitter/draw")};
        var j = null;
        var i = false;
        try {
            j = d("ac-analytics")
        } catch (g) {
        }
        var k = function (n) {
            _inherits(w, n);

            function w(E, G, z, D, A, F, B) {
                _classCallCheck(this, w);
                var C = _possibleConstructorReturn(this, (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments));
                C.mask = null;
                C.anim = null;
                C.onMaskMetricsWillUpdate = C.onMaskMetricsWillUpdate.bind(C);
                C.onMaskMetricsDidUpdate = C.onMaskMetricsDidUpdate.bind(C);
                C.elements = {
                    overlay: E.element.querySelector(".overlay"),
                    hardware: E.element.querySelector(".hardware"),
                    videoContainer: E.element.querySelector(".video-container"),
                    startFrame: E.element.querySelector(".start-frame"),
                    video: E.element.querySelector("video")
                };
                C.navigationHasAnimatedIn = false;
                C.localNavHeight = 0;
                C.globalNavBottom = 0;
                C.navElements = {
                    localNav: document.querySelector("#ac-localnav") || null,
                    globalNav: document.querySelector("#ac-globalnav") || null,
                    segmentBar: document.querySelector("#ac-gn-segmentbar") || null,
                    localeSwitcher: document.querySelector("#ac-localeswitcher") || null
                };
                if (C.navElements.globalNav === null) {
                    C.navElements.globalNav = C.navElements.localNav
                }
                m.update(function () {
                    C.localNavHeight = C.navElements.localNav.clientHeight;
                    var H = C.navElements.globalNav.getBoundingClientRect();
                    C.globalNavBottom = Math.max(H.bottom, H.height)
                });
                C.onVideoIsReady = C.onVideoIsReady.bind(C);
                if (j) {
                    C.analyticsObserver = new j.observer.Event(C)
                }
                if (c.INLINE_VIDEO) {
                    C.updateVideoSourceAttribute(D)
                }
                return C
            }

            _createClass(w, [{
                key: "onStartFrameTransitionEnd", value: function y() {
                    this.elements.startFrame.removeEventListener("transitionend", this.onStartFrameTransitionEnd);
                    this.elements.startFrame.style.display = "none"
                }
            }, {
                key: "setupEvents", value: function q() {
                    var z = this;
                    this.onStartFrameTransitionEnd = this.onStartFrameTransitionEnd.bind(this);
                    this.anim = this.section.getComponentOfType("AnimSystem");
                    this.mask = this.section.getComponentOfType("MaskedX");
                    this.mask.on(a.ON_METRICS_WILL_UPDATE, this.onMaskMetricsWillUpdate);
                    this.mask.on(a.ON_METRICS_DID_UPDATE, this.onMaskMetricsDidUpdate);
                    this.elements.startFrame.addEventListener("transitionend", this.onStartFrameTransitionEnd);
                    this.controllers = {
                        hardware: this.anim.getControllerForElement(this.elements.hardware),
                        videoContainer: this.anim.getControllerForElement(this.elements.videoContainer),
                        overlay: this.anim.getControllerForElement(this.elements.overlay)
                    };
                    this.hasExited = false;
                    this.anim.on("hero-resize:exit", function () {
                        return z.hasExited = true
                    })
                }
            }, {
                key: "onVideoIsReady", value: function s(A) {
                    var z = this;
                    this.elements.video.removeEventListener("playing", this.onVideoIsReady);
                    this.elements.video.removeEventListener("canplay", this.onVideoIsReady);
                    this.elements.video.removeEventListener("canplaythrough", this.onVideoIsReady);
                    this.elements.startFrame.classList.add("fade-out");
                    if (!this.hasExited && this.analyticsObserver && !i) {
                        m.update(function () {
                            i = true;
                            z.analyticsObserver.track({title: "hero", eVar70: "hero"})
                        })
                    }
                }
            }, {
                key: "updateVideoSourceAttribute", value: function u(A) {
                    var z = this.elements.video.getAttribute("data-src-" + A);
                    if (z === null || z === "") {
                        return
                    }
                    this.elements.startFrame.classList.remove("fade-out");
                    this.elements.video.addEventListener("playing", this.onVideoIsReady);
                    this.elements.video.addEventListener("canplay", this.onVideoIsReady);
                    this.elements.video.addEventListener("canplaythrough", this.onVideoIsReady);
                    if (this.elements.video.src.indexOf(z) === -1) {
                        this.elements.video.src = z
                    }
                }
            }, {
                key: "onBreakpointChange", value: function x(z) {
                    this.updateVideoSourceAttribute(z)
                }
            }, {
                key: "onMaskMetricsWillUpdate", value: function r() {
                    this.localNavHeight = this.navElements.localNav.clientHeight;
                    var z = this.navElements.globalNav.getBoundingClientRect();
                    this.globalNavBottom = Math.max(z.bottom, z.height)
                }
            }, {
                key: "onMaskMetricsDidUpdate", value: function o(C) {
                    var z = this;
                    var A = new Set();
                    var D = this.updateHardwareKeyframes(A, C);
                    var B = this.updateOverlayKeyframes(D, A, C);
                    this.updateVideoKeyframes(D, B, A, C);
                    A.forEach(function (E) {
                        E.parseOptions(E.jsonProps);
                        E.updateAnimationConstraints()
                    });
                    m.draw(function () {
                        z.anim._onScroll(l.pageMetrics.scrollY);
                        m.draw(function () {
                            z.elements.overlay.style.backgroundColor = "transparent"
                        });
                        if (!z.navigationHasAnimatedIn) {
                            z.navigationHasAnimatedIn = true;
                            for (var E in z.navElements) {
                                if (z.navElements[E] !== null) {
                                    z.navElements[E].classList.add("animate-in")
                                }
                            }
                        }
                    })
                }
            }, {
                key: "updateHardwareKeyframes", value: function p(J, F) {
                    var H = this.anim.metrics.get(this.elements.hardware);
                    var I = (l.pageMetrics.windowHeight + F) / (H.height * 0.5);
                    this.elements.hardware.style.transform = "scale(" + I + "," + I + ")";
                    var Q = this.controllers.hardware.getNearestKeyframeForAttribute(0, "scale", true);
                    Q.jsonProps.scale[0] = I;
                    J.add(Q);
                    var K = this.controllers.hardware.getAllKeyframesForAttribute("y");
                    var O = Math.round((H.height - l.pageMetrics.windowHeight + F) * 0.5 + this.localNavHeight + 20);
                    if (O > 0) {
                        var G = 0;
                        var E = O;
                        var z = O * -1;
                        K[0].jsonProps.y[0] = G;
                        K[0].jsonProps.y[1] = E;
                        K[1].jsonProps.y[0] = E;
                        K[1].jsonProps.y[1] = z;
                        var M = "100rh - 140vh";
                        var L = "100rh - 100vh";
                        var N = this.controllers.hardware.timeParser.parse(K[0], "100rh - 100vh");
                        M = N - this.anim.convertScrollPositionToTValue(O * 2);
                        K[0].jsonProps.end = M;
                        K[1].jsonProps.start = M;
                        K[1].jsonProps.end = L
                    } else {
                        var P = "26rh";
                        var D = "100rh - 100vh";
                        K[0].jsonProps.start = P;
                        K[0].jsonProps.end = D;
                        K[1].jsonProps.start = D;
                        K[1].jsonProps.end = D;
                        K[0].jsonProps.y[0] = 0;
                        K[0].jsonProps.y[1] = 0;
                        K[1].jsonProps.y[0] = 0;
                        K[1].jsonProps.y[1] = 0
                    }
                    J.add(K[0]);
                    J.add(K[1]);
                    K[2].jsonProps.y[0] = K[1].jsonProps.y[1];
                    K[2].jsonProps.y[1] = K[1].jsonProps.y[1] + "-25vh";
                    J.add(K[2]);
                    return I
                }
            }, {
                key: "updateOverlayKeyframes", value: function t(A, F, z) {
                    var E = (l.pageMetrics.windowHeight + z) / (this.mask.pathBounds.scaledHeight * 0.8);
                    var G = this.controllers.overlay.getAllKeyframesForAttribute("_scale");
                    G[0].jsonProps._scale[1] = E;
                    G[0].jsonProps._scale[1] = E;
                    G[1].jsonProps._scale[0] = E;
                    var J = this.mask.pathBounds.scaledHeight * 0.25;
                    var B = Math.max(this.anim.metrics.get(this.elements.hardware).width * 1.25, l.pageMetrics.windowHeight);
                    var C = B / J;
                    G[1].jsonProps._scale[1] = C;
                    var I = this.controllers.overlay.getNearestKeyframeForAttribute(0, "y");
                    var D = this.anim.metrics.get(this.mask.containerElement);
                    var H = D.height - (l.pageMetrics.windowHeight + z);
                    I.jsonProps.y[1] = H * -0.4;
                    G[0].jsonProps.start = this.anim.convertScrollPositionToTValue(this.globalNavBottom * 1.5);
                    F.add(I);
                    F.add(G[0]);
                    F.add(G[1]);
                    return E
                }
            }, {
                key: "updateVideoKeyframes", value: function v(F, C, z) {
                    var A = this.anim.metrics.get(this.elements.videoContainer);
                    var E = this.mask.pathBounds.scaledWidth / A.width / F * 1.37;
                    var B = this.mask.pathBounds.scaledHeight / A.height / F * 1.15;
                    this.elements.videoContainer.style.transform = "scale(" + E + "," + B + ")";
                    var D = this.controllers.videoContainer.getAllKeyframesForAttribute("scaleX");
                    D[0].jsonProps.scaleX[0] = E;
                    D[0].jsonProps.scaleY[0] = B;
                    D[0].jsonProps.scaleX[1] = E * C;
                    D[0].jsonProps.scaleY[1] = B * C;
                    D[1].jsonProps.scaleX[0] = E * C;
                    D[1].jsonProps.scaleY[0] = B * C;
                    D[0].jsonProps.start = this.anim.convertScrollPositionToTValue(this.globalNavBottom * 1.5);
                    z.add(D[0]);
                    z.add(D[1])
                }
            }]);
            return w
        }(f);
        k.IS_SUPPORTED = function () {
            return c.HERO_SUPPORTED
        };
        b.exports = k
    }, {
        "./MaskedX": 566,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 311,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/anim-system/Model/AnimSystemModel": 548,
        "ac-analytics": undefined
    }],
    566: [function (d, b, h) {
        var f = d("@marcom/ac-jetpack-lib/core/BaseComponent");
        var i = d("@marcom/ac-jetpack-lib/utils/Page");
        var c = d("@marcom/ac-jetpack-lib/model/EnabledFeatures");
        var j = d("@marcom/anim-system");
        var k = d("@marcom/anim-system/Model/AnimSystemModel");
        var m = d("@marcom/ac-feature/isRetina");
        var l = {update: d("@marcom/ac-raf-emitter/update"), draw: d("@marcom/ac-raf-emitter/draw")};
        var g = d("@marcom/sm-math-utils");
        var a = function (p) {
            _inherits(n, p);

            function n(E, G, B, A, C, F, D) {
                _classCallCheck(this, n);
                var z = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
                z.containerElement = z.section.element.querySelector(".aligner");
                z.canvas = document.createElement("canvas");
                z.element.appendChild(z.canvas);
                z._ctx = z.canvas.getContext("2d");
                z.metrics = {width: 0, height: 0, retinaScale: m() ? 2 : 1, canvasWidth: 0, canvasHeight: 0};
                z.scale = 1;
                z.needsDeferredResize = false;
                z.setHeightRatio(A);
                z.path = "-42.7,-50,-21,-50,0,-15.4,21,-50,42.7,-50,10.9,-1,44,50,22.3,50,0,13.4,-22.3,50,-44,50,-10.9,-1".split(/\ |,/).map(function (H) {
                    return parseFloat(H)
                });
                z.pathBounds = z.getPathBoundingBox(z.path);
                return z
            }

            _createClass(n, [{
                key: "setupEvents", value: function v() {
                    var A = this;
                    this.lastWindowWidth = k.pageMetrics.windowWidth;
                    this.anim = this.section.getComponentOfType("AnimSystem");
                    this.anim.metrics.add(this.containerElement);
                    this.anim.on("overlay-scale", function (B) {
                        A.scale = B.animationInfo._scale.current;
                        A._drawBackgroundRect();
                        A._drawMask()
                    });
                    this.controller = this.anim.getControllerForElement(this.section.element.querySelector(".overlay"));
                    var z = false;
                    l.update(function () {
                        var B = A.anim.getControllerForElement(A.section.element.querySelector(".aligner"));
                        var C = B.getNearestKeyframeForAttribute(0, "hero", true);
                        z = C.isInRange(A.anim.timelines.local)
                    });
                    l.draw(function () {
                        A.redrawMask(true);
                        if (!c.IS_DESKTOP) {
                            A.allOtherAnimSystems = [];
                            i.getPage()._sections.forEach(function (C) {
                                if (C.getComponentOfType("ModalContentComponent")) {
                                    return
                                }
                                var B = C.getAllComponentsOfType(k.COMPONENT_NAME);
                                B.forEach(function (D) {
                                    if (D !== A.anim) {
                                        A.allOtherAnimSystems.push(D);
                                        D.isEnabled = !z
                                    }
                                })
                            });
                            A.anim.on("hero:enter", function (B) {
                                A.allOtherAnimSystems.forEach(function (C) {
                                    C.isEnabled = false
                                })
                            });
                            A.anim.on("hero:exit", function (B) {
                                A.allOtherAnimSystems.forEach(function (C) {
                                    C.isEnabled = true
                                })
                            });
                            A.anim.on("hero-resize:exit", function (B) {
                                if (!A.needsDeferredResize) {
                                    return
                                }
                                A.needsDeferredResize = false;
                                A.allOtherAnimSystems.forEach(function (C) {
                                    C._onResizeDebounced(false)
                                })
                            })
                        }
                    })
                }
            }, {
                key: "setHeightRatio", value: function u(z) {
                    switch (z) {
                        case"xlarge":
                        case"large":
                        case"medium":
                            this.heightRatio = 0.6;
                            break;
                        case"small":
                        case"x-small":
                            this.heightRatio = 0.5;
                            break;
                        default:
                            this.heightRatio = 0.5;
                            console.log("no height ratio for bp:" + z);
                            break
                    }
                }
            }, {
                key: "onResizeImmediate", value: function x() {
                    if (!c.IS_DESKTOP && k.pageMetrics.windowWidth === this.lastWindowWidth) {
                        this.needsDeferredResize = true;
                        return
                    }
                    this.lastWindowWidth = k.pageMetrics.windowWidth;
                    this.setHeightRatio(this.section.cachedBreakpoint);
                    this.redrawMask(true)
                }
            }, {
                key: "onOrientationChange", value: function q(B, A, z, C) {
                    this.setHeightRatio(this.section.cachedBreakpoint);
                    this.redrawMask(true)
                }
            }, {
                key: "onBreakpoint", value: function o(A, C, z, B) {
                    this.setHeightRatio(A);
                    this.redrawMask(true)
                }
            }, {
                key: "redrawMask", value: function r(A) {
                    var B = this;
                    var z = !c.IS_DESKTOP ? 57 : 0;
                    if (A) {
                        l.update(function () {
                            B.trigger(n.ON_METRICS_WILL_UPDATE);
                            B.anim.metrics.refreshAll();
                            var C = B.anim.metrics.get(B.containerElement);
                            B.metrics.width = C.width;
                            B.metrics.height = C.height + z;
                            B.metrics.canvasWidth = B.metrics.width * B.metrics.retinaScale;
                            B.metrics.canvasHeight = B.metrics.height * B.metrics.retinaScale
                        })
                    }
                    l.draw(function () {
                        if (A) {
                            B._setCanvasSize()
                        }
                        B._drawBackgroundRect();
                        B._drawMask();
                        B.trigger(n.ON_METRICS_DID_UPDATE, z)
                    })
                }
            }, {
                key: "_setCanvasSize", value: function s() {
                    this.canvas.width = this.metrics.width * this.metrics.retinaScale;
                    this.canvas.height = this.metrics.height * this.metrics.retinaScale;
                    this.canvas.style.width = this.metrics.width + "px";
                    this.canvas.style.height = this.metrics.height + "px"
                }
            }, {
                key: "_drawBackgroundRect", value: function t() {
                    this._ctx.globalCompositeOperation = "source-over";
                    this._ctx.setTransform(1, 0, 0, 1, 0, 0);
                    this._ctx.fillStyle = "rgba(255,255,255,1.0)";
                    this._ctx.fillRect(0, 0, this.metrics.canvasWidth, this.metrics.canvasHeight)
                }
            }, {
                key: "_drawMask", value: function w() {
                    this._ctx.globalCompositeOperation = "destination-out";
                    var E = this.metrics.canvasWidth * 0.5;
                    var D = this.metrics.canvasHeight * 0.5;
                    this._ctx.setTransform(this.scale, 0, 0, this.scale, E, D);
                    this._ctx.fillStyle = "rgba(0,0,0,1)";
                    var C = this.metrics.canvasHeight * this.heightRatio;
                    var F = C / this.pathBounds.height;
                    this.pathBounds.scaledHeight = this.pathBounds.height * F / this.metrics.retinaScale;
                    this.pathBounds.scaledWidth = this.pathBounds.width * F / this.metrics.retinaScale;
                    this._ctx.beginPath();
                    this._ctx.moveTo(this.path[0] * F, this.path[1] * F);
                    for (var B = 2, A = this.path.length;
                         B < A; B += 2) {
                        var z = this.path[B + 0] * F;
                        var G = this.path[B + 1] * F;
                        this._ctx.lineTo(z, G)
                    }
                    this._ctx.fill()
                }
            }, {
                key: "getPathBoundingBox", value: function y(I) {
                    var G = Number.POSITIVE_INFINITY;
                    var B = Number.NEGATIVE_INFINITY;
                    var D = Number.NEGATIVE_INFINITY;
                    var A = Number.POSITIVE_INFINITY;
                    var H = 0;
                    var z = 0;
                    for (var C = 0; C < I.length; C += 2) {
                        var F = I[C + 0];
                        var E = I[C + 1];
                        A = Math.min(F, A);
                        D = Math.max(F, D);
                        G = Math.min(E, G);
                        B = Math.max(E, B);
                        H = B - G;
                        z = D - A
                    }
                    return {width: z, height: H, scaledWidth: 0, scaledHeight: 0}
                }
            }]);
            return n
        }(f);
        a.ON_METRICS_WILL_UPDATE = "ON_METRICS_WILL_UPDATE";
        a.ON_METRICS_DID_UPDATE = "ON_METRICS_DID_UPDATE";
        a.IS_SUPPORTED = function () {
            return c.HERO_SUPPORTED
        };
        b.exports = a
    }, {
        "@marcom/ac-feature/isRetina": 156,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 311,
        "@marcom/ac-jetpack-lib/utils/Page": 313,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/anim-system": 543,
        "@marcom/anim-system/Model/AnimSystemModel": 548,
        "@marcom/sm-math-utils": 556
    }],
    567: [function (f, h, d) {
        var c = f("@marcom/ac-jetpack-lib/core/BaseComponent");
        var g = f("@marcom/ac-jetpack-lib/model/EnabledFeatures");
        var i = f("@marcom/ac-feature/isRetina");
        var a = {update: f("@marcom/ac-raf-emitter/update"), draw: f("@marcom/ac-raf-emitter/draw")};
        var b = function (j) {
            _inherits(k, j);
            _createClass(k, null, [{
                key: "IS_SUPPORTED", value: function l() {
                    return g.HERO_SUPPORTED
                }
            }]);

            function k(v, y, s, r, t, x, u) {
                _classCallCheck(this, k);
                var w = _possibleConstructorReturn(this, (k.__proto__ || Object.getPrototypeOf(k)).apply(this, arguments));
                w.canvasGridElement = null;
                w.lastResult = null;
                w.isRetina = i();
                w._createCanvasFromImage = w._createCanvasFromImage.bind(w);
                a.update(function () {
                    w._createCanvasFromImage()
                });
                return w
            }

            _createClass(k, [{
                key: "onRetinaChange", value: function q(u, s, r, t) {
                    this.isRetina = u;
                    this.onBreakpoint()
                }
            }, {
                key: "onBreakpoint", value: function o(s, v, r, u) {
                    var t = this;
                    a.draw(function () {
                        t._removeCanvasGrid();
                        t.element.style.backgroundImage = "";
                        t.element.style.display = "";
                        t._createCanvasFromImage()
                    })
                }
            }, {
                key: "_removeCanvasGrid", value: function n() {
                    var r = this.element.querySelectorAll(".canvas-grid");
                    r.forEach(function (s) {
                        s.parentElement.removeChild(s)
                    })
                }
            }, {
                key: "_createCanvasFromImage", value: function p() {
                    var s = this;
                    var r = this._loadImageIntoCanvas(this.element);
                    r.then(function (t) {
                        s.canvasGridElement = t;
                        a.draw(function () {
                            s.element.appendChild(s.canvasGridElement);
                            s.element.style.backgroundImage = "none"
                        })
                    })
                }
            }, {
                key: "_loadImageIntoCanvas", value: function m(s) {
                    var r = this.isRetina ? 2 : 1;
                    return new Promise(function (D, G) {
                        var w = document.createElement("canvas");
                        var A = document.createElement("div");
                        A.classList.add("canvas-grid");
                        var t = getComputedStyle(s);
                        var x = t.backgroundImage;
                        var y = x.match(/url\("?(.*?)"?\)/i)[1];
                        var B = t.backgroundSize.match(/([0-9]+)px/g);
                        var F = {width: parseFloat(B[0]), height: parseFloat(B[1])};
                        var v = Math.round(F.width);
                        var C = Math.round(F.height);
                        A.style.width = v + "px";
                        A.style.height = C + "px";
                        w.style.position = "absolute";
                        w.width = v * r;
                        w.height = C * r;
                        w.style.width = v + "px";
                        w.style.height = C + "px";
                        var E = w.getContext("2d");
                        var z = new Image();
                        z.src = y;
                        z.addEventListener("load", function u() {
                            z.removeEventListener("load", u);
                            E.drawImage(z, 0, 0, z.naturalWidth, z.naturalHeight, 0, 0, v * r, C * r);
                            A.appendChild(w);
                            D(A)
                        })
                    })
                }
            }]);
            return k
        }(c);
        h.exports = b
    }, {
        "@marcom/ac-feature/isRetina": 156,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 311,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521
    }],
    568: [function (d, c, g) {
        var k = d("@marcom/ac-jetpack-fuel/components/media-object/MediaObjectComponent");
        var f = d("@marcom/ac-raf-emitter/update");
        var l = d("@marcom/ac-raf-emitter/draw");
        var h = d("../shared/model/inlineVideoAutoplaySupported");
        var i = ["large", "medium", "small"];
        var m = "/105/media/{{locale}}/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/{{name}}/{{viewport}}";
        k.URI_PATTERN = m;
        var b = {};
        var j = {
            SCOPE: "data-media-scope",
            CONTROLS: "data-media-controls-{{scope}}",
            PLAY: "data-media-play",
            REPLAY: "data-media-replay"
        };
        var a = function (F) {
            _inherits(H, F);
            _createClass(H, null, [{
                key: "IS_SUPPORTED", value: function o() {
                    return h()
                }
            }]);

            function H() {
                _classCallCheck(this, H);
                var L = _possibleConstructorReturn(this, (H.__proto__ || Object.getPrototypeOf(H)).apply(this, arguments));
                L._mediaControls = {
                    scope: L.element.hasAttribute(j.SCOPE) ? L.element.getAttribute(j.SCOPE) : null,
                    play: null,
                    replay: null
                };
                L._getControlElements();
                L._state = {reduceMotion: window.matchMedia("(prefers-reduced-motion)").matches};
                L._allowMediaPauseOnModalOpen = document.documentElement.classList.contains("high-gpu");
                return L
            }

            _createClass(H, [{
                key: "_getControlElements", value: function A() {
                    var M = j.CONTROLS.replace(/{{scope}}/, this._mediaControls.scope);
                    var L = this.section.element.querySelector("[" + M + "]");
                    if (L) {
                        this._mediaControls.play = L.querySelector("[" + j.PLAY + "]");
                        this._mediaControls.replay = L.querySelector("[" + j.REPLAY + "]")
                    }
                }
            }, {
                key: "_onElementEngaged", value: function x(L) {
                    this.element.classList.add("engaged");
                    if (this._media && (!this._isEngaged || !this._media.getEnded() || this.rewindWhenInactive || this.loop) && !this._state.reduceMotion) {
                        this._isEngaged = true;
                        this._playMedia()
                    }
                }
            }, {
                key: "_onMediaEnhanced", value: function J() {
                    var L = this;
                    _get(H.prototype.__proto__ || Object.getPrototypeOf(H.prototype), "_onMediaEnhanced", this).call(this);
                    l(function () {
                        if (L._state.reduceMotion && L._mediaControls.play) {
                            L._mediaControls.play.disabled = false;
                            L._mediaControls.play.classList.add("active")
                        }
                    })
                }
            }, {
                key: "_onControlClickPlay", value: function I() {
                    var L = this;
                    l(function () {
                        L._mediaControls.play.disabled = true;
                        L._mediaControls.play.classList.remove("active")
                    });
                    this._mediaControls.play.removeEventListener("click", this._onControlClickPlay);
                    this._playMedia()
                }
            }, {
                key: "_onControlClickReplay", value: function q() {
                    this._playMedia()
                }
            }, {
                key: "_onMediaPlay", value: function K() {
                    var L = this;
                    l(function () {
                        if (L._mediaControls.replay) {
                            L._mediaControls.replay.disabled = true
                        }
                    })
                }
            }, {
                key: "_onMediaEnded", value: function C() {
                    var L = this;
                    l(function () {
                        if (L._mediaControls.replay) {
                            L._mediaControls.replay.disabled = false;
                            L._mediaControls.replay.classList.add("active")
                        }
                    })
                }
            }, {
                key: "_setupControlsEvents", value: function s() {
                    this._onControlClickPlay = this._onControlClickPlay.bind(this);
                    this._onControlClickReplay = this._onControlClickReplay.bind(this);
                    this._onMediaPlay = this._onMediaPlay.bind(this);
                    this._onMediaEnded = this._onMediaEnded.bind(this);
                    this._media.on("play", this._onMediaPlay);
                    this._media.on("ended", this._onMediaEnded);
                    if (this._mediaControls.play) {
                        this._mediaControls.play.addEventListener("click", this._onControlClickPlay)
                    }
                    if (this._mediaControls.replay) {
                        this._mediaControls.replay.addEventListener("click", this._onControlClickReplay)
                    }
                }
            }, {
                key: "_teardownControlsEvents", value: function p() {
                    if (this._media) {
                        this._media.off("play", this._onMediaPlay);
                        this._media.off("ended", this._onMediaEnded)
                    }
                    if (this._mediaControls.play) {
                        this._mediaControls.play.removeEventListener("click", this._onControlClickPlay)
                    }
                    if (this._mediaControls.replay) {
                        this._mediaControls.replay.removeEventListener("click", this._onControlClickReplay)
                    }
                }
            }, {
                key: "_resetControls", value: function y() {
                    if (this._mediaControls.play) {
                        this._mediaControls.play.classList.remove("active");
                        this._mediaControls.play.disabled = true
                    }
                    if (this._mediaControls.replay) {
                        this._mediaControls.replay.classList.remove("active");
                        this._mediaControls.replay.disabled = true
                    }
                }
            }, {
                key: "_rebuildIfChanged", value: function E(P, O) {
                    var N = JSON.stringify(this._getMediaSource());
                    this[P] = O;
                    var M = JSON.stringify(this._getMediaSource());
                    if (N != M) {
                        var L = this._mediaIsPlaying;
                        this._teardownControlsEvents();
                        this._resetControls();
                        this._destroyMedia();
                        this._initializeMedia();
                        this._setupControlsEvents();
                        if (this._isSectionVisible) {
                            if (L && !this._state.reduceMotion) {
                                this._playMedia()
                            } else {
                                this._loadMedia()
                            }
                        }
                    }
                }
            }, {
                key: "setupEvents", value: function t() {
                    var L = this;
                    _get(H.prototype.__proto__ || Object.getPrototypeOf(H.prototype), "setupEvents", this).call(this);
                    this._didPlay = false;
                    this._media.once("play", function () {
                        L._didPlay = true
                    });
                    this._setupControlsEvents()
                }
            }, {
                key: "teardownEvents", value: function D() {
                    this._teardownControlsEvents();
                    _get(H.prototype.__proto__ || Object.getPrototypeOf(H.prototype), "teardownEvents", this).call(this)
                }
            }, {
                key: "destroy", value: function G() {
                    this._resetControls();
                    _get(H.prototype.__proto__ || Object.getPrototypeOf(H.prototype), "destroy", this).call(this)
                }
            }, {
                key: "_destroyMedia", value: function n() {
                    if (this._media) {
                        this._media.off();
                        this._pauseMedia();
                        if (!this._media.getDestroyed()) {
                            this._media._destroy();
                            this._media._setDestroyed(true);
                            this._media.model.off();
                            this._media.off()
                        }
                        this._media.destroy();
                        this._media = null;
                        this._canLoad = true;
                        this._loadCalled = false;
                        this._enhanceCalled = false;
                        this._mediaIsPlaying = false;
                        this._mediaHasPlayed = false;
                        this._isShown = false;
                        this._playOnceReady = false
                    }
                    if (this._fadeClip && this._fadeClip.playing()) {
                        this._fadeClip.destroy();
                        this._fadeClip = null
                    }
                }
            }, {
                key: "hideVideo", value: function v(M) {
                    var L = this;
                    this.isEnabled = false;
                    l(function () {
                        if (L._mediaIsPlaying) {
                            L._media.pause();
                            L._media.goToPercent(1)
                        }
                        l(function () {
                            L._media.mediaElement.style.display = "none";
                            if (M) {
                                l(function () {
                                    M()
                                })
                            }
                        })
                    })
                }
            }, {
                key: "showVideo", value: function r(M) {
                    var L = this;
                    this.isEnabled = true;
                    l(function () {
                        L._media.mediaElement.style.display = "";
                        if (M) {
                            l(function () {
                                M()
                            })
                        }
                    })
                }
            }, {
                key: "modalWillOpen", value: function B(L) {
                    var M = this;
                    f(function () {
                        if (M._allowMediaPauseOnModalOpen && M._media.el.classList.contains("element-in-view")) {
                            l(function () {
                                M._pauseMedia();
                                L()
                            });
                            return
                        }
                        M.hideVideo(L)
                    })
                }
            }, {
                key: "modalDidOpen", value: function w(L) {
                    this.showVideo(L)
                }
            }, {
                key: "modalWillClose", value: function u(L) {
                    var M = this;
                    f(function () {
                        if (M._allowMediaPauseOnModalOpen && M._media.el.classList.contains("element-in-view")) {
                            l(function () {
                                M._pauseMedia();
                                L();
                                L = null
                            });
                            return
                        }
                        M.hideVideo(L);
                        L = null
                    })
                }
            }, {
                key: "modalDidClose", value: function z(L) {
                    var M = this;
                    f(function () {
                        if (M._allowMediaPauseOnModalOpen && M._media && M._media.el.classList.contains("element-in-view")) {
                            if (!M._media.getEnded() && M._didPlay) {
                                l(function () {
                                    M.showVideo();
                                    M._playMedia();
                                    L();
                                    L = null
                                });
                                return
                            }
                        }
                        M.showVideo(L);
                        L = null
                    })
                }
            }]);
            return H
        }(k);
        c.exports = a
    }, {
        "../shared/model/inlineVideoAutoplaySupported": 594,
        "@marcom/ac-jetpack-fuel/components/media-object/MediaObjectComponent": 291,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521
    }],
    569: [function (d, b, i) {
        var f = d("@marcom/ac-jetpack-lib/core/BaseComponent");
        var j = d("@marcom/ac-jetpack-lib/utils/Page");
        var c = d("@marcom/ac-useragent");
        var g = d("@marcom/ac-feature");
        var h = d("@marcom/ac-raf-emitter/update");
        var k = d("@marcom/ac-raf-emitter/draw");
        var a = function (l) {
            _inherits(o, l);

            function o(D, F, y, B, z, E, A) {
                _classCallCheck(this, o);
                var C = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
                C.modalName = F.getAttribute("data-modal-content");
                C.modalHeroContent = Array.from(F.querySelectorAll("[data-load-images-with-primary] [data-visibility-trigger]"));
                C.progressiveImageComponent = null;
                C.progressiveImages = [];
                C.progressiveImageDataAttribute = null;
                return C
            }

            _createClass(o, [{
                key: "setupEvents", value: function t() {
                    this._animSystems = this.section.getAllComponentsOfType("AnimSystem");
                    this.progressiveImageComponent = this.section.getComponentOfType("ProgressiveImage");
                    this.disableAnimSystems()
                }
            }, {
                key: "enableAnimSystems", value: function q() {
                    this._animSystems.forEach(function (y) {
                        y.isEnabled = true
                    })
                }
            }, {
                key: "disableAnimSystems", value: function x() {
                    this._animSystems.forEach(function (y) {
                        y.isEnabled = false
                    })
                }
            }, {
                key: "activateModalHeroContent", value: function s() {
                    this.modalHeroContent.forEach(function (y) {
                        y.classList.add("content-active")
                    })
                }
            }, {
                key: "deactivateModalHeroContent", value: function v() {
                    var y = this;
                    this.progressiveImages.forEach(function (z) {
                        return z.setAttribute(y.progressiveImageDataAttribute, "")
                    });
                    this.progressiveImageComponent.imageLoader._didCallLoad = false;
                    this.progressiveImageComponent.imageLoader.loadingQueue.destroy()
                }
            }, {
                key: "recalcModalAnimSystems", value: function p() {
                    this._animSystems.forEach(function (y) {
                        y._onResizeDebounced(true)
                    })
                }
            }, {
                key: "modalWillOpen", value: function w(A, z, B) {
                    var y = this;
                    if (B.name !== this.modalName) {
                        A();
                        return
                    }
                    k(function () {
                        y.activateModalHeroContent();
                        A()
                    })
                }
            }, {
                key: "modalDidOpen", value: function r(A, z, B) {
                    var y = this;
                    if (B.name !== this.modalName) {
                        A();
                        return
                    }
                    this.enableAnimSystems();
                    h(function () {
                        y.recalcModalAnimSystems();
                        A()
                    })
                }
            }, {
                key: "modalWillClose", value: function u(z, y, A) {
                    if (A.name !== this.modalName) {
                        z();
                        return
                    }
                    this.disableAnimSystems();
                    z()
                }
            }, {
                key: "modalDidClose", value: function n(A, z, B) {
                    var y = this;
                    if (B.name !== this.modalName) {
                        A();
                        return
                    }
                    k(function () {
                        y.deactivateModalHeroContent();
                        A()
                    })
                }
            }, {
                key: "onSectionWillAppear", value: function m() {
                    var y = this;
                    h(function () {
                        y.progressiveImages = y.progressiveImageComponent.imageLoader.els;
                        y.progressiveImageDataAttribute = y.progressiveImageComponent.imageLoader.loadingOptions.imageDataAttribute
                    })
                }
            }]);
            return o
        }(f);
        b.exports = a
    }, {
        "@marcom/ac-feature": 144,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-jetpack-lib/utils/Page": 313,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/ac-useragent": 522
    }],
    570: [function (b, c, a) {
        var g = b("./MediaObject");
        var d = b("../shared/helpers/isFallbackGPU");
        var f = function (h) {
            _inherits(j, h);

            function j() {
                _classCallCheck(this, j);
                return _possibleConstructorReturn(this, (j.__proto__ || Object.getPrototypeOf(j)).apply(this, arguments))
            }

            _createClass(j, null, [{
                key: "IS_SUPPORTED", value: function i() {
                    if (d) {
                        return false
                    }
                    return g.IS_SUPPORTED()
                }
            }]);
            return j
        }(g);
        c.exports = f
    }, {"../shared/helpers/isFallbackGPU": 588, "./MediaObject": 568}],
    571: [function (f, h, d) {
        var c = f("@marcom/ac-jetpack-lib/core/BaseComponent");
        var g = c.prototype;
        var a = f("@marcom/ac-raf-emitter/draw");
        var i = "modal-content-width-active";
        var b = function (m) {
            _inherits(k, m);

            function k(s, u, o, r, p, t, q) {
                _classCallCheck(this, k);
                var n = _possibleConstructorReturn(this, (k.__proto__ || Object.getPrototypeOf(k)).apply(this, arguments));
                n.classTarget = document.documentElement;
                return n
            }

            _createClass(k, [{
                key: "modalWillOpen", value: function l(p, o, q) {
                    var n = this;
                    a(function () {
                        n.classTarget.classList.add(i);
                        p()
                    })
                }
            }, {
                key: "modalDidClose", value: function j(o, n, p) {
                    var q = this;
                    a(function () {
                        q.classTarget.classList.remove(i);
                        o()
                    })
                }
            }]);
            return k
        }(c);
        h.exports = b
    }, {"@marcom/ac-jetpack-lib/core/BaseComponent": 306, "@marcom/ac-raf-emitter/draw": 519}],
    572: [function (c, a, h) {
        var d = c("@marcom/ac-jetpack-lib/core/BaseComponent");
        var j = d.prototype;
        var b = c("@marcom/ac-useragent");
        var f = c("@marcom/ac-feature");
        var g = c("@marcom/ac-raf-emitter/update");

        function k(p, r, l, o, m, q, n) {
            d.apply(this, arguments)
        }

        var i = k.prototype = Object.create(d.prototype);
        i.setupEvents = function () {
            this._animSystems = this.section.getAllComponentsOfType("AnimSystem")
        };
        i.destroy = function () {
            j.destroy.call(this)
        };
        i.recalcModalAnimSystems = function () {
            this._animSystems.forEach(function (l) {
                l._onResizeDebounced(true)
            })
        };
        i.modalWillOpen = function (l) {
            this._animSystems.forEach(function (m) {
                m.isEnabled = false
            });
            l()
        };
        i.modalWillClose = function (l) {
            var m = this;
            if (this._getAllowAnimRefreshOnWillClose()) {
                setTimeout(function () {
                    m._handleModalClose()
                }, 250)
            }
            l()
        };
        i.modalDidClose = function (l) {
            if (!this._getAllowAnimRefreshOnWillClose()) {
                this._handleModalClose(l);
                return
            }
            l()
        };
        i._handleModalClose = function (l) {
            var m = this;
            this._animSystems.forEach(function (n) {
                n.isEnabled = true
            });
            g(function () {
                m.recalcModalAnimSystems();
                if (l) {
                    l()
                }
            })
        };
        i._getAllowAnimRefreshOnWillClose = function () {
            if (b.browser.chrome && !b.os.android) {
                return true
            }
            return false
        };
        a.exports = k
    }, {
        "@marcom/ac-feature": 144,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/ac-useragent": 522
    }],
    573: [function (d, f, c) {
        var g = d("@marcom/ac-progressive-image-loader/ProgressiveImageComponent");
        var i = d("@marcom/ac-progressive-image-loader/ProgressiveImageLoader");
        var a = d("../modal/ModalTriggers");
        var b = a.DATA_ATTRIBUTES.open;
        var h = function (m) {
            _inherits(l, m);

            function l() {
                _classCallCheck(this, l);
                var n = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
                n._loadOptions = Object.assign({imageAnimate: false}, n._loadOptions);
                n.isModalSection = n.element.classList.contains("section-modal");
                n.modalTriggerEl = n.element.querySelector("[" + b + "]");
                if (n.modalTriggerEl) {
                    n.modalName = n.modalTriggerEl.getAttribute(b);
                    n.priorityContainer = document.querySelector('[data-modal-content="' + n.modalName + '"] [data-load-images-with-primary]');
                    if (n.priorityContainer) {
                        n.priorityImageLoader = new i({container: n.priorityContainer})
                    }
                }
                return n
            }

            _createClass(l, [{
                key: "onSectionWillAppearWithPadding", value: function k() {
                    if (this.isModalSection) {
                        return
                    }
                    this.imageLoader.load(this._loadOptions);
                    if (this.priorityImageLoader) {
                        this.priorityImageLoader.load(this._loadOptions)
                    }
                }
            }, {
                key: "onSectionWillAppear", value: function j() {
                    if (!this.isModalSection) {
                        return
                    }
                    this.imageLoader.load(this._loadOptions)
                }
            }]);
            return l
        }(g);
        f.exports = h
    }, {
        "../modal/ModalTriggers": 581,
        "@marcom/ac-progressive-image-loader/ProgressiveImageComponent": 505,
        "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 506
    }],
    574: [function (d, c, g) {
        var f = d("@marcom/ac-jetpack-lib/core/BaseComponent");
        var n = d("../shared/helpers/ensureLeadingSlash");
        var a = d("../shared/helpers/simpleTemplate");
        var l = d("../shared/helpers/clampViewport");
        var i = d("@marcom/ac-cname/cname");
        var k = d("@marcom/ac-jetpack-lib/utils/Page");
        var m = "data-video";
        var j = ["large", "medium", "small"];
        var h = {
            locale: "us",
            pathTemplate: "/105/media/${locale}/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/${name}",
            retina: true,
            autoLoad: true,
            autoplayEvent: "autoplay",
            muted: true,
            playsInline: true,
            loop: false
        };
        var b = function (A) {
            _inherits(q, A);

            function q() {
                _classCallCheck(this, q);
                var D = _possibleConstructorReturn(this, (q.__proto__ || Object.getPrototypeOf(q)).apply(this, arguments));
                var C = q.parseOptionsAttribute(D.element);
                C = Object.assign({}, h, C);
                if (typeof C.name !== "string") {
                    console.error('VideoComponent must have a "name" that is a string.', D.element);
                    return _possibleConstructorReturn(D)
                }
                D.locale = C.locale;
                D.name = C.name;
                D.retina = C.retina;
                D.pathTemplate = C.pathTemplate;
                D.animSystemEvent = C.autoplayEvent;
                D.muted = C.muted;
                D.playsInline = C.playsInline;
                D.loop = C.loop;
                D.alwaysReloadOnViewportChange = true;
                D.widestViewportLoaded = l(D.section.cachedBreakpoint);
                D._motionQuery = window.matchMedia("(prefers-reduced-motion)");
                D._motionQuery.addListener(function () {
                    D.updatePrefersReducedMotion()
                });
                D.updatePrefersReducedMotion();
                D.createVideoElement();
                return D
            }

            _createClass(q, [{
                key: "updatePrefersReducedMotion", value: function u() {
                    this.prefersReducedMotion = this._motionQuery.matches
                }
            }, {
                key: "setupEvents", value: function x() {
                    var D = this;
                    var C = this.section.getComponentOfType("AnimSystem");
                    var E = function E(F) {
                        if (D.element === F.element) {
                            D.autoplay()
                        }
                    };
                    if (C) {
                        C.on("anim:" + this.animSystemEvent, E);
                        C.on("anim:" + this.animSystemEvent + ":enter", E)
                    }
                    this.element.addEventListener("click", function () {
                        D.play()
                    })
                }
            }, {
                key: "onBreakpoint", value: function p(D, C) {
                    if (this.shouldLoadNewAssetForViewport(D)) {
                        this.element.removeAttribute("data-video-loaded");
                        this.hasCalledLoad = false;
                        this.loadingPromise = this.load()
                    }
                }
            }, {
                key: "createVideoElement", value: function v() {
                    this.video = document.createElement("video");
                    this.video.muted = this.muted;
                    this.video.playsInline = this.playsInline;
                    this.video.loop = this.loop;
                    this.element.appendChild(this.video)
                }
            }, {
                key: "shouldLoadNewAssetForViewport", value: function B(D) {
                    if (this.alwaysReloadOnViewportChange) {
                        this.widestViewportLoaded = D;
                        return true
                    }
                    var E = [this.widestViewportLoaded, D].map(l).map(function (F) {
                        return j.indexOf(F)
                    });
                    var C = E[0] > E[1];
                    if (C) {
                        this.widestViewportLoaded = l(D)
                    }
                    return C
                }
            }, {
                key: "onSectionWillAppearWithPadding", value: function o() {
                    if (!this.hasCalledLoad) {
                        this.load()
                    }
                }
            }, {
                key: "load", value: function z() {
                    var C = this;
                    this.hasCalledLoad = true;
                    this.loadingPromise = new Promise(function (E, D) {
                        C.video.addEventListener("canplaythrough", function () {
                            C.element.setAttribute("data-video-loaded", "");
                            k.deepRefreshAllElementMetrics();
                            E()
                        });
                        C.video.src = C.basePath + "/" + C.filename
                    });
                    return this.loadingPromise
                }
            }, {
                key: "play", value: function t() {
                    var C = this;
                    return new Promise(function (E, D) {
                        if (!C.loadingPromise) {
                            return E()
                        }
                        C.loadingPromise.then(function () {
                            C.video.play().then(E, D);
                            C.loadingPromise = null
                        })
                    })
                }
            }, {
                key: "autoplay", value: function s() {
                    var C = this;
                    return new Promise(function (E, D) {
                        if (C.prefersReducedMotion) {
                            return D()
                        }
                        C.play().then(E, D)
                    })
                }
            }, {
                key: "basePath", get: function r() {
                    if (this._cachedBasePath) {
                        return this._cachedBasePath
                    }
                    var C = a(this.pathTemplate, this);
                    C = n(C);
                    C = i(C);
                    this._cachedBasePath = C;
                    return C
                }
            }, {
                key: "filename", get: function r() {
                    return this.widestViewportLoaded + ".mp4"
                }
            }], [{
                key: "IS_SUPPORTED", value: function w() {
                    return true
                }
            }, {
                key: "parseOptionsAttribute", value: function y(D) {
                    var C = null;
                    if (D.hasAttribute(m)) {
                        try {
                            C = JSON.parse(D.getAttribute(m))
                        } catch (E) {
                            console.error("Error parsing JSON options for VideoComponent.", D)
                        }
                    } else {
                        console.error('VideoComponent must have a "data-video" attribute with options.', D)
                    }
                    return C
                }
            }]);
            return q
        }(f);
        c.exports = b
    }, {
        "../shared/helpers/clampViewport": 585,
        "../shared/helpers/ensureLeadingSlash": 586,
        "../shared/helpers/simpleTemplate": 590,
        "@marcom/ac-cname/cname": 4,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-jetpack-lib/utils/Page": 313
    }],
    575: [function (c, d, b) {
        var f = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var a = function (n) {
            _inherits(t, n);

            function t(z) {
                _classCallCheck(this, t);
                var y = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                y._element = z;
                y._loader = y._element.querySelector(".video-controls-loader");
                y._button = y._element.querySelector(".video-controls-button");
                y._icon = y._element.querySelector(".video-controls-icon");
                y._hasVideoBeenIntitated = false;
                y._buttonState = y._getButtonState();
                y._analyticsTag = y._getAnalyticsTag();
                y._initialize();
                return y
            }

            _createClass(t, [{
                key: "_initialize", value: function x() {
                    this._setupEvents()
                }
            }, {
                key: "_setupEvents", value: function s() {
                    this._button.addEventListener("click", this._handleButtonClick.bind(this));
                    this._updateAnalytics("play")
                }
            }, {
                key: "_handleButtonClick", value: function l(y) {
                    if (!this._hasVideoBeenIntitated) {
                        this._hasVideoBeenIntitated = true;
                        this._startLoader();
                        this._updateButtonState()
                    } else {
                        this._updateButtonState()
                    }
                }
            }, {
                key: "_updateButtonState", value: function p() {
                    var y = this._buttonState;
                    var z = this._buttonState === "play" ? "pause" : "play";
                    this._updateAriaLabel(z);
                    this._updateButtonIcon(y, z);
                    this._setButtonState(z);
                    if (this._hasVideoBeenIntitated) {
                        this.trigger("controls_" + y)
                    }
                    this._updateAnalytics(z)
                }
            }, {
                key: "_getButtonState", value: function m() {
                    return this._icon.getAttribute("data-button-state")
                }
            }, {
                key: "_setButtonState", value: function g(y) {
                    this._icon.setAttribute("data-button-state", y);
                    this._buttonState = this._getButtonState()
                }
            }, {
                key: "_updateAriaLabel", value: function w(z) {
                    var y = this._button.getAttribute("data-" + z + "-label");
                    this._button.setAttribute("aria-label", y)
                }
            }, {
                key: "_updateButtonIcon", value: function u(y, z) {
                    this._icon.classList.remove("image-dual-cameras-modal-" + y + "-button");
                    this._icon.classList.add("image-dual-cameras-modal-" + z + "-button")
                }
            }, {
                key: "_getAnalyticsTag", value: function o() {
                    return this._button.getAttribute("data-analytics-click")
                }
            }, {
                key: "_updateAnalytics", value: function k(z) {
                    var y = this._analyticsTag + "-" + z;
                    this._button.setAttribute("data-analytics-click", y)
                }
            }, {
                key: "_startLoader", value: function j() {
                    this._showLoader();
                    this.trigger("controls_load")
                }
            }, {
                key: "_showLoader", value: function h() {
                    this._loader.classList.add("show");
                    this._button.classList.add("hide")
                }
            }, {
                key: "_hideLoader", value: function q() {
                    this._loader.classList.remove("show");
                    this._button.classList.remove("hide")
                }
            }, {
                key: "end", value: function i() {
                    var y = this._buttonState;
                    var z = "play";
                    this._updateAriaLabel(z);
                    this._updateButtonIcon(y, z);
                    this._setButtonState(z);
                    this._updateAnalytics(z)
                }
            }, {
                key: "reset", value: function v() {
                    if (this._hasVideoBeenIntitated) {
                        this._startLoader()
                    } else {
                        this.end()
                    }
                }
            }, {
                key: "loaded", value: function r() {
                    this._hideLoader();
                    this.trigger("controls_play")
                }
            }]);
            return t
        }(f);
        d.exports = a
    }, {"@marcom/ac-event-emitter-micro": 128}],
    576: [function (g, h, f) {
        var d = g("@marcom/ac-jetpack-lib/core/BaseComponent");
        var c = g("../../shared/video/MediaObjectVideo");
        var b = g("./VideoControls");
        var a = g("@marcom/ac-raf-emitter/draw");
        var i = function (w) {
            _inherits(j, w);

            function j(C, E, z, x, A, D, B) {
                _classCallCheck(this, j);
                var y = _possibleConstructorReturn(this, (j.__proto__ || Object.getPrototypeOf(j)).apply(this, arguments));
                y.name = "VideoPlayer_" + B;
                y._video = null;
                y._videoControls = null;
                return y
            }

            _createClass(j, [{
                key: "setupEvents", value: function p() {
                    this._initialize()
                }
            }, {
                key: "_initialize", value: function n() {
                    this._createVideo();
                    this._createVideoControls()
                }
            }, {
                key: "_createVideo", value: function l() {
                    var y = this.element.querySelector(".video-playback");
                    var z = y.getAttribute("data-media-name");
                    var x = {autoload: false};
                    this._video = new c(z, y, x);
                    this._video.on("video_ready", this._onVideoReady.bind(this));
                    this._video.on("video_ended", this._onVideoEnded.bind(this));
                    this._video.on("video_reset", this._onVideoReset.bind(this))
                }
            }, {
                key: "_onVideoReady", value: function t() {
                    this._videoControls.loaded()
                }
            }, {
                key: "_onVideoEnded", value: function s() {
                    this._videoControls.end()
                }
            }, {
                key: "_onVideoReset", value: function o() {
                    this._videoControls.reset()
                }
            }, {
                key: "_createVideoControls", value: function v() {
                    var x = this.element.querySelector(".video-controls");
                    this._videoControls = new b(x);
                    this._videoControls.on("controls_load", this._onLoad.bind(this));
                    this._videoControls.on("controls_play", this._onPlay.bind(this));
                    this._videoControls.on("controls_pause", this._onPause.bind(this))
                }
            }, {
                key: "_onLoad", value: function m() {
                    this._video.load()
                }
            }, {
                key: "_onPlay", value: function r() {
                    this._video.mediaManager.mediaObject.mediaElement.play()
                }
            }, {
                key: "_onPause", value: function u() {
                    this._video.mediaManager.mediaObject.mediaElement.pause()
                }
            }, {
                key: "modalWillClose", value: function q(y) {
                    var x = this;
                    a(function () {
                        x._video.mediaManager.mediaObject.mediaElement.pause();
                        x._videoControls.end();
                        a(function () {
                            x._video._videoElement.style.display = "none";
                            a(function () {
                                y()
                            })
                        })
                    });
                    this._video.mediaManager.mediaObject.mediaElement.pause();
                    this._videoControls.end();
                    this._video._videoElement.style.display = "none"
                }
            }, {
                key: "modalDidClose", value: function k(x) {
                    this._video._videoElement.style.display = "";
                    a(function () {
                        x()
                    })
                }
            }]);
            return j
        }(d);
        h.exports = i
    }, {
        "../../shared/video/MediaObjectVideo": 598,
        "./VideoControls": 575,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 306,
        "@marcom/ac-raf-emitter/draw": 519
    }],
    577: [function (j, f, v) {
        try {
            var x = j("@marcom/ac-analytics");
            var n = x.createBasicObserverSuite()
        } catch (t) {
        }
        var s = j("@marcom/ac-get-param");
        var p = j("@marcom/ac-jetpack-lib/core/BasePage");
        var h = j("@marcom/ac-jetpack-lib/utils/Page");
        var a = j("@marcom/ac-jetpack-lib/model/ComponentMap");
        var k = j("@marcom/ac-jetpack-lib/model/SectionMap");
        var o = j("./shared/PassiveSection");
        var w = j("@marcom/anim-system");
        var m = j("@marcom/anim-system/Model/AnimSystemModel");
        var r = j("@marcom/ac-jetpack-lib/model/EnabledFeatures");
        var i = j("./shared/helpers/History/HistoryHelper");
        var b = j("./shared/model/EnabledFeatures");
        var d = j("./shared/model/ComponentMap");
        var u = j("./modal/ModalController.js");
        NodeList.prototype.forEach = Array.prototype.forEach;
        var l = {
            initialize: function c() {
                k.BaseSection = o;
                Object.assign(a, d);
                if (s("no-preloading", false)) {
                    a.ProgressiveImage = a.BaseComponent;
                    document.documentElement.classList.remove("progressive-image")
                }
                r.extend(b);
                r.init();
                h.onPageHeightSettled(l.instantiatePageController)
            }, instantiatePageController: function g() {
                u.initialize({analyticsSectionObservers: n}).then(function () {
                    var y = new p();
                    h.on(h.DEEP_REFRESH_ALL_METRICS, w.onResizedDebounced);
                    l.addFooterAsSection(y);
                    u.setPage(y);
                    new i(y)
                })["catch"](function (y) {
                    console.error(y, y.stack)
                })
            }, addFooterAsSection: function q(z) {
                var y = document.querySelector("[data-modal-footer-container]");
                z.addSection(y)
            }
        };
        f.exports = l.initialize()
    }, {
        "./modal/ModalController.js": 580,
        "./shared/PassiveSection": 583,
        "./shared/helpers/History/HistoryHelper": 584,
        "./shared/model/ComponentMap": 592,
        "./shared/model/EnabledFeatures": 593,
        "@marcom/ac-analytics": undefined,
        "@marcom/ac-get-param": 288,
        "@marcom/ac-jetpack-lib/core/BasePage": 307,
        "@marcom/ac-jetpack-lib/model/ComponentMap": 309,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 311,
        "@marcom/ac-jetpack-lib/model/SectionMap": 312,
        "@marcom/ac-jetpack-lib/utils/Page": 313,
        "@marcom/anim-system": 543,
        "@marcom/anim-system/Model/AnimSystemModel": 548
    }],
    578: [function (j, a, x) {
        var i = j("@marcom/ac-raf-emitter/update");
        var g = j("@marcom/ac-raf-emitter/external");
        var l = j("@marcom/ac-raf-emitter/draw");
        var m = j("@marcom/ac-event-emitter-micro/EventEmitterMicro");
        var q = j("./force-repaint");
        var s = j("@marcom/ac-useragent");
        var f = j("@marcom/ac-viewport-emitter");
        var u = j("@marcom/sm-math-utils");
        var v = document.documentElement.classList.contains("high-gpu");
        var w = {
            "modal-background-content": "[data-modal-background-content]",
            "modal-background-elements": "[data-modal-background-elements]",
            globalnav: "#ac-globalnav",
            localnav: "#ac-localnav",
            "localnav-background": ".ac-ln-background",
            "localnav-wrapper": ".ac-ln-wrapper",
            footer: "#ac-globalfooter"
        };
        var d = {
            active: "modal-active",
            animating: "modal-animating",
            enableTransition: "modal-enable-transition",
            enableTransitionIn: "modal-enable-transition-in",
            enableTransitionOut: "modal-enable-transition-out",
            willOpen: "modal-will-open",
            willAnimateStart: "modal-will-animate-start",
            open: "modal-open",
            willStartClose: "modal-will-start-close",
            willAnimateClose: "modal-will-animate-close",
            willClose: "modal-will-close",
            backgroundLock: "modal-background-lock",
            interactive: "modal-interactive",
            backgroundAnimatedContent: "modal-background-animated-content",
            preventGlobalnavTransition: "modal-prevent-globalnav-transition",
            modalSelected: "modal-content-selected",
            fixNavigation: "modal-fix-navigation",
            navWillTransition: "modal-nav-will-transition"
        };
        var r = {
            animateIn: ["animate-modal-in", "animate-scrim-in", "animate-close-button-in"],
            animateOut: ["animate-modal-out", "animate-scrim-out", "animate-close-button-out"]
        };
        if (v) {
            r.animateIn.push("animate-background-in");
            r.animateOut.push("animate-background-out")
        }
        var b = {
            willOpen: "will-open",
            didOpen: "did-open",
            willClose: "will-close",
            didClose: "did-close",
            animationComplete: "animation-complete"
        };
        var h = {
            animateBackgroundInScale: "--animate-modal-background-in-scale",
            animateBackgroundOutTranslateY: "--animate-modal-background-out-translateY"
        };
        var t = s.browser.safari && s.os.osx;
        var c = 1296000;
        var k = 1;
        var o = 3.5;
        var p = {
            IN: {DEFAULT_VALUE: null, SAFARI_DESKTOP: 20, SAFARI_DESKTOP_RETINA: 20},
            OUT: {DEFAULT_VALUE: null, SAFARI_DESKTOP: 100, SAFARI_DESKTOP_RETINA: 125}
        };
        var n = function (Y) {
            _inherits(S, Y);

            function S() {
                _classCallCheck(this, S);
                var ah = _possibleConstructorReturn(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments));
                ah.el = ah._createElement();
                ah.classNameElement = document.body;
                ah.isAnimating = false;
                ah.isOpen = false;
                ah.currentModal = null;
                ah.backgroundOffset = 0;
                ah.modalOffset = 0;
                ah.mayAnimate = false;
                ah.scrollingElement = document.body;
                ah.cssVariablesElement = document.documentElement;
                ah.backgroundContent = document.querySelector(w["modal-background-content"]);
                ah.backgroundElementsContainer = ah.backgroundContent.querySelector(w["modal-background-elements"]);
                ah.backgroundTransformElements = ah._getBackgroundTransformElements();
                ah.globalnav = document.querySelector(w.globalnav);
                ah.localnav = document.querySelector(w.localnav);
                ah.localnavBG = document.querySelector(w["localnav-background"]);
                ah.localnavWrapper = document.querySelector(w["localnav-wrapper"]);
                ah.footer = document.querySelector(w.footer);
                ah._compositeElement = ah._compositeElement.bind(ah);
                ah._onAnimationComplete = ah._onAnimationComplete.bind(ah);
                ah._onAllAnimationsComplete = ah._onAllAnimationsComplete.bind(ah);
                ah._animateInSecondPhase = ah._animateInSecondPhase.bind(ah);
                ah._animateOutSecondPhase = ah._animateOutSecondPhase.bind(ah);
                return ah
            }

            _createClass(S, [{
                key: "initialize", value: function z(ah) {
                    var ai = this;
                    return new Promise(function (ak, aj) {
                        ai.controller = ah.controller;
                        ai.bindEvents();
                        i(function () {
                            ai.backgroundContentScale = parseFloat(window.getComputedStyle(ai.cssVariablesElement).getPropertyValue(h.animateBackgroundInScale))
                        });
                        ai.migrateComponentElements().then(function (al) {
                            l(function () {
                                var am = ai.backgroundContent;
                                am.parentNode.insertBefore(ai.el, am.nextSibling);
                                ai.mayAnimate = true;
                                ak(al)
                            })
                        })
                    })
                }
            }, {
                key: "bindEvents", value: function A() {
                    this.classNameElement.addEventListener("animationend", this._onAnimationComplete)
                }
            }, {
                key: "migrateComponentElements", value: function Z() {
                    var ah = this;
                    return new Promise(function (ak, aj) {
                        var an = [];
                        var am = 0;
                        for (var ai in ah.controller.modals) {
                            if (ah.controller.modals.hasOwnProperty(ai)) {
                                var al = document.createElement("section");
                                al.className = "section-modal-" + am;
                                am++;
                                al.appendChild(ah.controller.modals[ai].modalElement);
                                an.push(al);
                                ah.el.appendChild(al)
                            }
                        }
                        ak(an)
                    })
                }
            }, {
                key: "initializeOpen", value: function ae(ah) {
                    if (!this.mayAnimate) {
                        return
                    }
                    this.mayAnimate = false;
                    this.isOpen = true;
                    this.currentModal = this.controller.modals[ah];
                    this._eventData = {name: ah, modal: this.currentModal};
                    this.trigger(b.willOpen, this._eventData)
                }
            }, {
                key: "initializeClose", value: function N() {
                    if (!this.mayAnimate) {
                        return
                    }
                    this.mayAnimate = false;
                    this.isOpen = false;
                    this._eventData = {
                        name: this.currentModal.name,
                        scrollTo: this.backgroundOffset,
                        modal: this.currentModal
                    };
                    this.trigger(b.willClose, this._eventData)
                }
            }, {
                key: "animateIn", value: function aa() {
                    var ah = this;
                    this.isAnimating = true;
                    i(function () {
                        ah.scrollY = ah.controller.page._getScrollY();
                        ah.backgroundOffset = ah.scrollY;
                        ah.openNavOffset = ah._getNavOffset();
                        ah.contentHeight = ah._getContentHeight();
                        ah.windowDimensions = {width: window.innerWidth, height: window.innerHeight};
                        ah._createAnimationPromises(r.animateIn)
                    });
                    l(function () {
                        ah._setModalOffset(null);
                        ah._setComponentSelected(ah.currentModal.name);
                        ah.classNameElement.classList.add(d.animating);
                        ah.classNameElement.classList.add(d.active);
                        ah.classNameElement.classList.add(d.enableTransition);
                        ah.classNameElement.classList.add(d.enableTransitionIn);
                        ah.classNameElement.classList.add(d.willAnimateStart);
                        l(function () {
                            var ai = ah.openNavOffset.localnav.height;
                            ah.currentModal.modalNavUnderlay.style.paddingTop = ai + "px";
                            ah.currentModal.modalNavUnderlay.style.marginTop = -ai + "px";
                            ah.scrollingElement.style.height = ah.contentHeight + "px";
                            ah._setBackgroundOffset(ah.backgroundOffset - ah.openNavOffset.totalHeight);
                            ah.classNameElement.classList.add(d.backgroundLock);
                            l(function () {
                                if (t) {
                                    l(ah._animateInSecondPhase);
                                    return
                                }
                                ah._animateInSecondPhase()
                            })
                        })
                    })
                }
            }, {
                key: "_animateInSecondPhase", value: function X() {
                    var ah = this;
                    this._setSecondPhaseTimeout("IN", function () {
                        var ai = ah.scrollY;
                        if (ah.openNavOffset.stuck) {
                            ai = ah.openNavOffset.globalnav.height;
                            ai += 1
                        }
                        window.scroll(0, ai);
                        l(function () {
                            ah.classNameElement.classList.add(d.interactive);
                            ah.classNameElement.classList.add(d.willOpen)
                        })
                    })
                }
            }, {
                key: "animateOut", value: function P() {
                    var ah = this;
                    this.isAnimating = true;
                    i(function () {
                        ah.scrollY = ah.controller.page._getScrollY();
                        ah.modalOffset = ah.scrollY;
                        ah.closeNavOffset = ah._getNavOffset();
                        ah.windowDimensions = {width: window.innerWidth, height: window.innerHeight};
                        ah._createAnimationPromises(r.animateOut)
                    });
                    g(function () {
                        var aj = 0;
                        if (ah.globalnav) {
                            if (ah.openNavOffset.stuck && ah.closeNavOffset.stuck) {
                                ah.classNameElement.classList.add(d.preventGlobalnavTransition)
                            }
                            if (ah.openNavOffset.stuck !== ah.closeNavOffset.stuck) {
                                ah.classNameElement.classList.add(d.navWillTransition);
                                var ai = u.clamp(ah.closeNavOffset.globalnav.top, -ah.closeNavOffset.globalnav.height, 0);
                                ah._setGlobalnavOffset(ai + "px")
                            } else {
                                if (!ah.openNavOffset.stuck) {
                                    ah._setGlobalnavOffset(-ah.closeNavOffset.globalnav.height + "px")
                                } else {
                                    ah._setGlobalnavOffset(ah.closeNavOffset.globalnav.top + "px")
                                }
                            }
                            aj += ah.closeNavOffset.globalnav.height
                        }
                        if (ah.localnav) {
                            ah._setLocalnavOffset(ah.closeNavOffset.localnav.top + "px");
                            aj += ah.closeNavOffset.localnav.height
                        }
                        ah.classNameElement.classList.add(d.fixNavigation);
                        ah.closeNavPadding = aj;
                        if (!ah.closeNavOffset.stuck) {
                            q(ah.localnav)
                        }
                    });
                    l(function () {
                        ah._setModalOffset(ah.modalOffset);
                        ah.scrollingElement.style.height = ah.contentHeight + "px";
                        ah.classNameElement.classList.add(d.animating);
                        ah.classNameElement.classList.remove(d.interactive);
                        ah.classNameElement.classList.remove(d.open);
                        ah.classNameElement.classList.add(d.willStartClose);
                        ah.classNameElement.classList.add(d.enableTransition);
                        ah.classNameElement.classList.add(d.enableTransitionOut);
                        ah.currentModal.modalElement.style.paddingTop = ah.closeNavPadding + "px";
                        ah.cssVariablesElement.style.setProperty(h.animateBackgroundOutTranslateY, ah._getScaleScrollOffset() + "px");
                        l(function () {
                            if (t) {
                                l(ah._animateOutSecondPhase);
                                return
                            }
                            ah._animateOutSecondPhase()
                        })
                    })
                }
            }, {
                key: "_animateOutSecondPhase", value: function F() {
                    var ah = this;
                    this._setSecondPhaseTimeout("OUT", function () {
                        var ai = ah.backgroundOffset;
                        window.scrollTo(0, ai);
                        l(function () {
                            ah._setBackgroundOffset(null);
                            ah.backgroundContent.style.marginTop = "";
                            var aj = ah.closeNavOffset.localnav.height;
                            ah.backgroundContent.style.paddingTop = aj + "px";
                            ah.classNameElement.classList.remove(d.backgroundLock);
                            ah.classNameElement.classList.add(d.willAnimateClose);
                            l(function () {
                                ah.classNameElement.classList.remove(d.willStartClose);
                                ah.classNameElement.classList.add(d.willClose);
                                if (ah.globalnav) {
                                    if (ah.openNavOffset.stuck && !ah.closeNavOffset.stuck) {
                                        ah._setGlobalnavOffset(-ah.openNavOffset.globalnav.height + "px")
                                    } else {
                                        ah._setGlobalnavOffset(ah.openNavOffset.globalnav.top + "px")
                                    }
                                }
                                if (ah.localnav) {
                                    ah._setLocalnavOffset(ah.openNavOffset.localnav.top + "px")
                                }
                            })
                        })
                    })
                }
            }, {
                key: "completeOpen", value: function T() {
                    this.mayAnimate = true
                }
            }, {
                key: "completeClose", value: function M() {
                    this.mayAnimate = true
                }
            }, {
                key: "_onAnimationComplete", value: function J(ai) {
                    var ah = ai.animationName;
                    if (this._animationResolveMap && this._animationResolveMap[ah]) {
                        this._animationResolveMap[ah]()
                    }
                }
            }, {
                key: "_onAllAnimationsComplete", value: function ab() {
                    this._removeAnimationPromises();
                    this.isAnimating = false;
                    if (this.isOpen) {
                        this._onOpenAnimationComplete()
                    } else {
                        this._onClosedAnimationComplete()
                    }
                }
            }, {
                key: "_onOpenAnimationComplete", value: function U() {
                    var ah = this;
                    l(function () {
                        ah.classNameElement.classList.add(d.open);
                        ah.classNameElement.classList.remove(d.willOpen);
                        l(function () {
                            ah.classNameElement.classList.remove(d.willAnimateStart);
                            ah.classNameElement.classList.remove(d.animating);
                            ah.classNameElement.classList.remove(d.enableTransition);
                            ah.classNameElement.classList.remove(d.enableTransitionIn);
                            ah.classNameElement.classList.remove(d.preventGlobalnavTransition);
                            ah.scrollingElement.style.height = "";
                            l(function () {
                                ah.trigger(b.animationComplete, ah._eventData);
                                ah.trigger(b.didOpen, ah._eventData)
                            })
                        })
                    })
                }
            }, {
                key: "_onClosedAnimationComplete", value: function V() {
                    var ah = this;
                    l(function () {
                        ah.scrollingElement.style.height = "";
                        ah.currentModal.modalElement.style.paddingTop = "";
                        ah.currentModal.modalElement.style.marginTop = "";
                        if (!ah.closeNavOffset.stuck) {
                            g(function () {
                                q(ah.localnav)
                            })
                        }
                        l(function () {
                            ah.classNameElement.classList.remove(d.fixNavigation);
                            ah.classNameElement.classList.remove(d.navWillTransition);
                            ah.classNameElement.classList.remove(d.willClose);
                            ah.classNameElement.classList.remove(d.willAnimateClose);
                            ah.classNameElement.classList.remove(d.active);
                            ah.classNameElement.classList.remove(d.animating);
                            ah.classNameElement.classList.remove(d.enableTransition);
                            ah.classNameElement.classList.remove(d.enableTransitionOut);
                            if (ah.globalnav) {
                                ah._setGlobalnavOffset("")
                            }
                            if (ah.localnav) {
                                ah._setLocalnavOffset("")
                            }
                            ah.backgroundContent.style.paddingTop = "";
                            l(function () {
                                ah.trigger(b.animationComplete, ah._eventData);
                                ah.trigger(b.didClose, ah._eventData)
                            })
                        })
                    })
                }
            }, {
                key: "_setComponentSelected", value: function y(ah) {
                    for (var ai in this.controller.modals) {
                        if (this.controller.modals.hasOwnProperty(ai)) {
                            if (ai === ah) {
                                this.controller.modals[ai].modalElement.classList.add(d.modalSelected)
                            } else {
                                this.controller.modals[ai].modalElement.classList.remove(d.modalSelected)
                            }
                        }
                    }
                }
            }, {
                key: "_getBackgroundTransformElements", value: function K() {
                    var ah = Array.prototype.slice.call(this.backgroundElementsContainer.childNodes, 0).filter(function (ai) {
                        return ai.nodeType === Node.ELEMENT_NODE
                    });
                    return ah
                }
            }, {
                key: "_getNavOffset", value: function R() {
                    var al = 0;
                    var ai = 0;
                    var aj = 0;
                    var am = false;
                    var ah = {};
                    var ak = {};
                    ah.height = 0;
                    ak.height = 0;
                    if (this.globalnav) {
                        ah = this.globalnav.getBoundingClientRect();
                        al += ah.height
                    }
                    if (this.localnav) {
                        ak = this.localnav.getBoundingClientRect();
                        al += ak.height;
                        am = this._getLocalNavStuck();
                        if (am) {
                            ai += u.clamp(this.scrollY - ak.height, 0, ak.height)
                        } else {
                            aj = this.scrollY - ak.height
                        }
                    }
                    return {
                        globalnav: ah,
                        localnav: ak,
                        stuck: am,
                        totalHeight: al,
                        stickyHeight: ai,
                        distanceToSticky: aj
                    }
                }
            }, {
                key: "_setBackgroundOffset", value: function E(al) {
                    var aj = this.backgroundTransformElements;
                    var ak = al !== null ? -al + "px" : "";
                    for (var ai = 0, ah = aj.length; ai < ah; ai++) {
                        aj[ai].style.top = ak
                    }
                }
            }, {
                key: "_setModalOffset", value: function ad(ak) {
                    var ah, ai = this.currentModal.modalContentElements;
                    var aj = "";
                    if (ak !== null) {
                        aj = "translateY(" + -ak + "px)"
                    }
                    ai.style.transform = aj
                }
            }, {
                key: "_getLocalNavStuck", value: function G() {
                    return this.localnav.classList.contains("ac-ln-sticking")
                }
            }, {
                key: "_setGlobalnavOffset", value: function Q(ah) {
                    if (typeof ah === "undefined" || ah.length === 0) {
                        this.globalnav.style.transform = ""
                    } else {
                        this.globalnav.style.transform = "translateY(" + ah + ")"
                    }
                }
            }, {
                key: "_setLocalnavOffset", value: function C(ah) {
                    if (typeof ah === "undefined" || ah.length === 0) {
                        this.localnav.style.transform = ""
                    } else {
                        this.localnav.style.transform = "translateY(" + ah + ")"
                    }
                }
            }, {
                key: "_compositeModalContent", value: function D(ai) {
                    var ah = this;
                    return new Promise(function (ak, aj) {
                        if (ai === 0) {
                            ak();
                            return
                        }
                        ah._compositeElement(ah.backgroundElementsContainer, 0, ai, ak)
                    })
                }
            }, {
                key: "_compositeElement", value: function H(ai, ak, aj, al) {
                    var ah = this;
                    q(ai);
                    ak++;
                    if (ak === aj) {
                        al();
                        return
                    }
                    g(function () {
                        ah._compositeElement(ai, ak, aj, al);
                        ai = ak = aj = al = null
                    })
                }
            }, {
                key: "_getScaleScrollOffset", value: function L() {
                    var ah = 1 / this.backgroundContentScale;
                    var ai = this.contentHeight - this.controller.page.getWindowHeight();
                    var ak = this.backgroundOffset / ai;
                    var aj = ak * (ah - 1) * (ai / ah);
                    if (this.globalnav && this.closeNavOffset) {
                        aj -= this.closeNavOffset.globalnav.height / 2
                    }
                    return aj
                }
            }, {
                key: "_getContentHeight", value: function B() {
                    return document.body.scrollHeight
                }
            }, {
                key: "_setSecondPhaseTimeout", value: function I(ah, aj) {
                    var ai = this._getTimeoutDuration(ah);
                    if (ai === null) {
                        aj();
                        return
                    }
                    setTimeout(aj, ai)
                }
            }, {
                key: "_getTimeoutDuration", value: function W(ai) {
                    var ah = p.IN;
                    var al = f.retina;
                    var ak = this._getWindowSize() / c;
                    var aj = ah.DEFAULT_VALUE;
                    if (ai === "OUT") {
                        ah = p.OUT
                    }
                    if (t) {
                        if (al) {
                            aj = ah.SAFARI_DESKTOP_RETINA
                        } else {
                            aj = ah.SAFARI_DESKTOP
                        }
                    }
                    if (aj === null) {
                        return aj
                    }
                    ak = u.clamp(ak, k, o);
                    return ak * aj
                }
            }, {
                key: "_getWindowSize", value: function O() {
                    return this.windowDimensions.width * this.windowDimensions.height
                }
            }, {
                key: "_createElement", value: function af() {
                    var ah = document.createElement("div");
                    ah.className = "modal-container";
                    return ah
                }
            }, {
                key: "_createAnimationPromises", value: function ac(ai) {
                    var ah = this;
                    this._removeAnimationPromises();
                    this._animationResolveMap = {};
                    this._animationPromisesArr = ai.map(function (aj) {
                        return new Promise(function (al, ak) {
                            ah._animationResolveMap[aj] = al
                        })
                    });
                    Promise.all(this._animationPromisesArr).then(this._onAllAnimationsComplete)
                }
            }, {
                key: "_removeAnimationPromises", value: function ag() {
                    this._animationPromisesArr = null;
                    this._animationResolveMap = null
                }
            }]);
            return S
        }(m);
        a.exports = new n()
    }, {
        "./force-repaint": 582,
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 129,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/external": 520,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/ac-useragent": 522,
        "@marcom/ac-viewport-emitter": 528,
        "@marcom/sm-math-utils": 556
    }],
    579: [function (d, b, i) {
        var h = d("@marcom/ac-raf-emitter/update");
        var l = d("@marcom/ac-raf-emitter/draw");
        var c = d("@marcom/ac-raf-emitter/cancelDraw");
        var a = "modal-close-button-animation";
        var m = "modal-close-button-parallax";
        var g = "data-close-button-placeholder";
        var f = ["containerX", "bodyScaleX", "copyOpacity", "endcapX", "circleOpacity", "containerOpacity", "resetScale"];
        var k = ["parallaxY"];
        var o = 2;
        var n = d("@marcom/ac-viewport-emitter");
        var j = function () {
            function p(M) {
                _classCallCheck(this, p);
                this.modalOpen = false;
                this.containerEl = document.documentElement.querySelector(".modal-close-button-container");
                this.parallaxContainer = this.containerEl.querySelector(".modal-close-button-transform-container");
                this.buttonEl = this.containerEl.querySelector("#modal-close-button");
                this.opacityContainer = this.containerEl.querySelector(".modal-button-opacity");
                this.startCapEl = this.buttonEl.querySelector(".modal-button-start-cap");
                this.copyEl = this.buttonEl.querySelector(".modal-button-copy");
                this.scalerEl = this.buttonEl.querySelector(".modal-button-scaler");
                this.endCapEl = this.buttonEl.querySelector(".modal-button-end-cap");
                this.circleEl = this.buttonEl.querySelector(".resetcircle-icon");
                this.resetEl = this.buttonEl.querySelector(".reset-icon");
                this.modalController = M.modalController;
                this.page = null;
                this.animSystem = null;
                this._didRequestDraw = false;
                this._copyWidthMultiplier = 1;
                this.vals = {};
                this._didBindUpdate = false;
                this._updateValues = this._updateValues.bind(this);
                this._updateParallaxValues = this._updateParallaxValues.bind(this);
                this._render = this._render.bind(this);
                this._renderParallax = this._renderParallax.bind(this);
                this.modalController.on("will-open-start", this._onModalWillOpen.bind(this));
                this.modalController.on("did-open-end", this._onModalDidOpen.bind(this));
                this.modalController.on("will-close-start", this._onModalWillClose.bind(this));
                this.modalController.on("did-close-end", this._onModalDidClose.bind(this));
                n.on("change", this._onBreakpointChange.bind(this))
            }

            _createClass(p, [{
                key: "getModalButtonAnimSystem", value: function v(M) {
                    var N = this.modalController.getModalSection(M);
                    return N.getComponentOfType("AnimSystem")
                }
            }, {
                key: "_onModalWillOpen", value: function A(M) {
                    this.animSystem = this.getModalButtonAnimSystem(M.name);
                    this.animElement = this.modalController.getModalSection(M.name).element.querySelector("[" + g + "]");
                    if (!this.animSystem) {
                        return
                    }
                    this._bindEvents();
                    this._setInitialAnimValues();
                    this._forceAnimSystemReset()
                }
            }, {
                key: "_onModalDidOpen", value: function I() {
                    this.modalOpen = true;
                    if (!this.animSystem) {
                        return
                    }
                    this._setCopyWidth()
                }
            }, {
                key: "_setScalerMaxScale", value: function G() {
                }
            }, {
                key: "_onModalWillClose", value: function C() {
                }
            }, {
                key: "_onModalDidClose", value: function w() {
                    this.modalOpen = false;
                    if (!this.animSystem) {
                        return
                    }
                    this._forceAnimSystemReset();
                    this.animSystem = null
                }
            }, {
                key: "_forceAnimSystemReset", value: function B() {
                    if (!this.animSystem) {
                        return
                    }
                    var M = this.animSystem.isEnabled;
                    this.animSystem.isEnabled = true;
                    this._resetAnimProps();
                    this.animSystem.isEnabled = M
                }
            }, {
                key: "_setInitialAnimValues", value: function F() {
                    var N = void 0;
                    var M = f.length;
                    for (N = 0; N < M; N++) {
                        this._setValue(f[N], this._getInitialPropValue(f[N]), 0)
                    }
                    M = k.length;
                    for (N = 0; N < M; N++) {
                        this._setValue(k[N], this._getInitialPropValue(k[N]), 1)
                    }
                }
            }, {
                key: "_getActiveController", value: function r() {
                    return this.animSystem.getControllerForElement(this.animElement) || null
                }
            }, {
                key: "_resetAnimProps", value: function x() {
                    if (!this.animSystem) {
                        return
                    }
                    var N = this._getActiveController();
                    var O = void 0;
                    var M = N._allKeyframes.length;
                    for (O = 0; O < M; O++) {
                        N._allKeyframes[O].reset(0)
                    }
                    N.animSystem._onScroll(0)
                }
            }, {
                key: "_getInitialPropValue", value: function L(N, M) {
                    return this._getActiveController().getAllKeyframesForAttribute(N)[0].animValues[N][0]
                }
            }, {
                key: "_resetPropLocalT", value: function z(O) {
                    var M = this._getActiveController();
                    var N = M.getAllKeyframesForAttribute(O)[0];
                    N.reset(0)
                }
            }, {
                key: "_setValue", value: function s(M, O) {
                    var N = this.vals[M];
                    if (N !== O) {
                        this.vals[M] = O
                    }
                }
            }, {
                key: "_bindEvents", value: function K() {
                    this.animSystem.on(a, this._updateValues);
                    this.animSystem.on(m, this._updateParallaxValues)
                }
            }, {
                key: "_updateValues", value: function J(P) {
                    var O = P.animationInfo;
                    var N = void 0;
                    var M = f.length;
                    for (N = 0; N < M; N++) {
                        this._setValue(f[N], O[f[N]].current)
                    }
                    this._render()
                }
            }, {
                key: "_updateParallaxValues", value: function E(P) {
                    var O = P.animationInfo;
                    var N = void 0;
                    var M = k.length;
                    for (N = 0; N < M; N++) {
                        this._setValue(k[N], O[k[N]].current)
                    }
                    this._renderParallax()
                }
            }, {
                key: "_getCopyWidth", value: function D() {
                    var M = this;
                    return new Promise(function (O, N) {
                        h(function () {
                            O(M.copyEl.getBoundingClientRect().width)
                        })
                    })
                }
            }, {
                key: "_setCopyWidth", value: function q() {
                    var M = this;
                    return new Promise(function (O, N) {
                        M._getCopyWidth().then(function (P) {
                            M._copyWidthMultiplier = P / 100;
                            O()
                        })
                    })
                }
            }, {
                key: "_onBreakpointChange", value: function H() {
                    var M = this;
                    if (this.modalOpen) {
                        this._setCopyWidth().then(function () {
                            l(M._render)
                        })
                    }
                }
            }, {
                key: "_render", value: function u() {
                    this.buttonEl.style.transform = "translateX(" + this.vals.containerX * this._copyWidthMultiplier + "px)";
                    this.opacityContainer.style.opacity = this.vals.containerOpacity;
                    this.scalerEl.style.transform = "translateX(" + -o + "px) scaleX(" + (this.vals.bodyScaleX * this._copyWidthMultiplier + o * 2) + ")";
                    this.copyEl.style.opacity = this.vals.copyOpacity;
                    this.endCapEl.style.transform = "translateX(" + this.vals.endcapX * this._copyWidthMultiplier + "px)";
                    this.circleEl.style.opacity = this.vals.circleOpacity;
                    this.resetEl.style.transform = "translateX(-50%) translateY(-50%) scale(" + this.vals.resetScale + ")"
                }
            }, {
                key: "_renderParallax", value: function t() {
                    this.parallaxContainer.style.transform = "translateY(" + this.vals.parallaxY + "px)"
                }
            }, {
                key: "_unbindEvents", value: function y() {
                }
            }]);
            return p
        }();
        b.exports = j
    }, {
        "@marcom/ac-raf-emitter/cancelDraw": 518,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521,
        "@marcom/ac-viewport-emitter": 528
    }],
    580: [function (k, a, t) {
        var n = k("./ModalAnimator");
        var o = k("./ModalTriggers");
        var b = k("./ModalCloseButtonAnimator");
        var m = k("@marcom/ac-event-emitter-micro/EventEmitterMicro");
        var f = k("@marcom/ac-jetpack-lib/utils/Page");
        var j = k("@marcom/ac-raf-emitter/update");
        var l = k("@marcom/ac-raf-emitter/draw");
        var i = null;
        try {
            i = k("ac-analytics")
        } catch (h) {
        }
        var q = document.querySelector('meta[property="analytics-track"]');
        var d = q.getAttribute("content").toLowerCase();
        var g = "data-modal-content";
        var p = {
            modalWillOpen: "modalWillOpen",
            modalWillClose: "modalWillClose",
            modalDidOpen: "modalDidOpen",
            modalDidClose: "modalDidClose"
        };
        var s = {
            modalContent: "[" + g + "]",
            modalContentElements: "[data-modal-content-elements]",
            modalNavUnderlay: ".modal-nav-underlay",
            primaryContentSections: "[data-modal-background-content] section"
        };
        var c = {
            ready: "ready",
            willOpenStart: "will-open-start",
            willOpenEnd: "will-open-end",
            didOpenStart: "did-open-start",
            didOpenEnd: "did-open-end",
            willCloseStart: "will-close-start",
            willCloseEnd: "will-close-end",
            didCloseStart: "did-close-start",
            didCloseEnd: "did-close-end"
        };
        var r = function (Q) {
            _inherits(aa, Q);

            function aa() {
                _classCallCheck(this, aa);
                var ab = _possibleConstructorReturn(this, (aa.__proto__ || Object.getPrototypeOf(aa)).call(this));
                ab.EVENTS = c;
                ab.modalSectionElements = [];
                ab.modalSections = [];
                ab.modalSectionsMap = {};
                ab.isOpen = false;
                return ab
            }

            _createClass(aa, [{
                key: "initialize", value: function x(ab) {
                    var ac = this;
                    ab = ab || {};
                    this.getModalElements();
                    this.analyticsSectionObservers = ab.analyticsSectionObservers;
                    if (this.analyticsSectionObservers) {
                        this.analyticsSectionTrackers = this.analyticsSectionObservers.section.elementEngagement.elements
                    }
                    n.on("will-open", this.willOpenModal.bind(this));
                    n.on("will-close", this.willCloseModal.bind(this));
                    n.on("did-open", this.didOpenModal.bind(this));
                    n.on("did-close", this.didCloseModal.bind(this));
                    if (!ab.disableTriggers) {
                        this.triggers = new o({el: document.body, modalController: this})
                    }
                    this.modalCloseButtonAnimator = new b({modalController: this});
                    return new Promise(function (ae, ad) {
                        n.initialize({controller: ac}).then(function (af) {
                            ac.getAnalyticsSections();
                            ac.modalSectionElements = af;
                            ae()
                        })
                    })
                }
            }, {
                key: "getAnalyticsSections", value: function W() {
                    var ab = this;
                    this.analyticsModalSections = {};
                    this.analyticsPrimarySections = Array.from(document.querySelectorAll("[data-modal-background-content] [data-analytics-section-engagement]"));
                    Object.keys(this.modals).forEach(function (ad) {
                        var ac = ab.modals[ad].modalElement;
                        var ae = ac.querySelectorAll("[data-analytics-section-engagement]");
                        ab.analyticsModalSections[ad] = [];
                        if (!ae) {
                            return
                        }
                        ab.analyticsModalSections[ad] = Array.from(ae)
                    })
                }
            }, {
                key: "activateAnalyticTrackersForModal", value: function y(ab) {
                    if (!this.analyticsModalSections) {
                        return
                    }
                    var ac = this.analyticsModalSections[ab];
                    if (!ac || !ac.length || !this.analyticsSectionTrackers || !this.analyticsSectionObservers) {
                        return
                    }
                    this.analyticsSectionTrackers.forEach(function (ad) {
                        ad.isActive = ac.indexOf(ad.element) > -1
                    });
                    this.analyticsSectionObservers.section._onScroll();
                    this.analyticsSectionObservers.section._onResize()
                }
            }, {
                key: "activateAnalyticTrackersForPrimaryContent", value: function P() {
                    var ab = this;
                    if (!this.analyticsSectionTrackers || !this.analyticsSectionObservers) {
                        return
                    }
                    this.analyticsSectionTrackers.forEach(function (ac) {
                        ac.isActive = ab.analyticsPrimarySections.indexOf(ac.element) > -1
                    });
                    this.analyticsSectionObservers.section._onScroll();
                    this.analyticsSectionObservers.section._onResize()
                }
            }, {
                key: "disableAllAnalyticsTrackers", value: function B() {
                    if (!this.analyticsSectionTrackers) {
                        return
                    }
                    this.analyticsSectionTrackers.forEach(function (ab) {
                        ab.isActive = false
                    })
                }
            }, {
                key: "trackAnalyticEvent", value: function N(ab) {
                    if (this.analyticsObserver) {
                        this.analyticsObserver.track({title: ab, prop3: ab, eVar1: d + " - " + ab})
                    }
                }
            }, {
                key: "trackModalOpen", value: function S(ab) {
                    this.trackAnalyticEvent(ab + " - learn more - open")
                }
            }, {
                key: "trackModalClose", value: function I(ab) {
                    this.trackAnalyticEvent(ab + " - close")
                }
            }, {
                key: "setPage", value: function K(ae) {
                    this.page = ae;
                    var ad = void 0;
                    var ac = void 0;
                    var af = void 0;
                    var ab = this.modalSectionElements.length;
                    for (ad = 0; ad < ab; ad++) {
                        af = this.page.addSection(this.modalSectionElements[ad]);
                        ac = this.modalSectionElements[ad].childNodes[0].getAttribute(g);
                        this.modalSections.push(af);
                        this.modalSectionsMap[ac] = af
                    }
                    this._primaryContentPageSections = this._getPrimaryContentPageSections();
                    this._modalContentPageSections = this._getModalContentPageSections();
                    this._resetElementTracking();
                    this.cacheSubscribers();
                    this.trigger(c.ready)
                }
            }, {
                key: "add", value: function O(ab) {
                    this.modals[ab.name] = ab
                }
            }, {
                key: "openModal", value: function H(ab, ac) {
                    if (!n.mayAnimate || this.isOpen) {
                        return false
                    }
                    this.openTriggerEl = ac;
                    n.initializeOpen(ab, ac)
                }
            }, {
                key: "closeModal", value: function F(ab) {
                    if (!n.mayAnimate || !this.isOpen) {
                        return false
                    }
                    n.initializeClose(ab)
                }
            }, {
                key: "getModalSection", value: function V(ab) {
                    return this.modalSectionsMap[ab] || null
                }
            }, {
                key: "willOpenModal", value: function w(ab) {
                    var ac = this;
                    this.trigger(c.willOpenStart, ab);
                    this.disableAllAnalyticsTrackers();
                    this._callSubscriberMethods(p.modalWillOpen, [ab]).then(function () {
                        ac.trigger(c.willOpenEnd, ab);
                        ab = null;
                        n.animateIn()
                    })
                }
            }, {
                key: "willCloseModal", value: function J(ab) {
                    var ac = this;
                    this.trigger(c.willCloseStart, ab);
                    this.disableAllAnalyticsTrackers();
                    this._callSubscriberMethods(p.modalWillClose, [ab]).then(function () {
                        ac.trigger(c.willCloseEnd, ab);
                        ab = null;
                        n.animateOut()
                    })
                }
            }, {
                key: "didOpenModal", value: function E(ab) {
                    var ac = this;
                    this.trigger(c.didOpenStart, ab);
                    this._callSubscriberMethods(p.modalDidOpen, [ab]).then(function () {
                        n.completeOpen();
                        ac.isOpen = true;
                        j(function () {
                            ac.trackModalOpen(ab.name);
                            ac.activateAnalyticTrackersForModal(ab.name);
                            ac._resetElementTracking();
                            ac._refreshMetrics();
                            ac.trigger(c.didOpenEnd, ab);
                            var ae = ac.getModalSection(ab.name).element;
                            var ad = ae.querySelector('[role="dialog"]');
                            l(function () {
                                if (ad) {
                                    ad.focus()
                                }
                                ab = null
                            })
                        })
                    })
                }
            }, {
                key: "didCloseModal", value: function G(ac) {
                    var ab = this;
                    this.trigger(c.didCloseStart, ac);
                    this._callSubscriberMethods(p.modalDidClose, [ac]).then(function () {
                        n.completeClose();
                        ab.isOpen = false;
                        j(function () {
                            ab.trackModalClose(ac.name);
                            ab.activateAnalyticTrackersForPrimaryContent();
                            ab._resetElementTracking();
                            ab._refreshMetrics();
                            ab.trigger(c.didCloseEnd, ac);
                            ac = null;
                            if (ab.openTriggerEl) {
                                l(function () {
                                    ab.openTriggerEl.focus();
                                    ab.openTriggerEl = null
                                })
                            }
                        })
                    })
                }
            }, {
                key: "cacheSubscribers", value: function A() {
                    var ab = [];
                    var ae;
                    var ac;
                    var ah = this.page._sections;
                    var ag = ah.length;
                    var af;
                    var ad;
                    for (ae = 0; ae < ag; ae++) {
                        ab.push(ah[ae]);
                        af = ah[ae]._components;
                        ad = af.length;
                        for (ac = 0; ac < ad; ac++) {
                            ab.push(af[ac])
                        }
                    }
                    this._cachedSubscribers = ab
                }
            }, {
                key: "getModalElements", value: function C() {
                    var ai = Array.prototype.slice.call(document.querySelectorAll(s.modalContent), 0);
                    var ac = {};
                    var ae = null;
                    var af = "";
                    var ad = null;
                    var ah = null;
                    var ag = void 0;
                    var ab = ai.length;
                    for (ag = 0; ag < ab; ag++) {
                        ae = ai[ag];
                        af = ae.getAttribute(g);
                        if (!af || af.length < 1) {
                            throw new TypeError("[" + g + "] attribute required for ModalComponent instances")
                        }
                        ad = ae.querySelector(s.modalContentElements);
                        ah = ae.querySelector(s.modalNavUnderlay);
                        ac[af] = {name: af, modalElement: ae, modalContentElements: ad, modalNavUnderlay: ah}
                    }
                    this.modals = ac
                }
            }, {
                key: "_getAllSubscribers", value: function u() {
                    if (!this._cachedSubscribers) {
                        this.cacheSubscribers()
                    }
                    return this._cachedSubscribers
                }
            }, {
                key: "_callSubscriberMethods", value: function z(ac, ad) {
                    var ab = this;
                    return new Promise(function (aj, am) {
                        ad = ad || [];
                        var af = 0;
                        var ah = null;
                        var ak = null;
                        var al = null;
                        var ai = [];
                        var ae = ab._getAllSubscribers();
                        var ag = ae.length;
                        for (af = 0; af < ag; af++) {
                            ah = null;
                            ak = ae[af];
                            ah = ak[ac] || ak.constructor.prototype[ac] || null;
                            if (ah) {
                                ai.push(new Promise(function (ao, an) {
                                    ah.apply(ak, [ao, an].concat(_toConsumableArray(ad)));
                                    ak = ah = null
                                }))
                            }
                        }
                        Promise.all(ai).then(aj)
                    })
                }
            }, {
                key: "_refreshMetrics", value: function Y() {
                    f.deepRefreshAllElementMetrics()
                }
            }, {
                key: "_resetElementTracking", value: function M() {
                    var ac = this._primaryContentPageSections;
                    var ab = this._modalContentPageSections;
                    if (this.isOpen) {
                        ac = this._modalContentPageSections;
                        ab = this._primaryContentPageSections
                    }
                    this._enableElementTracking(ac);
                    this._disableElementTracking(ab)
                }
            }, {
                key: "_getPrimaryContentPageSections", value: function U() {
                    var ab = Array.prototype.slice.call(document.querySelectorAll(s.primaryContentSections), 0);
                    return this._getPageSectionObjects(ab)
                }
            }, {
                key: "_getModalContentPageSections", value: function D() {
                    return this._getPageSectionObjects(this.modalSectionElements)
                }
            }, {
                key: "_getPageSectionObjects", value: function Z(ae) {
                    var ah = this.page._sections;
                    var ag = ah.map(function (ai) {
                        return ai.element
                    });
                    var ad = ae.length;
                    var af = void 0;
                    var ac = void 0;
                    var ab = [];
                    for (af = 0; af < ad; af++) {
                        ac = ag.indexOf(ae[af]);
                        if (ac > -1) {
                            ab.push(ah[ac])
                        }
                    }
                    return ab
                }
            }, {
                key: "_disablePrimaryContentElementTracking", value: function L() {
                    this._disableElementTracking(this._primaryContentPageSections)
                }
            }, {
                key: "_disableModalContentElementTracking", value: function T() {
                    this._disableElementTracking(this._modalContentPageSections)
                }
            }, {
                key: "_enableElementTracking", value: function v(ab) {
                    ab.forEach(function (ac) {
                        ac.trackedElement.isActive = true
                    })
                }
            }, {
                key: "_disableElementTracking", value: function R(ab) {
                    ab.forEach(function (ac) {
                        ac.trackedElement.isActive = false;
                        ac.trackedElement.inView = false;
                        ac.trackedElement.percentInView = 0;
                        ac.trackedElement.pixelsInView = 0
                    })
                }
            }, {
                key: "analyticsObserver", get: function X() {
                    if (!i) {
                        return null
                    }
                    if (!this._analyticsObserver) {
                        this._analyticsObserver = new i.observer.Event(this)
                    }
                    return this._analyticsObserver
                }
            }]);
            return aa
        }(m);
        a.exports = new r()
    }, {
        "./ModalAnimator": 578,
        "./ModalCloseButtonAnimator": 579,
        "./ModalTriggers": 581,
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 129,
        "@marcom/ac-jetpack-lib/utils/Page": 313,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/update": 521,
        "ac-analytics": undefined
    }],
    581: [function (c, d, b) {
        var g = c("@marcom/ac-raf-emitter/update");
        var f = {open: "data-modal-trigger-open", close: "data-modal-trigger-close"};
        var a = function () {
            function i(o) {
                _classCallCheck(this, i);
                this.el = o.el;
                this.modalController = o.modalController;
                this.setOpenTriggers();
                this.setCloseTriggers();
                this.updateTriggerBounds(this.openTriggers.concat(this.closeTriggers));
                this.bindEvents()
            }

            _createClass(i, [{
                key: "setOpenTriggers", value: function m() {
                    this.openTriggers = Array.prototype.slice.call(this.el.querySelectorAll("[" + f.open + "]"), 0)
                }
            }, {
                key: "setCloseTriggers", value: function k() {
                    this.closeTriggers = Array.prototype.slice.call(this.el.querySelectorAll("[" + f.close + "]"), 0)
                }
            }, {
                key: "updateTriggerBounds", value: function l(o) {
                    o.forEach(function (r) {
                        var p = r.parentElement.querySelector(".button.modal-button");
                        if (!p) {
                            return
                        }
                        var s = p.querySelector(".modal-button-copy");
                        if (s) {
                            var q = p.offsetWidth + s.offsetWidth;
                            r.style.width = (q > 100 ? q : 100) + "px"
                        }
                    })
                }
            }, {
                key: "onOpenClicked", value: function j(o, p, q) {
                    q.preventDefault();
                    if (typeof o === "string" && o.length > 0) {
                        this.modalController.openModal(o, p)
                    }
                }
            }, {
                key: "onCloseClicked", value: function h(o) {
                    o.preventDefault();
                    this.modalController.closeModal()
                }
            }, {
                key: "bindEvents", value: function n() {
                    var o = this;
                    this.openTriggers.forEach(function (q) {
                        var p = q.getAttribute(f.open);
                        q.addEventListener("click", o.onOpenClicked.bind(o, p, q))
                    });
                    this.closeTriggers.forEach(function (p) {
                        p.addEventListener("click", o.onCloseClicked.bind(o))
                    });
                    window.addEventListener("keyup", function (q) {
                        var p = 27;
                        if (q.keyCode === p) {
                            o.modalController.closeModal()
                        }
                    })
                }
            }]);
            return i
        }();
        d.exports = a;
        d.exports.DATA_ATTRIBUTES = f
    }, {"@marcom/ac-raf-emitter/update": 521}],
    582: [function (b, c, a) {
        c.exports = function (g) {
            var f = g.style.display;
            if (f !== "none") {
                g.style.display = "none"
            } else {
                g.style.display = "block"
            }
            var d = g.offsetHeight;
            g.style.display = f
        }
    }, {}],
    583: [function (c, f, b) {
        var a = c("@marcom/ac-jetpack-lib/core/BaseSection");
        var d = function (j) {
            _inherits(g, j);

            function g() {
                _classCallCheck(this, g);
                return _possibleConstructorReturn(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments))
            }

            _createClass(g, [{
                key: "activate", value: function h() {
                    for (var l = 0, k = this._components.length;
                         l < k; l++) {
                        if (!this._components[l].isEnabled) {
                            continue
                        }
                        this._components[l].activate()
                    }
                    this.isActive = true;
                    if (!this.hasAnimatedIn) {
                        this.animateIn();
                        this.hasAnimatedIn = true
                    }
                }
            }, {
                key: "deactivate", value: function i() {
                    this.isActive = false;
                    for (var l = 0, k = this._components.length;
                         l < k; l++) {
                        if (!this._components[l].isEnabled) {
                            continue
                        }
                        this._components[l].deactivate()
                    }
                }
            }]);
            return g
        }(a);
        f.exports = d
    }, {"@marcom/ac-jetpack-lib/core/BaseSection": 308}],
    584: [function (c, f, b) {
        var h = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var i = c("../../../modal/ModalController");
        var a = {
            update: c("@marcom/ac-raf-emitter/update"),
            external: c("@marcom/ac-raf-emitter/external"),
            draw: c("@marcom/ac-raf-emitter/draw")
        };
        var g = document.title;
        var d = function () {
            function r() {
                _classCallCheck(this, r);
                this.siteRoot = this.getSiteRoot();
                this.searchString = this.sanitizeSearch();
                this.currentState = this.createState("");
                this.setupEvents();
                var u = this.getModalFrom(window.location.hash);
                if (u !== null) {
                    this.currentState = this.createState(u.name);
                    a.update(function () {
                        var v = {
                            localNav: document.querySelector("#ac-localnav"),
                            globalNav: document.querySelector("#ac-globalnav"),
                            segmentBar: document.querySelector("#ac-gn-segmentbar"),
                            localeSwitcher: document.querySelector("#ac-localeswitcher")
                        };
                        a.external(function () {
                            for (var w in v) {
                                if (v[w] !== null) {
                                    v[w].classList.add("immediate");
                                    v[w].classList.add("animate-in")
                                }
                            }
                        });
                        i.openModal(u.name)
                    })
                }
            }

            _createClass(r, [{
                key: "setupEvents", value: function m() {
                    this._handleHashChange = this._handleHashChange.bind(this);
                    this._handlePopState = this._handlePopState.bind(this);
                    this._handleModalOpen = this._handleModalOpen.bind(this);
                    this._handleModalDidClose = this._handleModalDidClose.bind(this);
                    window.addEventListener("popstate", this._handlePopState, false);
                    window.addEventListener("hashchange", this._handleHashChange, false);
                    i.on(i.EVENTS.didOpenEnd, this._handleModalOpen);
                    i.on(i.EVENTS.didCloseEnd, this._handleModalDidClose)
                }
            }, {
                key: "createState", value: function s(u) {
                    if (u !== "") {
                        u = "#" + u
                    }
                    return {title: g, url: this.siteRoot + this.searchString + u}
                }
            }, {
                key: "_handleModalOpen", value: function o(u) {
                    this.setHashState(u.name)
                }
            }, {
                key: "_handleModalDidClose", value: function l(u) {
                    this.setHashState("")
                }
            }, {
                key: "_handleHashChange", value: function j(u) {
                    u.preventDefault()
                }
            }, {
                key: "_handlePopState", value: function k(u) {
                    u.preventDefault()
                }
            }, {
                key: "getSiteRoot", value: function p() {
                    var u = window.location.href.match("(.*.com)([^?|#]*)");
                    return u[2]
                }
            }, {
                key: "sanitizeSearch", value: function t() {
                    var x = window.location.search.match(/([\?|&]([^&]*))/g);
                    if (x === null) {
                        return ""
                    }
                    var u = "";
                    for (var v = 0; v < x.length; v++) {
                        var w = x[v].substr(1);
                        if (!this.getModalFrom(w)) {
                            u += x[v]
                        }
                    }
                    return u
                }
            }, {
                key: "setHashState", value: function q(v) {
                    var u = this.createState(v);
                    if (this.currentState.url === u.url) {
                        return
                    }
                    this.currentState = u;
                    history.replaceState(this.currentState, this.currentState.title, this.currentState.url)
                }
            }, {
                key: "getModalFrom", value: function n(v) {
                    for (var u in i.modals) {
                        if (v.indexOf(u) !== -1) {
                            return i.modals[u]
                        }
                    }
                    return null
                }
            }]);
            return r
        }();
        f.exports = d
    }, {
        "../../../modal/ModalController": 580,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-raf-emitter/draw": 519,
        "@marcom/ac-raf-emitter/external": 520,
        "@marcom/ac-raf-emitter/update": 521
    }],
    585: [function (b, c, a) {
        c.exports = function d(f) {
            if (f === "xlarge") {
                f = "large"
            }
            if (f === "xsmall") {
                f = "small"
            }
            return f
        }
    }, {}],
    586: [function (c, d, b) {
        d.exports = function a(f) {
            if (f.charAt(0) !== "/") {
                f = "/" + f
            }
            return f
        }
    }, {}],
    587: [function (c, d, b) {
        d.exports = function a() {
            var f = null;
            var g = document.createElement("canvas");
            var h = g.getContext("webgl") || g.getContext("experimental-webgl") || g.getContext("moz-webgl");
            if (h) {
                var i = h.getExtension("WEBGL_debug_renderer_info");
                f = i !== null ? h.getParameter(i.UNMASKED_RENDERER_WEBGL) : h.getParameter(h.VERSION)
            }
            if (f !== null) {
                f = f.replace(/[\(\-\)]/g, " ").replace(/\s+/g, " ").trim()
            }
            return f
        }
    }, {}],
    588: [function (c, d, b) {
        var a = c("./getGPU");
        d.exports = function f() {
            var g = a();
            return g.indexOf("Apple A7") > -1 || g.indexOf("Apple A8 GPU") > -1
        }()
    }, {"./getGPU": 587}],
    589: [function (c, d, b) {
        function a(g) {
            if (!g.large) {
                return null
            }
            if (!g.medium) {
                g.medium = g.large
            }
            if (!g.small) {
                g.small = g.medium
            }
            return g
        }

        function f(m) {
            var l = m.split(/,[\s]*/);
            var k = {};
            for (var j = 0, g = l.length; j < g; j++) {
                var h = l[j].match(/([^:]+):[\s]*(\d+)x(\d+)/);
                if (!h) {
                    continue
                }
                k[h[1]] = {width: parseInt(h[2], 10), height: parseInt(h[3], 10)}
            }
            k = a(k);
            return k
        }

        d.exports = f
    }, {}],
    590: [function (c, d, b) {
        d.exports = function a(g, f) {
            return g.replace(/\$\{([^}]*)\}/g, function (h, i) {
                return f[i]
            })
        }
    }, {}],
    591: [function (b, c, a) {
        c.exports = function d(f) {
            for (var i = arguments.length, g = Array(i > 1 ? i - 1 : 0), h = 1;
                 h < i; h++) {
                g[h - 1] = arguments[h]
            }
            return function (j) {
                var k = f.slice();
                g.forEach(function (m, l) {
                    k[l] += j[m]
                });
                return k.join("")
            }
        }
    }, {}],
    592: [function (b, c, a) {
        c.exports = {
            AnimSystem: b("@marcom/anim-system"),
            EngagedElement: b("@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent"),
            LocalnavThemeChanger: b("@marcom/ac-jetpack-fuel/components/localnav-theme-changer/LocalnavThemeChangerComponent"),
            ProgressiveImage: b("../../components/ProgressiveImage"),
            Animoji: b("../../components/Animoji"),
            ImageToCanvasGrid: b("../../components/ImageToCanvasGrid"),
            GesturesVideoGallery: b("../../components/GesturesVideoGallery"),
            PrimaryContentComponent: b("../../components/PrimaryContentComponent"),
            ModalContentComponent: b("../../components/ModalContentComponent"),
            ModalWidthComponent: b("../../components/ModalWidthComponent"),
            VideoPlayer: b("../../components/VideoPlayer/VideoPlayer"),
            Video: b("../../components/Video"),
            MediaObject: b("../../components/MediaObject"),
            ModalMediaObject: b("../../components/ModalMediaObject"),
            HeroComponent: b("../../components/Hero/HeroComponent"),
            MaskedX: b("../../components/Hero/MaskedX")
        };
        c.exports.AnimSystem.IS_SUPPORTED = function () {
            return document.documentElement.classList.contains("anim-system")
        }
    }, {
        "../../components/Animoji": 560,
        "../../components/GesturesVideoGallery": 563,
        "../../components/Hero/HeroComponent": 565,
        "../../components/Hero/MaskedX": 566,
        "../../components/ImageToCanvasGrid": 567,
        "../../components/MediaObject": 568,
        "../../components/ModalContentComponent": 569,
        "../../components/ModalMediaObject": 570,
        "../../components/ModalWidthComponent": 571,
        "../../components/PrimaryContentComponent": 572,
        "../../components/ProgressiveImage": 573,
        "../../components/Video": 574,
        "../../components/VideoPlayer/VideoPlayer": 576,
        "@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent": 289,
        "@marcom/ac-jetpack-fuel/components/localnav-theme-changer/LocalnavThemeChangerComponent": 290,
        "@marcom/anim-system": 543
    }],
    593: [function (b, c, a) {
        c.exports = {
            init: function d() {
                this.VIDEO_CANVAS_SUPPORTED = b("./videoCanvasSupported")();
                this.HERO_SUPPORTED = document.documentElement.classList.contains("reduced-motion") === false && document.documentElement.classList.contains("css-sticky") && document.documentElement.classList.contains("anim-system");
                this.INLINE_VIDEO = document.documentElement.classList.contains("inline-video")
            }
        }
    }, {"./videoCanvasSupported": 596}],
    594: [function (b, c, a) {
        c.exports = function () {
            var d = b("@marcom/ac-useragent");
            return !d.os.android
        }
    }, {"@marcom/ac-useragent": 522}],
    595: [function (b, c, a) {
        c.exports = window.matchMedia("(prefers-reduced-motion)").matches
    }, {}],
    596: [function (b, c, a) {
        c.exports = function () {
            var i = b("@marcom/ac-useragent");
            var f = b("@marcom/ac-feature/isDesktop");
            var h = b("@marcom/ac-feature/canvasAvailable");
            var d = i.os.ios && i.os.version.major >= 9;
            var g = [f() || d, h];
            return g.indexOf(false) === -1
        }
    }, {"@marcom/ac-feature/canvasAvailable": 145, "@marcom/ac-feature/isDesktop": 154, "@marcom/ac-useragent": 522}],
    597: [function (b, a, c) {
        var f = b("@marcom/ac-cname").cname;
        var j = b("@marcom/ac-object/clone");
        var m = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var n = b("@marcom/ac-media-object");
        var p = b("@marcom/ac-viewport-emitter");
        var k = b("../helpers/clampViewport");
        var l = b("../helpers/template");
        var d = b("../helpers/parseViewportSizes");
        var g = "us";
        var o = "iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7";
        var i = l(_templateObject, "locale", "directory", "name");
        var h = function (u) {
            _inherits(v, u);

            function v(D) {
                var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, v);
                var F = _possibleConstructorReturn(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));
                F.container = D;
                F.name = E.name;
                F.locale = E.locale || g;
                F.dimensions = E.dimensions;
                F.disableRetina = !!E.disableRetina;
                F.ignoreViewportShrink = !!E.ignoreViewportShrink;
                F.mediaObjectOptions = E.mediaObject;
                F.useSplitFiles = E.useSplitFiles !== undefined ? E.useSplitFiles : true;
                if (typeof F.dimensions === "string") {
                    F.dimensions = d(F.dimensions)
                }
                window.addEventListener("beforeunload", function () {
                    F.mediaElement.style.display = "none"
                });
                window.addEventListener("pageshow", function () {
                    F.mediaElement.style.display = null
                });
                F.handleViewportChange();
                return F
            }

            _createClass(v, [{
                key: "handleViewportChange", value: function B() {
                    var E = k(p.viewport);
                    var D = p.retina;
                    var F = this.viewport === "large" || this.viewport === "medium" && E === "small";
                    if (F && this.ignoreViewportShrink) {
                        return
                    }
                    if (E === this.viewport && D === this.isRetinaDisplay) {
                        return
                    }
                    this.viewport = E;
                    this.isRetinaDisplay = D;
                    this.reset()
                }
            }, {
                key: "load", value: function A() {
                    return this.mediaObject.load()
                }
            }, {
                key: "play", value: function r() {
                    return this.mediaObject.play()
                }
            }, {
                key: "pause", value: function C() {
                    return this.mediaObject.pause()
                }
            }, {
                key: "reset", value: function t() {
                    this.trigger("will-reset");
                    if (this.mediaObject) {
                        this._destroyMediaObject();
                        this._replaceMediaContainer()
                    }
                    this._initializeMediaObject();
                    this.trigger("reset")
                }
            }, {
                key: "destroy", value: function z() {
                    this._destroyMediaObject();
                    for (var D in this) {
                        if (this.hasOwnProperty(D)) {
                            this[D] = null
                        }
                    }
                }
            }, {
                key: "_initializeMediaObject", value: function s() {
                    var D = j(this.mediaSource);
                    var E = j(this.mediaObjectOptions);
                    this.mediaObject = n.createVideo(this.container, D, E);
                    this.mediaElement = this.mediaObject.mediaElement;
                    if (this.width && this.height) {
                        this.mediaElement.style.width = this.width + "px";
                        this.mediaElement.style.height = this.height + "px"
                    }
                }
            }, {
                key: "_destroyMediaObject", value: function x() {
                    this.container.classList.remove("mediaobject-enhanced", "mediaobject-destroyed");
                    this.mediaObject.off()
                }
            }, {
                key: "_replaceMediaContainer", value: function w() {
                    var D = this.container.cloneNode(false);
                    this.container.parentNode.replaceChild(D, this.container);
                    this.container = D
                }
            }, {
                key: "mediaBasePath", get: function q() {
                    return i({directory: o, name: this.name, locale: this.locale})
                }
            }, {
                key: "mediaSource", get: function q() {
                    var E = {basePath: this.mediaBasePath};
                    var D = this.viewport;
                    if (this.isRetinaDisplay && !this.disableRetina) {
                        D += "_2x"
                    }
                    if (this.useSplitFiles) {
                        E.basePath += "/split_files/" + D
                    } else {
                        E.basePath += "/";
                        E.filename = D;
                        E.fileFormat = "mp4"
                    }
                    E.splitFileLoading = this.useSplitFiles;
                    E.basePath = f.addPrefix(E.basePath);
                    return E
                }
            }, {
                key: "progress", set: function y(D) {
                    this.mediaObject.goToPercent(D)
                }, get: function q() {
                    return this.mediaObject.getCurrentPercent()
                }
            }, {
                key: "width", get: function q() {
                    return this.dimensions ? this.dimensions[this.viewport].width : null
                }
            }, {
                key: "height", get: function q() {
                    return this.dimensions ? this.dimensions[this.viewport].height : null
                }
            }]);
            return v
        }(m);
        a.exports = h
    }, {
        "../helpers/clampViewport": 585,
        "../helpers/parseViewportSizes": 589,
        "../helpers/template": 591,
        "@marcom/ac-cname": 3,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-media-object": 446,
        "@marcom/ac-object/clone": 460,
        "@marcom/ac-viewport-emitter": 528
    }],
    598: [function (d, b, f) {
        var i = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var h = d("@marcom/ac-jetpack-lib/utils/Page");
        var j = d("@marcom/ac-viewport-emitter");
        var k = d("@marcom/ac-useragent");
        var g = d("./MediaObjectManager");
        var a = {
            disableRetina: true,
            ignoreViewportShrink: true,
            autoplay: false,
            autoload: true,
            useSplitFiles: false,
            mediaObject: {iosInline: true}
        };
        var c = function (t) {
            _inherits(w, t);

            function w(I, G) {
                var F = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                _classCallCheck(this, w);
                var H = _possibleConstructorReturn(this, (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments));
                H._videoElement = G;
                F.name = I;
                F.locale = H._videoElement.getAttribute("data-video-locale");
                H._options = Object.assign(a, F);
                H._hasLoadStarted = false;
                H._ios9 = k.os.ios && k.os.version.major === 9;
                H._bindEvents();
                H._initialize();
                return H
            }

            _createClass(w, [{
                key: "_bindEvents", value: function D() {
                    this._onMediaLoaded = this._onMediaLoaded.bind(this);
                    this._onMediaEnhanced = this._onMediaEnhanced.bind(this);
                    this._onMediaPlay = this._onMediaPlay.bind(this);
                    this._onMediaPause = this._onMediaPause.bind(this);
                    this._onTimeUpdate = this._onTimeUpdate.bind(this);
                    this._onMediaEnded = this._onMediaEnded.bind(this);
                    this._onMediaReset = this._onMediaReset.bind(this);
                    this._onViewportChange = this._onViewportChange.bind(this)
                }
            }, {
                key: "_initialize", value: function B() {
                    this._mediaManager = new g(this._videoElement, this._options);
                    this._mediaManager.on("reset", this._onMediaReset);
                    j.on("change", this._onViewportChange);
                    this._setupMediaObjectEvents()
                }
            }, {
                key: "_setupMediaObjectEvents", value: function A() {
                    this._mediaManager.mediaObject.once("loaded", this._onMediaLoaded);
                    this._mediaManager.mediaObject.once("enhanced", this._onMediaEnhanced);
                    this._mediaManager.mediaObject.on("play", this._onMediaPlay);
                    this._mediaManager.mediaObject.on("pause", this._onMediaPause);
                    this._mediaManager.mediaObject.on("ended", this._onMediaEnded);
                    if (this._ios9) {
                        this._mediaManager.mediaObject.on("timeupdate", this._onTimeUpdate)
                    }
                    this._checkShouldLoad()
                }
            }, {
                key: "_checkShouldLoad", value: function r() {
                    if (this._options.autoload || this._options.autoplay || this._hasLoadStarted) {
                        this.load()
                    }
                }
            }, {
                key: "_onMediaReset", value: function n() {
                    this._setupMediaObjectEvents();
                    this.trigger("video_reset")
                }
            }, {
                key: "_onMediaLoaded", value: function l() {
                    this._mediaManager.mediaObject.enhance()
                }
            }, {
                key: "_onMediaEnhanced", value: function C() {
                    h.deepRefreshAllElementMetrics();
                    this.trigger("video_ready")
                }
            }, {
                key: "_onMediaPlay", value: function E() {
                    this.trigger("video_play")
                }
            }, {
                key: "_onMediaPause", value: function u() {
                    this.trigger("video_pause")
                }
            }, {
                key: "_onTimeUpdate", value: function m() {
                    if (this._ios9 && this._mediaManager.mediaObject.getCurrentTime() === this._mediaManager.mediaObject.getDuration()) {
                        this._mediaManager.mediaObject.trigger("ended")
                    }
                }
            }, {
                key: "_onMediaEnded", value: function v() {
                    this.trigger("video_ended")
                }
            }, {
                key: "_onViewportChange", value: function p() {
                    this._mediaManager.handleViewportChange()
                }
            }, {
                key: "load", value: function q() {
                    return new Promise(function (G, F) {
                        this._mediaManager.mediaObject.once("loaded", G);
                        this._mediaManager.load()
                    }.bind(this))
                }
            }, {
                key: "play", value: function x() {
                    this._mediaManager.play()
                }
            }, {
                key: "pause", value: function o() {
                    this._mediaManager.pause()
                }
            }, {
                key: "reset", value: function z() {
                    this._mediaManager.reset()
                }
            }, {
                key: "isReady", get: function y() {
                    return this._mediaManager.mediaObject.getLoaded() && this._mediaManager.mediaObject.getEnhanced()
                }
            }, {
                key: "progress", set: function s(F) {
                    this._mediaManager.progress = F
                }, get: function y() {
                    return this._mediaManager.progress
                }
            }, {
                key: "mediaManager", get: function y() {
                    return this._mediaManager
                }
            }]);
            return w
        }(i);
        b.exports = c
    }, {
        "./MediaObjectManager": 597,
        "@marcom/ac-event-emitter-micro": 128,
        "@marcom/ac-jetpack-lib/utils/Page": 313,
        "@marcom/ac-useragent": 522,
        "@marcom/ac-viewport-emitter": 528
    }]
}, {}, [577]);