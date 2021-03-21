window.onload = function(){

//setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth-80;
canvas.height = window.innerHeight-350;

//elements sliders
var amp = document.getElementById("amp");
var wav_l = document.getElementById("wav_len");
var y_pos = document.getElementById("y_pos");
var h = document.getElementById("h");
var s = document.getElementById("s");
var l = document.getElementById("l");
var fre = document.getElementById("fre");
var fre2 = document.getElementById("fre2");
var a = document.getElementById("a");

let frequency = fre.value*.01;
let frequency2 = fre2.value*.01;
let frequency3 = 255;
var hue = 1;
var alpha;

function animate(){
    requestAnimationFrame(animate);
    
    alpha = a.value*.001;
    
    ctx.fillStyle = "rgba(0,0,0,"+alpha+")";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    
    if(hue<360){
    hue+=h.value*.01;
    }
    else{
        hue = 1;
    }
    
    var wavelen = wav_l.value * .001;
    
    ctx.strokeStyle = "hsl("+hue +","+s.value+"%,"+l.value+"%)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-50,y_pos.value);
          
for(i = 0; i<canvas.width+10; i++){
ctx.lineTo( i-5, y_pos.value - Math.sin(i*wavelen + frequency) *amp.value * Math.sin(frequency2));
    
}
ctx.stroke();
ctx.closePath();

frequency += fre.value*.01;
frequency2 += fre2.value*.01;

}//animate

animate();


}//onload
</script>
