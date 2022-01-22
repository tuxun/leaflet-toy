	import CustomMap from './custommap.js';

function hello(){
console.log("loading Map Framework");

const map= new CustomMap();
map.tests();

		/////////////////////////////////////////////////////////////////////////



/*
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
*/

//import { CustomMap } from 'CustomMap';

//import  CustomMap  from 'CustomMap';


var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {

           //         var prev= this.previousElementSibling;
//prev.classList.toggle("active");
//document.getElementById('map').classList.toggle("active");
//document.getElementById('poimenu').classList.toggle("floatingblock");
		//		this.classList.toggle("active");
				var content = this.nextElementSibling;

				if (content.style.display === "inline-block") {
					content.style.display = "none";
//document.getElementById('poimenu').style.float = "none";
document.getElementById('map').style.width="100%";
//!!document.getElementById('poimenu').style.width="1%";
//document.getElementById('poimenu').classList.toggle("floatingblock");



				} else {
document.getElementById('map').style.width="80%";
//document.getElementById('poimenu').style.float = "right";
//!!document.getElementById('poimenu').style.width="20%";
					content.style.display = "inline-block";
		//			document.getElementById('poimenu').classList.toggle("floatingblock");

				}
			});
		}




		/////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////





							function logappend(text)
							{

								document.getElementById('logslist').innerHTML="<li id='logitem'>"+text+"</li>"+document.getElementById('logslist').innerHTML;
							}



							function log(text)
							{
								//document.getElementById('log').innerHTML="<li id='listitem'>"+text+"</li>";
								document.getElementById('logslist').innerHTML="<li id='logitem'>"+text+"</li>";
							}




}

hello();

