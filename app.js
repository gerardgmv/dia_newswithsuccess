const frm = document.querySelector("#frm");
const email = document.querySelector("#email");
const wmain = document.querySelector("#wmain");
const wsuccess = document.querySelector("#wsuccess");
const btndismiss = document.querySelector("#btn_dismiss");
const errmsg = document.querySelector("#errmsg");

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

