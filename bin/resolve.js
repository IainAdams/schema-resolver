#! /usr/bin/env node
if (process.argv[2] == undefined || process.argv[3] == undefined){
    console.log("Missing input arguments");
    process.exit();
}
var $RefParser = require('json-schema-ref-parser');
var fs = require('fs');


var parse = $RefParser.dereference(process.argv[2]);

parse.then(function(schema) {
    fs.writeFile(process.argv[3], JSON.stringify(schema, null, 2), function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("File Saved.");
    });
  })
  .catch(function(err) {
    console.error(err);
  });
