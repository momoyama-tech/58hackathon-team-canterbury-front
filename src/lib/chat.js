const WEBSOCKET_URL = import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:3000/cable';

export function connectWebSocket(room, onMessage) {
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.onopen = () => {
        console.log(`Connected to ${WEBSOCKET_URL} (room: ${room})`);
        socket.send(JSON.stringify({
            command: 'subscribe',
            identifier: JSON.stringify({ channel: 'RoomChannel', room })
        }));
    };

    socket.onmessage = (event) => {
        const response = JSON.parse(event.data);
        if (response.type === 'ping' || !response.message) return;
        console.log(response)

        if (response.message) {
            onMessage(response.message); // メッセージを受信したらコールバック実行
        }
    };

    socket.onerror = (error) => console.error('WebSocket Error:', error);
    socket.onclose = () => console.log('WebSocket closed');

    return socket;
}
