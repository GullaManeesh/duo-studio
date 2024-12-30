let main = document.querySelector(".main");
let sec = document.querySelectorAll(".sec");

sec.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    cursor.style.width = "400px";
    cursor.style.height = "400px";
    cursor.style.borderRadius = "0px";
    let att = ele.getAttribute("data-image");
    cursor.style.backgroundImage = `url(${att})`;
    main.style.cursor = "none";
  });
  ele.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`;
    main.style.cursor = "";
  });
});

function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + 2 + "px";
  cursor.style.top = dets.y + 2 + "px";
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".digital",
    scroller: ".main",
    start: "top+=120% 25%",
    end: "top+=120% 0",
    scrub: 5,
  },
});

tl.to(
  ".digital",
  {
    x: -90,
  },
  "anim"
);

tl.to(
  ".brand",
  {
    x: 100,
  },
  "anim"
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top+=28% 90%",
    end: "top+=28% 0%",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: "white",
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    start: "top+=28% 90%",
    end: "top+=28% 0%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#0f0d0d",
});
