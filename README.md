## DEV

1. ejecutar ``` npm install ```
2. backend : ``` npm run dev ```
3. Frontend: en la ruta de websockets_node/frontend
   ``` npx http-server -o ``` 

4. Frontend: en la ruta de websockets_node/frontend2
   ``` npx http-server -o ```




## WebSockets con NodeJS
WebSocket es un protocolo de red basado en TCP que establece cómo deben intercambiarse datos entre redes. Puesto que es un protocolo fiable y eficiente, es utilizado por prácticamente todos los clientes. El protocolo TCP establece conexiones entre dos puntos finales de comunicación, llamados sockets. De esta manera, el intercambio de datos puede producirse en las dos direcciones.

# Librerías
 1. BackEnd
    - ws: a Node.js WebSocket library 
        ``` npm i ws ``` 
 2. FrontEnd
    - Aqui usaremos la implementación nativa que ya nos ofrece los navegadores
        - https://developer.mozilla.org/es/docs/Web/API/WebSocket

# Server Broadcast
  - Permite enviar información a todos los clientes conectados a el websocket
  - Permite enviar información  a todos los clientes con excepción del cliente que esta emitiendo el mensaje


