$.fn.create = function(arr){
    var el = this[0];
    var x = el.offsetLeft;
    var y = el.offsetTop + el.offsetHeight;
    var w = el.offsetWidth;
    var div = $('<div>', {class:'help_list'}).css({
        top: y,
        left: x,
        width: w
    }).appendTo($(this).parent());
    $.each(arr, function(indx, el){
        $(div).append($('<li>', {class:'help_list_els', text:el}));
    });
    $(el).val('');
    $('.help_list_els').on('mouseover', function(){
        $(el).val($(this).text());            
    });
    $('.help_list_els').on('click', function(){
        $(div).remove();
    });
    $(el).on('keyup', function(e){
        var kc = e.keyCode;
        var char = this.value.substr(-1);
        var txt = this.value;
        var len = txt.length;
        if(kc < 48 && kc != 8) return;
        if(len < 4){
            $('.help_list_els_hdn').removeClass('help_list_els_hdn');
            var rr = $('.help_list_els');
            $.each(rr, function(indx, el){
                el.innerHTML = el.innerHTML.replace("<mark>", "");
                el.innerHTML = el.innerHTML.replace("</mark>", "");
                var tt = el.innerHTML.substr(0, len);
                var cp = (tt == txt);
               if(tt.toLowerCase() != txt.toLowerCase() ) $(el).addClass('help_list_els_hdn');
                else{
                   el.innerHTML = "<mark>"+ tt+"</mark>"+el.innerHTML.substr(len);
                }
            });
        }
    });
}