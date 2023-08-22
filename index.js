import linkedList from "./linked-list.js";

const list = linkedList();

list.append(4);
list.append(5);
list.append(6);
// console.log(list.getHead());
// console.log(list.getSize());
// console.log(list.getTail());
console.log(list.toString());
// console.log(list.at(0));
// console.log(list.at(1));
// console.log(list.at(2));
// list.pop();
// console.log(list.toString());
// list.pop();
// console.log(list.toString());
// list.pop();
// console.log(list.toString());
// console.log(list.contains(4))
// console.log(list.contains(5))
// console.log(list.contains(6))
// console.log(list.contains(2))
console.log(list.find(4))
console.log(list.find(5))
console.log(list.find(6))
console.log(list.find(3))