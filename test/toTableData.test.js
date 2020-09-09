import toTableData from "../esm/toTableData";

test('Hello, world!', () => {
    const data = [
        { ka: "va1", kb: "vb1" },
        { ka: "va2", kb: "vb2" },
    ];
    expect(toTableData(data)).toMatchSnapshot();
});
