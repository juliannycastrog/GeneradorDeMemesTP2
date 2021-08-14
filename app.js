
"use strict";


const panelAside = document.querySelector("#panelAside");
const buttonClose = document.querySelector("#button-close");

//para cerrar el panel del aside 

buttonClose.addEventListener("click", () => {
  panelAside.classList.add("ocultar");
});

const panelImg = document.querySelector("#panel-image");
const panelText = document.querySelector("#panel-text");

const buttonImg = document.querySelector("#button-img");
const buttonText = document.querySelector("#button-text");



// --------VER PANEL TEXTO--------
buttonText.addEventListener("click", () => {
  panelAside.classList.remove("ocultar");
  panelText.classList.remove("ocultar");
  panelImg.classList.add("ocultar");
});


//-------- PANEL TEXTO ------------//

//----Modificacion texto superior/inferior----//
//ARRIBA
const textoSuperiorCuadro = document.querySelector("#memeTextTop");
const topText = document.getElementById("topText");

topText.addEventListener("input", () => {
  textoSuperiorCuadro.innerText = topText.value;
});

//ABAJO
const textoInferiorCuadro = document.querySelector("#memetextBottom");
const bottomText = document.getElementById("bottomText");

bottomText.addEventListener("input", () => {
textoInferiorCuadro.innerText = bottomText.value;
});



//HABILITAR O INHABILITAR TEXTO SUPERIOR E INFERIOR 

const sinTextoSuperior = document.getElementById("checkboxarriba");
sinTextoSuperior.addEventListener("change", () => {
  if (sinTextoSuperior.checked) {
    textoSuperiorCuadro.classList.add("ocultar");
    topText.disabled = true;
  } else {
    textoSuperiorCuadro.classList.remove("ocultar");
    topText.disabled = false;
  }
});

const sinTextoInferior = document.getElementById("checkboxabajo");
sinTextoInferior.addEventListener("change", () => {
  if (sinTextoInferior.checked) {
    textoInferiorCuadro.classList.add("ocultar");
    bottomText.disabled = true;
  } else {
    textoInferiorCuadro.classList.remove("ocultar");
    bottomText.disabled = false;
  }
});


//------SELECT tipo de letra-----
const selectTipoLetra = document.querySelector("#tipo-de-letra");
selectTipoLetra.addEventListener("change", () => {
  textoSuperiorCuadro.style.fontFamily = selectTipoLetra.value;
});

selectTipoLetra.addEventListener("change", () => {
  textoInferiorCuadro.style.fontFamily = selectTipoLetra.value;
});

// Tamaño FUENTE
const fontsize = document.querySelector("#fontSize");
fontsize.addEventListener("input", () => {
  textoSuperiorCuadro.style.fontSize = `${fontSize.value}px`;
  textoInferiorCuadro.style.fontSize = `${fontSize.value}px`;
});

//  ALINEAR TEXTO
const alignLeft = document.querySelector(".left");
const alignCenter = document.querySelector(".center");
const alignRight = document.querySelector(".right");

alignLeft.addEventListener("click", () => {
  textoSuperiorCuadro.style = `text-align: left;`;
  textoInferiorCuadro.style = `text-align: left;`;
});
alignCenter.addEventListener("click", () => {
  textoSuperiorCuadro.style = `text-align: center;`;
  textoInferiorCuadro.style = `text-align: center;`;
});
alignRight.addEventListener("click", () => {
  textoSuperiorCuadro.style = `text-align: right;`;
  textoInferiorCuadro.style = `text-align: right;`;
});

// COLOR DE LETRA
const colorLetra = document.getElementById("inputColor");
const colorLetraSpan = document.getElementById("colorLetraPanelTexto");
colorLetra.addEventListener("input", () => {
  textoSuperiorCuadro.style.color = colorLetra.value;
  textoInferiorCuadro.style.color = colorLetra.value;
  colorLetraSpan.innerText = colorLetra.value;
});

// CAMBIAR FONDO
const colorFondoTexto = document.querySelector("#colorFondoTexto");
const colorFondoSpan = document.getElementById("colorFondoPanelTexto");
colorFondoTexto.addEventListener("input", () => {
  textoSuperiorCuadro.style.backgroundColor = colorFondoTexto.value;
  textoInferiorCuadro.style.backgroundColor = colorFondoTexto.value;
  colorFondoSpan.innerText = colorFondoTexto.value;
});

// FONDO TRANSPARENTE

const checkboxTransparente = document.getElementById("fondoTransparente");
checkboxTransparente.addEventListener("change", () => {
  if (checkboxTransparente.checked) {
    textoInferiorCuadro.classList.add("ocultar");
    textoSuperiorCuadro.classList.add("ocultar");
  } else {
    textoInferiorCuadro.classList.remove("ocultar");
    textoSuperiorCuadro.classList.remove("ocultar");
  }
});

//-------CONTORNOS---------

const contornoOscuro = document.querySelector("#contornoOscuro");
contornoOscuro.addEventListener("click", () => {
  textoSuperiorCuadro.style.textShadow =
    "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
  textoInferiorCuadro.style.textShadow =
    "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
});

const contornoClaro = document.querySelector("#contornoClaro");
contornoClaro.addEventListener("click", () => {
  textoSuperiorCuadro.style.textShadow =
    "-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff,2px -2px 1px #fff";
  textoInferiorCuadro.style.textShadow =
    "-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff,2px -2px 1px #fff";
});

const sinContorno = document.querySelector("#sinContorno");
sinContorno.addEventListener("click", () => {
  textoSuperiorCuadro.style.textShadow = "";
  textoInferiorCuadro.style.textShadow = "";
});

//----- ESPACIADO ------
const espaciado = document.querySelector("#espaciado");
espaciado.addEventListener("input", () => {
  textoSuperiorCuadro.style.padding = `${espaciado.value}px`;
  textoInferiorCuadro.style.padding = `${espaciado.value}px`;
});

//----INTERLINEADO----
const interlineado = document.querySelector("#interlineado");
interlineado.addEventListener("input", () => {
  textoSuperiorCuadro.style.lineHeight = interlineado.value;
  textoInferiorCuadro.style.lineHeight = interlineado.value;
});

//---------FIN PANEL TEXTO-------//



































