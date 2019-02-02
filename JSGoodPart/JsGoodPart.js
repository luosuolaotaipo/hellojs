var add_the_handlers = function(node){
    var i;
    for(i=0;i<node.length;i++){
        node[i].onclick = function(e){
            alert(i);
        }
    }
}