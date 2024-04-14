import hash from "./hash.js"
import linkedList from "./linked-list.js"

console.log(hash("carla", 16))

const hashMap = () => {
    let buckets = []
    let capacity = 16

    const set = (key, value) => {
        const hashCode = hash(key, capacity)
        if(!buckets[hashCode]) {
            buckets[hashCode] = linkedList()
            buckets[hashCode].append([key, value])
        } else {
            const index = buckets[hashCode].find([key, value])
            if(index) {
                buckets[hashCode].replace(index, [key, value])
            } else {
                buckets[hashCode].append([key, value])
            }
        }
    }

    const get = (key) => {
        const hashCode = hash(key, capacity)
        if(!buckets[hashCode]) {
            return null
        } else {
            let curr = buckets[hashCode].getHead()
            if(curr.value[0] === key) {
                return curr.value[1]
            }
            while( curr != null) {
                curr = curr.nextNode
                if(curr.value[0] === key) {
                    return curr.value[1]
                }
            }
            return null
        }
    }

    const has = (key) => {
        const hashCode = hash(key, capacity)
        if(!buckets[hashCode]) {
            return false
        } else {
            let curr = buckets[hashCode].getHead()
            if(curr.value[0] === key) {
                return true
            }
            while( curr != null) {
                curr = curr.nextNode
                if(curr.value[0] === key) {
                    return true
                }
            }
            return false
        }
    }

    const remove = (key) => {
        const hashCode = hash(key, capacity)
        if(!buckets[hashCode]) {
            return false
        } else {
            let curr = buckets[hashCode].getHead()
            let index = 0
            if(curr.value[0] === key) {
                buckets[hashCode].remove(index)
                return true
            }
            while( curr != null) {
                curr = curr.nextNode
                index++
                if(curr.value[0] === key) {
                    buckets[hashCode].remove(index)
                    return true
                }
            }
            return false
        }
    }

    const length = () => {
        let length = 0;
        buckets.forEach( (bucket) => {
            if (bucket) {
                length += bucket.getSize()
            }
        })
        return length
    }

    const clear = () => {
        buckets = []
    }

    const keys = () => {
        const keys = []
        buckets.forEach( (bucket) => {
            if (bucket) {
                let curr = bucket.getHead()
                while(curr != null) {
                    keys.push(curr.value[0])
                    curr = curr.nextNode
                }
            }
        })
        return keys
    }

    const values = () => {
        const values = []
        buckets.forEach( (bucket) => {
            if (bucket) {
                let curr = bucket.getHead()
                while(curr != null) {
                    values.push(curr.value[1])
                    curr = curr.nextNode
                }
            }
        })
        return values
    }

    const entries = () => {
        const entries = []
        buckets.forEach( (bucket) => {
            if (bucket) {
                let curr = bucket.getHead()
                while(curr != null) {
                    entries.push(curr.value)
                    curr = curr.nextNode
                }
            }
        })
        return entries
    }

    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
}

export default hashMap