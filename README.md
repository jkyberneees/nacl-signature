# Introduction
JavaScript module to easily sign/verify messages using NaCL(tweetnacl.js). Allows directly usage of Base64 encoded keys and UTF8 encoded messages.

For more details about NaCL, the magic is explained here: ["The security impact of a new cryptographic library"](http://cr.yp.to/highspeed/coolnacl-20120725.pdf)  

# Installation

```batch
npm install nacl-signature
```

# Usage

Signing messages:
```js
const signer = require('nacl-signature');

const secretKey = 'AUBsLQhpSElD5LpLPB1p5JfwYHRIWjrsL+jJkHpBzyt+a1zqQLnX2ovt3czYD3TLU8MBE8MzEkhETP/H6y2ETA==';
const publicKey = 'fmtc6kC519qL7d3M2A90y1PDARPDMxJIREz/x+sthEw=';

// base64 message signature
var signature = signer.sign('NaCL is amazing!', secretKey);
```

Verifying signatures:
```js
if (signer.verify('NaCL is amazing!', signature, publicKey)){
    console.log('Signature is valid!');
}
```
> Note: In production, remember that your "secret key" is secret!  

## Using Uint8Array keys
```js
const secretKey = signer.util.decodeBase64('AUBsLQhpSElD5LpLPB1p5JfwYHRIWjrsL+jJkHpBzyt+a1zqQLnX2ovt3czYD3TLU8MBE8MzEkhETP/H6y2ETA==');
const publicKey = signer.util.decodeBase64('fmtc6kC519qL7d3M2A90y1PDARPDMxJIREz/x+sthEw=');

```

## Using Uint8Array messages
```js
let message = signer.util.decodeUTF8('Hello World!');
```
```js
let message = new Uint8Array(2);
message[0] = 42;
message[1] = 17;
```

# Tests
```batch
git clone https://github.com/jkyberneees/nacl-signature.git && cd nacl-signature && npm install
npm test
```