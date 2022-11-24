import { readFileSync } from "fs";
import { join } from "path";

class SinglyLinkedListNode {
	data: number;
	next: SinglyLinkedListNode | null;
	constructor(data?: number) {
		this.data = data === undefined ? 0 : data;
		this.next = null;
	}
}

function compareLists(a: SinglyLinkedListNode | null, b: SinglyLinkedListNode | null) {
	while (a != null && b != null) {
		if (a.data != b.data) return false;
		a = a.next;
		b = b.next;
	}

	return a == null && b == null;
}

const push = (root: SinglyLinkedListNode, new_data: number): SinglyLinkedListNode => {
	const new_node = new SinglyLinkedListNode(new_data);

	new_node.next = root;

	root = new_node;
	return root;
};

let llist1 = new SinglyLinkedListNode();
let llist2 = new SinglyLinkedListNode();

llist1 = push(llist1, 1);
llist1 = push(llist1, 2);
llist1 = push(llist1, 3);

llist2 = push(llist2, 1);
llist2 = push(llist2, 2);
llist2 = push(llist2, 3);

if (compareLists(llist1, llist2) == true) console.log("Identique");
else console.log("Différent");

// const fileTest1 = readFileSync(join(__dirname, "..", "test", "assignment01-1.txt"), "utf-8");
// const dataRaw = fileTest1.split("\n").map((el) => Number(el));
// const numberOfTests = dataRaw[0];
