// ==============================
// CERTIFICATE TOGGLE FUNCTION
// ==============================

function toggleCert(element) {
    const parent = element.parentElement;

    // Close all others (accordion behavior)
    document.querySelectorAll(".cert-item").forEach(item => {
        if (item !== parent) {
            item.classList.remove("active");
        }
    });

    // Toggle current one
    parent.classList.toggle("active");
}


// ==============================
// CONTACT FORM (OPTIONAL BACKEND)
// ==============================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        const data = {
            name: inputs[0].value,
            email: inputs[1].value,
            message: inputs[2].value
        };

        try {
            // 🔴 If backend is NOT running, this will fail (handled below)
            const res = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (result.success) {
                alert("✅ Message sent successfully!");
                form.reset();
            } else {
                alert("❌ Failed to send message");
            }

        } catch (error) {
            // ✅ FALLBACK (NO BACKEND NEEDED)
            console.log("Backend not running, using fallback.");

            alert("⚠️ Backend offline.\n\nMessage not sent, but form works.");

            form.reset();
        }
    });
}


// ==============================
// OPTIONAL: AUTO CLOSE ON OUTSIDE CLICK
// ==============================

document.addEventListener("click", (e) => {
    const isHeader = e.target.closest(".cert-header");

    if (!isHeader) {
        document.querySelectorAll(".cert-item").forEach(item => {
            item.classList.remove("active");
        });
    }
});

/* ========================= */
/* DROPDOWN FUNCTION */
/* ========================= */

document.querySelectorAll(".cert-header").forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("active");
    });
});

/* ========================= */
/* FADE IN ON SCROLL */
/* ========================= */

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
