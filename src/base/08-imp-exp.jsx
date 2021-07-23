import HEROES from '../data/heroes';

export const getHeroeById = ({ id }) => HEROES.find((heroe) => heroe.id === id);

export const getHeroesByOwner = ({ owner }) =>
  HEROES.filter((heroe) => heroe.owner === owner);
