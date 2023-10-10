import Zombie from '../zombie';

test.each([
  ['Alise', 'Zombie', 
    {
      name: 'Alise', 
      type: 'Zombie', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Zombie', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Zombie(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Zombie', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Zombie', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Zombie(name, type);
  }
  expect(result).toThrow(expected);
});