import { Node, Child } from '../BinaryTree';
const lowestCommonAncestorOfBT = function (root: Child, p: Child, q: Child) {
	let commonAncestor = root;
	const traverse = (root: Child, p: Child, q: Child) => {
		if (root === null) return false;
		const left = traverse(root.left, p, q);
		const right = traverse(root.right, p, q);
		let hasDecendant = false;
		let isDecendant = false;
		if (left && right) {
			commonAncestor = root;
			return false;
		}
		if (left || right) hasDecendant = true;
		if (root === p || root === q) isDecendant = true;
		if (hasDecendant && isDecendant) {
			commonAncestor = root;
			return false;
		} else if (hasDecendant || isDecendant) {
			return true;
		} else {
			return false;
		}
	};
	traverse(root, p, q);
	return commonAncestor;
};
