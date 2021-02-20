const fs = require("fs");
//create a file
// fs.writeFile("example.txt", "cristiano ronaldo", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

// rename a file
// fs.rename("example.txt", "ronaldo.txt", (err) => {
//   if (err) throw err;
// });

//apend data to file

// fs.appendFile("ronaldo.txt", "is the best player ", (err) => {
//   if (err) throw err;
// });

//delete a file

fs.unlink("ronaldo.txt", (err) => {
  if (err) throw err;
});
