import {LocateControl} from "leaflet.locatecontrol";
import 'leaflet-imageoverlay-rotated';
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; // Import styles
import L from "leaflet"; // Import L from leaflet to start using the plugin;
import './style.css'
import 'leaflet/dist/leaflet.css';

const container = document.getElementById("app")!;
const map = L.map(container, {
  center: L.latLng(39.8599013238558, -105.05942838059936),
  zoom: 20,
  maxZoom: 30
});

const parkCorners = [
  L.latLng([39.85998453402239, -105.06051778793335]),
  L.latLng([39.86067837927053, -105.0590291619301]),
  L.latLng([39.85915479295669, -105.05980968475342]),
];

L.tileLayer("https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}{r}", {
  maxNativeZoom: 18,
  maxZoom: 1000,
  attribution: "Sources: Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), (c) OpenStreetMap contributors, and the GIS User Community"
}).addTo(map)

L.imageOverlay.rotated("/img/overlay/drawn_map.png", parkCorners[0], parkCorners[1], parkCorners[2]).addTo(map);

new LocateControl().addTo(map);

map.on('click', (e) => {
  console.log(`${e.latlng.lat}, ${e.latlng.lng}`);
});
map.flyToBounds(L.latLngBounds(parkCorners));

function PinheadIcon(bgColor: string, iconName: string): L.DivIcon {
  const html = document.createElement('div');
  html.className = 'pinhead-icon';
  html.style.background = bgColor;

  const icon = document.createElement('img');
  icon.src = `/img/pinhead/${iconName}.svg`;
  html.appendChild(icon);

  return new L.DivIcon({html});
}

interface Marker {
  title: string;
  location: L.LatLng;
  icon?: () => L.DivIcon;
}

interface Category {
  title: string;
  markers: Marker[];
  icon?: () => L.DivIcon;
}

const CATEGORIES: Category[] = [
  {
    title: "Entrances",
    icon: () => PinheadIcon("black", "arch"),
    markers: [
      {
        title: "South Entrance",
        location: L.latLng(39.85921861954872, -105.05977347493173)
      },
      {
        title: "North Entrance",
        location: L.latLng(39.86058984747801, -105.05903318524362)
      },
      {
        title: "West Entrance",
        location: L.latLng(39.85996909228277, -105.0603970885277)
      },
      {
        title: "East Entrance",
        location: L.latLng(39.859857396929314, -105.05840957164766)
      }
    ]
  },
  {
    "title": "Attractions",
    "markers": [
      {
        title: "Splash Pad",
        icon: () => PinheadIcon("darkblue", "splash"),
        location: L.latLng(39.85951954598111, -105.05987202861702)
      },
      {
        title: "Playground",
        icon: () => PinheadIcon("darkblue", "swing"),
        location: L.latLng(39.85962233694333, -105.05993451985886)
      },
      {
        title: "Main Stage",
        icon: () => PinheadIcon("darkblue", "record"),
        location: L.latLng(39.860086192054865, -105.05968093872072)
      },
      {
        title: "Canine Club (Dog Park)",
        icon: () => PinheadIcon("darkblue", "dog-collar-heart"),
        location: L.latLng(39.860121450628455, -105.05878776311877)
      },
      {
        title: "RAINBOW CENTRAL!",
        icon: () => PinheadIcon("purple", "star"),
        location: L.latLng(39.85953260433862, -105.05950391292573)
      },
      {
        title: "Yard Games",
        icon: () => PinheadIcon("darkblue", "table-tennis"),
        location: L.latLng(39.85988055957516, -105.0592102110386)
      },
      {
        title: "FREE Dog Nail Trims",
        icon: () => PinheadIcon("darkBlue", "dog-collar-heart"),
        location: L.latLng(39.8601142444981, -105.05897015333177)
      }
    ]
  },
  {
    title: "Facilities",
    markers: [
      {
        title: "Water Bottle Fill / Dog Fountain",
        icon: () => PinheadIcon("black", "water"),
        location: L.latLng(39.85970452327067, -105.06001219153407)
      },
      {
        title: "Restrooms",
        icon: () => PinheadIcon("black", "restroom"),
        location: L.latLng(39.86003034449619, -105.05976274609567)
      },
      {
        title: "Restrooms",
        icon: () => PinheadIcon("black", "restroom"),
        location: L.latLng(39.86014409846175, -105.05968093872072)
      },
      {
        title: "Water Bottle Fill / Dog Fountain",
        icon: () => PinheadIcon("black", "water"),
        location: L.latLng(39.86018373215206, -105.05969770252705)
      },
      {
        title: "Introvert Rest Area (Yes, Seriously)",
        icon: () => PinheadIcon("teal", "couch"),
        location: L.latLng(39.85938230360205, -105.05953475832939)
      }
    ]
  },
  {
    title: "Dining",
    icon: () => PinheadIcon("red", "fork-knife"),
    markers: [
      {
        title: "Dining Tent",
        icon: () => PinheadIcon("red", "picnic-table"),
        location: L.latLng(39.86009262610249, -105.05949452519418)
      },
      {
        title: "Captain Taco and Sushi",
        location: L.latLng(39.86020535051897, -105.05957700312139)
      },
      {
        title: "Girls Love Tacos",
        location: L.latLng(39.86030134628015, -105.05945127457382)
      },
      {
        title: "Dead Stop Coffee",
        location: L.latLng(39.860329141274406, -105.0592537969351)
      },
      {
        title: "Kokopelli Beer Company",
        location: L.latLng(39.85992225231797, -105.05971379578114)
      },
      {
        title: "Kona Ice",
        location: L.latLng(39.85959848948922, -105.0592611730099)
      }
    ],
  },
  {
    title: "Libraries",
    icon: () => PinheadIcon("pink", "books"),
    markers: [
      {
        title: "Westminster Library Tent",
        location: L.latLng(39.86020123273533, -105.05942998453976)
      },
      {
        title: "Westminster Library Truck",
        location: L.latLng(39.860251932929245, -105.05950558930638)
      },
      {
        title: "Broomfield Library Tent",
        location: L.latLng(39.86023777805653, -105.05939193069935)
      }
    ]
  },
  {
    title: "Red Tents",
    icon: () => PinheadIcon("red", "tents"),
    markers: [
      {
        title: "PFLAG Denver",
        location: L.latLng(39.85980643908093, -105.05963869392875)
      },
      {
        title: "Sandias Atelier",
        location: L.latLng(39.859857396929314, -105.05962863564493)
      },
      {
        title: "Ellie Mental Health",
        location: L.latLng(39.85990681056431, -105.05961790680887)
      },
      {
        title: "Bead Styles by Lisa",
        location: L.latLng(39.85993795143061, -105.05961421877149)
      },
      {
        title: "Rosie Boo Animations",
        location: L.latLng(39.859966518659164, -105.05961254239084)
      },
      {
        title: "Headcount",
        location: L.latLng(39.85996085668687, -105.05956158041957)
      },
      {
        title: "Indivisible Broomfield Joy (IBJOY)",
        location: L.latLng(39.85992585539331, -105.0595709681511)
      },
      {
        title: "Indivisible Westminster",
        location: L.latLng(39.85989703078521, -105.05957633256914)
      },
      {
        title: "Coldwell Banker North Metro",
        location: L.latLng(39.85986872089048, -105.05958370864393)
      },
      {
        title: "CASA of Adams and Broomfield Counties",
        location: L.latLng(39.85983552108994, -105.05958572030069)
      },
      {
        title: "Forever Charmed",
        location: L.latLng(39.859799232917496, -105.05959309637548)
      },
    ]
  },
  {
    title: "Orange Tents",
    icon: () => PinheadIcon("orange", "tents"),
    markers: [
      {
        title: "MYPhoenixRisingCO",
        location: L.latLng(39.85972047979642, -105.05954615771772)
      },
      {
        title: "Nicole Aguilar - Purple Agent",
        location: L.latLng(39.859707096904096, -105.059504583478)
      },
      {
        title: "St. Stephen's Lutheran Church",
        location: L.latLng(39.85969937600349, -105.0594609975815)
      },
      {
        title: "Advent Lutheran Church",
        location: L.latLng(39.85969628764304, -105.05941003561021)
      },
      {
        title: "Can-Do Creations",
        location: L.latLng(39.859689338831444, -105.05936410278085)
      },
      {
        title: "Boulder Valley Health Center",
        location: L.latLng(39.85973334795963, -105.05919277668)
      },
      {
        title: "Sickening Creations",
        location: L.latLng(39.85975187811043, -105.05915790796281)
      },
      {
        title: "Affirmations Electrology",
        location: L.latLng(39.85978173223174, -105.05912438035013)
      },
      {
        title: "Perspire Sauna Studio",
        location: L.latLng(39.859805924354994, -105.05909554660322)
      },
      {
        title: "Meraki & Imagination LLC",
        location: L.latLng(39.85983783735563, -105.05907140672208)
      },
    ]
  },
  {
    title: "Blue Tents",
    icon: () => PinheadIcon("blue", "tents"),
    markers: [
      {
        title: "City of Westminster Parks and Rec",
        location: L.latLng(39.85968290474601, -105.05956023931505)
      },
      {
        title: "Sugar Rush Kandi",
        location: L.latLng(39.859661286214525, -105.05950659513476)
      },
      {
        title: "Broomfield FISH",
        location: L.latLng(39.85966257303207, -105.05946334451438)
      },
      {
        title: "Elegami Art",
        location: L.latLng(39.85965613894411, -105.05942948162559)
      },
      {
        title: "Parasol Patrol",
        location: L.latLng(39.85965408003585, -105.059372484684)
      },
      {
        title: "Clinica Family Health & Wellness",
        location: L.latLng(39.85969319928241, -105.05919814109804)
      },
      {
        title: "City of Westminster Sustainability Office",
        location: L.latLng(39.859702979090564, -105.0591525435448)
      },
      {
        title: "Holy Comforter Episcopal Church",
        location: L.latLng(39.85974158358281, -105.05910225212574)
      },
      {
        title: "Luna Grace / Keller Williams Realty",
        location: L.latLng(39.85976088582082, -105.05907274782659)
      },
      {
        title: "A Precious Child",
        location: L.latLng(39.85981287315479, -105.05902513861656)
      },
      {
        title: "Punkys Crafting Corner",
        location: L.latLng(39.85984710241755, -105.05900837481023)
      },
    ]
  },
  {
    title: "Yellow Tents",
    icon: () => PinheadIcon("yellow", "tents-black"),
    markers: [
      {
        title: "Boulder County AIDS Project",
        location: L.latLng(39.86019608550542, -105.05920954048634)
      },
      {
        title: "Adorable Oddities Co",
        location: L.latLng(39.86017292296606, -105.05917131900789)
      },
      {
        title: "Lyft24",
        location: L.latLng(39.86014512790855, -105.0591364502907)
      },
      {
        title: "Ripple Effect Martial Arts",
        location: L.latLng(39.8600771843872, -105.05908817052843)
      },
      {
        title: "Shine Your Light LLC",
        location: L.latLng(39.860046300946166, -105.05906403064729)
      },
      {
        title: "United Church of Broomfield",
        location: L.latLng(39.860006152452016, -105.05904827266933)
      },
      {
        title: "Ivy made it",
        location: L.latLng(39.85997012173217, -105.05904123187068)
      },
      {
        title: "Rocky Mountain Equality",
        location: L.latLng(39.859939752967875, -105.05904458463192)
      },
    ]
  },
  {
    title: "Green Tents",
    icon: () => PinheadIcon("green", "tents"),
    markers: [
      {
        title: "Butterfly Pavilion",
        location: L.latLng(39.8602357191657, -105.05920216441154)
      },
      {
        title: "Hearts and Colors",
        location: L.latLng(39.86020637996485, -105.05916863679887)
      },
      {
        title: "Broomfield Council on the Arts & Humanities",
        location: L.latLng(39.86018733521369, -105.05912706255916)
      },
      {
        title: "Petsmart",
        location: L.latLng(39.860157481268864, -105.05909085273744)
      },
      {
        title: "PetVet365",
        location: L.latLng(39.86011012670897, -105.05905061960222)
      },
      {
        title: "Soul dogs Inc.",
        location: L.latLng(39.86007512549154, -105.0590291619301)
      },
      {
        title: "Broomfield United Methodist Church",
        location: L.latLng(39.86003188866892, -105.05900233983995)
      },
      {
        title: "Soul dog Rescue",
        location: L.latLng(39.8599968874116, -105.05899965763092)
      },
      {
        title: "The Knotty Gathering",
        location: L.latLng(39.85993306154346, -105.05898624658587)
      },
      {
        title: "City and County of Broomfield Open Space and Trails",
        location: L.latLng(39.85990629583914, -105.05899965763092)
      },
    ]
  },
  {
    title: "Purple Tents",
    icon: () => PinheadIcon("purple", "tents"),
    markers: [
      {
        title: "Free Mom Hugs",
        location: L.latLng(39.85988776573004, -105.0594449043274)
      },
      {
        title: "Sumptuous Scull Styles",
        location: L.latLng(39.859935120443346, -105.0594261288643)
      },
      {
        title: "Red Robin",
        location: L.latLng(39.859983504573194, -105.05939528346065)
      },
      {
        title: "Colorado Name Change Project",
        location: L.latLng(39.86001335859374, -105.05938455462459)
      },
      {
        title: "FrannySquare",
        location: L.latLng(39.86004475677374, -105.0593711435795)
      },
      {
        title: "FREE Face Painting!",
        location: L.latLng(39.86006997825219, -105.05934700369835)
      },
      {
        title: "Balloon Animals",
        location: L.latLng(39.860057624876156, -105.05930408835414)
      },
      {
        title: "Apashee Art",
        location: L.latLng(39.860023653080574, -105.05932688713075)
      },
      {
        title: "Re.Cycle.D",
        location: L.latLng(39.85999482851354, -105.05934700369835)
      },
      {
        title: "The Refuge",
        location: L.latLng(39.85996394503543, -105.05936712026597)
      },
      {
        title: "BackStory Youth Theatre",
        location: L.latLng(39.85993589253078, -105.05937382578853)
      },
      {
        title: "Broomfield Communities That Care",
        location: L.latLng(39.859906038476545, -105.05940333008768)
      },
      {
        title: "Youth For Youth",
        location: L.latLng(39.85991350199132, -105.05937449634078)
      },
      {
        title: "Broomfield Public Health and Environment",
        location: L.latLng(39.859882103751254, -105.05940131843091)
      },
    ]
  },
];

CATEGORIES.forEach((c) => {
  c.markers.forEach((m) => {
    let icon: L.DivIcon | L.Icon;
    if (m.icon)
      icon = m.icon();
    else if (c.icon)
      icon = c.icon();
    else
      icon = new L.Icon({iconUrl: 'marker-icon.png'});

    L.marker(m.location, {icon}).bindPopup(m.title).addTo(map);
  });
});

