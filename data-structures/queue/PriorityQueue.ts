export class Node {
	constructor(public value: number, public priority: number) {
		this.value = value;
		this.priority = priority;
	}
}

export class PriorityQueue {
	public list: number[];
	constructor() {
		this.list = [];
	}
	enqueue(value: number): void {
		this.list.push(value);
		this.bubbleUp(this.list.length - 1);
	}
	dequeue(): number {
		const root = this.list[0];
		const lastChild = this.list.pop()!;
		this.list[0] = lastChild;
		this.bubbleDown(0);
		return root;
	}
	private bubbleUp(childIndex: number): void {
		const parentIndex = Math.floor((childIndex - 1) / 2);
		if (childIndex === 0 || this.list[parentIndex] < this.list[childIndex])
			return;
		const el = this.list[parentIndex];
		this.list[parentIndex] = this.list[childIndex];
		this.list[childIndex] = el;
		this.bubbleUp(parentIndex);
	}
	private bubbleDown(index: number): void {
		console.log(this.list);
		let leftChildIndex = index * 2 + 1;
		let rightChildIndex = index * 2 + 2;
		let leftChild = this.list[leftChildIndex];
		let rightChild = this.list[rightChildIndex];
		let nextParentIndex: number;
		if (leftChild && rightChild) {
			if (leftChild <= rightChild) nextParentIndex = leftChildIndex;
			else nextParentIndex = rightChildIndex;
		} else if (leftChild && !rightChild) {
			nextParentIndex = leftChildIndex;
		} else if (!leftChild && rightChild) {
			nextParentIndex = rightChildIndex;
		} else {
			return;
		}
		if (this.list[index] < this.list[nextParentIndex]) return;

		const temp = this.list[nextParentIndex];
		this.list[nextParentIndex] = this.list[index];
		this.list[index] = temp;
		this.bubbleDown(nextParentIndex);
	}
}
