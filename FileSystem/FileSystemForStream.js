//readable stream

const fs = require("fs");

// zlib is used for compressing the data
const zlib = require("zlib");

// returns transform stream
const gzib = zlib.createGzip();
const readStream = fs.createReadStream("./streamexample.txt", "utf8");

const writeStream = fs.createWriteStream("example2.txt.gz");
// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });

// to use pipes and pipeing

readStream.pipe(gzib).pipe(writeStream);

//to uncompress the file
