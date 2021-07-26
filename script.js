var end=document.getElementById("end");
var coord=end.getBoundingClientRect();
var totalDistance=document.body.clientHeight-window.innerHeight;
var percentage_scrolled=document.getElementById("percentage_scrolled");
document.addEventListener('scroll',function(){
  coord=end.getBoundingClientRect();
  var currentDistance=coord.y-window.innerHeight;
  var percentCovered=(currentDistance/totalDistance)*100;
  var result=Math.ceil(100-percentCovered);
  if(result<0){
      result=0;
  }
  else if(result>100){
      result=100;
  }
  percentage_scrolled.innerHTML=result+"%";
});

window.addEventListener('resize',function(){
   totalDistance=document.body.clientHeight-window.innerHeight
});

