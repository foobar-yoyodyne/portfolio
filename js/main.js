/* Portfolio / Laymic test JavaScript */

(function () {
  "use strict";

  // Laymic is loaded from the CDN in the test page.
  // Keep initialization isolated so we can replace this with the final
  // portfolio setup after the viewer behavior is confirmed.
  function initLaymic() {
    if (!window.laymic || !window.laymic.LaymicApplicator) {
      console.warn("Laymic is not available yet.");
      return;
    }

    const templates = document.querySelectorAll(".laymic_template");
    if (!templates.length) return;

    templates.forEach(function (template) {
      if (template.dataset.laymicInitialized === "true") return;

      new laymic.LaymicApplicator(template, {
        pageWidth: 1700,
        pageHeight: 2400
      });

      template.dataset.laymicInitialized = "true";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLaymic);
  } else {
    initLaymic();
  }
})();
