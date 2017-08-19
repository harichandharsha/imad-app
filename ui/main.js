
var button = document.getElementById('counter');
button.onclick = function(){
    
    //create a req obj
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
            var names=request.responseText;
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML=counter.toString();
            }
        }
        //not done yet
    };
    //make req
    request.open('GET','http://haricmdk.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name

    
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a req to the server and send the name
    //capture a list of names and render it as a list
    //create a req obj
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
            var names=request.responseText;
            names=JSON.parse(names);
             var list = '';
            for(var i=0; i<names.length;i++){
            list += '<li>'+names[i]+'</li>';
        
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;   
            }
        }
        //not done yet
    };
    //make req
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://haricmdk.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};
var button = document.getElementById('comments');
button.onclick = function(){
    
    //create a req obj
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
            var names=request.responseText;
            var counter = request.responseText;
            var span = document.getElementById('comments');
            span.innerHTML=comments.toString();
            }
        }
        //not done yet
    };
    //make req
    request.open('GET','http://haricmdk.imad.hasura-app.io/counter',true);
    request.send(null);
};
var submit = document.getElementById('comments');
submit.onclick = function(){
    //make a req to the server and send the name
    //capture a list of names and render it as a list
    //create a req obj
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
            var names=request.responseText;
            names=JSON.parse(comments);
             var list = '';
            for(var i=0; i<comments.length;i++){
            list += '<li>'+comments[i]+'</li>';
        
    }
    var ul = document.getElementById('comments');
    ul.innerHTML = list;   
            }
        }
        //not done yet
    };
    //make req
    var nameInput = document.getElementById('comments');
    var name = nameInput.value;
    request.open('GET','http://haricmdk.imad.hasura-app.io/comments' + comments,true);
    request.send(null);
};
