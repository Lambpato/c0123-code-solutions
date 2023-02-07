var $button = document.querySelector('.button-modal');
var $popUp = document.querySelector('.no-popup');
var $overlay = document.querySelector('.no-overlay');
var $noButton = document.querySelector('.button-no');

function $click(e) {
  $popUp.className = 'popup';
  $overlay.className = 'overlay';
}

function $clickNo(e) {
  $popUp.classList = 'no-popup';
  $overlay.className = 'no-overlay';
}

$button.addEventListener('click', $click);
$noButton.addEventListener('click', $clickNo);
