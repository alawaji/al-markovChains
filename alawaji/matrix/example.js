// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[5, 8], 
					 [4, 3]]);
print(p);

// the matrix can be retrieved using valueOf()
console.log('retrieve matrix data');
var array = p.valueOf();
print(array);

// matrices can be cloned
console.log('matrices can be cloned');
var clone = p.clone();
print(clone);

// matrix multiplication
console.log('matrix multiplication');
var result = math.multiply(p, p);
print(result);


var p10 = math.matrix([[1, 0, 0, 0], 
					 [0.5, 0, 0.5, 0], 
					 [0, 0.5, 0, 0.5],
					 [0, 0, 0, 1]]);
// print(p10);

print("Result using Math Power built-in function");
print(math.pow(p10, 10));

print("Result using written function");
print(power(50, p10));

var v1 = math.matrix([0, 0, 1, 0]);


function power(x, matrix){
var result = math.multiply(matrix,matrix);
x -=2;
for(var i=0; i<x; i++){
	result = math.multiply(result, matrix);
}
return result;
}

var result2 = math.pow(p10, 50);
var mat2 = math.matrix([0, 0, 1, 0]);
var result3 = math.multiply(mat2,result2);

print("Result of multiplying matrix with initial state");
print(result3);

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}