/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

const question = [
  {
    type: "input",
    name: "userURL",
    message: "Type your URL",
  },
];

inquirer.prompt(question).then((answers) => {
  var qr_png = qrImage.image(answers.userURL);
  qr_png.pipe(fs.createWriteStream("qr.png"));
  fs.writeFile("URL.txt", answers.userURL, (err) => {
    if (err) throw err;
    console.log("File has been saved!");
  });
});
