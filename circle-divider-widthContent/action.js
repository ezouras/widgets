isBoth = true;
isPlus = false;

const leftPanel = document.getElementById("left-panel");
const leftCircle = document.getElementsByClassName("split-circle-left")[0];
const rightCircle = document.getElementsByClassName("split-circle-right")[0];
const minusSign = document.getElementsByClassName("fa-minus")[0];
const plusSign = document.getElementsByClassName("fa-plus")[0];
const leftRect = document.getElementsByClassName("left-rectangle")[0];
const rightRect = document.getElementsByClassName("right-rectangle")[0];

var w = window.innerWidth;

leftCircle.addEventListener("click",(event)=>{
  if(isBoth){
  //minimize tree panel
  leftPanel.style.width = "3rem";
  //make minus invisible
  minusSign.style.opacity = 0;
  //remove right rectangle
  leftRect.style.opacity = 0;
  //make overflow on left rectangle visible
  rightRect.style.overflow = "visible";
  isBoth=false;
}
else{
  defaultCircle();
}

});

rightCircle.addEventListener("click",(event)=>{
  console.log("right circle clicked");
  if(isBoth){
  leftPanel.style.width = (w - 30) + "px" ;
  //make minus invisible
  plusSign.style.opacity = 0;
  //remove right rectangle
  rightRect.style.opacity = 0;
  //make overflow on left rectangle visible
  leftRect.style.overflow = "visible";
  isBoth=false;
  }
  else{
    defaultCircle();
  }

});

function defaultCircle(){
  leftPanel.style.width ="20rem";
  minusSign.style.opacity = 1;
  plusSign.style.opacity = 1;
  rightRect.style.opacity = 1;
  leftRect.style.opacity = 1;
  leftRect.style.overflow = "hidden";
  rightRect.style.overflow ="hidden";
  isBoth = true;

}

window.addEventListener("resize",()=>{
  w = window.innerWidth;
});
