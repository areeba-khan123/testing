
// =================================
// WHATSAPP ORDER SYSTEM
// =================================

// IMPORTANT: Apna WhatsApp number yahan add karein.
// Pakistan number: 923XXXXXXXXX
// Plus (+), spaces ya dash use nahi karna.

const whatsappNumber = "03138250331";

function orderWhatsApp(productName, productPrice) {

    const message =
        `Assalam o Alaikum!\n\n` +
        `I want to order this product:\n\n` +
        `Product: ${productName}\n` +
        `Price: Rs. ${productPrice.toLocaleString("en-PK")}\n\n` +
        `Please share more details. Thank you!`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


// =================================
// MOBILE NAVBAR
// =================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        menuToggle.textContent =
            navLinks.classList.contains("show") ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        });
    });
}


// =================================
// GSAP ANIMATIONS
// =================================

if (typeof gsap !== "undefined") {

    // Navbar animation
    gsap.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Hero animation
    if (document.querySelector(".hero-content")) {

        gsap.from(".hero-content > *", {
            y: 45,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3
        });

        gsap.from(".hero-image", {
            x: 70,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.4
        });
    }

    // Page heading animation
    gsap.from(".page-heading > *", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Product cards scroll animation
    gsap.from(".product-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: undefined
    });

    // About animation
    gsap.from(".about-image, .about-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out"
    });

    // Contact animation
    gsap.from(".contact-details, .contact-image", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out"
    });

    // Values animation
    gsap.from(".values > div", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Promo animation
    gsap.from(".promo-banner > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
}
