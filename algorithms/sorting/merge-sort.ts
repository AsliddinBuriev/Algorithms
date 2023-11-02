export function mergeSort(arr: number[]) {
	if (arr.length <= 1) return arr;
	const middle = Math.floor(arr.length / 2);
	const arr1 = mergeSort(arr.slice(0, middle));
	const arr2 = mergeSort(arr.slice(middle));
	return merge(arr1, arr2);
}

function merge(arr1: number[], arr2: number[]) {
	const result = [];
	let counter1 = 0;
	let counter2 = 0;
	while (counter1 < arr1.length && counter2 < arr2.length) {
		if (arr1[counter1] <= arr2[counter2]) {
			result.push(arr1[counter1]);
			counter1++;
		} else {
			result.push(arr2[counter2]);
			counter2++;
		}
	}
	if (counter1 < arr1.length) result.push(...arr1.slice(counter1));
	if (counter2 < arr2.length) result.push(...arr2.slice(counter2));
	return result;
}
