const fs = require("fs");
// console.log(fs);
//Blocking,Sync way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// // console.log(textOut);
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written");

//Non-blocking async way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
  console.warn(err);
});
console.log("Will read file!");
