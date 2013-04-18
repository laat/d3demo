(function() {
	var loadKartAndData = function(asId, toElement, callback){
		d3.xml("resources/norway.svg", "image/svg+xml", function(xml){
			var img = $(xml.documentElement);
			img.attr("id", asId);

			img.attr("viewBox", "0 0 2104 2980");
			img.attr("preserveAspectRatio", "xMinYMin meet");
			img.attr("width","500");
			img.attr("height","700");
			$(toElement).append(img)

			d3.csv("resources/kommuner.t.csv", function(csv){
				callback(csv);
			});
		});
	};
	var fargelegg = function(data){
		var colors=d3.scale.linear()
			.domain([0, 600000])
			.range(["yellow","red"]);

		data.forEach(function(kommune) {
			$("#"+kommune.KommuneNr).css("fill", colors(kommune.Innbyggere));
		});
	};

	loadKartAndData("kart", "body", fargelegg);
})();
