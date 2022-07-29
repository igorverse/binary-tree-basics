import { Node } from './Node.mjs'
import { Queue } from './Queue.mjs'


// T: O(n) and S: O(n)
function treeMinValue(root) {
  if (!root) return null

  let lowestValue = Infinity
  const queue = new Queue()
  queue.enqueue(root)

  while (queue.size()) {
    const currentNode = queue.dequeue()
    if (currentNode.value < lowestValue) lowestValue = currentNode.value

    if (currentNode.left) queue.enqueue(currentNode.left)
    if (currentNode.right) queue.enqueue(currentNode.right)
  }

  return lowestValue
}

// T: O(n) and S: O(n)
function recursiveTreeMinValue(root) {
  if (!root) return Infinity

  const leftValue = root.value < treeMinValue(root.left) ? root.value : treeMinValue(root.left)
  const rightValue = root.right < treeMinValue(root.right) ? root.value : treeMinValue(root.right)

  return leftValue < rightValue ? leftValue : rightValue
}

function recursiveTreeMinValueV2(root) {
  if (!root) return Infinity

  const leftValue = treeMinValue(root.left) 
  const rightValue = treeMinValue(root.right)

  return Math.min(root.value, leftValue, rightValue)
}


const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(-5)
const e = new Node(2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeMinValue(a))
console.log(recursiveTreeMinValue(a))
console.log(recursiveTreeMinValueV2(a))