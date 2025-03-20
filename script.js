
// GSAP for basic page
const tl = gsap.timeline();

tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});

tl.from("#h1", {
    // opacity: 0,
    // scale: 0.2,
    duration: 1,
    y: -20,
    repeat: -1,
    yoyo: true
})

// GSAP for Scroll Trigger animation
gsap.from("#sec1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360
});

gsap.from("#sec2 #box", {
    scale: 0,
    duration: 2,
    rotate: 720,
    scrollTrigger: {
        trigger: "#sec2 #box",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
        pin: true
    }
});

gsap.to("#sec4 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#sec4",
        scroll: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true
    }
})

// GSAP for SVG Animation
var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (event)=>{
    initialPath = `M 10 100 Q ${event.x} ${event.y} 990 100`;

    gsap.to("svg path", {
        attr: {d: initialPath},
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 0.3,
        ease: "bounce.out"
    })
})