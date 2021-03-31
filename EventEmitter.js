const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("response", () => {
  console.log(`data recived`);
});
emitter.emit("response");
