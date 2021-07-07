const colors = ['red', 'green', 'yellow'];

const dates = [new Date(), new Date()];

const fruitsByColor = [
  ['tomato'],
  ['apple'],
  ['lemon']
];

const fruitsByColor1: string[][] = [];

// Help with inference when extracting values
const color = colors[0];
const color1 = colors.pop();

// Prevent incompatible values
// colors.push(true);

// Help with 'map'
colors.map((color: string): string => {
  return color.toUpperCase();
});


// Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2021-11-11');
importantDates.push(new Date());
// importantDates.push(10);