var filters = {};
$((function () {
    $container = $(".filter-result"), createContent();
    var a = $("#filter-display");
    $container.isotope(), $("#options").on("change", (function (e) {
        manageCheckbox($(e.target));
        var t = getComboFilter(filters);
        $container.isotope({
            filter: t
        }), a.text(t)
    }))
}));
var data = {
    brands: "brand1 brand2 brand3 brand4".split(" "),
    productTypes: "type1 type2 type3 type4".split(" "),
    colors: "red blue yellow green".split(" "),
    sizes: "uk-size8 uk-size9 uk-size10 uk-size11".split(" ")
};

function createContent() {
    $container.append("")
}

function getComboFilter(a) {
    var e = 0,
        t = [],
        i = [];
    for (var r in a) {
        i.push(a[r].join(" "));
        var s = a[r];
        if (s.length) {
            if (0 === e) t = s.slice(0);
            else {
                for (var o = [], n = t.slice(0), l = 0, c = s.length; l < c; l++)
                    for (var d = 0, p = n.length; d < p; d++) o.push(n[d] + s[l]);
                t = o
            }
            e++
        }
    }
    return t.join(", ")
}

function manageCheckbox(a) {
    var e = a[0],
        t = a.parents(".option-set").attr("data-group"),
        i = filters[t];
    i || (i = filters[t] = []);
    var r = a.hasClass("all");
    r && (delete filters[t], e.checked || (e.checked = "checked"));
    var s = $.inArray(e.value, i);
    if (e.checked) {
        var o = r ? "input" : "input.all";
        a.siblings(o).removeAttr("checked"), r || -1 !== s || filters[t].push(e.value)
    } else r || (filters[t].splice(s, 1), a.siblings("[checked]").length || a.siblings("input.all").attr("checked", "checked"))
}
filters = {}, data = {
    brands: ["brand1", "brand2", "brand3", "brand4"],
    productTypes: ["alpha", "beta", "gamma", "delta"],
    colors: ["red", "blue", "green", "yellow"],
    sizes: ["size8", "size9", "size10", "size11"]
};
var $container = $("#container");

function clearGroup(a) {
    for (var e = a.length; e >= 0;) a.splice(e, 1), e--
}

function getComboFilter() {
    var a = [];
    for (var e in filters) {
        var t = filters[e];
        if (t.length)
            if (a.length) {
                for (var i = [], r = 0; r < a.length; r++)
                    for (var s = 0; s < t.length; s++) {
                        var o = a[r] + t[s];
                        i.push(o)
                    }
                a = i
            } else a = t.slice(0)
    }
    return a.join(", ")
}

function createContent() {
    for (var a = "", e = 0, t = data.brands.length; e < t; e++) {
        data.brands[e];
        for (var i = 0, r = data.productTypes.length; i < r; i++) {
            data.productTypes[i];
            for (var s = 0, o = data.colors.length; s < o; s++) {
                data.colors[s];
                for (var n = 0, l = data.sizes.length; n < l; n++) {
                    data.sizes[n];
                    a += ""
                }
            }
        }
    }
    $("#clear-filters").click((function () {
        clearAll()
    })), $container.append(a)
}

function enable_cb() {
    this.checked && ($(".isotope-pager").addClass("disabled"), $(".isotope-pager2").addClass("disabled"), $(".isotope-pager3").addClass("disabled"), $(".isotope-pager4").addClass("disabled"), $(".isotope-pager5").addClass("disabled")), $("#clear-filters").click((function () {
        $(".isotope-pager2").removeClass("disabled"), $(".isotope-pager3").removeClass("disabled"), $(".isotope-pager4").removeClass("disabled"), $(".isotope-pager5").removeClass("disabled")
    }))
}
createContent("Case Studies"), $container.isotope(), $(".options").on("change", (function (a) {
    var e = a.target,
        t = $(e).attr("value-group"),
        i = filters[t];
    if (i || (i = filters[t] = []), "" != a.target.value) {
        let e = a.target.selectedOptions;
        i.length && clearGroup(i);
        for (let a = 0; a < e.length; a++) i.includes(e[a].value) || i.push(e[a].value)
    } else clearGroup(i);
    var r = getComboFilter();
    $container.isotope({
        filter: r
    })
})), 
    $(document).ready((function () {
    var a = ".item",
        e = $("#container1");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 9), i = 1, r = 1, e.children(".item").each((function () {
            i > 9 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})), 
    $(document).ready((function () {
    var a = ".item",
        e = $("#container2");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager2";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager2 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})), 
    $(document).ready((function () {
    var a = ".item",
        e = $("#container3");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager3";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager3 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})), 
    $(document).ready((function () {
    var a = ".item",
        e = $("#container4");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager4";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager4 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})), 
    $(document).ready((function () {
    var a = ".item",
        e = $("#container5");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager5";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager5 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})), 
    $(document).ready((function () {
    var a = ".item",
        e = $("#container6");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager6";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager6 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})),
    $(document).ready((function () {
    var a = ".item",
        e = $("#container7");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager7";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager5 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})),
    $(document).ready((function () {
    var a = ".item",
        e = $("#container8");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager8";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager5 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})),
    $(document).ready((function () {
    var a = ".item",
        e = $("#container9");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager9";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager5 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})),
    $(document).ready((function () {
    var a = ".item",
        e = $("#container22");
    e.imagesLoaded((function () {
        e.isotope({
            itemSelector: a,
            masonry: {
                horizontalOrder: !0
            }
        })
    }));
    var t, i, r, s = 1,
        o = 1,
        n = "data-page",
        l = "isotope-pager9";

    function c(t) {
        var i = a;
        ! function (a) {
            e.isotope({
                filter: a
            })
        }(i += '[data-page="' + (o = t) + '"]')
    }
    t = e.children(a).length, Math.ceil(t / 3), i = 1, r = 1, e.children(".item").each((function () {
            i > 3 && (r++, i = 1), $(this).attr(n, r), i++
        })), s = r,
        function () {
            var a = 0 == $("." + l).length ? $('<div class="isotope-pager5 text-center"></div>') : $("." + l);
            a.html("");
            var t = $('<a type="button" class="btn btn-primary previous_btn"><i class="bi bi-arrow-left-short"></i></a>'),
                i = $('<a type="button" class="btn btn-primary next_btn"><i class="bi bi-arrow-right-short"></i></a>');
            t.appendTo(a);
            for (var r = 0; r < s; r++) {
                var d = $('<a href="javascript:void(0);" class="pager" data-page="' + (r + 1) + '"></a>');
                d.html(r + 1), d.click((function () {
                    var a = $(this).eq(0).attr(n);
                    $(".isotope-pager a").removeClass("active"), $(this).addClass("active"), c(a)
                })), d.appendTo(a), a.find("a.pager:first").addClass("active")
            }
            i.appendTo(a), e.after(a), t.click((function () {
                if (o > 1) {
                    $(".previous_btn").removeAttr("disabled");
                    var a = o - 1 < 1 ? 1 : o - 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".previous_btn").attr("disabled", "disabled")
            })), i.click((function () {
                if (o < s) {
                    var a = o + 1 > s ? s : o + 1;
                    $(".isotope-pager a").removeClass("active"), $('.pager[data-page="' + a + '"]').addClass("active"), c(a)
                } else $(".next_btn").attr("disabled", "disabled")
            }))
        }(), c(1)
})),    
    $((function () {
    enable_cb(), $(".filter-item").click(enable_cb)
}));
