
database=firebase.database().ref('/');
auth=firebase.auth();
var input = document.getElementById("demo");
var list = document.getElementById("list");

var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var Usrname=document.getElementById('Username');

var Allusers=localStorage.getItem('Users');
var CurrentUser=localStorage.getItem('CurrentUser');
Allusers=JSON.parse(Allusers);
CurrentUser=JSON.parse(CurrentUser);
for(i=0;i<Allusers.length;i++){
if(Allusers[i].email===CurrentUser.email){
 Usrname.innerHTML=Allusers[i].FirstName+' '+Allusers[i].LastName;
}
}






function Logout(){
    localStorage.removeItem('CurrentUser');
    location.assign('index.html');
    }
    
    
    function Feeds(){
        location.assign("allEvents.html");
    }




    function add(){
        var user = {
            name: input.value,
        }
        database.child("users").push(user);
        input.value = '';
    }
    
    
    database.child("users").on("child_added", function(snapshot){
        var obj = snapshot.val();
        obj.id = snapshot.key;
        render(obj);
    })
    
    function render(user){
        var li = document.createElement("LI");
        var text = document.createTextNode(user.name);
        li.appendChild(text);
        li.setAttribute("class", "list-group-item");
        li.setAttribute("id", user.id);
    
        var deleteBtn = document.createElement("BUTTON");
        var btnText = document.createTextNode("Delete");
        deleteBtn.appendChild(btnText);
        deleteBtn.setAttribute("class", "btn btn-danger float-right");
        // deleteBtn.setAttribute("id" , "delBtn")   checking
        deleteBtn.onclick = function() {
            remove(user.id);
        }
    
       
        li.appendChild(deleteBtn);
        list.appendChild(li);

   
        
    }

    // function submitPost(){
    //     var post={
            
    //         Event:text.value
    //     };
    //     auth.onAuthStateChanged(function(event) {
    //       if (event) {
    //     database.child('AllEvents').push(post);
    //       } else {
    //         // No user is signed in.
    //       }
    //     });
    //     }


    
    function remove(key){
        database.child("users/" + key).remove();
    }
    database.child("users").on("child_removed", function(data){
        var deletedLi = document.getElementById(data.key);
        deletedLi.remove();
    })
    
  