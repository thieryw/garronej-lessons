

const out: Record<string, string[]> = {};

const input: [string, number][] = [
    ["foo", 22],
    ["foo", 33],
    ["bar", 30],
    ["bar", 299],
    ["baz", 0]
];

const output= {
    "foo": [22, 33],
    "bar": [30, 299],
    "baz": [ 0 ]
};

function arrToObjDeprecated(input: [string, number][]): Record<string, number[]> {

    const out: ReturnType<typeof arrToObjDeprecated>= {};

    input.forEach(([key, n])=>{

        if( out[key] === undefined ){
            out[key]= [];
        }

        out[key].push(n);

    });

    return out;
}


function arrToObjGoodVersion(input: [string, number][]): Record<string, number[]>{

    const out: ReturnType<typeof arrToObjGoodVersion> = {};

    input.forEach(([key, n]) => (out[key] ??= []).push(n));

    return out;

};
