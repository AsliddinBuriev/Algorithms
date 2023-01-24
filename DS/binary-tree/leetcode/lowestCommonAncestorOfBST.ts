import { Node, Child } from '../BinaryTree';

// Breadth First Search
// Time Complexity: O(n)
// Space Complexity: O(0)
const bfs = function (root: Child, p: Child, q: Child) {
	let commonAncestor = root;
	const queue = [root];
	while (queue.length) {
		const currentNode = queue.shift() as Node;
		if (
			(currentNode.value >= q?.value && currentNode.value <= p?.value) ||
			(currentNode.value >= p?.value && currentNode.value <= q?.value)
		) {
			commonAncestor = currentNode;
			break;
		}
		if (currentNode.left) queue.push(currentNode.left);
		if (currentNode.right) queue.push(currentNode.right);
	}
	return commonAncestor;
};

const dfs = function (root: Node, p: Node, q: Node) {
	let commonAncestor = root;
	let isSet = false;
	const traverse = (root: Node, p: Node, q: Node) => {
		if (root === null) return;
		if (
			(p.value >= root.value && q.value <= root.value) ||
			(q.value >= root.value && p.value <= root.value)
		)
			if (!isSet) {
				commonAncestor = root;
				isSet = true;
			}
		const left = traverse(root.left as Node, p, q);
		const right = traverse(root.right as Node, p, q);
	};
	traverse(root, p, q);
	return commonAncestor;
};
