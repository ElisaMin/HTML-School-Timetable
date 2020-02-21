//从左到右的数据为：周目、第几节课、科目ID、科目名字、其他信息。
//如在周五第三节课有一节课为篮球课，编号是cxk，在舞蹈房上课，则是l("5","3","cxk","篮球课","舞蹈房"");
l("3","3","a","AI","");
l("3","4","a","AI","");
l("4","2","b","大学生职业发展","");
l("5","1","c","排版","");
l("5","2","c","排版","");
l("5","d","c","形式政策","");

function l(c,t,n,clsname,intext){
	var id="info"+c+t,clsid="info "+n;var elm=document.getElementById(id);if (t=="1"){var time="08:00-09:50 ";} else if (t=="2"){var time="10:00-11:40 ";} else if (t=="3"){var time="14:30-16:05 ";} else if (t=="4"){var time="16:15-17:50 ";} else if (t=="5"){var time="18:00~ ";}  else {var time="~ ";};
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
