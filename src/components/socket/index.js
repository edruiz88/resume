const io = require('socket.io-client')

export const socket = io('eruiz.onrender.com/', {
    forceNew:true,
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: Infinity
});

socket.on('is_connected', (data) => {
    console.log(data)
})

socket.on('bot_reply', (data) => {
    console.log(data)
  })
