"use strict";

const nacl = require('tweetnacl');
nacl.util = require('tweetnacl-util');

module.exports.sign = (message, secretKey) => {
    if (!(secretKey instanceof Uint8Array)) {
        secretKey = nacl.util.decodeBase64(secretKey.toString());
    }
    if (!(message instanceof Uint8Array)) {
        message = nacl.util.decodeUTF8(message.toString());
    }
    const signature = nacl.sign.detached(message, secretKey);

    return nacl.util.encodeBase64(signature);
}

module.exports.verify = (message, signature, publicKey) => {
    if (!(publicKey instanceof Uint8Array)) {
        publicKey = nacl.util.decodeBase64(publicKey.toString());
    }
    if (!(message instanceof Uint8Array)) {
        message = nacl.util.decodeUTF8(message.toString());
    }
    if (!(signature instanceof Uint8Array)) {
        signature = nacl.util.decodeBase64(signature.toString());
    }

    return nacl.sign.detached.verify(message, signature, publicKey)
}

module.exports.util = nacl.util;
