function ExampleContructor() {

}
console.log('value of Prototype', ExampleContructor.prototype);
console.log('typeof ExmpleConstructor', typeof ExampleContructor.prototype);
var aFunction = new ExampleContructor();
console.log('value of aFunction', aFunction);
var checkFunction = aFunction instanceof ExampleContructor;
console.log('result of instnaceof', checkFunction);
