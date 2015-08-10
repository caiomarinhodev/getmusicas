/**
 * Created by Caio on 06/08/2015.
 */
"object" !== typeof JSON && (JSON = {});
(function () {
    function b(a) {
        return 10 > a ? "0" + a : a
    }

    function d(a) {
        m.lastIndex = 0;
        return m.test(a) ? '"' + a.replace(m, function (a) {
            var b = c[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function k(b, c) {
        var h, f, l, m, y = n, u, q = c[b];
        q && "object" === typeof q && "function" === typeof q.toJSON && (q = q.toJSON(b));
        "function" === typeof e && (q = e.call(c, b, q));
        switch (typeof q) {
            case "string":
                return d(q);
            case "number":
                return isFinite(q) ? String(q) : "null";
            case "boolean":
            case "null":
                return String(q);
            case "object":
                if (!q)return "null";
                n += a;
                u = [];
                if ("[object Array]" === Object.prototype.toString.apply(q)) {
                    m = q.length;
                    for (h = 0; h < m; h += 1)u[h] = k(h, q) || "null";
                    l = 0 === u.length ? "[]" : n ? "[\n" + n + u.join(",\n" + n) + "\n" + y + "]" : "[" + u.join(",") + "]";
                    n = y;
                    return l
                }
                if (e && "object" === typeof e)for (m = e.length, h = 0; h < m; h += 1)"string" === typeof e[h] && (f = e[h], (l = k(f, q)) && u.push(d(f) + (n ? ": " : ":") + l)); else for (f in q)Object.prototype.hasOwnProperty.call(q, f) && (l = k(f, q)) && u.push(d(f) + (n ? ": " : ":") + l);
                l = 0 === u.length ? "{}" : n ? "{\n" + n + u.join(",\n" +
                    n) + "\n" + y + "}" : "{" + u.join(",") + "}";
                n = y;
                return l
        }
    }

    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
        return this.valueOf()
    });
    var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        m = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, n, a, c = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, e;
    "function" !== typeof JSON.stringify && (JSON.stringify = function (b, c, d) {
        var f;
        a = n = "";
        if ("number" === typeof d)for (f = 0; f < d; f += 1)a += " "; else"string" === typeof d && (a = d);
        if ((e = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length))throw Error("JSON.stringify");
        return k("", {"": b})
    });
    "function" !== typeof JSON.parse && (JSON.parse = function (a, b) {
        function c(a, e) {
            var d, k, g = a[e];
            if (g && "object" === typeof g)for (d in g)Object.prototype.hasOwnProperty.call(g, d) && (k = c(g, d), void 0 !== k ? g[d] = k : delete g[d]);
            return b.call(a, e, g)
        }

        var e;
        a = String(a);
        f.lastIndex = 0;
        f.test(a) && (a = a.replace(f, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return e = eval("(" + a + ")"), "function" === typeof b ? c({"": e}, "") : e;
        throw new SyntaxError("JSON.parse");
    })
})();
(function (b, d, k) {
    function f(a, b) {
        b && b.onError && !1 === b.onError(a) || (this.name = "JsRender Error", this.message = a || "JsRender error")
    }

    function m(a, b) {
        var c;
        a = a || {};
        for (c in b)a[c] = b[c];
        return a
    }

    function n(a, b, c) {
        if (!T.rTag || arguments.length)U = a ? a.charAt(0) : U, V = a ? a.charAt(1) : V, F = b ? b.charAt(0) : F, L = b ? b.charAt(1) : L, W = c || W, a = "\\" + U + "(\\" + W + ")?\\" + V, b = "\\" + F + "\\" + L, O = "(?:(?:(\\w+(?=[\\/\\s\\" + F + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + F + "]|\\" + F + "(?!\\" + L + "))*?)", T.rTag = O + ")", O = RegExp(a +
            O + "(\\/)?|(?:\\/(\\w+)))" + b, "g"), ca = RegExp("<.*>|([^\\\\]|^)[{}]|" + a + ".*" + b);
        return [U, V, F, L, W]
    }

    function a(a, b) {
        b || (b = a, a = k);
        var c, e, D, d;
        D = this;
        c = !b || "root" === b;
        if (a) {
            if (d = D.type === b ? D : k, !d)if (c = D.views, D._.useKey)for (e in c) {
                if (d = c[e].get(a, b))break
            } else for (e = 0, D = c.length; !d && e < D; e++)d = c[e].get(a, b)
        } else if (c)for (; D.parent.parent;)d = D = D.parent; else for (; D && !d;)d = D.type === b ? D : k, D = D.parent;
        return d
    }

    function c() {
        var a = this.get("item");
        return a ? a.index : k
    }

    function e(a) {
        var b, c = this, e = (c.ctx || {})[a];
        (e =
            e === k ? c.getRsc("helpers", a) : e) && "function" === typeof e && (b = function () {
            return e.apply(c, arguments)
        }, m(b, e));
        return b || e
    }

    function g(a, b, c) {
        var e, d, g, p = +c === c && c, h = b.linkCtx;
        p && (c = (p = b.tmpl.bnds[p - 1])(b.data, b, r));
        g = c.args[0];
        if (a || p)d = h && h.tag || {
                _: {inline: !h},
                tagName: a + ":",
                flow: !0,
                _is: "tag"
            }, d._.bnd = p, h && (h.tag = d, d.linkCtx = h, c.ctx = K(c.ctx, h.view.ctx)), d.tagCtx = c, c.view = b, d.ctx = c.ctx || {}, delete c.ctx, b._.tag = d, (a = "true" !== a && a) && ((e = b.getRsc("converters", a)) || P("Unknown converter: {{" + a + ":")) && (d.depends =
            e.depends, g = e.apply(d, c.args)), g = p && b._.onRender ? b._.onRender(g, b, p) : g, b._.tag = k;
        return g
    }

    function p(a, b) {
        var c, e = this;
        for (c = (c = r[a]) && c[b]; c === k && e;)c = (c = e.tmpl[a]) && c[b], e = e.parent;
        return c
    }

    function h(a, b, c, e) {
        var d, g, p, h, f, l, n, t, B, N, G = "", v = +e === e && e, u = b.linkCtx || 0, E = b.ctx, q = c || b.tmpl, y = b._;
        "tag" === a._is && (d = a, a = d.tagName);
        v && (e = (B = q.bnds[v - 1])(b.data, b, r));
        l = e.length;
        d = d || u.tag;
        for (f = 0; f < l; f++) {
            g = e[f];
            t = g.tmpl;
            t = g.content = t && q.tmpls[t - 1];
            c = g.props.tmpl;
            f || c && d || (N = b.getRsc("tags", a) || P("Unknown tag: {{" +
                    a + "}}"));
            c = c || !f && N.template || t;
            c = "" + c === c ? b.getRsc("templates", c) || C(c) : c;
            m(g, {tmpl: c, render: Z, index: f, view: b, ctx: K(g.ctx, E)});
            if (!d) {
                N.init ? (d = new N.init(g, u, E), d.attr = d.attr || N.attr || k) : d = {render: N.render};
                d._ = {inline: !u};
                u && (u.attr = d.attr = u.attr || d.attr, u.tag = d, d.linkCtx = u);
                if (d._.bnd = B || u)d._.arrVws = {};
                d.tagName = a;
                d.parent = h = E && E.tag;
                d._is = "tag"
            }
            y.tag = d;
            g.tag = d;
            d.tagCtxs = e;
            d.rendering = {};
            d.flow || (c = g.ctx = g.ctx || {}, g = c.parentTags = E && K(c.parentTags, E.parentTags) || {}, h && (g[h.tagName] = h), c.tag = d)
        }
        for (f =
                 0; f < l; f++) {
            g = d.tagCtx = e[f];
            d.ctx = g.ctx;
            if (a = d.render)n = a.apply(d, g.args);
            G += n !== k ? n : g.tmpl ? g.render() : ""
        }
        delete d.rendering;
        d.tagCtx = d.tagCtxs[0];
        d.ctx = d.tagCtx.ctx;
        d._.inline && (p = d.attr) && "html" !== p && (G = "text" === p ? da.html(G) : "");
        return v && b._.onRender ? b._.onRender(G, b, v) : G
    }

    function t(b, d, g, h, f, l, m, w) {
        var n = "array" === d;
        w = {key: 0, useKey: n ? 0 : 1, id: "" + ka++, onRender: w, bnds: {}};
        d = {
            data: h,
            tmpl: f,
            content: m,
            views: n ? [] : {},
            parent: g,
            ctx: b,
            type: d,
            get: a,
            getIndex: c,
            getRsc: p,
            hlp: e,
            _: w,
            _is: "view"
        };
        g && (h = g.views, f =
            g._, f.useKey ? (h[w.key = "_" + f.useKey++] = d, l = f.tag, w.bnd = n && (!l || !!l._.bnd && l)) : h.splice(w.key = d.index = l !== k ? l : h.length, 0, d), d.ctx = b || g.ctx);
        return d
    }

    function l(a) {
        var b, c, e, d, g;
        for (b in Q)if (d = Q[b], (g = d.compile) && (c = a[b + "s"]))for (e in c)c[e] = g(e, c[e], a, b, d)
    }

    function v(a, b, c) {
        if ("function" === typeof b)b = {depends: b.depends, render: b}; else {
            if (a = b.template)b.template = "" + a === a ? C[a] || C(a) : a;
            !1 !== b.init && (a = b.init = b.init || function (a) {
                }, a.prototype = b, (a.prototype = b).constructor = a)
        }
        c && (b._parentTmpl = c);
        return b
    }

    function y(a, c, e, g, p, h) {
        function f(c) {
            if ("" + c === c || 0 < c.nodeType) {
                try {
                    m = 0 < c.nodeType ? c : !ca.test(c) && d && d(b.document).find(c)[0]
                } catch (k) {
                }
                m && (c = m.getAttribute(ea), a = a || c, c = C[c], c || (a = a || "_" + la++, m.setAttribute(ea, a), c = C[a] = y(a, m.innerHTML, e, g, p, h)));
                return c
            }
        }

        var w, m;
        c = c || "";
        w = f(c);
        h = h || (c.markup ? c : {});
        h.tmplName = a;
        e && (h._parentTmpl = e);
        !w && c.markup && (w = f(c.markup)) && w.fn && (w.debug !== c.debug || w.allowCode !== c.allowCode) && (w = w.markup);
        if (w !== k)return a && !e && (aa[a] = function () {
            return c.render.apply(c, arguments)
        }),
            w.fn || c.fn ? w.fn && (c = a && a !== w.tmplName ? K(h, w) : w) : (c = u(w, h), fa(w, c)), l(h), c
    }

    function u(a, b) {
        var c, e = R.wrapMap || {}, d = m({
            markup: a,
            tmpls: [],
            links: {},
            tags: {},
            bnds: [],
            _is: "template",
            render: Z
        }, b);
        b.htmlTag || (c = ma.exec(a), d.htmlTag = c ? c[1].toLowerCase() : "");
        (c = e[d.htmlTag]) && c !== e.div && (d.markup = z.trim(d.markup), d._elCnt = !0);
        return d
    }

    function q(a, b) {
        function c(d, g, p) {
            var h, f, l;
            if (d && "" + d !== d && !d.nodeType && !d.markup) {
                for (h in d)c(h, d[h], g);
                return r
            }
            l = p ? p[e] = p[e] || {} : c;
            g === k && (g = d, d = k);
            f = b.compile;
            if (h = T.onBeforeStoreItem)f =
                h(l, d, g, f) || f;
            d ? "" + d === d && (null === g ? delete l[d] : l[d] = f ? g = f(d, g, p, a, b) : g) : g = f(k, g);
            g && (g._is = a);
            (h = T.onStoreItem) && h(l, d, g, f);
            return g
        }

        var e = a + "s";
        r[e] = c;
        Q[a] = b
    }

    function Z(a, b, c, e, d, g) {
        var p, h, f, l, m, n, B;
        h = this;
        var u = !h.attr || "html" === h.attr, G = "";
        !0 === e && (f = !0, e = 0);
        h.tag ? (l = h, h = h.tag, p = h._, n = h.tagName, B = l.tmpl, b = K(b, h.ctx), m = l.content, !1 === l.props.link && (b = b || {}, b.link = !1), c = c || l.view, a = a === k ? c : a) : B = h.jquery && (h[0] || P('Unknown template: "' + h.selector + '"')) || h;
        if (B && (!c && a && "view" === a._is && (c = a), c &&
            (m = m || c.content, g = g || c._.onRender, a === c && (a = c.data, d = !0), b = K(b, c.ctx)), c && c.data !== k || ((b = b || {}).root = a), B.fn || (B = C[B] || C(B)), B)) {
            l = g = !1 !== (b && b.link) && u && g;
            !0 === g && (l = k, g = c._.onRender);
            if (z.isArray(a) && !d)for (c = f ? c : e !== k && c || t(b, "array", c, a, B, e, m, g), p = 0, h = a.length; p < h; p++)f = a[p], d = t(b, "item", c, f, B, (e || 0) + p, m, g), f = B.fn(f, d, r), G += c._.onRender ? c._.onRender(f, d) : f; else c = f ? c : t(b, n || "data", c, a, B, e, m, g), p && !h.flow && (c.tag = h), G += B.fn(a, c, r);
            return l ? l(G, c) : G
        }
        return ""
    }

    function P(a) {
        if (R.debugMode)throw new r.sub.Error(a);
    }

    function M(a) {
        P("Syntax error\n" + a)
    }

    function fa(a, b, c, e) {
        function d(b) {
            (b -= k) && m.push(a.substr(k, b).replace(ba, "\\n"))
        }

        function g(b) {
            b && M('Unmatched or missing tag: "{{/' + b + '}}" in template:\n' + a)
        }

        var h, p = b && b.allowCode, f = [], k = 0, l = [], m = f, n = [, , , f];
        a = a.replace(na, "\\$1");
        g(l[0] && l[0][3].pop()[0]);
        a.replace(O, function (b, f, t, u, Y, v, q, y, r, H, J, A) {
            v && (Y = ":", u = "html");
            H = H || c;
            f = f && [];
            var s = v = "", I = "";
            q = !H && !Y && !q;
            t = t || Y;
            d(A);
            k = A + b.length;
            y ? p && m.push(["*", "\n" + r.replace(oa, "$1") + "\n"]) : t ? ("else" === t && (pa.test(r) &&
            M('for "{{else if expr}}" use "{{else expr}}"'), f = n[6], n[7] = a.substring(n[7], A), n = l.pop(), m = n[3], q = !0), r && (r = r.replace(ba, " "), v = ha(r, f).replace(qa, function (a, b, c) {
                b ? I += c + "," : s += c + ",";
                return ""
            })), s = s.slice(0, -1), v = v.slice(0, -1), A = s && s.indexOf("noerror:true") + 1 && s || "", h = [t, u || !!e || "", v, q && [], 'params:"' + r + '",props:{' + s + "}" + (I ? ",ctx:{" + I.slice(0, -1) + "}" : ""), A, f || 0], m.push(h), q && (l.push(n), n = h, n[7] = k)) : J && (t = n[0], g(J !== t && "else" !== t && J), n[7] = a.substring(n[7], A), n = l.pop());
            g(!n && J);
            m = n[3]
        });
        d(a.length);
        (k = f[f.length - 1]) && g("" + k !== k && +k[7] === k[7] && k[0]);
        return ia(f, b || a, c)
    }

    function ia(a, b, c) {
        var e, g, h, p, f, k, l, m, n, t, v, q, y, r, E, z, C, F, K, H, J, A = 0, s = "", I = "", X = {}, L = a.length;
        "" + b === b ? (r = c ? 'data-link="' + b.replace(ba, " ").slice(1, -1) + '"' : b, b = 0) : (r = b.tmplName || "unnamed", b.allowCode && (X.allowCode = !0), b.debug && (X.debug = !0), v = b.bnds, y = b.tmpls);
        for (e = 0; e < L; e++)if (g = a[e], "" + g === g)s += '\nret+="' + g + '";'; else if (h = g[0], "*" === h)s += "" + g[1]; else {
            p = g[1];
            f = g[2];
            C = g[3];
            k = g[4];
            I = g[5];
            F = g[7];
            (H = "else" === h) || (A = 0, v && (q = g[6]) &&
            (A = v.push(q)));
            (g = ":" === h) ? (p && (h = "html" === p ? ">" : p + h), I && (H = "prm" + e, I = "try{var " + H + "=[" + f + "][0];}catch(e){" + H + '="";}\n', f = H)) : (C && (E = u(F, X), E.tmplName = r + "/" + h, ia(C, E), y.push(E)), H || (z = h, K = s, s = ""), E = (E = a[e + 1]) && "else" === E[0]);
            k += ",args:[" + f + "]}";
            if (g && q || p && ">" !== h) {
                J = new Function("data,view,j,u", " // " + r + " " + A + " " + h + "\n" + I + "return {" + k + ";");
                J.paths = q;
                J._ctxs = h;
                if (c)return J;
                t = !0
            }
            s += g ? "\n" + (q ? "" : I) + (c ? "return " : "ret+=") + (t ? (t = !0, 'c("' + p + '",view,' + (q ? (v[A - 1] = J, A) : "{" + k) + ");") : ">" === h ? (m = !0, "h(" + f + ");") :
                (n = !0, "(v=" + f + ")!=" + (c ? "=" : "") + 'u?v:"";')) : (l = !0, "{tmpl:" + (C ? y.length : "0") + "," + k + ",");
            if (z && !E) {
                s = "[" + s.slice(0, -1) + "]";
                if (c || q)if (s = new Function("data,view,j,u", " // " + r + " " + A + " " + z + "\nreturn " + s + ";"), q && ((v[A - 1] = s).paths = q), s._ctxs = h, c)return s;
                s = K + '\nret+=t("' + z + '",view,this,' + (A || s) + ");";
                z = q = 0
            }
        }
        s = "// " + r + "\nvar j=j||" + (d ? "jQuery." : "js") + "views" + (n ? ",v" : "") + (l ? ",t=j._tag" : "") + (t ? ",c=j._cnvt" : "") + (m ? ",h=j.converters.html" : "") + (c ? ";\n" : ',ret="";\n') + (R.tryCatch ? "try{\n" : "") + (X.debug ? "debugger;" :
                "") + s + (c ? "\n" : "\nreturn ret;\n") + (R.tryCatch ? "\n}catch(e){return j._err(e);}" : "");
        try {
            s = new Function("data,view,j,u", s)
        } catch (ra) {
            M("Compiled template code:\n\n" + s, ra)
        }
        b && (b.fn = s);
        return s
    }

    function ha(a, b) {
        var c, e, d = {}, g = {0: -1}, h = 0, p = !1, f = !1;
        return (a + " ").replace(sa, function (k, l, m, n, t, v, q, u, r, y, z, C, F, H, J, A, s, I, K) {
            function L(a, c, d, g, h, p, f) {
                return c && (b && !e && b.push(n), "." !== c) ? (a = (d ? 'view.hlp("' + d + '")' : g ? "view" : "data") + (f ? (h ? "." + h : d ? "" : g ? "" : "." + c) + (p || "") : (f = d ? "" : g ? h || "" : c, "")), a += f ? "." + f : "", "view.data" ===
                a.slice(0, 9) ? a.slice(5) : a) : a
            }

            t = t || "";
            m = m || l || z;
            n = n || u;
            b && J && b.push({_jsvOb: K.slice(g[h - 1] + 1, I + 1)});
            r = r || A || "";
            if (v)M(a); else return f ? (f = !C, f ? k : '"') : p ? (p = !F, p ? k : '"') : (m ? (h++, g[h] = I, m) : "") + (s ? h ? "" : c ? (c = e = !1, "\b") : "," : q ? (h && M(a), c = n, e = "~" === n.charAt(0), "\b" + n + ":") : n ? n.split("^").join(".").replace(ta, L) + (r ? (d[++h] = !0, r) : t) : t ? t : H ? (d[h--] = !1, H) + (r ? (d[++h] = !0, r) : "") : y ? (d[h] || M(a), ",") : l ? "" : (f = C, p = F, '"'))
        })
    }

    function K(a, b) {
        return a && a !== b ? b ? m(m({}, b), a) : a : b && m({}, b)
    }

    function ja(a) {
        return ua[a]
    }

    if (!(d && d.views ||
        b.jsviews)) {
        var z, S, O, ca, U = "{", V = "{", F = "}", L = "}", W = "^", ta = /^(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g, sa = /(\()(?=\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*((\))(?=\s*\.|\s*\^)|\)|\])([([]?))|(\s+)/g, ba = /\s*\n/g, oa = /\\(['"])/g, na = /([\\'"])/g, qa = /\x08(~)?([^\x08]+)\x08/g, pa = /^if\s/, ma = /<(\w+)[>\s]/, va = /[<"'&]/g, wa = /[><"'&]/g,
            la = 0, ka = 0, ua = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "\x00": "&#0;",
                "'": "&#39;",
                '"': "&#34;"
            }, ea = "data-jsv-tmpl", aa = {}, Q = {
                template: {compile: y},
                tag: {compile: v},
                helper: {},
                converter: {}
            }, r = {
                jsviews: "v1.0pre",
                render: aa,
                View: t,
                settings: {delimiters: n, debugMode: !0, tryCatch: !0},
                sub: {Error: f, tmplFn: fa, parse: ha, extend: m, error: P, syntaxError: M},
                _cnvt: g,
                _tag: h,
                _err: function (a) {
                    return R.debugMode ? "Error: " + (a.message || a) + ". " : ""
                }
            };
        (f.prototype = Error()).constructor = f;
        c.depends = function () {
            return [this.get("item"), "index"]
        };
        for (S in Q)q(S, Q[S]);
        var C = r.templates, da = r.converters;
        S = r.tags;
        var T = r.sub, R = r.settings;
        d ? (z = d, z.fn.render = Z) : (z = b.jsviews = {}, z.isArray = Array && Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            });
        z.render = aa;
        z.views = r;
        z.templates = C = r.templates;
        S({
            "else": function () {
            }, "if": {
                render: function (a) {
                    return this.rendering.done || !a && (arguments.length || !this.tagCtx.index) ? "" : (this.rendering.done = !0, this.selected = this.tagCtx.index, this.tagCtx.render())
                }, onUpdate: function (a,
                                       b, c) {
                    var e;
                    for (a = 0; (e = this.tagCtxs[a]) && e.args.length; a++)if (e = e.args[0], b = !e !== !c[a].args[0], e || b)return b;
                    return !1
                }, flow: !0
            }, "for": {
                render: function (a) {
                    var b = this.tagCtx, c = !arguments.length, e = "", d = c || 0;
                    !this.rendering.done && (c ? e = k : a !== k && (e += b.render(a), d += z.isArray(a) ? a.length : 1), this.rendering.done = d) && (this.selected = b.index);
                    return e
                }, onUpdate: function (a, b, c) {
                }, onArrayChange: function (a, b) {
                    var c, e = b.change;
                    if (this.tagCtxs[1] && ("insert" === e && a.target.length === b.items.length || "remove" === e && !a.target.length ||
                        "refresh" === e && !b.oldItems.length !== !a.target.length))this.refresh(); else for (c in this._.arrVws)c = this._.arrVws[c], c.data === a.target && c._.onArrayChange.apply(c, arguments);
                    a.done = !0
                }, flow: !0
            }, include: {flow: !0}, "*": {
                render: function (a) {
                    return a
                }, flow: !0
            }
        });
        da({
            html: function (a) {
                return a != k ? String(a).replace(wa, ja) : ""
            }, attr: function (a) {
                return a != k ? String(a).replace(va, ja) : null === a ? null : ""
            }, url: function (a) {
                return a != k ? encodeURI(String(a)) : null === a ? null : ""
            }
        });
        n()
    }
})(this, this.jQuery);
var TrackEvents = !0, iFrameSandbox = "", isFirstLoad = !0, firstURL, autoPlay = !1, loading_theme = "b", error_theme = "d", albumart_db_default = "/static/album.png", albumart_default = "/static/album160.png", JSONResults, JSONData, JSONRecent, APIBase = "http://databrainz.com/api/", APIWhere = "mpl", num_results = 50, cache_query = {}, cache_data = {}, cache_localStorage = !0;
"undefined" == typeof Storage && (cache_localStorage = !1);
var storage_prefix_cache = "cache_", storage_prefix_playlist = "playlist_", cacheTimeInMs = 864E5, cache = {
    data: null,
    timestamp: null
};
function cache_localStorage_clean() {
    var b = (new Date).getTime(), d = [], k, f, m = localStorage.length;
    for (f = 0; f < m; ++f)k = localStorage.key(f), RegExp("^" + storage_prefix_cache).test(k) && (cache = JSON.parse(localStorage[k]), cache.timestamp && (b - cache.timestamp < cacheTimeInMs || d.push(k)));
    m = d.length;
    for (f = 0; f < m; ++f)localStorage.removeItem(d[f])
}
String.prototype.capitalize = function (b) {
    return (b ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function (b) {
        return b.toUpperCase()
    })
};
$(document).on("mobileinit", function () {
    firstURL = $.mobile.path.parseUrl(window.location.href);
    cache_localStorage && cache_localStorage_clean()
});
$(document).on("pagecontainerbeforechange", function (b, d) {
    if (!0 == isFirstLoad)isFirstLoad = !1, handleContent(b, firstURL, d); else if ("string" === typeof d.toPage) {
        autoPlay = !0;
        var k = "string" === typeof d.toPage ? d.toPage : d.toPage.jqmData("url") || "";
        d.options.data && "get" == (d.options.type + "").toLowerCase() && (k += d.options.data);
        k = $.mobile.path.parseUrl(k);
        handleContent(b, k, d)
    }
});
function handleContent(b, d, k) {
    if (-1 === location.search.search(/^\?_escaped_fragment_=/)) {
        var f = d.hash.replace(/^#!?/, ""), m = f.match(/^[a-f0-9]{32}$/);
        !m && f ? showResults(d, k.options) : m ? showData(d, k.options) : showHome(d, k.options);
        b.preventDefault()
    }
}
function showHome(b, d) {
    if (JSONRecent) {
        var k = JSONRecent;
        JSONRecent = "";
        var f = $("#search");
        f.children(":jqmData(role=header)").find("h1").html("");
        $("#searchResults").html($("#recentTemplate").render(k));
        $("#supp-related").html("");
        f.enhanceWithin();
        d.allowSamePageTransition = !0;
        d.transition = "none";
        d.dataUrl = b.href;
        $("body").pagecontainer("change", f, d);
        $("#searchField").autocomplete("clear");
        $("#searchField").val("");
        $("#searchField").focus()
    } else loadRecent(20, b, d)
}
function loadRecent(b, d, k) {
    var f = !0;
    setTimeout(function () {
        f && ($.mobile.loading("hide"), ErrorMessage("Timeout loading data."), JSONRecent = "{}", showHome(d, k))
    }, 1E4);
    $.mobile.loading("show", {text: "Loading", textVisible: !0, theme: loading_theme});
    $.getJSON(APIBase + "monitor_api.cgi?jsoncallback=?", {n: b, w: APIWhere, format: "json"}, function (b) {
        f = !1;
        JSONRecent = b;
        $.mobile.loading("hide");
        showHome(d, k)
    }).error(function () {
        f = !1;
        $.mobile.loading("hide");
        ErrorMessage("Error loading data.");
        JSONRecent = "{}";
        showHome(d,
            k)
    })
}
function showData(b, d) {
    var k = decodeURIComponent(b.hash.replace(/^#!?/, ""));
    if (k)if (JSONData) {
        var f = JSONData;
        JSONData.song || (f.song = JSONData, f.recent = []);
        JSONData = "";
        TrackEvents;
        if (200 != f.song.returncode && (ErrorMessage("Song Unavailable<br />" + f.song.returncode + ": " + f.song.returnmsg), TrackEvents && ga("send", "event", "Player", "error", {
                page: location.pathname + location.search + location.hash,
                eventLabel: f.song.returnmsg
            }),
                autoPlay))return;
        var m = "";
        f.song.artist && (m = f.song.artist + " - ");
        var m = m + f.song.title, m = m.replace(/\+/g, " ").toLowerCase(), m = m.capitalize(!0), n = $("#player");
        n.children(":jqmData(role=header)").find("h1").html("<span>" + m + "</span>");
        $(".jp-title li").html(m);
        $("#searchResults-player").html($("#dataTemplate").render(f.song));
        f.related ? $("#supp-related-player").html($("#relatedTemplateData").render(f)) : $("#supp-related-player").html("");
        n.enhanceWithin();
        d.allowSamePageTransition = !0;
        d.transition = "none";
        d.dataUrl = b.href;
        $("body").pagecontainer("change", n, d);
        document.title = m + " Free Online Music";
        play(f.song.url, k)
    } else loadData(k, b, d)
}
function loadData(b, d, k) {
    if (cache_localStorage && "undefined" !== typeof localStorage[storage_prefix_cache + b]) {
        cache = JSON.parse(localStorage[storage_prefix_cache + b]);
        if ((new Date).getTime() - cache.timestamp < cacheTimeInMs) {
            JSONData = cache.data;
            showData(d, k);
            return
        }
        localStorage.removeItem(storage_prefix_cache + b)
    }
    cache_data[b] ? (JSONData = cache_data[b], showData(d, k)) : ($.mobile.loading("show", {
        text: "Loading",
        textVisible: !0,
        theme: loading_theme
    }), $.getJSON(APIBase + "data_api_new.cgi?jsoncallback=?", {
        id: b, r: APIWhere,
        format: "json"
    }, function (f) {
        cache_data[b] = f;
        $.mobile.loading("hide");
        JSONData = f;
        cache_localStorage && 200 == f.song.returncode && (cache.data = f, cache.timestamp = (new Date).getTime(), localStorage[storage_prefix_cache + b] = JSON.stringify(cache));
        showData(d, k)
    }).error(function () {
        $.mobile.loading("hide");
        ErrorMessage("Error loading data.")
    }))
}
function showResults(b, d) {
    var k = decodeURIComponent(b.hash.replace(/^#!?/, "")), k = k.replace(/\+/g, " ").toLowerCase(), k = k.replace(/<[^>]*>/g, ""), f = k.capitalize(!0);
    if (k)if (JSONResults) {
        var m = JSONResults;
        JSONResults = "";
        var n = $("#search");
        n.children(":jqmData(role=header)").find("h1").html("<span>" + f + "</span>");
        $("#searchResults").html($("#resultsTemplate").render(m));
        m.related[0] ? $("#supp-related").html($("#relatedTemplate").render(m)) : $("#supp-related").html("");
        n.enhanceWithin();
        d.allowSamePageTransition = !0;
        d.transition = "none";
        d.dataUrl = b.href;
        $("body").pagecontainer("change", n, d);
        $("#searchField").val(k);
        $("#searchField").autocomplete("clear");
        document.title = f + " MP3 Download"
    } else loadResults(k, b, d)
}
function loadResults(b, d, k) {
    $("#searchField").autocomplete("clear");
    if (cache_localStorage && "undefined" !== typeof localStorage[storage_prefix_cache + b]) {
        cache = JSON.parse(localStorage[storage_prefix_cache + b]);
        if ((new Date).getTime() - cache.timestamp < cacheTimeInMs) {
            JSONResults = cache.data;
            showResults(d, k);
            return
        }
        localStorage.removeItem(storage_prefix_cache + b)
    }
    cache_query[b] ? (JSONResults = cache_query[b], showResults(d, k)) : ($.mobile.loading("show", {
        text: "Loading",
        textVisible: !0,
        theme: loading_theme
    }), $.getJSON(APIBase +
        "search_api.cgi?jsoncallback=?", {
        qry: b,
        format: "json",
        mh: num_results,
        where: APIWhere,
        r: encodeURIComponent(document.referrer)
    }, function (f) {
        cache_query[b] = f;
        $.mobile.loading("hide");
        JSONResults = f;
        cache_localStorage && (cache.data = f, cache.timestamp = (new Date).getTime(), localStorage[storage_prefix_cache + b] = JSON.stringify(cache));
        showResults(d, k)
    }).error(function () {
        $("#searchField").val(b);
        $("#searchField-player").val(b);
        $("#searchField-player").autocomplete("clear");
        $.mobile.loading("hide");
        ErrorMessage("Sorry, no results found. Try a different search.");
        autoPlay || showHome(d, k)
    }))
}
$.views.helpers({
    encode: function (b) {
        return encodeURIComponent(b).replace(/%20|%2F/g, "+").toLowerCase()
    }, b2size: function (b) {
        return bytesToSize(b, 2)
    }, desc_size: function (b) {
        return b.match(/^.*Size: (.+?) MB/i)[1]
    }, trunc: function (b, d) {
        b.length > d && (b = b.substring(0, d) + "...");
        return b
    }, rand: function (b) {
        return Math.floor(Math.random() * b + 1)
    }, speed_percentage: function (b) {
        b = Math.floor(100 - b / 50);
        0 > b && (b = 0);
        return b
    }, num: function (b) {
        return addCommas(b)
    }, albumart: function (b) {
        b == albumart_db_default && (b = albumart_default);
        return b
    }, relative: function (b) {
        return b.replace(/^\//, "")
    }
});
function init_autocomplete(b, d) {
    $(b).autocomplete({
        termParam: "q",
        target: $(d),
        source: "http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&jsonp=callback=?",
        link: "#!",
        minLength: 1,
        builder: function (b, d) {
            str = [];
            var m = /lyrics|video|parody/i, n = 0;
            if (b) {
                b = b[1];
                for (var a = 0; a < b.length && (m.test(b[a][0]) || (str.push("<li data-icon=" + d.icon + '><a href="' + d.link + encodeURIComponent(b[a][0]).replace(/%20|%2F/g, "+") + '" data-transition="' + d.transition + '">' + d.labelHTML(b[a][0]) + "</a></li>"),
                    n++, !(4 < n))); a++);
            }
            return str
        }
    })
}
$(document).on("pagecreate", "#search", function (b) {
    init_autocomplete("#searchField", "#suggestions")
});
$(document).on("pagecreate", "#player", function (b) {
    init_autocomplete("#searchField-player", "#suggestions-player")
});
var myAndroidFix;
function setNowPlaying(b) {
    $("#playSong").removeClass("ui-disabled");
    $("#playSong").attr("href", "/#" + b)
}
function play(b, d) {
    $("#searchField-player").autocomplete("clear");
    $("#searchField-player").val("");
    var k = $("#playSong").attr("href");
    if (!k || -1 === k.search(d))try {
        $("#playSong").addClass("ui-disabled"), "undefined" == typeof myAndroidFix ? myAndroidFix = new jPlayerAndroidFix("#jquery_jplayer_1", {mp3: b}, {swfPath: "/static"}) : (myAndroidFix.setMedia({mp3: b}), autoPlay && myAndroidFix.play()), setNowPlaying(d)
    } catch (f) {
        alert("jPlayer Play Error: " + f)
    }
}
function bytesToSize(b, d) {
    var k = 0;
    if (0 == b)return "n/a";
    for (; 1024 <= b;)k++, b /= 1024;
    return b.toFixed(d) + " " + ["Bytes", "KB", "MB", "GB", "TB"][k]
}
function ErrorMessage(b) {
    $('<div class="ui-loader ui-corner-all ui-body-' + error_theme + ' ui-loader-verbose ui-loader-textonly"><span class="ui-icon ui-icon-loading"></span><h1>' + b + "</h1></div>").css({display: "block"}).appendTo($.mobile.pageContainer).delay(4E3).fadeOut(600, function () {
        $(this).remove()
    })
}
function addCommas(b) {
    x = (b + "").split(".");
    x1 = x[0];
    x2 = 1 < x.length ? "." + x[1] : "";
    for (b = /(\d+)(\d{3})/; b.test(x1);)x1 = x1.replace(b, "$1,$2");
    return x1 + x2
}
function showads_revive(b) {
    var d = Math.random().toString(16).slice(2, 10), k = Math.floor(99999999999 * Math.random());
    "#search" == b && ("block" == $("#supp-ad1").css("display") ? $("#supp-ad1").html('<div align="center" class="ad-label" style="width: 300px;height: 262px;"><span class="ad-line" style="width:100px"></span><span>Advertisement</span><span class="ad-line" style="width:100px"></span><div><iframe ' + iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=13&amp;cb=' +
        k + '" width="300" height="250" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder300x250.png);background-size:300px 250px;background-repeat:no-repeat;"></iframe></div></div>') : $("#supp-ad1").html('<img src="/static/ads/placeholder300x250.png" width="300" height="250" alt="" />'), "block" == $("#search-ad728x90").css("display") ? $("#search-ad728x90").html('<div align="center" class="ad-label" style="width: 728px;height: 102px;"><span class="ad-line" style="width:314px"></span><span>Advertisement</span><span class="ad-line" style="width:314px"></span><div><iframe ' +
        iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=16&amp;cb=' + k + '" width="728" height="90" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder728x90.png);background-size:728px 90px;background-repeat:no-repeat;"></iframe></div></div>') : $("#search-ad728x90").html('<img src="/static/ads/placeholder728x90.png" width="728" height="90" alt="" />'), "block" ==
    $("#search-ad468x60").css("display") ? $("#search-ad468x60").html('<div align="center" class="ad-label" style="width: 468px;height: 72px;"><span class="ad-line" style="width:184px"></span><span>Advertisement</span><span class="ad-line" style="width:184px"></span><div><iframe ' + iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=15&amp;cb=' + k + '" width="468" height="60" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder468x60.png);background-size:468px 60px;background-repeat:no-repeat;"></iframe></div></div>') :
        $("#search-ad468x60").html('<img src="/static/ads/placeholder468x60.png" width="468" height="60" alt="" />'), "block" == $("#search-ad320x50").css("display") ? $("#search-ad320x50").html('<div align="center" class="ad-label" style="width: 320px;height: 62px;"><span class="ad-line" style="width:110px"></span><span>Advertisement</span><span class="ad-line" style="width:110px"></span><div><iframe ' + iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=24&amp;cb=' +
        k + '" width="320" height="50" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder320x50.png);background-size:320px 50px;background-repeat:no-repeat;"></iframe></div></div>') : $("#search-ad320x50").html('<img src="/static/ads/placeholder320x50.png" width="320" height="50" alt="" />'));
    "#player" == b && ("block" == $("#supp-ad1-player").css("display") ? $("#supp-ad1-player").html('<div align="center" class="ad-label" style="width: 300px;height: 262px;"><span class="ad-line" style="width:100px"></span><span>Advertisement</span><span class="ad-line" style="width:100px"></span><div><iframe ' +
        iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=17&amp;cb=' + k + '" width="300" height="250" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder300x250.png);background-size:300px 250px;background-repeat:no-repeat;"></iframe></div></div>') : $("#supp-ad1-player").html('<img src="/static/ads/placeholder300x250.png" width="300" height="250" alt="" />'), "block" ==
    $("#player-ad728x90").css("display") ? $("#player-ad728x90").html('<div align="center" class="ad-label" style="width: 728px;height: 102px;"><span class="ad-line" style="width:314px"></span><span>Advertisement</span><span class="ad-line" style="width:314px"></span><div><iframe ' + iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=20&amp;cb=' + k + '" width="728" height="90" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder728x90.png);background-size:728px 90px;background-repeat:no-repeat;"></iframe></div></div>') :
        $("#player-ad728x90").html('<img src="/static/ads/placeholder728x90.png" width="728" height="90" alt="" />'), "block" == $("#player-ad468x60").css("display") ? $("#player-ad468x60").html('<div align="center" class="ad-label" style="width: 468px;height: 72px;"><span class="ad-line" style="width:184px"></span><span>Advertisement</span><span class="ad-line" style="width:184px"></span><div><iframe ' + iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=19&amp;cb=' +
        k + '" width="468" height="60" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder468x60.png);background-size:468px 60px;background-repeat:no-repeat;"></iframe></div></div>') : $("#player-ad468x60").html('<img src="/static/ads/placeholder468x60.png" width="468" height="60" alt="" />'), "block" == $("#player-ad320x50").css("display") ? $("#player-ad320x50").html('<div align="center" class="ad-label" style="width: 320px;height: 62px;"><span class="ad-line" style="width:110px"></span><span>Advertisement</span><span class="ad-line" style="width:110px"></span><div><iframe ' +
        iFrameSandbox + 'id="' + d + '" name="' + d + '" src="http://ads.databrainz.com/www/delivery/afr.php?zoneid=26&amp;cb=' + k + '" width="320" height="50" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px;background-image:url(/static/ads/placeholder320x50.png);background-size:320px 50px;background-repeat:no-repeat;"></iframe></div></div>') : $("#player-ad320x50").html('<img src="/static/ads/placeholder320x50.png" width="320" height="50" alt="" />'))
}
function shownoads(b) {
    "#search" == b && ($("#supp-ad1").css("display"), $("#supp-ad1").html('<img src="/static/ads/placeholder300x250.png" width="300" height="250" alt="" />'), $("#search-ad728x90").css("display"), $("#search-ad728x90").html('<img src="/static/ads/placeholder728x90.png" width="728" height="90" alt="" />'), $("#search-ad468x60").css("display"), $("#search-ad468x60").html('<img src="/static/ads/placeholder468x60.png" width="468" height="60" alt="" />'), $("#search-ad300x50").css("display"), $("#search-ad300x50").html('<img src="/static/ads/placeholder300x50.png" width="300" height="50" alt="" />'));
    "#player" == b && ($("#supp-ad1-player").css("display"), $("#supp-ad1-player").html('<img src="/static/ads/placeholder300x250.png" width="300" height="250" alt="" />'), $("#player-ad728x90").css("display"), $("#player-ad728x90").html('<img src="/static/ads/placeholder728x90.png" width="728" height="90" alt="" />'), $("#player-ad468x60").css("display"), $("#player-ad468x60").html('<img src="/static/ads/placeholder468x60.png" width="468" height="60" alt="" />'), $("#player-ad300x50").css("display"), $("#player-ad300x50").html('<img src="/static/ads/placeholder300x50.png" width="300" height="50" alt="" />'))
}
$(document).on("pagebeforeshow", "#search", function (b) {
    //showads_revive("#search")
});
$(document).on("pagebeforeshow", "#player", function (b) {
    //showads_revive("#player")
});
Date.now || (Date.now = function () {
    return (new Date).valueOf()
});
(function (b) {
    var d = {
        method: "GET",
        icon: "arrow-r",
        cancelRequests: !1,
        target: b(),
        source: null,
        callback: null,
        link: null,
        minLength: 0,
        transition: "fade",
        matchFromStart: !0,
        labelHTML: function (a) {
            return a
        },
        onNoResults: function () {
        },
        onLoading: function () {
        },
        onLoadingFinished: function () {
        },
        termParam: "term",
        loadingHtml: '<li data-icon="none"><a href="#">Searching...</a></li>',
        interval: 0,
        builder: null
    }, k = {}, f = function (a, c, d) {
        var h;
        d.builder ? h = d.builder.apply(a.eq(0), [c, d]) : (h = [], c && b.each(c, function (a, c) {
            b.isPlainObject(c) ?
                h.push("<li data-icon=" + d.icon + '><a href="' + d.link + encodeURIComponent(c.value) + '" data-transition="' + d.transition + "\" data-autocomplete='" + JSON.stringify(c) + "'>" + d.labelHTML(c.label) + "</a></li>") : h.push("<li data-icon=" + d.icon + '><a href="' + d.link + encodeURIComponent(c) + '" data-transition="' + d.transition + '">' + d.labelHTML(c) + "</a></li>")
        }));
        b.isArray(h) && (h = h.join(""));
        b(d.target).html(h).listview("refresh");
        null !== d.callback && b.isFunction(d.callback) && m(d);
        if (0 < h.length)a.trigger("targetUpdated.autocomplete");
        else if (a.trigger("targetCleared.autocomplete"), d.onNoResults)d.onNoResults()
    }, m = function (a) {
        b("li a", b(a.target)).bind("click.autocomplete", function (b) {
            b.stopPropagation();
            b.preventDefault();
            a.callback(b)
        })
    }, n = function (a, b) {
        b.html("").listview("refresh").closest("fieldset").removeClass("ui-search-active");
        a.trigger("targetCleared.autocomplete")
    }, a = function (c) {
        var d = b(this), p = d.attr("id"), h, m, l = d.jqmData("autocomplete"), v, y;
        if (l && (h = d.val(), l._lastText !== h && (l._retryTimeout && (window.clearTimeout(l._retryTimeout),
                l._retryTimeout = null), !c || 13 !== c.keyCode && 38 !== c.keyCode && 40 !== c.keyCode)))if (h.length < l.minLength)n(d, b(l.target)); else if (l.interval && Date.now() - l._lastRequest < l.interval)l._retryTimeout = window.setTimeout(b.proxy(a, this), l.interval - Date.now() + l._lastRequest); else if (l._lastRequest = Date.now(), l._lastText = h, b.isArray(l.source))m = l.source.sort().filter(function (a) {
            l.matchFromStart ? (v, y = RegExp("^" + h, "i")) : (v, y = RegExp(h, "i"));
            v = b.isPlainObject(a) ? a.label : a;
            return y.test(v)
        }), f(d, m, l); else if ("function" === typeof l.source)l.source(h, function (a) {
            f(d, a, l)
        }); else {
            c = {
                type: l.method, data: {}, dataType: "json", beforeSend: function (a) {
                    l.cancelRequests && (k[p] && k[p].abort(), k[p] = a);
                    if (l.onLoading && l.onLoadingFinished)l.onLoading();
                    l.loadingHtml && (l.target.html(l.loadingHtml).listview("refresh"), l.target.closest("fieldset").addClass("ui-search-active"))
                }, success: function (a) {
                    f(d, a, l)
                }, complete: function () {
                    l.cancelRequests && (k[p] = null);
                    if (l.onLoadingFinished)l.onLoadingFinished()
                }
            };
            if (b.isPlainObject(l.source))for (m in l.source.callback &&
            l.source.callback(h, c), l.source)"callback" !== m && (c[m] = l.source[m]); else c.url = l.source;
            l.termParam && (c.data[l.termParam] = h);
            b.ajax(c)
        }
    }, c = {
        init: function (c) {
            var g = this;
            g.jqmData("autocomplete", b.extend({}, d, c));
            var f = g.jqmData("autocomplete");
            return g.unbind("keyup.autocomplete").bind("keyup.autocomplete", a).next(".ui-input-clear").bind("click", function () {
                n(g, b(f.target))
            })
        }, update: function (a) {
            var c = this.jqmData("autocomplete");
            c && this.jqmData("autocomplete", b.extend(c, a));
            return this
        }, clear: function () {
            var a =
                this.jqmData("autocomplete");
            a && n(this, b(a.target));
            return this
        }, destroy: function () {
            var a = this.jqmData("autocomplete");
            a && (n(this, b(a.target)), this.jqmRemoveData("autocomplete"), this.unbind(".autocomplete"));
            return this
        }
    };
    b.fn.autocomplete = function (a) {
        if (c[a])return c[a].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" === typeof a || !a)return c.init.apply(this, arguments)
    }
})(jQuery);
(function (b, d) {
    "function" === typeof define && define.amd ? define(["jquery"], d) : d(b.jQuery)
})(this, function (b, d) {
    b.fn.jPlayer = function (a) {
        var c = "string" === typeof a, e = Array.prototype.slice.call(arguments, 1), g = this;
        a = !c && e.length ? b.extend.apply(null, [!0, a].concat(e)) : a;
        if (c && "_" === a.charAt(0))return g;
        c ? this.each(function () {
            var c = b.data(this, "jPlayer"), h = c && b.isFunction(c[a]) ? c[a].apply(c, e) : c;
            if (h !== c && h !== d)return g = h, !1
        }) : this.each(function () {
            var c = b.data(this, "jPlayer");
            c ? c.option(a || {}) : b.data(this,
                "jPlayer", new b.jPlayer(a, this))
        });
        return g
    };
    b.jPlayer = function (a, c) {
        if (arguments.length) {
            this.element = b(c);
            this.options = b.extend(!0, {}, this.options, a);
            var e = this;
            this.element.bind("remove.jPlayer", function () {
                e.destroy()
            });
            this._init()
        }
    };
    b.jPlayer.emulateMethods = "load play pause";
    b.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
    b.jPlayer.emulateOptions = "muted volume";
    b.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";
    b.jPlayer.event =
    {};
    b.each("ready flashreset resize repeat click error warning loadstart progress suspend abort emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange".split(" "), function () {
        b.jPlayer.event[this] = "jPlayer_" + this
    });
    b.jPlayer.htmlEvent = "loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough ratechange".split(" ");
    b.jPlayer.pause = function () {
        b.each(b.jPlayer.prototype.instances,
            function (a, b) {
                b.data("jPlayer").status.srcSet && b.jPlayer("pause")
            })
    };
    b.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    var k = function () {
        this.init()
    };
    k.prototype = {
        init: function () {
            this.options = {timeFormat: b.jPlayer.timeFormat}
        }, time: function (a) {
            var b = new Date(1E3 * (a && "number" === typeof a ? a : 0)), e = b.getUTCHours();
            a = this.options.timeFormat.showHour ? b.getUTCMinutes() : b.getUTCMinutes() + 60 * e;
            b = this.options.timeFormat.showMin ? b.getUTCSeconds() :
            b.getUTCSeconds() + 60 * a;
            e = this.options.timeFormat.padHour && 10 > e ? "0" + e : e;
            a = this.options.timeFormat.padMin && 10 > a ? "0" + a : a;
            b = this.options.timeFormat.padSec && 10 > b ? "0" + b : b;
            e = "" + (this.options.timeFormat.showHour ? e + this.options.timeFormat.sepHour : "");
            e += this.options.timeFormat.showMin ? a + this.options.timeFormat.sepMin : "";
            return e += this.options.timeFormat.showSec ? b + this.options.timeFormat.sepSec : ""
        }
    };
    var f = new k;
    b.jPlayer.convertTime = function (a) {
        return f.time(a)
    };
    b.jPlayer.uaBrowser = function (a) {
        a = a.toLowerCase();
        var b = /(opera)(?:.*version)?[ \/]([\w.]+)/, e = /(msie) ([\w.]+)/, d = /(mozilla)(?:.*? rv:([\w.]+))?/;
        a = /(webkit)[ \/]([\w.]+)/.exec(a) || b.exec(a) || e.exec(a) || 0 > a.indexOf("compatible") && d.exec(a) || [];
        return {browser: a[1] || "", version: a[2] || "0"}
    };
    b.jPlayer.uaPlatform = function (a) {
        var b = a.toLowerCase(), e = /(android)/, d = /(mobile)/;
        a = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(b) || [];
        b = /(ipad|playbook)/.exec(b) || !d.exec(b) && e.exec(b) || [];
        a[1] && (a[1] = a[1].replace(/\s/g, "_"));
        return {
            platform: a[1] ||
            "", tablet: b[1] || ""
        }
    };
    b.jPlayer.browser = {};
    b.jPlayer.platform = {};
    var m = b.jPlayer.uaBrowser(navigator.userAgent);
    m.browser && (b.jPlayer.browser[m.browser] = !0, b.jPlayer.browser.version = m.version);
    m = b.jPlayer.uaPlatform(navigator.userAgent);
    m.platform && (b.jPlayer.platform[m.platform] = !0, b.jPlayer.platform.mobile = !m.tablet, b.jPlayer.platform.tablet = !!m.tablet);
    b.jPlayer.getDocMode = function () {
        var a;
        b.jPlayer.browser.msie && (document.documentMode ? a = document.documentMode : (a = 5, document.compatMode && "CSS1Compat" ===
        document.compatMode && (a = 7)));
        return a
    };
    b.jPlayer.browser.documentMode = b.jPlayer.getDocMode();
    b.jPlayer.nativeFeatures = {
        init: function () {
            var a = document, b = a.createElement("video"), e = {
                w3c: "fullscreenEnabled fullscreenElement requestFullscreen exitFullscreen fullscreenchange fullscreenerror".split(" "),
                moz: "mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" "),
                webkit: " webkitCurrentFullScreenElement webkitRequestFullScreen webkitCancelFullScreen webkitfullscreenchange ".split(" "),
                webkitVideo: "webkitSupportsFullscreen webkitDisplayingFullscreen webkitEnterFullscreen webkitExitFullscreen  ".split(" ")
            }, d = ["w3c", "moz", "webkit", "webkitVideo"], f, h;
            this.fullscreen = b = {
                support: {
                    w3c: !!a[e.w3c[0]],
                    moz: !!a[e.moz[0]],
                    webkit: "function" === typeof a[e.webkit[3]],
                    webkitVideo: "function" === typeof b[e.webkitVideo[2]]
                }, used: {}
            };
            f = 0;
            for (h = d.length; f < h; f++) {
                var k = d[f];
                if (b.support[k]) {
                    b.spec = k;
                    b.used[k] = !0;
                    break
                }
            }
            if (b.spec) {
                var l = e[b.spec];
                b.api = {
                    fullscreenEnabled: !0, fullscreenElement: function (b) {
                        b =
                            b ? b : a;
                        return b[l[1]]
                    }, requestFullscreen: function (a) {
                        return a[l[2]]()
                    }, exitFullscreen: function (b) {
                        b = b ? b : a;
                        return b[l[3]]()
                    }
                };
                b.event = {fullscreenchange: l[4], fullscreenerror: l[5]}
            } else b.api = {
                fullscreenEnabled: !1, fullscreenElement: function () {
                    return null
                }, requestFullscreen: function () {
                }, exitFullscreen: function () {
                }
            }, b.event = {}
        }
    };
    b.jPlayer.nativeFeatures.init();
    b.jPlayer.focus = null;
    b.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
    var n = function (a) {
        var c = b.jPlayer.focus, e;
        c && (b.each(b.jPlayer.keyIgnoreElementNames.split(/\s+/g),
            function (b, c) {
                if (a.target.nodeName.toUpperCase() === c.toUpperCase())return e = !0, !1
            }), e || b.each(c.options.keyBindings, function (e, d) {
            if (d && a.which === d.key && b.isFunction(d.fn))return a.preventDefault(), d.fn(c), !1
        }))
    };
    b.jPlayer.keys = function (a) {
        b(document.documentElement).unbind("keydown.jPlayer");
        a && b(document.documentElement).bind("keydown.jPlayer", n)
    };
    b.jPlayer.keys(!0);
    b.jPlayer.prototype = {
        count: 0,
        version: {script: "2.2.19", needFlash: "2.2.19", flash: "unknown"},
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: 0.8,
            muted: !1,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            fullScreen: !1,
            fullWindow: !1,
            autohide: {restored: !1, full: !0, fadeIn: 200, fadeOut: 600, hold: 1E3},
            loop: !1,
            repeat: function (a) {
                a.jPlayer.options.loop ? b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
                    b(this).jPlayer("play")
                }) : b(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullWindow: {
                msie: /msie [0-6]\./,
                ipad: /ipad.*?os [0-4]\./,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3]\.(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/,
                playbook: /playbook/
            },
            timeFormat: {},
            keyEnabled: !1,
            audioFullScreen: !1,
            keyBindings: {
                play: {
                    key: 32, fn: function (a) {
                        a.status.paused ? a.play() : a.pause()
                    }
                }, fullScreen: {
                    key: 13, fn: function (a) {
                        (a.status.video ||
                        a.options.audioFullScreen) && a._setOption("fullScreen", !a.options.fullScreen)
                    }
                }, muted: {
                    key: 8, fn: function (a) {
                        a._muted(!a.options.muted)
                    }
                }, volumeUp: {
                    key: 38, fn: function (a) {
                        a.volume(a.options.volume + 0.1)
                    }
                }, volumeDown: {
                    key: 40, fn: function (a) {
                        a.volume(a.options.volume - 0.1)
                    }
                }
            },
            verticalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {width: "0px", height: "0px", cssClass: ""},
            sizeFull: {width: "0px", height: "0px", cssClass: ""}
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px", cssClass: "jp-video-270p"
            }, sizeFull: {width: "100%", height: "100%", cssClass: "jp-video-full"}
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            videoWidth: 0,
            videoHeight: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {ready: !1},
        solution: {html: !0, flash: !0},
        format: {
            mp3: {codec: "audio/mpeg", flashCanPlay: !0, media: "audio"},
            m4a: {codec: 'audio/mp4; codecs="mp4a.40.2"', flashCanPlay: !0, media: "audio"},
            oga: {codec: 'audio/ogg; codecs="vorbis"', flashCanPlay: !1, media: "audio"},
            wav: {codec: 'audio/wav; codecs="1"', flashCanPlay: !1, media: "audio"},
            webma: {codec: 'audio/webm; codecs="vorbis"', flashCanPlay: !1, media: "audio"},
            fla: {codec: "audio/x-flv", flashCanPlay: !0, media: "audio"},
            rtmpa: {codec: 'audio/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "audio"},
            m4v: {codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"', flashCanPlay: !0, media: "video"},
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1, media: "video"
            },
            webmv: {codec: 'video/webm; codecs="vorbis, vp8"', flashCanPlay: !1, media: "video"},
            flv: {codec: "video/x-flv", flashCanPlay: !0, media: "video"},
            rtmpv: {codec: 'video/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "video"}
        },
        _init: function () {
            var a = this;
            this.element.empty();
            this.status = b.extend({}, this.status);
            this.internal = b.extend({}, this.internal);
            this.options.timeFormat = b.extend({}, b.jPlayer.timeFormat, this.options.timeFormat);
            this.internal.cmdsIgnored = b.jPlayer.platform.ipad || b.jPlayer.platform.iphone ||
                b.jPlayer.platform.ipod;
            this.internal.domNode = this.element.get(0);
            this.options.keyEnabled && !b.jPlayer.focus && (b.jPlayer.focus = this);
            this.formats = [];
            this.solutions = [];
            this.require = {};
            this.htmlElement = {};
            this.html = {};
            this.html.audio = {};
            this.html.video = {};
            this.flash = {};
            this.css = {};
            this.css.cs = {};
            this.css.jq = {};
            this.ancestorJq = [];
            this.options.volume = this._limitValue(this.options.volume, 0, 1);
            b.each(this.options.supplied.toLowerCase().split(","), function (c, e) {
                var d = e.replace(/^\s+|\s+$/g, "");
                if (a.format[d]) {
                    var g =
                        !1;
                    b.each(a.formats, function (a, b) {
                        if (d === b)return g = !0, !1
                    });
                    g || a.formats.push(d)
                }
            });
            b.each(this.options.solution.toLowerCase().split(","), function (c, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (a.solution[e]) {
                    var g = !1;
                    b.each(a.solutions, function (a, b) {
                        if (e === b)return g = !0, !1
                    });
                    g || a.solutions.push(e)
                }
            });
            this.internal.instance = "jp_" + this.count;
            this.instances[this.internal.instance] = this.element;
            this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
            this.internal.self =
                b.extend({}, {id: this.element.attr("id"), jq: this.element});
            this.internal.audio = b.extend({}, {id: this.options.idPrefix + "_audio_" + this.count, jq: d});
            this.internal.video = b.extend({}, {id: this.options.idPrefix + "_video_" + this.count, jq: d});
            this.internal.flash = b.extend({}, {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: d,
                swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "Jplayer.swf" : "")
            });
            this.internal.poster =
                b.extend({}, {id: this.options.idPrefix + "_poster_" + this.count, jq: d});
            b.each(b.jPlayer.event, function (b, c) {
                a.options[b] !== d && (a.element.bind(c + ".jPlayer", a.options[b]), a.options[b] = d)
            });
            this.require.audio = !1;
            this.require.video = !1;
            b.each(this.formats, function (b, c) {
                a.require[a.format[c].media] = !0
            });
            this.options = this.require.video ? b.extend(!0, {}, this.optionsVideo, this.options) : b.extend(!0, {}, this.optionsAudio, this.options);
            this._setSize();
            this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
            this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
            this.status.noVolume = this._uaBlocklist(this.options.noVolume);
            b.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners();
            this._restrictNativeVideoControls();
            this.htmlElement.poster = document.createElement("img");
            this.htmlElement.poster.id = this.internal.poster.id;
            this.htmlElement.poster.onload = function () {
                a.status.video && !a.status.waitForPlay || a.internal.poster.jq.show()
            };
            this.element.append(this.htmlElement.poster);
            this.internal.poster.jq = b("#" + this.internal.poster.id);
            this.internal.poster.jq.css({width: this.status.width, height: this.status.height});
            this.internal.poster.jq.hide();
            this.internal.poster.jq.bind("click.jPlayer", function () {
                a._trigger(b.jPlayer.event.click)
            });
            this.html.audio.available = !1;
            this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio));
            this.html.video.available = !1;
            this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video));
            this.flash.available = this._checkForFlash(10.1);
            this.html.canPlay = {};
            this.flash.canPlay = {};
            b.each(this.formats, function (b, c) {
                a.html.canPlay[c] = a.html[a.format[c].media].available && "" !== a.htmlElement[a.format[c].media].canPlayType(a.format[c].codec);
                a.flash.canPlay[c] = a.format[c].flashCanPlay && a.flash.available
            });
            this.html.desired = !1;
            this.flash.desired = !1;
            b.each(this.solutions, function (c, e) {
                if (0 === c)a[e].desired = !0; else {
                    var d = !1, g = !1;
                    b.each(a.formats, function (b, c) {
                        a[a.solutions[0]].canPlay[c] && ("video" === a.format[c].media ? g = !0 : d = !0)
                    });
                    a[e].desired = a.require.audio && !d || a.require.video && !g
                }
            });
            this.html.support = {};
            this.flash.support = {};
            b.each(this.formats, function (b, c) {
                a.html.support[c] = a.html.canPlay[c] && a.html.desired;
                a.flash.support[c] = a.flash.canPlay[c] &&
                    a.flash.desired
            });
            this.html.used = !1;
            this.flash.used = !1;
            b.each(this.solutions, function (c, e) {
                b.each(a.formats, function (b, c) {
                    if (a[e].support[c])return a[e].used = !0, !1
                })
            });
            this._resetActive();
            this._resetGate();
            this._cssSelectorAncestor(this.options.cssSelectorAncestor);
            this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({
                type: b.jPlayer.error.NO_SOLUTION,
                context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                message: b.jPlayer.errorMsg.NO_SOLUTION,
                hint: b.jPlayer.errorHint.NO_SOLUTION
            }), this.css.jq.noSolution.length && this.css.jq.noSolution.show());
            if (this.flash.used) {
                var c, e = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (b.jPlayer.browser.msie && (9 > Number(b.jPlayer.browser.version) || 9 > b.jPlayer.browser.documentMode)) {
                    e = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + e + '" />', '<param name="allowScriptAccess" value="always" />',
                        '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    c = document.createElement('<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>');
                    for (var g = 0; g < e.length; g++)c.appendChild(document.createElement(e[g]))
                } else g = function (a, b, c) {
                    var e = document.createElement("param");
                    e.setAttribute("name", b);
                    e.setAttribute("value", c);
                    a.appendChild(e)
                }, c = document.createElement("object"),
                    c.setAttribute("id", this.internal.flash.id), c.setAttribute("data", this.internal.flash.swf), c.setAttribute("type", "application/x-shockwave-flash"), c.setAttribute("width", "1"), c.setAttribute("height", "1"), c.setAttribute("tabindex", "-1"), g(c, "flashvars", e), g(c, "allowscriptaccess", "always"), g(c, "bgcolor", this.options.backgroundColor), g(c, "wmode", this.options.wmode);
                this.element.append(c);
                this.internal.flash.jq = b(c)
            }
            this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio,
                this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = b("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = b("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : this.internal.video.jq.css({width: "0px", height: "0px"}), this.internal.video.jq.bind("click.jPlayer",
                function () {
                    a._trigger(b.jPlayer.event.click)
                })));
            this.options.emulateHtml && this._emulateHtmlBridge();
            this.html.used && !this.flash.used && setTimeout(function () {
                a.internal.ready = !0;
                a.version.flash = "n/a";
                a._trigger(b.jPlayer.event.repeat);
                a._trigger(b.jPlayer.event.ready)
            }, 100);
            this._updateNativeVideoControls();
            this._updateInterface();
            this._updateButtons(!1);
            this._updateAutohide();
            this._updateVolume(this.options.volume);
            this._updateMute(this.options.muted);
            this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
            b.jPlayer.prototype.count++
        },
        destroy: function () {
            this.clearMedia();
            this._removeUiClass();
            this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
            this.css.jq.duration.length && this.css.jq.duration.text("");
            b.each(this.css.jq, function (a, b) {
                b.length && b.unbind(".jPlayer")
            });
            this.internal.poster.jq.unbind(".jPlayer");
            this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer");
            this._fullscreenRemoveEventListeners();
            this === b.jPlayer.focus && (b.jPlayer.focus = null);
            this.options.emulateHtml && this._destroyHtmlBridge();
            this.element.removeData("jPlayer");
            this.element.unbind(".jPlayer");
            this.element.empty();
            delete this.instances[this.internal.instance]
        },
        enable: function () {
        },
        disable: function () {
        },
        _testCanPlayType: function (a) {
            try {
                return a.canPlayType(this.format.mp3.codec), !0
            } catch (b) {
                return !1
            }
        },
        _uaBlocklist: function (a) {
            var c = navigator.userAgent.toLowerCase(), e = !1;
            b.each(a, function (a, b) {
                if (b && b.test(c))return e = !0, !1
            });
            return e
        },
        _restrictNativeVideoControls: function () {
            this.require.audio && this.status.nativeVideoControls &&
            (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
        },
        _updateNativeVideoControls: function () {
            this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            })))
        },
        _addHtmlEventListeners: function (a, c) {
            var e = this;
            a.preload = this.options.preload;
            a.muted = this.options.muted;
            a.volume = this.options.volume;
            a.addEventListener("progress", function () {
                c.gate && (e.internal.cmdsIgnored && 0 < this.readyState && (e.internal.cmdsIgnored = !1), e._getHtmlStatus(a), e._updateInterface(), e._trigger(b.jPlayer.event.progress))
            }, !1);
            a.addEventListener("timeupdate", function () {
                c.gate && (e._getHtmlStatus(a), e._updateInterface(), e._trigger(b.jPlayer.event.timeupdate))
            }, !1);
            a.addEventListener("durationchange",
                function () {
                    c.gate && (e._getHtmlStatus(a), e._updateInterface(), e._trigger(b.jPlayer.event.durationchange))
                }, !1);
            a.addEventListener("play", function () {
                c.gate && (e._updateButtons(!0), e._html_checkWaitForPlay(), e._trigger(b.jPlayer.event.play))
            }, !1);
            a.addEventListener("playing", function () {
                c.gate && (e._updateButtons(!0), e._seeked(), e._trigger(b.jPlayer.event.playing))
            }, !1);
            a.addEventListener("pause", function () {
                c.gate && (e._updateButtons(!1), e._trigger(b.jPlayer.event.pause))
            }, !1);
            a.addEventListener("waiting",
                function () {
                    c.gate && (e._seeking(), e._trigger(b.jPlayer.event.waiting))
                }, !1);
            a.addEventListener("seeking", function () {
                c.gate && (e._seeking(), e._trigger(b.jPlayer.event.seeking))
            }, !1);
            a.addEventListener("seeked", function () {
                c.gate && (e._seeked(), e._trigger(b.jPlayer.event.seeked))
            }, !1);
            a.addEventListener("volumechange", function () {
                c.gate && (e.options.volume = a.volume, e.options.muted = a.muted, e._updateMute(), e._updateVolume(), e._trigger(b.jPlayer.event.volumechange))
            }, !1);
            a.addEventListener("suspend", function () {
                c.gate &&
                (e._seeked(), e._trigger(b.jPlayer.event.suspend))
            }, !1);
            a.addEventListener("ended", function () {
                c.gate && (b.jPlayer.browser.webkit || (e.htmlElement.media.currentTime = 0), e.htmlElement.media.pause(), e._updateButtons(!1), e._getHtmlStatus(a, !0), e._updateInterface(), e._trigger(b.jPlayer.event.ended))
            }, !1);
            a.addEventListener("error", function () {
                c.gate && (e._updateButtons(!1), e._seeked(), e.status.srcSet && (clearTimeout(e.internal.htmlDlyCmdId), e.status.waitForLoad = !0, e.status.waitForPlay = !0, e.status.video && !e.status.nativeVideoControls &&
                e.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                }), e._validString(e.status.media.poster) && !e.status.nativeVideoControls && e.internal.poster.jq.show(), e.css.jq.videoPlay.length && e.css.jq.videoPlay.show(), e._error({
                    type: b.jPlayer.error.URL,
                    context: e.status.src,
                    message: b.jPlayer.errorMsg.URL,
                    hint: b.jPlayer.errorHint.URL
                })))
            }, !1);
            b.each(b.jPlayer.htmlEvent, function (d, f) {
                a.addEventListener(this, function () {
                    c.gate && e._trigger(b.jPlayer.event[f])
                }, !1)
            })
        },
        _getHtmlStatus: function (a, b) {
            var e = 0, d = 0, f = 0, h = 0;
            isFinite(a.duration) &&
            (this.status.duration = a.duration);
            e = a.currentTime;
            d = 0 < this.status.duration ? 100 * e / this.status.duration : 0;
            "object" === typeof a.seekable && 0 < a.seekable.length ? (f = 0 < this.status.duration ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration : 100, h = 0 < this.status.duration ? 100 * a.currentTime / a.seekable.end(a.seekable.length - 1) : 0) : (f = 100, h = d);
            b && (d = h = e = 0);
            this.status.seekPercent = f;
            this.status.currentPercentRelative = h;
            this.status.currentPercentAbsolute = d;
            this.status.currentTime = e;
            this.status.videoWidth =
                a.videoWidth;
            this.status.videoHeight = a.videoHeight;
            this.status.readyState = a.readyState;
            this.status.networkState = a.networkState;
            this.status.playbackRate = a.playbackRate;
            this.status.ended = a.ended
        },
        _resetStatus: function () {
            this.status = b.extend({}, this.status, b.jPlayer.prototype.status)
        },
        _trigger: function (a, c, e) {
            a = b.Event(a);
            a.jPlayer = {};
            a.jPlayer.version = b.extend({}, this.version);
            a.jPlayer.options = b.extend(!0, {}, this.options);
            a.jPlayer.status = b.extend(!0, {}, this.status);
            a.jPlayer.html = b.extend(!0, {}, this.html);
            a.jPlayer.flash = b.extend(!0, {}, this.flash);
            c && (a.jPlayer.error = b.extend({}, c));
            e && (a.jPlayer.warning = b.extend({}, e));
            this.element.trigger(a)
        },
        jPlayerFlashEvent: function (a, c) {
            if (a === b.jPlayer.event.ready)if (!this.internal.ready)this.internal.ready = !0, this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            }), this.version.flash = c.version, this.version.needFlash !== this.version.flash && this._error({
                type: b.jPlayer.error.VERSION,
                context: this.version.flash,
                message: b.jPlayer.errorMsg.VERSION + this.version.flash,
                hint: b.jPlayer.errorHint.VERSION
            }), this._trigger(b.jPlayer.event.repeat), this._trigger(a); else if (this.flash.gate) {
                if (this.status.srcSet) {
                    var e = this.status.currentTime, d = this.status.paused;
                    this.setMedia(this.status.media);
                    0 < e && (d ? this.pause(e) : this.play(e))
                }
                this._trigger(b.jPlayer.event.flashreset)
            }
            if (this.flash.gate)switch (a) {
                case b.jPlayer.event.progress:
                    this._getFlashStatus(c);
                    this._updateInterface();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.timeupdate:
                    this._getFlashStatus(c);
                    this._updateInterface();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.play:
                    this._seeked();
                    this._updateButtons(!0);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.pause:
                    this._updateButtons(!1);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.ended:
                    this._updateButtons(!1);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.click:
                    this._trigger(a);
                    break;
                case b.jPlayer.event.error:
                    this.status.waitForLoad = !0;
                    this.status.waitForPlay = !0;
                    this.status.video && this.internal.flash.jq.css({width: "0px", height: "0px"});
                    this._validString(this.status.media.poster) &&
                    this.internal.poster.jq.show();
                    this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show();
                    this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
                    this._updateButtons(!1);
                    this._error({
                        type: b.jPlayer.error.URL,
                        context: c.src,
                        message: b.jPlayer.errorMsg.URL,
                        hint: b.jPlayer.errorHint.URL
                    });
                    break;
                case b.jPlayer.event.seeking:
                    this._seeking();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.seeked:
                    this._seeked();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.ready:
                    break;
                default:
                    this._trigger(a)
            }
            return !1
        },
        _getFlashStatus: function (a) {
            this.status.seekPercent = a.seekPercent;
            this.status.currentPercentRelative = a.currentPercentRelative;
            this.status.currentPercentAbsolute = a.currentPercentAbsolute;
            this.status.currentTime = a.currentTime;
            this.status.duration = a.duration;
            this.status.videoWidth = a.videoWidth;
            this.status.videoHeight = a.videoHeight;
            this.status.readyState = 4;
            this.status.networkState = 0;
            this.status.playbackRate = 1;
            this.status.ended = !1
        },
        _updateButtons: function (a) {
            a !== d && (this.status.paused = !a, this.css.jq.play.length && this.css.jq.pause.length && (a ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide())));
            this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide()));
            this.css.jq.repeat.length && this.css.jq.repeatOff.length &&
            (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
        },
        _updateInterface: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
            this.css.jq.playBar.length && this.css.jq.playBar.width(this.status.currentPercentRelative + "%");
            this.css.jq.currentTime.length && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime));
            this.css.jq.duration.length && this.css.jq.duration.text(this._convertTime(this.status.duration))
        },
        _convertTime: k.prototype.time,
        _seeking: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },
        _seeked: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },
        _resetGate: function () {
            this.html.audio.gate = !1;
            this.html.video.gate = !1;
            this.flash.gate = !1
        },
        _resetActive: function () {
            this.html.active = !1;
            this.flash.active = !1
        },
        setMedia: function (a) {
            var c = this, e = !1, d = this.status.media.poster !== a.poster;
            this._resetMedia();
            this._resetGate();
            this._resetActive();
            b.each(this.formats, function (d, g) {
                var f = "video" === c.format[g].media;
                b.each(c.solutions, function (b, d) {
                    if (c[d].support[g] && c._validString(a[g])) {
                        var k = "html" === d;
                        f ? (k ? (c.html.video.gate = !0, c._html_setVideo(a), c.html.active = !0) : (c.flash.gate = !0, c._flash_setVideo(a), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.show(), c.status.video = !0) : (k ? (c.html.audio.gate = !0, c._html_setAudio(a), c.html.active = !0) : (c.flash.gate = !0, c._flash_setAudio(a), c.flash.active = !0), c.css.jq.videoPlay.length &&
                        c.css.jq.videoPlay.hide(), c.status.video = !1);
                        e = !0;
                        return !1
                    }
                });
                if (e)return !1
            });
            e ? (this.status.nativeVideoControls && this.html.video.gate || !this._validString(a.poster) || (d ? this.htmlElement.poster.src = a.poster : this.internal.poster.jq.show()), this.status.srcSet = !0, this.status.media = b.extend({}, a), this._updateButtons(!1), this._updateInterface()) : this._error({
                type: b.jPlayer.error.NO_SUPPORT,
                context: "{supplied:'" + this.options.supplied + "'}",
                message: b.jPlayer.errorMsg.NO_SUPPORT,
                hint: b.jPlayer.errorHint.NO_SUPPORT
            })
        },
        _resetMedia: function () {
            this._resetStatus();
            this._updateButtons(!1);
            this._updateInterface();
            this._seeked();
            this.internal.poster.jq.hide();
            clearTimeout(this.internal.htmlDlyCmdId);
            this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function () {
            this._resetMedia();
            this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia();
            this._resetGate();
            this._resetActive()
        },
        load: function () {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active &&
            this._flash_load() : this._urlNotSetError("load")
        },
        focus: function () {
            this.options.keyEnabled && (b.jPlayer.focus = this)
        },
        play: function (a) {
            a = "number" === typeof a ? a : NaN;
            this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(a) : this.flash.active && this._flash_play(a)) : this._urlNotSetError("play")
        },
        videoPlay: function () {
            this.play()
        },
        pause: function (a) {
            a = "number" === typeof a ? a : NaN;
            this.status.srcSet ? this.html.active ? this._html_pause(a) : this.flash.active && this._flash_pause(a) : this._urlNotSetError("pause")
        },
        pauseOthers: function () {
            var a = this;
            b.each(this.instances, function (b, d) {
                a.element !== d && d.data("jPlayer").status.srcSet && d.jPlayer("pause")
            })
        },
        stop: function () {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function (a) {
            a = this._limitValue(a, 0, 100);
            this.status.srcSet ? this.html.active ? this._html_playHead(a) : this.flash.active && this._flash_playHead(a) : this._urlNotSetError("playHead")
        },
        _muted: function (a) {
            this.options.muted =
                a;
            this.html.used && this._html_mute(a);
            this.flash.used && this._flash_mute(a);
            this.html.video.gate || this.html.audio.gate || (this._updateMute(a), this._updateVolume(this.options.volume), this._trigger(b.jPlayer.event.volumechange))
        },
        mute: function (a) {
            a = a === d ? !0 : !!a;
            this._muted(a)
        },
        unmute: function (a) {
            a = a === d ? !0 : !!a;
            this._muted(!a)
        },
        _updateMute: function (a) {
            a === d && (a = this.options.muted);
            this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) :
                a ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
        },
        volume: function (a) {
            a = this._limitValue(a, 0, 1);
            this.options.volume = a;
            this.html.used && this._html_volume(a);
            this.flash.used && this._flash_volume(a);
            this.html.video.gate || this.html.audio.gate || (this._updateVolume(a), this._trigger(b.jPlayer.event.volumechange))
        },
        volumeBar: function (a) {
            if (this.css.jq.volumeBar.length) {
                var b = this.css.jq.volumeBar.offset(), d = a.pageX - b.left, g = this.css.jq.volumeBar.width();
                a = this.css.jq.volumeBar.height() - a.pageY + b.top;
                b = this.css.jq.volumeBar.height();
                this.options.verticalVolume ? this.volume(a / b) : this.volume(d / g)
            }
            this.options.muted && this._muted(!1)
        },
        volumeBarValue: function (a) {
            this.volumeBar(a)
        },
        _updateVolume: function (a) {
            a === d && (a = this.options.volume);
            a = this.options.muted ? 0 : a;
            this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) :
                (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * a + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
        },
        volumeMax: function () {
            this.volume(1);
            this.options.muted && this._muted(!1)
        },
        _cssSelectorAncestor: function (a) {
            var c = this;
            this.options.cssSelectorAncestor = a;
            this._removeUiClass();
            this.ancestorJq = a ? b(a) : [];
            a && 1 !== this.ancestorJq.length &&
            this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: a,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
            });
            this._addUiClass();
            b.each(this.options.cssSelector, function (a, b) {
                c._cssSelector(a, b)
            })
        },
        _cssSelector: function (a, c) {
            var d = this;
            "string" === typeof c ? b.jPlayer.prototype.options.cssSelector[a] ? (this.css.jq[a] && this.css.jq[a].length && this.css.jq[a].unbind(".jPlayer"), this.options.cssSelector[a] =
                c, this.css.cs[a] = this.options.cssSelectorAncestor + " " + c, this.css.jq[a] = c ? b(this.css.cs[a]) : [], this.css.jq[a].length && this.css.jq[a].bind("click.jPlayer", function (c) {
                d[a](c);
                b(this).blur();
                return !1
            }), c && 1 !== this.css.jq[a].length && this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: this.css.cs[a],
                message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[a].length + " found for " + a + " method.",
                hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
            })) : this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_METHOD,
                context: a,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                hint: b.jPlayer.warningHint.CSS_SELECTOR_METHOD
            }) : this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_STRING,
                context: c,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                hint: b.jPlayer.warningHint.CSS_SELECTOR_STRING
            })
        },
        seekBar: function (a) {
            if (this.css.jq.seekBar) {
                var b = this.css.jq.seekBar.offset();
                a = a.pageX - b.left;
                b = this.css.jq.seekBar.width();
                this.playHead(100 * a / b)
            }
        },
        playBar: function (a) {
            this.seekBar(a)
        },
        repeat: function () {
            this._loop(!0)
        },
        repeatOff: function () {
            this._loop(!1)
        },
        _loop: function (a) {
            this.options.loop !== a && (this.options.loop = a, this._updateButtons(), this._trigger(b.jPlayer.event.repeat))
        },
        currentTime: function () {
        },
        duration: function () {
        },
        gui: function () {
        },
        noSolution: function () {
        },
        option: function (a, c) {
            var e = a;
            if (0 === arguments.length)return b.extend(!0, {}, this.options);
            if ("string" === typeof a) {
                var g = a.split(".");
                if (c === d) {
                    for (var e = b.extend(!0, {}, this.options), f = 0; f < g.length; f++)if (e[g[f]] !== d)e = e[g[f]]; else return this._warning({
                        type: b.jPlayer.warning.OPTION_KEY, context: a,
                        message: b.jPlayer.warningMsg.OPTION_KEY, hint: b.jPlayer.warningHint.OPTION_KEY
                    }), d;
                    return e
                }
                for (var f = e = {}, h = 0; h < g.length; h++)h < g.length - 1 ? (f[g[h]] = {}, f = f[g[h]]) : f[g[h]] = c
            }
            this._setOptions(e);
            return this
        },
        _setOptions: function (a) {
            var c = this;
            b.each(a, function (a, b) {
                c._setOption(a, b)
            });
            return this
        },
        _setOption: function (a, c) {
            var d = this;
            switch (a) {
                case "volume":
                    this.volume(c);
                    break;
                case "muted":
                    this._muted(c);
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(c);
                    break;
                case "cssSelector":
                    b.each(c, function (a,
                                        b) {
                        d._cssSelector(a, b)
                    });
                    break;
                case "fullScreen":
                    if (this.options[a] !== c) {
                        var f = b.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                        if (!f || f && !this.status.waitForPlay)f || (this.options[a] = c), c ? this._requestFullscreen() : this._exitFullscreen(), f || this._setOption("fullWindow", c)
                    }
                    break;
                case "fullWindow":
                    this.options[a] !== c && (this._removeUiClass(), this.options[a] = c, this._refreshSize());
                    break;
                case "size":
                    this.options.fullWindow || this.options[a].cssClass === c.cssClass || this._removeUiClass();
                    this.options[a] =
                        b.extend({}, this.options[a], c);
                    this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullWindow && this.options[a].cssClass !== c.cssClass && this._removeUiClass();
                    this.options[a] = b.extend({}, this.options[a], c);
                    this._refreshSize();
                    break;
                case "autohide":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this._updateAutohide();
                    break;
                case "loop":
                    this._loop(c);
                    break;
                case "nativeVideoControls":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this._restrictNativeVideoControls();
                    this._updateNativeVideoControls();
                    break;
                case "noFullWindow":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
                    this._restrictNativeVideoControls();
                    this._updateButtons();
                    break;
                case "noVolume":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.noVolume = this._uaBlocklist(this.options.noVolume);
                    this._updateVolume();
                    this._updateMute();
                    break;
                case "emulateHtml":
                    this.options[a] !== c && ((this.options[a] = c) ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                    break;
                case "timeFormat":
                    this.options[a] = b.extend({}, this.options[a], c);
                    break;
                case "keyEnabled":
                    this.options[a] = c;
                    c || this !== b.jPlayer.focus || (b.jPlayer.focus = null);
                    break;
                case "keyBindings":
                    this.options[a] = b.extend(!0, {}, this.options[a], c);
                    break;
                case "audioFullScreen":
                    this.options[a] = c
            }
            return this
        },
        _refreshSize: function () {
            this._setSize();
            this._addUiClass();
            this._updateSize();
            this._updateButtons();
            this._updateAutohide();
            this._trigger(b.jPlayer.event.resize)
        },
        _setSize: function () {
            this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass);
            this.element.css({width: this.status.width, height: this.status.height})
        },
        _addUiClass: function () {
            this.ancestorJq.length &&
            this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function () {
            this.internal.poster.jq.css({width: this.status.width, height: this.status.height});
            !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && this.flash.active &&
            this.status.video && this.internal.flash.jq.css({width: this.status.width, height: this.status.height})
        },
        _updateAutohide: function () {
            var a = this, b = function () {
                a.css.jq.gui.fadeIn(a.options.autohide.fadeIn, function () {
                    clearTimeout(a.internal.autohideId);
                    a.internal.autohideId = setTimeout(function () {
                        a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)
                    }, a.options.autohide.hold)
                })
            };
            this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(".jPlayerAutohide"), this.css.jq.gui.unbind(".jPlayerAutohide"),
                this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind("mousemove.jPlayer.jPlayerAutohide", b), this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", b), this.css.jq.gui.hide()) : this.css.jq.gui.show())
        },
        fullScreen: function () {
            this._setOption("fullScreen", !0)
        },
        restoreScreen: function () {
            this._setOption("fullScreen", !1)
        },
        _fullscreenAddEventListeners: function () {
            var a = this, c = b.jPlayer.nativeFeatures.fullscreen;
            c.api.fullscreenEnabled && c.event.fullscreenchange && ("function" !== typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function () {
                a._fullscreenchange()
            }), document.addEventListener(c.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
        },
        _fullscreenRemoveEventListeners: function () {
            var a = b.jPlayer.nativeFeatures.fullscreen;
            this.internal.fullscreenchangeHandler && document.addEventListener(a.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
        },
        _fullscreenchange: function () {
            this.options.fullScreen && !b.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
        },
        _requestFullscreen: function () {
            var a = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0], c = b.jPlayer.nativeFeatures.fullscreen;
            c.used.webkitVideo && (a = this.htmlElement.video);
            c.api.fullscreenEnabled && c.api.requestFullscreen(a)
        },
        _exitFullscreen: function () {
            var a = b.jPlayer.nativeFeatures.fullscreen, c;
            a.used.webkitVideo && (c = this.htmlElement.video);
            a.api.fullscreenEnabled && a.api.exitFullscreen(c)
        },
        _html_initMedia: function (a) {
            var c =
                b(this.htmlElement.media).empty();
            b.each(a.track || [], function (a, b) {
                var d = document.createElement("track");
                d.setAttribute("kind", b.kind ? b.kind : "");
                d.setAttribute("src", b.src ? b.src : "");
                d.setAttribute("srclang", b.srclang ? b.srclang : "");
                d.setAttribute("label", b.label ? b.label : "");
                b.def && d.setAttribute("default", b.def);
                c.append(d)
            });
            this.htmlElement.media.src = this.status.src;
            "none" !== this.options.preload && this._html_load();
            this._trigger(b.jPlayer.event.timeupdate)
        },
        _html_setFormat: function (a) {
            var c = this;
            b.each(this.formats, function (b, d) {
                if (c.html.support[d] && a[d])return c.status.src = a[d], c.status.format[d] = !0, c.status.formatType = d, !1
            })
        },
        _html_setAudio: function (a) {
            this._html_setFormat(a);
            this.htmlElement.media = this.htmlElement.audio;
            this._html_initMedia(a)
        },
        _html_setVideo: function (a) {
            this._html_setFormat(a);
            this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(a.poster) ? a.poster : "");
            this.htmlElement.media = this.htmlElement.video;
            this._html_initMedia(a)
        },
        _html_resetMedia: function () {
            this.htmlElement.media &&
            (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.htmlElement.media.pause())
        },
        _html_clearMedia: function () {
            this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
        },
        _html_load: function () {
            if (this.status.waitForLoad) {
                this.status.waitForLoad = !1;
                try {
                    this.htmlElement.media.load()
                } catch (a) {
                    var b = /Android/i.test(navigator.userAgent);
                    if (a.code != DOMException.INVALID_STATE_ERR || !b)throw a;
                }
            }
            clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function (a) {
            var b = this, d = this.htmlElement.media;
            this._html_load();
            if (isNaN(a))d.play(); else {
                this.internal.cmdsIgnored && d.play();
                try {
                    if (!d.seekable || "object" === typeof d.seekable && 0 < d.seekable.length)d.currentTime = a, d.play(); else throw 1;
                } catch (f) {
                    this.internal.htmlDlyCmdId = setTimeout(function () {
                        b.play(a)
                    }, 250);
                    return
                }
            }
            this._html_checkWaitForPlay()
        },
        _html_pause: function (a) {
            var b = this, d = this.htmlElement.media;
            0 < a ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
            d.pause();
            if (!isNaN(a))try {
                if (!d.seekable || "object" === typeof d.seekable && 0 < d.seekable.length)d.currentTime = a; else throw 1;
            } catch (f) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    b.pause(a)
                }, 250);
                return
            }
            0 < a && this._html_checkWaitForPlay()
        },
        _html_playHead: function (a) {
            var b = this, d = this.htmlElement.media;
            this._html_load();
            try {
                if ("object" === typeof d.seekable && 0 < d.seekable.length)d.currentTime = a * d.seekable.end(d.seekable.length - 1) / 100; else if (0 < d.duration && !isNaN(d.duration))d.currentTime = a * d.duration /
                    100; else throw"e";
            } catch (f) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    b.playHead(a)
                }, 250);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function () {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _html_volume: function (a) {
            this.html.audio.available && (this.htmlElement.audio.volume =
                a);
            this.html.video.available && (this.htmlElement.video.volume = a)
        },
        _html_mute: function (a) {
            this.html.audio.available && (this.htmlElement.audio.muted = a);
            this.html.video.available && (this.htmlElement.video.muted = a)
        },
        _flash_setAudio: function (a) {
            var c = this;
            try {
                b.each(this.formats, function (b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                            case "m4a":
                            case "fla":
                                c._getMovie().fl_setAudio_m4a(a[d]);
                                break;
                            case "mp3":
                                c._getMovie().fl_setAudio_mp3(a[d]);
                                break;
                            case "rtmpa":
                                c._getMovie().fl_setAudio_rtmp(a[d])
                        }
                        c.status.src =
                            a[d];
                        c.status.format[d] = !0;
                        c.status.formatType = d;
                        return !1
                    }
                }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_setVideo: function (a) {
            var c = this;
            try {
                b.each(this.formats, function (b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                            case "m4v":
                            case "flv":
                                c._getMovie().fl_setVideo_m4v(a[d]);
                                break;
                            case "rtmpv":
                                c._getMovie().fl_setVideo_rtmp(a[d])
                        }
                        c.status.src = a[d];
                        c.status.format[d] = !0;
                        c.status.formatType = d;
                        return !1
                    }
                }), "auto" === this.options.preload &&
                (this._flash_load(), this.status.waitForLoad = !1)
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_resetMedia: function () {
            this.internal.flash.jq.css({width: "0px", height: "0px"});
            this._flash_pause(NaN)
        },
        _flash_clearMedia: function () {
            try {
                this._getMovie().fl_clearMedia()
            } catch (a) {
                this._flashError(a)
            }
        },
        _flash_load: function () {
            try {
                this._getMovie().fl_load()
            } catch (a) {
                this._flashError(a)
            }
            this.status.waitForLoad = !1
        },
        _flash_play: function (a) {
            try {
                this._getMovie().fl_play(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad = !1;
            this._flash_checkWaitForPlay()
        },
        _flash_pause: function (a) {
            try {
                this._getMovie().fl_pause(a)
            } catch (b) {
                this._flashError(b)
            }
            0 < a && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
        },
        _flash_playHead: function (a) {
            try {
                this._getMovie().fl_play_head(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function () {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video &&
            (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _flash_volume: function (a) {
            try {
                this._getMovie().fl_volume(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _flash_mute: function (a) {
            try {
                this._getMovie().fl_mute(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _getMovie: function () {
            return document[this.internal.flash.id]
        },
        _getFlashPluginVersion: function () {
            var a = 0, b;
            if (window.ActiveXObject)try {
                if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                    var d = b.GetVariable("$version");
                    d && (d = d.split(" ")[1].split(","), a = parseInt(d[0], 10) + "." + parseInt(d[1], 10))
                }
            } catch (f) {
            } else navigator.plugins && 0 < navigator.mimeTypes.length && (b = navigator.plugins["Shockwave Flash"]) && (a = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"));
            return 1 * a
        },
        _checkForFlash: function (a) {
            var b = !1;
            this._getFlashPluginVersion() >= a && (b = !0);
            return b
        },
        _validString: function (a) {
            return a && "string" === typeof a
        },
        _limitValue: function (a, b, d) {
            return a < b ? b : a > d ? d : a
        },
        _urlNotSetError: function (a) {
            this._error({
                type: b.jPlayer.error.URL_NOT_SET,
                context: a, message: b.jPlayer.errorMsg.URL_NOT_SET, hint: b.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function (a) {
            var c;
            c = this.internal.ready ? "FLASH_DISABLED" : "FLASH";
            this._error({
                type: b.jPlayer.error[c],
                context: this.internal.flash.swf,
                message: b.jPlayer.errorMsg[c] + a.message,
                hint: b.jPlayer.errorHint[c]
            });
            this.internal.flash.jq.css({width: "1px", height: "1px"})
        },
        _error: function (a) {
            this._trigger(b.jPlayer.event.error, a);
            this.options.errorAlerts && this._alert("Error!" + (a.message ? "\n\n" + a.message : "") + (a.hint ?
                "\n\n" + a.hint : "") + "\n\nContext: " + a.context)
        },
        _warning: function (a) {
            this._trigger(b.jPlayer.event.warning, d, a);
            this.options.warningAlerts && this._alert("Warning!" + (a.message ? "\n\n" + a.message : "") + (a.hint ? "\n\n" + a.hint : "") + "\n\nContext: " + a.context)
        },
        _alert: function (a) {
            alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a)
        },
        _emulateHtmlBridge: function () {
            var a = this;
            b.each(b.jPlayer.emulateMethods.split(/\s+/g), function (b, d) {
                a.internal.domNode[d] = function (b) {
                    a[d](b)
                }
            });
            b.each(b.jPlayer.event,
                function (c, d) {
                    var f = !0;
                    b.each(b.jPlayer.reservedEvent.split(/\s+/g), function (a, b) {
                        if (b === c)return f = !1
                    });
                    f && a.element.bind(d + ".jPlayer.jPlayerHtml", function () {
                        a._emulateHtmlUpdate();
                        var b = document.createEvent("Event");
                        b.initEvent(c, !1, !0);
                        a.internal.domNode.dispatchEvent(b)
                    })
                })
        },
        _emulateHtmlUpdate: function () {
            var a = this;
            b.each(b.jPlayer.emulateStatus.split(/\s+/g), function (b, d) {
                a.internal.domNode[d] = a.status[d]
            });
            b.each(b.jPlayer.emulateOptions.split(/\s+/g), function (b, d) {
                a.internal.domNode[d] = a.options[d]
            })
        },
        _destroyHtmlBridge: function () {
            var a = this;
            this.element.unbind(".jPlayerHtml");
            b.each((b.jPlayer.emulateMethods + " " + b.jPlayer.emulateStatus + " " + b.jPlayer.emulateOptions).split(/\s+/g), function (b, d) {
                delete a.internal.domNode[d]
            })
        }
    };
    b.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    };
    b.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + b.jPlayer.prototype.version.script +
        " needs Jplayer.swf version " + b.jPlayer.prototype.version.needFlash + " but found "
    };
    b.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    };
    b.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    };
    b.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    };
    b.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
});
var nofixbrowsers = /chrome|opera|ucbrowser|firefox/.test(navigator.userAgent.toLowerCase()), FixAndroid = $.jPlayer.platform.android;
nofixbrowsers && (FixAndroid = !1);
var jPlayerAndroidFix = function (b) {
    var d = function (b, d, m) {
        this.playFix = !1;
        this.init(b, d, m)
    };
    d.prototype = {
        init: function (d, f, m) {
            var n = this;
            this.id = d;
            this.media = f;
            this.options = m;
            this.player = b(this.id);
            this.player.bind(b.jPlayer.event.ready, function (a) {
                a.jPlayer.flash.used && (FixAndroid = !1);
                n.setMedia(n.media);
                autoPlay && n.play()
            });
            FixAndroid && (this.player.bind(b.jPlayer.event.progress, function (a) {
                n.playFixRequired && (n.playFixRequired = !1, n.playFix && (n.playFix = !1, b(this).jPlayer("play")))
            }), this.player.bind(b.jPlayer.event.ended,
                function (a) {
                    n.endedFix && (n.endedFix = !1, setTimeout(function () {
                        n.setMedia(n.media)
                    }, 0))
                }), this.player.bind(b.jPlayer.event.pause, function (a) {
                if (n.endedFix) {
                    var c = a.jPlayer.status.duration - a.jPlayer.status.currentTime;
                    (0 === a.jPlayer.status.currentTime || 1 > c) && setTimeout(function () {
                        n.jPlayer._trigger(b.jPlayer.event.ended)
                    }, 0)
                }
            }));
            this.player.jPlayer(this.options);
            this.jPlayer = this.player.data("jPlayer");
            this.cssSelectorAncestor = this.player.jPlayer("option", "cssSelectorAncestor");
            this.resetAndroid();
            return this
        },
        setMedia: function (b) {
            this.media = b;
            this.resetAndroid();
            this.player.jPlayer("setMedia", this.media);
            return this
        }, play: function () {
            FixAndroid && this.playFixRequired ? this.playFix = !0 : this.player.jPlayer("play")
        }, resetAndroid: function () {
            FixAndroid && (this.playFix = !1, this.endedFix = this.playFixRequired = !0)
        }
    };
    return d
}(jQuery);
var InitClick = !0, ChromeFix = !1, IsChrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
(function (b) {
    b.fn.scrollToTop = function (d) {
        var k = {speed: 500};
        d && b.extend(k, {speed: d});
        return this.each(function () {
            var d = b(this);
            b(window).scroll(function () {
                100 < b(this).scrollTop() && !ChromeFix ? d.fadeIn() : (d.fadeOut(), setTimeout(function () {
                    ChromeFix = !1
                }, 100))
            });
            InitClick ? (d.click(function (d) {
                d.preventDefault();
                b("body, html").animate({scrollTop: 0}, k.speed)
            }), InitClick = !1) : IsChrome && (ChromeFix = !0)
        })
    }
})(jQuery);

