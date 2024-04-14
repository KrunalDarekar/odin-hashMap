import hash from "./hash"
import linkedList from "./linked-list"

console.log(hash("carla", 16))

const hashMap = () => {
    const buckets = []
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

    const length = () => {

    }

    const clear = () => {
        
    }

    const keys = () => {
        
    }

    const values = () => {
        
    }

    const entries = () => {
        
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