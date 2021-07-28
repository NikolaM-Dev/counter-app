import '@testing-library/jest-dom';

import { returnArr } from '../../base/07-deses-arrs';

describe('Tests in desectructuring', () => {
  it('returnArr should to return a string and a number', () => {
    const [words, numbers] = returnArr();

    expect(words).toBe('ABC');
    expect(typeof words).toBe('string');

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');
  });
});
