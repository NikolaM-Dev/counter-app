import '@testing-library/jest-dom';
import { getActiveUser, getUser } from '../../base/05-functions';

describe('Test in 05-functions', () => {
  it('getUser should to return a object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });

  it('should getActiveUser to return a object', () => {
    const name = 'Camilo';
    const userTest = {
      uid: 'ABDC123',
      username: name,
    };
    const activeUser = getActiveUser({ name });

    expect(activeUser).toEqual(userTest);
  });
});
