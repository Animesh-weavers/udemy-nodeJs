const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2; //customized theradpool size

setTimeout(() => console.log("TImer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", "utf-8", () => {
  console.log("I/O finished");
  console.log("*********************************");

  setTimeout(() => console.log("TImer 2 finished"), 0);
  setTimeout(() => console.log("TImer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTrick"));

  crypto.pbkdf2("Password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("Password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("Password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("Password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("Hello from the top-level-code");
