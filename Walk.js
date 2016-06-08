var fs = require("fs");
var path = require('path');
var ExifImage = require('exif').ExifImage;

var root = (typeof(process.argv[2]) === "undefined") ? "./" : process.argv[2];

var count = 0;
var total = 0;
var total_images = 0;

var walkDir = function(r){

	total++;

	console.log("--- Walking " + root + "-------------");

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

					total_images++;

					if (/(jpg|JPG|jpeg|JPEG)/.test(path.extname(p))){

						console.log(" --- " + total_images + " " + p);

					}

				}

			}

		});
	
	});
};

walkDir(root);