import '@testing-library/jest-dom';
import { getImage } from '../../base/11-asyncAwait';

describe('Test with async-await and Fetch', () => {
  it('should to return the url of the image', async () => {
    const url = await getImage();

    expect(url.includes('https://')).toBe(true);
  });
});
