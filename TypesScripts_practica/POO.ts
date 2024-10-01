// Herencia

class Animal {
    constructor(public name: string) {}
  
    move(): void {
      console.log(`${this.name} está moviéndose.`);
    }
  }
  
  class Dog extends Animal {
    bark(): void {
      console.log(`${this.name} dice: Guau`);
    }
  }
  
  const dog = new Dog("Fido");
  dog.move();   // Fido está moviéndose.
  dog.bark();   // Fido dice: Guau

  
// Polimorfismo

class Shape {
    area(): number {
      throw new Error("Método 'area' no implementado");
    }
  }
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)];
  
  shapes.forEach((shape) => {
    console.log(`Área: ${shape.area()}`);
  });

  
// Clases abstractas

abstract class Figura {
    abstract calcularArea(): number;
  }
  
  class Circulo extends Figura {
    constructor(private radio: number) {
      super();
    }
  
    calcularArea(): number {
      return Math.PI * this.radio * this.radio;
    }
  }
  
  const circulo = new Circulo(5);
  console.log(circulo.calcularArea());  // Área: 78.54

// Encapsulates

class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
      }
    }
  
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);
  account.withdraw(200);
  console.log(account.getBalance());  // Balance: 1300

// Interface

interface IVehicle {
    brand: string;
    model: string;
    year: number;
    startEngine(): void;
  }
