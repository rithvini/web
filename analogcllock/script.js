function showTime()
{
   var d=new Date();
   var h=  30*(d.getHours()%12)+(d.getMinutes()/60);
   var m=6*d.getMinutes();
   var s=6*d.getSeconds();
   console.log(h);
   console.log(m);
   console.log(s);
   setAttr("h-hand",h);
   setAttr("m-hand",m);
   setAttr("s-hand",s);
function setAttr(id,val){
   
   var v='rotate('+val+',70,70)';
   document.getElementById(id).setAttribute('transform',v);
   console.log(id,val);
   }
 d=new Date();
 h=d.getHours();
 m=d.getMinutes();
 s=d.getSeconds();
 hour=document.getElementById("hr").innerHTML=h;
  minute=document.getElementById("min").innerHTML=m;
  second=document.getElementById("sec").innerHTML=s;
 setTimeout(showTime,1000);
}
window.onload=showTime;