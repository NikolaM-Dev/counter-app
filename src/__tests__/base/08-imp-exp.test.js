import '@testing-library/jest-dom';

import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import HEROES from '../../data/heroes';

describe('Test in heroes functions', () => {
  it('getHeroeById should to return a heroe by id', () => {
    const id = 1;
    const heroe = getHeroeById({ id });
    const heoreData = HEROES.find((heroe) => heroe.id === id);

    expect(heroe).toEqual(heoreData);
  });

  it('getHeroeById should to return undefined if heore does not exist', () => {
    const id = 10;
    const heroe = getHeroeById({ id });

    expect(heroe).toBe(undefined);
  });

  it('getHeoresByOwner should to return a array with DC heores', () => {
    const owner = 'DC';
    const DCHeores = getHeroesByOwner({ owner });
    const DCHeoresTest = HEROES.filter((heroe) => heroe.owner === owner);

    expect(DCHeores).toEqual(DCHeoresTest);
  });

  it('getHeoresByOwner should to return a array with Marvel heroes', () => {
    const owner = 'Marvel';
    const marvelHeores = getHeroesByOwner({ owner });

    expect(marvelHeores).toHaveLength(2);
  });
});
