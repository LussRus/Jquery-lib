# Jquery-lib
Some useful jq functions

cutTag
This function can cut tag from an element.
Use: 
$(selector).cutTag('tagName');
Where: tagName are pure text without '<','</', '>'

I use it to clean up my strings from a 'mark' tags - $('#id').cutTag('mark');

dropdown.plugin.js (.js, .css)
Add a dropdown list to your input field, add search in your list by first three letters.
(use together with cutTag)
Use:

$('#inp').on('click', function(){
  $('#inp').create(['one', 'two', 'three', 'four','five','six', 'seven']);
});
Where: #inp - an ID of your input-field

