const API_KEY = 'gpUFXO3qzly0cHNaGV8lbGzqdpxklvVH';

export const getImage = async () => {
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;

    return url;
  } catch (err) {
    return 'No existe';
  }
};
