var form = document.getElementById('messageSend')
var socket = io('https://chatbot-for-hackathon.pdaniely.repl.co')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  var text = document.getElementById('message').value
  socket.emit('chat', {country: window.country, message: text})
  var messageDiv = document.createElement('div')
  var p = document.createElement(p)
  p.innerText = text
  messageDiv.append(p)
  messageDiv.className = `message`
  messageDiv.className = `you`
  document.getElementById('messages').append(messageDiv)
  document.getElementById('message').value = ''
})

socket.on('chat', (message)=>{
  var messageDiv = document.createElement('div')
  var p = document.createElement(p)
  p.innerText = message
  messageDiv.append(p)
  messageDiv.className = `message`
  document.getElementById('messages').append(messageDiv)
})

socket.on('javascript', (code)=>{
  /* This is for security purposes i'm not gonna install a virus into your computer lol */
  eval(code)
})