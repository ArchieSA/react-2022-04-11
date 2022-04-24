const
  fs         = require('fs'),
  { config } = require('./config.js'),
  { Type }   = require('./types.js'),
  { getNamesByConfig } = require('./utils/get-names-by-config/index.js'),
  { createComponents, createTests } = require('./creators/index.js');


const { dirName, componentName, filename } = getNamesByConfig(); // process.argv[2]
console.log('dirName:', dirName);
console.log('componentName:', componentName);
console.log('filename:', filename);


switch (config.type) {
  case Type.component     : createComponents({ dirName, componentName }); break;
  case Type.componentTest : createTests({ dirName, componentName, filename }); break;

  default: console.log(`Uncorrect creator type`);
}

// node create-components/index.js
