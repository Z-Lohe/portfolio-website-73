// =========================
// CERTIFICATE DROPDOWN
// =========================

document.querySelectorAll(".cert-header").forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;

        // Close others (accordion)
        document.querySelectorAll(".cert-item").forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            }
        });

        // Toggle current
        item.classList.toggle("active");
    });
});


// =========================
// AUTO CLOSE ON OUTSIDE CLICK
// =========================

document.addEventListener("click", (e) => {
    const isHeader = e.target.closest(".cert-header");

    if (!isHeader) {
        document.querySelectorAll(".cert-item").forEach(item => {
            item.classList.remove("active");
        });
    }
});


// =========================
// FADE IN ON SCROLL
// =========================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-in").forEach(section => {
    observer.observe(section);
});


// =========================
// CONTACT FORM (LIVE BACKEND)
// =========================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        try {
            const res = await fetch("https://portfolio-website-73.onrender.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            const data = await res.json();

            if (data.success) {
                alert("✅ Message sent successfully!");
                form.reset();
            } else {
                alert("❌ Failed to send message.");
            }

        } catch (error) {
            console.error(error);
            alert("⚠️ Server error. Try again later.");
        }
    });
}
