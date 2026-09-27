const { calculate_area, calculate_perimeter } = require('./main');

const radius = 1;
console.log(`Area with radius ${radius}:`, calculate_area(radius));
console.log(`Perimeter with radius ${radius}:`, calculate_perimeter(radius));