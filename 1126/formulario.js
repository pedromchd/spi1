function validaNome(element) {
  var value = element.value;
  var regex = /[a-zA-Z]+\s?/g;
  var match = value.match(regex);
  if (value.length && /\d/g.test(value)) {
    alert("O nome deve conter somente letras!");
  }
  element.value = match.join("");
}

function capitalNome(element) {
  element.value = element.value.toUpperCase();
}

function validaIdade(element) {
  var value = parseInt(element.value);
  var regex = /^([0-9]{1,2}|1(0|1)[0-9]{1}|120)$/g;
  if (/\D/g.test(value)) {
    alert("A idade deve ser só números");
    element.value = "";
  }
  if (regex.test(value) === false) {
    alert("A idade deve ser entre 0 e 120");
    element.value = "";
  }
}

function contaCaracteres(element) {
  if (element.value.length < 8) {
    alert("A senha deve conter 8 caracteres");
  }
}

function validaSenha(element) {
  var senha = document.getElementById("senha");

  if (senha.value !== element.value) {
    alert("As senhas não conferem");
  }
}
