const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: '50542' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log("Connection successful.");
    // code that does something when the connection is first established
    conn.write("Name: DJC");
  });

  conn.on('data', (data) => {
    console.log("Incoming data:");
    console.log(data);
  })

  return conn;
};

module.exports = connect;