describe('tests in demo.test.js file', () => {
  test('should to be equals the strings', () => {
    // 1. Inicializacion - preparacion
    const message = 'Hello World';

    // 2. Estimulo
    const message2 = `Hello World`;

    // 3. Observar el comportamiento
    expect(message).toBe(message2);
  });
});
