const net = require('net');

const client = new net.Socket();
client.connect(5000, '127.0.0.1', () => {
  console.log('Conectado al servidor TCP');

  setInterval(() => {
    const msg = `$GPRMC,123519,A,${(Math.random()*90).toFixed(4)},N,${(Math.random()*180).toFixed(4)},W,0.13,309.62,120598,,*10`;
    console.log('Enviando:', msg);
    client.write(msg);
  }, 5000); // cada 5 segundos
});

client.on('close', () => {
  console.log('Conexión cerrada');
});
