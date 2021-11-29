function convertLowerCase(value) {
    if (value - 97 < 0) {
        value = 26 + value - 97;
    } else {
        value = (value - 97) % 26;
    }
    return "abcdefghijklmnopqrstuvwxyz"[value];
}

function convertUpperCase(value) {
    if (value - 65 < 0) {
        value = 26 + value - 65;
    } else {
        value = (value - 65) % 26;
    }
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[value];
}

function characterShift(ch, key) {
    const value = ch.charCodeAt();
    if (value >= 97) {
        return convertLowerCase(value + key);
    } else {
        return convertUpperCase(value + key);
    }
}

function encrypt(message, key) {
    let cipher = "";
    const size = message.length;
    for (let i = 0; i < size; i++) {
        const ch = message.charAt(i);
        if (ch.match(/[a-zA-Z]/)) {
            cipher += characterShift(ch, key);
        } else {
            cipher += ch;
        }
    }
    return cipher;
}

function decrypt(message, key) {
    let cipher = "";
    key *= -1;
    const size = message.length;
    for (let i = 0; i < size; i++) {
        const ch = message.charAt(i);
        if (ch.match(/[a-zA-Z]/)) {
            cipher += characterShift(ch, key);
        } else {
            cipher += ch;
        }
    }
    return cipher;
}

module.exports = { encrypt, decrypt };
