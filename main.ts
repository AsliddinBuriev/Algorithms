import { heapSort, mergeSort } from './algorithms/sorting';
import { hashFunction } from './algorithms/hashing';
import {
	storeUsername,
	bloomFiler,
	storage,
} from './algorithms/hashing/bloom-filter';

storeUsername('asliddin', 10);
console.log(storage);
const isUsernameTaken = bloomFiler('asliddin1', 10);
console.log(isUsernameTaken);