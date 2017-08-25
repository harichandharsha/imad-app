//submit username/password

    
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
            alert('Logged in!!');
            }else if(request.status===403){
                alert('Username/password is invalid');
            }else if(request.status===500){
                alert('Something went wrong');
                
            }
        
    }
    

        //not done yet
    };
    //make req
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://haricmdk.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
};
