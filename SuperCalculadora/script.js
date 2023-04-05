//pegar elementos HTML via DOM
let soma = document.getElementById('soma');
let subAB = document.getElementById('subAB');
let subBA = document.getElementById('subBA');
let multiplicacao = document.getElementById('multiplicacao');
let divAB = document.getElementById('divAB');
let divBA = document.getElementById('divBA');
let potAB = document.getElementById('potAB');
let potBA = document.getElementById('potBA');
let raizQuadradaA = document.getElementById('raizQuadradaA');
let raizQuadradaB = document.getElementById('raizQuadradaB');
let fatA = document.getElementById('fatA');
let fatB = document.getElementById('fatB');
let porcAB = document.getElementById('porcAB');
let porcBA = document.getElementById('porcBA');
let media = document.getElementById('media');

soma.innerHTML = 0;
subAB.innerHTML = 0;
subBA.innerHTML = 0;
multiplicacao.innerHTML = 0;
divAB.innerHTML = 0;
divBA.innerHTML = 0;
potAB.innerHTML = 0;
potBA.innerHTML = 0;
raizQuadradaA.innerHTML = 0;
raizQuadradaB.innerHTML = 0;
fatA.innerHTML = 0;
fatB.innerHTML = 0;
porcAB.innerHTML = 0;
porcBA.innerHTML = 0;
media.innerHTML = 0;

//fazer funções com os cálculos

function calcularSoma(a, b) {
  return a + b;
}

function calcularSubAB(a, b) {
  return a - b;
}

function calcularSubBA(a, b) {
  return b - a;
}

function calcularMultiplicacao(a, b) {
  return a * b;
}

function calcularDivAB(a, b) {
  return (a / b).toFixed(2);
}

function calcularDivBA(a, b) {
  return (b / a).toFixed(2);
}

function calcularPotAB(a, b) {
  return a ** b;
}

function calcularPotBA(a, b) {
  return b ** a;
}

const calcularRaizQuadradaA = a => Math.sqrt(a).toFixed(2);

const calcularRaizQuadradaB = b => Math.sqrt(b).toFixed(2);

function calcularFatA(a) {
  if (a === 0 || a === 1) return 1;
  for (var i = a - 1; i >= 1; i--) {
    a *= i;
  }
  return a;
}

function calcularFatB(b) {
  if (b === 0 || b === 1) return 1;
  for (var i = b - 1; i >= 1; i--) {
    b *= i;
  }
  return b;
}

function calcularPorcBA(a, b) {
  return Math.ceil((a * 100) / b);
}

function calcularPorcAB(a, b) {
  return Math.ceil((b * 100) / a);
}

function calcularMedia(a, b) {
  return (a + b) / 2;
}

//fazer a função calcular para exibir os resultados

const calcular = () => {
  let inputA = document.getElementById('primeiroNumero').value;
  let inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calcularSoma(a, b);
  subAB.innerHTML = calcularSubAB(a, b);
  subBA.innerHTML = calcularSubBA(a, b);
  multiplicacao.innerHTML = calcularMultiplicacao(a, b);
  divAB.innerHTML = calcularDivAB(a, b);
  divBA.innerHTML = calcularDivBA(a, b);
  potAB.innerHTML = calcularPotAB(a, b);
  potBA.innerHTML = calcularPotBA(a, b);
  raizQuadradaA.innerHTML = calcularRaizQuadradaA(a);
  raizQuadradaB.innerHTML = calcularRaizQuadradaB(b);
  fatA.innerHTML = calcularFatA(a);
  fatB.innerHTML = calcularFatB(b);
  porcAB.innerHTML = calcularPorcAB(a, b);
  porcBA.innerHTML = calcularPorcBA(a, b);
  media.innerHTML = calcularMedia(a, b);
};
