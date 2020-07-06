var fs = require('fs');

fs.writeFile('winter.html', '<!DOCTYPE html> <html> <body> <h1>Winter</h1> <p> I love the snow! </p> </body> </html>', function (err) {
    if (err) throw err;
    console.log('Added file!');
});