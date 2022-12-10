import { BinaryHeap } from './BinaryHeap';

export class MaxBinaryHeap extends BinaryHeap {
	constructor() {
		super();
	}
	public insert(value: number) {
		this.values.push(value);
		this.bubbleUp(this.values.length - 1);
	}

	private bubbleUp(childIndex: number): void {
		const parentIndex = Math.floor((childIndex - 1) / 2);
		if (
			childIndex === 0 ||
			this.values[childIndex] <= this.values[parentIndex]
		)
			return;
		const temp = this.values[childIndex];
		this.values[childIndex] = this.values[parentIndex];
		this.values[parentIndex] = temp;
		this.bubbleUp(parentIndex);
	}

	public extract(value: number) {
		const index = this.values.indexOf(value);
		const lastElement = this.values.pop()!;
		if (index >= this.values.length || this.values.length === 0) return;
		this.values[index] = lastElement;
		this.bubbleDown(index);
	}

	private bubbleDown(index: number) {
		console.log(this.values);
		const leftChildIndex = index * 2 + 1;
		const rightChildIndex = index * 2 + 2;
		let leftChild: number | null = null;
		let rightChild: number | null = null;
		const length = this.values.length;
		let nextIndex: number;
		if (leftChildIndex < length) leftChild = this.values[leftChildIndex];
		if (rightChildIndex < length) rightChild = this.values[rightChildIndex];
		if (leftChild !== null && rightChild !== null)
			nextIndex =
				leftChild > rightChild ? leftChildIndex : rightChildIndex;
		else if (leftChild === null && rightChild) nextIndex = rightChildIndex;
		else if (leftChild && rightChild === null) nextIndex = leftChildIndex;
		else return;
		if (this.values[nextIndex] <= this.values[index]) return;
		const temp = this.values[index];
		this.values[index] = this.values[nextIndex];
		this.values[nextIndex] = temp;
		this.bubbleDown(nextIndex);
	}
}

const maxBinaryHeap = new MaxBinaryHeap();

[41, 39, 33, 18, 27, 12, 55].forEach((val) => {
	maxBinaryHeap.insert(val);
});

maxBinaryHeap.extract(33);
maxBinaryHeap.extract(39);
console.log(maxBinaryHeap.values);
