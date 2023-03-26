/* exported Shape */

class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `area: ${this.area} circumference: ${this.circumference}`;
  }
}

const figura = new Shape(1, 1);

console.log(figura.print());
