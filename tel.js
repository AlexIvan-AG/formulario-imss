    const telefonoInput = document.getElementById("telefono");
        telefonoInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
const ladaInput = document.getElementById("lada");
ladaInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

const edadInput = document.getElementById("edad");
edadInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
 