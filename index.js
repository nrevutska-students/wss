const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 5000, clientTracking: true });

wss.on("connection", (connection) => {
  connection.on("message", (data) => {
    wss.clients.forEach((connectionItem) => connectionItem.send(String(data)));
  });
});

module.exports = wss;
