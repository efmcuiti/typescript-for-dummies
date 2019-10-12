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

// With inheritance
class Thomas extends Person {
  name: string = "Thomas";
}

const t: Thomas = new Thomas("Alec", "tjdo"); // Bear in mind that even passing a different name, it will overwrite it with line 22
console.log("A Thomas: ", t);

// With inheritance and constuctor
class Galla extends Person {
  constructor(username) {
    super("Galla", username);
  }
}

const g: Galla = new Galla("bb");
console.log("A Galla: ", g);

// With getters and setters
class Evolution {
  private _type: string = "Default"; // By convention, use '_' at the begining of the private properties.

  get species(): string { return this._type; }

  set species(value: string) {
    if (value.length > 3) {
      this._type = value;
    } else {
      this._type = "";
    }
  }
}

let mega = new Evolution();
console.log("A newbie evo: ", mega.species);
mega.species = "HO";
console.log("A minimum evo: ", mega.species);
mega.species = "absolute";
console.log("A mega evolution: ", mega.species);
