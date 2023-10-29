interface IBinaryHeap {
	insert(el: number): void;
	extract(el: number): void;
	bubbleUp(): void;
	bubbleDown(): void;
	getMin(): number;
	getMax(): number;
}
