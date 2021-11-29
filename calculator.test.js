const { add, subtract, multiply, divide } = require("./calculator");

test("calculator - add", () => {
    expect(add(1, 2)).toBe(3);
});

test("calculator - subtract", () => {
    expect(subtract(1, 2)).toBe(-1);
});

test("calculator - multiply", () => {
    expect(multiply(1, 2)).toBe(2);
});

test("calculator - divide - integer", () => {
    expect(divide(1, 2)).toBe(0.5);
});

test("calculator - divide - double", () => {
    expect(divide(1.0, 2.0)).toBeCloseTo(0.5);
});

test("calculator - divide - by Zero", () => {
    expect(divide(1, 0)).toBeFalsy();
});
