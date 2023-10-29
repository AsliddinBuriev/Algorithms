import { BinaryHeap } from './BinaryHeap';

export class MaxBinaryHeap extends BinaryHeap {
	constructor() {
		super();
	}
	public insert(value: number) {
		this.list.push(value);
		this.bubbleUp(this.list.length - 1);
	}

	private bubbleUp(childIndex: number): void {
		const parentIndex = Math.floor((childIndex - 1) / 2);
		if (childIndex === 0 || this.list[childIndex] <= this.list[parentIndex])
			return;
		const temp = this.list[childIndex];
		this.list[childIndex] = this.list[parentIndex];
		this.list[parentIndex] = temp;
		this.bubbleUp(parentIndex);
	}

	public extract(value: number) {
		const index = this.list.indexOf(value);
		const lastElement = this.list.pop()!;
		if (index >= this.list.length || this.list.length === 0) return;
		this.list[index] = lastElement;
		this.bubbleDown(index);
	}

	private bubbleDown(index: number) {
		const leftChildIndex = index * 2 + 1;
		const rightChildIndex = index * 2 + 2;
		let leftChild: number | null = null;
		let rightChild: number | null = null;
		const length = this.list.length;
		let nextIndex: number;
		if (leftChildIndex < length) leftChild = this.list[leftChildIndex];
		if (rightChildIndex < length) rightChild = this.list[rightChildIndex];
		if (leftChild !== null && rightChild !== null)
			nextIndex = leftChild > rightChild ? leftChildIndex : rightChildIndex;
		else if (leftChild === null && rightChild) nextIndex = rightChildIndex;
		else if (leftChild && rightChild === null) nextIndex = leftChildIndex;
		else return;
		if (this.list[nextIndex] <= this.list[index]) return;
		const temp = this.list[index];
		this.list[index] = this.list[nextIndex];
		this.list[nextIndex] = temp;
		this.bubbleDown(nextIndex);
	}
}

const maxBinaryHeap = new MaxBinaryHeap();

[41, 39, 33, 18, 27, 12, 55].forEach((val) => {
	maxBinaryHeap.insert(val);
});

