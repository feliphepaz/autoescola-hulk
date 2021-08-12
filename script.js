!(function (t) {
  var e = {};
  function i(s) {
    if (e[s]) return e[s].exports;
    var n = (e[s] = { i: s, l: !1, exports: {} });
    return t[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, s) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          i.d(
            s,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return s;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 2));
})([
  function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return s;
    });
    class s {
      constructor(t, e) {
        (this.slide = document.querySelector(t)),
          (this.wrapper = document.querySelector(e)),
          (this.dist = { finalPosition: 0, startX: 0, movement: 0 }),
          (this.activeClass = "active"),
          (this.changeEvent = new Event("changeEvent"));
      }
      transition(t) {
        this.slide.style.transition = t ? "transform .3s" : "";
      }
      moveSlide(t) {
        (this.dist.movePosition = t),
          (this.slide.style.transform = `translate3d(${t}px, 0, 0)`);
      }
      updatePosition(t) {
        return (
          (this.dist.movement = 1.6 * (this.dist.startX - t)),
          this.dist.finalPosition - this.dist.movement
        );
      }
      onStart(t) {
        let e;
        "mousedown" === t.type
          ? (t.preventDefault(),
            (this.dist.startX = t.clientX),
            (e = "mousemove"))
          : ((this.dist.startX = t.changedTouches[0].clientX),
            (e = "touchmove")),
          this.wrapper.addEventListener(e, this.onMove),
          this.transition(!1);
      }
      onMove(t) {
        const e =
            "mousemove" === t.type ? t.clientX : t.changedTouches[0].clientX,
          i = this.updatePosition(e);
        this.moveSlide(i);
      }
      onEnd(t) {
        const e = "mouseup" === t.type ? "mousemove" : "touchmove";
        this.wrapper.removeEventListener(e, this.onMove),
          (this.dist.finalPosition = this.dist.movePosition),
          this.transition(!0),
          this.changeSlideOnEnd();
      }
      changeSlideOnEnd() {
        this.dist.movement > 120 && void 0 !== this.index.next
          ? this.activeNextSlide()
          : this.dist.movement < -120 && void 0 !== this.index.prev
          ? this.activePrevSlide()
          : this.changeSlide(this.index.active);
      }
      addSlideEvents() {
        this.wrapper.addEventListener("mousedown", this.onStart),
          this.wrapper.addEventListener("touchstart", this.onStart),
          this.wrapper.addEventListener("mouseup", this.onEnd),
          this.wrapper.addEventListener("touchend", this.onEnd);
      }
      slidePosition(t) {
        const e = (this.wrapper.offsetWidth - t.offsetWidth) / 2;
        return -(t.offsetLeft - e);
      }
      slidesConfig() {
        this.slideArray = [...this.slide.children].map((t) => ({
          position: this.slidePosition(t),
          element: t,
        }));
      }
      slidesIndexNav(t) {
        const e = this.slideArray.length - 1;
        this.index = {
          prev: t ? t - 1 : void 0,
          active: t,
          next: t === e ? void 0 : t + 1,
        };
      }
      changeSlide(t) {
        const e = this.slideArray[t];
        this.moveSlide(e.position),
          this.slidesIndexNav(t),
          (this.dist.finalPosition = e.position),
          this.changeActiveClass(),
          this.wrapper.dispatchEvent(this.changeEvent);
      }
      changeActiveClass() {
        this.slideArray.forEach((t) =>
          t.element.classList.remove(this.activeClass)
        ),
          this.slideArray[this.index.active].element.classList.add(
            this.activeClass
          );
      }
      activePrevSlide() {
        void 0 !== this.index.prev && this.changeSlide(this.index.prev);
      }
      activeNextSlide() {
        void 0 !== this.index.next && this.changeSlide(this.index.next);
      }
      onResize() {
        setTimeout(() => {
          this.slidesConfig(), this.changeSlide(this.index.active);
        }, 1e3);
      }
      addResizeEvent() {
        window.addEventListener("resize", this.onResize);
      }
      bindEvents() {
        (this.onStart = this.onStart.bind(this)),
          (this.onMove = this.onMove.bind(this)),
          (this.onEnd = this.onEnd.bind(this)),
          (this.activePrevSlide = this.activePrevSlide.bind(this)),
          (this.activeNextSlide = this.activeNextSlide.bind(this)),
          (this.onResize = (function (t, e) {
            let i;
            return (...s) => {
              i && clearTimeout(i),
                (i = setTimeout(() => {
                  t(...s), (i = null);
                }, e));
            };
          })(this.onResize.bind(this), 200));
      }
      init() {
        return (
          this.slide &&
            (this.bindEvents(),
            this.transition(!0),
            this.addSlideEvents(),
            this.slidesConfig(),
            this.addResizeEvent(),
            this.changeSlide(0)),
          this
        );
      }
    }
  },
  function (t, e, i) {},
  function (t, e, i) {
    "use strict";
    i.r(e);
    i(1);
    var s = i(0);
    window.Slide = s.a;
  },
]);

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slidesInsta = document.querySelectorAll(".slide-insta li");
const linksInsta = document.querySelectorAll(".slide-insta li a");
const imgsInsta = document.querySelectorAll(".slide-insta li a img");
const textInsta = document.querySelectorAll(".slide-insta li p");

next.addEventListener("click", adv);
prev.addEventListener("click", bck);

const slidesQtd = slidesInsta.length - 1;

let i = 0;

function adv() {
  if (i < slidesQtd) {
    i = i + 1;
  } else {
    i = 0;
  }
  slidesInsta.forEach((slide) => {
    slide.style.display = "none";
  });
  slidesInsta[i].style.display = "block";
}

function bck() {
  i = i - 1;
  if (i < 0) {
    i = slidesQtd;
  }
  slidesInsta.forEach((slide) => {
    slide.style.display = "none";
  });
  slidesInsta[i].style.display = "block";
}

const token =
  "IGQVJYZAU9yc1lKc3JVb2FtYS1nbTkyTFJ0bnB5cHdJTWhQNnpqN0lNSGlsMV9DWEphdWM0UVZAmbEs3N3JiejhaMGh5cWhqRlRmb01YYUNVQldXTnZALU0s2SHpRUEdXRjBPVGtpMFZAzVDlkMms3MXJaVwZDZD";

async function fetchInsta() {
  const response = await fetch(
    `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`
  );
  const resolve = await response.json();
  linksInsta.forEach((link, index) => {
    link.href = resolve.data[index].permalink;
  });
  imgsInsta.forEach((img, index) => {
    img.src = resolve.data[index].media_url;
  });
  textInsta.forEach((txt, index) => {
    txt.innerHTML = resolve.data[index].caption;
    if (txt.innerHTML.length > 200) {
      txt.innerHTML =
        txt.innerHTML.substring(0, 200) +
        ` <a class='link-post' href='${resolve.data[index].permalink}' target='_blank'>...Ver o post completo</a>`;
    }
    txt.innerHTML = txt.innerHTML.replace(
      /#(\w+)/g,
      `<a class='link-hash' href='https://www.instagram.com/explore/tags/$1' target='_blank'>$&</a>`
    );
  });
}

fetchInsta();
