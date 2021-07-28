import { getHeroeById } from './08-imp-exp';

export const getHeroeByIdAsync = ({ id }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const p1 = getHeroeById({ id });
      if (p1) resolve(p1);
      else reject("Couldn't find the heroe");
    }, 1200)
  );
