/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  print() {
    console.log('radius', this.radius);
  }
}

const circulo = new Circle(419);

circulo.print();
