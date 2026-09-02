const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 20px 45px -15px rgba(0,0,0,.55)";

        navbar.style.opacity = "1";
        navbar.style.visibility = "visible";

    } else {

        navbar.style.boxShadow = "none";

        navbar.style.opacity = "1";
        navbar.style.visibility = "visible";

    }

});


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: .15
});


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = ".6s";

    observer.observe(card);

});


const counters = document.querySelectorAll(".stat h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText.trim();

        const match = text.match(/^(\d+)([+%])$/);

        if (!match) {

            counterObserver.unobserve(counter);

            return;

        }

        const target = parseInt(match[1]);

        const symbol = match[2];

        let current = 0;

        const update = () => {

            const increment = Math.ceil(target / 80);

            current += increment;

            if (current > target) {

                current = target;

            }

            counter.innerText = current + symbol;

            if (current < target) {

                requestAnimationFrame(update);

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});


counters.forEach(counter => {

    counterObserver.observe(counter);

});


const waLink =
    "https://wa.me/6283184140131?text=Halo%20Admin,%20Saya%20ingin%20order%20Jasa%20Joki%20Rank";


const wa = document.querySelector(".whatsapp");

if (wa) {

    wa.addEventListener("click", function(e) {

        e.preventDefault();

        window.open(
            waLink,
            "_blank"
        );

    });

}


document.querySelectorAll(".button").forEach(button => {

    button.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (
            href &&
            href.startsWith("#") &&
            href !== "#"
        ) {

            return;

        }

        e.preventDefault();

        window.open(
            waLink,
            "_blank"
        );

    });

});


const sections = document.querySelectorAll(
    "#home, #layanan, #harga, #testimoni, #kontak"
);

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", e => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        const navHeight = 120;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navHeight;

        window.scrollTo({

            top: targetPosition,
            behavior: "smooth"

        });

    });

});


function activeMenu() {

    let current = "home";

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach(section => {

        if (
            scrollPosition >= section.offsetTop
        ) {

            current = section.id;

        }

    });


    if (
        window.innerHeight +
        window.scrollY >=
        document.documentElement.scrollHeight - 10
    ) {

        current = "kontak";

    }


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    activeMenu
);

window.addEventListener(
    "load",
    activeMenu
);