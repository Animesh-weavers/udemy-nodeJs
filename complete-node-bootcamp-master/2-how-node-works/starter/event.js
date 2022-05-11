const EventEmitter = require("events");
const http = require("http");

// console.log(myEmitter)

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("newSale 1");
});

myEmitter.on("newSale", () => {
  console.log("newSale 2");
});
myEmitter.on("newSale", (stock) => {
  console.log(`Product Quantity:${stock}`);
});
myEmitter.emit("newSale", 10);

////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request Received");
});
server.on("request", (req, res) => {
  console.log("Another Request");
});
server.on("close", () => {
  console.log("server Close");
});
server.listen(8000, () => {
  console.log("waiting for request...");
});
