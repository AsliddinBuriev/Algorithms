import { Node, BinaryTree, Child } from './binary-tree';

class BinarySearchTree extends BinaryTree {
	insertIteratively(value: any) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return;
		}
		let currentNode = this.root;
		while (true) {
			if (currentNode.value > value) {
				if (currentNode.left) {
					currentNode = currentNode.left;
					continue;
				} else {
					currentNode.left = newNode;
					return this.root;
				}
			} else if (currentNode.value < value) {
				if (currentNode.right) {
					currentNode = currentNode.right;
					return this.root;
				} else {
					currentNode.right = newNode;
					return this.root;
				}
			} else {
				return this.root;
			}
		}
	}

	insertRecursively(root: Child, value: any): Node {
		if (root === null) {
			return new Node(value);
		}
		if (root.value > value) {
			root.left = this.insertRecursively(root.left, value);
		} else if (root.value < value) {
			root.right = this.insertRecursively(root.right, value);
		} else {
			return root;
		}
		return root;
	}

	findIteratively(value: any) {
		if (this.root === null) return undefined;
		let currentNode: Child = this.root;
		while (currentNode) {
			if (currentNode.value > value) {
				currentNode = currentNode.left;
			} else if (currentNode.value < value) {
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				return currentNode;
			}
		}
		return undefined;
	}
	findRecursively(root: Child, value: any) {
		if (root === null) return undefined;
		if (root.value > value) {
			return this.findRecursively(root.left, value);
		} else if (root.value < value) {
			return this.findRecursively(root.right, value);
		} else if (root.value === value) {
			return root;
		}
	}
}

const tree = new BinarySearchTree();
const list = [20, 10, 40, 30, 5, 11, 50];
//                  20
//                /    \
//              10      40
//             /  \    /   \
//            5   11  30    50
for (const el of list) {
	// tree.insertIteratively(el);
	tree.root = tree.insertRecursively(tree.root, el);
}
console.log(tree.findIteratively(11));
console.log(tree.findRecursively(tree.root, 29));
