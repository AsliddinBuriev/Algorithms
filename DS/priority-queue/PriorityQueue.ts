export class Node {
    constructor(public value: number, public priority: number){
        this.value = value;
        this.priority = priority;
    }
}

export class PriorityQueue {
    private values: Node[] = [];
    constructor(){
        this.values = [];
    }
    enqueue(value: number, priority: number){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp(this.values.length - 1)
    }
    dequeue(){}
    private bubbleUp(childIndex: number): void {
		const parentIndex = Math.floor((childIndex - 1) / 2);
		if (
			parentIndex === 0 ||
			this.values[childIndex].priority >= this.values[parentIndex].priority
		)
			return;
		const temp = this.values[childIndex];
		this.values[childIndex] = this.values[parentIndex];
		this.values[parentIndex] = temp;
		this.bubbleUp(parentIndex);
	}
}