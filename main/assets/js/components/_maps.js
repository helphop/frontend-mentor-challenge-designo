


//Toronto Map
if (document.querySelector(".location")) {

	const coordinatesToronto = [43.64478, -79.39458];
	const mapToronto = L.map('mapToronto').setView(coordinatesToronto, 15);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoiY2hlbGxnb3VkYSIsImEiOiJja21mMTY4bTgwNGRuMnZrMXNwY28xZ2Z3In0.1uuZ2XwLqDfH0YvDat9Wqw'
	}).addTo(mapToronto);

	var markerToronto = L.marker(coordinatesToronto).addTo(mapToronto);


	//New South Wales Map

	const coordinatesNewSouthWales = [-30.330119821488733, 149.78873043547893]
	const mapNewSouthWales = L.map('mapNewSouthWales').setView(coordinatesNewSouthWales, 15);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoiY2hlbGxnb3VkYSIsImEiOiJja21mMTY4bTgwNGRuMnZrMXNwY28xZ2Z3In0.1uuZ2XwLqDfH0YvDat9Wqw'
	}).addTo(mapNewSouthWales);

	var markerNewSouthWales = L.marker(coordinatesNewSouthWales).addTo(mapNewSouthWales);


	//Rhyd-y-fro Map

	coordinatesRhydyfro = [51.73220196706227, -3.8620045106800496]
	const mapRhydyfro = L.map('mapRhydyfro').setView(coordinatesRhydyfro, 15);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoiY2hlbGxnb3VkYSIsImEiOiJja21mMTY4bTgwNGRuMnZrMXNwY28xZ2Z3In0.1uuZ2XwLqDfH0YvDat9Wqw'
	}).addTo(mapRhydyfro );

	var markerRhydyfro  = L.marker(coordinatesRhydyfro).addTo(mapRhydyfro);

}