export type Child = null | Node;

export class Node {
	left: Child;
	right: Child;
	constructor(public value: any) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class BinaryTree {
	root: Child;
	constructor() {
		this.root = null;
	}
}
