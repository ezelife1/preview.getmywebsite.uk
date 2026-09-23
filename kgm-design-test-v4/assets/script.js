(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var hero = document.getElementById("top");
  var mobileContactBar = document.getElementById("mobile-contact-bar");
  var quoteForm = document.getElementById("whatsapp-quote-form");
  var quoteStatus = document.getElementById("quote-form-status");

  function updatePageState() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    if (hero && mobileContactBar) {
      var headerHeight = header ? header.getBoundingClientRect().height : 0;
      var heroBottom = hero.getBoundingClientRect().bottom;
      var heroHasPassed = heroBottom <= headerHeight;

      mobileContactBar.classList.toggle("is-visible", heroHasPassed);
      mobileContactBar.setAttribute("aria-hidden", heroHasPassed ? "false" : "true");
    }
  }

  function openWhatsAppQuote(event) {
    event.preventDefault();

    if (!quoteForm || !quoteForm.checkValidity()) {
      if (quoteForm) {
        quoteForm.reportValidity();
      }
      return;
    }

    var formData = new FormData(quoteForm);
    var customerName = String(formData.get("customer-name") || "").trim();
    var contactNumber = String(formData.get("contact-number") || "").trim();
    var service = String(formData.get("service") || "").trim();
    var propertyAddress = String(formData.get("property-address") || "").trim();
    var jobDescription = String(formData.get("job-description") || "").trim();

    var message = [
      "KGM Fencing & Landscaping — Quote Request",
      "",
      "Customer name: " + customerName,
      "Contact number: " + contactNumber,
      "Service required: " + service,
      "Property address: " + propertyAddress,
      "",
      "Job description:",
      jobDescription,
      "",
      "I understand this is a quote request and not a confirmed booking."
    ].join("\n");

    var whatsappUrl = "https://wa.me/447767772508?text=" + encodeURIComponent(message);
    var whatsappLink = document.createElement("a");

    whatsappLink.href = whatsappUrl;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    whatsappLink.setAttribute("aria-hidden", "true");
    document.body.appendChild(whatsappLink);
    whatsappLink.click();
    whatsappLink.remove();

    if (quoteStatus) {
      quoteStatus.textContent = "WhatsApp has opened with your quote request. Please review the message and press Send in WhatsApp.";
    }
  }

  updatePageState();

  window.addEventListener("scroll", updatePageState, { passive: true });
  window.addEventListener("resize", updatePageState, { passive: true });

  if (quoteForm) {
    quoteForm.addEventListener("submit", openWhatsAppQuote);
  }
})();
