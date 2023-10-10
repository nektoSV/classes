import Daemon from '../daemon';

test.each([
  ['Alise', 'Daemon', 
    {
      name: 'Alise', 
      type: 'Daemon', 
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Daemon', 
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Daemon(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Daemon', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Daemon', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Daemon(name, type);
  }
  expect(result).toThrow(expected);
});