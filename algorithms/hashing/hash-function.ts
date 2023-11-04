type Data = number | string | Buffer;
interface Opt {
	numberOfSubsets: number;
	paddingValue: number | string;
}
export function hashFunction(
	data: Data,
	upperRange: number,
	paddingValue: number | string,
	multiplier: number
): number {
	const numberOfSubsets = 10;
	paddingValue = `${paddingValue}`;
	if (!Buffer.isBuffer(data)) data = Buffer.from(`${data}`, 'utf-8');
	if (data.length < numberOfSubsets) {
		let diff = numberOfSubsets - data.length;
		const padding = Buffer.alloc(diff).fill(paddingValue);
		data = Buffer.concat([data, padding]);
	}
	const subsetLen = Math.floor(data.length / numberOfSubsets);
	const middleIdx = Math.floor(subsetLen / 2);
	const lastIdx = subsetLen - 1;
	let hash = 0;
	for (let i = 0; i < numberOfSubsets; i += subsetLen) {
		const subset = data.subarray(i, i + subsetLen);
		const first = subset[0];
		const middle = subset[middleIdx];
		const last = subset[lastIdx];
		const sum = hash * multiplier + first + middle + last;
		hash = Math.floor(sum % upperRange);
	}
	return hash;
}
