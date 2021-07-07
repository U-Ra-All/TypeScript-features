@classDecorator
class DecoratedCar {
  @testDecorator
  color: string = 'white';

  @testDecorator
  get formattedColor(): string {
    return `This car color is ${this.color}`;
  }

  @logError('Oops! The car is crashed!')
  drive(@parameterDecorator speed: string, @parameterDecorator isStopped: boolean): void {
    if (speed == 'fast') {
      console.log('Vrrroom!');
    } else {
      console.log('I am driving');
    }
  }
}

function classDecorator(constructor: typeof DecoratedCar) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}
