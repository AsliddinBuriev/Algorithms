import { heapSort, mergeSort } from './algorithms/sorting';

const sorted = mergeSort(
	Array.from({ length: 100 }, () => Math.floor(Math.random() * 100000))
);
