let data;
require(['./server/fetchData'], function (fetchData) {
  // data = fetchData();
});
let map;

async function initMap() {
  data = await fetchData();
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: data["12"]["lat"], lng: data["12"]["lon"] },
    zoom: 8,
  });
}

function enableMap(){
  initMap();
}