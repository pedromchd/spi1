function soma() {
  a = parseFloat(document.getElementById("a").value);
  b = parseFloat(document.getElementById("b").value);

  alert(a + b);
}

function subtracao() {
  a = parseFloat(document.getElementById("a").value);
  b = parseFloat(document.getElementById("b").value);

  alert(a - b);
}

function multiplicacao() {
  a = parseFloat(document.getElementById("a").value);
  b = parseFloat(document.getElementById("b").value);

  alert(a * b);
}

function divisao() {
  a = parseFloat(document.getElementById("a").value);
  b = parseFloat(document.getElementById("b").value);

  if (b == 0) {
    alert("Divisão por zero!");
    return;
  }

  alert(a / b);
}
