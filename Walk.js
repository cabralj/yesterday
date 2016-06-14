
var fs = require("graceful-fs");
var path = require('path');
var ExifImage = require('exif').ExifImage;

var root = (typeof(process.argv[2]) === "undefined") ? "./" : process.argv[2];

var count = 0;
var total = 0;
var total_images = 0;
//var start = true;

var file_name = "Data.txt";

var walkDir = function(r, t){

	total++;

	fs.readdir(r, function(err, files) {

		if (!err) {

			files.forEach(function(filename, i, a){

				var p = path.join(r, filename);
				var isDir = fs.lstatSync(p).isDirectory();
				var isFile = fs.lstatSync(p).isFile();


				if(! /^\..*/.test(filename) && ! /Link.*/.test(filename)) {

					count++;

					if (isDir){
						walkDir(p,false);
					}

					if (isFile){

						if (/(jpg|JPG|jpeg|JPEG)/.test(path.extname(p))){
							
							total_images++;

							var line = p;

							console.log(total_images + "\t" + line);

							fs.writeFile(file_name, line+"\n", {'flag':'a'}, function(err) {
								if (err) { return console.error(err); }
							});

						}

					}

				}

			});
		}
	
	});
};

fs.writeFile(file_name, '', {'flag':'w'}, function(err) {
		walkDir(root, true);
	}
);
