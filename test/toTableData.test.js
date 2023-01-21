import toTableData from "../esm/toTableData";

test('Hello, world!', () => {
    const data = [
        { ka: "va1", kb: "vb1" },
        { ka: "va2", kb: "vb2" },
    ];
    expect(toTableData(data)).toStrictEqual({
        fields: [ "ka", "kb" ],
        rows: [
            [ "va1", "vb1" ],
            [ "va2", "vb2" ]
        ]
    });
});

test('omit', () => {
    const data = [
        { ka: "va1", kb: "vb1", kc: "vc1", kd: "vd1" },
        { ka: "va2", kb: "vb2", kc: "vc2", kd: "vd2" },
    ];
    expect(toTableData(data, { omit: [ "kb", "kd" ]})).toStrictEqual({
        fields: [ "ka", "kc" ],
        rows: [
            [ "va1", "vc1" ],
            [ "va2", "vc2" ]
        ]
    });
});

test('pick', () => {
    const data = [
        { ka: "va1", kb: "vb1", kc: "vc1", kd: "vd1" },
        { ka: "va2", kb: "vb2", kc: "vc2", kd: "vd2" },
    ];
    expect(toTableData(data, { pick: [ "kb", "kd" ]})).toStrictEqual({
        fields: [ "kb", "kd" ],
        rows: [
            [ "vb1", "vd1" ],
            [ "vb2", "vd2" ]
        ]
    });
});
