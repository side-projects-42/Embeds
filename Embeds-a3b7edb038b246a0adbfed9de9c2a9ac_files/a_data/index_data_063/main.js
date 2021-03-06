!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 5));
})([
  function (e, t) {
    const n = {
      Corgi: "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
      "Australian Shepherd":
        "https://www.akc.org/dog-breeds/australian-shepherd/",
      Affenpinscher: "https://www.akc.org/dog-breeds/affenpinscher/",
      "American Staffordshire Terrier":
        "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
      Tosa: "https://www.akc.org/dog-breeds/tosa/",
      "Labrador Retriever":
        "https://www.akc.org/dog-breeds/labrador-retriever/",
      "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/",
    };
    (() => {
      const e = document.querySelector(".drop-down-dog-list");
      ((e) => {
        const t = [];
        return (
          Object.keys(e).forEach((n) => {
            const o = document.createElement("li"),
              r = document.createElement("a");
            (r.innerHTML = n),
              (r.href = e[n]),
              (o.classList = "dog-link"),
              o.appendChild(r),
              t.push(o);
          }),
          t
        );
      })(n).forEach((t) => e.appendChild(t));
    })();
    const o = document.querySelector(".drop-down-dog-nav");
    o.addEventListener("mouseenter", () => {
      document
        .querySelectorAll(".dog-link")
        .forEach((e) => e.classList.add("open"));
    }),
      o.addEventListener("mouseleave", () => {
        document
          .querySelectorAll(".dog-link")
          .forEach((e) => e.classList.remove("open"));
      });
  },
  function (e, t) {
    const n = document.querySelector(".add-todo-form"),
      o = document.querySelector(".todos"),
      r = JSON.parse(localStorage.getItem("todos")) || [],
      s = (e = [], t) => {
        t.innerHTML = e
          .map(
            (e, t) =>
              `\n        <li>\n          <input type="checkbox" data-index=${t} ${
                e.done ? "checked" : ""
              } />\n          <label for="item${t}">${
                e.text
              }</label>\n        </li>\n      `
          )
          .join("");
      };
    n.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = {
        text: document.querySelector("[name=add-todo]").value,
        done: !1,
      };
      r.push(t),
        s(r, o),
        localStorage.setItem("todos", JSON.stringify(r)),
        e.currentTarget.reset();
    }),
      o.addEventListener("click", function (e) {
        if (!e.target.matches("input")) return;
        const t = e.target.dataset.index;
        (r[t].done = !r[t].done),
          localStorage.setItem("todos", JSON.stringify(r)),
          s(r, o);
      }),
      s(r, o);
  },
  function (e, t) {
    const n = document.querySelectorAll(".slide");
    window.addEventListener(
      "scroll",
      (function (e, t = 20, n = !0) {
        let o;
        return function () {
          const r = this,
            s = arguments,
            i = n && !o;
          clearTimeout(o),
            (o = setTimeout(function () {
              (o = null), n || e.apply(r, s);
            }, t)),
            i && e.apply(r, s);
        };
      })(function (e) {
        n.forEach((e) => {
          const t = window.scrollY + window.innerHeight - e.height / 2,
            n = e.offsetTop + e.height,
            o = t > e.offsetTop,
            r = window.scrollY < n;
          o && r ? e.classList.add("active") : e.classList.remove("active");
        });
      })
    );
  },
  function (e, t) {
    const n = (e, t) => {
      let n = `http://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}`;
      n += "&APPID=f816d7f39052e3a98b21952097a43076";
      const o = new XMLHttpRequest();
      (o.onreadystatechange = () => {
        if (200 === o.status && o.readyState === XMLHttpRequest.DONE) {
          const e = JSON.parse(o.responseText),
            t = document.querySelector(".degrees"),
            n = e.name,
            r = 1.8 * (e.main.temp - 273.15) + 32;
          t.innerHTML = `The weather in ${n} is ${r.toFixed(1)} F`;
        }
      }),
        o.open("GET", n, !0),
        o.send();
    };
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition((e) => {
          const t = e.coords.latitude,
            o = e.coords.longitude;
          n(t, o);
        })
      : window.alert("Could not get location");
  },
  function (e, t) {
    const n = [];
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150")
      .then((e) => e.json())
      .then((e) => n.push(...e.results));
    const o = function () {
        const e = (function (e, t) {
          return t.filter((t) => {
            const n = new RegExp(e, "gi");
            return t.name.match(n);
          });
        })(this.value, n)
          .map(
            (e) =>
              `\n      <li>\n        <span class="name">${e.name}</span>\n      </li>\n    `
          )
          .join("");
        s.innerHTML = e;
      },
      r = document.querySelector(".search"),
      s = document.querySelector(".suggestions");
    r.addEventListener("change", o), r.addEventListener("keyup", o);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    const o = document.getElementById("party"),
      r = (e, t) => {
        t.children && Array.from(t.children).forEach((e) => t.removeChild(e));
        const n = document.createElement("p");
        (n.innerHTML = e), t.appendChild(n);
      };
    r("Welcome To the Pocket Project Marathon!", o);
    const s = document.getElementById("clock"),
      i = new (class {
        constructor() {
          const e = new Date();
          (this.hours = e.getHours()),
            (this.minutes = e.getMinutes()),
            (this.seconds = e.getSeconds()),
            r(this.printTime(), s),
            setInterval(this._tick.bind(this), 1e3);
        }
        printTime() {
          return [this.hours, this.minutes, this.seconds].join(":");
        }
        _tick() {
          this._incrementSeconds(), r(i.printTime(), s);
        }
        _incrementSeconds() {
          (this.seconds += 1),
            60 === this.seconds &&
              ((this.seconds = 0), this._incrementMinutes());
        }
        _incrementMinutes() {
          (this.minutes += 1),
            60 === this.minutes && ((this.minutes = 0), this._incrementHours());
        }
        _incrementHours() {
          this.hours = (this.hours + 1) % 24;
        }
      })();
    n(0), n(1), n(2), n(3), n(4);
  },
]);
