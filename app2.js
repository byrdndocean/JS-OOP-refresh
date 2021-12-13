class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }
  getAddress = () => {
    return this.address
  };
  getPrice = () => {
    return this.price
  };
  getResidents = () => {
    return this.residents;
  };
  addResident = (resident) => {
    this.residents.push(resident);
  };
}

let Pedro = new Person("Pedro", 19);
let David = new Person("David", 21);

let house = new House("hahajek", 550000, [Pedro, David]);

console.log(house.getResidents());

let Paulo = new Person("Paulo", 19)
house.addResident(Paulo);
console.log(house.getResidents());
//hkj