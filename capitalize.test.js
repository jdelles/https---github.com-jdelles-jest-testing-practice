const capitalize = require("./capitalize");

test("capitalize A in alphabet", () => {
    expect(capitalize("alphabet")).toBe("Alphabet");
});
