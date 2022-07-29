import { Queue } from './Queue.mjs'
import { Node } from './Node.mjs'

// T: O(n) and S: O(n) [complexity]
function breadthFirstValues(root) {
  if (!root) return []

  const queue = new Queue()
  const result = []

  queue.enqueue(root)

  while (queue.size()) {
    const currentNode = queue.dequeue()
    result.push(currentNode.value)

    if (currentNode.left) queue.enqueue(currentNode.left)
    if (currentNode.right) queue.enqueue(currentNode.right)
  }

  return result
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

console.log(breadthFirstValues(a))