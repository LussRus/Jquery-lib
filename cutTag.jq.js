$.fn.cutTag = function(t){
    $.each(this, function(i,e){
        e.innerHTML = e.innerHTML.replace('<'+t+'>','');
    e.innerHTML = e.innerHTML.replace('</'+t+'>','');
    });        
}