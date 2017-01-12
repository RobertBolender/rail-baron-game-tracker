var fs = require('fs');
var parse = require('csv-parse/lib/sync');

var lines = 0;
var input = fs.readFileSync('src/data/rail_baron_payoff_chart.csv', 'utf-8');
var payouts = parse(input, {delimiter: '\t', columns: true, objname: 'City'});

console.log(JSON.stringify(payouts));

