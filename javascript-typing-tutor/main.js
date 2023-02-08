var $span = document.querySelectorAll('span');
var counter = 0;

function tutor(e) {
  if ($span[counter].textContent === e.key) {
    $span[counter].className = 'letter-right';
    counter++;
    if ($span[counter] === undefined) {
      return;
    }
    $span[counter].className = 'default';
  } else {
    $span[counter].className = 'letter-wrong';
  }
}

document.addEventListener('keydown', tutor);
