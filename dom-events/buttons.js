function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $buttclick = document.querySelector('.click-button');
$buttclick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clciked');
  console.log(event);
  console.log(event.target);
}

var $bblClick = document.querySelector('.double-click-button');
$bblClick.addEventListener('dblclick', handleDoubleClick);
