function enableNavButtons(){

	 // make desktop buttons clickable
        if(document.getElementById('menuButton1').contentDocument){
            var object = document.getElementById('menuButton1');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(0);
            });

            var object = document.getElementById('menuButton2');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(1);
            });

            var object = document.getElementById('menuButton3');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(2);
            });

            var object = document.getElementById('menuButton4');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(3);
            });

            var object = document.getElementById('menuButton5');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(4);
            });
        }

        // make mobile buttons clickable
        if(document.getElementById('menuButton1a').contentDocument){

            var object = document.getElementById('menuButton1a');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(0);
            });

            var object = document.getElementById('menuButton2a');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(1);
            });

            var object = document.getElementById('menuButton3a');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(2);
            });

            var object = document.getElementById('menuButton4a');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(3);
            });

            var object = document.getElementById('menuButton5a');
            var svg = object.contentDocument.rootElement;
            svg.addEventListener('click', function() {
              loadData(4);
            });

        }
}


function getHouseType(){

	return houseType_id;
}

function setHouseType(id){

	houseType_id = id;
}

// this function defines all the colours for the houses ------------------------------------------------------
// these house ids must match the house ids in the json files

function getHouseColours(house_type, id){

let colours;

var res = id.split("_");
let house_id = Number(res[1]);

switch(house_type){

	case 0:

	switch(true){

			case house_id == 1: // plot number 1

				colours = ['#9a7922', '#d9a831'];

			break;

			case house_id == 2:

				colours = ['#728393', '#4e5a65'];

			break;

			case house_id >=3 && house_id < 6:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=6 && house_id < 7:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id == 7:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id >=7 && house_id < 10:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=10 && house_id < 13:

				colours = ['#728393', '#4e5a65'];

			break;

			case house_id >=13 && house_id < 15:

				colours = ['#014a53', '#003036'];

			break;

			case house_id == 15:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id >=16 && house_id < 18:

				colours = ['#dcb18e', '#bf8c6f'];

			break;

			case house_id >=18 && house_id < 20:

				colours = ['#f784a', '#a7614'];

			break;

			case house_id >=20 && house_id < 22:

				colours = ['#4282a1', '#2c566a'];

			break;

			case house_id >=22 && house_id < 28:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id >=28 && house_id < 32:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id >=32 && house_id < 35:

				colours = ['#dcb18e', '#bf8c6f'];

			break;

			case house_id == 35:

				colours = ['#7d9874', '#677f60'];

			break;

			case house_id >=35 && house_id < 39:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=39 && house_id < 41:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id == 41:

				colours = ['#c2b4cd', '#887f90'];

			break;

			case house_id >=41 && house_id < 46:

				colours = ['#014a53', '#003036'];

			break;

			case house_id == 46:

				colours = ['#c2b4cd', '#887f90'];

			break;

			case house_id >=47 && house_id < 50:

				colours = ['#4282a1', '#2c566a'];

			break;

			case house_id >=50 && house_id < 53:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id == 53:

				colours = ['#7d9874', '#677f60'];

			break;

			case house_id >=54 && house_id < 58:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id == 58:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id >=59 && house_id < 64:

				colours = ['#d21e3d', '#941929'];

			break;

			case house_id == 64:

				colours = ['#c2b4cd', ' #887f90'];

			break;

			case house_id >=65 && house_id < 66:

				colours = ['#b2d3e3', '#7c949f'];

			break;

			case house_id >=66 && house_id < 69:

				colours = ['#b2d3e3', '#7c949f'];

			break;

			case house_id >=69 && house_id < 72:

				colours = ['#014a53', '#003036'];

			break;

			case house_id == 72:

				colours = ['#728393', '#4e5a65'];

			break;

			case house_id == 73:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id == 74:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=75 && house_id < 77:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id >=77 && house_id < 79:

				colours = ['#dcb18e', '#bf8c6f'];

			break;

			case house_id == 79:

				colours = ['#7d9874', '#677f60'];

			break;

			case house_id >=80 && house_id < 82:

				colours = ['#dcb18e', '#bf8c6f'];

			break;

			case house_id >=82 && house_id < 85:

				colours = ['#4282a1', '#2c566a'];

			break;

			case house_id >=85 && house_id < 88:

				colours = ['#c2b4cd', '#887f90'];

			break;

			case house_id >=88 && house_id < 91:

				colours = ['#b2d3e3', '#7c949f'];

			break;

			case house_id == 91:

				colours = ['#728393', '#4e5a65'];

			break;

			case house_id >=91 && house_id < 94:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=94 && house_id < 96:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id == 96:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=96 && house_id < 101:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id == 101:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=101 && house_id < 105:

				colours = ['#b2d3e3', '#7c949f'];

			break;

			case house_id >=105 && house_id < 107:

				colours = ['#728393', '#4e5a65'];

			break;

			case house_id >=107 && house_id < 112:

				colours = ['#014a53', '#003036'];

			break;

			case house_id >=112 && house_id < 114:

				colours = ['#c2b4cd', '#887f90'];

			break;

			case house_id >=114 && house_id < 116:

				colours = ['#728393', '#4e5a65'];

			break;

			case house_id >=116 && house_id < 118:

				colours = ['#c2b4cd', '#887f90'];

			break;

			case house_id >=118 && house_id < 120:

				colours = ['#4282a1', '#2c566a'];

			break;

			case house_id >=120 && house_id < 123:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id >=123 && house_id < 124:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id >=124 && house_id < 128:

				colours = ['#b2d3e3', '#7c949f'];

			break;

			case house_id >=128 && house_id < 133:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id >=133 && house_id < 140:

				colours = ['#dcb18e', '#bf8c6f'];

			break;

			case house_id >=140 && house_id < 142:

				colours = ['#d9a831', '#9a7922'];

			break;

			case house_id == 142:

				colours = ['#728393', '#4e5a65'];

			break;

			case house_id >=142 && house_id < 147:

				colours = ['#ef784a', '#a7614a'];

			break;

			case house_id >=147 && house_id < 149:

				colours = ['#4282a1', '#2c566a'];

			break;

			case house_id >=149 && house_id < 151:

				colours = ['#ef784a', '#a7614a'];

			break;


		}

	break;

	case 1:
		colours = ['#728393', '#728393'];

	break;
	case 2:
		colours = ['#d9a831', '#d9a831'];

	break;
	case 3:
		colours = ['#ef784a', '#ef784a'];

	break;
	case 4:
		colours = ['#d21e3d', '#d21e3d'];

	break;
}
		

return colours

}

function loadData(id){

let url;

hideInfo()


// desktop menu
if(document.getElementById('menuButton1').contentDocument){
	document.getElementById('menuButton1').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton2').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton3').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton4').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton5').contentDocument.getElementById("middle").style.fill = 'white'
}

// mobile menu
if(document.getElementById('menuButton1a').contentDocument){
	document.getElementById('menuButton1a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton2a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton3a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton4a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton5a').contentDocument.getElementById("middle").style.fill = 'white'
}



//set json & colours
switch(id){

	case 0: //plot number & house type

		if(document.getElementById('menuButton1').contentDocument){
			gsap.to(document.getElementById('menuButton1').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});

		}

		if(document.getElementById('menuButton1a').contentDocument){
			gsap.to(document.getElementById('menuButton1a').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});
		}

		url = '/assets/json/housesbynumbers.json';

	break;

	case 1: //not yet released

		if(document.getElementById('menuButton2').contentDocument){
			gsap.to(document.getElementById('menuButton2').contentDocument.getElementById("middle"), 1, {fill: "#728393"});
		}

		if(document.getElementById('menuButton2a').contentDocument){
			gsap.to(document.getElementById('menuButton2a').contentDocument.getElementById("middle"), 1, {fill: "#728393"});
		}

		url = '/assets/json/housesbynotyetreleased.json';

	break;

	case 2: //for sale

		if(document.getElementById('menuButton3').contentDocument){
			gsap.to(document.getElementById('menuButton3').contentDocument.getElementById("middle"), 1, {fill: "#d9a831"});
		}

		if(document.getElementById('menuButton3a').contentDocument){
			gsap.to(document.getElementById('menuButton3a').contentDocument.getElementById("middle"), 1, {fill: "#d9a831"});
		}

		url = '/assets/json/housesbysale.json';

	break;

	case 3: //reserved

		if(document.getElementById('menuButton4').contentDocument){
			gsap.to(document.getElementById('menuButton4').contentDocument.getElementById("middle"), 1, {fill: "#ef784a"});
		}

		if(document.getElementById('menuButton4a').contentDocument){
			gsap.to(document.getElementById('menuButton4a').contentDocument.getElementById("middle"), 1, {fill: "#ef784a"});
		}

		url = '/assets/json/housesbyreserved.json';

	break;

	case 4: //sold

		if(document.getElementById('menuButton5').contentDocument){
			gsap.to(document.getElementById('menuButton5').contentDocument.getElementById("middle"), 1, {fill: "#d21e3d"});
		}

		if(document.getElementById('menuButton5a').contentDocument){
			gsap.to(document.getElementById('menuButton5a').contentDocument.getElementById("middle"), 1, {fill: "#d21e3d"});
		}

		url = '/assets/json/housesbysold.json';

	break;

	default: //plot number & house type

		if(document.getElementById('menuButton1').contentDocument){
			gsap.to(document.getElementById('menuButton1').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});
		}

		if(document.getElementById('menuButton1a').contentDocument){
			gsap.to(document.getElementById('menuButton1a').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});
		}

		url = '/assets/json/housesbynumbers.json';

	break;

}

fetch(url)
  .then(function (response) {
    // The JSON data will arrive here
    return response.json()
  }).then((data) => {

  	  json = data;

      colourHouses(id);
 	  animateHouses();
  }).catch(function (err) {
    // If an error occured, you will catch it here
  });


}

function hideDander(e){

	document.getElementsByClassName('arrow-section')[0].style.visibility = 'hidden';
	document.getElementsByClassName('dander-desktop')[0].style.visibility = 'hidden';
}

function hideInfo(){

document.getElementsByClassName('houseInfo-section')[0].style.visibility = 'hidden';


}

// reduce y by 120px

let popupPosArray = [

	[0, 0],
	[579 ,698, 1],
	[596 ,661],
	[600 ,638],
	[606 ,626],
	[607 ,609],

	[603 ,581, 6],
	[606 ,563],

	[566 ,494, 8],
	[554 ,506],
	[546 ,518],
	[490 ,511],
	[462 ,504],

	[446 ,590, 13],
	[463 ,588],
	[522 ,594],
	[518 ,631],
	[517 ,646, 17],
	[499 ,700],
	[483 ,697],

	[419 ,580],
	[391 ,576],
	[364 ,570, 22],
	[346 ,569],
	[326 ,565],
	[307 ,563],
	[289 ,562],
	[271 ,557, 27],
	[251 ,552],
	[229 ,553],
	[211 ,547],
	[193 ,541, 31],

	[111 ,624, 32],
	[122 ,611],
	[130 ,604],
	[146 ,580],

	[152 ,513, 36],
	[145 ,498],
	[103 ,481],
	[95 ,449],
	[82 ,439],
	[64 ,416],

	[18 ,386, 42],
	[11 ,377],
	[1 ,371],
	[-15 ,353],

	[49 ,356, 46],
	[87 ,340],
	[112 ,331],
	[137 ,319],

	[183 ,285, 50],
	[196 ,298],
	[209 ,309],
	[225 ,361],
	[204 ,383],
	[186 ,398],
	[170 ,411],
	[152 ,429],

	[211 ,465, 58],
	[236 ,469],
	[258 ,473],
	[283 ,479],
	[311 ,481],
	[336 ,485],

	[434 ,501, 64],
	[409 ,497],
	[395 ,496],
	[404 ,409],
	[434 ,416],
	[461 ,414, 69],
	[478 ,418],
	[496 ,419],
	[517 ,426],

	[566 ,397, 73],
	[614 ,427],
	[592 ,453],
	[582 ,468],

	[628 ,292, 77],
	[674 ,277],
	[673 ,274],
	[740 ,284],
	[733 ,294],
	[717 ,321, 82],
	[686 ,353],
	[659 ,386],
	[617 ,344],
	[593 ,326],
	[570 ,306],

	[514 ,381, 88],
	[516 ,367],
	[517 ,355],

	[501 ,290, 91],
	[467 ,308],
	[453 ,311],
	[432 ,313],
	[413 ,318],
	[333 ,406],
	[331 ,385, 97],
	[334 ,406],
	[338 ,428],
	[272 ,409],

	[332 ,326, 101],
	[280 ,362],
	[277 ,348],
	[275 ,334],

	[259 ,280, 105],
	[283 ,268],
	[304 ,255],
	[318 ,250],
	[337 ,242, 109],
	[352 ,238],
	[376 ,232],
	[399 ,233],
	[426 ,225],
	[464 ,218, 114],
	[490 ,222],
	[520 ,223],
	[548 ,217],
	[579 ,220],
	[608 ,218],
	[643 ,219, 120],
	[663 ,218],
	[691 ,221],
	[712 ,221],
	[743 ,220],
	[757 ,220],
	[773 ,220],
	[785 ,220],
	[842 ,208, 128],
	[844 ,189],

	[924 ,186, 130],
	[924 ,205],
	[926 ,220],
	[869 ,256, 133],
	[859 ,268],
	[849 ,278],
	[839 ,294],
	[830 ,302, 137],
	[825 ,313],
	[812 ,325],
	[771 ,348, 140],
	[760 ,360],
	[746 ,383],
	[738 ,417],
	[728 ,429, 144],
	[712 ,444],
	[703 ,458],
	[675 ,472],
	[660 ,494],
	[650 ,523],
	[637 ,536],

]

function showInfo(e, i){

let posX = popupPosArray[i][0];
let posY = popupPosArray[i][1];

let house = _.find(json, { 'house_id': e.target.parentNode.id });

document.getElementsByClassName('houseInfo1a')[0].style.paddingTop = '2px';
document.getElementsByClassName('houseInfo-section')[0].style.visibility = 'visible';
document.getElementsByClassName('houseInfo-section')[0].style.left = posX+'px';
document.getElementsByClassName('houseInfo-section')[0].style.top = (posY-125)+'px';
document.getElementsByClassName('houseInfo1a')[0].innerHTML = '<span class="houseInfoHeader">Plot '+house.house_id+'</span>&nbsp;- '+house.num_of_bedrooms+' bedrooms';
document.getElementsByClassName('houseInfo2')[0].innerHTML = '<i>House Type</i>&nbsp;'+house.house_name;
document.getElementsByClassName('houseInfo3')[0].innerHTML = '<a href="/house-type.html">Discover more</a>';

}

function showInfoStart(){

document.getElementsByClassName('houseInfo1a')[0].style.paddingTop = '10px';
document.getElementsByClassName('houseInfo-section')[0].style.marginTop = '5px';
document.getElementsByClassName('houseInfo-section')[0].style.visibility = 'visible';
document.getElementsByClassName('houseInfo-section')[0].style.left = '116px';
document.getElementsByClassName('houseInfo-section')[0].style.top = '504px';
document.getElementsByClassName('houseInfo1a')[0].innerHTML = '';
document.getElementsByClassName('houseInfo2')[0].innerHTML = 'Click on a plot to';
document.getElementsByClassName('houseInfo3')[0].innerHTML = '<strong>discover more</strong>';

}

function defineHouses(){


// add button to the houses
let numHouses = 151;
for(let i=1;i<numHouses;i++){

	let house = document.getElementById("_"+i);
	house.addEventListener("click",function (e) {

		showInfo(e,i)},true);
    
}

}

function colourHouses(house_type){

console.log('colourHouses'+house_type)
let svgElement = document.getElementsByClassName("houses")[0];

if(svgElement){

	// get houses svg
	let svgHouses = svgElement.children[0].children;

	for(let i=0;i<svgHouses.length;i++){

		let element = svgHouses[i];

		let wallColour;
		let roofColour;

		let colourArray = getHouseColours(house_type, element.id);
		if(colourArray){
			wallColour = colourArray[0];
			roofColour = colourArray[1];
		}

		for(let j=0;j<element.children.length;j++){
		
			// colour roof
			// let roof = _.includes(element.children[j].id,'_roof')
			let roof = _.filter(element.children[j].id,'_roof')
			if(roof){
				//console.log('roofColour-----------------------------'+roofColour)
				element.children[j].style.fill = roofColour;
			}

			// colour wall
			// let wall = _.includes(element.children[j].id,'_wall')
			let wall = _.filter(element.children[j].id,'_wall')
			if(wall){
				// console.log(' wallColour--------------------'+ wallColour)
				element.children[j].style.fill = wallColour;
			}

		}

	}


}

}

function animateHouses(){

// hideInfo();

// hide all houses
let numHouses = 151;
for(let i=0;i<numHouses;i++){

	let house = document.getElementById("_"+i);

	if(house)
	gsap.set(house, {scale:0, transformOrigin:"50% 50%"});
    
}

// animate selected houses
for(let i=0;i<json.length;i++){

	let house = document.getElementById(json[i].house_id);

	if(house){
		gsap.set(house, {scale:0, transformOrigin:"50% 50%"})
    	gsap.to(house, 0.2, {scale:1, transformOrigin:"50% 50%", delay:1} );
	}

}
}