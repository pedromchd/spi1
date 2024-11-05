var dataAtual = new Date();
horas = dataAtual.getHours();

if (horas >= 0 && horas < 12) {
    document.write("<h1>Bom dia!</h1>");
}

if (horas >= 12 && horas < 18) {
    document.write("<h1>Boa tarde!</h1>");
}

if (horas >= 18 && horas < 24) {
    document.write("<h1>Boa noite!</h1>");
}
