const canvas = document.querySelector('#id_canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
onload=setInterval(randomize,1000);
var numara = 0;
var panaLa = Math.floor(Math.random()*11);


function randomize(){
  var rr = 10;
  var rx = Math.ceil(290* Math.random());
  var ry = Math.ceil(290* Math.random());
  numara ++;
  drawCircle(rx,ry,rr);
  if(numara > panaLa)
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function drawCircle(rx,ry,rr){
  var myColors  =["purple","red"];
  var colorPicker = Math.ceil(4* Math.random() -1);
  ctx.strokeStyle = myColors[colorPicker];
  ctx.beginPath();
  ctx.arc(rx,ry,rr,0,2*Math.PI);
  ctx.stroke();
  ctx.closePath();
}

  function verifica(){
    var numar = document.getElementById('cercuri').value;
  if(numar == panaLa)
  {
    alert("Corect!");
  }
  else {
    alert("Incorect!");
  }
  console.log(numar);
}
