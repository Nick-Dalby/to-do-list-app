function newItem() {
  //adding a new item to the list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  //alert if value is empty otherwise append new item
  if (inputValue === '') {
    alert("list can't be blank!");
  } else {
    let list = $('#list');
    list.append(li);
  }

  //cross out an item
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  //delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  //listen for click
  crossOutButton.on('click', deleteListItem);

  //add class to make display: none
  function deleteListItem() {
    li.addClass('delete');
  }

  //reordering the items:
  $('#list').sortable();
}
