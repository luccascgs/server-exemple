const polyhedrons = require('./polyhedrons');

console.log(`A sphere with radius 3 has a ${polyhedrons.sphereVol(3)} volume`);
console.log(`A cylinder with radius 3 and height 5 has a ${polyhedrons.cylinderVol(3, 5)} volume`);
console.log(`A cone with radius 3 and height 5 has a ${polyhedrons.coneVolume(3, 5)} volume`);