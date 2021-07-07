class Vehicle {
  // public drive(): void {
  //   console.log(`I'm driving!`);
  // }

  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  public stop(): void {
    console.log(`I've stopped!`);
  }

  protected beep(): void {
    console.log('Beeeeep!');
  }
}

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log(`I'm a car and I'm driving!`);
  }
  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.stop();
// vehicle.beep();

const car = new Car(4, 'silver');
// car.startDrivingProcess();
// car.stop();
// car.beep();