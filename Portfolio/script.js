alert("Done")

// ==============================
// PORTFOLIO SCRIPT - PART 1
// ==============================

// AOS Animation
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// ==============================
// TYPING EFFECT
// ==============================

new Typed(".typing", {

    strings: [
        "Frontend Developer",
        "Python Developer",
        "Graphic Designer",
        "Freelancer"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});

// ==============================
// CUSTOM CURSOR
// ==============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// Grow cursor over clickable elements

document.querySelectorAll("a,button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.transform = "translate(-50%,-50%) scale(2)";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.transform = "translate(-50%,-50%) scale(1)";

    });

});

// ==============================
// SMOOTH NAVIGATION
// ==============================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", (e) => {

        e.preventDefault();

        const target = document.querySelector(anchor.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==============================
// ACTIVE NAVBAR LINK
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});

// Close menu after clicking

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});

// ==============================
// HERO IMAGE TILT
// ==============================

const heroImage = document.querySelector(".hero-right img");

document.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    let x = (window.innerWidth / 2 - e.clientX) / 40;

    let y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document.querySelectorAll(".btn,.btn-outline").forEach(button => {

    button.addEventListener("click", function (e) {

        let circle = document.createElement("span");

        circle.className = "ripple";

        this.appendChild(circle);

        let d = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = d + "px";
        circle.style.height = d + "px";

        let rect = this.getBoundingClientRect();

        circle.style.left = e.clientX - rect.left - d / 2 + "px";

        circle.style.top = e.clientY - rect.top - d / 2 + "px";

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

console.log("Portfolio JS Part 1 Loaded Successfully");

// =========================================
// PORTFOLIO SCRIPT - PART 2
// =========================================

// NAVBAR SCROLL EFFECT
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.3)";
        header.style.padding = "15px 8%";

    } else {

        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";
        header.style.padding = "20px 8%";

    }

});

// =========================================
// SCROLL PROGRESS BAR
// =========================================

const progress = document.createElement("div");

progress.id = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

// =========================================
// BACK TO TOP BUTTON
// =========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =========================================
// SKILL CARD ANIMATION
// =========================================

const skillCards = document.querySelectorAll(".skill");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: .25 });

skillCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(60px)";

    card.style.transition = ".7s";

    skillObserver.observe(card);

});

// =========================================
// PROJECT ANIMATION
// =========================================

const projects = document.querySelectorAll(".project");

projects.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(80px)";

    card.style.transition = `${0.6 + index * .2}s`;

});

const projectObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: .3 });

projects.forEach(card => {

    projectObserver.observe(card);

});

// =========================================
// FADE IN ALL SECTIONS
// =========================================

const allSections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: .15 });

allSections.forEach(sec => {

    sec.style.opacity = "0";

    sec.style.transform = "translateY(50px)";

    sec.style.transition = ".8s";

    sectionObserver.observe(sec);

});

console.log("Portfolio JS Part 2 Loaded");
// =====================================
// FINAL PREMIUM PART 3A
// =====================================

// ---------- LOADER ----------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 700);

    }

});

// ---------- DARK MODE ----------

const themeBtn = document.querySelector(".theme-toggle");

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light");

    if (themeBtn) {

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

}

themeBtn?.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

    }

});

// ---------- COUNTERS ----------

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const speed = Math.max(1, target / 100);

        const update = () => {

            current += speed;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

}, { threshold: .5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ---------- GSAP HERO ----------

if (typeof gsap !== "undefined") {

    gsap.from(".logo", {

        y: -40,

        opacity: 0,

        duration: 1

    });

    gsap.from("nav a", {

        y: -40,

        opacity: 0,

        stagger: .15,

        duration: 1,

        delay: .2

    });

    gsap.from(".hero-left h1", {

        x: -80,

        opacity: 0,

        duration: 1

    });

    gsap.from(".hero-left p", {

        x: -80,

        opacity: 0,

        delay: .3,

        duration: 1

    });

    gsap.from(".buttons", {

        y: 40,

        opacity: 0,

        delay: .6,

        duration: 1

    });

    gsap.from(".hero-right img", {

        scale: .5,

        opacity: 0,

        duration: 1.2

    });

}

// ---------- FLOATING IMAGE ----------

const profile = document.querySelector(".hero-right img");

if (profile) {

    let t = 0;

    setInterval(() => {

        t += 0.05;

        profile.style.transform = `translateY(${Math.sin(t) * 8}px)`;

    }, 30);

}

// ---------- CONTACT FORM ----------

const form = document.getElementById("contact-form");

form?.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

console.log("Premium Part 3A Loaded");
// =====================================
// FINAL PREMIUM PART 3B
// =====================================

// ---------- PARTICLES ----------
if (typeof particlesJS !== "undefined") {

    const particleContainer = document.createElement("div");

    particleContainer.id = "particles-js";

    document.body.prepend(particleContainer);

    particlesJS("particles-js", {

        particles: {
            number: {
                value: 60
            },

            color: {
                value: "#00d4ff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.35
            },

            size: {
                value: 3
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#00d4ff",
                opacity: 0.2,
                width: 1
            },

            move: {
                enable: true,
                speed: 2
            }

        },

        interactivity: {

            events: {

                onhover: {

                    enable: true,

                    mode: "grab"

                }

            }

        }

    });

}

// ---------- HERO PARALLAX ----------

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.backgroundPosition = `${x}px ${y}px`;

});

// ---------- SOCIAL ICON ANIMATION ----------

document.querySelectorAll(".socials a").forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-8px) rotate(8deg)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0) rotate(0deg)";

    });

});

// ---------- PROJECT CARD TILT ----------

document.querySelectorAll(".project").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 12;

        const rotateX = (0.5 - y / rect.height) * 12;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});

// ---------- BUTTON GLOW ----------

document.querySelectorAll(".btn,.btn-outline").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow =
            "0 0 35px rgba(0,212,255,.6)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "";

    });

});

// ---------- SCROLL TITLE ----------

window.addEventListener("blur", () => {

    document.title = "👋 Come Back!";

});

window.addEventListener("focus", () => {

    document.title = "Cre0vix | Frontend Developer";

});

// ---------- PERFORMANCE ----------

window.addEventListener("resize", () => {

    console.log("Layout Updated");

});

// ---------- END ----------

console.log("%cPortfolio Finished Successfully",
    "color:#00d4ff;font-size:20px;font-weight:bold;");