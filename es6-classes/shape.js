/* exported Shape */

class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    console.log('area:', this.area);
    console.log('circumference:', this.circumference);
  }
}

const figura = new Shape(69, 420);

figura.print();
