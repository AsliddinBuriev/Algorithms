import { Child, Node, BinaryTree } from '../BinaryTree';

export class sortedArrayToBST extends BinaryTree {
	arr: number[];
	constructor() {
		super();
	}
	convertListToArr(list: { val: number; next: any }) {
		const arr: number[] = [];
		while (list.next) {
			arr.push(list.val);
			list = list.next;
		}
		this.arr = arr;
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
	consvetListToBST(list: { val: number; next: any }) {
		this.convertListToArr(list);
		this.balancedInsert(0, this.arr.length - 1);
		return this.root;
	}
}
