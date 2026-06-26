/* ==========================
   CUSTOM CURSOR
========================== */

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .glass-card, .service-card"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursor.style.width = "45px";
        cursor.style.height = "45px";
        cursor.style.background = "rgba(139,92,246,.18)";
        cursor.style.borderColor = "#8b5cf6";

    });

    element.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";
        cursor.style.background = "transparent";
        cursor.style.borderColor = "#ffffff";

    });

});


/* ==========================
   HEADER SCROLL
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.background = "rgba(0,0,0,.82)";
        header.style.backdropFilter = "blur(24px)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.08)";

    }else{

        header.style.background = "rgba(0,0,0,.28)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.04)";

    }

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(

    ".glass-card, .project-card, .service-card, .section-title, .contact-card"

);

const reveal = () => {

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/* ==========================
   HERO PARALLAX
========================== */

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    hero.style.transform = `translateY(${value * 0.25}px)`;

});


/* ==========================
   GRID PARALLAX
========================== */

const grid = document.getElementById("grid");

window.addEventListener("mousemove",(e)=>{

    const x = (e.clientX/window.innerWidth-.5)*20;

    const y = (e.clientY/window.innerHeight-.5)*20;

    grid.style.transform =
    `translate(${x}px,${y}px)`;

});


/* ==========================
   CARD GLOW
========================== */

const cards = document.querySelectorAll(

".project-card,.glass-card,.service-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

        `radial-gradient(circle at ${x}px ${y}px,
        rgba(139,92,246,.18),
        rgba(255,255,255,.03) 45%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.04)";

    });

});


/* ==========================
   HERO TYPING EFFECT
========================== */

const heroText = document.querySelector(".hero-small");

const words = [

"FULLSTACK DEVELOPER",

"WEB DESIGNER",

"MINECRAFT DEVELOPER",

"DISCORD BOT DEVELOPER"

];

let current = 0;

setInterval(()=>{

    heroText.style.opacity = 0;

    setTimeout(()=>{

        current++;

        if(current >= words.length){

            current = 0;

        }

        heroText.textContent = words[current];

        heroText.style.opacity = 1;

    },300);

},2500);


/* ==========================
   SMOOTH BUTTON EFFECT
========================== */

document.querySelectorAll("a").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});


/* ==========================
   FADE IN BODY
========================== */

document.body.style.opacity = "0";

window.onload = ()=>{

    document.body.style.transition = ".8s";

    document.body.style.opacity = "1";

};