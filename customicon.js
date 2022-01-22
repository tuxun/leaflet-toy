export default class CustomIcon
		{
					constructor() {


		let LeafIcon = L.Icon.extend({
			options: {
				//shadowUrl: 'leaf-shadow.png',
				iconSize:     [40, 95],
				//shadowSize:   [50, 64],
				iconAnchor:   [20, 94],
				//shadowAnchor: [4, 62],
				popupAnchor:  [0, 0]
			}
		});

				var SquareIcon = L.Icon.extend({
			options: {
				//shadowUrl: 'leaf-shadow.png',
				iconSize:     [40, 40],
				//shadowSize:   [50, 64],
				iconAnchor:   [22, 39],
				//shadowAnchor: [4, 62],
				popupAnchor:  [0, 0]
			}
		});

		var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
		redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
		orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});


		var cofeeIcon = new SquareIcon({iconUrl: 'leaf-cofee.png'}),
		bicycleIcon = new SquareIcon({iconUrl: 'leaf-bicycle.png'});

this.iconList=[
["green",greenIcon],
["orange",orangeIcon],
["red",redIcon],
["cofee",cofeeIcon],
["bicycle",bicycleIcon]
];

}


 getIcon(name)
	{
	for (let j in this.iconList)
		{
			if (this.iconList[j][0]==name)
				{return this.iconList[j][1];}
		}

		//logappend("icon "+name+" not found");
	}

 getRandomIconName()
	{
let min=0,max=this.iconList.length-1;
	var j=Math.floor(Math.random() * (max - min + 1) + min);
		//logappend("j:"+j);
		//logappend(this.iconList[j][0]);
	return this.iconList[j][0];
}

	}


//	const micon =new CustomIcon();
		//	export default  micon;

