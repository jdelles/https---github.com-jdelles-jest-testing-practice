const analyzeArray = require("./analyze");

test("analyze array - 1", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);

    const testObject = {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    };

    expect(object.average).toBe(testObject.average);
    expect(object.min).toBe(testObject.min);
    expect(object.max).toBe(testObject.max);
    expect(object.length).toBe(testObject.length);
});

test("analyze array - 2", () => {
    const object = analyzeArray([0, 1, 9, 10]);

    const testObject = {
        average: 5,
        min: 0,
        max: 10,
        length: 4,
    };

    expect(object.average).toBe(testObject.average);
    expect(object.min).toBe(testObject.min);
    expect(object.max).toBe(testObject.max);
    expect(object.length).toBe(testObject.length);
});
