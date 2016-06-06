
var fs = require("fs");

var root = (typeof(process.argv[2]) === "undefined") ? "./" : process.argv[2];

var count = 0;

fs.readdir(root, function(err, list) {

  list.forEach(function (filename) {

  	console.log(filename);

//    if(! /^\..*/.test(filename)) {
/*
		count++;

		var isDir = fs.lstatSync(filename).isDirectory();

		var isFile = fs.lstatSync(filename).isDirectory();




		console.log(root + " " + count + "\t" + isDir + "\t" + filename);

    }
    else{
		console.log("Hidden File");
    }

    */

  });
});


