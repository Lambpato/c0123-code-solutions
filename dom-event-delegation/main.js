var $taskList = document.querySelector('.task-list');
function domDelegation(e) {
  console.log('e.target:', e.target);
  console.log('e.target.tagName:', e.target.tagName);
  if (e.target && e.target.matches('button')) {
    console.log('closest .task-list-item', e.target.closest('.task-list-item'));
    e.target.closest('.task-list-item').remove();
  }
}
$taskList.addEventListener('click', domDelegation);
