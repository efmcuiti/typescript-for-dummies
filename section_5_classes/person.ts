class Person {
  name: string; // The default access modifier is 'private'
  private type: string;
  protected age: number = 34;

  constructor(name: string, private username: string) {
    this.name = name;
    this.setType("Big brainer");
  }

  printAge(): void { console.log("Ma' age: ", this.age); }

  private setType(type: string): void { this.type = type; }
}

const p: Person = new Person("Thomas", "tho");
p.printAge();
console.log("A person: ", p);
