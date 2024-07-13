class Calculadora {
  static soma(a, b) {
    return a + b;
  }

  static subtrai(a, b) {
    return a - b;
  }

  static multiplica(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error('Não é possível dividir por zero');
    }
    return a / b;
  }
}

module.exports = Calculadora;
