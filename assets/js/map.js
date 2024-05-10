(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyBFWafIewWgt2opZLFYNqh-4dhSqkssyFg", v: "weekly"});
        
let map;

async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 46.619261, lng: -33.134766 },
  });

  const label = "Rosie was here";
  const locations = [
  	{ lat: 40.785091, lng: -73.968285 },
  	{ lat: 41.084045, lng: -73.874245 },
  	{ lat: 40.754932, lng: -73.984016 },
  ];
  var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location
        });
    });

   // Add a marker clusterer to manage the markers.
   var markerCluster = new MarkerClusterer(map, markers,
       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}

initMap();