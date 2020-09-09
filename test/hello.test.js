import hello from "../esm/hello";

test('Hello, world!', () => {
    expect(hello('world')).toBe('Hello, world!');
});
