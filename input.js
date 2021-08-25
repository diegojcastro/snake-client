
// Stores the active TCP connection object.
let connection;
let inputDirection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'r') {
    setInterval(() => {
      connection.write(`Move: ${inputDirection}`)
  }, 70);
  }
  if (key === 'w') {
    inputDirection = 'up';
  }
  if (key === 'a') {
    inputDirection = 'left';
  }
  if (key === 's') {
    inputDirection = 'down';
  }
  if (key === 'd') {
    inputDirection = 'right';
  }
  if (key === 'g') {
    connection.write("Say: GG");
  }
  if (key === 'l') {
    connection.write("Say: LOL");
  }
  if (key === 'b') {
    connection.write("Say: lag");
  }
  if (key === 'o') {
    connection.write("Say: oof");
  }
  if (key === 'i') {
    connection.write("Say: rip");
  }
};

module.exports = setupInput;