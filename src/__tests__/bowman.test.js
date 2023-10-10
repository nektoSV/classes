import Bowman from '../bowman';

test.each([
  ['Alise', 'Bowman', 
    {
      name: 'Alise', 
      type: 'Bowman', 
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Bowman', 
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Bowman(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Bowman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Bowman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Bowman(name, type);
  }
  expect(result).toThrow(expected);
});