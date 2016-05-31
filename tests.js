const expect = require("chai").expect;
const signer = require('./index.js');
const secretKey = 'AUBsLQhpSElD5LpLPB1p5JfwYHRIWjrsL+jJkHpBzyt+a1zqQLnX2ovt3czYD3TLU8MBE8MzEkhETP/H6y2ETA==';
const publicKey = 'fmtc6kC519qL7d3M2A90y1PDARPDMxJIREz/x+sthEw=';

var signature;

describe('sign', () => {
    it('signing using bas64 values', (done) => {
        signature = signer.sign('Hello world!', secretKey);
        expect(typeof signature).to.equal('string');

        done();
    });
    
    it('signing using Uint8Array values', (done) => {
        signature = signer.sign(signer.util.decodeUTF8('Hello world!'), signer.util.decodeBase64(secretKey));
        expect(typeof signature).to.equal('string');

        done();
    });
});

describe('verify', () => {
 it('verifying using base64 values', (done) => {
        let trusted = signer.verify('Hello world!', signature, publicKey);
        expect(trusted).to.equal(true);

        done();
    });
    
    it('verifying using Uint8Array values', (done) => {
        let trusted = signer.verify(signer.util.decodeUTF8('Hello world!'), signer.util.decodeBase64(signature), signer.util.decodeBase64(publicKey));
        expect(trusted).to.equal(true);

        done();
    });
});
