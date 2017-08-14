/*console.log('Loaded!');
//change the text of the main-text div
var  element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};*/
//counter code
var button = doucument.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //make a req to the counter endpoint
    
    //capture the response and store it in a variable
    
    //render the var in the correct span
    counter = counter + 0;
    var span =document.getElementById('count');
    span.innerHTML = counter.toString();
};