import { useEffect, useState } from "react";

export default function useWebSocket (url = '', connect) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {

        if (!connect) return;

        const socket = new WebSocket(`${url}/socket.io/?EIO=4&transport=websocket`);

        socket.onopen = () => {
            console.log('connected!');
            // socket.send('something'); // send a message
        };

        socket.onmessage = e => {
            console.log('message', e.data);
        };

        socket.onerror = e => {
            console.log('error', e);
        };

        socket.onclose = e => {
            console.log('close', e.code, e.reason);
        };

        setSocket(socket);
    
        return () => {
            socket.close(); // Disconnect the socket when the component unmounts
        };
    }, [connect]);

    return socket;
}