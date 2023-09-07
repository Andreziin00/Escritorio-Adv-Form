import { Message } from "./modules/Message.js"

//function que pega os valores de email e texto e adiciona a um objeto
const botao = document.getElementById('button')
const confirm = document.getElementById('confirmButton')
export const msg = new Message()
const name = document.getElementById('exampleInputName')
const email = document.getElementById('exampleInputEmail')
const textarea = document.getElementById('texto')
const load = document.getElementById('load-box')
botao.addEventListener('click', () => {
  if (name.value === '' || email.value === '' || textarea.value === '') window.alert('Todos os dados precisam ser preenchidos!')
  else {
    msg.name = name.value
    msg.email = email.value
    msg.mensagem = textarea.value
    console.log(msg)

    confirm.style.display = "inline-block"
    confirm.style.opacity = "100%"
    botao.style.display = "none"
  }
})
confirm.addEventListener('click', () => {
  confirm.style.opacity = "60%"
  confirm.style.transition = ".6s"
  confirm.style.display = "none"
  load.style.display = "flex"
})
