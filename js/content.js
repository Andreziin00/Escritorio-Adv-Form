import { Message } from "./modules/Message.js"

//function que pega os valores de email e texto e adiciona a um objeto
const botao = document.getElementById('button')
botao.addEventListener('click', () => {
  const email = document.getElementById('exampleInputEmail').value
  const textarea = document.getElementById('texto').value
  const mensagem = new Message(email, textarea)
  console.log('texto adicionado')
  console.log(mensagem)
  const alerta = `${mensagem.email}\n\n${mensagem.mensagem}`  // printando a mensagem formatada
  window.alert(alerta)
})

/*email.addEventListener('input', function() {
 mensagem.email += email.value;
});
textarea.addEventListener('input', function() {
  mensagem.mensagem += textarea.value;
});

const botao = document.getElementById('button')
botao.addEventListener('click', function(){
  console.table(mensagem)
})
*/
