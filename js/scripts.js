const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const panelId = trigger.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        const isOpen =
            trigger.getAttribute("aria-expanded") === "true";

        // Cerrar todos los paneles
        accordionTriggers.forEach((otherTrigger) => {
            const otherPanelId =
                otherTrigger.getAttribute("aria-controls");

            const otherPanel =
                document.getElementById(otherPanelId);

            otherTrigger.setAttribute("aria-expanded", "false");
            otherTrigger.classList.remove("active");

            otherPanel.hidden = true;
        });

        // Abrir el seleccionado solo si antes estaba cerrado
        if (!isOpen) {
            trigger.setAttribute("aria-expanded", "true");
            trigger.classList.add("active");

            panel.hidden = false;
        }
    });
});