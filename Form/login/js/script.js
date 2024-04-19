

function validar() {
  // pegar dados digitados:

  var iUser = document.getElementById('email').value;
  var iPass = document.getElementById('password').value;

  // USER E SENHA:

  var cUser = "Ramon";
  var cPass = "Admin";

  // ENTRAR:

  if (iUser === cUser && iPass === cPass) {
    window.location.href = "../lobby/index.html"
  } else {
    window.alert("USUARIO ou SENHA ERRADA! \nUSUARIO: Everson \nSENHA: Admin")
  }
}
function redirect(){
  window.location.href = "../../cadastro/index.html"
}