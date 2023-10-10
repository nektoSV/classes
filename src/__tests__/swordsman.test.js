import Swordsman from '../swordsman';

test.each([
  ['Alise', 'Swordsman', 
    {
      name: 'Alise', 
      type: 'Swordsman', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Swordsman', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Swordsman(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Swordsman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Swordsman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Swordsman(name, type);
  }
  expect(result).toThrow(expected);
});