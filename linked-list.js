import node from "./node.js";

const linkedList = () => {
    let head = null;
    let tail = null;
    let size = 0;

    const getHead = () => head;
    const getTail = () => tail;
    const getSize = () => size;

    const append = (value) => {
        if (head === null) {
            head = node(value);
            tail = head;
            size++;
        } else {
            const newNode = node(value);
            tail.nextNode = newNode;
            tail = newNode;
            size++
        }
    }
    
    const at = (index) => {
        if (index === 0) {
            return head;
        } else {
            let prevNode = head;
            let curNode;
            for(let i = 1; i <= index; i++) {
                curNode = prevNode.nextNode;
                prevNode = curNode;
            }
            return curNode;
        }
    }

    const pop = () => {
        let prevNode = head;
        let curNode = head.nextNode;
        if(prevNode === null) {
            return "no elements in the list";
        } else if (curNode === null) {
            head = null;
        } else {
            let nextNode = curNode.nextNode;
            if(nextNode === null) {
                prevNode.nextNode = null;
            } else {
                while(nextNode != null) {
                    prevNode = curNode;
                    curNode = nextNode;
                    nextNode = curNode.nextNode;
                }
                prevNode.nextNode = null;
            }
        }
    }

    const remove = (index) => {
        let curNode = head;
        if(index === 0) {
            head = curNode.nextNode
        }
        let prevNode;
        for(let i = 0; i < index; i++) {
            prevNode = curNode
            curNode = curNode.nextNode
        }
        if(curNode.nextNode) {
            prevNode.nextNode = curNode.nextNode
        } else {
            prevNode.nextNode = null
            tail = prevNode
        }
    }

    const contains = (value) => {
        let curNode = head;
        while(curNode != null) {
            if(curNode.value === value) {
                return true;
            }
            curNode = curNode.nextNode;
        }
        return false;
    }

    const find = (value) => {
        let curNode = head;
        let index = 0;
        while(curNode != null) {
            if(curNode.value === value) {
                return index;
            }
            curNode = curNode.nextNode;
            index++;
        }
        return null;
    }

    const replace = (index, value) => {
        let curNode = head;
        for(let i = 0; i < index; i++) {
            curNode = curNode.nextNode
        }
        curNode.value = value
    }

    const toString = () => {
        let curNode = head;
        let listStr ;
        if(curNode === null) {
            return "no elements in the list"
        } else {
            listStr = `(${curNode.value})`
        }
        curNode = curNode.nextNode;
        while(curNode != null) {
            listStr += ` -> (${curNode.value})`;
            curNode = curNode.nextNode;
        }
        return listStr;
    }

    return {
        getHead,
        getSize,
        getTail,
        append,
        at,
        pop,
        contains,
        find,
        toString,
        replace
    }
};

export default linkedList;