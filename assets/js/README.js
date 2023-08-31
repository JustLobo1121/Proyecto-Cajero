const formBody = document.querySelector(".form-signin"),
    Body = document.querySelector("body")

const MaxIntentos = 3, UserName = "Luis", PassWord = 1234
let InputUser, InputPass, Inputingreso, 
    Inputretiro, Intentos = 0, Saldo = 540

function User(user) {
    InputUser = user
}
function Password(pass) {
    InputPass = Number(pass)
}
function CambioDePantalla() {
    formBody.remove()
}
function StartLogin() {
    // mientras que intentos sea menor que 3 todo okey
    if (Intentos < MaxIntentos) {
        if (InputUser == UserName && (InputPass	 == PassWord)) {
            CambioDePantalla()
        } else if (InputUser != UserName && (InputPass != PassWord)) {
            Intentos++;
        }
    }
}

