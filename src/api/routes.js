const host = 'http://localhost:8080';

export default {
  ticketsPath: () => [host, 'tickets'].join('/'),
  exchangePath: () =>
    'https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR'
};
