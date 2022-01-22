	import CustomIcon from './customicon.js';
	const micon =new CustomIcon();
		export default class CustomMarker extends L.Marker {
			constructor(jsindex,fmid,name,description,status,latitude,longitude,visibility) {
				var str= "leaf-"+status+".png";
				super([latitude,longitude],micon.getIcon(status)).bindPopup(fmid+ ":" +name+" "+description);
				this.iconname=status;
				this.iconurl=str;
				this.icon=micon.getIcon(status);//new LeafIcon({iconUrl: this.iconurl});
				this.setIcon(this.icon);
				this.fmid=fmid;
	this.jsindex=jsindex;
			//	this.addTo(map);
				this.name=name;
				this.description=description;

				//note: marker.bindpopup() doesnt work as intended on safari
				// https://github.com/Leaflet/Leaflet/issues/7331

				this.on('click', function(e) {
					this.openPopup();
				/*	if(browser==true)
					{
						FileMaker.PerformScriptWithOption ( "selectrecordfromJS", fmid);
					}*/
				});
				this.latitude=latitude;
				this.longitude=longitude;
				this.visibility=visibility;
			}
		};
