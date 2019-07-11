//trees are non linear data structures: 
    //root: top node, a tree can only have one root (cannot have many)
    //child: node connected to another node while moving down the root;
    //Parent: preceding element to any child
    //Siblings : group of nodes with the same parent
    //leaf: node with no children
    // Edge (Kante) : connection between a node and another
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            if(this.root.val > val) {
                let counter = 0;
                let actual = this.root;
                while(true) {
                    if(val === actual.val) {
                        actual.val = `${actual.val}(${++counter})`
                        return this;
                    }
                    if(val < actual.val) {
                        if(!actual.left) {
                            actual.left = newNode;
                            return this;
                        } else {
                            actual = actual.left;
                        }
                    } else if(val > actual.val) {
                        if(!actual.right) {
                            actual.right = newNode;
                            return this;
                        } else {
                            actual = actual.right;
                        }
                    }
                }
            }
        }
    }

    printTree() {
        
    }

    find(val) {
        if(!this.root) return undefined
        let i = this.root
        while(i) {
            console.log(i.val, val)
            if(val === i.val) {
                return i;
            } else if(val < i.left) {
                i = i.left
            } else {
                i = i.right
            }
        }
        return undefined
    }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.insert(1);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(4);
binarySearchTree.insert(5);
binarySearchTree.insert(6);
binarySearchTree.insert(13);
binarySearchTree.insert(14);
binarySearchTree.insert(15);
binarySearchTree.insert(16);
console.log(binarySearchTree.find(6));

console.log(binarySearchTree);
