import CustomMarker from "./custommarkers.js";
import Submenu from "./submenu.js";
export let menuvalues = {

};

		menuvalues.markersList=new Array();
						menuvalues.markersListIDs=new Array();
						menuvalues.menuList=new Array();

export default class CustomMenu{
			constructor(map)
			{
			this.map=map;

				this.content="<ul id='rootmenu'></ul>";
				this.root=document.getElementById('menu');
				this.count=0;



			}

			len()
			{return this.count;}

			add(fmid,name,description,status,lat,long,visibility)
			{
				console.log('add listitem'+ fmid+","+"count="+this.count);
				menuvalues.markersListIDs[this.count]=fmid;

				var tempmarker=new CustomMarker(this.count,fmid,name,description,status,lat,long,visibility);// new newMarker([lat,long], {icon: status}).bindPopup(description);//
				let tempmenu=new Submenu( 	this.count,tempmarker );
menuvalues.menuList[fmid]=tempmenu;
				menuvalues.markersList[fmid]=tempmarker;
			this.count++;
 menuvalues.markersList[fmid].addTo(this.map);
			}

			update(fmid,name,description,status,lat,long,visibility)
			{
				console.log('updating listitem'+ fmid+","+"iconurl="+status+","+	menuvalues.markersList.join(","));

				var tempo=new CustomMarker("fakejsindex",fmid,name,description,status,lat,long,visibility);//
								menuvalues.markersList[fmid].remove();
				menuvalues.markersList[fmid]=tempo;
							//	let tempmenu=new Submenu( 	fmid,name,description,status,lat,long,visibility);
			//!this.menuList[fmid].remove();
			menuvalues.menuList[fmid].update(this.getmarker(fmid).jsindex,fmid,name,description,status,lat,long,visibility);
 menuvalues.markersList[fmid].addTo(this.map);

			}

			getmarker(fmid)
			{
				return menuvalues.markersList[fmid];
			}
			getmarkerbyindex(jsindex)
			{

				return menuvalues.markersList[menuvalues.markersListIDs[jsindex]];

			}

updatePOIvisibility(mmap,mmenu)
{
	let mapbounds=mmap.getBounds();

		for(var counter=0;counter<mmenu.len();counter++)
			{

			console.log('updating counter '+ counter+'/'+mmenu.len());
				var counterfm=counter+1;


				//console.log("counter="+counter);
				if(!mapbounds.contains((mmenu.getmarkerbyindex(counter)).getLatLng()))
				{
					this.update(mmenu.getmarkerbyindex(counter).jsindex,
						mmenu.getmarkerbyindex(counter).name,
						mmenu.getmarkerbyindex(counter).description,
						mmenu.getmarkerbyindex(counter).iconname,
						mmenu.getmarkerbyindex(counter).latitude,
						mmenu.getmarkerbyindex(counter).longitude,"hidden");

					//FileMaker.PerformScriptWithOption ( "testjsresult", menu.getmarkerbyindex(counter).id + '\n' +"invisible");

				}
				else
				{


					//FileMaker.PerformScriptWithOption ( "testjsresult", menu.getmarkerbyindex(counter).id + '\n' +"visible");

					this.update(mmenu.getmarkerbyindex(counter).jsindex,
						this.getmarkerbyindex(counter).name,
						this.getmarkerbyindex(counter).description,
						this.getmarkerbyindex(counter).iconname,
						this.getmarkerbyindex(counter).latitude,
						this.getmarkerbyindex(counter).longitude,"visible");
				}
			}
								return menu.len();
}
		}
		/////////////////////////////////////////////////////////////////////////
/*		var menu = new Menu();
		let markers=new Array();
		let markersIDs=new Array();*/





//	const mmenu =new Menu();
		//	export default  mmenu;


