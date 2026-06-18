const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const panelId = trigger.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        const isExpanded = trigger.getAttribute("aria-expanded") === "true";

        trigger.setAttribute("aria-expanded", String(!isExpanded));
        panel.hidden = isExpanded;
    });
});