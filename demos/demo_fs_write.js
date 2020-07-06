var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content 3!', function ( err ) {
    if (err) throw err;
    console.log('Saved!');
});