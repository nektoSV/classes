export default class Character {
    constructor(name, type) {
      const types = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
      
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error ("Имя должно быть не менее 2 и не более 10 символов");
      } else {
        this.name = name;
      }
  
      if (!types.includes(type)) {
        throw new Error ("Тип не найден");
      } else {
        this.type = type;
      }
  
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  }