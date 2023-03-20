var $dots = document.querySelectorAll('[data-id]');
var $previous = document.querySelector('.fa-chevron-left');
var $next = document.querySelector('.fa-chevron-right');
var $images = document.querySelectorAll('[data-img-id]');
var $dotcontainer = document.querySelector('.row-dots');
var currentIndex = 0;

function carousel() {
  $images[currentIndex].classList.add('hidden');
  $dots[currentIndex].classList.replace('fa-solid', 'fa-regular');
  if (currentIndex === $dots.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  $images[currentIndex].classList.remove('hidden');
  $dots[currentIndex].classList.replace('fa-regular', 'fa-solid');
}
var intervalId = setInterval(carousel, 3000);

function cricles(e) {
  if (e.target && e.target.matches('i')) {
    clearInterval(intervalId);
    e.target.closest('.fa-circle');
    e.target.closest('.fa-circle').className = 'fa-solid fa-circle ';
    currentIndex = Number(e.target.closest('.fa-circle').getAttribute('data-id'));
    for (var i = 0; i < $dots.length; i++) {
      if (currentIndex === i) {
        $images[currentIndex].classList.remove('hidden');
        $dots[currentIndex].classList.replace('fa-regular', 'fa-solid');
      } else {
        $images[i].classList.add('hidden');
        $dots[i].classList.replace('fa-solid', 'fa-regular');
      }
    }
    intervalId = setInterval(carousel, 3000);
  }
}
function right(e) {
  clearInterval(intervalId);
  $images[currentIndex].classList.add('hidden');
  $dots[currentIndex].classList.replace('fa-solid', 'fa-regular');
  if (currentIndex === $dots.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  $images[currentIndex].classList.remove('hidden');
  $dots[currentIndex].classList.replace('fa-regular', 'fa-solid');
  intervalId = setInterval(carousel, 3000);
}

function left(e) {
  clearInterval(intervalId);
  $images[currentIndex].classList.add('hidden');
  $dots[currentIndex].classList.replace('fa-solid', 'fa-regular');
  if (currentIndex === 0) {
    currentIndex = 4;
  } else {
    currentIndex--;
  }
  $images[currentIndex].classList.remove('hidden');
  $dots[currentIndex].classList.replace('fa-regular', 'fa-solid');
  intervalId = setInterval(carousel, 3000);
}

$dotcontainer.addEventListener('click', cricles);
$next.addEventListener('click', right);
$previous.addEventListener('click', left);
