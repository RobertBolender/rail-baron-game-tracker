var fs = require('fs');
var parse = require('csv-parse/lib/sync');

var lines = 0;
var input = fs.readFileSync('src/data/rail_baron_even_destinations.csv', 'utf-8');
var destinations = parse(input, {delimiter: ',', columns: true, objname: 'Roll'});

console.log(JSON.stringify(destinations));

