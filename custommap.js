import CustomMenu from "./custommenu.js";
	import CustomIcon from './customicon.js';
import {menuvalues} from "./custommenu.js";
const icon =  new CustomIcon();

let map  = L.map('map').setView([51.5, -0.09], 13);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);


menuvalues.menu=new CustomMenu(map);


		var ZoomViewer = L.Control.extend({
			onAdd: function () {
				var gauge = L.DomUtil.create('span');
				//console.log("gauge="+gauge);
				gauge.style.width = '100';
				gauge.id='gauge';
				gauge.style.color = 'black';
				gauge.style.textStyle = 'bold';
				gauge.style.background = 'rgba(255,255,255,0.5)';
				gauge.style.textAlign = 'right';
				gauge.innerHTML = 'Initial zoom level: ' + map.getZoom() + '\nNombre de POI: '+menuvalues.menu.len();

				return gauge;
			}
		});
		var zoomViewer = (new ZoomViewer()).addTo(map);


export default class CustomMap {
constructor(){
		//adding map
console.log("loading CustomMap");
			//prepare a boolean to know if we are in filemaker or firefox
		//Danger: later we use this to know if we are under SAFARI!!!


//	let marker = new CustomMarkers(jsindex,fmid,name,description,status,latitude,longitude,visibility) {;
//this.menu =  new CustomMenu();




		let url = new URL(window.location)
		let params = new URLSearchParams(url.search);
		var browser = params.get('fmpro');
		if(!browser)
		{
			browser=false;
		} else
		{
			browser=true;
		}







		map.on('zoomend moveend move', function (ev) {


		menuvalues.menu.updatePOIvisibility(map,menuvalues.menu);
		/*
			const myPromise = new Promise((resolve, reject) => {
				if() {
					resolve("Promise was fulfilled");
				} else {
					reject("Promise was rejected");
				}
			});
*/
		});

		if(browser)
		{

			tests();
		}
		}

		 updatePOInumber()
		{
			document.getElementById('gauge').innerHTML = 'Zoom level: ' + map.getZoom() + '\nNombre de POI: '+menuvalues.menu.len();
			// return gauge;
		}


					 say(fmid,name,description,status,lat,long,visibility)
							{
								// https://www.iconfinder.com/icons/8541668/biking_bicycle_cycle_bike_icon
								// https://www.iconfinder.com/icons/2608317/cofee_drink_glass_icon

								// https://leafletjs.com/examples/custom-icons/


								if(!menuvalues.menu.getmarker(fmid))
								{

									//markersIDs[fmid]=menu.len();
									menuvalues.menu.add(fmid,name,description,status,lat,long,visibility);


								}
								else {
									menuvalues.menu.update(menuvalues.menu.getmarker(fmid).fmid,name,description,status,lat,long,visibility);

								}


								this.updatePOInumber();

							}

		tests()
		{console.log("testing customMap");
			if(menuvalues.menu.len())
				{
				//
;				}
								document.getElementById('testbutton').innerText="UPDATE 10 P.O.Is for tests";
			setTimeout(() => {
				this.say(10,"redname","testdesc",icon.getRandomIconName(),51.500, -0.070,true)
			}, 200);

			setTimeout(() => {
				this.say(11,"redname","testdesc",icon.getRandomIconName(),51.500, -0.070,true);
			}, 400);

			setTimeout(() => {
				this.say(12,"orangename","testdesc",icon.getRandomIconName(),51.505, -0.075,true);
			}, 600);

			setTimeout(() => {
				this.say(13,"greenname","testdesc",icon.getRandomIconName(),51.510, -0.080,true);
			}, 800);

			setTimeout(() => {
				this.say(14,"redname","testdesc",icon.getRandomIconName(),51.515, -0.085,true);
			}, 1000);
			setTimeout(() => {
				this.say(15,"orangename","testdesc",icon.getRandomIconName(),51.480, -0.090,true);
			}, 1200);
			setTimeout(() => {
				this.say(16,"greenname","testdesc",icon.getRandomIconName(),51.485, -0.095,true);
			}, 1400);
			setTimeout(() => {
				this.say(17,"redname","testdesc",icon.getRandomIconName(),51.490, -0.100,true);
			}, 1600);
			setTimeout(() => {
				this.say(18,"orangename","testdesc",icon.getRandomIconName(),51.495, -0.105,true);
			}, 1800);
			setTimeout(() => {
				this.say(15,"upupupugreenname","testdesc",icon.getRandomIconName(),51.480, -0.090,true);
			}, 2000);


		}


//const mmap =new CustomMap();

}


