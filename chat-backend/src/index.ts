import { forEachChild } from "typescript";
import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
interface User {
    socket: WebSocket;
    room: string;
}
let allSockets: User[] = [];

wss.on('connection', (socket) => {
    socket.on("message", (message) => {
        //@ts-ignore
        const parsedMessage = JSON.parse(message);            //string msg ko json ma/object ma convert kiya 
        if (parsedMessage.type === "join") {
            console.log("User joined room: " + parsedMessage.payload.roomId);
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }

        if (parsedMessage.type === "chat") {
            console.log("Message received: " + parsedMessage.payload.message);
            //const currentUserRoom = allSockets.find((x) => x.socket == socket).room;
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }

            for(let i = 0; i < allSockets.length; i++){
                if(allSockets[i].room == currentUserRoom){
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    })

    // socket.on("disconnect", () => {
    //      allSockets = allSockets.filter(s => s != socket);
    // });
});
