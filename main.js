// genera el numero aleatorio
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 1;
let numerosIntentados = [];

function verificarIntento() {
  //obtener el numero que ingreso el usuario
  let numeroUsuario = parseInt(document.querySelector("input").value);
  //verificar que el numero no este en la lista
  if (numerosIntentados.includes(numeroUsuario)) {
    mensaje("orange", "El numero que ingreso ya esta, intente otro");
  } else {
    if (numeroUsuario > 10 || numeroUsuario < 0) {
      mensaje("orange", "El numero que ingreso no es valido");
    } else {
      numerosIntentados.push(numeroUsuario);

      if (numeroUsuario == numeroSecreto) {
        //ganar
        document.querySelector("#intentar").setAttribute("disabled", true);
        let intento = intentos <= 1 ? "intento" : "intentos";
        mensaje(
          "green",
          `<h1> ¡Le atino al numero!, con ${intentos} ${intento} </h1>`
        );
        document.querySelector("#reiniciar").removeAttribute("disabled");
      } else {
        if (intentos < 5) {
          //intento
          let direccion =
            numeroUsuario < numeroSecreto
              ? " <b> --> mayor </b>"
              : "<b> <-- menor </b>";
          mensaje(
            "red",
            `No le atinaste al numero, el numero es ${direccion},has usado ${intentos} de 5 intentos`
          );
          intentos++;
        } else {
          //perder si superamos los 5 intentos
          mensaje("red", "Perdiste, pues superaste los intentos");
          document.querySelector("#intentar").setAttribute("disabled", true);
          document.querySelector("#reiniciar").removeAttribute("disabled");
        }
      }
    }
  }
}

//reiniciamos el game loop
function reiniciarJuego() {

  intentos = 1;

  document.querySelector(".numberContent").reset();

  let respuesta = document.querySelector(".winOrLoss");
  respuesta.innerHTML = "";

  numeroSecreto = Math.floor(Math.random() * 10) + 1;

  document.querySelector("#intentar").removeAttribute("disabled");
  document.querySelector("#reiniciar").setAttribute("disabled", true);

  numerosIntentados = [];
}

function mensaje(col, mensaje) {
  let respuesta = document.querySelector(".winOrLoss");

  respuesta.style.color = col;
  respuesta.innerHTML = "";
  respuesta.innerHTML = mensaje;
}
