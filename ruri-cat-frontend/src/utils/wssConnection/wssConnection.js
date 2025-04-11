import socketClient from 'socket.io-client';

const SERVER='http://localhost:1412'; // 服务器地址

let socket;

export const connectionWithSocket = () => {
    socket = socketClient(SERVER)

    socket.on('connection', () => {
        console.log('连接到服务器');
        console.log(socket.id); // 打印连接的socket id
    })

}
