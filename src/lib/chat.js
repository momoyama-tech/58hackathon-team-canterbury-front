export function connectWebSocket(room, onMessage) {
    const socket = new WebSocket('ws://localhost:3000/cable');

    socket.onopen = () => {
        console.log(`Connected to room: ${room}`);
        socket.send(JSON.stringify({
            command: 'subscribe',
            identifier: JSON.stringify({ channel: 'RoomChannel', room })
        }));
    };

    socket.onmessage = (event) => {
        const response = JSON.parse(event.data);
        if (response.type === 'ping' || !response.message) return;

        if (response.message) {
            onMessage(response.message); // メッセージを受信したらコールバック実行
        }
    };

    socket.onerror = (error) => console.error('WebSocket Error:', error);
    socket.onclose = () => console.log('WebSocket closed');

    return socket;
}
