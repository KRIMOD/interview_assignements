import { readFileSync, promises as fsPromises } from "fs";
import { join } from "path";

const minimumDistances = (a: number[]): number => {
	let minDistance = a.length + 1;
	const mapB = new Map<number, number>();

	let currentIndex = 0;
	let previousIndex = 0;

	a.forEach((el, index) => {
		if (mapB.has(a[el])) {
			currentIndex = index;
			previousIndex = mapB.get(a[index]) || previousIndex;
			minDistance = Math.min(currentIndex - previousIndex, minDistance);
		}

		mapB.set(a[index], index);
	});

	return minDistance === a.length + 1 ? -1 : minDistance;
};

// const fileTest1 = readFileSync(join(__dirname, "..", "test", "assignment02-1.txt"), "utf-8").split("\n");
// const n1 = Number(fileTest1[0]);
// const arr1 = fileTest1[1].split(" ").map((el) => Number(el)).slice(0,n1);
// console.log(minimumDistances(arr1));

// const fileTest2 = readFileSync(join(__dirname, "..", "test", "assignment02-2.txt"), "utf-8").split("\n");
// const n2 = Number(fileTest1[0]);
// const arr2 = fileTest1[1].split(" ").map((el) => Number(el)).slice(0,n2);
// console.log(minimumDistances(arr2));

// console.log(fileTest1);

console.log(minimumDistances([3, 2, 1, 2, 3])); // expected 2
console.log(minimumDistances([7, 1, 3, 4, 1, 7])); // expected 3
console.log(minimumDistances([1, 2, 3, 4, 5])); // expected -1
