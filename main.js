//navbar
var tl = gsap.timeline();

tl.from(".menu", {x:200, duration: 0.5, ease: "ease"});
tl.from(".logo", { x: -200 ,opacity:0.1, duration: 1, ease: "ease-in"});