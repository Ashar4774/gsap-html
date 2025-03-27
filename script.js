
// GSAP for basic page
const tl = gsap.timeline();

tl.from("nav h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

tl.from("#links h4", {
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

if(string) {
    string.addEventListener("mousemove", (event) => {
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
}

// GSAP for custom cursor animation
var body = document.querySelector("body");
var cursor = document.querySelector("#cursor");

body.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
       x: event.x,
       y: event.y,
    });
})

// GSAP for timeline animation
var nav = document.querySelector("#nav i");
var close = document.querySelector("#menu i");

tl.to("#menu", {
    right: 0,
    duration: 0.71
})

tl.from("#menu h4", {
    x:150,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
})

tl.from("#menu i", {
    opacity: 0
})

tl.pause()

if(nav) {
    nav.addEventListener("click", () => {
        tl.play();
    })
}

if(close) {
    close.addEventListener("click", () => {
        tl.reverse();
    })
}

// GSAP for text animation

function splitText(){
    var h1_animate = document.querySelector("#h1-animate");
    var h1_animate_text = h1_animate.textContent;

    var h1_animate_split = h1_animate_text.split("");
    var h1_combine = "";

    var h1_len = Math.floor(h1_animate_split.length / 2);
    console.log(h1_len)
    h1_animate_split.forEach((value, index)=>{
        if(index < h1_len ){
            h1_combine += `<span class="firstHalf">${value}</span>`;
        } else {
            h1_combine += `<span class="secondHalf">${value}</span>`;
        }
    });

    h1_animate.innerHTML = h1_combine;
}

splitText();

gsap.from("#h1-animate .firstHalf", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
});

gsap.from("#h1-animate .secondHalf", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: -0.2
})

gsap.to("#body-text-animate #section2 h4", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#body-text-animate #section2",
        scroll: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true
    }
})
// gsap.to("#sec4 h1", {
//     transform: "translateX(-150%)",
//     scrollTrigger: {
//         trigger: "#sec4",
//         scroll: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: true,
//         pin: true
//     }
// })
