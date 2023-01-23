import { Node, Child } from '../BinaryTree';

const kthSmallest = (root: Child, k: number): number => {
	let counter = 0;
	let output: number = 0;
	const traverseInOrder = (root: Child, k) => {
		if (!root) return;
		if (root.left) traverseInOrder(root.left, k);
		counter++;
		if (counter === k) output = root.value;
		if (root.right) traverseInOrder(root.right, k);
	};
	traverseInOrder(root, k);
	return output;
};
