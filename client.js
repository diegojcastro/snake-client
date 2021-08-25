const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
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