

var request = require('request');
var url = "http://john-cabral.net/vandal/images/9ef5f5e742eb944fc2ceb77bf1536d15.png";

var magic = {
    jpg: 'ffd8ffe0',
    png: '89504e47',
    gif: '47494638'
};

var options = {
    method: 'GET',
    url: url,
    encoding: null // keeps the body as buffer
};

request(options, function (err, response, body) {

    if(!err && response.statusCode == 200){
        
        var magigNumberInBody = body.toString('hex',0,4);

        if (magigNumberInBody == magic.jpg ||
            magigNumberInBody == magic.png ||
            magigNumberInBody == magic.gif) {

			console.log("yes this is an image");

        }
    }

});
