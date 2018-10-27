const signer = require('./../index.js');
const secretKey = 'AUBsLQhpSElD5LpLPB1p5JfwYHRIWjrsL+jJkHpBzyt+a1zqQLnX2ovt3czYD3TLU8MBE8MzEkhETP/H6y2ETA==';
const publicKey = 'fmtc6kC519qL7d3M2A90y1PDARPDMxJIREz/x+sthEw=';

var signature = signer.sign('NaCL is amazing!', secretKey);
console.log('Signature: ' + signature);

if (signer.verify('NaCL is amazing!', signature, publicKey)){
    console.log('Verification succeeded!');
}