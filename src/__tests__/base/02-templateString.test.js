import '@testing-library/jest-dom';

import getGreeting from '../../base/02-templateString';

describe('Test in 02-templateString', () => {
  it('should return Hola Nikola', () => {
    const name = 'Nikola';
    const greeting = getGreeting({ name });

    expect(greeting).toBe(`Hola ${name}`);
  });

  it('should return Hola Carlos if there is no name argument', () => {
    const greeting = getGreeting();

    expect(greeting).toBe('Hola Carlos');
  });
});
