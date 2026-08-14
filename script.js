

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8,17,31,.97)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(8,17,31,.85)";
        navbar.style.boxShadow = "none";

    }

});


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

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

        const text = counter.innerText;

        const target = parseInt(text.replace(/\D/g, ""));

        let current = 0;

        const update = () => {

            const increment = Math.ceil(target / 80);

            current += increment;

            if (current > target)
                current = target;

            if (text.includes("%")) {

                counter.innerText = current + "%";

            } else if (text.includes("+")) {

                counter.innerText = current + "+";

            } else {

                counter.innerText = current;

            }

            if (current < target) {

                requestAnimationFrame(update);

            }

        }

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});




const wa = document.querySelector(".whatsapp");

if (wa) {

    wa.addEventListener("click", function(e) {

        e.preventDefault();

        window.open(

            "https://wa.me/6283184140131?text=Halo%20Admin,%20Saya%20ingin%20order%20Jasa%20Joki%20Rank",

            "_blank"

        );

    });

}



document.querySelectorAll(".button").forEach(button => {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        window.open(

            "https://wa.me/6281234567890?text=Halo%20Admin,%20Saya%20ingin%20order%20Jasa%20Joki%20Rank",

            "_blank"

        );

    });

});




const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll("nav a");

function activeMenu() {

    let current = "";


    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
        current = "kontak";
    } else {

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {
                current = section.id;
            }

        });

    }

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

}

window.addEventListener("scroll", activeMenu);
window.addEventListener("load", activeMenu);