let d = document;
var number = '';
var conta = '';
var sinais = ['*', '+', '-', '/'];
var contaExec = false;

function insert(num) {
  if (
    (!sinais.includes(conta.slice(-1)) || !sinais.includes(num)) &&
    !(conta.length == 0 && [/|[+/*]/gi].includes(num))
  ) {
    if (!number.includes('.') || num != '.') {
      if (contaExec && !sinais.includes(num)) {
        clean();
      }
      contaExec = false;
      if (number.length == 0 && num == '.') {
        number = '0.';
        conta = conta + '0.';
      } else {
        number = sinais.includes(num) ? '' : number + num;
        conta = conta + num;
      }

      d.getElementById('result').value = conta;
    }
  }
}

function clean() {
  d.getElementById('result').value = '';
  conta = '';
  number = '';
}

function back() {
  contaExec = false;
  conta = conta.slice(0, -1);
  number = conta.split(/[+-/*]/gi).slice(-1)[0];
  d.getElementById('result').value = conta;
}

function calcular() {
  if (conta) {
    if (sinais.includes(conta.slice(-1))) {
      conta = conta.slice(0, -1);
    }
    let result = eval(conta);
    d.getElementById('result').value = result;
    conta = result.toString();
    contaExec = true;
  }
}
