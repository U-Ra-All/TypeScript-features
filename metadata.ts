import 'reflect-metadata';

@controller
class Car {
  color: string = 'black';

  @get('/login')
  drive(): void {
    console.log('I am driving');
  }
}

function get(path: string) {
  return function (target: Car, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Car) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    
    router.get(path, middleware, target.prototype[key]);
  }
}



















// const box = {
//   color: 'black'
// };

// Metadata for object

// Reflect.defineMetadata('note', 'hello', box);
// Reflect.defineMetadata('width', 30, box);

// const note = Reflect.getMetadata('note', box);
// const width = Reflect.getMetadata('width', box);

// console.log(note, width);

// Metadata for object property

// Reflect.defineMetadata('note', 'hello', box, 'color');

// const note = Reflect.getMetadata('note', box, 'color');

// console.log(note);