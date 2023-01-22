import { Child, Node, BinaryTree } from '../BinaryTree';

export class sortedArrayToBST extends BinaryTree {
	constructor(private arr: number[]) {
		super();
		this.balancedInsert(0, arr.length - 1);
	}
	insertRecursively(root: Child, value: any): Node {
		if (root === null) return new Node(value);
		if (root.value > value)
			root.left = this.insertRecursively(root.left, value);
		else if (root.value < value)
			root.right = this.insertRecursively(root.right, value);
		else return root;

		return root;
	}
	balancedInsert(left: number, right: number) {
		const mid = Math.round((left + right) / 2);
		if (mid < left || mid > right) return;
		this.root = this.insertRecursively(this.root, this.arr[mid]);
		this.balancedInsert(left, mid - 1);
		this.balancedInsert(mid + 1, right);
	}
}

const arr = [-10, -3, 0, 5, 9];
const bst = new sortedArrayToBST(arr);
console.log(bst.root);
