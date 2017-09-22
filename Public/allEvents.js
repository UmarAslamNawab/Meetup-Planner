var database=firebase.database().ref('/');
var auth=firebase.auth();
var CurrentUser=localStorage.getItem('CurrentUser');
// console.log(CurrentUser);
CurrentUser=JSON.parse(CurrentUser);
document.getElementById('Username').innerHTML=CurrentUser.name;
var AllEvents=document.getElementById('allEvents');
database.child('users').on('child_added',function(snapshot){
var obj=snapshot.val();
obj.id=snapshot.key;
var div=document.createElement('DIV');
div.setAttribute('id',obj.id);
var span=document.createElement('SPAN');

var para=document.createElement('P');
var breakline=document.createElement('BR');
var Eventtxt=document.createTextNode('Event: \n\n'+obj.name);

var goingBtn=document.createElement("BUTTON");
var btnText = document.createTextNode("Going");
goingBtn.appendChild(btnText);
goingBtn.setAttribute("class", "btn btn-info float-right");
goingBtn.setAttribute("onclick", "going();");
goingBtn.setAttribute("id", "going"); 
// goingBtn.onclick = function() {
//     remove(obj.id);
// }

goingBtn.onclick=function add(){
    var myEvent = {
        name: obj.name,
       
    }
    database.child("goingEvents").push(myEvent);
    // remove(obj.id)
    
}



var notGoingBtn=document.createElement("BUTTON");
var btnText = document.createTextNode("Not going");
notGoingBtn.appendChild(btnText);
notGoingBtn.setAttribute("class", "btn btn-danger float-right");






para.appendChild(Eventtxt);
para.appendChild(notGoingBtn);
para.appendChild(goingBtn);
para.appendChild(breakline);
para.appendChild(breakline);
para.appendChild(breakline);
// para.appendChild(input);
div.appendChild(span);
div.appendChild(para);


div.setAttribute('class','Event_design');
var divlist=document.createElement('DIV');
divlist.setAttribute('id','list');
div.appendChild(divlist);
AllEvents.appendChild(div);


});

// function remove(key){
//     database.child("users/" + key).remove();
// }
// database.child("users").on("child_removed", function(data){
//     var deletedGoing = document.getElementById(data.key);
//     deletedGoing.remove();
// })




function Logout(){
    localStorage.removeItem('CurrentUser');
    location.assign('signin.html');
    }
    
function myEvent(){
    location.assign("myEvents.html");
}    