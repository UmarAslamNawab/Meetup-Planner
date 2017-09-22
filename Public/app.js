
var emailInput=document.getElementById('getemail');
var passInput=document.getElementById('getpass');
database=firebase.database().ref('/');
auth=firebase.auth();

function signin(){
  var user={
    email:emailInput.value,
    password:passInput.value
  };
    auth.signInWithEmailAndPassword(user.email,user.password).catch(function(error){
    document.getElementById('Error').innerHTML=" <div class='alert alert-success Profile' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'>  <span aria-hidden='true'>&times;</span>  </button> <h4 class='alert-heading'>Hold On!!</h4> <hr>  <p class='mb-0'>"+"You Have To Sign Up First If You Dont Have An Account Kindly!"+ '</p></div>'  ;


}).then(function(usr){
user.name=usr.displayName;

var currentuser=JSON.stringify(user);
localStorage.setItem('CurrentUser',currentuser);
 emailInput.value='';
  passInput.value='';
location='createEvent.html';
});}


function sigup(){
  location='signup.html';
}

