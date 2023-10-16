export interface ISinglyLinkedListNode {
	value: number | string;
	next: ISinglyLinkedListNode | null;
}

export interface IDoublyLinkedListNode extends ISinglyLinkedListNode {
	prev: IDoublyLinkedListNode | null;
}

export class SinglyLinkedListNode implements ISinglyLinkedListNode {
	value: number | string;
	next: SinglyLinkedListNode | null;
	constructor(value: number | string) {
		this.value = value;
		this.next = null;
	}
}

export class DoublyLinkedListNode implements IDoublyLinkedListNode {
	value: number | string;
	next: DoublyLinkedListNode | null;
	prev: DoublyLinkedListNode | null;
	constructor(value: number | string) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
