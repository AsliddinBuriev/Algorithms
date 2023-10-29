import { MinBinaryHeap } from '../../data-structures/heap';

export function heapSort(arr: number[]): number[] {
	const sortedArray: number[] = [];
	const minHeap = new MinBinaryHeap(arr);
	while (minHeap.list.length) {
		const min = minHeap.extractMin();
		if (min) sortedArray.push(min);
	}
	console.log('**** SORTING IS COMPLETED! ****');
	console.log('Sorted Array:', sortedArray);
	return sortedArray;
}
