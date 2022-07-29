import { Node } from './Node.mjs'
import { Queue } from './Queue.mjs'


// T: O(n) and S: O(n)
function treeSum(root) {
  if (!root) return 0

  return root.value + treeSum(root.left) + treeSum(root.right)
}

// T: O(n) and S: O(n)
function iterativeTreeSum(root) {
  if (!root) return 0

  const queue = new Queue()
  queue.enqueue(root)
  let sum = 0

  while(queue.size()) {
    const currentNode = queue.dequeue()
    sum += currentNode.value

    if (currentNode.left) queue.enqueue(currentNode.left)
    if (currentNode.right) queue.enqueue(currentNode.right)
  }

  return sum
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeSum(a))
console.log(iterativeTreeSum(a))