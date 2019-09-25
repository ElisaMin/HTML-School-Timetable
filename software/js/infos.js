//从左到右的数据为：周目、第几节课、科目ID、科目名字、其他信息。
//如在周五第三节课有一节课为篮球课，编号是cxk，在舞蹈房上课，则是l("5","3","cxk","篮球课","舞蹈房"");
l("1","1","a","Office办公软件","L1-402");
l("1","2","a","Office办公软件","L1-402");
l("2","1","b","Java程序设计","T4-302");
l("5","4","b","Java程序设计","L4-302");
l("3","1","c","Java程序设计","L1-201");
l("3","2","c","Java程序设计","L1-201");
l("4","2","d","体育","操场/球场");
l("5","2","e","思想道德修养与法律基础","L1-602");
l("1","4","f","形式与政治","L1-601（单周）");

function l(c,t,n,clsname,intext){
	var id="info"+c+t,clsid="info "+n;var elm=document.getElementById(id);
	//switch (t){ case 1: time="08:00-09:50 "; break; case 2: time="10:00-11:40 ";break;case 3 : time="14:30-16:05 ";break; case 4 :time="16:15-17:50 "; break; case 5:time="18:00~ ";break;default: time="~ ";};
	if (t=="1"){var time="08:00-09:50 ";} else if (t=="2"){var time="10:00-11:40 ";} else if (t=="3"){var time="14:30-16:05 ";} else if (t=="4"){var time="16:15-17:50 ";} else if (t=="5"){var time="18:00~ ";}  else {var time="~ ";};
	elm.innerHTML=time+"<div class='intext'>"+clsname+"</div>"+"<div class='intext'>"+intext+"</div>";
	elm.className=clsid;elm.style.color="#fff";//elm.style.display="block"
};

o("1","5");o("2","2");o("3","3");o("4","3");o("5","5");
function o(c,t,){
	for (var i=t;i<6;i++){
		console.log(i);var id="info"+c+i;var elm=document.getElementById(id);
		elm.style.display="none";
	};
	var id="info"+c+t;var elm=document.getElementById(id);if (t=="1"){var time="~ ";} else if (t=="2"){var time="10:00~ ";} else if (t=="3"){var time="14:30~ ";} else if (t=="4"){var time="16:15~ ";} else if (t=="5"){var time="18:00~ ";}  else {var time="~ ";};elm.innerHTML=time;elm.style.display="block";
};
