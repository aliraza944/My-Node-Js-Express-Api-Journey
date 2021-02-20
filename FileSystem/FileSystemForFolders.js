const fs = require("fs");

//creating a folder
// fs.mkdir("tutorial", (err) => {
//   if (err) throw err;
//   else {
//     fs.writeFile("./tutorial/ronaldo.txt", "ronaldo", (err) => {
//       if (err) throw err;
//     }); //end write file
//   }
// });

/*if we want to delete an empty folder than use rmdir else u have to delet the files filrst with unlink and then the use the rmdir to delete the folder */

// fs.unlink("./tutorial/ronaldo.txt", (err) => {
//   if (err) throw err;
//   else {
//     fs.rmdir("tutorial", (err) => {
//       if (err) throw err;
//     });
//   }
// });

//to delete folder containing multiple files

fs.readdir("example", (err, files) => {
  if (err) throw err;
  else {
    for (let file of files) {
      fs.unlink("./example/" + file, (err) => {
        if (err) throw err;
        else {
          console.log("deleted");
        }
      }); //end unlink
    }
  }
});
