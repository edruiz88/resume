import { socket } from './index';

export const newChatCall = (data) => {
    socket.emit('send_res', data);
}  