//function myFunction() {
//    var e = document.body.scrollTop || document.documentElement.scrollTop,
//        t = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//    document.getElementById("myBar").style.width = e / t * 100 + "%"
//}

function typeEffect(e, t) {
    var l = e.innerHTML;
    e.innerHTML = "";
    var o = 0,
        s = setInterval(function () {
            o < l.length ? (e.append(l.charAt(o)), o++) : clearInterval(s)
        }, t)
}! function () {
    "use strict";
    let e = (e, t = !1) => (e = e.trim(), t) ? [...document.querySelectorAll(e)] : document.querySelector(e),
        t = (t, l, o, s = !1) => {
            let i = e(l, s);
            i && (s ? i.forEach(e => e.addEventListener(t, o)) : i.addEventListener(t, o))
        },
        l = (e, t) => {
            e.addEventListener("scroll", t)
        },
        o = e("#navbar .scrollto", !0),
        s = () => {
            let t = window.scrollY + 200;
            o.forEach(l => {
                if (!l.hash) return;
                let o = e(l.hash);
                o && (t >= o.offsetTop && t <= o.offsetTop + o.offsetHeight ? l.classList.add("active") : l.classList.remove("active"))
            })
        };
    window.addEventListener("load", s), l(document, s);
    let i = t => {
            let l = e("#headers"),
                o = l.offsetHeight;
            l.classList.contains("header-scrolled") || (o -= 16);
            let s = e(t).offsetTop;
            window.scrollTo({
                top: s - o,
                behavior: "smooth"
            })
        },
        c = e("#headers");
    //    if (c) {
    //        let a = c.offsetTop,
    //            n = c.nextElementSibling,
    //            d = () => {
    //                a - window.scrollY <= 0 ? (c.classList.add("scrolle"), n.classList.add("scrolled-offset")) : (c.classList.remove("scrolle"), n.classList.remove("scrolled-offset"))
    //            };
    //        window.addEventListener("load", d), l(document, d)
    //    }
    let r = e(".back-to-top");
    if (r) {
        let f = () => {
            window.scrollY > 100 ? r.classList.add("active") : r.classList.remove("active")
        };
        window.addEventListener("load", f), l(document, f)
    }
    t("click", ".mobile-nav-toggle", function (t) {
        e("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x")
    }), t("click", ".navbar .dropdown > a", function (t) {
        e("#navbar").classList.contains("navbar-mobile") && (this.nextElementSibling.classList.toggle("dropdown-active"))
    }, !0), t("click", ".scrollto", function (t) {
        if (e(this.hash)) {
            let l = e("#navbar");
            if (l.classList.contains("navbar-mobile")) {
                l.classList.remove("navbar-mobile");
                let o = e(".mobile-nav-toggle");
                o.classList.toggle("bi-list"), o.classList.toggle("bi-x")
            }
            i(this.hash)
        }
    }, !0);
    let h = e("#preloader");
    h && window.addEventListener("load", () => {
        h.remove()
    })
}(),

$(document).ready(function () {
        -1 != window.location.href.indexOf("#lets_talk") && $("#lets_talk").modal("show")
    }),
    //  $(document).ready(function () {
    //    -1 != window.location.href.indexOf("#cs_wp-cpq1") && $("#cs_wp-cpq1").modal("show")
    //}), $(document).ready(function () {
    //    -1 != window.location.href.indexOf("#cs_aut") && $("#cs_aut").modal("show")
    //}), $(document).ready(function () {
    //    -1 != window.location.href.indexOf("#cs_smu") && $("#cs_smu").modal("show")
    //}), $(document).ready(function () {
    //    -1 != window.location.href.indexOf("#cs_mna") && $("#cs_mna").modal("show")
    //}), 
    $(".modalclose").click(function () {
        $("#lets_talk").modal("hide")
    }),
    //    $(".close").click(function () {
    //    $("#cs_wp-cpq1").modal("hide")
    //}), $(".close").click(function () {
    //    $("#cs_aut").modal("hide")
    //}), $(".close").click(function () {
    //    $("#cs_smu").modal("hide")
    //}), $(".close").click(function () {
    //    $("#cs_mna").modal("hide")
    //}), 
    //    $(document).ready(function () {
    //    var e = window.location.hash; - 1 != window.location.href.indexOf(e) && $(e).modal("show"), $(".close").click(function () {
    //        $(e).modal("hide")
    //    })
    //}), 
    //    window.onscroll = function () {
    //        myFunction()
    //    };
    //var speed = 75,
    //    h1 = document.querySelector(".bg-video-wrap h1"),
    //    p = document.querySelector(".bg-video-wrap p"),
    //    delay = h1.innerHTML.length * speed + speed;
    //typeEffect(h1, speed), setTimeout(function () {
    //    p.style.display = "inline-block", p.style.display = "inline-block", typeEffect(p, speed)
    //}, delay);

    $(window).on("scroll load", function() {
        if ($(this).scrollTop() > 50) {
            $('#headers').addClass('scrolle');
        } else {
            $('#headers').removeClass('scrolle');
        }
    })

//if ($(this).scrollTop() > 50) ($("#headers").hover(
//    function () {
//        $(this).addClass("scrolle");
//    }
//));
