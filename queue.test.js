const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila vazia', () => {
    const queue = new Queue();
    expect(queue.elements).toEqual([]);
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.size()).toBe(3);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();

    queue.enqueue(10);
    expect(queue.elements).toEqual([10]);

    queue.enqueue(20);
    expect(queue.elements).toEqual([10, 20]);
  });

  it('Deve retornar o primeiro item da fila sem removê-lo', () => {
    const queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.peek()).toBe(10);
    expect(queue.elements).toEqual([10, 20]);
  });

  it('Deve remover e retornar o primeiro item da fila', () => {
    const queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.dequeue()).toBe(10);
    expect(queue.elements).toEqual([20]);
  });

  it('Deve retornar "No elements in Queue" se a fila estiver vazia ao chamar peek()', () => {
    const queue = new Queue();

    expect(queue.peek()).toBe("No elements in Queue");
  });

  it('Deve retornar "Underflow" se a fila estiver vazia ao chamar dequeue()', () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe("Underflow");
  });
});
