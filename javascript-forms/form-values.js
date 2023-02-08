var $contact = document.querySelector('#contact-form');

function preDefault(e) {
  e.preventDefault();
  var messgaeData = {
    name: document.getElementById('contact-form').elements[0].value,
    email: document.getElementById('contact-form').elements[1].value,
    message: document.getElementById('contact-form').elements[2].value
  };
  console.log(messgaeData);
  document.getElementById('contact-form').reset();
}
$contact.addEventListener('submit', preDefault);
