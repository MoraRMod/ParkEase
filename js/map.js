function initMap() {
	var macc = { lat: 20.657145267243788, lng: -103.32498843371889 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 16,
		center: macc,
	});
	var marker = new google.maps.Marker({ position: macc, map: map });
}
