function ValidEmail(email) {
  // Regular expression for validating an email address
  var emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailR.test(email);
}

function submit() {
  var email = document.getElementById('Email').value;
  var assunto = document.getElementById('Assunto').value;
  var mensagem = document.getElementById('Mensagem').value;

  if (email.trim() !== "" && ValidEmail(email) && assunto.trim() !== "" && mensagem.trim() !== "") {
      window.alert("OK!");

  } else {
      window.alert("Invalid! ");
  }
  return false;
}
