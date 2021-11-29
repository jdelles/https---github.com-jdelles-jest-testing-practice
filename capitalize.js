function capitalize(a) {
    if (a.substring(0, 0) < "A") {
        a = a.charAt(0).toUpperCase() + a.substring(1);
    }
    return a;
}

module.exports = capitalize;
