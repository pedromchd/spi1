function calcular() {
  const valorInicial = parseInt(document.getElementById("valorInicial").value);
  const valorFinal = parseInt(document.getElementById("valorFinal").value);

  for (let i = valorInicial; i <= valorFinal; i++) {
    document.write(i);
    document.write("<br>");
  }
}
