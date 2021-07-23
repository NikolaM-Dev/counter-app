export const returnArr = () => {
  return ['ABC', 123];
};

export const usState = (value) => {
  return [
    value,
    () => {
      console.log('Hola Mundo');
    },
  ];
};
