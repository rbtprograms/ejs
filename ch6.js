//objects
//Vector
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }
    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

//Group
class Group {
    constructor() {
        this.iter = [];
    }

    add(el) {
        if(!this.has(el)) {
            this.iter.push(el);
        } 
    }

    delete(el) {
        this.iter = this.iter.filter(item => item !== el);
    }

    has(el) {
        return this.iter.includes(el);
    }

    static from(iterable) {
        let group = new Group;
        for (let item of iterable) {
            group.add(item);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this.iter);
    }
}

//iterable group
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        if(this.group.length === this.index) {
            return { done: true };
        }
        
        let value = this.group[this.index];
        this.index++;

        return { value, done: false };
    }
}
