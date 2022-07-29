import { Node } from './Node.mjs'
import { Queue } from './Queue.mjs'


// using breadthFirst: T: O(n) and S: O(n)
function treeIncludes(root, target) {
  if (root.value === target) return true

  const queue = new Queue()
  queue.enqueue(root)

  while (queue.size()) {
    const currentNode = queue.dequeue()

    if (currentNode.value === target) return true

    if (currentNode.left) queue.enqueue(currentNode.left)
    if (currentNode.right) queue.enqueue(currentNode.right)
  }

  return false
}

// T: O(n) and S: O(n)
function recursiveTreeIncludes(root, target) {
  if (!root) return false
  if (root.value === target) return true

  return recursiveTreeIncludes(root.left, target) || recursiveTreeIncludes(root.right, target)
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeIncludes(a, 'a'))
console.log(treeIncludes(a, 'e'))
console.log(treeIncludes(a, 'c'))
console.log(treeIncludes(a, 'z'))


console.log('\nrecursive implementation')
console.log(recursiveTreeIncludes(a, 'a'))
console.log(recursiveTreeIncludes(a, 'e'))
console.log(recursiveTreeIncludes(a, 'c'))
console.log(recursiveTreeIncludes(a, 'z'))