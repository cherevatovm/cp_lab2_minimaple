import {MiniMaple} from "../src/miniMaple";

test('1', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("4*x^3", "x")).toBe("12*x^2");
});

test('2', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("4*x^3", "y")).toBe("0");
});

test('3', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("4*x^3-x^2", "x")).toBe("12*x^2-2*x");
});

test('4', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("4*x", "x")).toEqual("4");
});

test('5', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("4*x^3-x^2+8*x^6", "x")).toEqual("12*x^2-2*x+48*x^5");
});

test('6', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("x", "x")).toEqual("1");
});

test('7', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("10", "y")).toEqual("0");
});

test('8', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("10+10", "y")).toEqual("0");
});

test('9', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("5*x+1", "y")).toEqual("0");
});

test('10', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("-4*x^3", "x")).toEqual("-12*x^2");
});

test('11', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("-4*x^3+2*x", "x")).toEqual("-12*x^2+2");
});

test('12', () => {
    const m = new MiniMaple()
    expect(m.calculateDerivative("-4*x", "x")).toEqual("-4");
});