var $dots = document.querySelectorAll('[data-id]');
var $previous = document.querySelector('.fa-chevron-left');
var $next = document.querySelector('.fa-chevron-right');
var $images = document.querySelectorAll('[data-img-id]');
var $dotcontainer = document.querySelector('.row-dots');
var currentIndex = 1;

function carousel() {
  for (var i = 0; i < $dots.length; i++) {
    var $dotid = Number($dots[i].getAttribute('data-id'));
    if (currentIndex === $dotid) {
      $images[i].className = 'pokemon';
      $dots[i].className = 'fa-solid fa-circle';
    } else if (currentIndex !== $dotid) {
      $images[i].className = 'pokemon hidden';
      $dots[i].className = 'fa-regular fa-circle';
    }
  }
  if (currentIndex > $dots.length - 1) {
    currentIndex = 0;
  }
  currentIndex++;
}
setInterval(carousel, 3000);

function cricles(e) {
  if (e.target && e.target.matches('i')) {
    e.target.closest('.fa-circle');
    e.target.closest('.fa-circle').className = 'fa-solid fa-circle ';
    for (var i = 0; i < $dots.length; i++) {
      if (Number(e.target.closest('.fa-circle').getAttribute('data-id')) === Number($images[i].getAttribute('data-img-id'))) {
        $images[i].className = 'pokemon';
      } else {
        $images[i].className = 'pokemon hidden';
        $dots[i].className = 'fa-regular fa-circle';
      }
    }

  }
}

function right(e) {
  for (var i = 0; i < $dots.length; i++) {
    var $dotid = Number($dots[i].getAttribute('data-id'));
    if (currentIndex === $dotid) {
      $images[i].className = 'pokemon';
      $dots[i].className = 'fa-solid fa-circle';
    } else if (currentIndex !== $dotid) {
      $images[i].className = 'pokemon hidden';
      $dots[i].className = 'fa-regular fa-circle';
    }
  }
  if (currentIndex > $dots.length - 1) {
    currentIndex = 0;
  }
  currentIndex++;
}

function left(e) {
  for (var i = 0; i < $dots.length; i++) {
    var $dotid = Number($dots[i].getAttribute('data-id'));
    if (currentIndex === $dotid) {
      $images[i].className = 'pokemon';
      $dots[i].className = 'fa-solid fa-circle';
    } else if (currentIndex !== $dotid) {
      $images[i].className = 'pokemon hidden';
      $dots[i].className = 'fa-regular fa-circle';
    }
  }
  if (currentIndex < 2) {
    currentIndex = 6;
  }
  currentIndex--;
}

$dotcontainer.addEventListener('click', cricles);
$next.addEventListener('click', right);
$previous.addEventListener('click', left);
