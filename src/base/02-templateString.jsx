const name = 'Nikola';
const lastName = 'Tesla';

// eslint-disable-next-line no-unused-vars
const fullName = `${name} ${lastName}`;

// console.log(fullName);

const getGreeting = ({ name } = { name: 'Carlos' }) => {
  return `Hola ${name}`;
};

// console.log(`Este es un texto: ${getGreeting({ name })}`);

export default getGreeting;
