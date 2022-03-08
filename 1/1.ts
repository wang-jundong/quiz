class Test {
	constructor() {}

	public problem1(input: number) {
		if (input < 0) return "";
		if (input % 22 === 0) return "candybar";
		if (input % 2 === 0) return "candy";
		if (input % 11 === 0) return "bar";
		return input;
	}
}
