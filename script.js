/* =========================================================
   NEEHARIKA REDDY — PORTFOLIO INTERACTIONS
   Production-style vanilla JavaScript
   ========================================================= */


/* =========================================================
   01. PROJECT DATA
   ========================================================= */

const projects = {

    relay: {

        title: "Relay",

        subtitle:
            "Globally Scalable Intelligent URL Routing & Reliability Platform",

        category:
            "Distributed Systems · Backend Engineering",

        description:
            "Relay is an intelligent traffic-routing and reliability platform designed to route requests across backend services using health, latency, load and configurable routing policies.",

        stack: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "React",
            "Docker",
            "Prometheus",
            "Grafana",
            "Pytest",
            "Locust"
        ],

        features: [
            "Weighted, priority, least-load and latency-aware routing",
            "Active service health checks with automatic failover",
            "Redis-backed caching for low-latency route resolution",
            "PostgreSQL as the persistent route configuration store",
            "Circuit breaker and rate-limiting mechanisms",
            "Canary routing support for controlled traffic releases",
            "Prometheus and Grafana observability",
            "Load-aware routing and asynchronous background workers"
        ],

        architecture:
            "Client → Relay Router → Routing Policy → Redis Cache → Healthy Backend Services",

        github:
            "https://github.com/Neeharika0305"

    },


    campus: {

        title: "CampusInox",

        subtitle:
            "Smart Campus Issue Intelligence & Resolution Platform",

        category:
            "Full Stack · NLP · REST APIs",

        description:
            "CampusInox is a full-stack issue management platform that helps campus users report, track and resolve problems while using NLP-based similarity analysis to identify duplicates and prioritize issues.",

        stack: [
            "React",
            "Flask",
            "Python",
            "MySQL",
            "NLP",
            "JWT",
            "REST API"
        ],

        features: [
            "Role-based authentication using JWT",
            "Issue reporting and lifecycle management",
            "NLP similarity-based duplicate detection",
            "Intelligent issue priority analysis",
            "Admin and user workflows",
            "REST API based frontend/backend architecture",
            "Issue resolution analytics and dashboard"
        ],

        architecture:
            "React Client → Flask REST API → NLP Processing → MySQL",

        github:
            "https://github.com/Neeharika0305"

    },


    vault: {

        title: "VaultBox",

        subtitle:
            "Secure Authentication & Data Management Platform",

        category:
            "Backend · Security · Authentication",

        description:
            "VaultBox is a security-focused backend application combining authentication, OTP verification and encrypted data handling to demonstrate secure application design.",

        stack: [
            "Python",
            "Flask",
            "MySQL",
            "PyOTP",
            "Fernet",
            "Authentication",
            "Encryption"
        ],

        features: [
            "OTP-based authentication using PyOTP",
            "Encrypted sensitive data using Fernet",
            "Flask-based backend architecture",
            "MySQL persistence layer",
            "Authentication and authorization workflows",
            "Security-focused application design"
        ],

        architecture:
            "Client → Flask API → Authentication → Encryption Layer → MySQL",

        github:
            "https://github.com/Neeharika0305/VaultBox"

    }

};


/* =========================================================
   02. DOM ELEMENTS
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

const projectModal =
    document.getElementById("projectModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.querySelector(".modal-overlay");

const projectButtons =
    document.querySelectorAll(".project-button");


/* =========================================================
   03. MOBILE NAVIGATION
   ========================================================= */

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuButton.textContent =
            isOpen ? "×" : "☰";

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}


/* =========================================================
   04. PROJECT MODAL
   ========================================================= */

function openProject(projectKey) {

    const project =
        projects[projectKey];

    if (!project || !projectModal || !modalBody) {
        return;
    }


    const stackHTML =
        project.stack
            .map(item => `<span class="tags">${item}</span>`)
            .join("");


    const featuresHTML =
        project.features
            .map(feature => `<li>${feature}</li>`)
            .join("");


    modalBody.innerHTML = `

        <div class="modal-category">
            ${project.category}
        </div>

        <h2>
            ${project.title}
        </h2>

        <p class="modal-subtitle">
            ${project.subtitle}
        </p>

        <div class="modal-stack">

            ${stackHTML}

        </div>

        <h3>
            Overview
        </h3>

        <p>
            ${project.description}
        </p>

        <h3>
            Architecture
        </h3>

        <div class="modal-architecture">

            ${project.architecture}

        </div>

        <h3>
            Engineering Highlights
        </h3>

        <ul>

            ${featuresHTML}

        </ul>

        <div class="modal-project-footer">

            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View GitHub →
            </a>

        </div>

    `;


    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeProject() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* Open modal */

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectKey =
            button.dataset.project;

        openProject(projectKey);

    });

});


/* Close modal */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProject
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProject
    );

}


/* Escape key */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);


/* =========================================================
   05. SMOOTH INTERNAL NAVIGATION
   ========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const navbarHeight = 72;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =========================================================
   06. SCROLL REVEAL
   ========================================================= */

const revealElements = [

    ".section-label",
    ".about-grid",
    ".section-heading",
    ".project-card",
    ".experience-card",
    ".research-card",
    ".skill-group",
    ".education-card",
    ".contact-container"

];


revealElements.forEach(selector => {

    document
        .querySelectorAll(selector)
        .forEach(element => {

            element.classList.add(
                "reveal-element"
            );

        });

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "revealed"
                );

                revealObserver.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );


document
    .querySelectorAll(".reveal-element")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* =========================================================
   07. ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationItems =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationItems.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);

updateActiveNavigation();


/* =========================================================
   08. NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 20) {

        navbar.classList.add(
            "navbar-scrolled"
        );

    } else {

        navbar.classList.remove(
            "navbar-scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);

updateNavbar();


/* =========================================================
   09. TERMINAL CURSOR EFFECT
   ========================================================= */

const terminalBody =
    document.querySelector(".terminal-body");


if (terminalBody) {

    const cursor =
        document.createElement("span");

    cursor.className =
        "terminal-cursor";

    cursor.textContent = "▋";

    terminalBody.appendChild(cursor);

}


/* =========================================================
   10. PROJECT CARD POINTER EFFECT
   ========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) *
                -1.2;

            const rotateY =
                ((x - centerX) / centerX) *
                1.2;

            card.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   11. STAT COUNTER
   ========================================================= */

const statNumbers =
    document.querySelectorAll(
        ".stat strong"
    );


function animateNumber(
    element,
    finalValue
) {

    const numericValue =
        parseFloat(finalValue);

    if (Number.isNaN(numericValue)) {
        return;
    }

    const hasDecimal =
        finalValue.includes(".");

    const duration = 900;

    const startTime =
        performance.now();


    function updateNumber(
        currentTime
    ) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const current =
            numericValue * eased;


        element.textContent =
            hasDecimal
                ? current.toFixed(2)
                : Math.floor(current) + (
                    finalValue.includes("+")
                        ? "+"
                        : ""
                );


        if (progress < 1) {

            requestAnimationFrame(
                updateNumber
            );

        } else {

            element.textContent =
                finalValue;

        }

    }


    requestAnimationFrame(
        updateNumber
    );

}


const statObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const originalValues = [
                    "3+",
                    "2",
                    "10+",
                    "9.07"
                ];

                statNumbers.forEach(
                    (element, index) => {

                        animateNumber(
                            element,
                            originalValues[index]
                        );

                    }
                );

                statObserver.disconnect();

            });

        },

        {
            threshold: 0.6
        }

    );


const statsSection =
    document.querySelector(".stats");


if (statsSection) {

    statObserver.observe(
        statsSection
    );

}


/* =========================================================
   12. YEAR
   ========================================================= */

const footerYear =
    document.querySelector(
        "footer .footer-container span"
    );


if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Neeharika Reddy`;

}


/* =========================================================
   13. EXTERNAL LINKS
   ========================================================= */

document
    .querySelectorAll(
        'a[target="_blank"]'
    )
    .forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


/* =========================================================
   14. PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


/* =========================================================
   15. CONSOLE BRANDING
   ========================================================= */

console.log(
    "%c Neeharika Reddy ",
    "background:#fff;color:#000;font-size:16px;font-weight:bold;padding:6px 10px;"
);

console.log(
    "%c Software Engineer · Backend · AI/ML ",
    "color:#999;font-size:12px;"
);

console.log(
    "%c Building reliable, scalable & intelligent systems.",
    "color:#666;font-size:11px;"
);