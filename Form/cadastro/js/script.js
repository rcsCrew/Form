

function validar() {
  // pegar dados digitados:

  var iUser = document.getElementById('email').value;
  var iPass = document.getElementById('password').value;

  // USER E SENHA:

  var cUser = "";
  var cPass = "";

  // ENTRAR:

  if (iUser != cUser && iPass != cPass) {
    
    window.alert("USUARIO CADASTRADO")
  } else {
    window.alert("USUARIO NAO CADASTRADO")
  }
}
function redirect(){
  window.location.href = "../../login/index.html"
}