var $button = document.querySelector('.bulb-on');
var $background = document.querySelector('.container-on');
var counter = 0;

function $click(e) {
  if (counter % 2 === 0) {
    $button.className = 'bulb-on';
    $background.className = 'container-on';
  } else {
    $button.className = 'bulb-off';
    $background.classList = 'container-off';
  }
  counter++;
}

$button.addEventListener('click', $click);
