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

