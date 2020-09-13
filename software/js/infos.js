//从左到右的数据为：周目、第几节课、科目ID、科目名字、其他信息。
//如在周五第三节课有一节课为篮球课，编号是cxk，在舞蹈房上课，则是l("5","3","cxk","篮球课","舞蹈房"");

let data = {
	week:1,
	time:1,
	id:"a",
	name:"shit",
	other:"fucking shit"
}
let arr = [
	["1","2","a","JSP程序设计","韦海清 软件开发实训室"],
	["1","3","b","安卓开发","邹才深 路由器交换实训室"],
	["2","3","c","WEB前端技术框架","李丹 路由器交换实训室"],
	["2","4","c","WEB前端技术框架","李丹 路由器交换实训室"],
	["3","2","b","安卓开发","邹才深 路由器交换实训室"],
	["3","4","d","形政(2-8周 双周)","马云龙 L1-602"],
	["3","5","a","JSP程序设计","韦海清 软件开发实训室"],
	["4","1","b","安卓开发","邹才深 路由器交换实训室"],
	["5","1","b","安卓开发","邹才深 路由器交换实训室"],
	["5","4","e","创新创业","段唐文 L1-602"]
]
for (let i = 0;i<arr.length;i++){
	l(arr[i][0],arr[i][1],arr[i][2],arr[i][3],arr[i][4])
}
/*
l("2","3","a","WEB前端","");
l("5","3","a","WEB前端","");
l("1","3","b","数据库","");
l("2","4","b","数据库","");
l("3","1","b","数据库","");
l("4","2","b","数据库","");
l("5","3","b","数据库","");
l("1","2","c","毛概","");
l("4","1","c","毛概","");
l("1","4","c","形政","");
l("2","1","d","军事","");
l("2","2","e","应用文","");
l("3","3","e","英语","");
l("5","1","f","大学生心理","");
l("5","3","f","职业规划","");
*/

function l(c,t,n,clsname,intext){
	var id="info"+c+t,clsid="info "+n;var elm=document.getElementById(id);
	//switch (t){ case 1: time="08:00-09:50 "; break; case 2: time="10:00-11:40 ";break;case 3 : time="14:30-16:05 ";break; case 4 :time="16:15-17:50 "; break; case 5:time="18:00~ ";break;default: time="~ ";};
	if (t=="1"){var time="08:00-09:50 ";} else if (t=="2"){var time="10:00-11:40 ";} else if (t=="3"){var time="14:30-16:05 ";} else if (t=="4"){var time="16:15-17:50 ";} else if (t=="5"){var time="19:00-22:10";}  else {var time="~ ";};
	elm.innerHTML=time+"<div class='intext'>"+clsname+"</div>"+"<div class='intext'>"+intext+"</div>";
	elm.className=clsid;elm.style.color="#fff";//elm.style.display="block"
};

o("1","5");o("2","5");o("3","5");o("4","5");o("5","5");
function o(c,t,){
	for (var i=t;i<6;i++){
		console.log(i);var id="info"+c+i;var elm=document.getElementById(id);
		elm.style.display="none";
	};
	var id="info"+c+t;var elm=document.getElementById(id);if (t=="1"){var time="~ ";} else if (t=="2"){var time="10:00~ ";} else if (t=="3"){var time="14:30~ ";} else if (t=="4"){var time="16:15~ ";} else if (t=="5"){var time="18:00~ ";}  else {var time="~ ";};elm.innerHTML=time;elm.style.display="block";
};
