export interface IStack {
	push(value: number | string): void;
	pop(): number | string;
}

export class Stack implements IStack {
	stack: Array<number | string> = [];
	constructor() {
		this.stack = [];
	}
	push(value: number | string): void {
		this.stack.push(value);
	}
	pop(): number | string {
		if (!this.stack.length) throw new Error('Stack is empty');
		return this.stack.pop()!;
	}
}
