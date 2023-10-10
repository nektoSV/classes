import Magician from '../magician';

test.each([
  ['Alise', 'Magician', 
    {
      name: 'Alise', 
      type: 'Magician', 
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Magician', 
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Magician(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Magician', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Magician', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Magician(name, type);
  }
  expect(result).toThrow(expected);
});