// calculadora.test.js
const Calculadora = require('./calculadora');

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    expect(Calculadora.soma(2, 2)).toBe(4);
    expect(Calculadora.soma(-1, 1)).toBe(0);
  });

  it('Deverá retornar a subtração de dois números', () => {
    expect(Calculadora.subtrai(5, 3)).toBe(2);
    expect(Calculadora.subtrai(2, 2)).toBe(0);
  });

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(Calculadora.multiplica(3, 3)).toBe(9);
    expect(Calculadora.multiplica(4, 0)).toBe(0);
  });

  it('Deverá retornar a divisão entre dois números', () => {
    expect(Calculadora.divide(10, 2)).toBe(5);
    expect(Calculadora.divide(9, 3)).toBe(3);
  });

  it('Deverá lançar um erro ao tentar dividir por zero', () => {
    expect(() => Calculadora.divide(10, 0)).toThrow('Não é possível dividir por zero');
  });
});
