var bButton = document.getElementByID('b');
var list = document.getElementsByTagName('li');

bButton.addEventListener('click',addElement);

var current = function(){
    return document.elementFromPoint(event.clientX,event.clientY)
}

for (var i=0; i,list.length; i++){
    list[i].addEventListener('mousover',);
    list[i].addEventListener('mousout',);
    list[i].addEventListener('click',);
}


var addElement = function(){
    var item = document.createElement('li');
    var text = document.createTextNode('User added list element);
    item.appendChild(text);
    list.appendChild(item);
}