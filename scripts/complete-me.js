import Node from './Node.js';

class CompleteMeTree {
  constructor () {
    this.root = null;
  }

  addNode (word) {
    if (!root) {
      this.root = new Node(word);
      return
    }
    let currentNode = root;
    let newNode = new Node(word);
    while (currentNode) {
      if (word.length < currentNode.word.length) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        }
        else {
          currentNode = currentNode.left;
        }
      }
      else {
        if (!currentNode.right) {
          currentNode.right = newNode;
        }
        else {
          currentNode = currentNode.right
        }
      }
    }
  }
}

export default { CompleteMeTree };
