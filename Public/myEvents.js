var database=firebase.database().ref('/');
var auth=firebase.auth();
var CurrentUser=localStorage.getItem('CurrentUser');
// console.log(CurrentUser);
CurrentUser=JSON.parse(CurrentUser);
document.getElementById('Username').innerHTML=CurrentUser.name;
var MyEvents=document.getElementById('myEvents');
database.child('goingEvents').on('child_added',function(snapshot){
var obj=snapshot.val();
obj.id=snapshot.key;
var div=document.createElement('DIV');
div.setAttribute('id',obj.id);
var span=document.createElement('SPAN');

var para=document.createElement('P');
var breakline=document.createElement('BR');
var myEventtxt=document.createTextNode('My Event: \n\n'+obj.name);
para.appendChild(myEventtxt);

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
MyEvents.appendChild(div);


});



function Logout(){
    localStorage.removeItem('CurrentUser');
    location.assign('index.html');
    }