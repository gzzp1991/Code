// ArrayBuffer
// new ArrayBuffer(length)

// DataView
// Uint8Array

const buffer = new ArrayBuffer(8);
const z = new Uint8Array(buffer, 1, 2);

console.log(z)