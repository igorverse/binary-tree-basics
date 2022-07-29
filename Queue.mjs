export class Queue {
  constructor() {
    this._counter = 0
    this._lowestCount = 0
    this._items = {}
  }

  enqueue(element) {
    this._items[this._counter] = element
    this._counter++
  }

  dequeue() {
    if (this.isEmpty()) return 'Queue is empty!'

    const removedElement = this._items[this._lowestCount]
    delete this._items[this._lowestCount]

    this._lowestCount++

    return removedElement
  }

  peek() {
    if (this.isEmpty()) return 'Queue is empty!'

    return this._items[this._lowestCount]
  }

  size() {
    return this._counter - this._lowestCount
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this._items = {}
    this._counter = 0
    this._lowestCount = 0
  }
}