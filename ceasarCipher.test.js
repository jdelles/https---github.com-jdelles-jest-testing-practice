const { encrypt, decrypt } = require("./ceasarCipher");

test("encrypt - single word - 5", () => {
    expect(encrypt("fLaVor", 5)).toBe("kQfAtw");
});

test("decrypt - single word - 5", () => {
    expect(decrypt("kQfAtw", 5)).toBe("fLaVor");
});

test("encrypt - sentence - 3", () => {
    expect(encrypt("fish are fun!", 3)).toBe("ilvk duh ixq!");
});

test("decrypt - sentence - 3", () => {
    expect(decrypt("ilvk duh ixq!", 3)).toBe("fish are fun!");
});
