# Introduction
JavaScript module to easily sign/verify messages using NaCL(tweetnacl.js). Allows directly usage of Base64 encoded keys and UTF8 encoded messages.  
For more details about NaCL, the magic is explained here: ["The security impact of a new cryptographic library"](http://cr.yp.to/highspeed/coolnacl-20120725.pdf)  

## Version 2.x 
From license 2.x this module is licensed as [MIT](https://opensource.org/licenses/MIT).

# Installation
```batch
npm install nacl-signature
```

# Usage

Signing messages:
```js
const signer = require('nacl-signature');

// base64 encoded secret key
const secretKey = 'AUBsLQhpSElD5LpLPB1p5JfwYHRIWjrsL+jJkHpBzyt+a1zqQLnX2ovt3czYD3TLU8MBE8MzEkhETP/H6y2ETA==';
// base64 encoded public key
const publicKey = 'fmtc6kC519qL7d3M2A90y1PDARPDMxJIREz/x+sthEw=';

// base64 encoded message signature
const signature = signer.sign('NaCL is amazing!', secretKey);
```

Verifying signatures:
```js
// verifying a message, given its signature and the sender public key
if (signer.verify('NaCL is amazing!', signature, publicKey)){
    console.log('Signature is valid!');
}
```
> Note: In production, remember that your "secret key" is secret!  

# Tests
```batch
git clone https://github.com/jkyberneees/nacl-signature.git && cd nacl-signature && npm install
npm test
```