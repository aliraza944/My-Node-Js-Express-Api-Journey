const os = require("os");
// info about the user
const user = os.userInfo();
console.log(user);

const current = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(current);
