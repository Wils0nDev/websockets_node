import { setInterval } from 'timers';
import { WebSocketServer,WebSocket} from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {

  console.log('Client connected')
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    const payload = JSON.stringify({
      type : 'custom-message',
      payload : data.toString()
    });
    //*Envio a un solo cliente
    //ws.send(payload)

    //*Broadcast : Envio a todos los clientes
    /*wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(payload, { binary: false });
      }
    });*/

     //*Broadcast : Envio a todos los clientes menos al cliente que emite el mensaje
     wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(payload, { binary: false });
      }
    })
  });

 // ws.send('Hola desde el servidor!');

  ws.on('close', ()=> {
    console.log('Client  disconnected')
  })

  
});