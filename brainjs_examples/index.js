/**
 * Testing brain.js library. Check its github repo for more info how it works.
 *     
 * 
 * 
*/


const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    { input: [1,2], output: [1]},   // team 2 wins
    { input: [1,3], output: [1]},   // team 3 wins
    { input: [2,3], output: [0]},   // team 2 wins
    { input: [2,4], output: [1]},   // team 4 wins

    { input: [1,2], output: [0]},   // team 1 wins
    { input: [1,3], output: [0]},   // team 1 wins
    { input: [3,4], output: [0]},   // team 3 wins
]);

const output = network.run([1,4]); // probability that team 4 wins

console.log(`Prob: ${output}`);



