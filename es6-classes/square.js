/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square {
  constructor(width) {
    this.width = width;
  }

  print() {
    console.log('width:', this.width);
  }
}

const cuadro = new Square(2002);

cuadro.print();
