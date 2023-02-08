function handleFocus(e) {
  console.log('focus event fired');
  console.log('e.target.name', e.target.name);
}

function handleBlur(e) {
  console.log('blur event fired');
  console.log(e.target.name);
}

function handleInput(e) {
  console.log(e.target.name);
  console.log(e.target.value);
}

var $inputName = document.querySelector('#user-name');
var $inputEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
