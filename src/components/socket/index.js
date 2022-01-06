const io = require('socket.io-client')
// const bitSocket =  require('isomorphic-ws');

export const socket = io('http://localhost:3000', {
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

// export const bitSock = new bitSocket('wss://127.0.0.1:3000');

// bitSock.onopen = evt =>{
//     console.log("connected to the blockchain with status: "+evt.type);
//     pinger(bitSock)
// }

// bitSock.onmessage = evt =>{
//     const data = JSON.parse(evt.data)
//     if(evt.data != '{"event": "pong"}'){
//         const value = data.outputs[0].value
//         const from = data.outputs[0].addresses[0]
//         console.log('You have received '+ (value/100000000).toFixed(8) +' BTC from address: '+ from)
//     }
// }

// bitSock.onclose = evt =>{
//     console.log("disconnected from the blockchain with status: "+evt.type);
// }

// const pinger = ws => {
//     var timer = setInterval(() => {
//       if (ws.readyState == 1) {
//         ws.send(JSON.stringify({event: "ping"}));
//       }
//     }, 8000);
//     return {stop:()=>clearInterval(timer)};
// }