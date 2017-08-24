
const insertNode = (root, newNode) => {
    if(newNode.key < root.key){
        if(root.left === null){
            root.left = newNode;
        }else{
            insertNode(root.left, newNode);
        }
    }else{
        if(root.right === null){
            root.right = newNode;
        }else{
            insertNode(root.right, newNode);
        }
    }
};

const inOrderTraverseNode = (root, callback) => {
    if(root !== null){
        inOrderTraverseNode(root.left, callback);
        callback(root.key);
        inOrderTraverseNode(root.right, callback);
    }
};

const preOrderTraverseNode = (root, callback) => {
    if(root !== null){
        callback(root.key);
        preOrderTraverseNode(root.left, callback);
        preOrderTraverseNode(root.right, callback);
    }
};

const minNode = (node) => {
    if(node){
        while (node.left !== null){
            node = node.left;
        }

        return node.key;
    }

    return null;
};

const maxNode = (node) => {
    if(node){
        while (node.right !== null){
            node = node.right;
        }

        return node.key;
    }

    return null;
};

class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor(root){
        this.root = new Node(root);
    }

    insert(value){
        let node = new Node(value);

        if(this.root == null){
            this.root = node;
        }else{
            insertNode(this.root, node);
        }
    }

    inOrderTraverse(callback){
        inOrderTraverseNode(this.root, callback);
    }

    preOrderTraverse(callback){
        preOrderTraverseNode(this.root, callback);
    }

    min(){
        return minNode(this.root);
    }

    max(){
        return maxNode(this.root);
    }
}

let treeData = [7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
let binarySearchTree = new BinarySearchTree(11);
treeData.forEach((item) => {
    binarySearchTree.insert(item);
});

let inOrderTraverseResult = [];
let getInOrderTraverse = (value) => {
    inOrderTraverseResult.push(value);
};
binarySearchTree.inOrderTraverse(getInOrderTraverse);
console.log(inOrderTraverseResult.toString());

let preOrderTraverseResult = [];
let getPreOrderTraverse = (value) => {
    preOrderTraverseResult.push(value);
};
binarySearchTree.preOrderTraverse(getPreOrderTraverse);
console.log(preOrderTraverseResult.toString());

console.log(binarySearchTree.min());

console.log(binarySearchTree.max());