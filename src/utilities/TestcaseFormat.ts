export function testcaseParse(testcases: string, delimeter: string): string[] {
	return testcases.replace(/\r\n/g, "\n").split(delimeter + "\n");
};

export function testcasesStringify(testcases: string[], delimeter: string): string {
    return testcases.join(delimeter + "\n");
}