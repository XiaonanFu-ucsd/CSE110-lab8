// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe("true1", () => {
    it("isPhoneNumber t1", () => {
        expect(functions.isPhoneNumber("123-123-1133")).toBe(true);
    });

    it("isEmail t1", () => {
        expect(functions.isEmail("xyz@xxx.org")).toBe(true);
    });

    it("isStrongPassword t1", () => {
        expect(functions.isStrongPassword("xyz_123_413")).toBe(true);
    });

    it("isDate t1", () => {
        expect(functions.isDate("12/12/2012")).toBe(true);
    });

    it("isHexColor t1", () => {
        expect(functions.isHexColor("#FFFFFF")).toBe(true);
    });
});

describe("true2", () => {
    it("isPhoneNumber t2", () => {
        expect(functions.isPhoneNumber("333-444-2222")).toBe(true);
    });

    it("isEmail t2", () => {
        expect(functions.isEmail("123@ffff.ff")).toBe(true);
    });

    it("isStrongPassword t2", () => {
        expect(functions.isStrongPassword("abcde11122")).toBe(true);
    });

    it("isDate t2", () => {
        expect(functions.isDate("11/11/1111")).toBe(true);
    });

    it("isHexColor t2", () => {
        expect(functions.isHexColor("#123212")).toBe(true);
    });
});

describe("false1", () => {
    it("isPhoneNumber f1", () => {
        expect(functions.isPhoneNumber("x-123-1x23-1231")).toBe(false);
    });

    it("isEmail f1", () => {
        expect(functions.isEmail("1111")).toBe(false);
    });

    it("isStrongPassword f1", () => {
        expect(functions.isStrongPassword("functionasdfsdfasdfasd123123")).toBe(false);
    });

    it("isDate f1", () => {
        expect(functions.isDate("155/13/1313")).toBe(false);
    });

    it("isHexColor f1", () => {
        expect(functions.isHexColor("#xxxxxx")).toBe(false);
    });
});

describe("false2", () => {
    it("isPhoneNumber f2", () => {
        expect(functions.isPhoneNumber("1231231231")).toBe(false);
    });

    it("isEmail f2", () => {
        expect(functions.isEmail("131313@13")).toBe(false);
    });

    it("isStrongPassword f2", () => {
        expect(functions.isStrongPassword("1234455")).toBe(false);
    });

    it("isDate f2", () => {
        expect(functions.isDate("12-13-1313")).toBe(false);
    });

    it("isHexColor f2", () => {
        expect(functions.isHexColor("#sss")).toBe(false);
    });
});