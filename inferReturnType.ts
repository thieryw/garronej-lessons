//with method overloading

function x(params: {type: "foo"}): string;
function x(params: {type: "bar"}): number;
function x(params: {type: "foo" | "bar"}): string | number{

	const {type} = params;

	if(type === "foo"){
		return "1"
	}

	return 1;
}

//y is of type string;
const y = x({"type": "foo"});
//z is of type number;
const z = x({"type": "bar"});


//with type arguments


function a<T extends "foo" | "bar">(params: {type: T}):
	T extends "foo" ? string : T extends "bar" ? number : never
{

	const {type} = params;

	if(type === "foo"){
		return "1" as any;
	}

	return 1 as any;

};

//b is of type string
const b = a({"type": "foo"});
//c is of type number
const c = a({"type": "bar"});