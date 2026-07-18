(function () {

    // ── Validation rules ──────────────────────────────────────
    // Each rule gets the trimmed value and returns { ok, msg }
    var RULES = {

        "bm-name": function (value) {
            if (!value)           return { ok: false, msg: "Please enter your full name" };
            if (value.length < 2) return { ok: false, msg: "Name must be at least 2 characters" };
            return { ok: true, msg: "Looks good!" };
        },

        "bm-email": function (value) {
            if (!value) return { ok: false, msg: "Please enter your email" };
            if (!value.includes("@") || !value.includes("."))
                        return { ok: false, msg: "Not a valid email address" };
            return { ok: true, msg: "Valid email" };
        },

        "bm-phone": function (value) {
            if (!value) return { ok: false, msg: "Please enter your phone number" };
            var digits = value.replace(/[\s\-\.\(\)]/g, "");
            if (!/^\+?\d{7,15}$/.test(digits))
                return { ok: false, msg: "Include country code, e.g. +855 012 345 678" };
            return { ok: true, msg: "Valid number" };
        }

    };


    // ── Show / hide inline feedback under each field ──────────
    function showFeedback(fieldId, result) {
        var input = document.getElementById(fieldId);
        var row   = document.getElementById(fieldId + "-fb");
        var icon  = document.getElementById(fieldId + "-fb-icon");
        var text  = document.getElementById(fieldId + "-fb-text");
        if (!input || !row) return;

        input.classList.toggle("bm-valid",   result.ok);
        input.classList.toggle("bm-invalid", !result.ok);

        row.classList.remove("bm-hidden", "bm-error-text", "bm-valid-text");
        row.classList.add(result.ok ? "bm-valid-text" : "bm-error-text");
        icon.className = result.ok
            ? "fa-solid fa-circle-check bm-feedback-icon"
            : "fa-solid fa-circle-exclamation bm-feedback-icon";
        text.textContent = result.msg;
    }

    function clearFeedback(fieldId) {
        var input = document.getElementById(fieldId);
        var row   = document.getElementById(fieldId + "-fb");
        if (!input || !row) return;
        input.classList.remove("bm-valid", "bm-invalid");
        row.classList.add("bm-hidden");
        row.classList.remove("bm-error-text", "bm-valid-text");
    }

    // Run one field's rule and show the result. Returns true if valid.
    function validateField(fieldId) {
        var input = document.getElementById(fieldId);
        if (!input) return true;
        var result = RULES[fieldId](input.value.trim());
        showFeedback(fieldId, result);
        return result.ok;
    }

    // Validate all fields. Returns true only if every field passes.
    function validateAll() {
        var allOk = true;
        Object.keys(RULES).forEach(function (id) {
            if (!validateField(id)) allOk = false;
        });
        return allOk;
    }


    // ── Open / close the modal ────────────────────────────────
    function openModal() {
        var overlay = document.getElementById("booking-modal");
        if (!overlay) return;
        overlay.removeAttribute("hidden");
        requestAnimationFrame(function () { overlay.classList.add("bm-visible"); });
        document.body.style.overflow = "hidden";
        showFormStep();
    }

    function closeModal() {
        var overlay = document.getElementById("booking-modal");
        if (!overlay) return;
        overlay.classList.remove("bm-visible");
        document.body.style.overflow = "";
        overlay.addEventListener("transitionend", function () {
            overlay.setAttribute("hidden", "");
        }, { once: true });
    }


    // ── Switch between form view and success view ─────────────
    function showFormStep() {
        document.getElementById("bm-form-step").classList.remove("bm-hidden");
        document.getElementById("bm-success-step").classList.add("bm-hidden");
        document.getElementById("bm-form").reset();
        Object.keys(RULES).forEach(clearFeedback);
    }

    function showSuccessStep(email) {
        document.getElementById("bm-form-step").classList.add("bm-hidden");
        document.getElementById("bm-success-step").classList.remove("bm-hidden");
        document.getElementById("bm-confirm-email").textContent = email;
        document.querySelector(".bm-card").scrollTop = 0;
    }


    // ── Wire up all events ────────────────────────────────────
    function initModal() {
        var overlay    = document.getElementById("booking-modal");
        var closeBtn   = document.getElementById("bm-close-btn");
        var form       = document.getElementById("bm-form");
        var exploreBtn = document.getElementById("bm-explore-btn");
        if (!overlay) return;

        // Close on X button
        closeBtn.addEventListener("click", closeModal);

        // Close when clicking the dark backdrop
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeModal();
        });

        // Close on Escape key
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && overlay.classList.contains("bm-visible")) closeModal();
        });

        // Real-time validation:
        //   First blur → validate once. After that → validate on every keystroke.
        Object.keys(RULES).forEach(function (fieldId) {
            var input   = document.getElementById(fieldId);
            var touched = false;
            if (!input) return;

            input.addEventListener("blur", function () {
                touched = true;
                validateField(fieldId);
            });

            input.addEventListener("input", function () {
                if (touched) validateField(fieldId);
            });
        });

        // Submit: validate → show success (no API call)
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            if (!validateAll()) return;

            var email = document.getElementById("bm-email").value.trim();
            showSuccessStep(email);
        });

        // "Keep Exploring" button closes the modal
        exploreBtn.addEventListener("click", closeModal);

        // Wire up all booking trigger buttons and links
        attachTriggers();
    }


    // ── Attach the open trigger to buttons / links ────────────
    // Any element with  data-booking-trigger  opens the modal.
    // Links with href="#", "#booking", or "#rooms" are also caught.
    function attachTriggers() {
        document.querySelectorAll("[data-booking-trigger]").forEach(function (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                openModal();
            });
        });

        document.querySelectorAll("a.btn-booking, a.btn-cta").forEach(function (el) {
            var href = (el.getAttribute("href") || "").trim();
            if (["#", "#booking", "#rooms"].includes(href)) {
                el.addEventListener("click", function (e) {
                    e.preventDefault();
                    openModal();
                });
            }
        });
    }


    // ── Public API (optional — call from anywhere) ────────────
    window.BookingModal = { open: openModal, close: closeModal };

    // Called by main.js after the modal HTML is injected into the page
    window._initBookingModal = initModal;

})();
