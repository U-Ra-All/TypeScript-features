class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfAnything([1, 2, 3])

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3]);

// Generic Constraints

class Human {
  print() {
    console.log('I am a human');
  }
}

class Robot {
  print() {
    console.log('I am a robot')
  }
}

interface Printable {
  print(): void;
}

function printAnything1<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printAnything1<Human>([new Human(), new Human()]);
printAnything1<Robot>([new Robot(), new Robot()]);
