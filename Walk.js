var fs = require("fs");
var path = require('path');

var root = (typeof(process.argv[2]) === "undefined") ? "./" : process.argv[2];

var count = 0;
var total = 0;

console.log("-----------Build-02.js-------------");

var walkDir = function(r){

	fs.readdir(r, function(err, list) {

		list.forEach(function(filename, idx, array){

			var p = path.join(r, filename);
			var isDir = fs.lstatSync(p).isDirectory();
			var isFile = fs.lstatSync(p).isFile();


			if(! /^\..*/.test(filename) && ! /Link.*/.test(filename)) {

				count++;

				if (isDir){
					console.log(p);
					walkDir(p);
				}

				if (isFile){

					total++;
					if (/(jpg|JPG|jpeg|JPEG)/.test(path.extname(p))){
						console.log(total + " " + p);
					}

				}

			}

		});
	
	});
};

walkDir(root);