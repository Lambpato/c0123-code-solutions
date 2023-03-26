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

const figura = new Shape(Shape, this.circumference);

console.log(figura.print());
