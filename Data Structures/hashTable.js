class HashTable {
    constructor(size = 10) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0; 
        const prime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index])
            for(let i = 0; i < this.keyMap[index].length;i++) 
                if(this.keyMap[index][i][0] === key) 
                    return this.keyMap[index][i][1];
        
        return undefined;
    }

    keys() {
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++)
            if(this.keyMap[i])
                for(let j = 0; j < this.keyMap[i].length;j++)
                    if(!keys.includes(this.keyMap[i][j][0]))
                        keys.push(this.keyMap[i][j][0]);
        
        return keys;
    }

    values() {
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++)
            if(this.keyMap[i])
                for(let j = 0; j < this.keyMap[i].length;j++)
                    if(!values.includes(this.keyMap[i][j][1]))
                        values.push(this.keyMap[i][j][1]);
        
        return values;
    }

}

let hashTable = new HashTable();
console.log(hashTable._hash("marcos"));
hashTable.set("marcos", "es marico");
hashTable.set("blue", "blue2");
hashTable.set("marcos", "marcos2");
hashTable.set("yellow", "yellow2");
console.log(hashTable.get("marcos"));
console.log(hashTable.get("blue"));
console.log(hashTable.get("marcos2"));
console.log(hashTable.keys());
console.log(hashTable.values());

