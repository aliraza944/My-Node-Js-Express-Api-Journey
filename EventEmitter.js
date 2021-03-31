const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("response", (name, id) => {
  console.log(`data recived ${name} and ${id}`);
});
emitter.on("response", () => {
  console.log(`the new data`);
});

emitter.emit("response", "jhon", 34);
