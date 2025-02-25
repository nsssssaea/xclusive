/*!
	image-compare-viewer

	Copyright	Kyle Wetton
	License		MIT

	https://github.com/kylewetton/image-compare-viewer
*/
! function (t, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("ImageCompare", [], n) : "object" == typeof exports ? exports.ImageCompare = n() : t.ImageCompare = n()
}(window, (function () {
  return function (t) {
      var n = {};

      function e(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
              i: r,
              l: !1,
              exports: {}
          };
          return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
      }
      return e.m = t, e.c = n, e.d = function (t, n, r) {
          e.o(t, n) || Object.defineProperty(t, n, {
              enumerable: !0,
              get: r
          })
      }, e.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
          }), Object.defineProperty(t, "__esModule", {
              value: !0
          })
      }, e.t = function (t, n) {
          if (1 & n && (t = e(t)), 8 & n) return t;
          if (4 & n && "object" == typeof t && t && t.__esModule) return t;
          var r = Object.create(null);
          if (e.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: t
          }), 2 & n && "string" != typeof t)
              for (var o in t) e.d(r, o, function (n) {
                  return t[n]
              }.bind(null, o));
          return r
      }, e.n = function (t) {
          var n = t && t.__esModule ? function () {
              return t.default
          } : function () {
              return t
          };
          return e.d(n, "a", n), n
      }, e.o = function (t, n) {
          return Object.prototype.hasOwnProperty.call(t, n)
      }, e.p = "", e(e.s = 99)
  }([function (t, n, e) {
      var r = e(1),
          o = e(14),
          i = e(29),
          c = e(46),
          a = r.Symbol,
          s = o("wks");
      t.exports = function (t) {
          return s[t] || (s[t] = c && a[t] || (c ? a : i)("Symbol." + t))
      }
  }, function (t, n, e) {
      (function (n) {
          var e = function (t) {
              return t && t.Math == Math && t
          };
          t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof n && n) || Function("return this")()
      }).call(this, e(61))
  }, function (t, n) {
      t.exports = function (t) {
          try {
              return !!t()
          } catch (t) {
              return !0
          }
      }
  }, function (t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
          return e.call(t, n)
      }
  }, function (t, n, e) {
      var r = e(8),
          o = e(9),
          i = e(12);
      t.exports = r ? function (t, n, e) {
          return o.f(t, n, i(1, e))
      } : function (t, n, e) {
          return t[n] = e, t
      }
  }, function (t, n, e) {
      var r = e(1),
          o = e(23).f,
          i = e(4),
          c = e(13),
          a = e(28),
          s = e(41),
          u = e(66);
      t.exports = function (t, n) {
          var e, f, l, d, p, v = t.target,
              h = t.global,
              g = t.stat;
          if (e = h ? r : g ? r[v] || a(v, {}) : (r[v] || {}).prototype)
              for (f in n) {
                  if (d = n[f], l = t.noTargetGet ? (p = o(e, f)) && p.value : e[f], !u(h ? f : v + (g ? "." : "#") + f, t.forced) && void 0 !== l) {
                      if (typeof d == typeof l) continue;
                      s(d, l)
                  }(t.sham || l && l.sham) && i(d, "sham", !0), c(e, f, d, t)
              }
      }
  }, function (t, n) {
      t.exports = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t
      }
  }, function (t, n, e) {
      var r = e(6);
      t.exports = function (t) {
          if (!r(t)) throw TypeError(String(t) + " is not an object");
          return t
      }
  }, function (t, n, e) {
      var r = e(2);
      t.exports = !r((function () {
          return 7 != Object.defineProperty({}, "a", {
              get: function () {
                  return 7
              }
          }).a
      }))
  }, function (t, n, e) {
      var r = e(8),
          o = e(38),
          i = e(7),
          c = e(16),
          a = Object.defineProperty;
      n.f = r ? a : function (t, n, e) {
          if (i(t), n = c(n, !0), i(e), o) try {
              return a(t, n, e)
          } catch (t) {}
          if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
          return "value" in e && (t[n] = e.value), t
      }
  }, function (t, n, e) {
      var r = e(25),
          o = e(27);
      t.exports = function (t) {
          return r(o(t))
      }
  }, function (t, n, e) {
      var r = e(27);
      t.exports = function (t) {
          return Object(r(t))
      }
  }, function (t, n) {
      t.exports = function (t, n) {
          return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: n
          }
      }
  }, function (t, n, e) {
      var r = e(1),
          o = e(14),
          i = e(4),
          c = e(3),
          a = e(28),
          s = e(40),
          u = e(18),
          f = u.get,
          l = u.enforce,
          d = String(s).split("toString");
      o("inspectSource", (function (t) {
          return s.call(t)
      })), (t.exports = function (t, n, e, o) {
          var s = !!o && !!o.unsafe,
              u = !!o && !!o.enumerable,
              f = !!o && !!o.noTargetGet;
          "function" == typeof e && ("string" != typeof n || c(e, "name") || i(e, "name", n), l(e).source = d.join("string" == typeof n ? n : "")), t !== r ? (s ? !f && t[n] && (u = !0) : delete t[n], u ? t[n] = e : i(t, n, e)) : u ? t[n] = e : a(n, e)
      })(Function.prototype, "toString", (function () {
          return "function" == typeof this && f(this).source || s.call(this)
      }))
  }, function (t, n, e) {
      var r = e(17),
          o = e(62);
      (t.exports = function (t, n) {
          return o[t] || (o[t] = void 0 !== n ? n : {})
      })("versions", []).push({
          version: "3.3.2",
          mode: r ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      })
  }, function (t, n) {
      t.exports = {}
  }, function (t, n, e) {
      var r = e(6);
      t.exports = function (t, n) {
          if (!r(t)) return t;
          var e, o;
          if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
          if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
          if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
          throw TypeError("Can't convert object to primitive value")
      }
  }, function (t, n) {
      t.exports = !1
  }, function (t, n, e) {
      var r, o, i, c = e(63),
          a = e(1),
          s = e(6),
          u = e(4),
          f = e(3),
          l = e(19),
          d = e(20),
          p = a.WeakMap;
      if (c) {
          var v = new p,
              h = v.get,
              g = v.has,
              y = v.set;
          r = function (t, n) {
              return y.call(v, t, n), n
          }, o = function (t) {
              return h.call(v, t) || {}
          }, i = function (t) {
              return g.call(v, t)
          }
      } else {
          var m = l("state");
          d[m] = !0, r = function (t, n) {
              return u(t, m, n), n
          }, o = function (t) {
              return f(t, m) ? t[m] : {}
          }, i = function (t) {
              return f(t, m)
          }
      }
      t.exports = {
          set: r,
          get: o,
          has: i,
          enforce: function (t) {
              return i(t) ? o(t) : r(t, {})
          },
          getterFor: function (t) {
              return function (n) {
                  var e;
                  if (!s(n) || (e = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                  return e
              }
          }
      }
  }, function (t, n, e) {
      var r = e(14),
          o = e(29),
          i = r("keys");
      t.exports = function (t) {
          return i[t] || (i[t] = o(t))
      }
  }, function (t, n) {
      t.exports = {}
  }, function (t, n, e) {
      var r = e(31),
          o = Math.min;
      t.exports = function (t) {
          return t > 0 ? o(r(t), 9007199254740991) : 0
      }
  }, function (t, n, e) {
      var r = e(26);
      t.exports = Array.isArray || function (t) {
          return "Array" == r(t)
      }
  }, function (t, n, e) {
      var r = e(8),
          o = e(24),
          i = e(12),
          c = e(10),
          a = e(16),
          s = e(3),
          u = e(38),
          f = Object.getOwnPropertyDescriptor;
      n.f = r ? f : function (t, n) {
          if (t = c(t), n = a(n, !0), u) try {
              return f(t, n)
          } catch (t) {}
          if (s(t, n)) return i(!o.f.call(t, n), t[n])
      }
  }, function (t, n, e) {
      "use strict";
      var r = {}.propertyIsEnumerable,
          o = Object.getOwnPropertyDescriptor,
          i = o && !r.call({
              1: 2
          }, 1);
      n.f = i ? function (t) {
          var n = o(this, t);
          return !!n && n.enumerable
      } : r
  }, function (t, n, e) {
      var r = e(2),
          o = e(26),
          i = "".split;
      t.exports = r((function () {
          return !Object("z").propertyIsEnumerable(0)
      })) ? function (t) {
          return "String" == o(t) ? i.call(t, "") : Object(t)
      } : Object
  }, function (t, n) {
      var e = {}.toString;
      t.exports = function (t) {
          return e.call(t).slice(8, -1)
      }
  }, function (t, n) {
      t.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on " + t);
          return t
      }
  }, function (t, n, e) {
      var r = e(1),
          o = e(4);
      t.exports = function (t, n) {
          try {
              o(r, t, n)
          } catch (e) {
              r[t] = n
          }
          return n
      }
  }, function (t, n) {
      var e = 0,
          r = Math.random();
      t.exports = function (t) {
          return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + r).toString(36)
      }
  }, function (t, n, e) {
      var r = e(44),
          o = e(32).concat("length", "prototype");
      n.f = Object.getOwnPropertyNames || function (t) {
          return r(t, o)
      }
  }, function (t, n) {
      var e = Math.ceil,
          r = Math.floor;
      t.exports = function (t) {
          return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
      }
  }, function (t, n) {
      t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }, function (t, n) {
      n.f = Object.getOwnPropertySymbols
  }, function (t, n, e) {
      var r = e(7),
          o = e(67),
          i = e(32),
          c = e(20),
          a = e(68),
          s = e(39),
          u = e(19)("IE_PROTO"),
          f = function () {},
          l = function () {
              var t, n = s("iframe"),
                  e = i.length;
              for (n.style.display = "none", a.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; e--;) delete l.prototype[i[e]];
              return l()
          };
      t.exports = Object.create || function (t, n) {
          var e;
          return null !== t ? (f.prototype = r(t), e = new f, f.prototype = null, e[u] = t) : e = l(), void 0 === n ? e : o(e, n)
      }, c[u] = !0
  }, function (t, n, e) {
      var r = e(44),
          o = e(32);
      t.exports = Object.keys || function (t) {
          return r(t, o)
      }
  }, function (t, n, e) {
      var r = e(9).f,
          o = e(3),
          i = e(0)("toStringTag");
      t.exports = function (t, n, e) {
          t && !o(t = e ? t : t.prototype, i) && r(t, i, {
              configurable: !0,
              value: n
          })
      }
  }, function (t, n, e) {
      var r = e(49),
          o = e(25),
          i = e(11),
          c = e(21),
          a = e(50),
          s = [].push,
          u = function (t) {
              var n = 1 == t,
                  e = 2 == t,
                  u = 3 == t,
                  f = 4 == t,
                  l = 6 == t,
                  d = 5 == t || l;
              return function (p, v, h, g) {
                  for (var y, m, b = i(p), x = o(b), w = r(v, h, 3), S = c(x.length), O = 0, _ = g || a, E = n ? _(p, S) : e ? _(p, 0) : void 0; S > O; O++)
                      if ((d || O in x) && (m = w(y = x[O], O, b), t))
                          if (n) E[O] = m;
                          else if (m) switch (t) {
                              case 3:
                                  return !0;
                              case 5:
                                  return y;
                              case 6:
                                  return O;
                              case 2:
                                  s.call(E, y)
                          } else if (f) return !1;
                  return l ? -1 : u || f ? f : E
              }
          };
      t.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6)
      }
  }, function (t, n, e) {
      var r = e(8),
          o = e(2),
          i = e(39);
      t.exports = !r && !o((function () {
          return 7 != Object.defineProperty(i("div"), "a", {
              get: function () {
                  return 7
              }
          }).a
      }))
  }, function (t, n, e) {
      var r = e(1),
          o = e(6),
          i = r.document,
          c = o(i) && o(i.createElement);
      t.exports = function (t) {
          return c ? i.createElement(t) : {}
      }
  }, function (t, n, e) {
      var r = e(14);
      t.exports = r("native-function-to-string", Function.toString)
  }, function (t, n, e) {
      var r = e(3),
          o = e(64),
          i = e(23),
          c = e(9);
      t.exports = function (t, n) {
          for (var e = o(n), a = c.f, s = i.f, u = 0; u < e.length; u++) {
              var f = e[u];
              r(t, f) || a(t, f, s(n, f))
          }
      }
  }, function (t, n, e) {
      var r = e(43),
          o = e(1),
          i = function (t) {
              return "function" == typeof t ? t : void 0
          };
      t.exports = function (t, n) {
          return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][n] || o[t] && o[t][n]
      }
  }, function (t, n, e) {
      t.exports = e(1)
  }, function (t, n, e) {
      var r = e(3),
          o = e(10),
          i = e(45).indexOf,
          c = e(20);
      t.exports = function (t, n) {
          var e, a = o(t),
              s = 0,
              u = [];
          for (e in a) !r(c, e) && r(a, e) && u.push(e);
          for (; n.length > s;) r(a, e = n[s++]) && (~i(u, e) || u.push(e));
          return u
      }
  }, function (t, n, e) {
      var r = e(10),
          o = e(21),
          i = e(65),
          c = function (t) {
              return function (n, e, c) {
                  var a, s = r(n),
                      u = o(s.length),
                      f = i(c, u);
                  if (t && e != e) {
                      for (; u > f;)
                          if ((a = s[f++]) != a) return !0
                  } else
                      for (; u > f; f++)
                          if ((t || f in s) && s[f] === e) return t || f || 0;
                  return !t && -1
              }
          };
      t.exports = {
          includes: c(!0),
          indexOf: c(!1)
      }
  }, function (t, n, e) {
      var r = e(2);
      t.exports = !!Object.getOwnPropertySymbols && !r((function () {
          return !String(Symbol())
      }))
  }, function (t, n, e) {
      n.f = e(0)
  }, function (t, n, e) {
      var r = e(43),
          o = e(3),
          i = e(47),
          c = e(9).f;
      t.exports = function (t) {
          var n = r.Symbol || (r.Symbol = {});
          o(n, t) || c(n, t, {
              value: i.f(t)
          })
      }
  }, function (t, n, e) {
      var r = e(70);
      t.exports = function (t, n, e) {
          if (r(t), void 0 === n) return t;
          switch (e) {
              case 0:
                  return function () {
                      return t.call(n)
                  };
              case 1:
                  return function (e) {
                      return t.call(n, e)
                  };
              case 2:
                  return function (e, r) {
                      return t.call(n, e, r)
                  };
              case 3:
                  return function (e, r, o) {
                      return t.call(n, e, r, o)
                  }
          }
          return function () {
              return t.apply(n, arguments)
          }
      }
  }, function (t, n, e) {
      var r = e(6),
          o = e(22),
          i = e(0)("species");
      t.exports = function (t, n) {
          var e;
          return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) ? r(e) && null === (e = e[i]) && (e = void 0) : e = void 0), new(void 0 === e ? Array : e)(0 === n ? 0 : n)
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(16),
          o = e(9),
          i = e(12);
      t.exports = function (t, n, e) {
          var c = r(n);
          c in t ? o.f(t, c, i(0, e)) : t[c] = e
      }
  }, function (t, n, e) {
      var r = e(2),
          o = e(0)("species");
      t.exports = function (t) {
          return !r((function () {
              var n = [];
              return (n.constructor = {})[o] = function () {
                  return {
                      foo: 1
                  }
              }, 1 !== n[t](Boolean).foo
          }))
      }
  }, function (t, n, e) {
      var r = e(26),
          o = e(0)("toStringTag"),
          i = "Arguments" == r(function () {
              return arguments
          }());
      t.exports = function (t) {
          var n, e, c;
          return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
              try {
                  return t[n]
              } catch (t) {}
          }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(2);
      t.exports = function (t, n) {
          var e = [][t];
          return !e || !r((function () {
              e.call(null, n || function () {
                  throw 1
              }, 1)
          }))
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(10),
          o = e(82),
          i = e(15),
          c = e(18),
          a = e(56),
          s = c.set,
          u = c.getterFor("Array Iterator");
      t.exports = a(Array, "Array", (function (t, n) {
          s(this, {
              type: "Array Iterator",
              target: r(t),
              index: 0,
              kind: n
          })
      }), (function () {
          var t = u(this),
              n = t.target,
              e = t.kind,
              r = t.index++;
          return !n || r >= n.length ? (t.target = void 0, {
              value: void 0,
              done: !0
          }) : "keys" == e ? {
              value: r,
              done: !1
          } : "values" == e ? {
              value: n[r],
              done: !1
          } : {
              value: [r, n[r]],
              done: !1
          }
      }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
  }, function (t, n, e) {
      "use strict";
      var r = e(5),
          o = e(83),
          i = e(58),
          c = e(85),
          a = e(36),
          s = e(4),
          u = e(13),
          f = e(0),
          l = e(17),
          d = e(15),
          p = e(57),
          v = p.IteratorPrototype,
          h = p.BUGGY_SAFARI_ITERATORS,
          g = f("iterator"),
          y = function () {
              return this
          };
      t.exports = function (t, n, e, f, p, m, b) {
          o(e, n, f);
          var x, w, S, O = function (t) {
                  if (t === p && A) return A;
                  if (!h && t in L) return L[t];
                  switch (t) {
                      case "keys":
                      case "values":
                      case "entries":
                          return function () {
                              return new e(this, t)
                          }
                  }
                  return function () {
                      return new e(this)
                  }
              },
              _ = n + " Iterator",
              E = !1,
              L = t.prototype,
              j = L[g] || L["@@iterator"] || p && L[p],
              A = !h && j || O(p),
              C = "Array" == n && L.entries || j;
          if (C && (x = i(C.call(new t)), v !== Object.prototype && x.next && (l || i(x) === v || (c ? c(x, v) : "function" != typeof x[g] && s(x, g, y)), a(x, _, !0, !0), l && (d[_] = y))), "values" == p && j && "values" !== j.name && (E = !0, A = function () {
              return j.call(this)
          }), l && !b || L[g] === A || s(L, g, A), d[n] = A, p)
              if (w = {
                  values: O("values"),
                  keys: m ? A : O("keys"),
                  entries: O("entries")
              }, b)
                  for (S in w) !h && !E && S in L || u(L, S, w[S]);
              else r({
                  target: n,
                  proto: !0,
                  forced: h || E
              }, w);
          return w
      }
  }, function (t, n, e) {
      "use strict";
      var r, o, i, c = e(58),
          a = e(4),
          s = e(3),
          u = e(0),
          f = e(17),
          l = u("iterator"),
          d = !1;
      [].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (r = o) : d = !0), null == r && (r = {}), f || s(r, l) || a(r, l, (function () {
          return this
      })), t.exports = {
          IteratorPrototype: r,
          BUGGY_SAFARI_ITERATORS: d
      }
  }, function (t, n, e) {
      var r = e(3),
          o = e(11),
          i = e(19),
          c = e(84),
          a = i("IE_PROTO"),
          s = Object.prototype;
      t.exports = c ? Object.getPrototypeOf : function (t) {
          return t = o(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
      }
  }, function (t, n) {
      t.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(5),
          o = e(1),
          i = e(17),
          c = e(8),
          a = e(46),
          s = e(2),
          u = e(3),
          f = e(22),
          l = e(6),
          d = e(7),
          p = e(11),
          v = e(10),
          h = e(16),
          g = e(12),
          y = e(34),
          m = e(35),
          b = e(30),
          x = e(69),
          w = e(33),
          S = e(23),
          O = e(9),
          _ = e(24),
          E = e(4),
          L = e(13),
          j = e(14),
          A = e(19),
          C = e(20),
          T = e(29),
          P = e(0),
          M = e(47),
          k = e(48),
          I = e(36),
          F = e(18),
          R = e(37).forEach,
          B = A("hidden"),
          N = P("toPrimitive"),
          G = F.set,
          W = F.getterFor("Symbol"),
          D = Object.prototype,
          H = o.Symbol,
          Y = o.JSON,
          V = Y && Y.stringify,
          z = S.f,
          q = O.f,
          X = x.f,
          U = _.f,
          J = j("symbols"),
          $ = j("op-symbols"),
          K = j("string-to-symbol-registry"),
          Q = j("symbol-to-string-registry"),
          Z = j("wks"),
          tt = o.QObject,
          nt = !tt || !tt.prototype || !tt.prototype.findChild,
          et = c && s((function () {
              return 7 != y(q({}, "a", {
                  get: function () {
                      return q(this, "a", {
                          value: 7
                      }).a
                  }
              })).a
          })) ? function (t, n, e) {
              var r = z(D, n);
              r && delete D[n], q(t, n, e), r && t !== D && q(D, n, r)
          } : q,
          rt = function (t, n) {
              var e = J[t] = y(H.prototype);
              return G(e, {
                  type: "Symbol",
                  tag: t,
                  description: n
              }), c || (e.description = n), e
          },
          ot = a && "symbol" == typeof H.iterator ? function (t) {
              return "symbol" == typeof t
          } : function (t) {
              return Object(t) instanceof H
          },
          it = function (t, n, e) {
              t === D && it($, n, e), d(t);
              var r = h(n, !0);
              return d(e), u(J, r) ? (e.enumerable ? (u(t, B) && t[B][r] && (t[B][r] = !1), e = y(e, {
                  enumerable: g(0, !1)
              })) : (u(t, B) || q(t, B, g(1, {})), t[B][r] = !0), et(t, r, e)) : q(t, r, e)
          },
          ct = function (t, n) {
              d(t);
              var e = v(n),
                  r = m(e).concat(ft(e));
              return R(r, (function (n) {
                  c && !at.call(e, n) || it(t, n, e[n])
              })), t
          },
          at = function (t) {
              var n = h(t, !0),
                  e = U.call(this, n);
              return !(this === D && u(J, n) && !u($, n)) && (!(e || !u(this, n) || !u(J, n) || u(this, B) && this[B][n]) || e)
          },
          st = function (t, n) {
              var e = v(t),
                  r = h(n, !0);
              if (e !== D || !u(J, r) || u($, r)) {
                  var o = z(e, r);
                  return !o || !u(J, r) || u(e, B) && e[B][r] || (o.enumerable = !0), o
              }
          },
          ut = function (t) {
              var n = X(v(t)),
                  e = [];
              return R(n, (function (t) {
                  u(J, t) || u(C, t) || e.push(t)
              })), e
          },
          ft = function (t) {
              var n = t === D,
                  e = X(n ? $ : v(t)),
                  r = [];
              return R(e, (function (t) {
                  !u(J, t) || n && !u(D, t) || r.push(J[t])
              })), r
          };
      a || (L((H = function () {
          if (this instanceof H) throw TypeError("Symbol is not a constructor");
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
              n = T(t),
              e = function (t) {
                  this === D && e.call($, t), u(this, B) && u(this[B], n) && (this[B][n] = !1), et(this, n, g(1, t))
              };
          return c && nt && et(D, n, {
              configurable: !0,
              set: e
          }), rt(n, t)
      }).prototype, "toString", (function () {
          return W(this).tag
      })), _.f = at, O.f = it, S.f = st, b.f = x.f = ut, w.f = ft, c && (q(H.prototype, "description", {
          configurable: !0,
          get: function () {
              return W(this).description
          }
      }), i || L(D, "propertyIsEnumerable", at, {
          unsafe: !0
      })), M.f = function (t) {
          return rt(P(t), t)
      }), r({
          global: !0,
          wrap: !0,
          forced: !a,
          sham: !a
      }, {
          Symbol: H
      }), R(m(Z), (function (t) {
          k(t)
      })), r({
          target: "Symbol",
          stat: !0,
          forced: !a
      }, {
          for: function (t) {
              var n = String(t);
              if (u(K, n)) return K[n];
              var e = H(n);
              return K[n] = e, Q[e] = n, e
          },
          keyFor: function (t) {
              if (!ot(t)) throw TypeError(t + " is not a symbol");
              if (u(Q, t)) return Q[t]
          },
          useSetter: function () {
              nt = !0
          },
          useSimple: function () {
              nt = !1
          }
      }), r({
          target: "Object",
          stat: !0,
          forced: !a,
          sham: !c
      }, {
          create: function (t, n) {
              return void 0 === n ? y(t) : ct(y(t), n)
          },
          defineProperty: it,
          defineProperties: ct,
          getOwnPropertyDescriptor: st
      }), r({
          target: "Object",
          stat: !0,
          forced: !a
      }, {
          getOwnPropertyNames: ut,
          getOwnPropertySymbols: ft
      }), r({
          target: "Object",
          stat: !0,
          forced: s((function () {
              w.f(1)
          }))
      }, {
          getOwnPropertySymbols: function (t) {
              return w.f(p(t))
          }
      }), Y && r({
          target: "JSON",
          stat: !0,
          forced: !a || s((function () {
              var t = H();
              return "[null]" != V([t]) || "{}" != V({
                  a: t
              }) || "{}" != V(Object(t))
          }))
      }, {
          stringify: function (t) {
              for (var n, e, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
              if (e = n = r[1], (l(n) || void 0 !== t) && !ot(t)) return f(n) || (n = function (t, n) {
                  if ("function" == typeof e && (n = e.call(this, t, n)), !ot(n)) return n
              }), r[1] = n, V.apply(Y, r)
          }
      }), H.prototype[N] || E(H.prototype, N, H.prototype.valueOf), I(H, "Symbol"), C[B] = !0
  }, function (t, n) {
      var e;
      e = function () {
          return this
      }();
      try {
          e = e || new Function("return this")()
      } catch (t) {
          "object" == typeof window && (e = window)
      }
      t.exports = e
  }, function (t, n, e) {
      var r = e(1),
          o = e(28),
          i = r["__core-js_shared__"] || o("__core-js_shared__", {});
      t.exports = i
  }, function (t, n, e) {
      var r = e(1),
          o = e(40),
          i = r.WeakMap;
      t.exports = "function" == typeof i && /native code/.test(o.call(i))
  }, function (t, n, e) {
      var r = e(42),
          o = e(30),
          i = e(33),
          c = e(7);
      t.exports = r("Reflect", "ownKeys") || function (t) {
          var n = o.f(c(t)),
              e = i.f;
          return e ? n.concat(e(t)) : n
      }
  }, function (t, n, e) {
      var r = e(31),
          o = Math.max,
          i = Math.min;
      t.exports = function (t, n) {
          var e = r(t);
          return e < 0 ? o(e + n, 0) : i(e, n)
      }
  }, function (t, n, e) {
      var r = e(2),
          o = /#|\.prototype\./,
          i = function (t, n) {
              var e = a[c(t)];
              return e == u || e != s && ("function" == typeof n ? r(n) : !!n)
          },
          c = i.normalize = function (t) {
              return String(t).replace(o, ".").toLowerCase()
          },
          a = i.data = {},
          s = i.NATIVE = "N",
          u = i.POLYFILL = "P";
      t.exports = i
  }, function (t, n, e) {
      var r = e(8),
          o = e(9),
          i = e(7),
          c = e(35);
      t.exports = r ? Object.defineProperties : function (t, n) {
          i(t);
          for (var e, r = c(n), a = r.length, s = 0; a > s;) o.f(t, e = r[s++], n[e]);
          return t
      }
  }, function (t, n, e) {
      var r = e(42);
      t.exports = r("document", "documentElement")
  }, function (t, n, e) {
      var r = e(10),
          o = e(30).f,
          i = {}.toString,
          c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function (t) {
          return c && "[object Window]" == i.call(t) ? function (t) {
              try {
                  return o(t)
              } catch (t) {
                  return c.slice()
              }
          }(t) : o(r(t))
      }
  }, function (t, n) {
      t.exports = function (t) {
          if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
          return t
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(5),
          o = e(8),
          i = e(1),
          c = e(3),
          a = e(6),
          s = e(9).f,
          u = e(41),
          f = i.Symbol;
      if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
          var l = {},
              d = function () {
                  var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                      n = this instanceof d ? new f(t) : void 0 === t ? f() : f(t);
                  return "" === t && (l[n] = !0), n
              };
          u(d, f);
          var p = d.prototype = f.prototype;
          p.constructor = d;
          var v = p.toString,
              h = "Symbol(test)" == String(f("test")),
              g = /^Symbol\((.*)\)[^)]+$/;
          s(p, "description", {
              configurable: !0,
              get: function () {
                  var t = a(this) ? this.valueOf() : this,
                      n = v.call(t);
                  if (c(l, t)) return "";
                  var e = h ? n.slice(7, -1) : n.replace(g, "$1");
                  return "" === e ? void 0 : e
              }
          }), r({
              global: !0,
              forced: !0
          }, {
              Symbol: d
          })
      }
  }, function (t, n, e) {
      e(48)("iterator")
  }, function (t, n, e) {
      "use strict";
      var r = e(5),
          o = e(2),
          i = e(22),
          c = e(6),
          a = e(11),
          s = e(21),
          u = e(51),
          f = e(50),
          l = e(52),
          d = e(0)("isConcatSpreadable"),
          p = !o((function () {
              var t = [];
              return t[d] = !1, t.concat()[0] !== t
          })),
          v = l("concat"),
          h = function (t) {
              if (!c(t)) return !1;
              var n = t[d];
              return void 0 !== n ? !!n : i(t)
          };
      r({
          target: "Array",
          proto: !0,
          forced: !p || !v
      }, {
          concat: function (t) {
              var n, e, r, o, i, c = a(this),
                  l = f(c, 0),
                  d = 0;
              for (n = -1, r = arguments.length; n < r; n++)
                  if (i = -1 === n ? c : arguments[n], h(i)) {
                      if (d + (o = s(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                      for (e = 0; e < o; e++, d++) e in i && u(l, d, i[e])
                  } else {
                      if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                      u(l, d++, i)
                  } return l.length = d, l
          }
      })
  }, function (t, n, e) {
      "use strict";
      var r = e(5),
          o = e(37).filter;
      r({
          target: "Array",
          proto: !0,
          forced: !e(52)("filter")
      }, {
          filter: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
          }
      })
  }, function (t, n, e) {
      var r = e(5),
          o = e(76);
      r({
          target: "Array",
          stat: !0,
          forced: !e(80)((function (t) {
              Array.from(t)
          }))
      }, {
          from: o
      })
  }, function (t, n, e) {
      "use strict";
      var r = e(49),
          o = e(11),
          i = e(77),
          c = e(78),
          a = e(21),
          s = e(51),
          u = e(79);
      t.exports = function (t) {
          var n, e, f, l, d, p = o(t),
              v = "function" == typeof this ? this : Array,
              h = arguments.length,
              g = h > 1 ? arguments[1] : void 0,
              y = void 0 !== g,
              m = 0,
              b = u(p);
          if (y && (g = r(g, h > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && c(b))
              for (e = new v(n = a(p.length)); n > m; m++) s(e, m, y ? g(p[m], m) : p[m]);
          else
              for (d = (l = b.call(p)).next, e = new v; !(f = d.call(l)).done; m++) s(e, m, y ? i(l, g, [f.value, m], !0) : f.value);
          return e.length = m, e
      }
  }, function (t, n, e) {
      var r = e(7);
      t.exports = function (t, n, e, o) {
          try {
              return o ? n(r(e)[0], e[1]) : n(e)
          } catch (n) {
              var i = t.return;
              throw void 0 !== i && r(i.call(t)), n
          }
      }
  }, function (t, n, e) {
      var r = e(0),
          o = e(15),
          i = r("iterator"),
          c = Array.prototype;
      t.exports = function (t) {
          return void 0 !== t && (o.Array === t || c[i] === t)
      }
  }, function (t, n, e) {
      var r = e(53),
          o = e(15),
          i = e(0)("iterator");
      t.exports = function (t) {
          if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
      }
  }, function (t, n, e) {
      var r = e(0)("iterator"),
          o = !1;
      try {
          var i = 0,
              c = {
                  next: function () {
                      return {
                          done: !!i++
                      }
                  },
                  return: function () {
                      o = !0
                  }
              };
          c[r] = function () {
              return this
          }, Array.from(c, (function () {
              throw 2
          }))
      } catch (t) {}
      t.exports = function (t, n) {
          if (!n && !o) return !1;
          var e = !1;
          try {
              var i = {};
              i[r] = function () {
                  return {
                      next: function () {
                          return {
                              done: e = !0
                          }
                      }
                  }
              }, t(i)
          } catch (t) {}
          return e
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(5),
          o = e(45).indexOf,
          i = e(54),
          c = [].indexOf,
          a = !!c && 1 / [1].indexOf(1, -0) < 0,
          s = i("indexOf");
      r({
          target: "Array",
          proto: !0,
          forced: a || s
      }, {
          indexOf: function (t) {
              return a ? c.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
          }
      })
  }, function (t, n, e) {
      var r = e(0),
          o = e(34),
          i = e(4),
          c = r("unscopables"),
          a = Array.prototype;
      null == a[c] && i(a, c, o(null)), t.exports = function (t) {
          a[c][t] = !0
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(57).IteratorPrototype,
          o = e(34),
          i = e(12),
          c = e(36),
          a = e(15),
          s = function () {
              return this
          };
      t.exports = function (t, n, e) {
          var u = n + " Iterator";
          return t.prototype = o(r, {
              next: i(1, e)
          }), c(t, u, !1, !0), a[u] = s, t
      }
  }, function (t, n, e) {
      var r = e(2);
      t.exports = !r((function () {
          function t() {}
          return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
      }))
  }, function (t, n, e) {
      var r = e(7),
          o = e(86);
      t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
          var t, n = !1,
              e = {};
          try {
              (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
          } catch (t) {}
          return function (e, i) {
              return r(e), o(i), n ? t.call(e, i) : e.__proto__ = i, e
          }
      }() : void 0)
  }, function (t, n, e) {
      var r = e(6);
      t.exports = function (t) {
          if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
          return t
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(5),
          o = e(22),
          i = [].reverse,
          c = [1, 2];
      r({
          target: "Array",
          proto: !0,
          forced: String(c) === String(c.reverse())
      }, {
          reverse: function () {
              return o(this) && (this.length = this.length), i.call(this)
          }
      })
  }, function (t, n, e) {
      var r = e(5),
          o = e(89);
      r({
          target: "Object",
          stat: !0,
          forced: Object.assign !== o
      }, {
          assign: o
      })
  }, function (t, n, e) {
      "use strict";
      var r = e(8),
          o = e(2),
          i = e(35),
          c = e(33),
          a = e(24),
          s = e(11),
          u = e(25),
          f = Object.assign;
      t.exports = !f || o((function () {
          var t = {},
              n = {},
              e = Symbol();
          return t[e] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
              n[t] = t
          })), 7 != f({}, t)[e] || "abcdefghijklmnopqrst" != i(f({}, n)).join("")
      })) ? function (t, n) {
          for (var e = s(t), o = arguments.length, f = 1, l = c.f, d = a.f; o > f;)
              for (var p, v = u(arguments[f++]), h = l ? i(v).concat(l(v)) : i(v), g = h.length, y = 0; g > y;) p = h[y++], r && !d.call(v, p) || (e[p] = v[p]);
          return e
      } : f
  }, function (t, n, e) {
      var r = e(13),
          o = e(91),
          i = Object.prototype;
      o !== i.toString && r(i, "toString", o, {
          unsafe: !0
      })
  }, function (t, n, e) {
      "use strict";
      var r = e(53),
          o = {};
      o[e(0)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function () {
          return "[object " + r(this) + "]"
      } : o.toString
  }, function (t, n, e) {
      "use strict";
      var r = e(13),
          o = e(7),
          i = e(2),
          c = e(93),
          a = RegExp.prototype,
          s = a.toString,
          u = i((function () {
              return "/a/b" != s.call({
                  source: "a",
                  flags: "b"
              })
          })),
          f = "toString" != s.name;
      (u || f) && r(RegExp.prototype, "toString", (function () {
          var t = o(this),
              n = String(t.source),
              e = t.flags;
          return "/" + n + "/" + String(void 0 === e && t instanceof RegExp && !("flags" in a) ? c.call(t) : e)
      }), {
          unsafe: !0
      })
  }, function (t, n, e) {
      "use strict";
      var r = e(7);
      t.exports = function () {
          var t = r(this),
              n = "";
          return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(95).charAt,
          o = e(18),
          i = e(56),
          c = o.set,
          a = o.getterFor("String Iterator");
      i(String, "String", (function (t) {
          c(this, {
              type: "String Iterator",
              string: String(t),
              index: 0
          })
      }), (function () {
          var t, n = a(this),
              e = n.string,
              o = n.index;
          return o >= e.length ? {
              value: void 0,
              done: !0
          } : (t = r(e, o), n.index += t.length, {
              value: t,
              done: !1
          })
      }))
  }, function (t, n, e) {
      var r = e(31),
          o = e(27),
          i = function (t) {
              return function (n, e) {
                  var i, c, a = String(o(n)),
                      s = r(e),
                      u = a.length;
                  return s < 0 || s >= u ? t ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === u || (c = a.charCodeAt(s + 1)) < 56320 || c > 57343 ? t ? a.charAt(s) : i : t ? a.slice(s, s + 2) : c - 56320 + (i - 55296 << 10) + 65536
              }
          };
      t.exports = {
          codeAt: i(!1),
          charAt: i(!0)
      }
  }, function (t, n, e) {
      var r = e(1),
          o = e(59),
          i = e(97),
          c = e(4);
      for (var a in o) {
          var s = r[a],
              u = s && s.prototype;
          if (u && u.forEach !== i) try {
              c(u, "forEach", i)
          } catch (t) {
              u.forEach = i
          }
      }
  }, function (t, n, e) {
      "use strict";
      var r = e(37).forEach,
          o = e(54);
      t.exports = o("forEach") ? function (t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
      } : [].forEach
  }, function (t, n, e) {
      var r = e(1),
          o = e(59),
          i = e(55),
          c = e(4),
          a = e(0),
          s = a("iterator"),
          u = a("toStringTag"),
          f = i.values;
      for (var l in o) {
          var d = r[l],
              p = d && d.prototype;
          if (p) {
              if (p[s] !== f) try {
                  c(p, s, f)
              } catch (t) {
                  p[s] = f
              }
              if (p[u] || c(p, u, l), o[l])
                  for (var v in i)
                      if (p[v] !== i[v]) try {
                          c(p, v, i[v])
                      } catch (t) {
                          p[v] = i[v]
                      }
          }
      }
  }, function (t, n, e) {
      "use strict";
      e.r(n);
      e(60), e(71), e(72), e(73), e(74), e(75), e(81), e(55), e(87), e(88), e(90), e(92), e(94), e(96), e(98);

      function r(t) {
          if (Array.isArray(t)) {
              for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
              return e
          }
          return Array.from(t)
      }
      var o = !1;
      if ("undefined" != typeof window) {
          var i = {
              get passive() {
                  o = !0
              }
          };
          window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
      }
      var c = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
          a = [],
          s = !1,
          u = -1,
          f = void 0,
          l = void 0,
          d = function (t) {
              return a.some((function (n) {
                  return !(!n.options.allowTouchMove || !n.options.allowTouchMove(t))
              }))
          },
          p = function (t) {
              var n = t || window.event;
              return !!d(n.target) || (n.touches.length > 1 || (n.preventDefault && n.preventDefault(), !1))
          },
          v = function () {
              /*setTimeout((function () {
                  void 0 !== l && (document.body.style.paddingRight = l, l = void 0), void 0 !== f && (document.body.style.overflow = f, f = void 0)
              }))*/
          },
          h = function (t, n) {
              if (c) {
                  if (!t) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                  if (t && !a.some((function (n) {
                      return n.targetElement === t
                  }))) {
                      var e = {
                          targetElement: t,
                          options: n || {}
                      };
                      a = [].concat(r(a), [e]), t.ontouchstart = function (t) {
                          1 === t.targetTouches.length && (u = t.targetTouches[0].clientY)
                      }, t.ontouchmove = function (n) {
                          1 === n.targetTouches.length && function (t, n) {
                              var e = t.targetTouches[0].clientY - u;
                              !d(t.target) && (n && 0 === n.scrollTop && e > 0 ? p(t) : function (t) {
                                  return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
                              }(n) && e < 0 ? p(t) : t.stopPropagation())
                          }(n, t)
                      }, s || (document.addEventListener("touchmove", p, o ? {
                          passive: true
                      } : void 0), s = !0)
                  }
              } else {
                  ! function (t) {
                      setTimeout((function () {
                          if (void 0 === l) {
                              var n = !!t && !0 === t.reserveScrollBarGap,
                                  e = window.innerWidth - document.documentElement.clientWidth;
                              n && e > 0 /*&& (l = document.body.style.paddingRight, document.body.style.paddingRight = e + "px")*/
                          }
                          void 0 === f /*&& (f = document.body.style.overflow, document.body.style.overflow = "hidden")*/
                      }))
                  }(n);
                  var i = {
                      targetElement: t,
                      options: n || {}
                  };
                  a = [].concat(r(a), [i])
              }
          },
          g = function (t) {
              if (c) {
                  if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                  t.ontouchstart = null, t.ontouchmove = null, a = a.filter((function (n) {
                      return n.targetElement !== t
                  })), s && 0 === a.length && (document.removeEventListener("touchmove", p, o ? {
                      passive: !1
                  } : void 0), s = !1)
              } else(a = a.filter((function (n) {
                  return n.targetElement !== t
              }))).length || v()
          };

      function y(t) {
          return function (t) {
              if (Array.isArray(t)) {
                  for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                  return e
              }
          }(t) || function (t) {
              if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
          }(t) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance")
          }()
      }

      function m(t, n) {
          for (var e = 0; e < n.length; e++) {
              var r = n[e];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
      }
      var b = function () {
          function t(n) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              ! function (t, n) {
                  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
              }(this, t);
              this.settings = Object.assign({
                  controlColor: "#FFFFFF",
                  controlShadow: !0,
                  addCircle: !1,
                  addCircleBlur: !0,
                  showLabels: !1,
                  labelOptions: {
                      before: "Before",
                      after: "After",
                      onHover: !1
                  },
                  smoothing: !0,
                  smoothingAmount: 100,
                  hoverStart: !1,
                  verticalMode: !1,
                  startingPoint: 50,
                  fluidMode: !1
              }, e), this.safariAgent = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome"), this.el = n, this.images = {}, this.wrapper = null, this.control = null, this.arrowContainer = null, this.arrowAnimator = [], this.active = !1, this.slideWidth = 50, this.lineWidth = 2, this.arrowCoordinates = {
                  circle: [5, 3],
                  standard: [8, 0]
              }
          }
          var n, e, r;
          return n = t, (e = [{
              key: "mount",
              value: function () {
                  this.safariAgent && (this.settings.smoothing = !1), this._shapeContainer(), this._getImages(), this._buildControl(), this._events()
              }
          }, {
              key: "_events",
              value: function () {
                  var t = this;
                  this.el.addEventListener("mousedown", (function (n) {
                      t._activate(!0), document.body.classList.add("icv__body"), h(t.el, {
                          reserveScrollBarGap: !0
                      }), t._slideCompare(n)
                  })), this.el.addEventListener("mousemove", (function (n) {
                      return t.active && t._slideCompare(n)
                  })), this.el.addEventListener("mouseup", (function () {
                      return t._activate(!1)
                  })), document.body.addEventListener("mouseup", (function () {
                      document.body.classList.remove("icv__body"), g(t.el), t._activate(!1)
                  })), this.control.addEventListener("touchstart", (function (n) {
                      t._activate(!0), document.body.classList.add("icv__body"), h(t.el, {
                          reserveScrollBarGap: !0
                      })
                  })), this.el.addEventListener("touchmove", (function (n) {
                      t.active && t._slideCompare(n)
                  })), this.el.addEventListener("touchend", (function () {
                      t._activate(!1), document.body.classList.remove("icv__body"), g(t.el)
                  })), this.el.addEventListener("mouseenter", (function () {
                      t.settings.hoverStart && t._activate(!0);
                      var n = t.settings.addCircle ? t.arrowCoordinates.circle : t.arrowCoordinates.standard;
                      t.arrowAnimator.forEach((function (e, r) {
                          e.style.cssText = "\n        ".concat(t.settings.verticalMode ? "transform: translateY(".concat(n[1] * (0 === r ? 1 : -1), "px);") : "transform: translateX(".concat(n[1] * (0 === r ? 1 : -1), "px);"), "\n        ")
                      }))
                  })), this.el.addEventListener("mouseleave", (function () {
                      var n = t.settings.addCircle ? t.arrowCoordinates.circle : t.arrowCoordinates.standard;
                      t.arrowAnimator.forEach((function (e, r) {
                          e.style.cssText = "\n        ".concat(t.settings.verticalMode ? "transform: translateY(".concat(0 === r ? "".concat(n[0], "px") : "-".concat(n[0], "px"), ");") : "transform: translateX(".concat(0 === r ? "".concat(n[0], "px") : "-".concat(n[0], "px"), ");"), "\n        ")
                      }))
                  }))
              }
          }, {
              key: "_slideCompare",
              value: function (t) {
                  var n = this.el.getBoundingClientRect(),
                      e = void 0 !== t.touches ? t.touches[0].clientX - n.left : t.clientX - n.left,
                      r = void 0 !== t.touches ? t.touches[0].clientY - n.top : t.clientY - n.top,
                      o = this.settings.verticalMode ? r / n.height * 100 : e / n.width * 100;
                  o >= 0 && o <= 100 && (this.settings.verticalMode ? this.control.style.top = "calc(".concat(o, "% - ").concat(this.slideWidth / 2, "px)") : this.control.style.left = "calc(".concat(o, "% - ").concat(this.slideWidth / 2, "px)"), this.settings.fluidMode ? this.settings.verticalMode ? this.wrapper.style.clipPath = "inset(0 0 ".concat(100 - o, "% 0)") : this.wrapper.style.clipPath = "inset(0 0 0 ".concat(o, "%)") : this.settings.verticalMode ? this.wrapper.style.height = "calc(".concat(o, "%)") : this.wrapper.style.width = "calc(".concat(100 - o, "%)"))
              }
          }, {
              key: "_activate",
              value: function (t) {
                  this.active = t
              }
          }, {
              key: "_shapeContainer",
              value: function () {
                  var t = document.createElement("div"),
                      n = document.createElement("span"),
                      e = document.createElement("span");
                  n.classList.add("icv__label", "icv__label-before", "keep"), e.classList.add("icv__label", "icv__label-after", "keep"), this.settings.labelOptions.onHover && (n.classList.add("on-hover"), e.classList.add("on-hover")), this.settings.verticalMode && (n.classList.add("vertical"), e.classList.add("vertical")), n.innerHTML = this.settings.labelOptions.before || "Before", e.innerHTML = this.settings.labelOptions.after || "After", this.settings.showLabels && (this.el.appendChild(n), this.el.appendChild(e)), this.el.classList.add("icv", this.settings.verticalMode ? "icv__icv--vertical" : "icv__icv--horizontal", this.settings.fluidMode ? "icv__is--fluid" : "standard"), t.classList.add("icv__imposter"), this.el.appendChild(t)
              }
          }, {
              key: "_buildControl",
              value: function () {
                  var t = this,
                      n = document.createElement("div"),
                      e = document.createElement("div"),
                      r = document.createElement("div"),
                      o = document.createElement("div");
                  r.classList.add("icv__theme-wrapper");
                  for (var i = 0; i <= 1; i++) {
                      var c = document.createElement("div"),
                          a = '<svg\n      height="15"\n      width="15"\n       style="\n       transform: \n       scale('.concat(this.settings.addCircle ? .7 : 1.5, ")  \n       rotateZ(").concat(0 === i ? this.settings.verticalMode ? "-90deg" : "180deg" : this.settings.verticalMode ? "90deg" : "0deg", "); height: ").concat("20", "px; width: ").concat("20", "px;\n       \n       ").concat(this.settings.controlShadow ? "\n       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));\n       filter: drop-shadow( 0px ".concat(0 === i ? "-3px" : "3px", " 5px rgba(0, 0, 0, .33));\n       ") : "", '\n       "\n       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">\n       <path ').concat(this.settings.addCircle ? 'fill="transparent"' : 'fill="'.concat(this.settings.controlColor, '"'), '\n       stroke="').concat(this.settings.controlColor, '"\n       stroke-linecap="round"\n       stroke-width="').concat(this.settings.addCircle ? 3 : 0, '"\n       d="M4.5 1.9L10 7.65l-5.5 5.4"\n       />\n     </svg>');
                      c.innerHTML += a, this.arrowAnimator.push(c), r.appendChild(c)
                  }
                  var s = this.settings.addCircle ? this.arrowCoordinates.circle : this.arrowCoordinates.standard;
                  this.arrowAnimator.forEach((function (n, e) {
                      n.classList.add("icv__arrow-wrapper"), n.style.cssText = "\n      ".concat(t.settings.verticalMode ? "transform: translateY(".concat(0 === e ? "".concat(s[0], "px") : "-".concat(s[0], "px"), ");") : "transform: translateX(".concat(0 === e ? "".concat(s[0], "px") : "-".concat(s[0], "px"), ");"), "\n      ")
                  })), n.classList.add("icv__control"), n.style.cssText = "\n    ".concat(this.settings.verticalMode ? "height" : "width ", ": ").concat(this.slideWidth, "px;\n    ").concat(this.settings.verticalMode ? "top" : "left ", ": calc(").concat(this.settings.startingPoint, "% - ").concat(this.slideWidth / 2, "px);\n    ").concat("ontouchstart" in document.documentElement ? "" : this.settings.smoothing ? "transition: ".concat(this.settings.smoothingAmount, "ms ease-out;") : "", "\n    "), e.classList.add("icv__control-line"), e.style.cssText = "\n      ".concat(this.settings.verticalMode ? "height" : "width ", ": ").concat(this.lineWidth, "px;\n      background: ").concat(this.settings.controlColor, ";\n        ").concat(this.settings.controlShadow ? "box-shadow: 0px 0px 15px rgba(0,0,0,0.33);" : "", "\n    ");
                  var u = e.cloneNode(!0);
                  o.classList.add("icv__circle"), o.style.cssText = "\n\n      ".concat(this.settings.addCircleBlur && "-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)", ";\n      \n      border: ").concat(this.lineWidth, "px solid ").concat(this.settings.controlColor, ";\n      ").concat(this.settings.controlShadow && "box-shadow: 0px 0px 15px rgba(0,0,0,0.33)", ";\n    "), n.appendChild(e), this.settings.addCircle && n.appendChild(o), n.appendChild(r), n.appendChild(u), this.arrowContainer = r, this.control = n, this.el.appendChild(n)
              }
          }, {
              key: "_getImages",
              value: function () {
                  var t = this,
                      n = this.el.querySelectorAll("img, .keep");
                  this.el.innerHTML = "", n.forEach((function (n) {
                      t.el.appendChild(n)
                  }));
                  var e = y(n).filter((function (t) {
                      return "img" === t.nodeName.toLowerCase()
                  }));
                  this.settings.verticalMode && e.reverse();
                  for (var r = 0; r <= 1; r++) {
                      var o = e[r];
                      if (o.classList.add("icv__img"), o.classList.add(0 === r ? "icv__img-a" : "icv__img-b"), 1 === r) {
                          var i = document.createElement("div"),
                              c = e[1].src;
                          i.classList.add("icv__wrapper"), i.style.cssText = "\n            width: ".concat(100 - this.settings.startingPoint, "%; \n            height: ").concat(this.settings.startingPoint, "%;\n\n            ").concat("ontouchstart" in document.documentElement ? "" : this.settings.smoothing ? "transition: ".concat(this.settings.smoothingAmount, "ms ease-out;") : "", "\n            ").concat(this.settings.fluidMode && "background-image: url(".concat(c, "); clip-path: inset(").concat(this.settings.verticalMode ? " 0 0 ".concat(100 - this.settings.startingPoint, "% 0") : "0 0 0 ".concat(this.settings.startingPoint, "%"), ")"), "\n        "), i.appendChild(o), this.wrapper = i, this.el.appendChild(this.wrapper)
                      }
                  }
                  if (this.settings.fluidMode) {
                      var a = e[0].src,
                          s = document.createElement("div");
                      s.classList.add("icv__fluidwrapper"), s.style.cssText = "\n \n        background-image: url(".concat(a, ");\n        \n      "), this.el.appendChild(s)
                  }
              }
          }]) && m(n.prototype, e), r && m(n, r), t
      }();
      n.default = b
  }]).default
}));
//# sourceMappingURL=image-compare-viewer.min.js.map
