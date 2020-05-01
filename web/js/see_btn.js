function see_today(){
    for (var i=0;i<7;i++) {
	  document.getElementById(i).style.display="none";
	  };
	document.getElementById("see_all").className="tab";
	document.getElementById("see_today").className="tab active";
	var d=new Date();var day=d.getDay();
    document.getElementById(day).style.display="flex";
};

function see_all(){
    for (var i=0;i<7;i++) {
	  document.getElementById(i).style.display="flex";
	  };
	document.getElementById("see_all").className="tab active";
	document.getElementById("see_today").className="tab";
};

function see_menu(){
	document.getElementById('menu').style.display='block';
	var x=document.getElementsByClassName("head");
		for (var i=0;i<x.length;i++){
			x[i].style.background="#fff";x[i].style.position="static";
		};
};

function off_menu(){
	document.getElementById('menu').style.display='none';
	var x=document.getElementsByClassName("head");
		for (var i=0;i<x.length;i++){
			x[i].style.background="#fff";x[i].style.position="sticky";
		};
};