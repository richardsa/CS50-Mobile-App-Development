const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const newItem = $('#todoInput').val();
  console.log(newItem);
  $("#todo-list").prepend("<li>" + newItem + "</li>");
  $('#todoInput').val('');
}

$('#todo-form').on('submit', function(e){
    e.preventDefault();
    newTodo();
});
