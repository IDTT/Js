</head>
<style>
		* { margin: 0; padding: 0; }
		html { 
			background: url(https://raw.githubusercontent.com/IDTT/Js/master/IDDT-vers-HD.png) no-repeat center center fixed; 
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
		}
body {width:100%; height:100%; overflow:hidden; margin:0; }
 html {width:100%; height:100%; overflow:hidden; }
	</style> 
<style>
<!--
.intro{
position:fixed;
left:0;
top:0;
layer-background-color:black;
background-color:black;
border:0.1px solid black;
z-index:10;
}
-->
</style><head>
 <script type="text/javascript"><!--
//Disable right click script
//visit http://www.rainbow.arch.scriptmania.com/scripts/
var message="Sorry, right-click has been disabled";
///////////////////////////////////
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")
// --></script> <div id="i1" class="intro"></div><div id="i2" class="intro"></div><script language="JavaScript1.2">
/*
http://googel-indonesia.blogspot.com/
*/
var speed=20
var temp=new Array()
var temp2=new Array()
var clipright=(window.innerWidth)?window.innerWidth/2:document.body.clientWidth/2,clipleft=0
for (i=1;i<=2;i++){
temp[i]=document.getElementById("i"+i).style
temp[i].width=(window.innerWidth)?window.innerWidth/2 + 'px' :document.body.clientWidth/2 + 'px'
temp[i].height=(window.innerHeight)?window.innerHeight + 'px': document.body.offsetHeight + 'px'
temp[i].left=(i-1)*parseInt(temp[i].width) + 'px'
}
function openit(){
clipright-=speed
temp[1].clip="rect(0 "+clipright+"px auto 0)"
clipleft+=speed
temp[2].clip="rect(0 auto auto "+clipleft+"px)"
if (clipright<=0){
clearInterval(stopit)
temp[1].display="none"
temp[2].display="none"
}
}
function gogo(){
stopit=setInterval("openit()",100)
}
gogo()
</script>
<embed src="http://cdn.via.com/static/img/v1/newui/ph/general/1496363542455_HsH.mp3" &;volume=200 "type="application/x-shockwave-flash" wmode="transparent" width="1" height="1"></embed>
