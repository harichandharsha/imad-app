
//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //create a req obj
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //take some action
            if(request.status==200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
            }
        }
        //not done yet
    }
    //render the var in the correct span
    counter = counter + 1;
    var span =document.getElementById('count');
    span.innerHTML = counter.toString();
};