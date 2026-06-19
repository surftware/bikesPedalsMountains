
const form = document.getElementById("riderRegistrationForm");

function setValidationMessage(field) {
    // Limpia cualquier mensaje anterior
    field.setCustomValidity("");

    if (field.validity.valid) {
        return;
    }

    if (field.validity.valueMissing) {
        field.setCustomValidity(
            field.dataset.validationMessage ||
            "Please complete this field."
        );

        return;
    }

    if (
        field.validity.typeMismatch &&
        field.type === "email"
    ) {
        field.setCustomValidity(
            "Please enter a valid email address."
        );

        return;
    }

    if (field.validity.typeMismatch) {
        field.setCustomValidity(
            "Please enter a valid value."
        );

        return;
    }

    if (field.validity.rangeUnderflow) {
        field.setCustomValidity(
            `Please enter a value greater than or equal to ${field.min}.`
        );

        return;
    }

    if (field.validity.rangeOverflow) {
        field.setCustomValidity(
            `Please enter a value less than or equal to ${field.max}.`
        );

        return;
    }

    if (field.validity.patternMismatch) {
        field.setCustomValidity(
            field.title ||
            "Please follow the requested format."
        );

        return;
    }

    if (field.validity.tooShort) {
        field.setCustomValidity(
            `Please enter at least ${field.minLength} characters.`
        );

        return;
    }

    if (field.validity.tooLong) {
        field.setCustomValidity(
            `Please enter no more than ${field.maxLength} characters.`
        );

        return;
    }

    if (field.validity.stepMismatch) {
        field.setCustomValidity(
            "Please enter a valid value."
        );
    }
}

if (form) {
    const fields = form.querySelectorAll(
        "input, select, textarea"
    );

    fields.forEach((field) => {
        field.addEventListener("invalid", () => {
            setValidationMessage(field);
        });

        field.addEventListener("input", () => {
            field.setCustomValidity("");
        });

        field.addEventListener("change", () => {
            field.setCustomValidity("");
        });
    });
}
