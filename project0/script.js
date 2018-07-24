const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const todoInput = document.getElementById('todoInput')
const todoForm = document.getElementById('todo-form')

/*   main to do function */
function newTodo() {
  const newItem = $(todoInput).val();
  if (newItem !== '') {
    $(list).prepend('<li><input class="form-check-input finished" type="checkbox" value="' + newItem + '"> <label class="form-check-label" for="defaultCheck1">' + newItem + '</label> <span class="oi deleteItem" data-glyph="trash" title="delete item" aria-hidden="true"></span></li>');
    $(todoInput).val('');
    getCounts();
  }
}

function getCounts(){
  const itemCount = $('ul#todo-list li').length;
  const uncheckedCount = $('#todo-list input:checkbox:not(:checked)').length;
  $( itemCountSpan ).text(itemCount);
  $( uncheckedCountSpan ).text(uncheckedCount);
}

$( document ).ready(function() {
  /* listen for form submit */
  $(todoForm).on('submit', function(e){
      e.preventDefault();
      newTodo();
  });

  /* listen for check box click to indicate finished task */
  $( list ).on( 'click', 'input[type="checkbox"]', function() {
    if ($(this).is(':checked')) {
      $(this).next('label').addClass( "finished-item" );
    } else {
      $(this).next('label').removeClass( "finished-item" );
    }
    getCounts();
  });

  /* listen for delete button click and remove item accordingly */
  $( list ).on( 'click', '.deleteItem', function() {
     $(this).parent().remove();
     getCounts();
  });

/* document ready closing tag */
});
