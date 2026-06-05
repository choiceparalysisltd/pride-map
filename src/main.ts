import L from 'leaflet';
import './style.css'
import 'leaflet/dist/leaflet.css';

const container = document.getElementById("app")!;
const map = L.map(container, {
  center: new L.LatLng(39.8599013238558, -105.05942838059936),
  zoom: 20,
  maxZoom: 30
}).locate({ setView: false });

L.tileLayer("https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}{r}", {
  maxNativeZoom: 18,
  maxZoom: 1000,
  attribution: "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community"
}).addTo(map)

map.on('click', (e) => {
  console.log(`${e.latlng.lat}, ${e.latlng.lng}`);
});

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
      },
      {
        title: "West Entrance",
        location: new L.LatLng(39.85995131846813, -105.06031895865523)
      },
      {
        title: "East Entrance",
        location: new L.LatLng(39.85985451734592, -105.05849765717299)
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
        title: "Playground",
        location: new L.LatLng(39.85962233694333, -105.05993451985886)
      },
      {
        title: "Main Stage",
        location: new L.LatLng(39.86003933695594, -105.05963386122946)
      },
      {
        title: "Canine Club",
        location: new L.LatLng(39.860093107216606, -105.0588539682967)
      },
      {
        title: "RAINBOW CENTRAL",
        location: new L.LatLng(39.859431346285584, -105.05959943375002)
      },
      {
        title: "Yard Games",
        location: new L.LatLng(39.85988055957516, -105.0592102110386)
      }
    ]
  },
  {
    title: "Facilities",
    markers: [
      {
        title: "Water Bottle Fill Station and Dog Fountain",
        location: new L.LatLng(39.85975084865773, -105.05998134613039)
      },
      {
        title: "Restrooms",
        location: new L.LatLng(39.859997916860586, -105.05977883934976)
      },
      {
        title: "Restrooms",
        location: new L.LatLng(39.8601615990551, -105.0596742331982)
      },
      {
        title: "Water Bottle Fill Station and Dog Fountain",
        location: new L.LatLng(39.86015645182224, -105.05965545773508)
      }
    ]
  },
  {
    title: "Dining",
    markers: [
      {
        title: "Dining Tent",
        location: new L.LatLng(39.86008541996911, -105.05945160984994)
      },
      {
        title: "Food Truck A",
        location: new L.LatLng(39.86013174509905, -105.05956426262857)
      },
      {
        title: "Food Truck B",
        location: new L.LatLng(39.86015336348232, -105.05952402949333)
      },
      {
        title: "Food Truck C",
        location: new L.LatLng(39.86017704075143, -105.059465020895)
      },
      {
        title: "Food Truck D",
        location: new L.LatLng(39.86020380635013, -105.05941942334177)
      },
      {
        title: "Food Truck E",
        location: new L.LatLng(39.86022233637389, -105.05938053131105)
      }
    ],
  },
  {
    title: "Libraries",
    markers: [
      {
        title: "Library A",
        location: new L.LatLng(39.860116303392566, -105.05940467119218)
      },
      {
        title: "Library B",
        location: new L.LatLng(39.86014615735533, -105.05936577916147)
      },
      {
        title: "Library C",
        location: new L.LatLng(39.86016983462691, -105.05932286381723)
      }
    ]
  },
  {
    title: "Sponsor Tents",
    markers: [
      {
        title: "Sponsor Tents (Red Section)",
        location: new L.LatLng(39.859919678692584, -105.05957901477815)
      },
      {
        title: "Sponsor Tents (Purple Section)",
        location: new L.LatLng(39.85994129714267, -105.05936309695247)
      },
      {
        title: "Sponsor Tents (Orange Section)",
        location: new L.LatLng(39.85970143491043, -105.05945026874544)
      },
      {
        title: "Sponsor Tents (Blue Section)",
        location: new L.LatLng(39.85965819785232, -105.05943149328233)
      },
      {
        title: "Sponsor Tents (Yellow Section)",
        location: new L.LatLng(39.85993614989327, -105.05907878279686)
      },
      {
        title: "Sponsor Tents (Green Section)",
        location: new L.LatLng(39.85992379649314, -105.05902782082559)
      }
    ]
  }
];

CATEGORIES.forEach((c) => {
  c.markers.forEach((m) => {
    L.marker(m.location).bindPopup(m.title).addTo(map);
  });
});

