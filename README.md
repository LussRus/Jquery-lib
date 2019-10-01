# Jquery-lib
Some useful jq functions

Tiny function to get a text from an html.
_________________________________________
cutTag.js
This function can cut tag from an element.
Use: 
$(selector).cutTag('tagName');
Where: tagName are pure text without '<','</', '>'

I use it to clean up my strings from a 'mark' tags - $('#id').cutTag('mark');

A list of choices that will be below your input-field.
-----------------------------------------------
dropdown.plugin.jq (.js, .css)
Add a dropdown list to your input field, add search in your list by first three letters.
(use together with cutTag)
Use:

$('#inp').on('click', function(){
  $('#inp').create(['one', 'two', 'three', 'four','five','six', 'seven']);
});
Where: #inp - an ID of your input-field
______________________________________________________

POPUP dialog box
-----------------------------------------------
mmodal (.js, .css)
This class add a modal window to your page with different content.
(doesn't works with IE8)

Content declare:
var mc = {
        header: 'HEADER',
        message: 'my message will be here',
        buttons:[
            {
                id:'mcancel',
                class: '',
                text: 'close',
                function: function(){
                    mm.close();
                }
            },
            {
                id:'msave',
                class: '',
                text: 'save',
                function: function(){
                    
                }
            }
        ],
        inputs:[
            {
                id:'minp1',
                class: '',
                placeholder: 'Something here',
                functions: [
                    {
                        event: 'onkeyup',
                        id: '#minp1',
                        function: function(e){
                            var trgt = e;
                            alert('we are here');
                        }
                    },
                    {
                        event: 'click',
                        id: '#minp1',
                        function: function(){
                            $('#minp1').create(['one I', 'two II', 'three III']);

                        }
                    }
                ]
                
            }
        ]
    }
Use: 
var mm = new mmodal(mc);
mm.open();
mm.close();
