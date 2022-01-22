 export default class Submenu
		{
			constructor(index,marker)
			{
				this.root=document.getElementById("poislist");
				this.id=index;
				this.fmid=marker.fmid;
				this.name=marker.name;
				this.description=marker.description;
				this.iconName=marker.iconName;
				this.latitude=marker.latitude;
				this.longitude=marker.longitude;
				this.visibility=marker.visibility;
		/*		this.root.innerHTML=this.root.innerHTML+"<li style='display:"+marker.visibility+"' id='listitem"+marker.id+"'><a href='#'  style='display:block;color:green;'  onclick='popup("+this.fmid+")' >"+index+" "+marker.id+" "+marker.name+" "+marker.description+" "+marker.iconurl+" "+marker.latitude+","+marker.longitude+" "+marker.visibility+"</a></li>";
*/
	if(this.visibility)
				{
					this.root.innerHTML=this.root.innerHTML+"<li style='display:block' id='listitem"+this.fmid+"'><a href='#'  style='color:green;' onclick='popup("+this.fmid+")' >"+index+" "+this.fmid+" "+this.name+" "+this.description+" "+marker.iconurl+" "+this.latitude+","+this.longitude+" "+this.visibility+"</a></li>";;
				}
				else
				{
					this.root.innerHTML=this.root.innerHTML+"<li style='display:none;' id='listitem"+this.fmid+"'><a href='#'  style='color:red;' onclick='popup("+this.fmid+")' >"+index+" "+this.fmid+" "+this.name+" "+this.description+" "+marker.iconurl+" "+this.latitude+","+this.longitude+" "+this.visibility+"</a></li>";;
				}

				//				this.add(index,marker.id,marker.name,marker.description,marker.iconName,marker.latitude,marker.longigtude,marker.visibility);
				//logappend("created submenu"+index);
			}

			update(index,fmid,name,description,status,lat,long,visibility){
		//			logappend("update submenu"+index);
	if(visibility)
				{
					document.getElementById('listitem'+fmid).innerHTML="<li id='listitem"+fmid+"'><a href='#'  style='display:block;color:green;' onclick='popup("+fmid+")' >"+index+" "+fmid+" "+name+" "+description+" "+status+" "+lat+","+long+" "+visibility+"</a></li>";;
				}
				else
				{
					document.getElementById('listitem'+fmid).innerHTML="<li id='listitem"+fmid+"'><a href='#'  style='display:none;color:red;' onclick='popup("+fmid+")' >"+index+" "+fmid+" "+name+" "+description+" "+status+" "+lat+","+long+" "+visibility+"</a></li>";;
				}
				//this.root.innerHTML=this.root.innerHTML+"<li style='display:"+visibility+"'id='listitem"+index+"'>"+index+id+name+description+status+lat+long+visibility+"</li>";
				//log("added submenu"+id);
			}
		}
