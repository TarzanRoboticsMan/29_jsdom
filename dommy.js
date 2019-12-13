var bButton = document.getElementByID('b');
bButton.addEventListener('click',addElement);

var list = document.getElementsByTagName('li');

var addElement() = function(){
    var item = document.createElement('li');
    var text = document.createTextNode('User added list element);
    item.appendChild(text);
    list.appendChild(item);
}