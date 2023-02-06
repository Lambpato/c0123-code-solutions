var $button = document.querySelector('.hot-button');
var $click = document.querySelector('.click-count');

var i = 0;

function counter(events) {
  $click.textContent = 'Clicks: ' + i;
  i++;
  if (i < 4) {
    $button.className = 'hot-button cold';
  } else if (i > 4 && i < 7) {
    $button.className = 'hot-button cool';
  } else if (i > 7 && i < 10) {
    $button.className = 'hot-button tepid';
  } else if (i > 10 && i < 13) {
    $button.className = 'hot-button warm';
  } else if (i > 13 && i < 16) {
    $button.className = 'hot-button hot';
  } else if (i > 16) {
    $button.className = 'hot-button nuclear';
  }

}

$button.addEventListener('click', counter);
