

// asyncBreeds.js
const fs = require('fs');

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     if (!error) console.log(`Return Value: ${data}`);  // return undefined, data isn't going anywhere, unable to test
//   });
// };

const breedDetailsFromFile = function(breed, funcDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) funcDone(data); // flexibility
  });
};



module.exports = breedDetailsFromFile;



