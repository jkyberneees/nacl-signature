/*
 Copyright (C) 2016 Rolando Santamaria Maso <kyberneees@gmail.com>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

"use strict";

const nacl = require('tweetnacl');
const assert = require('assert');
nacl.util = require('tweetnacl-util');

module.exports.sign = (message, secretKey) => {
    if (!(secretKey instanceof Uint8Array)) {
        secretKey = nacl.util.decodeBase64(secretKey.toString());
    }
    if (!(message instanceof Uint8Array)) {
        message = nacl.util.decodeUTF8(message.toString());
    }

    let signature = nacl.sign.detached(message, secretKey);
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