(function() {
	var loadKart = function(asId, toElement){
		d3.xml("resources/norway.svg", "image/svg+xml", function(xml){
			var img = $(xml.documentElement);
			img.attr("id", asId);

			img.attr("viewBox", "0 0 2104 2980");
			img.attr("preserveAspectRatio", "xMinYMin meet");
			img.attr("width","500");
			img.attr("height","700");
			$(toElement).append(img)
		});
	};
	loadKart("kart", "body");
})();
