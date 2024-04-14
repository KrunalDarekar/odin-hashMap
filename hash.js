export default function hash(key, modFactor) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = ((primeNumber * hashCode + key.charCodeAt(i)) % modFactor);
    }
 
    return hashCode;
}