import { Node } from "./Node.mjs"

// iterative solution
// T: O(n) and S: O(n)
function depthFirstValue(root) {
  if (!root) return []

  const result = []
  const stack = [root]
  while (stack.length > 0) {
    const currentNode = stack.pop()
    result.push(currentNode.value)

    if (currentNode.right) stack.push(currentNode.right)
    if (currentNode.left) stack.push(currentNode.left) 
  }

  return result
}

// recursive solution
// T: O(n) and S: O(n)
function recuresiveDepthFirstValue(root) {
  if (!root) return []

  const leftValues = recuresiveDepthFirstValue(root.left)
  const rightValues = recuresiveDepthFirstValue(root.right)

  return [root.value, ...leftValues, ...rightValues]
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

console.log(depthFirstValue(a))
console.log(recuresiveDepthFirstValue(a))
