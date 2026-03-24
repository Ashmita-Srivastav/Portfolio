// ============================
// Typing Effect (fixed)
// ============================
const icons = ["💻", "⚙️", "🚀", "🧠", "📱", "🌐", "🖥️", "💡"];

const container = document.querySelector(".floating-icons");

for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");

    span.textContent = icons[Math.floor(Math.random() * icons.length)];

    span.style.top = Math.random() * 100 + "%";
    span.style.left = Math.random() * 100 + "%";

    span.style.animationDuration = (10 + Math.random() * 20) + "s";
    span.style.fontSize = (1.5 + Math.random() * 2) + "rem";

    container.appendChild(span);
}
const words = [
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Computer Science Engineer",
    "Coder",
    "Tech Enthusiast"
];

let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

const target = document.getElementById("change");

function type() {
    const current = words[wordIdx];

    charIdx += isDeleting ? -1 : 1;
    target.textContent = current.substring(0, charIdx);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIdx === current.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 500;
    }

    setTimeout(type, speed);
}

window.addEventListener("load", type);


// ============================
// Horizontal Scroll Logic
// ============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const mainWrapper = document.querySelector(".main-wrapper");
let currentIndex = 0;
let isScrolling = false;
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.dataset.section;

        const index = Array.from(sections).findIndex(
            section => section.id === targetId
        );

        if (index !== -1) {
            goToSection(index);
        }
    });
});

// Smooth navigation
const goToSection = (index) => {
    if (isScrolling) return;
    isScrolling = true;

    currentIndex = Math.max(0, Math.min(index, sections.length - 1));

    mainWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;

    updateActiveLink(); // 🔥 update UI

    setTimeout(() => {
        isScrolling = false;
    }, 800);
};

const updateActiveLink = () => {
    navLinks.forEach(link => link.classList.remove("active"));

    const activeSection = sections[currentIndex].id;

    const activeLink = document.querySelector(
        `.nav-link[data-section="${activeSection}"]`
    );

    if (activeLink) activeLink.classList.add("active");
};
window.addEventListener("load", () => {
    const hash = window.location.hash.replace("#", "");

    const index = Array.from(sections).findIndex(
        section => section.id === hash
    );

    if (index !== -1) {
        goToSection(index);
    } else {
        updateActiveLink();
    }
});
