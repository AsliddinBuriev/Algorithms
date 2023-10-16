export class Node {
	constructor(public value: number, public priority: number) {
		this.value = value;
		this.priority = priority;
	}
}

export class PriorityQueue {
	public nodes: Node[] = [];
	constructor() {
		this.nodes = [];
	}
	enqueue(value: number, priority: number): void {
		let newNode = new Node(value, priority);
		this.nodes.push(newNode);
		this.bubbleUp(this.nodes.length - 1);
	}
	dequeue(): Node {
		const root = this.nodes[0];
		const lastChild = this.nodes.pop()!;
		this.nodes[0] = lastChild;
		this.bubbleDown(0);
		return root;
	}
	private bubbleUp(childIndex: number): void {
		const parentIndex = Math.floor((childIndex - 1) / 2);
		if (
			childIndex === 0 ||
			this.nodes[parentIndex].priority < this.nodes[childIndex].priority
		)
			return;
		const tempNode = this.nodes[parentIndex];
		this.nodes[parentIndex] = this.nodes[childIndex];
		this.nodes[childIndex] = tempNode;
		this.bubbleUp(parentIndex);
	}
	private bubbleDown(index: number): void {
		console.log(this.nodes);
		let leftChildIndex = index * 2 + 1;
		let rightChildIndex = index * 2 + 2;
		let leftChild = this.nodes[leftChildIndex];
		let rightChild = this.nodes[rightChildIndex];
		let nextParentIndex: number;
		if (leftChild && rightChild) {
			if (leftChild.priority <= rightChild.priority)
				nextParentIndex = leftChildIndex;
			else nextParentIndex = rightChildIndex;
		} else if (leftChild && !rightChild) {
			nextParentIndex = leftChildIndex;
		} else if (!leftChild && rightChild) {
			nextParentIndex = rightChildIndex;
		} else {
			return;
		}
		if (this.nodes[index].priority < this.nodes[nextParentIndex].priority)
			return;

		const temp = this.nodes[nextParentIndex];
		this.nodes[nextParentIndex] = this.nodes[index];
		this.nodes[index] = temp;
		this.bubbleDown(nextParentIndex);
	}
}
