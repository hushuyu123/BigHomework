var china = document.getElementById('china');
	var asia = document.getElementById('asia');
	var oversea = document.getElementById('oversea');

	var china_city = document.getElementsByClassName('china_city');
	var asia_city = document.getElementsByClassName('asia_city');
	var overseas_city = document.getElementsByClassName('overseas_city');


	china.onclick=function () {
		china.style.backgroundColor="black";
		china.style.color = "white";
		asia.style.backgroundColor="white";
		asia.style.color = "black";
		oversea.style.backgroundColor="white";
		oversea.style.color = "black";

		china_city[0].style.display = "block";
		asia_city[0].style.display = "none";
		overseas_city[0].style.display = "none";
	}
	asia.onclick=function () {
		china.style.backgroundColor="white";
		china.style.color = "black";
		asia.style.backgroundColor="black";
		asia.style.color = "white";
		oversea.style.backgroundColor="white";
		oversea.style.color = "black";

		china_city[0].style.display = "none";
		asia_city[0].style.display = "block";
		overseas_city[0].style.display = "none";
	}
	oversea.onclick=function () {
		china.style.backgroundColor="white";
		china.style.color = "black";
		asia.style.backgroundColor="white";
		asia.style.color = "black";
		oversea.style.backgroundColor="black";
		oversea.style.color = "white";

		overseas_city[0].style.display = "block";
		asia_city[0].style.display = "none";
		china_city[0].style.display = "none";
	}