var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabiContainer);

function tabiContainer(e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tabNodeList.length; i++) {
      if ($tabNodeList[i] === e.target) {
        $tabNodeList[i].className = 'tab active';
      } else if ($tabNodeList[i] !== e.target) {
        $tabNodeList[i].className = 'tab';
      }
    }

    var $dataView = e.target.getAttribute('data-view');

    for (var y = 0; y < $viewNodeList.length; y++) {
      if ($viewNodeList[y].getAttribute('data-view') === $dataView) {
        $viewNodeList[y].className = 'view';
      } else if ($viewNodeList[y].getAttribute('data-view') !== $dataView) {
        $viewNodeList[y].className = 'view hidden';
      }
    }
  }
}
