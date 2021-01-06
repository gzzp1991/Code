const { randomBytes, createHash } = require('crypto');

console.log(randomBytes(16).toString('base64'))