var mq="3"/*菜单列表数量+1*/,cq="3"/*科目数量+1*/;
function getCookie(cname) {var name = cname + "=";var ca = document.cookie.split(';');for(var i = 0; i < ca.length; i++) {var c = ca[i];while (c.charAt(0) == ' ') {c = c.substring(1);}if (c.indexOf(name)  == 0) {return c.substring(name.length, c.length);}}return "";
};function setstyle(){
/*var color=getCookie("color");
	for (var i=1;i<cq;i++){
		console.log(color);
		if (color=="color"+i){
			var do ;
			do = setcolor+i+"()";
			console.log(do);
			}
	}; */
};function setcolor0(){
	var manuid="0";
/*菜单变换*/
	for (var i=0;i<mq;i++){
		var x="mc"+i;
		console.log(x);
		document.getElementById(x).className="ml";
	};
	var menuid="mc"+manuid;
	document.getElementById(menuid).className="ml active";
/*科目颜色*/
	/*这是卡的改色的脚本部分，"lightgray"可以改成任意你喜欢的颜色。*/
	document.getElementById("class1").style.background="cadetblue";
	document.getElementById("class2").style.background="mediumvioletred";
/*其他颜色*/
	var x=document.getElementsByClassName("timelist");
	for (var i=0;i<x.length;i++){
		x[i].style.background="#fff";x[i].style.color="#000";
		};
	var x=document.getElementsByClassName("card");
	for (var i=0;i<x.length;i++){
		x[i].style.color="#fff";
		};var s=getCookie("color");
	setstyle();
};
function setcolor1() {
	var manuid="1";document.cookie="color=color1";
/*菜单变换*/
	for (var i=0;i<mq;i++){
		var x="mc"+i;
		console.log(x);
		document.getElementById(x).className="ml";
	};
	var menuid="mc"+manuid;
	document.getElementById(menuid).className="ml active";
/*科目颜色*/
	for (var i=1;i<cq;i++){
		var x="class"+i;console.log(x);
		document.getElementById(x).style.color="#000";
		document.getElementById(x).style.background="#fff";
		};
/*其他颜色*/
	var x=document.getElementsByClassName("timelist");
	for (var i=0;i<x.length;i++){
		x[i].style.background="#fff";x[i].style.color="#000";
		};	var x=document.getElementsByClassName("card");
	for (var i=0;i<x.length;i++){
		x[i].style.color="#000";
		};
};
function setcolor2() {
	var manuid="2";document.cookie="color=color2";
	for (var i=0;i<mq;i++){
		var x="mc"+i;
		console.log(x);
		document.getElementById(x).className="ml";
	};
	var menuid="mc"+manuid;
	document.getElementById(menuid).className="ml active";
	for (var i=1;i<cq;i++){
		var x="class"+i;console.log(x);
		document.getElementById(x).style.color="#fff";
		document.getElementById(x).style.background="#000";
	};
		var x=document.getElementsByClassName("timelist");
		for (var i=0;i<x.length;i++){
			x[i].style.background="#000";x[i].style.color="#fff";
		};
};