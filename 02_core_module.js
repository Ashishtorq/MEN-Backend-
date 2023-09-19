// module which is required to import are called non global core module eg fs and module which does'nt required to export are called global core module eg console

// global core module
// console.log("ashish")

// non-global core model
const fs = require('fs');
fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error('Error creating the file:', err);
    } else {
      console.log(`File '${fileName}' has been created successfully.`);
    }
  });
  