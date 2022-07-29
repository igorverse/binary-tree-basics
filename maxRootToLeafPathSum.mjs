import { Node } from './Node.mjs';

function maxPathSum(root) {
  if (!root) return -Infinity
  if (!root.left && !root.right) return root.value
  
  const maxChildPathSum = Math.max(maxPathSum(root.left) , maxPathSum(root.right))

  return root.value + maxChildPathSum
}

const a = new Node(5)
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

console.log(maxPathSum(a))