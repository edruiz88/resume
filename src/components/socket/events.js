import { socket } from './index';


export const botChat = async ({ setChat }) => {
  socket.on('bot_reply', (data) => {
    setChat(setChat => [...setChat, {pos:'left', txt:data} ]);
  })
}