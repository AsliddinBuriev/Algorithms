import { Node, PriorityQueue } from './PriorityQueue';

export interface IQueue {
	enqueue(value: number | string): void;
	dequeue(): number | string;
}

export class Queue implements IQueue {
	queue: Array<number | string> = [];
	constructor() {
		this.queue = [];
	}
	enqueue(value: number | string): void {
		this.queue.push(value);
	}
	dequeue(): number | string {
		if (!this.queue.length) throw new Error('Queue is empty');
		return this.queue.shift()!;
	}
}
