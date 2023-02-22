var $countDown = document.querySelector('.countdown-display');
var $numberCount = Number($countDown.textContent);

function countdown() {
  if ($numberCount >= 1) {
    $countDown.textContent = $numberCount;
    $numberCount--;
  } else {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(countdown, 1000);
