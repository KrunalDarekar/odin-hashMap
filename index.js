import hash from "./hash.js";
import hashMap from "./hashMap.js";
import linkedList from "./linked-list.js";

const list = linkedList();

// console.log(hash("carla"))
// console.log(hash("carlos", 16))


list.append(4);
list.append(5);
list.append(6);
// console.log(list.getHead());
// console.log(list.getSize());
// console.log(list.getTail());
console.log(list.toString());
// list.remove(2); 
// console.log(list.toString());
// list.remove(1);
// console.log(list.toString());
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
// console.log(list.find(4))
// console.log(list.find(5))
// console.log(list.find(6))
// list.replace(list.find(4), 7)
// console.log(list.toString());
// list.replace(list.find(5), 8)
// console.log(list.toString());
// list.replace(list.find(6), 9)
// console.log(list.toString());
// console.log(list.find(3))

const map = hashMap()
map.set("carlos", "matthew")
console.log(map.get("carlos"))
map.set("carla", "worng")
console.log(map.get("carla"))
map.set("scott", "warner")
console.log(map.get("scott"))
map.set("krunal", "darekar")
console.log(map.get("krunal"))
map.set("om", "kadam")
console.log(map.get("om"))
console.log(map.has("krunal"))
console.log(map.has("carlos"))
console.log(map.has("worng"))
console.log(map.length())
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
map.remove("krunal")
console.log(map.remove("wrong"))
console.log(map.length())
map.remove("om")
console.log(map.length())
map.remove("carlos")
console.log(map.length())
map.remove("carla")
console.log(map.length())
map.remove("scott")
console.log(map.length())
console.log(map.entries())
map.set("om", "kad")
console.log(map.length())
console.log(map.entries())
map.clear()
console.log(map.length())
console.log(map.entries())
