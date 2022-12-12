import { BinaryTree, Node, Child } from './BinaryTree';

class BinaryTreeTraversial extends BinaryTree {
	public breadthFirstSearch(): any[] {
		const queue: Node[] = [this.root!];
		const storage: any[] = [];
		if (this.root === null) return storage;
		let currentNode;
		while (queue.length) {
			currentNode = queue.shift();
			storage.push(currentNode?.value);
			if (currentNode?.left) queue.push(currentNode.left);
			if (currentNode?.right) queue.push(currentNode.right);
		}
		return storage;
	}

	public breadthFirstInsert(value: any) {
		if (this.root === null) {
			this.root = new Node(value);
			return;
		}
		const queue: Node[] = [this.root];
		let currentNode;
		while (queue) {
			currentNode = queue.shift()!;
			if (currentNode.left) {
				queue.push(currentNode.left);
			} else {
				currentNode.left = new Node(value);
				break;
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			} else {
				currentNode.right = new Node(value);
				break;
			}
		}
		console.log(this.root);
	}

	private inOrderSearch(root: Child, storage: any[] = []) {
		if (root === null) return storage;
		this.inOrderSearch(root.left, storage);
		storage.push(root.value);
		this.inOrderSearch(root.right, storage);
		return storage;
	}

	private preOrderSearch(root: Child, storage: any[] = []) {
		if (root === null) return storage;
		storage.push(root.value);
		this.preOrderSearch(root.left, storage);
		this.preOrderSearch(root.right, storage);
		return storage;
	}
	private postOrderSearch(root: Child, storage: any[] = []) {
		if (root === null) return storage;
		this.postOrderSearch(root.left, storage);
		this.postOrderSearch(root.right, storage);
		storage.push(root.value);
		return storage;
	}
	public depthFirstSearch() {
		return {
			preOrderSearch: this.preOrderSearch(this.root)!,
			inOrderSearch: this.inOrderSearch(this.root)!,
			postOrderSearch: this.postOrderSearch(this.root)!,
		};
	}
}

const tree = new BinaryTreeTraversial();
const array = [10, 11, 15, 25, 28, 26, 30];
for (const val of array) {
	tree.breadthFirstInsert(val);
}

console.log(tree.depthFirstSearch());
