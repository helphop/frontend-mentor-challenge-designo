
if (document.querySelector(".location")) {
  //Toronto Map
	const coordinatesToronto = [43.64478, -79.39458];
	const mapToronto = L.map('mapToronto').setView(coordinatesToronto, 15);
	createMapTile(mapToronto);
	const markerToronto = L.marker(coordinatesToronto).addTo(mapToronto);


	//New South Wales Map
	const coordinatesNewSouthWales = [-30.330119821488733, 149.78873043547893]
	const mapNewSouthWales = L.map('mapNewSouthWales').setView(coordinatesNewSouthWales, 15);
	createMapTile(mapNewSouthWales);
	const markerNewSouthWales = L.marker(coordinatesNewSouthWales).addTo(mapNewSouthWales);


	//Rhyd-y-fro Map
	coordinatesRhydyfro = [51.73220196706227, -3.8620045106800496]
	const mapRhydyfro = L.map('mapRhydyfro').setView(coordinatesRhydyfro, 15);
	createMapTile(mapRhydyfro);
	const markerRhydyfro  = L.marker(coordinatesRhydyfro).addTo(mapRhydyfro);


	//Setup how the user interacts with the map
	setMapControl(mapToronto);
	setMapControl(mapNewSouthWales);
	setMapControl(mapRhydyfro);


		//creates the map for the given map object
	function createMapTile(mapName) {
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			maxZoom: 18,
			tileSize: 512,
			zoomOffset: -1,
		}).addTo(mapName);
	}
	//disable scroll zoom until user clicks on map
	function setMapControl(mapName){
			mapName.scrollWheelZoom.disable();
			mapName.on('focus', () => { mapName.scrollWheelZoom.enable(); });
			mapName.on('blur', () => { mapName.scrollWheelZoom.disable(); });
	}
}