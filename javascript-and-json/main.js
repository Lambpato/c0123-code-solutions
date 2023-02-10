var library = [
  {
    isbn: '978-1569319017',
    title: 'One Piece',
    author: 'Eiichiro oda'
  },

  {
    isbn: '978-1421578798',
    title: 'Jojos Bizzare Adventures',
    author: 'Hirojiko Araki'
  },

  {
    isbn: '978-1974728947',
    title: 'Sakamoto Days',
    author: 'Yuto Suzuki'
  }

];

console.log('value of library:', library);
console.log('typeof:', typeof library);

var libraryJSON = JSON.stringify(library);
console.log('value of libraryJSON:', libraryJSON);
console.log('typeof:', typeof libraryJSON);

var string = '{"Number id": "04192002", "String Name": "Lamberto Martinez"}';
console.log('value of string:', string);
console.log('typeof:', typeof string);

var stringToObj = JSON.parse(string);
console.log('value of stringToObj:', stringToObj);
console.log('typeof:', typeof stringToObj);
