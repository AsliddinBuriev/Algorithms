import { hashFunction } from './hash-function';

export const storage = new Array(50).fill(0);

export function storeUsername(
	data: string | number | Buffer,
	numOfHash: number
) {
	for (let i = 0; i < numOfHash; i++) {
		const hash = hashFunction(data, storage.length, 'hey', i);
		console.log('storeUsername', hash);
		storage[hash] = 1;
	}
}

export function bloomFiler(
	data: string | number | Buffer,
	numOfChecks: number
): Boolean {
	for (let i = 0; i < numOfChecks; i++) {
		const hash = hashFunction(data, storage.length, 'hey', i);
		console.log('bloomFilter', hash);
		if (!storage[hash]) return false;
	}
	return true;
}
