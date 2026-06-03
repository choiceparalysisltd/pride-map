import L from 'leaflet';
import './style.css'
import 'leaflet/dist/leaflet.css';

const container = document.getElementById("app")!;
const map = L.map(container, {
  center: new L.LatLng(39.8599013238558, -105.05942838059936),
  zoom: 18,
  maxZoom: 30
});

L.tileLayer("https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}{r}", {
  maxNativeZoom: 18,
  maxZoom: 1000,
  attribution: "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community"
}).addTo(map)

interface Marker {
  title: string;
  location: L.LatLng
}

interface Category {
  title: string;
  markers: Marker[];
}

const CATEGORIES: Category[] = [
  {
    title: "Entrances",
    markers: [
      {
        title: "South Entrance",
        location: new L.LatLng(39.85925248150968, -105.05977629274291)
      },
      {
        title: "North Entrance",
        location: new L.LatLng(39.860532241559106, -105.05905010654104)
      }
    ]
  },
  {
    "title": "Attractions",
    "markers": [
      {
        title: "Splash Pad",
        location: new L.LatLng(39.85951954598111, -105.05987202861702)
      },
      {
        title: "Main Stage",
        location: new L.LatLng(39.86003933695594, -105.05963386122946)
      },
      {
        title: "Dog Adoptions sponsored by PetVet365",
        location: new L.LatLng(39.860093107216606, -105.0588539682967)
      }
    ]
  }
];

CATEGORIES.forEach((c) => {
  c.markers.forEach((m) => {
    L.marker(m.location).bindPopup(m.title).addTo(map);
  });
});

