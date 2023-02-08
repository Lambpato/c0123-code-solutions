var $contact = document.querySelector('#contact-form');

function preDefault(e) {
  e.preventDefault();
  var messgaeData = {
    name: $contact.elements[0].value,
    email: $contact.elements[1].value,
    message: $contact.elements[2].value
  };
  console.log(messgaeData);
  $contact.reset();
}
$contact.addEventListener('submit', preDefault);
