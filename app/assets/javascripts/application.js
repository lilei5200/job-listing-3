// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= requiere bootstrap/alerts
//= require bootstrap/dropdown
//= require bootstrap/modal
//= require_tree .

function goTop(t) {
  $(".goTop").click(function() {
    $("html,body").animate({
      scrollTop: 0
    }, 700)
  }), t = t || 2500, $(window).scroll(function() {
    $(window).scrollTop() > t ? $(".goTop").fadeIn(100) : $(".goTop").fadeOut(200)
  })
}
if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
      var e = !!t && "length" in t && t.length,
        n = pt.type(t);
      return "function" !== n && !pt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t, e, n) {
      if (pt.isFunction(e)) return pt.grep(t, function(t, i) {
        return !!e.call(t, i, t) !== n
      });
      if (e.nodeType) return pt.grep(t, function(t) {
        return t === e !== n
      });
      if ("string" == typeof e) {
        if (Ct.test(e)) return pt.filter(e, t, n);
        e = pt.filter(e, t)
      }
      return pt.grep(t, function(t) {
        return pt.inArray(t, e) > -1 !== n
      })
    }

    function o(t, e) {
      do {
        t = t[e]
      } while (t && 1 !== t.nodeType);
      return t
    }

    function r(t) {
      var e = {};
      return pt.each(t.match(At) || [], function(t, n) {
        e[n] = !0
      }), e
    }

    function s() {
      it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
      (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), pt.ready())
    }

    function l(t, e, n) {
      if (n === undefined && 1 === t.nodeType) {
        var i = "data-" + e.replace(Lt, "-$1").toLowerCase();
        if ("string" == typeof(n = t.getAttribute(i))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : It.test(n) ? pt.parseJSON(n) : n)
          } catch (t) {}
          pt.data(t, e, n)
        } else n = undefined
      }
      return n
    }

    function u(t) {
      var e;
      for (e in t)
        if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
      return !0
    }

    function c(t, e, n, i) {
      if (jt(t)) {
        var o, r, s = pt.expando,
          a = t.nodeType,
          l = a ? pt.cache : t,
          u = a ? t[s] : t[s] && s;
        if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof e) return u || (u = a ? t[s] = nt.pop() || pt.guid++ : s), l[u] || (l[u] = a ? {} : {
          toJSON: pt.noop
        }), "object" != typeof e && "function" != typeof e || (i ? l[u] = pt.extend(l[u], e) : l[u].data = pt.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[pt.camelCase(e)] = n), "string" == typeof e ? null == (o = r[e]) && (o = r[pt.camelCase(e)]) : o = r, o
      }
    }

    function d(t, e, n) {
      if (jt(t)) {
        var i, o, r = t.nodeType,
          s = r ? pt.cache : t,
          a = r ? t[pt.expando] : pt.expando;
        if (s[a]) {
          if (e && (i = n ? s[a] : s[a].data)) {
            pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in i ? e = [e] : (e = pt.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
            for (; o--;) delete i[e[o]];
            if (n ? !u(i) : !pt.isEmptyObject(i)) return
          }(n || (delete s[a].data, u(s[a]))) && (r ? pt.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = undefined)
        }
      }
    }

    function f(t, e, n, i) {
      var o, r = 1,
        s = 20,
        a = i ? function() {
          return i.cur()
        } : function() {
          return pt.css(t, e, "")
        },
        l = a(),
        u = n && n[3] || (pt.cssNumber[e] ? "" : "px"),
        c = (pt.cssNumber[e] || "px" !== u && +l) && Ot.exec(pt.css(t, e));
      if (c && c[3] !== u) {
        u = u || c[3], n = n || [], c = +l || 1;
        do {
          r = r || ".5", c /= r, pt.style(t, e, c + u)
        } while (r !== (r = a() / l) && 1 !== r && --s)
      }
      return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }

    function p(t) {
      var e = Bt.split("|"),
        n = t.createDocumentFragment();
      if (n.createElement)
        for (; e.length;) n.createElement(e.pop());
      return n
    }

    function h(t, e) {
      var n, i, o = 0,
        r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
      if (!r)
        for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || pt.nodeName(i, e) ? r.push(i) : pt.merge(r, h(i, e));
      return e === undefined || e && pt.nodeName(t, e) ? pt.merge([t], r) : r
    }

    function m(t, e) {
      for (var n, i = 0; null != (n = t[i]); i++) pt._data(n, "globalEval", !e || pt._data(e[i], "globalEval"))
    }

    function g(t) {
      qt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e, n, i, o) {
      for (var r, s, a, l, u, c, d, f = t.length, v = p(e), y = [], b = 0; b < f; b++)
        if ((s = t[b]) || 0 === s)
          if ("object" === pt.type(s)) pt.merge(y, s.nodeType ? [s] : s);
          else if (Ut.test(s)) {
        for (l = l || v.appendChild(e.createElement("div")), u = (_t.exec(s) || ["", ""])[1].toLowerCase(), d = zt[u] || zt._default, l.innerHTML = d[1] + pt.htmlPrefilter(s) + d[2], r = d[0]; r--;) l = l.lastChild;
        if (!dt.leadingWhitespace && Wt.test(s) && y.push(e.createTextNode(Wt.exec(s)[0])), !dt.tbody)
          for (s = "table" !== u || Xt.test(s) ? "<table>" !== d[1] || Xt.test(s) ? 0 : l : l.firstChild, r = s && s.childNodes.length; r--;) pt.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
        for (pt.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
        l = v.lastChild
      } else y.push(e.createTextNode(s));
      for (l && v.removeChild(l), dt.appendChecked || pt.grep(h(y, "input"), g), b = 0; s = y[b++];)
        if (i && pt.inArray(s, i) > -1) o && o.push(s);
        else if (a = pt.contains(s.ownerDocument, s), l = h(v.appendChild(s), "script"), a && m(l), n)
        for (r = 0; s = l[r++];) Mt.test(s.type || "") && n.push(s);
      return l = null, v
    }

    function y() {
      return !0
    }

    function b() {
      return !1
    }

    function x() {
      try {
        return it.activeElement
      } catch (t) {}
    }

    function w(t, e, n, i, o, r) {
      var s, a;
      if ("object" == typeof e) {
        "string" != typeof n && (i = i || n, n = undefined);
        for (a in e) w(t, a, n, i, e[a], r);
        return t
      }
      if (null == i && null == o ? (o = n, i = n = undefined) : null == o && ("string" == typeof n ? (o = i, i = undefined) : (o = i, i = n, n = undefined)), !1 === o) o = b;
      else if (!o) return t;
      return 1 === r && (s = o, o = function(t) {
        return pt().off(t), s.apply(this, arguments)
      }, o.guid = s.guid || (s.guid = pt.guid++)), t.each(function() {
        pt.event.add(this, e, o, i, n)
      })
    }

    function T(t, e) {
      return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function C(t) {
      return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t
    }

    function S(t) {
      var e = ie.exec(t.type);
      return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function E(t, e) {
      if (1 === e.nodeType && pt.hasData(t)) {
        var n, i, o, r = pt._data(t),
          s = pt._data(e, r),
          a = r.events;
        if (a) {
          delete s.handle, s.events = {};
          for (n in a)
            for (i = 0, o = a[n].length; i < o; i++) pt.event.add(e, n, a[n][i])
        }
        s.data && (s.data = pt.extend({}, s.data))
      }
    }

    function k(t, e) {
      var n, i, o;
      if (1 === e.nodeType) {
        if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[pt.expando]) {
          o = pt._data(e);
          for (i in o.events) pt.removeEvent(e, i, o.handle);
          e.removeAttribute(pt.expando)
        }
        "script" === n && e.text !== t.text ? (C(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && qt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
      }
    }

    function N(t, e, n, i) {
      e = rt.apply([], e);
      var o, r, s, a, l, u, c = 0,
        d = t.length,
        f = d - 1,
        p = e[0],
        m = pt.isFunction(p);
      if (m || d > 1 && "string" == typeof p && !dt.checkClone && ne.test(p)) return t.each(function(o) {
        var r = t.eq(o);
        m && (e[0] = p.call(this, o, r.html())), N(r, e, n, i)
      });
      if (d && (u = v(e, t[0].ownerDocument, !1, t, i), o = u.firstChild, 1 === u.childNodes.length && (u = o), o || i)) {
        for (a = pt.map(h(u, "script"), C), s = a.length; c < d; c++) r = u, c !== f && (r = pt.clone(r, !0, !0), s && pt.merge(a, h(r, "script"))), n.call(t[c], r, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, pt.map(a, S), c = 0; c < s; c++) r = a[c], Mt.test(r.type || "") && !pt._data(r, "globalEval") && pt.contains(l, r) && (r.src ? pt._evalUrl && pt._evalUrl(r.src) : pt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(oe, "")));
        u = o = null
      }
      return t
    }

    function A(t, e, n) {
      for (var i, o = e ? pt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || pt.cleanData(h(i)), i.parentNode && (n && pt.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
      return t
    }

    function D(t, e) {
      var n = pt(e.createElement(t)).appendTo(e.body),
        i = pt.css(n[0], "display");
      return n.detach(), i
    }

    function $(t) {
      var e = it,
        n = le[t];
      return n || (n = D(t, e), "none" !== n && n || (ae = (ae || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ae[0].contentWindow || ae[0].contentDocument).document, e.write(), e.close(), n = D(t, e), ae.detach()), le[t] = n), n
    }

    function j(t, e) {
      return {
        get: function() {
          return t() ? void delete this.get : (this.get = e).apply(this, arguments)
        }
      }
    }

    function I(t) {
      if (t in Ce) return t;
      for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Te.length; n--;)
        if ((t = Te[n] + e) in Ce) return t
    }

    function L(t, e) {
      for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++) i = t[s], i.style && (r[s] = pt._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pt(i) && (r[s] = pt._data(i, "olddisplay", $(i.nodeName)))) : (o = Pt(i), (n && "none" !== n || !o) && pt._data(i, "olddisplay", o ? n : pt.css(i, "display"))));
      for (s = 0; s < a; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
      return t
    }

    function R(t, e, n) {
      var i = be.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function O(t, e, n, i, o) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += pt.css(t, n + Ht[r], !0, o)), i ? ("content" === n && (s -= pt.css(t, "padding" + Ht[r], !0, o)), "margin" !== n && (s -= pt.css(t, "border" + Ht[r] + "Width", !0, o))) : (s += pt.css(t, "padding" + Ht[r], !0, o), "padding" !== n && (s += pt.css(t, "border" + Ht[r] + "Width", !0, o)));
      return s
    }

    function H(t, e, n) {
      var i = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        r = pe(t),
        s = dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, r);
      if (o <= 0 || null == o) {
        if (o = he(t, e, r), (o < 0 || null == o) && (o = t.style[e]), ce.test(o)) return o;
        i = s && (dt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
      }
      return o + O(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function P(t, e, n, i, o) {
      return new P.prototype.init(t, e, n, i, o)
    }

    function F() {
      return t.setTimeout(function() {
        Se = undefined
      }), Se = pt.now()
    }

    function q(t, e) {
      var n, i = {
          height: t
        },
        o = 0;
      for (e = e ? 1 : 0; o < 4; o += 2 - e) n = Ht[o], i["margin" + n] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i
    }

    function _(t, e, n) {
      for (var i, o = (B.tweeners[e] || []).concat(B.tweeners["*"]), r = 0, s = o.length; r < s; r++)
        if (i = o[r].call(n, e, t)) return i
    }

    function M(t, e, n) {
      var i, o, r, s, a, l, u, c = this,
        d = {},
        f = t.style,
        p = t.nodeType && Pt(t),
        h = pt._data(t, "fxshow");
      n.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
        a.unqueued || l()
      }), a.unqueued++, c.always(function() {
        c.always(function() {
          a.unqueued--, pt.queue(t, "fx").length || a.empty.fire()
        })
      })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = pt.css(t, "display"), "inline" === ("none" === u ? pt._data(t, "olddisplay") || $(t.nodeName) : u) && "none" === pt.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", dt.shrinkWrapBlocks() || c.always(function() {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
      }));
      for (i in e)
        if (o = e[i], ke.exec(o)) {
          if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
            if ("show" !== o || !h || h[i] === undefined) continue;
            p = !0
          }
          d[i] = h && h[i] || pt.style(t, i)
        } else u = undefined;
      if (pt.isEmptyObject(d)) "inline" === ("none" === u ? $(t.nodeName) : u) && (f.display = u);
      else {
        h ? "hidden" in h && (p = h.hidden) : h = pt._data(t, "fxshow", {}), r && (h.hidden = !p), p ? pt(t).show() : c.done(function() {
          pt(t).hide()
        }), c.done(function() {
          var e;
          pt._removeData(t, "fxshow");
          for (e in d) pt.style(t, e, d[e])
        });
        for (i in d) s = _(p ? h[i] : 0, i, c), i in h || (h[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function W(t, e) {
      var n, i, o, r, s;
      for (n in t)
        if (i = pt.camelCase(n), o = e[i], r = t[n], pt.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = pt.cssHooks[i]) && "expand" in s) {
          r = s.expand(r), delete t[i];
          for (n in r) n in t || (t[n] = r[n], e[n] = o)
        } else e[i] = o
    }

    function B(t, e, n) {
      var i, o, r = 0,
        s = B.prefilters.length,
        a = pt.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (o) return !1;
          for (var e = Se || F(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(r);
          return a.notifyWith(t, [u, r, n]), r < 1 && l ? n : (a.resolveWith(t, [u]), !1)
        },
        u = a.promise({
          elem: t,
          props: pt.extend({}, e),
          opts: pt.extend(!0, {
            specialEasing: {},
            easing: pt.easing._default
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Se || F(),
          duration: n.duration,
          tweens: [],
          createTween: function(e, n) {
            var i = pt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
            return u.tweens.push(i), i
          },
          stop: function(e) {
            var n = 0,
              i = e ? u.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) u.tweens[n].run(1);
            return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
          }
        }),
        c = u.props;
      for (W(c, u.opts.specialEasing); r < s; r++)
        if (i = B.prefilters[r].call(u, t, c, u.opts)) return pt.isFunction(i.stop) && (pt._queueHooks(u.elem, u.opts.queue).stop = pt.proxy(i.stop, i)), i;
      return pt.map(c, _, u), pt.isFunction(u.opts.start) && u.opts.start.call(t, u), pt.fx.timer(pt.extend(l, {
        elem: t,
        anim: u,
        queue: u.opts.queue
      })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(t) {
      return pt.attr(t, "class") || ""
    }

    function U(t) {
      return function(e, n) {
        "string" != typeof e && (n = e, e = "*");
        var i, o = 0,
          r = e.toLowerCase().match(At) || [];
        if (pt.isFunction(n))
          for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
      }
    }

    function X(t, e, n, i) {
      function o(a) {
        var l;
        return r[a] = !0, pt.each(t[a] || [], function(t, a) {
          var u = a(e, n, i);
          return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
        }), l
      }
      var r = {},
        s = t === Ye;
      return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function V(t, e) {
      var n, i, o = pt.ajaxSettings.flatOptions || {};
      for (i in e) e[i] !== undefined && ((o[i] ? t : n || (n = {}))[i] = e[i]);
      return n && pt.extend(!0, t, n), t
    }

    function Q(t, e, n) {
      for (var i, o, r, s, a = t.contents, l = t.dataTypes;
        "*" === l[0];) l.shift(), o === undefined && (o = t.mimeType || e.getResponseHeader("Content-Type"));
      if (o)
        for (s in a)
          if (a[s] && a[s].test(o)) {
            l.unshift(s);
            break
          }
      if (l[0] in n) r = l[0];
      else {
        for (s in n) {
          if (!l[0] || t.converters[s + " " + l[0]]) {
            r = s;
            break
          }
          i || (i = s)
        }
        r = r || i
      }
      if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function J(t, e, n, i) {
      var o, r, s, a, l, u = {},
        c = t.dataTypes.slice();
      if (c[1])
        for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
      for (r = c.shift(); r;)
        if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
          if ("*" === r) r = l;
          else if ("*" !== l && l !== r) {
        if (!(s = u[l + " " + r] || u["* " + r]))
          for (o in u)
            if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
              !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
              break
            }
        if (!0 !== s)
          if (s && t["throws"]) e = s(e);
          else try {
            e = s(e)
          } catch (t) {
            return {
              state: "parsererror",
              error: s ? t : "No conversion from " + l + " to " + r
            }
          }
      }
      return {
        state: "success",
        data: e
      }
    }

    function G(t) {
      return t.style && t.style.display || pt.css(t, "display")
    }

    function Y(t) {
      if (!pt.contains(t.ownerDocument || it, t)) return !0;
      for (; t && 1 === t.nodeType;) {
        if ("none" === G(t) || "hidden" === t.type) return !0;
        t = t.parentNode
      }
      return !1
    }

    function K(t, e, n, i) {
      var o;
      if (pt.isArray(e)) pt.each(e, function(e, o) {
        n || nn.test(t) ? i(t, o) : K(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
      });
      else if (n || "object" !== pt.type(e)) i(t, e);
      else
        for (o in e) K(t + "[" + o + "]", e[o], n, i)
    }

    function Z() {
      try {
        return new t.XMLHttpRequest
      } catch (t) {}
    }

    function tt() {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
    }

    function et(t) {
      return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
      it = t.document,
      ot = nt.slice,
      rt = nt.concat,
      st = nt.push,
      at = nt.indexOf,
      lt = {},
      ut = lt.toString,
      ct = lt.hasOwnProperty,
      dt = {},
      ft = "1.12.4",
      pt = function(t, e) {
        return new pt.fn.init(t, e)
      },
      ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      mt = /^-ms-/,
      gt = /-([\da-z])/gi,
      vt = function(t, e) {
        return e.toUpperCase()
      };
    pt.fn = pt.prototype = {
      jquery: ft,
      constructor: pt,
      selector: "",
      length: 0,
      toArray: function() {
        return ot.call(this)
      },
      get: function(t) {
        return null != t ? t < 0 ? this[t + this.length] : this[t] : ot.call(this)
      },
      pushStack: function(t) {
        var e = pt.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
      },
      each: function(t) {
        return pt.each(this, t)
      },
      map: function(t) {
        return this.pushStack(pt.map(this, function(e, n) {
          return t.call(e, n, e)
        }))
      },
      slice: function() {
        return this.pushStack(ot.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: st,
      sort: nt.sort,
      splice: nt.splice
    }, pt.extend = pt.fn.extend = function() {
      var t, e, n, i, o, r, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;
      for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || pt.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
        if (null != (o = arguments[a]))
          for (i in o) t = s[i], n = o[i], s !== n && (u && n && (pt.isPlainObject(n) || (e = pt.isArray(n))) ? (e ? (e = !1, r = t && pt.isArray(t) ? t : []) : r = t && pt.isPlainObject(t) ? t : {}, s[i] = pt.extend(u, r, n)) : n !== undefined && (s[i] = n));
      return s
    }, pt.extend({
      expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
        throw new Error(t)
      },
      noop: function() {},
      isFunction: function(t) {
        return "function" === pt.type(t)
      },
      isArray: Array.isArray || function(t) {
        return "array" === pt.type(t)
      },
      isWindow: function(t) {
        return null != t && t == t.window
      },
      isNumeric: function(t) {
        var e = t && t.toString();
        return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
      },
      isEmptyObject: function(t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      isPlainObject: function(t) {
        var e;
        if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
        try {
          if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
        } catch (t) {
          return !1
        }
        if (!dt.ownFirst)
          for (e in t) return ct.call(t, e);
        for (e in t);
        return e === undefined || ct.call(t, e)
      },
      type: function(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
      },
      globalEval: function(e) {
        e && pt.trim(e) && (t.execScript || function(e) {
          t.eval.call(t, e)
        })(e)
      },
      camelCase: function(t) {
        return t.replace(mt, "ms-").replace(gt, vt)
      },
      nodeName: function(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function(t, e) {
        var i, o = 0;
        if (n(t))
          for (i = t.length; o < i && !1 !== e.call(t[o], o, t[o]); o++);
        else
          for (o in t)
            if (!1 === e.call(t[o], o, t[o])) break;
        return t
      },
      trim: function(t) {
        return null == t ? "" : (t + "").replace(ht, "")
      },
      makeArray: function(t, e) {
        var i = e || [];
        return null != t && (n(Object(t)) ? pt.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
      },
      inArray: function(t, e, n) {
        var i;
        if (e) {
          if (at) return at.call(e, t, n);
          for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
            if (n in e && e[n] === t) return n
        }
        return -1
      },
      merge: function(t, e) {
        for (var n = +e.length, i = 0, o = t.length; i < n;) t[o++] = e[i++];
        if (n !== n)
          for (; e[i] !== undefined;) t[o++] = e[i++];
        return t.length = o, t
      },
      grep: function(t, e, n) {
        for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
        return i
      },
      map: function(t, e, i) {
        var o, r, s = 0,
          a = [];
        if (n(t))
          for (o = t.length; s < o; s++) null != (r = e(t[s], s, i)) && a.push(r);
        else
          for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
        return rt.apply([], a)
      },
      guid: 1,
      proxy: function(t, e) {
        var n, i, o;
        return "string" == typeof e && (o = t[e], e = t, t = o), pt.isFunction(t) ? (n = ot.call(arguments, 2), i = function() {
          return t.apply(e || this, n.concat(ot.call(arguments)))
        }, i.guid = t.guid = t.guid || pt.guid++, i) : undefined
      },
      now: function() {
        return +new Date
      },
      support: dt
    }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = nt[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
      lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(t) {
      function e(t, e, n, i) {
        var o, r, s, a, l, u, d, p, h = e && e.ownerDocument,
          m = e ? e.nodeType : 9;
        if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
        if (!i && ((e ? e.ownerDocument || e : _) !== I && j(e), e = e || I, R)) {
          if (11 !== m && (u = vt.exec(t)))
            if (o = u[1]) {
              if (9 === m) {
                if (!(s = e.getElementById(o))) return n;
                if (s.id === o) return n.push(s), n
              } else if (h && (s = h.getElementById(o)) && F(e, s) && s.id === o) return n.push(s), n
            } else {
              if (u[2]) return K.apply(n, e.getElementsByTagName(t)), n;
              if ((o = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(o)), n
            }
          if (w.qsa && !U[t + " "] && (!O || !O.test(t))) {
            if (1 !== m) h = e, p = t;
            else if ("object" !== e.nodeName.toLowerCase()) {
              for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = q), d = E(t), r = d.length, l = ft.test(a) ? "#" + a : "[id='" + a + "']"; r--;) d[r] = l + " " + f(d[r]);
              p = d.join(","), h = yt.test(t) && c(e.parentNode) || e
            }
            if (p) try {
              return K.apply(n, h.querySelectorAll(p)), n
            } catch (t) {} finally {
              a === q && e.removeAttribute("id")
            }
          }
        }
        return N(t.replace(at, "$1"), e, n, i)
      }

      function n() {
        function t(n, i) {
          return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
        }
        var e = [];
        return t
      }

      function i(t) {
        return t[q] = !0, t
      }

      function o(t) {
        var e = I.createElement("div");
        try {
          return !!t(e)
        } catch (t) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function r(t, e) {
        for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
      }

      function s(t, e) {
        var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === e) return -1;
        return t ? 1 : -1
      }

      function a(t) {
        return function(e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t
        }
      }

      function l(t) {
        return function(e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t
        }
      }

      function u(t) {
        return i(function(e) {
          return e = +e, i(function(n, i) {
            for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
          })
        })
      }

      function c(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t
      }

      function d() {}

      function f(t) {
        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
        return i
      }

      function p(t, e, n) {
        var i = e.dir,
          o = n && "parentNode" === i,
          r = W++;
        return e.first ? function(e, n, r) {
          for (; e = e[i];)
            if (1 === e.nodeType || o) return t(e, n, r)
        } : function(e, n, s) {
          var a, l, u, c = [M, r];
          if (s) {
            for (; e = e[i];)
              if ((1 === e.nodeType || o) && t(e, n, s)) return !0
          } else
            for (; e = e[i];)
              if (1 === e.nodeType || o) {
                if (u = e[q] || (e[q] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === M && a[1] === r) return c[2] = a[2];
                if (l[i] = c, c[2] = t(e, n, s)) return !0
              }
        }
      }

      function h(t) {
        return t.length > 1 ? function(e, n, i) {
          for (var o = t.length; o--;)
            if (!t[o](e, n, i)) return !1;
          return !0
        } : t[0]
      }

      function m(t, n, i) {
        for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
        return i
      }

      function g(t, e, n, i, o) {
        for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
        return s
      }

      function v(t, e, n, o, r, s) {
        return o && !o[q] && (o = v(o)), r && !r[q] && (r = v(r, s)), i(function(i, s, a, l) {
          var u, c, d, f = [],
            p = [],
            h = s.length,
            v = i || m(e || "*", a.nodeType ? [a] : a, []),
            y = !t || !i && e ? v : g(v, f, t, a, l),
            b = n ? r || (i ? t : h || o) ? [] : s : y;
          if (n && n(y, b, a, l), o)
            for (u = g(b, p), o(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
          if (i) {
            if (r || t) {
              if (r) {
                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                r(null, b = [], u, l)
              }
              for (c = b.length; c--;)(d = b[c]) && (u = r ? tt(i, d) : f[c]) > -1 && (i[u] = !(s[u] = d))
            }
          } else b = g(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
        })
      }

      function y(t) {
        for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = p(function(t) {
            return t === e
          }, s, !0), u = p(function(t) {
            return tt(e, t) > -1
          }, s, !0), c = [function(t, n, i) {
            var o = !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
            return e = null, o
          }]; a < o; a++)
          if (n = T.relative[t[a].type]) c = [p(h(c), n)];
          else {
            if (n = T.filter[t[a].type].apply(null, t[a].matches), n[q]) {
              for (i = ++a; i < o && !T.relative[t[i].type]; i++);
              return v(a > 1 && h(c), a > 1 && f(t.slice(0, a - 1).concat({
                value: " " === t[a - 2].type ? "*" : ""
              })).replace(at, "$1"), n, a < i && y(t.slice(a, i)), i < o && y(t = t.slice(i)), i < o && f(t))
            }
            c.push(n)
          }
        return h(c)
      }

      function b(t, n) {
        var o = n.length > 0,
          r = t.length > 0,
          s = function(i, s, a, l, u) {
            var c, d, f, p = 0,
              h = "0",
              m = i && [],
              v = [],
              y = A,
              b = i || r && T.find.TAG("*", u),
              x = M += null == y ? 1 : Math.random() || .1,
              w = b.length;
            for (u && (A = s === I || s || u); h !== w && null != (c = b[h]); h++) {
              if (r && c) {
                for (d = 0, s || c.ownerDocument === I || (j(c), a = !R); f = t[d++];)
                  if (f(c, s || I, a)) {
                    l.push(c);
                    break
                  }
                u && (M = x)
              }
              o && ((c = !f && c) && p--, i && m.push(c))
            }
            if (p += h, o && h !== p) {
              for (d = 0; f = n[d++];) f(m, v, s, a);
              if (i) {
                if (p > 0)
                  for (; h--;) m[h] || v[h] || (v[h] = G.call(l));
                v = g(v)
              }
              K.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
            }
            return u && (M = x, A = y), m
          };
        return o ? i(s) : s
      }
      var x, w, T, C, S, E, k, N, A, D, $, j, I, L, R, O, H, P, F, q = "sizzle" + 1 * new Date,
        _ = t.document,
        M = 0,
        W = 0,
        B = n(),
        z = n(),
        U = n(),
        X = function(t, e) {
          return t === e && ($ = !0), 0
        },
        V = 1 << 31,
        Q = {}.hasOwnProperty,
        J = [],
        G = J.pop,
        Y = J.push,
        K = J.push,
        Z = J.slice,
        tt = function(t, e) {
          for (var n = 0, i = t.length; n < i; n++)
            if (t[n] === e) return n;
          return -1
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
        rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
        st = new RegExp(nt + "+", "g"),
        at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
        lt = new RegExp("^" + nt + "*," + nt + "*"),
        ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        dt = new RegExp(rt),
        ft = new RegExp("^" + it + "$"),
        pt = {
          ID: new RegExp("^#(" + it + ")"),
          CLASS: new RegExp("^\\.(" + it + ")"),
          TAG: new RegExp("^(" + it + "|[*])"),
          ATTR: new RegExp("^" + ot),
          PSEUDO: new RegExp("^" + rt),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + et + ")$", "i"),
          needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        },
        ht = /^(?:input|select|textarea|button)$/i,
        mt = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        bt = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        wt = function(t, e, n) {
          var i = "0x" + e - 65536;
          return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        Tt = function() {
          j()
        };
      try {
        K.apply(J = Z.call(_.childNodes), _.childNodes), J[_.childNodes.length].nodeType
      } catch (t) {
        K = {
          apply: J.length ? function(t, e) {
            Y.apply(t, Z.call(e))
          } : function(t, e) {
            for (var n = t.length, i = 0; t[n++] = e[i++];);
            t.length = n - 1
          }
        }
      }
      w = e.support = {}, S = e.isXML = function(t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName
      }, j = e.setDocument = function(t) {
        var e, n, i = t ? t.ownerDocument || t : _;
        return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = I.documentElement, R = !S(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), w.attributes = o(function(t) {
          return t.className = "i", !t.getAttribute("className")
        }), w.getElementsByTagName = o(function(t) {
          return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length
        }), w.getElementsByClassName = gt.test(I.getElementsByClassName), w.getById = o(function(t) {
          return L.appendChild(t).id = q, !I.getElementsByName || !I.getElementsByName(q).length
        }), w.getById ? (T.find.ID = function(t, e) {
          if ("undefined" != typeof e.getElementById && R) {
            var n = e.getElementById(t);
            return n ? [n] : []
          }
        }, T.filter.ID = function(t) {
          var e = t.replace(xt, wt);
          return function(t) {
            return t.getAttribute("id") === e
          }
        }) : (delete T.find.ID, T.filter.ID = function(t) {
          var e = t.replace(xt, wt);
          return function(t) {
            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
            return n && n.value === e
          }
        }), T.find.TAG = w.getElementsByTagName ? function(t, e) {
          return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
        } : function(t, e) {
          var n, i = [],
            o = 0,
            r = e.getElementsByTagName(t);
          if ("*" === t) {
            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return r
        }, T.find.CLASS = w.getElementsByClassName && function(t, e) {
          if ("undefined" != typeof e.getElementsByClassName && R) return e.getElementsByClassName(t)
        }, H = [], O = [], (w.qsa = gt.test(I.querySelectorAll)) && (o(function(t) {
          L.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || O.push(".#.+[+~]")
        }), o(function(t) {
          var e = I.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
        })), (w.matchesSelector = gt.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(t) {
          w.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), H.push("!=", rt)
        }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), e = gt.test(L.compareDocumentPosition), F = e || gt.test(L.contains) ? function(t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
          return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
        } : function(t, e) {
          if (e)
            for (; e = e.parentNode;)
              if (e === t) return !0;
          return !1
        }, X = e ? function(t, e) {
          if (t === e) return $ = !0, 0;
          var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === _ && F(_, t) ? -1 : e === I || e.ownerDocument === _ && F(_, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & n ? -1 : 1)
        } : function(t, e) {
          if (t === e) return $ = !0, 0;
          var n, i = 0,
            o = t.parentNode,
            r = e.parentNode,
            a = [t],
            l = [e];
          if (!o || !r) return t === I ? -1 : e === I ? 1 : o ? -1 : r ? 1 : D ? tt(D, t) - tt(D, e) : 0;
          if (o === r) return s(t, e);
          for (n = t; n = n.parentNode;) a.unshift(n);
          for (n = e; n = n.parentNode;) l.unshift(n);
          for (; a[i] === l[i];) i++;
          return i ? s(a[i], l[i]) : a[i] === _ ? -1 : l[i] === _ ? 1 : 0
        }, I) : I
      }, e.matches = function(t, n) {
        return e(t, null, null, n)
      }, e.matchesSelector = function(t, n) {
        if ((t.ownerDocument || t) !== I && j(t), n = n.replace(ct, "='$1']"), w.matchesSelector && R && !U[n + " "] && (!H || !H.test(n)) && (!O || !O.test(n))) try {
          var i = P.call(t, n);
          if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
        } catch (t) {}
        return e(n, I, null, [t]).length > 0
      }, e.contains = function(t, e) {
        return (t.ownerDocument || t) !== I && j(t), F(t, e)
      }, e.attr = function(t, e) {
        (t.ownerDocument || t) !== I && j(t);
        var n = T.attrHandle[e.toLowerCase()],
          i = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !R) : undefined;
        return i !== undefined ? i : w.attributes || !R ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }, e.error = function(t) {
        throw new Error("Syntax error, unrecognized expression: " + t)
      }, e.uniqueSort = function(t) {
        var e, n = [],
          i = 0,
          o = 0;
        if ($ = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(X), $) {
          for (; e = t[o++];) e === t[o] && (i = n.push(o));
          for (; i--;) t.splice(n[i], 1)
        }
        return D = null, t
      }, C = e.getText = function(t) {
        var e, n = "",
          i = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
          } else if (3 === o || 4 === o) return t.nodeValue
        } else
          for (; e = t[i++];) n += C(e);
        return n
      }, T = e.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: pt,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(t) {
            return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
          },
          CHILD: function(t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
          },
          PSEUDO: function(t) {
            var e, n = !t[6] && t[2];
            return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
          }
        },
        filter: {
          TAG: function(t) {
            var e = t.replace(xt, wt).toLowerCase();
            return "*" === t ? function() {
              return !0
            } : function(t) {
              return t.nodeName && t.nodeName.toLowerCase() === e
            }
          },
          CLASS: function(t) {
            var e = B[t + " "];
            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
              return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
            })
          },
          ATTR: function(t, n, i) {
            return function(o) {
              var r = e.attr(o, t);
              return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(t, e, n, i, o) {
            var r = "nth" !== t.slice(0, 3),
              s = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === i && 0 === o ? function(t) {
              return !!t.parentNode
            } : function(e, n, l) {
              var u, c, d, f, p, h, m = r !== s ? "nextSibling" : "previousSibling",
                g = e.parentNode,
                v = a && e.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;
              if (g) {
                if (r) {
                  for (; m;) {
                    for (f = e; f = f[m];)
                      if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                    h = m = "only" === t && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                  for (f = g, d = f[q] || (f[q] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[t] || [], p = u[0] === M && u[1], b = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                    if (1 === f.nodeType && ++b && f === e) {
                      c[t] = [M, p, b];
                      break
                    }
                } else if (y && (f = e, d = f[q] || (f[q] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[t] || [], p = u[0] === M && u[1], b = p), !1 === b)
                  for (;
                    (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[q] || (f[q] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[t] = [M, b]), f !== e)););
                return (b -= o) === i || b % i == 0 && b / i >= 0
              }
            }
          },
          PSEUDO: function(t, n) {
            var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
            return r[q] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
              for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]), t[i] = !(e[i] = o[s])
            }) : function(t) {
              return r(t, 0, o)
            }) : r
          }
        },
        pseudos: {
          not: i(function(t) {
            var e = [],
              n = [],
              o = k(t.replace(at, "$1"));
            return o[q] ? i(function(t, e, n, i) {
              for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
            }) : function(t, i, r) {
              return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
            }
          }),
          has: i(function(t) {
            return function(n) {
              return e(t, n).length > 0
            }
          }),
          contains: i(function(t) {
            return t = t.replace(xt, wt),
              function(e) {
                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
              }
          }),
          lang: i(function(t) {
            return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
              function(e) {
                var n;
                do {
                  if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function(e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id
          },
          root: function(t) {
            return t === L
          },
          focus: function(t) {
            return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
          },
          enabled: function(t) {
            return !1 === t.disabled
          },
          disabled: function(t) {
            return !0 === t.disabled
          },
          checked: function(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && !!t.checked || "option" === e && !!t.selected
          },
          selected: function(t) {
            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
          },
          empty: function(t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0
          },
          parent: function(t) {
            return !T.pseudos.empty(t)
          },
          header: function(t) {
            return mt.test(t.nodeName)
          },
          input: function(t) {
            return ht.test(t.nodeName)
          },
          button: function(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && "button" === t.type || "button" === e
          },
          text: function(t) {
            var e;
            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
          },
          first: u(function() {
            return [0]
          }),
          last: u(function(t, e) {
            return [e - 1]
          }),
          eq: u(function(t, e, n) {
            return [n < 0 ? n + e : n]
          }),
          even: u(function(t, e) {
            for (var n = 0; n < e; n += 2) t.push(n);
            return t
          }),
          odd: u(function(t, e) {
            for (var n = 1; n < e; n += 2) t.push(n);
            return t
          }),
          lt: u(function(t, e, n) {
            for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
            return t
          }),
          gt: u(function(t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
            return t
          })
        }
      }, T.pseudos.nth = T.pseudos.eq;
      for (x in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) T.pseudos[x] = a(x);
      for (x in {
          submit: !0,
          reset: !0
        }) T.pseudos[x] = l(x);
      return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = e.tokenize = function(t, n) {
        var i, o, r, s, a, l, u, c = z[t + " "];
        if (c) return n ? 0 : c.slice(0);
        for (a = t, l = [], u = T.preFilter; a;) {
          i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
            value: i,
            type: o[0].replace(at, " ")
          }), a = a.slice(i.length));
          for (s in T.filter) !(o = pt[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
            value: i,
            type: s,
            matches: o
          }), a = a.slice(i.length));
          if (!i) break
        }
        return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
      }, k = e.compile = function(t, e) {
        var n, i = [],
          o = [],
          r = U[t + " "];
        if (!r) {
          for (e || (e = E(t)), n = e.length; n--;) r = y(e[n]), r[q] ? i.push(r) : o.push(r);
          r = U(t, b(o, i)), r.selector = t
        }
        return r
      }, N = e.select = function(t, e, n, i) {
        var o, r, s, a, l, u = "function" == typeof t && t,
          d = !i && E(t = u.selector || t);
        if (n = n || [], 1 === d.length) {
          if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && R && T.relative[r[1].type]) {
            if (!(e = (T.find.ID(s.matches[0].replace(xt, wt), e) || [])[0])) return n;
            u && (e = e.parentNode), t = t.slice(r.shift().value.length)
          }
          for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
            if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, wt), yt.test(r[0].type) && c(e.parentNode) || e))) {
              if (r.splice(o, 1), !(t = i.length && f(r))) return K.apply(n, i), n;
              break
            }
        }
        return (u || k(t, d))(i, e, !R, n, !e || yt.test(t) && c(e.parentNode) || e), n
      }, w.sortStable = q.split("").sort(X).join("") === q, w.detectDuplicates = !!$, j(), w.sortDetached = o(function(t) {
        return 1 & t.compareDocumentPosition(I.createElement("div"))
      }), o(function(t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function(t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), w.attributes && o(function(t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || r("value", function(t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
      }), o(function(t) {
        return null == t.getAttribute("disabled")
      }) || r(et, function(t, e, n) {
        var i;
        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }), e
    }(t);
    pt.find = yt, pt.expr = yt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = yt.uniqueSort, pt.text = yt.getText, pt.isXMLDoc = yt.isXML, pt.contains = yt.contains;
    var bt = function(t, e, n) {
        for (var i = [], o = n !== undefined;
          (t = t[e]) && 9 !== t.nodeType;)
          if (1 === t.nodeType) {
            if (o && pt(t).is(n)) break;
            i.push(t)
          }
        return i
      },
      xt = function(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
      },
      wt = pt.expr.match.needsContext,
      Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Ct = /^.[^:#\[\.,]*$/;
    pt.filter = function(t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? pt.find.matchesSelector(i, t) ? [i] : [] : pt.find.matches(t, pt.grep(e, function(t) {
        return 1 === t.nodeType
      }))
    }, pt.fn.extend({
      find: function(t) {
        var e, n = [],
          i = this,
          o = i.length;
        if ("string" != typeof t) return this.pushStack(pt(t).filter(function() {
          for (e = 0; e < o; e++)
            if (pt.contains(i[e], this)) return !0
        }));
        for (e = 0; e < o; e++) pt.find(t, i[e], n);
        return n = this.pushStack(o > 1 ? pt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
      },
      filter: function(t) {
        return this.pushStack(i(this, t || [], !1))
      },
      not: function(t) {
        return this.pushStack(i(this, t || [], !0))
      },
      is: function(t) {
        return !!i(this, "string" == typeof t && wt.test(t) ? pt(t) : t || [], !1).length
      }
    });
    var St, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pt.fn.init = function(t, e, n) {
      var i, o;
      if (!t) return this;
      if (n = n || St, "string" == typeof t) {
        if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Et.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
          if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), Tt.test(i[1]) && pt.isPlainObject(e))
            for (i in e) pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          return this
        }
        if ((o = it.getElementById(i[2])) && o.parentNode) {
          if (o.id !== i[2]) return St.find(t);
          this.length = 1, this[0] = o
        }
        return this.context = it, this.selector = t, this
      }
      return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(pt) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
    }).prototype = pt.fn, St = pt(it);
    var kt = /^(?:parents|prev(?:Until|All))/,
      Nt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    pt.fn.extend({
      has: function(t) {
        var e, n = pt(t, this),
          i = n.length;
        return this.filter(function() {
          for (e = 0; e < i; e++)
            if (pt.contains(this, n[e])) return !0
        })
      },
      closest: function(t, e) {
        for (var n, i = 0, o = this.length, r = [], s = wt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; i < o; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
              r.push(n);
              break
            }
        return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r)
      },
      index: function(t) {
        return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(t, e) {
        return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
      },
      addBack: function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), pt.each({
      parent: function(t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function(t) {
        return bt(t, "parentNode")
      },
      parentsUntil: function(t, e, n) {
        return bt(t, "parentNode", n)
      },
      next: function(t) {
        return o(t, "nextSibling")
      },
      prev: function(t) {
        return o(t, "previousSibling")
      },
      nextAll: function(t) {
        return bt(t, "nextSibling")
      },
      prevAll: function(t) {
        return bt(t, "previousSibling")
      },
      nextUntil: function(t, e, n) {
        return bt(t, "nextSibling", n)
      },
      prevUntil: function(t, e, n) {
        return bt(t, "previousSibling", n)
      },
      siblings: function(t) {
        return xt((t.parentNode || {}).firstChild, t)
      },
      children: function(t) {
        return xt(t.firstChild)
      },
      contents: function(t) {
        return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
      }
    }, function(t, e) {
      pt.fn[t] = function(n, i) {
        var o = pt.map(this, e, n);
        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = pt.filter(i, o)), this.length > 1 && (Nt[t] || (o = pt.uniqueSort(o)), kt.test(t) && (o = o.reverse())), this.pushStack(o)
      }
    });
    var At = /\S+/g;
    pt.Callbacks = function(t) {
      t = "string" == typeof t ? r(t) : pt.extend({}, t);
      var e, n, i, o, s = [],
        a = [],
        l = -1,
        u = function() {
          for (o = t.once, i = e = !0; a.length; l = -1)
            for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && t.stopOnFalse && (l = s.length, n = !1);
          t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
        },
        c = {
          add: function() {
            return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
              pt.each(n, function(n, i) {
                pt.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== pt.type(i) && e(i)
              })
            }(arguments), n && !e && u()), this
          },
          remove: function() {
            return pt.each(arguments, function(t, e) {
              for (var n;
                (n = pt.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
            }), this
          },
          has: function(t) {
            return t ? pt.inArray(t, s) > -1 : s.length > 0
          },
          empty: function() {
            return s && (s = []), this
          },
          disable: function() {
            return o = a = [], s = n = "", this
          },
          disabled: function() {
            return !s
          },
          lock: function() {
            return o = !0, n || c.disable(), this
          },
          locked: function() {
            return !!o
          },
          fireWith: function(t, n) {
            return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
          },
          fire: function() {
            return c.fireWith(this, arguments), this
          },
          fired: function() {
            return !!i
          }
        };
      return c
    }, pt.extend({
      Deferred: function(t) {
        var e = [
            ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
            ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
            ["notify", "progress", pt.Callbacks("memory")]
          ],
          n = "pending",
          i = {
            state: function() {
              return n
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            then: function() {
              var t = arguments;
              return pt.Deferred(function(n) {
                pt.each(e, function(e, r) {
                  var s = pt.isFunction(t[e]) && t[e];
                  o[r[1]](function() {
                    var t = s && s.apply(this, arguments);
                    t && pt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                  })
                }), t = null
              }).promise()
            },
            promise: function(t) {
              return null != t ? pt.extend(t, i) : i
            }
          },
          o = {};
        return i.pipe = i.then, pt.each(e, function(t, r) {
          var s = r[2],
            a = r[3];
          i[r[1]] = s.add, a && s.add(function() {
            n = a
          }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
            return o[r[0] + "With"](this === o ? i : this, arguments), this
          }, o[r[0] + "With"] = s.fireWith
        }), i.promise(o), t && t.call(o, o), o
      },
      when: function(t) {
        var e, n, i, o = 0,
          r = ot.call(arguments),
          s = r.length,
          a = 1 !== s || t && pt.isFunction(t.promise) ? s : 0,
          l = 1 === a ? t : pt.Deferred(),
          u = function(t, n, i) {
            return function(o) {
              n[t] = this, i[t] = arguments.length > 1 ? ot.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
            }
          };
        if (s > 1)
          for (e = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && pt.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, e)).done(u(o, i, r)).fail(l.reject) : --a;
        return a || l.resolveWith(i, r), l.promise()
      }
    });
    var Dt;
    pt.fn.ready = function(t) {
      return pt.ready.promise().done(t), this
    }, pt.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(t) {
        t ? pt.readyWait++ : pt.ready(!0)
      },
      ready: function(t) {
        (!0 === t ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, !0 !== t && --pt.readyWait > 0 || (Dt.resolveWith(it, [pt]), pt.fn.triggerHandler && (pt(it).triggerHandler("ready"), pt(it).off("ready"))))
      }
    }), pt.ready.promise = function(e) {
      if (!Dt)
        if (Dt = pt.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) t.setTimeout(pt.ready);
        else if (it.addEventListener) it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
      else {
        it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
        var n = !1;
        try {
          n = null == t.frameElement && it.documentElement
        } catch (t) {}
        n && n.doScroll && function e() {
          if (!pt.isReady) {
            try {
              n.doScroll("left")
            } catch (n) {
              return t.setTimeout(e, 50)
            }
            s(), pt.ready()
          }
        }()
      }
      return Dt.promise(e)
    }, pt.ready.promise();
    var $t;
    for ($t in pt(dt)) break;
    dt.ownFirst = "0" === $t, dt.inlineBlockNeedsLayout = !1, pt(function() {
        var t, e, n, i;
        (n = it.getElementsByTagName("body")[0]) && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
      }),
      function() {
        var t = it.createElement("div");
        dt.deleteExpando = !0;
        try {
          delete t.test
        } catch (t) {
          dt.deleteExpando = !1
        }
        t = null
      }();
    var jt = function(t) {
        var e = pt.noData[(t.nodeName + " ").toLowerCase()],
          n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
      },
      It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Lt = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
          return !!(t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]) && !u(t)
        },
        data: function(t, e, n) {
          return c(t, e, n)
        },
        removeData: function(t, e) {
          return d(t, e)
        },
        _data: function(t, e, n) {
          return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
          return d(t, e, !0)
        }
      }), pt.fn.extend({
        data: function(t, e) {
          var n, i, o, r = this[0],
            s = r && r.attributes;
          if (t === undefined) {
            if (this.length && (o = pt.data(r), 1 === r.nodeType && !pt._data(r, "parsedAttrs"))) {
              for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = pt.camelCase(i.slice(5)), l(r, i, o[i])));
              pt._data(r, "parsedAttrs", !0)
            }
            return o
          }
          return "object" == typeof t ? this.each(function() {
            pt.data(this, t)
          }) : arguments.length > 1 ? this.each(function() {
            pt.data(this, t, e)
          }) : r ? l(r, t, pt.data(r, t)) : undefined
        },
        removeData: function(t) {
          return this.each(function() {
            pt.removeData(this, t)
          })
        }
      }), pt.extend({
        queue: function(t, e, n) {
          var i;
          if (t) return e = (e || "fx") + "queue", i = pt._data(t, e), n && (!i || pt.isArray(n) ? i = pt._data(t, e, pt.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
          e = e || "fx";
          var n = pt.queue(t, e),
            i = n.length,
            o = n.shift(),
            r = pt._queueHooks(t, e),
            s = function() {
              pt.dequeue(t, e)
            };
          "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
          var n = e + "queueHooks";
          return pt._data(t, n) || pt._data(t, n, {
            empty: pt.Callbacks("once memory").add(function() {
              pt._removeData(t, e + "queue"), pt._removeData(t, n)
            })
          })
        }
      }), pt.fn.extend({
        queue: function(t, e) {
          var n = 2;
          return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? pt.queue(this[0], t) : e === undefined ? this : this.each(function() {
            var n = pt.queue(this, t, e);
            pt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
          })
        },
        dequeue: function(t) {
          return this.each(function() {
            pt.dequeue(this, t)
          })
        },
        clearQueue: function(t) {
          return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
          var n, i = 1,
            o = pt.Deferred(),
            r = this,
            s = this.length,
            a = function() {
              --i || o.resolveWith(r, [r])
            };
          for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; s--;)(n = pt._data(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
          return a(), o.promise(e)
        }
      }),
      function() {
        var t;
        dt.shrinkWrapBlocks = function() {
          if (null != t) return t;
          t = !1;
          var e, n, i;
          return (n = it.getElementsByTagName("body")[0]) && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
      }();
    var Rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ot = new RegExp("^(?:([+-])=|)(" + Rt + ")([a-z%]*)$", "i"),
      Ht = ["Top", "Right", "Bottom", "Left"],
      Pt = function(t, e) {
        return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
      },
      Ft = function(t, e, n, i, o, r, s) {
        var a = 0,
          l = t.length,
          u = null == n;
        if ("object" === pt.type(n)) {
          o = !0;
          for (a in n) Ft(t, e, a, n[a], !0, r, s)
        } else if (i !== undefined && (o = !0, pt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
            return u.call(pt(t), n)
          })), e))
          for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
      },
      qt = /^(?:checkbox|radio)$/i,
      _t = /<([\w:-]+)/,
      Mt = /^$|\/(?:java|ecma)script/i,
      Wt = /^\s+/,
      Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
      var t = it.createElement("div"),
        e = it.createDocumentFragment(),
        n = it.createElement("input");
      t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === t.firstChild.nodeType, dt.tbody = !t.getElementsByTagName("tbody").length, dt.htmlSerialize = !!t.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), dt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!t.addEventListener, t[pt.expando] = 1, dt.attributes = !t.getAttribute(pt.expando)
    }();
    var zt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
    var Ut = /<|&#?\w+;/,
      Xt = /<tbody/i;
    ! function() {
      var e, n, i = it.createElement("div");
      for (e in {
          submit: !0,
          change: !0,
          focusin: !0
        }) n = "on" + e, (dt[e] = n in t) || (i.setAttribute(n, "t"), dt[e] = !1 === i.attributes[n].expando);
      i = null
    }();
    var Vt = /^(?:input|select|textarea)$/i,
      Qt = /^key/,
      Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Gt = /^(?:focusinfocus|focusoutblur)$/,
      Yt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
      global: {},
      add: function(t, e, n, i, o) {
        var r, s, a, l, u, c, d, f, p, h, m, g = pt._data(t);
        if (g) {
          for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = pt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
              return void 0 === pt || t && pt.event.triggered === t.type ? undefined : pt.event.dispatch.apply(c.elem, arguments)
            }, c.elem = t), e = (e || "").match(At) || [""], a = e.length; a--;) r = Yt.exec(e[a]) || [], p = m = r[1], h = (r[2] || "").split(".").sort(), p && (u = pt.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = pt.event.special[p] || {}, d = pt.extend({
            type: p,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && pt.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, l), (f = s[p]) || (f = s[p] = [], f.delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, h, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), pt.event.global[p] = !0);
          t = null
        }
      },
      remove: function(t, e, n, i, o) {
        var r, s, a, l, u, c, d, f, p, h, m, g = pt.hasData(t) && pt._data(t);
        if (g && (c = g.events)) {
          for (e = (e || "").match(At) || [""], u = e.length; u--;)
            if (a = Yt.exec(e[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
              for (d = pt.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) s = f[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(r, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(t, s));
              l && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || pt.removeEvent(t, p, g.handle), delete c[p])
            } else
              for (p in c) pt.event.remove(t, p + e[u], n, i, !0);
          pt.isEmptyObject(c) && (delete g.handle, pt._removeData(t, "events"))
        }
      },
      trigger: function(e, n, i, o) {
        var r, s, a, l, u, c, d, f = [i || it],
          p = ct.call(e, "type") ? e.type : e,
          h = ct.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Gt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = i), n = null == n ? [e] : pt.makeArray(n, [e]), u = pt.event.special[p] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
          if (!o && !u.noBubble && !pt.isWindow(i)) {
            for (l = u.delegateType || p, Gt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), c = a;
            c === (i.ownerDocument || it) && f.push(c.defaultView || c.parentWindow || t)
          }
          for (d = 0;
            (a = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : u.bindType || p, r = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle"), r && r.apply(a, n), (r = s && a[s]) && r.apply && jt(a) && (e.result = r.apply(a, n), !1 === e.result && e.preventDefault());
          if (e.type = p, !o && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), n)) && jt(i) && s && i[p] && !pt.isWindow(i)) {
            c = i[s], c && (i[s] = null), pt.event.triggered = p;
            try {
              i[p]()
            } catch (t) {}
            pt.event.triggered = undefined, c && (i[s] = c)
          }
          return e.result
        }
      },
      dispatch: function(t) {
        t = pt.event.fix(t);
        var e, n, i, o, r, s = [],
          a = ot.call(arguments),
          l = (pt._data(this, "events") || {})[t.type] || [],
          u = pt.event.special[t.type] || {};
        if (a[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
          for (s = pt.event.handlers.call(this, t, l), e = 0;
            (o = s[e++]) && !t.isPropagationStopped();)
            for (t.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, (i = ((pt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) !== undefined && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, t), t.result
        }
      },
      handlers: function(t, e) {
        var n, i, o, r, s = [],
          a = e.delegateCount,
          l = t.target;
        if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
              for (i = [], n = 0; n < a; n++) r = e[n], o = r.selector + " ", i[o] === undefined && (i[o] = r.needsContext ? pt(o, this).index(l) > -1 : pt.find(o, this, null, [l]).length), i[o] && i.push(r);
              i.length && s.push({
                elem: l,
                handlers: i
              })
            }
        return a < e.length && s.push({
          elem: this,
          handlers: e.slice(a)
        }), s
      },
      fix: function(t) {
        if (t[pt.expando]) return t;
        var e, n, i, o = t.type,
          r = t,
          s = this.fixHooks[o];
        for (s || (this.fixHooks[o] = s = Jt.test(o) ? this.mouseHooks : Qt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new pt.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
        return t.target || (t.target = r.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(t, e) {
          return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(t, e) {
          var n, i, o, r = e.button,
            s = e.fromElement;
          return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || r === undefined || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== x() && this.focus) try {
              return this.focus(), !1
            } catch (t) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === x() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
          },
          _default: function(t) {
            return pt.nodeName(t.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(t) {
            t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
          }
        }
      },
      simulate: function(t, e, n) {
        var i = pt.extend(new pt.Event, n, {
          type: t,
          isSimulated: !0
        });
        pt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
      }
    }, pt.removeEvent = it.removeEventListener ? function(t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
      var i = "on" + e;
      t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, pt.Event = function(t, e) {
      if (!(this instanceof pt.Event)) return new pt.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? y : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), this[pt.expando] = !0
    }, pt.Event.prototype = {
      constructor: pt.Event,
      isDefaultPrevented: b,
      isPropagationStopped: b,
      isImmediatePropagationStopped: b,
      preventDefault: function() {
        var t = this.originalEvent;
        this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
      },
      stopPropagation: function() {
        var t = this.originalEvent;
        this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
      }
    }, pt.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(t, e) {
      pt.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function(t) {
          var n, i = this,
            o = t.relatedTarget,
            r = t.handleObj;
          return o && (o === i || pt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
        }
      }
    }), dt.submit || (pt.event.special.submit = {
      setup: function() {
        if (pt.nodeName(this, "form")) return !1;
        pt.event.add(this, "click._submit keypress._submit", function(t) {
          var e = t.target,
            n = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : undefined;
          n && !pt._data(n, "submit") && (pt.event.add(n, "submit._submit", function(t) {
            t._submitBubble = !0
          }), pt._data(n, "submit", !0))
        })
      },
      postDispatch: function(t) {
        t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
      },
      teardown: function() {
        if (pt.nodeName(this, "form")) return !1;
        pt.event.remove(this, "._submit")
      }
    }), dt.change || (pt.event.special.change = {
      setup: function() {
        if (Vt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function(t) {
          "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
        }), pt.event.add(this, "click._change", function(t) {
          this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t)
        })), !1;
        pt.event.add(this, "beforeactivate._change", function(t) {
          var e = t.target;
          Vt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {
            !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
          }), pt._data(e, "change", !0))
        })
      },
      handle: function(t) {
        var e = t.target;
        if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
      },
      teardown: function() {
        return pt.event.remove(this, "._change"), !Vt.test(this.nodeName)
      }
    }), dt.focusin || pt.each({
      focus: "focusin",
      blur: "focusout"
    }, function(t, e) {
      var n = function(t) {
        pt.event.simulate(e, t.target, pt.event.fix(t))
      };
      pt.event.special[e] = {
        setup: function() {
          var i = this.ownerDocument || this,
            o = pt._data(i, e);
          o || i.addEventListener(t, n, !0), pt._data(i, e, (o || 0) + 1)
        },
        teardown: function() {
          var i = this.ownerDocument || this,
            o = pt._data(i, e) - 1;
          o ? pt._data(i, e, o) : (i.removeEventListener(t, n, !0), pt._removeData(i, e))
        }
      }
    }), pt.fn.extend({
      on: function(t, e, n, i) {
        return w(this, t, e, n, i)
      },
      one: function(t, e, n, i) {
        return w(this, t, e, n, i, 1)
      },
      off: function(t, e, n) {
        var i, o;
        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, pt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof t) {
          for (o in t) this.off(o, e, t[o]);
          return this
        }
        return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = b), this.each(function() {
          pt.event.remove(this, t, n, e)
        })
      },
      trigger: function(t, e) {
        return this.each(function() {
          pt.event.trigger(t, e, this)
        })
      },
      triggerHandler: function(t, e) {
        var n = this[0];
        if (n) return pt.event.trigger(t, e, n, !0)
      }
    });
    var Kt = / jQuery\d+="(?:null|\d+)"/g,
      Zt = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
      te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ee = /<script|<style|<link/i,
      ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ie = /^true\/(.*)/,
      oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      re = p(it),
      se = re.appendChild(it.createElement("div"));
    pt.extend({
      htmlPrefilter: function(t) {
        return t.replace(te, "<$1></$2>")
      },
      clone: function(t, e, n) {
        var i, o, r, s, a, l = pt.contains(t.ownerDocument, t);
        if (dt.html5Clone || pt.isXMLDoc(t) || !Zt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (se.innerHTML = t.outerHTML, se.removeChild(r = se.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
          for (i = h(r), a = h(t), s = 0; null != (o = a[s]); ++s) i[s] && k(o, i[s]);
        if (e)
          if (n)
            for (a = a || h(t), i = i || h(r), s = 0; null != (o = a[s]); s++) E(o, i[s]);
          else E(t, r);
        return i = h(r, "script"), i.length > 0 && m(i, !l && h(t, "script")), i = a = o = null, r
      },
      cleanData: function(t, e) {
        for (var n, i, o, r, s = 0, a = pt.expando, l = pt.cache, u = dt.attributes, c = pt.event.special; null != (n = t[s]); s++)
          if ((e || jt(n)) && (o = n[a], r = o && l[o])) {
            if (r.events)
              for (i in r.events) c[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, r.handle);
            l[o] && (delete l[o], u || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a), nt.push(o))
          }
      }
    }), pt.fn.extend({
      domManip: N,
      detach: function(t) {
        return A(this, t, !0)
      },
      remove: function(t) {
        return A(this, t)
      },
      text: function(t) {
        return Ft(this, function(t) {
          return t === undefined ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
        }, null, t, arguments.length)
      },
      append: function() {
        return N(this, arguments, function(t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            T(this, t).appendChild(t)
          }
        })
      },
      prepend: function() {
        return N(this, arguments, function(t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = T(this, t);
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function() {
        return N(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function() {
        return N(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && pt.cleanData(h(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
          t.options && pt.nodeName(t, "select") && (t.options.length = 0)
        }
        return this
      },
      clone: function(t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function() {
          return pt.clone(this, t, e)
        })
      },
      html: function(t) {
        return Ft(this, function(t) {
          var e = this[0] || {},
            n = 0,
            i = this.length;
          if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(Kt, "") : undefined;
          if ("string" == typeof t && !ee.test(t) && (dt.htmlSerialize || !Zt.test(t)) && (dt.leadingWhitespace || !Wt.test(t)) && !zt[(_t.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = pt.htmlPrefilter(t);
            try {
              for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (pt.cleanData(h(e, !1)), e.innerHTML = t);
              e = 0
            } catch (t) {}
          }
          e && this.empty().append(t)
        }, null, t, arguments.length)
      },
      replaceWith: function() {
        var t = [];
        return N(this, arguments, function(e) {
          var n = this.parentNode;
          pt.inArray(this, t) < 0 && (pt.cleanData(h(this)), n && n.replaceChild(e, this))
        }, t)
      }
    }), pt.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(t, e) {
      pt.fn[t] = function(t) {
        for (var n, i = 0, o = [], r = pt(t), s = r.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), pt(r[i])[e](n), st.apply(o, n.get());
        return this.pushStack(o)
      }
    });
    var ae, le = {
        HTML: "block",
        BODY: "block"
      },
      ue = /^margin/,
      ce = new RegExp("^(" + Rt + ")(?!px)[a-z%]+$", "i"),
      de = function(t, e, n, i) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e) t.style[r] = s[r];
        return o
      },
      fe = it.documentElement;
    ! function() {
      function e() {
        var e, c, d = it.documentElement;
        d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, o = "4px" === (c || {
            width: "4px"
          }).width, u.style.marginRight = "50%", i = "4px" === (c || {
            marginRight: "4px"
          }).marginRight, e = u.appendChild(it.createElement("div")),
          e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", r = 0 === u.getClientRects().length, r && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", r = 0 === e[0].offsetHeight)), d.removeChild(l)
      }
      var n, i, o, r, s, a, l = it.createElement("div"),
        u = it.createElement("div");
      u.style && (u.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === u.style.opacity, dt.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === u.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), dt.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pt.extend(dt, {
        reliableHiddenOffsets: function() {
          return null == n && e(), r
        },
        boxSizingReliable: function() {
          return null == n && e(), o
        },
        pixelMarginRight: function() {
          return null == n && e(), i
        },
        pixelPosition: function() {
          return null == n && e(), n
        },
        reliableMarginRight: function() {
          return null == n && e(), s
        },
        reliableMarginLeft: function() {
          return null == n && e(), a
        }
      }))
    }();
    var pe, he, me = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (pe = function(e) {
      var n = e.ownerDocument.defaultView;
      return n && n.opener || (n = t), n.getComputedStyle(e)
    }, he = function(t, e, n) {
      var i, o, r, s, a = t.style;
      return n = n || pe(t), s = n ? n.getPropertyValue(e) || n[e] : undefined, "" !== s && s !== undefined || pt.contains(t.ownerDocument, t) || (s = pt.style(t, e)), n && !dt.pixelMarginRight() && ce.test(s) && ue.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), s === undefined ? s : s + ""
    }) : fe.currentStyle && (pe = function(t) {
      return t.currentStyle
    }, he = function(t, e, n) {
      var i, o, r, s, a = t.style;
      return n = n || pe(t), s = n ? n[e] : undefined, null == s && a && a[e] && (s = a[e]), ce.test(s) && !me.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), s === undefined ? s : s + "" || "auto"
    });
    var ge = /alpha\([^)]*\)/i,
      ve = /opacity\s*=\s*([^)]*)/i,
      ye = /^(none|table(?!-c[ea]).+)/,
      be = new RegExp("^(" + Rt + ")(.*)$", "i"),
      xe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      we = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Te = ["Webkit", "O", "Moz", "ms"],
      Ce = it.createElement("div").style;
    pt.extend({
      cssHooks: {
        opacity: {
          get: function(t, e) {
            if (e) {
              var n = he(t, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": dt.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o, r, s, a = pt.camelCase(e),
            l = t.style;
          if (e = pt.cssProps[a] || (pt.cssProps[a] = I(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], n === undefined) return s && "get" in s && (o = s.get(t, !1, i)) !== undefined ? o : l[e];
          if (r = typeof n, "string" === r && (o = Ot.exec(n)) && o[1] && (n = f(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (pt.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && (n = s.set(t, n, i)) === undefined))) try {
            l[e] = n
          } catch (t) {}
        }
      },
      css: function(t, e, n, i) {
        var o, r, s, a = pt.camelCase(e);
        return e = pt.cssProps[a] || (pt.cssProps[a] = I(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), r === undefined && (r = he(t, e, i)), "normal" === r && e in we && (r = we[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
      }
    }), pt.each(["height", "width"], function(t, e) {
      pt.cssHooks[e] = {
        get: function(t, n, i) {
          if (n) return ye.test(pt.css(t, "display")) && 0 === t.offsetWidth ? de(t, xe, function() {
            return H(t, e, i)
          }) : H(t, e, i)
        },
        set: function(t, n, i) {
          var o = i && pe(t);
          return R(t, n, i ? O(t, e, i, dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o), o) : 0)
        }
      }
    }), dt.opacity || (pt.cssHooks.opacity = {
      get: function(t, e) {
        return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
      },
      set: function(t, e) {
        var n = t.style,
          i = t.currentStyle,
          o = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
          r = i && i.filter || n.filter || "";
        n.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(r.replace(ge, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ge.test(r) ? r.replace(ge, o) : r + " " + o)
      }
    }), pt.cssHooks.marginRight = j(dt.reliableMarginRight, function(t, e) {
      if (e) return de(t, {
        display: "inline-block"
      }, he, [t, "marginRight"])
    }), pt.cssHooks.marginLeft = j(dt.reliableMarginLeft, function(t, e) {
      if (e) return (parseFloat(he(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - de(t, {
        marginLeft: 0
      }, function() {
        return t.getBoundingClientRect().left
      }) : 0)) + "px"
    }), pt.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(t, e) {
      pt.cssHooks[t + e] = {
        expand: function(n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Ht[i] + e] = r[i] || r[i - 2] || r[0];
          return o
        }
      }, ue.test(t) || (pt.cssHooks[t + e].set = R)
    }), pt.fn.extend({
      css: function(t, e) {
        return Ft(this, function(t, e, n) {
          var i, o, r = {},
            s = 0;
          if (pt.isArray(e)) {
            for (i = pe(t), o = e.length; s < o; s++) r[e[s]] = pt.css(t, e[s], !1, i);
            return r
          }
          return n !== undefined ? pt.style(t, e, n) : pt.css(t, e)
        }, t, e, arguments.length > 1)
      },
      show: function() {
        return L(this, !0)
      },
      hide: function() {
        return L(this)
      },
      toggle: function(t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
          Pt(this) ? pt(this).show() : pt(this).hide()
        })
      }
    }), pt.Tween = P, P.prototype = {
      constructor: P,
      init: function(t, e, n, i, o, r) {
        this.elem = t, this.prop = n, this.easing = o || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (pt.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var t = P.propHooks[this.prop];
        return t && t.get ? t.get(this) : P.propHooks._default.get(this)
      },
      run: function(t) {
        var e, n = P.propHooks[this.prop];
        return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
      }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
      _default: {
        get: function(t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
        },
        set: function(t) {
          pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
        }
      }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
      set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, pt.easing = {
      linear: function(t) {
        return t
      },
      swing: function(t) {
        return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
    }, pt.fx = P.prototype.init, pt.fx.step = {};
    var Se, Ee, ke = /^(?:toggle|show|hide)$/,
      Ne = /queueHooks$/;
    pt.Animation = pt.extend(B, {
        tweeners: {
          "*": [function(t, e) {
            var n = this.createTween(t, e);
            return f(n.elem, t, Ot.exec(e), n), n
          }]
        },
        tweener: function(t, e) {
          pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(At);
          for (var n, i = 0, o = t.length; i < o; i++) n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
        },
        prefilters: [M],
        prefilter: function(t, e) {
          e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
      }), pt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? pt.extend({}, t) : {
          complete: n || !n && e || pt.isFunction(t) && t,
          duration: t,
          easing: n && e || e && !pt.isFunction(e) && e
        };
        return i.duration = pt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pt.fx.speeds ? pt.fx.speeds[i.duration] : pt.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          pt.isFunction(i.old) && i.old.call(this), i.queue && pt.dequeue(this, i.queue)
        }, i
      }, pt.fn.extend({
        fadeTo: function(t, e, n, i) {
          return this.filter(Pt).css("opacity", 0).show().end().animate({
            opacity: e
          }, t, n, i)
        },
        animate: function(t, e, n, i) {
          var o = pt.isEmptyObject(t),
            r = pt.speed(e, n, i),
            s = function() {
              var e = B(this, pt.extend({}, t), r);
              (o || pt._data(this, "finish")) && e.stop(!0)
            };
          return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, n) {
          var i = function(t) {
            var e = t.stop;
            delete t.stop, e(n)
          };
          return "string" != typeof t && (n = e, e = t, t = undefined), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
            var e = !0,
              o = null != t && t + "queueHooks",
              r = pt.timers,
              s = pt._data(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else
              for (o in s) s[o] && s[o].stop && Ne.test(o) && i(s[o]);
            for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
            !e && n || pt.dequeue(this, t)
          })
        },
        finish: function(t) {
          return !1 !== t && (t = t || "fx"), this.each(function() {
            var e, n = pt._data(this),
              i = n[t + "queue"],
              o = n[t + "queueHooks"],
              r = pt.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, pt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
            delete n.finish
          })
        }
      }), pt.each(["toggle", "show", "hide"], function(t, e) {
        var n = pt.fn[e];
        pt.fn[e] = function(t, i, o) {
          return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, i, o)
        }
      }), pt.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(t, e) {
        pt.fn[t] = function(t, n, i) {
          return this.animate(e, t, n, i)
        }
      }), pt.timers = [], pt.fx.tick = function() {
        var t, e = pt.timers,
          n = 0;
        for (Se = pt.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || pt.fx.stop(), Se = undefined
      }, pt.fx.timer = function(t) {
        pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
      }, pt.fx.interval = 13, pt.fx.start = function() {
        Ee || (Ee = t.setInterval(pt.fx.tick, pt.fx.interval))
      }, pt.fx.stop = function() {
        t.clearInterval(Ee), Ee = null
      }, pt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, pt.fn.delay = function(e, n) {
        return e = pt.fx ? pt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
          var o = t.setTimeout(n, e);
          i.stop = function() {
            t.clearTimeout(o)
          }
        })
      },
      function() {
        var t, e = it.createElement("input"),
          n = it.createElement("div"),
          i = it.createElement("select"),
          o = i.appendChild(it.createElement("option"));
        n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", dt.getSetAttribute = "t" !== n.className, dt.style = /top/.test(t.getAttribute("style")), dt.hrefNormalized = "/a" === t.getAttribute("href"), dt.checkOn = !!e.value, dt.optSelected = o.selected, dt.enctype = !!it.createElement("form").enctype, i.disabled = !0, dt.optDisabled = !o.disabled, e = it.createElement("input"), e.setAttribute("value", ""), dt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), dt.radioValue = "t" === e.value
      }();
    var Ae = /\r/g,
      De = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
      val: function(t) {
        var e, n, i, o = this[0]; {
          if (arguments.length) return i = pt.isFunction(t), this.each(function(n) {
            var o;
            1 === this.nodeType && (o = i ? t.call(this, n, pt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : pt.isArray(o) && (o = pt.map(o, function(t) {
              return null == t ? "" : t + ""
            })), (e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && e.set(this, o, "value") !== undefined || (this.value = o))
          });
          if (o) return (e = pt.valHooks[o.type] || pt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && (n = e.get(o, "value")) !== undefined ? n : (n = o.value, "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)
        }
      }
    }), pt.extend({
      valHooks: {
        option: {
          get: function(t) {
            var e = pt.find.attr(t, "value");
            return null != e ? e : pt.trim(pt.text(t)).replace(De, " ")
          }
        },
        select: {
          get: function(t) {
            for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
              if (n = i[l], (n.selected || l === o) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pt.nodeName(n.parentNode, "optgroup"))) {
                if (e = pt(n).val(), r) return e;
                s.push(e)
              }
            return s
          },
          set: function(t, e) {
            for (var n, i, o = t.options, r = pt.makeArray(e), s = o.length; s--;)
              if (i = o[s], pt.inArray(pt.valHooks.option.get(i), r) > -1) try {
                i.selected = n = !0
              } catch (t) {
                i.scrollHeight
              } else i.selected = !1;
            return n || (t.selectedIndex = -1), o
          }
        }
      }
    }), pt.each(["radio", "checkbox"], function() {
      pt.valHooks[this] = {
        set: function(t, e) {
          if (pt.isArray(e)) return t.checked = pt.inArray(pt(t).val(), e) > -1
        }
      }, dt.checkOn || (pt.valHooks[this].get = function(t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    });
    var $e, je, Ie = pt.expr.attrHandle,
      Le = /^(?:checked|selected)$/i,
      Re = dt.getSetAttribute,
      Oe = dt.input;
    pt.fn.extend({
      attr: function(t, e) {
        return Ft(this, pt.attr, t, e, arguments.length > 1)
      },
      removeAttr: function(t) {
        return this.each(function() {
          pt.removeAttr(this, t)
        })
      }
    }), pt.extend({
      attr: function(t, e, n) {
        var i, o, r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, n) : (1 === r && pt.isXMLDoc(t) || (e = e.toLowerCase(), o = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? je : $e)), n !== undefined ? null === n ? void pt.removeAttr(t, e) : o && "set" in o && (i = o.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = pt.find.attr(t, e), null == i ? undefined : i))
      },
      attrHooks: {
        type: {
          set: function(t, e) {
            if (!dt.radioValue && "radio" === e && pt.nodeName(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e
            }
          }
        }
      },
      removeAttr: function(t, e) {
        var n, i, o = 0,
          r = e && e.match(At);
        if (r && 1 === t.nodeType)
          for (; n = r[o++];) i = pt.propFix[n] || n, pt.expr.match.bool.test(n) ? Oe && Re || !Le.test(n) ? t[i] = !1 : t[pt.camelCase("default-" + n)] = t[i] = !1 : pt.attr(t, n, ""), t.removeAttribute(Re ? n : i)
      }
    }), je = {
      set: function(t, e, n) {
        return !1 === e ? pt.removeAttr(t, n) : Oe && Re || !Le.test(n) ? t.setAttribute(!Re && pt.propFix[n] || n, n) : t[pt.camelCase("default-" + n)] = t[n] = !0, n
      }
    }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var n = Ie[e] || pt.find.attr;
      Oe && Re || !Le.test(e) ? Ie[e] = function(t, e, i) {
        var o, r;
        return i || (r = Ie[e], Ie[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Ie[e] = r), o
      } : Ie[e] = function(t, e, n) {
        if (!n) return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
      }
    }), Oe && Re || (pt.attrHooks.value = {
      set: function(t, e, n) {
        if (!pt.nodeName(t, "input")) return $e && $e.set(t, e, n);
        t.defaultValue = e
      }
    }), Re || ($e = {
      set: function(t, e, n) {
        var i = t.getAttributeNode(n);
        if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
      }
    }, Ie.id = Ie.name = Ie.coords = function(t, e, n) {
      var i;
      if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, pt.valHooks.button = {
      get: function(t, e) {
        var n = t.getAttributeNode(e);
        if (n && n.specified) return n.value
      },
      set: $e.set
    }, pt.attrHooks.contenteditable = {
      set: function(t, e, n) {
        $e.set(t, "" !== e && e, n)
      }
    }, pt.each(["width", "height"], function(t, e) {
      pt.attrHooks[e] = {
        set: function(t, n) {
          if ("" === n) return t.setAttribute(e, "auto"), n
        }
      }
    })), dt.style || (pt.attrHooks.style = {
      get: function(t) {
        return t.style.cssText || undefined
      },
      set: function(t, e) {
        return t.style.cssText = e + ""
      }
    });
    var He = /^(?:input|select|textarea|button|object)$/i,
      Pe = /^(?:a|area)$/i;
    pt.fn.extend({
      prop: function(t, e) {
        return Ft(this, pt.prop, t, e, arguments.length > 1)
      },
      removeProp: function(t) {
        return t = pt.propFix[t] || t, this.each(function() {
          try {
            this[t] = undefined, delete this[t]
          } catch (t) {}
        })
      }
    }), pt.extend({
      prop: function(t, e, n) {
        var i, o, r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, o = pt.propHooks[e]), n !== undefined ? o && "set" in o && (i = o.set(t, n, e)) !== undefined ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function(t) {
            var e = pt.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : He.test(t.nodeName) || Pe.test(t.nodeName) && t.href ? 0 : -1
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), dt.hrefNormalized || pt.each(["href", "src"], function(t, e) {
      pt.propHooks[e] = {
        get: function(t) {
          return t.getAttribute(e, 4)
        }
      }
    }), dt.optSelected || (pt.propHooks.selected = {
      get: function(t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
      },
      set: function(t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
    }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      pt.propFix[this.toLowerCase()] = this
    }), dt.enctype || (pt.propFix.enctype = "encoding");
    var Fe = /[\t\r\n\f]/g;
    pt.fn.extend({
      addClass: function(t) {
        var e, n, i, o, r, s, a, l = 0;
        if (pt.isFunction(t)) return this.each(function(e) {
          pt(this).addClass(t.call(this, e, z(this)))
        });
        if ("string" == typeof t && t)
          for (e = t.match(At) || []; n = this[l++];)
            if (o = z(n), i = 1 === n.nodeType && (" " + o + " ").replace(Fe, " ")) {
              for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              a = pt.trim(i), o !== a && pt.attr(n, "class", a)
            }
        return this
      },
      removeClass: function(t) {
        var e, n, i, o, r, s, a, l = 0;
        if (pt.isFunction(t)) return this.each(function(e) {
          pt(this).removeClass(t.call(this, e, z(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(At) || []; n = this[l++];)
            if (o = z(n), i = 1 === n.nodeType && (" " + o + " ").replace(Fe, " ")) {
              for (s = 0; r = e[s++];)
                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
              a = pt.trim(i), o !== a && pt.attr(n, "class", a)
            }
        return this
      },
      toggleClass: function(t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(n) {
          pt(this).toggleClass(t.call(this, n, z(this), e), e)
        }) : this.each(function() {
          var e, i, o, r;
          if ("string" === n)
            for (i = 0, o = pt(this), r = t.match(At) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
          else t !== undefined && "boolean" !== n || (e = z(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || !1 === t ? "" : pt._data(this, "__className__") || ""))
        })
      },
      hasClass: function(t) {
        var e, n, i = 0;
        for (e = " " + t + " "; n = this[i++];)
          if (1 === n.nodeType && (" " + z(n) + " ").replace(Fe, " ").indexOf(e) > -1) return !0;
        return !1
      }
    }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
      pt.fn[e] = function(t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
    }), pt.fn.extend({
      hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      }
    });
    var qe = t.location,
      _e = pt.now(),
      Me = /\?/,
      We = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pt.parseJSON = function(e) {
      if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
      var n, i = null,
        o = pt.trim(e + "");
      return o && !pt.trim(o.replace(We, function(t, e, o, r) {
        return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
      })) ? Function("return " + o)() : pt.error("Invalid JSON: " + e)
    }, pt.parseXML = function(e) {
      var n, i;
      if (!e || "string" != typeof e) return null;
      try {
        t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
      } catch (t) {
        n = undefined
      }
      return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), n
    };
    var Be = /#.*$/,
      ze = /([?&])_=[^&]*/,
      Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ve = /^(?:GET|HEAD)$/,
      Qe = /^\/\//,
      Je = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ge = {},
      Ye = {},
      Ke = "*/".concat("*"),
      Ze = qe.href,
      tn = Je.exec(Ze.toLowerCase()) || [];
    pt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ze,
        type: "GET",
        isLocal: Xe.test(tn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ke,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": pt.parseJSON,
          "text xml": pt.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(t, e) {
        return e ? V(V(t, pt.ajaxSettings), e) : V(pt.ajaxSettings, t)
      },
      ajaxPrefilter: U(Ge),
      ajaxTransport: U(Ye),
      ajax: function(e, n) {
        function i(e, n, i, o) {
          var r, d, y, b, w, C = n;
          2 !== x && (x = 2, l && t.clearTimeout(l), c = undefined, a = o || "", T.readyState = e > 0 ? 4 : 0, r = e >= 200 && e < 300 || 304 === e, i && (b = Q(f, T, i)), b = J(f, b, T, r), r ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (pt.lastModified[s] = w), (w = T.getResponseHeader("etag")) && (pt.etag[s] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, r = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", r ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = undefined, u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [T, f, r ? d : y]), g.fireWith(p, [T, C]), u && (h.trigger("ajaxComplete", [T, f]), --pt.active || pt.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (n = e, e = undefined), n = n || {};
        var o, r, s, a, l, u, c, d, f = pt.ajaxSetup({}, n),
          p = f.context || f,
          h = f.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
          m = pt.Deferred(),
          g = pt.Callbacks("once memory"),
          v = f.statusCode || {},
          y = {},
          b = {},
          x = 0,
          w = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(t) {
              var e;
              if (2 === x) {
                if (!d)
                  for (d = {}; e = Ue.exec(a);) d[e[1].toLowerCase()] = e[2];
                e = d[t.toLowerCase()]
              }
              return null == e ? null : e
            },
            getAllResponseHeaders: function() {
              return 2 === x ? a : null
            },
            setRequestHeader: function(t, e) {
              var n = t.toLowerCase();
              return x || (t = b[n] = b[n] || t, y[t] = e), this
            },
            overrideMimeType: function(t) {
              return x || (f.mimeType = t), this
            },
            statusCode: function(t) {
              var e;
              if (t)
                if (x < 2)
                  for (e in t) v[e] = [v[e], t[e]];
                else T.always(t[T.status]);
              return this
            },
            abort: function(t) {
              var e = t || w;
              return c && c.abort(e), i(0, e), this
            }
          };
        if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || Ze) + "").replace(Be, "").replace(Qe, tn[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pt.trim(f.dataType || "*").toLowerCase().match(At) || [""], null == f.crossDomain && (o = Je.exec(f.url.toLowerCase()), f.crossDomain = !(!o || o[1] === tn[1] && o[2] === tn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pt.param(f.data, f.traditional)), X(Ge, f, n, T), 2 === x) return T;
        u = pt.event && f.global, u && 0 == pt.active++ && pt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ve.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (Me.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ze.test(s) ? s.replace(ze, "$1_=" + _e++) : s + (Me.test(s) ? "&" : "?") + "_=" + _e++)), f.ifModified && (pt.lastModified[s] && T.setRequestHeader("If-Modified-Since", pt.lastModified[s]), pt.etag[s] && T.setRequestHeader("If-None-Match", pt.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : f.accepts["*"]);
        for (r in f.headers) T.setRequestHeader(r, f.headers[r]);
        if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === x)) return T.abort();
        w = "abort";
        for (r in {
            success: 1,
            error: 1,
            complete: 1
          }) T[r](f[r]);
        if (c = X(Ye, f, n, T)) {
          if (T.readyState = 1, u && h.trigger("ajaxSend", [T, f]), 2 === x) return T;
          f.async && f.timeout > 0 && (l = t.setTimeout(function() {
            T.abort("timeout")
          }, f.timeout));
          try {
            x = 1, c.send(y, i)
          } catch (t) {
            if (!(x < 2)) throw t;
            i(-1, t)
          }
        } else i(-1, "No Transport");
        return T
      },
      getJSON: function(t, e, n) {
        return pt.get(t, e, n, "json")
      },
      getScript: function(t, e) {
        return pt.get(t, undefined, e, "script")
      }
    }), pt.each(["get", "post"], function(t, e) {
      pt[e] = function(t, n, i, o) {
        return pt.isFunction(n) && (o = o || i, i = n, n = undefined), pt.ajax(pt.extend({
          url: t,
          type: e,
          dataType: o,
          data: n,
          success: i
        }, pt.isPlainObject(t) && t))
      }
    }), pt._evalUrl = function(t) {
      return pt.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        "throws": !0
      })
    }, pt.fn.extend({
      wrapAll: function(t) {
        if (pt.isFunction(t)) return this.each(function(e) {
          pt(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
          var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
            return t
          }).append(this)
        }
        return this
      },
      wrapInner: function(t) {
        return pt.isFunction(t) ? this.each(function(e) {
          pt(this).wrapInner(t.call(this, e))
        }) : this.each(function() {
          var e = pt(this),
            n = e.contents();
          n.length ? n.wrapAll(t) : e.append(t)
        })
      },
      wrap: function(t) {
        var e = pt.isFunction(t);
        return this.each(function(n) {
          pt(this).wrapAll(e ? t.call(this, n) : t)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
        }).end()
      }
    }), pt.expr.filters.hidden = function(t) {
      return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Y(t)
    }, pt.expr.filters.visible = function(t) {
      return !pt.expr.filters.hidden(t)
    };
    var en = /%20/g,
      nn = /\[\]$/,
      on = /\r?\n/g,
      rn = /^(?:submit|button|image|reset|file)$/i,
      sn = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(t, e) {
      var n, i = [],
        o = function(t, e) {
          e = pt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
      if (e === undefined && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() {
        o(this.name, this.value)
      });
      else
        for (n in t) K(n, t[n], e, o);
      return i.join("&").replace(en, "+")
    }, pt.fn.extend({
      serialize: function() {
        return pt.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var t = pt.prop(this, "elements");
          return t ? pt.makeArray(t) : this
        }).filter(function() {
          var t = this.type;
          return this.name && !pt(this).is(":disabled") && sn.test(this.nodeName) && !rn.test(t) && (this.checked || !qt.test(t))
        }).map(function(t, e) {
          var n = pt(this).val();
          return null == n ? null : pt.isArray(n) ? pt.map(n, function(t) {
            return {
              name: e.name,
              value: t.replace(on, "\r\n")
            }
          }) : {
            name: e.name,
            value: n.replace(on, "\r\n")
          }
        }).get()
      }
    }), pt.ajaxSettings.xhr = t.ActiveXObject !== undefined ? function() {
      return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var an = 0,
      ln = {},
      un = pt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
      for (var t in ln) ln[t](undefined, !0)
    }), dt.cors = !!un && "withCredentials" in un, un = dt.ajax = !!un, un && pt.ajaxTransport(function(e) {
      if (!e.crossDomain || dt.cors) {
        var n;
        return {
          send: function(i, o) {
            var r, s = e.xhr(),
              a = ++an;
            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
              for (r in e.xhrFields) s[r] = e.xhrFields[r];
            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
            for (r in i) i[r] !== undefined && s.setRequestHeader(r, i[r] + "");
            s.send(e.hasContent && e.data || null), n = function(t, i) {
              var r, l, u;
              if (n && (i || 4 === s.readyState))
                if (delete ln[a], n = undefined, s.onreadystatechange = pt.noop, i) 4 !== s.readyState && s.abort();
                else {
                  u = {}, r = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                  try {
                    l = s.statusText
                  } catch (t) {
                    l = ""
                  }
                  r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                }
              u && o(r, l, u, s.getAllResponseHeaders())
            }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = ln[a] = n : n()
          },
          abort: function() {
            n && n(undefined, !0)
          }
        }
      }
    }), pt.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(t) {
          return pt.globalEval(t), t
        }
      }
    }), pt.ajaxPrefilter("script", function(t) {
      t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), pt.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
        var e, n = it.head || pt("head")[0] || it.documentElement;
        return {
          send: function(i, o) {
            e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
              (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
            }, n.insertBefore(e, n.firstChild)
          },
          abort: function() {
            e && e.onload(undefined, !0)
          }
        }
      }
    });
    var cn = [],
      dn = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var t = cn.pop() || pt.expando + "_" + _e++;
        return this[t] = !0, t
      }
    }), pt.ajaxPrefilter("json jsonp", function(e, n, i) {
      var o, r, s, a = !1 !== e.jsonp && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(dn, "$1" + o) : !1 !== e.jsonp && (e.url += (Me.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
        return s || pt.error(o + " was not called"), s[0]
      }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
        s = arguments
      }, i.always(function() {
        r === undefined ? pt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, cn.push(o)), s && pt.isFunction(r) && r(s[0]), s = r = undefined
      }), "script"
    }), pt.parseHTML = function(t, e, n) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && (n = e, e = !1), e = e || it;
      var i = Tt.exec(t),
        o = !n && [];
      return i ? [e.createElement(i[1])] : (i = v([t], e, o), o && o.length && pt(o).remove(), pt.merge([], i.childNodes))
    };
    var fn = pt.fn.load;
    pt.fn.load = function(t, e, n) {
      if ("string" != typeof t && fn) return fn.apply(this, arguments);
      var i, o, r, s = this,
        a = t.indexOf(" ");
      return a > -1 && (i = pt.trim(t.slice(a, t.length)), t = t.slice(0, a)), pt.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (o = "POST"), s.length > 0 && pt.ajax({
        url: t,
        type: o || "GET",
        dataType: "html",
        data: e
      }).done(function(t) {
        r = arguments, s.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t)
      }).always(n && function(t, e) {
        s.each(function() {
          n.apply(this, r || [t.responseText, e, t])
        })
      }), this
    }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
      pt.fn[e] = function(t) {
        return this.on(e, t)
      }
    }), pt.expr.filters.animated = function(t) {
      return pt.grep(pt.timers, function(e) {
        return t === e.elem
      }).length
    }, pt.offset = {
      setOffset: function(t, e, n) {
        var i, o, r, s, a, l, u, c = pt.css(t, "position"),
          d = pt(t),
          f = {};
        "static" === c && (t.style.position = "relative"), a = d.offset(), r = pt.css(t, "top"), l = pt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && pt.inArray("auto", [r, l]) > -1, u ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + o), "using" in e ? e.using.call(t, f) : d.css(f)
      }
    }, pt.fn.extend({
      offset: function(t) {
        if (arguments.length) return t === undefined ? this : this.each(function(e) {
          pt.offset.setOffset(this, t, e)
        });
        var e, n, i = {
            top: 0,
            left: 0
          },
          o = this[0],
          r = o && o.ownerDocument;
        if (r) return e = r.documentElement, pt.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = et(r), {
          top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
          left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : i
      },
      position: function() {
        if (this[0]) {
          var t, e, n = {
              top: 0,
              left: 0
            },
            i = this[0];
          return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n.top += pt.css(t[0], "borderTopWidth", !0), n.left += pt.css(t[0], "borderLeftWidth", !0)), {
            top: e.top - n.top - pt.css(i, "marginTop", !0),
            left: e.left - n.left - pt.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
          return t || fe
        })
      }
    }), pt.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(t, e) {
      var n = /Y/.test(e);
      pt.fn[t] = function(i) {
        return Ft(this, function(t, i, o) {
          var r = et(t);
          if (o === undefined) return r ? e in r ? r[e] : r.document.documentElement[i] : t[i];
          r ? r.scrollTo(n ? pt(r).scrollLeft() : o, n ? o : pt(r).scrollTop()) : t[i] = o
        }, t, i, arguments.length, null)
      }
    }), pt.each(["top", "left"], function(t, e) {
      pt.cssHooks[e] = j(dt.pixelPosition, function(t, n) {
        if (n) return n = he(t, e), ce.test(n) ? pt(t).position()[e] + "px" : n
      })
    }), pt.each({
      Height: "height",
      Width: "width"
    }, function(t, e) {
      pt.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function(n, i) {
        pt.fn[i] = function(i, o) {
          var r = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
          return Ft(this, function(e, n, i) {
            var o;
            return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : i === undefined ? pt.css(e, n, s) : pt.style(e, n, i, s)
          }, e, r ? i : undefined, r, null)
        }
      })
    }), pt.fn.extend({
      bind: function(t, e, n) {
        return this.on(t, null, e, n)
      },
      unbind: function(t, e) {
        return this.off(t, null, e)
      },
      delegate: function(t, e, n, i) {
        return this.on(e, t, n, i)
      },
      undelegate: function(t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
    }), pt.fn.size = function() {
      return this.length
    }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return pt
    });
    var pn = t.jQuery,
      hn = t.$;
    return pt.noConflict = function(e) {
      return t.$ === pt && (t.$ = hn), e && t.jQuery === pt && (t.jQuery = pn),
        pt
    }, e || (t.jQuery = t.$ = pt), pt
  }), function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
      linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
      buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
      inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
      formSubmitSelector: "form",
      formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
      disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
      enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
      requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
      fileInputSelector: "input[name][type=file]:not([disabled])",
      linkDisableSelector: "a[data-disable-with], a[data-disable]",
      buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
      csrfToken: function() {
        return t("meta[name=csrf-token]").attr("content")
      },
      csrfParam: function() {
        return t("meta[name=csrf-param]").attr("content")
      },
      CSRFProtection: function(t) {
        var e = n.csrfToken();
        e && t.setRequestHeader("X-CSRF-Token", e)
      },
      refreshCSRFTokens: function() {
        t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
      },
      fire: function(e, n, i) {
        var o = t.Event(n);
        return e.trigger(o, i), !1 !== o.result
      },
      confirm: function(t) {
        return confirm(t)
      },
      ajax: function(e) {
        return t.ajax(e)
      },
      href: function(t) {
        return t[0].href
      },
      isRemote: function(t) {
        return t.data("remote") !== e && !1 !== t.data("remote")
      },
      handleRemote: function(i) {
        var o, r, s, a, l, u;
        if (n.fire(i, "ajax:before")) {
          if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
            o = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), s = t(i[0]).serializeArray();
            var c = i.data("ujs:submit-button");
            c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
          } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), s = i.data("params") || null);
          return u = {
            type: o || "GET",
            data: s,
            dataType: l,
            beforeSend: function(t, o) {
              if (o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), !n.fire(i, "ajax:beforeSend", [t, o])) return !1;
              i.trigger("ajax:send", t)
            },
            success: function(t, e, n) {
              i.trigger("ajax:success", [t, e, n])
            },
            complete: function(t, e) {
              i.trigger("ajax:complete", [t, e])
            },
            error: function(t, e, n) {
              i.trigger("ajax:error", [t, e, n])
            },
            crossDomain: n.isCrossDomain(r)
          }, a && (u.xhrFields = {
            withCredentials: a
          }), r && (u.url = r), n.ajax(u)
        }
        return !1
      },
      isCrossDomain: function(t) {
        var e = document.createElement("a");
        e.href = location.href;
        var n = document.createElement("a");
        try {
          return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
        } catch (t) {
          return !0
        }
      },
      handleMethod: function(i) {
        var o = n.href(i),
          r = i.data("method"),
          s = i.attr("target"),
          a = n.csrfToken(),
          l = n.csrfParam(),
          u = t('<form method="post" action="' + o + '"></form>'),
          c = '<input name="_method" value="' + r + '" type="hidden" />';
        l === e || a === e || n.isCrossDomain(o) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
      },
      formElements: function(e, n) {
        return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
      },
      disableFormElements: function(e) {
        n.formElements(e, n.disableSelector).each(function() {
          n.disableFormElement(t(this))
        })
      },
      disableFormElement: function(t) {
        var n, i;
        n = t.is("button") ? "html" : "val", i = t.data("disable-with"), i !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
      },
      enableFormElements: function(e) {
        n.formElements(e, n.enableSelector).each(function() {
          n.enableFormElement(t(this))
        })
      },
      enableFormElement: function(t) {
        var n = t.is("button") ? "html" : "val";
        t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
      },
      allowAction: function(t) {
        var e, i = t.data("confirm"),
          o = !1;
        if (!i) return !0;
        if (n.fire(t, "confirm")) {
          try {
            o = n.confirm(i)
          } catch (t) {
            (console.error || console.log).call(console, t.stack || t)
          }
          e = n.fire(t, "confirm:complete", [o])
        }
        return o && e
      },
      blankInputs: function(e, n, i) {
        var o, r, s, a, l = t(),
          u = n || "input,textarea",
          c = e.find(u),
          d = {};
        return c.each(function() {
          o = t(this), o.is("input[type=radio]") ? (a = o.attr("name"), d[a] || (0 === e.find('input[type=radio]:checked[name="' + a + '"]').length && (s = e.find('input[type=radio][name="' + a + '"]'), l = l.add(s)), d[a] = a)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val()) === i && (l = l.add(o))
        }), !!l.length && l
      },
      nonBlankInputs: function(t, e) {
        return n.blankInputs(t, e, !0)
      },
      stopEverything: function(e) {
        return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
      },
      disableElement: function(t) {
        var i = t.data("disable-with");
        i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)), t.bind("click.railsDisable", function(t) {
          return n.stopEverything(t)
        }), t.data("ujs:disabled", !0)
      },
      enableElement: function(t) {
        t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
      }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
      t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
      t(t.rails.enableSelector).each(function() {
        var e = t(this);
        e.data("ujs:disabled") && t.rails.enableFormElement(e)
      }), t(t.rails.linkDisableSelector).each(function() {
        var e = t(this);
        e.data("ujs:disabled") && t.rails.enableElement(e)
      })
    }), i.on("ajax:complete", n.linkDisableSelector, function() {
      n.enableElement(t(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function() {
      n.enableFormElement(t(this))
    }), i.on("click.rails", n.linkClickSelector, function(e) {
      var i = t(this),
        o = i.data("method"),
        r = i.data("params"),
        s = e.metaKey || e.ctrlKey;
      if (!n.allowAction(i)) return n.stopEverything(e);
      if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
        if (s && (!o || "GET" === o) && !r) return !0;
        var a = n.handleRemote(i);
        return !1 === a ? n.enableElement(i) : a.fail(function() {
          n.enableElement(i)
        }), !1
      }
      return o ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(e) {
      var i = t(this);
      if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(e);
      i.is(n.buttonDisableSelector) && n.disableFormElement(i);
      var o = n.handleRemote(i);
      return !1 === o ? n.enableFormElement(i) : o.fail(function() {
        n.enableFormElement(i)
      }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(e) {
      var i = t(this);
      return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.on("submit.rails", n.formSubmitSelector, function(i) {
      var o, r, s = t(this),
        a = n.isRemote(s);
      if (!n.allowAction(s)) return n.stopEverything(i);
      if (s.attr("novalidate") === e)
        if (s.data("ujs:formnovalidate-button") === e) {
          if ((o = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [o])) return n.stopEverything(i)
        } else s.data("ujs:formnovalidate-button", e);
      if (a) {
        if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
          setTimeout(function() {
            n.disableFormElements(s)
          }, 13);
          var l = n.fire(s, "ajax:aborted:file", [r]);
          return l || setTimeout(function() {
            n.enableFormElements(s)
          }, 13), l
        }
        return n.handleRemote(s), !1
      }
      setTimeout(function() {
        n.disableFormElements(s)
      }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(e) {
      var i = t(this);
      if (!n.allowAction(i)) return n.stopEverything(e);
      var o = i.attr("name"),
        r = o ? {
          name: o,
          value: i.val()
        } : null,
        s = i.closest("form");
      0 === s.length && (s = t("#" + i.attr("form"))), s.data("ujs:submit-button", r), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(e) {
      this === e.target && n.disableFormElements(t(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
      this === e.target && n.enableFormElements(t(this))
    }), t(function() {
      n.refreshCSRFTokens()
    }))
  }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var n in e)
      if (t.style[n] !== undefined) return {
        end: e[n]
      };
    return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
    var n = !1,
      i = this;
    t(this).one("bsTransitionEnd", function() {
      n = !0
    });
    var o = function() {
      n || t(i).trigger(t.support.transition.end)
    };
    return setTimeout(o, e), this
  }, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.alert");
      o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
    })
  }
  var n = '[data-dismiss="alert"]',
    i = function(e) {
      t(e).on("click", n, this.close)
    };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
    function n() {
      s.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
      r = o.attr("data-target");
    r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
    var s = t("#" === r ? [] : r);
    e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
  };
  var o = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
    return t.fn.alert = o, this
  }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.button"),
        r = "object" == typeof e && e;
      o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
    })
  }
  var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
  };
  n.VERSION = "3.3.7", n.DEFAULTS = {
    loadingText: "loading..."
  }, n.prototype.setState = function(e) {
    var n = "disabled",
      i = this.$element,
      o = i.is("input") ? "val" : "html",
      r = i.data();
    e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
      i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
    }, this), 0)
  }, n.prototype.toggle = function() {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var n = this.$element.find("input");
      "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var i = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
    return t.fn.button = i, this
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    var i = t(n.target).closest(".btn");
    e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
  })
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.carousel"),
        r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
        s = "string" == typeof e ? e : r.slide;
      o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
    })
  }
  var n = function(e, n) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, n.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, n.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, n.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, n.prototype.getItemForDirection = function(t, e) {
    var n = this.getItemIndex(e);
    if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
    var i = "prev" == t ? -1 : 1,
      o = (n + i) % this.$items.length;
    return this.$items.eq(o)
  }, n.prototype.to = function(t) {
    var e = this,
      n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      e.to(t)
    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
  }, n.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, n.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  }, n.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  }, n.prototype.slide = function(e, i) {
    var o = this.$element.find(".item.active"),
      r = i || this.getItemForDirection(e, o),
      s = this.interval,
      a = "next" == e ? "left" : "right",
      l = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var u = r[0],
      c = t.Event("slide.bs.carousel", {
        relatedTarget: u,
        direction: a
      });
    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
      if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var d = t(this.$indicators.children()[this.getItemIndex(r)]);
        d && d.addClass("active")
      }
      var f = t.Event("slid.bs.carousel", {
        relatedTarget: u,
        direction: a
      });
      return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
        r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(f)
        }, 0)
      }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
    }
  };
  var i = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = i, this
  };
  var o = function(n) {
    var i, o = t(this),
      r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
    if (r.hasClass("carousel")) {
      var s = t.extend({}, r.data(), o.data()),
        a = o.attr("data-slide-to");
      a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
      var n = t(this);
      e.call(n, n.data())
    })
  })
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
    return t(i)
  }

  function n(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.collapse"),
        r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
      !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
    })
  }
  var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
    toggle: !0
  }, i.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
  }, i.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
        var r = t.Event("show.bs.collapse");
        if (this.$element.trigger(r), !r.isDefaultPrevented()) {
          o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
          var s = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var a = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!t.support.transition) return a.call(this);
          var l = t.camelCase(["scroll", s].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
        }
      }
    }
  }, i.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var n = this.dimension();
        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var o = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        if (!t.support.transition) return o.call(this);
        this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
      }
    }
  }, i.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, i.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
      var o = t(i);
      this.addAriaAndCollapsedClass(e(o), o)
    }, this)).end()
  }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
    var n = t.hasClass("in");
    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
  };
  var o = t.fn.collapse;
  t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = o, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
    var o = t(this);
    o.attr("data-target") || i.preventDefault();
    var r = e(o),
      s = r.data("bs.collapse"),
      a = s ? "toggle" : o.data();
    n.call(r, a)
  })
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    var n = e.attr("data-target");
    n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && t(n);
    return i && i.length ? i : e.parent()
  }

  function n(n) {
    n && 3 === n.which || (t(o).remove(), t(r).each(function() {
      var i = t(this),
        o = e(i),
        r = {
          relatedTarget: this
        };
      o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
    }))
  }

  function i(e) {
    return this.each(function() {
      var n = t(this),
        i = n.data("bs.dropdown");
      i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
    })
  }
  var o = ".dropdown-backdrop",
    r = '[data-toggle="dropdown"]',
    s = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
  s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
    var o = t(this);
    if (!o.is(".disabled, :disabled")) {
      var r = e(o),
        s = r.hasClass("open");
      if (n(), !s) {
        "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
        var a = {
          relatedTarget: this
        };
        if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
        o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
      }
      return !1
    }
  }, s.prototype.keydown = function(n) {
    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
      var i = t(this);
      if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
        var o = e(i),
          s = o.hasClass("open");
        if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
        var a = " li:not(.disabled):visible a",
          l = o.find(".dropdown-menu" + a);
        if (l.length) {
          var u = l.index(n.target);
          38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
        }
      }
    }
  };
  var a = t.fn.dropdown;
  t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = a, this
  }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
  "use strict";

  function e(e, i) {
    return this.each(function() {
      var o = t(this),
        r = o.data("bs.modal"),
        s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
      r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
    })
  }
  var n = function(e, n) {
    this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, n.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
  }, n.prototype.show = function(e) {
    var i = this,
      o = t.Event("show.bs.modal", {
        relatedTarget: e
      });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      i.$element.one("mouseup.dismiss.bs.modal", function(e) {
        t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var o = t.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
      var r = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      o ? i.$dialog.one("bsTransitionEnd", function() {
        i.$element.trigger("focus").trigger(r)
      }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
    }))
  }, n.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
  }, n.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, n.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, n.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
  }, n.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
  }, n.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, n.prototype.backdrop = function(e) {
    var i = this,
      o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var r = t.support.transition && o;
      if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
          if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
          t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
        }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var s = function() {
        i.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
    } else e && e()
  }, n.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, n.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
  }, n.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, n.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, n.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, n.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, n.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var i = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
    return t.fn.modal = i, this
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
    var i = t(this),
      o = i.attr("href"),
      r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
      s = r.data("bs.modal") ? "toggle" : t.extend({
        remote: !/#/.test(o) && o
      }, r.data(), i.data());
    i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
      t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
        i.is(":visible") && i.trigger("focus")
      })
    }), e.call(r, s, this)
  })
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.tooltip"),
        r = "object" == typeof e && e;
      !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
    })
  }
  var n = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, n.prototype.init = function(e, n, i) {
    if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
      var s = o[r];
      if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
      else if ("manual" != s) {
        var a = "hover" == s ? "mouseenter" : "focusin",
          l = "hover" == s ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, n.prototype.getDefaults = function() {
    return n.DEFAULTS
  }, n.prototype.getOptions = function(e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e
  }, n.prototype.getDelegateOptions = function() {
    var e = {},
      n = this.getDefaults();
    return this._options && t.each(this._options, function(t, i) {
      n[t] != i && (e[t] = i)
    }), e
  }, n.prototype.enter = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
      "in" == n.hoverState && n.show()
    }, n.options.delay.show)) : n.show())
  }, n.prototype.isInStateTrue = function() {
    for (var t in this.inState)
      if (this.inState[t]) return !0;
    return !1
  }, n.prototype.leave = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
      if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
      n.timeout = setTimeout(function() {
        "out" == n.hoverState && n.hide()
      }, n.options.delay.hide)
    }
  }, n.prototype.show = function() {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !i) return;
      var o = this,
        r = this.tip(),
        s = this.getUID(this.type);
      this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
      var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        u = l.test(a);
      u && (a = a.replace(l, "") || "top"), r.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var c = this.getPosition(),
        d = r[0].offsetWidth,
        f = r[0].offsetHeight;
      if (u) {
        var p = a,
          h = this.getPosition(this.$viewport);
        a = "bottom" == a && c.bottom + f > h.bottom ? "top" : "top" == a && c.top - f < h.top ? "bottom" : "right" == a && c.right + d > h.width ? "left" : "left" == a && c.left - d < h.left ? "right" : a, r.removeClass(p).addClass(a)
      }
      var m = this.getCalculatedOffset(a, c, d, f);
      this.applyPlacement(m, a);
      var g = function() {
        var t = o.hoverState;
        o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
      };
      t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
    }
  }, n.prototype.applyPlacement = function(e, n) {
    var i = this.tip(),
      o = i[0].offsetWidth,
      r = i[0].offsetHeight,
      s = parseInt(i.css("margin-top"), 10),
      a = parseInt(i.css("margin-left"), 10);
    isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
      using: function(t) {
        i.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        })
      }
    }, e), 0), i.addClass("in");
    var l = i[0].offsetWidth,
      u = i[0].offsetHeight;
    "top" == n && u != r && (e.top = e.top + r - u);
    var c = this.getViewportAdjustedDelta(n, e, l, u);
    c.left ? e.left += c.left : e.top += c.top;
    var d = /top|bottom/.test(n),
      f = d ? 2 * c.left - o + l : 2 * c.top - r + u,
      p = d ? "offsetWidth" : "offsetHeight";
    i.offset(e), this.replaceArrow(f, i[0][p], d)
  }, n.prototype.replaceArrow = function(t, e, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
  }, n.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, n.prototype.hide = function(e) {
    function i() {
      "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
    }
    var o = this,
      r = t(this.$tip),
      s = t.Event("hide.bs." + this.type);
    if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
  }, n.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, n.prototype.hasContent = function() {
    return this.getTitle()
  }, n.prototype.getPosition = function(e) {
    e = e || this.$element;
    var n = e[0],
      i = "BODY" == n.tagName,
      o = n.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
      width: o.right - o.left,
      height: o.bottom - o.top
    }));
    var r = window.SVGElement && n instanceof window.SVGElement,
      s = i ? {
        top: 0,
        left: 0
      } : r ? null : e.offset(),
      a = {
        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      },
      l = i ? {
        width: t(window).width(),
        height: t(window).height()
      } : null;
    return t.extend({}, o, a, l, s)
  }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - n / 2
    } : "top" == t ? {
      top: e.top - i,
      left: e.left + e.width / 2 - n / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - i / 2,
      left: e.left - n
    } : {
      top: e.top + e.height / 2 - i / 2,
      left: e.left + e.width
    }
  }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
    var o = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return o;
    var r = this.options.viewport && this.options.viewport.padding || 0,
      s = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var a = e.top - r - s.scroll,
        l = e.top + r - s.scroll + i;
      a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
    } else {
      var u = e.left - r,
        c = e.left + r + n;
      u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
    }
    return o
  }, n.prototype.getTitle = function() {
    var t = this.$element,
      e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
  }, n.prototype.getUID = function(t) {
    do {
      t += ~~(1e6 * Math.random())
    } while (document.getElementById(t));
    return t
  }, n.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, n.prototype.enable = function() {
    this.enabled = !0
  }, n.prototype.disable = function() {
    this.enabled = !1
  }, n.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, n.prototype.toggle = function(e) {
    var n = this;
    e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
  }, n.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
  };
  var i = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = i, this
  }
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.popover"),
        r = "object" == typeof e && e;
      !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
    })
  }
  var n = function(t, e) {
    this.init("popover", t, e)
  };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
    return n.DEFAULTS
  }, n.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle(),
      n = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, n.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, n.prototype.getContent = function() {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var i = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
    return t.fn.popover = i, this
  }
}(jQuery),
function(t) {
  "use strict";

  function e(n, i) {
    this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
  }

  function n(n) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.scrollspy"),
        r = "object" == typeof n && n;
      o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
    })
  }
  e.VERSION = "3.3.7", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, e.prototype.refresh = function() {
    var e = this,
      n = "offset",
      i = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var e = t(this),
        o = e.data("target") || e.attr("href"),
        r = /^#./.test(o) && t(o);
      return r && r.length && r.is(":visible") && [
        [r[n]().top + i, o]
      ] || null
    }).sort(function(t, e) {
      return t[0] - e[0]
    }).each(function() {
      e.offsets.push(this[0]), e.targets.push(this[1])
    })
  }, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      n = this.getScrollHeight(),
      i = this.options.offset + n - this.$scrollElement.height(),
      o = this.offsets,
      r = this.targets,
      s = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
    if (s && e < o[0]) return this.activeTarget = null, this.clear();
    for (t = o.length; t--;) s != r[t] && e >= o[t] && (o[t + 1] === undefined || e < o[t + 1]) && this.activate(r[t])
  }, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      i = t(n).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
  }, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var i = t.fn.scrollspy;
  t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = i, this
  }, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
      var e = t(this);
      n.call(e, e.data())
    })
  })
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.tab");
      o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
    })
  }
  var n = function(e) {
    this.element = t(e)
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
    var e = this.element,
      n = e.closest("ul:not(.dropdown-menu)"),
      i = e.data("target");
    if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var o = n.find(".active:last a"),
        r = t.Event("hide.bs.tab", {
          relatedTarget: e[0]
        }),
        s = t.Event("show.bs.tab", {
          relatedTarget: o[0]
        });
      if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
        var a = t(i);
        this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
          o.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: o[0]
          })
        })
      }
    }
  }, n.prototype.activate = function(e, i, o) {
    function r() {
      s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var s = i.find("> .active"),
      a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
    s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
  };
  var i = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
    return t.fn.tab = i, this
  };
  var o = function(n) {
    n.preventDefault(), e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.affix"),
        r = "object" == typeof e && e;
      o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
    })
  }
  var n = function(e, i) {
    this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
    offset: 0,
    target: window
  }, n.prototype.getState = function(t, e, n, i) {
    var o = this.$target.scrollTop(),
      r = this.$element.offset(),
      s = this.$target.height();
    if (null != n && "top" == this.affixed) return o < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
    var a = null == this.affixed,
      l = a ? o : r.top,
      u = a ? s : e;
    return null != n && o <= n ? "top" : null != i && l + u >= t - i && "bottom"
  }, n.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(n.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, n.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, n.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var e = this.$element.height(),
        i = this.options.offset,
        o = i.top,
        r = i.bottom,
        s = Math.max(t(document).height(), t(document.body).height());
      "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
      var a = this.getState(s, e, o, r);
      if (this.affixed != a) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (a ? "-" + a : ""),
          u = t.Event(l + ".bs.affix");
        if (this.$element.trigger(u), u.isDefaultPrevented()) return;
        this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == a && this.$element.offset({
        top: s - e - r
      })
    }
  };
  var i = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
    return t.fn.affix = i, this
  }, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
      var n = t(this),
        i = n.data();
      i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
    })
  })
}(jQuery),
function() {}.call(this),
  function() {}.call(this),
  function() {}.call(this),
  function() {}.call(this),
  function() {}.call(this),
  function() {}.call(this),
  function() {
    (function() {
      (function() {
        var e = [].slice;
        this.ActionCable = {
          INTERNAL: {
            message_types: {
              welcome: "welcome",
              ping: "ping",
              confirmation: "confirm_subscription",
              rejection: "reject_subscription"
            },
            default_mount_path: "/cable",
            protocols: ["actioncable-v1-json", "actioncable-unsupported"]
          },
          createConsumer: function(e) {
            var n;
            return null == e && (e = null != (n = this.getConfig("url")) ? n : this.INTERNAL.default_mount_path), new t.Consumer(this.createWebSocketURL(e))
          },
          getConfig: function(t) {
            var e;
            return e = document.head.querySelector("meta[name='action-cable-" + t + "']"), null != e ? e.getAttribute("content") : void 0
          },
          createWebSocketURL: function(t) {
            var e;
            return t && !/^wss?:/i.test(t) ? (e = document.createElement("a"), e.href = t, e.href = e.href, e.protocol = e.protocol.replace("http", "ws"), e.href) : t
          },
          startDebugging: function() {
            return this.debugging = !0
          },
          stopDebugging: function() {
            return this.debugging = null
          },
          log: function() {
            var t;
            if (t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.debugging) return t.push(Date.now()), console.log.apply(console, ["[ActionCable]"].concat(e.call(t)))
          }
        }
      }).call(this)
    }).call(this);
    var t = this.ActionCable;
    (function() {
      (function() {
        var e = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        };
        t.ConnectionMonitor = function() {
          function n(t) {
            this.connection = t, this.visibilityDidChange = e(this.visibilityDidChange, this), this.reconnectAttempts = 0
          }
          var i, o, r;
          return n.pollInterval = {
            min: 3,
            max: 30
          }, n.staleThreshold = 6, n.prototype.start = function() {
            if (!this.isRunning()) return this.startedAt = o(), delete this.stoppedAt, this.startPolling(), document.addEventListener("visibilitychange", this.visibilityDidChange), t.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms")
          }, n.prototype.stop = function() {
            if (this.isRunning()) return this.stoppedAt = o(), this.stopPolling(), document.removeEventListener("visibilitychange", this.visibilityDidChange), t.log("ConnectionMonitor stopped")
          }, n.prototype.isRunning = function() {
            return null != this.startedAt && null == this.stoppedAt
          }, n.prototype.recordPing = function() {
            return this.pingedAt = o()
          }, n.prototype.recordConnect = function() {
            return this.reconnectAttempts = 0, this.recordPing(), delete this.disconnectedAt, t.log("ConnectionMonitor recorded connect")
          }, n.prototype.recordDisconnect = function() {
            return this.disconnectedAt = o(), t.log("ConnectionMonitor recorded disconnect")
          }, n.prototype.startPolling = function() {
            return this.stopPolling(), this.poll()
          }, n.prototype.stopPolling = function() {
            return clearTimeout(this.pollTimeout)
          }, n.prototype.poll = function() {
            return this.pollTimeout = setTimeout(function(t) {
              return function() {
                return t.reconnectIfStale(), t.poll()
              }
            }(this), this.getPollInterval())
          }, n.prototype.getPollInterval = function() {
            var t, e, n, o;
            return o = this.constructor.pollInterval, n = o.min, e = o.max, t = 5 * Math.log(this.reconnectAttempts + 1), Math.round(1e3 * i(t, n, e))
          }, n.prototype.reconnectIfStale = function() {
            if (this.connectionIsStale()) return t.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + r(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"), this.reconnectAttempts++, this.disconnectedRecently() ? t.log("ConnectionMonitor skipping reopening recent disconnect") : (t.log("ConnectionMonitor reopening"), this.connection.reopen())
          }, n.prototype.connectionIsStale = function() {
            var t;
            return r(null != (t = this.pingedAt) ? t : this.startedAt) > this.constructor.staleThreshold
          }, n.prototype.disconnectedRecently = function() {
            return this.disconnectedAt && r(this.disconnectedAt) < this.constructor.staleThreshold
          }, n.prototype.visibilityDidChange = function() {
            if ("visible" === document.visibilityState) return setTimeout(function(e) {
              return function() {
                if (e.connectionIsStale() || !e.connection.isOpen()) return t.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState), e.connection.reopen()
              }
            }(this), 200)
          }, o = function() {
            return (new Date).getTime()
          }, r = function(t) {
            return (o() - t) / 1e3
          }, i = function(t, e, n) {
            return Math.max(e, Math.min(n, t))
          }, n
        }()
      }).call(this),
        function() {
          var e, n, i, o, r, s = [].slice,
            a = function(t, e) {
              return function() {
                return t.apply(e, arguments)
              }
            },
            l = [].indexOf || function(t) {
              for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t) return e;
              return -1
            };
          o = t.INTERNAL, n = o.message_types, i = o.protocols, r = 2 <= i.length ? s.call(i, 0, e = i.length - 1) : (e = 0, []), i[e++], t.Connection = function() {
            function e(e) {
              this.consumer = e, this.open = a(this.open, this), this.subscriptions = this.consumer.subscriptions, this.monitor = new t.ConnectionMonitor(this), this.disconnected = !0
            }
            return e.reopenDelay = 500, e.prototype.send = function(t) {
              return !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)), !0)
            }, e.prototype.open = function() {
              if (this.isActive()) throw t.log("Attempted to open WebSocket, but existing socket is " + this.getState()), new Error("Existing connection must be closed before opening");
              return t.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + i), null != this.webSocket && this.uninstallEventHandlers(), this.webSocket = new WebSocket(this.consumer.url, i), this.installEventHandlers(), this.monitor.start(), !0
            }, e.prototype.close = function(t) {
              var e, n;
              if (e = (null != t ? t : {
                  allowReconnect: !0
                }).allowReconnect, e || this.monitor.stop(), this.isActive()) return null != (n = this.webSocket) ? n.close() : void 0
            }, e.prototype.reopen = function() {
              var e;
              if (t.log("Reopening WebSocket, current state is " + this.getState()), !this.isActive()) return this.open();
              try {
                return this.close()
              } catch (n) {
                return e = n, t.log("Failed to reopen WebSocket", e)
              } finally {
                t.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"), setTimeout(this.open, this.constructor.reopenDelay)
              }
            }, e.prototype.getProtocol = function() {
              var t;
              return null != (t = this.webSocket) ? t.protocol : void 0
            }, e.prototype.isOpen = function() {
              return this.isState("open")
            }, e.prototype.isActive = function() {
              return this.isState("open", "connecting")
            }, e.prototype.isProtocolSupported = function() {
              var t;
              return t = this.getProtocol(), l.call(r, t) >= 0
            }, e.prototype.isState = function() {
              var t, e;
              return e = 1 <= arguments.length ? s.call(arguments, 0) : [], t = this.getState(), l.call(e, t) >= 0
            }, e.prototype.getState = function() {
              var t, e;
              for (e in WebSocket)
                if (WebSocket[e] === (null != (t = this.webSocket) ? t.readyState : void 0)) return e.toLowerCase();
              return null
            }, e.prototype.installEventHandlers = function() {
              var t, e;
              for (t in this.events) e = this.events[t].bind(this), this.webSocket["on" + t] = e
            }, e.prototype.uninstallEventHandlers = function() {
              var t;
              for (t in this.events) this.webSocket["on" + t] = function() {}
            }, e.prototype.events = {
              message: function(t) {
                var e, i, o, r;
                if (this.isProtocolSupported()) switch (o = JSON.parse(t.data), e = o.identifier, i = o.message, r = o.type, r) {
                  case n.welcome:
                    return this.monitor.recordConnect(), this.subscriptions.reload();
                  case n.ping:
                    return this.monitor.recordPing();
                  case n.confirmation:
                    return this.subscriptions.notify(e, "connected");
                  case n.rejection:
                    return this.subscriptions.reject(e);
                  default:
                    return this.subscriptions.notify(e, "received", i)
                }
              },
              open: function() {
                if (t.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"), this.disconnected = !1, !this.isProtocolSupported()) return t.log("Protocol is unsupported. Stopping monitor and disconnecting."), this.close({
                  allowReconnect: !1
                })
              },
              close: function() {
                if (t.log("WebSocket onclose event"), !this.disconnected) return this.disconnected = !0, this.monitor.recordDisconnect(), this.subscriptions.notifyAll("disconnected", {
                  willAttemptReconnect: this.monitor.isRunning()
                })
              },
              error: function() {
                return t.log("WebSocket onerror event")
              }
            }, e
          }()
        }.call(this),
        function() {
          var e = [].slice;
          t.Subscriptions = function() {
            function n(t) {
              this.consumer = t, this.subscriptions = []
            }
            return n.prototype.create = function(e, n) {
              var i, o, r;
              return i = e, o = "object" == typeof i ? i : {
                channel: i
              }, r = new t.Subscription(this.consumer, o, n), this.add(r)
            }, n.prototype.add = function(t) {
              return this.subscriptions.push(t), this.consumer.ensureActiveConnection(), this.notify(t, "initialized"), this.sendCommand(t, "subscribe"), t
            }, n.prototype.remove = function(t) {
              return this.forget(t), this.findAll(t.identifier).length || this.sendCommand(t, "unsubscribe"), t
            }, n.prototype.reject = function(t) {
              var e, n, i, o, r;
              for (i = this.findAll(t), o = [], e = 0, n = i.length; e < n; e++) r = i[e], this.forget(r), this.notify(r, "rejected"), o.push(r);
              return o
            }, n.prototype.forget = function(t) {
              var e;
              return this.subscriptions = function() {
                var n, i, o, r;
                for (o = this.subscriptions, r = [], n = 0, i = o.length; n < i; n++)(e = o[n]) !== t && r.push(e);
                return r
              }.call(this), t
            }, n.prototype.findAll = function(t) {
              var e, n, i, o, r;
              for (i = this.subscriptions, o = [], e = 0, n = i.length; e < n; e++) r = i[e], r.identifier === t && o.push(r);
              return o
            }, n.prototype.reload = function() {
              var t, e, n, i, o;
              for (n = this.subscriptions, i = [], t = 0, e = n.length; t < e; t++) o = n[t], i.push(this.sendCommand(o, "subscribe"));
              return i
            }, n.prototype.notifyAll = function() {
              var t, n, i, o, r, s, a;
              for (n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], r = this.subscriptions, s = [], i = 0, o = r.length; i < o; i++) a = r[i], s.push(this.notify.apply(this, [a, n].concat(e.call(t))));
              return s
            }, n.prototype.notify = function() {
              var t, n, i, o, r, s, a;
              for (s = arguments[0], n = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], a = "string" == typeof s ? this.findAll(s) : [s], r = [], i = 0, o = a.length; i < o; i++) s = a[i], r.push("function" == typeof s[n] ? s[n].apply(s, t) : void 0);
              return r
            }, n.prototype.sendCommand = function(t, e) {
              var n;
              return n = t.identifier, this.consumer.send({
                command: e,
                identifier: n
              })
            }, n
          }()
        }.call(this),
        function() {
          t.Subscription = function() {
            function t(t, n, i) {
              this.consumer = t, null == n && (n = {}), this.identifier = JSON.stringify(n), e(this, i)
            }
            var e;
            return t.prototype.perform = function(t, e) {
              return null == e && (e = {}), e.action = t, this.send(e)
            }, t.prototype.send = function(t) {
              return this.consumer.send({
                command: "message",
                identifier: this.identifier,
                data: JSON.stringify(t)
              })
            }, t.prototype.unsubscribe = function() {
              return this.consumer.subscriptions.remove(this)
            }, e = function(t, e) {
              var n, i;
              if (null != e)
                for (n in e) i = e[n], t[n] = i;
              return t
            }, t
          }()
        }.call(this),
        function() {
          t.Consumer = function() {
            function e(e) {
              this.url = e, this.subscriptions = new t.Subscriptions(this), this.connection = new t.Connection(this)
            }
            return e.prototype.send = function(t) {
              return this.connection.send(t)
            }, e.prototype.connect = function() {
              return this.connection.open()
            }, e.prototype.disconnect = function() {
              return this.connection.close({
                allowReconnect: !1
              })
            }, e.prototype.ensureActiveConnection = function() {
              if (!this.connection.isActive()) return this.connection.open()
            }, e
          }()
        }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
  }.call(this),
  function() {
    this.App || (this.App = {}), App.cable = ActionCable.createConsumer()
  }.call(this),
  function() {}.call(this),
  function() {}.call(this),
  function() {}.call(this), $(function() {
    goTop()
  });



//--
