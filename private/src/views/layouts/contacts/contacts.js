document.addEventListener("DOMContentLoaded", function (event) {
  mapkit.init({
    authorizationCallback: function (done) {
      fetch("/services/jwt")
        .then((response) => response.json())
        .then((result) => {
          done(result.token);
        });
    },
  });

  var MarkerAnnotation = mapkit.MarkerAnnotation;
  var sfo = new mapkit.Coordinate(37.616934, -122.38379);

  var sfoRegion = new mapkit.CoordinateRegion(
    new mapkit.Coordinate(37.616934, -122.38379),
    new mapkit.CoordinateSpan(0.167647972, 0.354985255)
  );
  var map = new mapkit.Map("map");

  var sfoAnnotation = new MarkerAnnotation(sfo, {
    color: "#67b7f0",
    title: "Тинькофф Банк",
    glyphText: "🏠",
  });
  map.showItems([sfoAnnotation]);

  map.region = sfoRegion;
});
