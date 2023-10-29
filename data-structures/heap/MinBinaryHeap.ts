import { BinaryHeap } from './BinaryHeap';

export class MinBinaryHeap extends BinaryHeap {
	constructor(numbers: number[] = []) {
		super();
		if (numbers.length > 0) this.construct(numbers);
	}
	private construct(list: number[]): void {
		for (const el of list) this.insert(el);
		console.log('***** HEAP IS CONSTUCTED ****');
	}
	public size(): number {
		return this.list.length;
	}
	public insert(el: number): void {
		this.list.push(el);
		const index = this.size() - 1;
		this.bubbleUp(index);
	}
	public extractMin(): number | null {
		const size = this.size();
		if (size === 0) return null;
		else if (size === 1) return this.list.pop();
		const min = this.list[0];
		const lastEl = this.list.pop();
		this.list[0] = lastEl!;
		this.bubbleDown(0);
		return min;
	}
	private bubbleUp(index: number): void {
		const val = this.list[index];
		const parentIndex = Math.floor(index / 2);
		const parentVal = this.list[parentIndex];
		if (index === 0 || val > parentVal) return;
		this.list[parentIndex] = val;
		this.list[index] = parentVal;
		this.bubbleUp(parentIndex);
	}
	private bubbleDown(index: number): void {
		const size = this.size();
		const leftChildIndex = index * 2 + 1;
		const rightChildIndex = index * 2 + 2;
		const leftChild = this.list[leftChildIndex];
		const rightChild = this.list[rightChildIndex];
		if (leftChildIndex > size - 1) return;
		let minChildIndex: number;
		if (leftChildIndex <= size - 1 && rightChildIndex > size - 1)
			minChildIndex = leftChildIndex;
		else
			minChildIndex = leftChild > rightChild ? rightChildIndex : leftChildIndex;
		const minChild = this.list[minChildIndex];
		const val = this.list[index];
		if (minChild > val) return;
		this.list[index] = minChild;
		this.list[minChildIndex] = val;
		this.bubbleDown(minChildIndex);
	}
}
