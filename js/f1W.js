function mostrarinfoRB() {
    const submenu = document.getElementById("RedBull");
    submenu.classList.toggle("hidden");
}

const elementos = document.querySelectorAll("#RedBull");
elementos.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        mostrarsubmenu();
    });
})

function mostrarinfoMercedes() {
    const submenu = document.getElementById("Mercedes");
    submenu.classList.toggle("hidden");
}

const element = document.querySelectorAll("#Mercedes");
element.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        mostrarsubmenu();
    });
})

function mostrarinfoFerrari() {
    const submenu = document.getElementById("Ferrari");
    submenu.classList.toggle("hidden");
}

const elemento = document.querySelectorAll("#Ferrari");
elemento.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        mostrarsubmenu();
    });
})

function mostrarinfomclaren() {
    const submenu = document.getElementById("mclaren");
    submenu.classList.toggle("hidden");
}

const elements = document.querySelectorAll("#mclaren");
elements.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        mostrarsubmenu();
    });
})

function mostrarinfoaston() {
    const submenu = document.getElementById("aston");
    submenu.classList.toggle("hidden");
}

const elemen = document.querySelectorAll("#aston");
elemen.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        mostrarsubmenu();
    });
})

function mostrarinfoalpine() {
    const submenu = document.getElementById("alpine");
    submenu.classList.toggle("hidden");
}

const elemens = document.querySelectorAll("#alpine");
elemens.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        mostrarsubmenu();
    });
})


