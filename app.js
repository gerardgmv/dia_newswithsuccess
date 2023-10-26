const frm = document.querySelector("#frm"); //formulario
const wmain = document.querySelector("#wmain"); //main
const wsuccess = document.querySelector("#wsuccess"); //div
const errmsg = document.querySelector("#errmsg"); // span
const btndismiss = document.querySelector("#btn_dismiss"); //boton
const email = document.querySelector("#email"); //input

var exp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

frm.addEventListener("submit", (event) => {
    event.preventDefault(); // detiene el evento, y no se refresca la paginac
    errmsg.innerHTML = "";
    if (email.value === "") { // validacion js de email
        email.classList.add("error");
        errmsg.innerHTML = "Ingresa un correo";
    }
    else {
        if (!exp.test(email.value)) {
            email.classList.add("error");
            errmsg.innerHTML = "Ingresa un correo válido";
        } else {
            wmain.classList.add("hide_element");
            wsuccess.classList.remove("hide_element");
        }
    }
});
btndismiss.addEventListener("click", () => {
    wsuccess.classList.add("hide_element");
    wmain.classList.remove("hide_element");
});

