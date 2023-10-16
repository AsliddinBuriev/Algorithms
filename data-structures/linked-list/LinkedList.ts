import { SinglyLinkedListNode, DoublyLinkedListNode } from './Node';

export interface LinkedList {
	insert(value: number | string): void;
	remove(value: number | string): void;
	contains(value: number | string): boolean;
	tail: SinglyLinkedListNode | DoublyLinkedListNode | null;
	head: SinglyLinkedListNode | DoublyLinkedListNode | null;
}

export class SinglyLinkedList implements LinkedList {
	tail: SinglyLinkedListNode | null;
	head: SinglyLinkedListNode | null;
	constructor() {
		this.tail = null;
		this.head = null;
	}
	insert(value: number | string): void {
		const newNode = new SinglyLinkedListNode(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}
		this.tail!.next = newNode;
		this.tail = newNode;
	}
	remove(value: number | string): void {
		if (!this.head) return;
		let currentNode = this.head;
		let previousNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				previousNode.next = currentNode.next;
				break;
			}
			previousNode = currentNode;
			currentNode = currentNode.next!;
		}
	}
	contains(value: number | string): boolean {
		if (!this.head) return false;
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.next!;
		}
		return false;
	}
}

export class DoublyLinkedList implements LinkedList {
	tail: DoublyLinkedListNode | null;
	head: DoublyLinkedListNode | null;
	constructor() {
		this.tail = null;
		this.head = null;
	}
	insert(value: number | string): void {
		const newNode = new DoublyLinkedListNode(value);
		const currentTail = this.tail;
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			if (currentTail) {
				newNode.prev = currentTail;
				currentTail.next = newNode;
			}

			return;
		}
		this.tail!.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
	}
	remove(value: number | string): void {
		if (!this.head) return;
		let currentNode = this.head;
		let previousNode: DoublyLinkedListNode | null = null;
		while (currentNode) {
			if (currentNode.value === value) {
				if (currentNode.prev) {
					currentNode.prev.next = currentNode.next;
				} else {
					this.head = currentNode.next;
				}
				break;
			}
			previousNode = currentNode;
			currentNode = currentNode.next as DoublyLinkedListNode;
		}
	}
	contains(value: number | string): boolean {
		if (!this.head) return false;
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.next!;
		}
		return false;
	}
}
