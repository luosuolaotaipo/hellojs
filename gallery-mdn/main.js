var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
var imgsArray=[];
/* Looping through images */
for (var i=1;i<=5;i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
  imgsArray.push('images/pic'+i+'.jpg');
  /*
  *3 ways to add a special kind of attribute:event function
  *ATTENTION:not to set the target object as the parameter of the event funcion
  *use the defult event parameter,which can find the target obejce via usage of"e.target"
  *and call it with out "()"
  */
  //newImage.onclick=choosePic;//1st way
  /*
  newImage.onclick=function(e){
    var src=e.target.getAttribute('src');
    displayedImage.src=src;
  }//2nd way
  */
  newImage.addEventListener("click",choosePic);//3rd way
}
//function called in the 1st,3rd way
function choosePic(e) {
  var targetsrc=e.target.getAttribute('src');
  displayedImage.src=targetsrc;
}




/* Wiring up the Darken/Lighten button */
//ToDos
btn.addEventListener('click',change);
function change(e){
  var originstyle=btn.textContent;
  console.log(originstyle);
  if(originstyle="Darken"){
    originstyle='Lighten';
  }
  else{
    originstyle='Darken';
  }
  console.log('butten event');

}

