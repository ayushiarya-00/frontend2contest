
function regvalidate(){
  var fname = document.getElementById('fname').value;
  var profession = document.getElementById('profession').value;
  var age = document.getElementById('age').value;
  
  if((fname=="")|| (profession=="")||(age==""))
  {
    document.getElementById("une").innerHTML="Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("une").style.color = "red";
    return false;
  }
  else{
    document.getElementById('une').innerHTML="Success: Employee Added";
    document.getElementById("une").style.color = "#43FF78";
    return true;    
  }
}

