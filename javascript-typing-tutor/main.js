var $string = document.querySelector('.string').textContent;
var $span = document.querySelector('span').textContent;
var counter = 0;

function tutor(e) {
  if ($string[counter] === e.key) {
    $span.className = 'letter-right';
    counter++;
  } else {
    $span.className = 'letter-wrong';
  }
}

document.addEventListener('keydown', tutor);
