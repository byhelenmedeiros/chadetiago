document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");

    phoneInput.addEventListener("input", function () {
        const phoneNumber = this.value.replace(/\D/g, "");

        if (phoneNumber.length === 11 || phoneNumber.length === 10) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("Número de telefone inválido");
        }
    });

    emailInput.addEventListener("input", function () {
        const email = this.value;

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("E-mail inválido");
        }
    });
});
