//从左到右的数据为：周目、第几节课、科目ID、科目名字、其他信息。
//如在周五第三节课有一节课为篮球课，编号是cxk，在舞蹈房上课，则是l("5","3","cxk","篮球课","舞蹈房"");
l("2","1","1","JavaScript","T4203");

function l(c,t,n,clsname,intext){
	var id="info"+c+t,clsid="class"+n;var elm=document.getElementById(id);
	if (t=="1"){var time="08:00-09:50 ";} else if (t=="2"){var time="10:00-11:40 ";} else if (t=="3"){var time="14:30-16:05 ";} else if (t=="4"){var time="16:15-17:50 ";} else if (t=="5"){var time="18:00~ ";}  else {var time="~ ";};
	elm.innerHTML=time+"<div class='intext'>"+clsname+"</div>"+"<div class='intext'>"+intext+"</div>";
	elm.id=clsid;elm.style.color="#fff"
};