var $button = document.querySelector('.hot-button');
var $click = document.querySelector('.click-count');

var numberOfClicks = 0;

function counter(events) {
  $click.textContent = 'Clicks: ' + numberOfClicks;
  numberOfClicks++;
  if (numberOfClicks < 4) {
    $button.className = 'hot-button cold';
  } else if (numberOfClicks > 4 && numberOfClicks < 7) {
    $button.className = 'hot-button cool';
  } else if (numberOfClicks > 7 && numberOfClicks < 10) {
    $button.className = 'hot-button tepid';
  } else if (numberOfClicks > 10 && numberOfClicks < 13) {
    $button.className = 'hot-button warm';
  } else if (numberOfClicks > 13 && numberOfClicks < 16) {
    $button.className = 'hot-button hot';
  } else if (numberOfClicks > 16) {
    $button.className = 'hot-button nuclear';
  }

}

$button.addEventListener('click', counter);
