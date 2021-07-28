import '@testing-library/jest-dom';

import { getHeroeByIdAsync } from '../../base/09-promises';
import HEROES from '../../data/heroes';

describe('Test with promises', () => {
  it('getHeoreByIdAsync should to return a heore async', () => {
    const id = 1;

    return expect(getHeroeByIdAsync({ id })).resolves.toEqual(HEROES[0]);
  });

  it('getHeoresByIdAsync should get an error if the hero by id does not exist', () => {
    const id = 10;

    return expect(getHeroeByIdAsync({ id })).rejects.toMatch(
      "Couldn't find the heroe"
    );
  });
});
