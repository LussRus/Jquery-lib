/*
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
                    mm.save();
                }
            }
        ],
        inputs:[
            {
                id:'minp1',
                class: '',
                placeholder: 'Введите что-нибудь',
                functions: [
                    {
                        event: 'onkeyup',
                        id: '#minp1',
                        function: function(e){
                            var trgt = e;//.target;
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
*/
class mmodal{
        constructor(p){
            this.param = p;
            var mmh = $('<div>', {class:'curtain'}).appendTo('body');
            var mmi = $('<div>', {class:'minner'}).appendTo(mmh);
            
            $('<h2>', {text:p.header, id:'mhdr'}).appendTo(mmi);
            
            var mess = $('<div>', { id:'minnermess'}).appendTo(mmi);
            $('<div>', {text:p.message, class:'minner_content'}).appendTo(mess);
            
            if(p.inputs != undefined){
                $.each(p.inputs, function(indx, el){
                   var inp = $('<input>', {class:el.class+" minp", id:el.id, placeholder:el.placeholder}).appendTo(mess);
                    $.each(el.functions, function(ii, elf){
                        $(document).on(elf.event, elf.id, elf.function);    
                    });
                    
                });
            }
            
            var mbtns_div = $('<div>', {class:'mbtns_div'}).appendTo(mmi);
            $.each(p.buttons, function(indx, el){
                var btn = $('<button>', {id:el.id, class:el.class+ " mbtn", text:el.text}).appendTo(mbtns_div);
                btn.click(el.function);
            });
            
            mmh.hide();
            //this.seyNo();
        }
        open(){
            $('.curtain').show();
        }
        close(){
            $('.curtain').hide();
        }
        sayHi(arg){
            alert('Hi '+arg);
            //$('.curtain').show();
           // this.close();
        }
        save(){
            alert('Saved');
            this.close();
        }
    }