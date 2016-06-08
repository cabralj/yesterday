

var ExifImage = require('exif').ExifImage;

var image = (typeof(process.argv[2]) === "undefined") ? "./Image.jpg" : process.argv[2];

try {
    new ExifImage({ image : image }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else
            console.log(exifData); // Do something with your data!
    });
} catch (error) {
    console.log('Error: ' + error.message);
}



// EXAMPLE IMAGE EXIF DATA
/*

--ImageDescription
Orientation: 1,
XResolution: 72,
YResolution: 72,

-- exif
DateTimeOriginal: '2015:10:24 14:14:02',
CreateDate: '2015:10:24 14:14:02',
ExifImageWidth: 4032,
ExifImageHeight: 3024,
LensMake
LensModel

-- gps
GPSLatitudeRef: 'N',
GPSLatitude: [ 40, 45, 21.84 ],
GPSLongitudeRef: 'W',
GPSLongitude: [ 73, 59, 32.64 ],
LensMake: 'Apple',
LensModel: 'iPhone 6s back camera 4.15mm f/2.2' },

*/
