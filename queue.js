class Queue {
  constructor() {
    this.elements = [];
  }

  // Método para adicionar um elemento à fila
  enqueue(element) {
    this.elements.push(element);
  }

  // Método para remover e retornar o primeiro elemento da fila
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"; // Retorna "Underflow" se a fila estiver vazia
    }
    return this.elements.shift(); // Remove e retorna o primeiro elemento usando shift()
  }

  // Método para retornar o primeiro elemento da fila sem removê-lo
  peek() {
    if (this.isEmpty()) {
      return "No elements in Queue"; // Retorna "No elements in Queue" se a fila estiver vazia
    }
    return this.elements[0]; // Retorna o primeiro elemento sem removê-lo
  }

  // Método para verificar se a fila está vazia
  isEmpty() {
    return this.elements.length === 0; // Retorna true se a fila estiver vazia
  }

  // Método para retornar o tamanho da fila
  size() {
    return this.elements.length; // Retorna o número de elementos na fila
  }
}

module.exports = Queue;
