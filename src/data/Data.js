export const DEMO_EMAIL    = "traveler@wanderwise.app";
export const DEMO_PASSWORD = "wanderwise123";

export const INITIAL_WISHLIST = [
  { id:1, name:"Atlanta", country:"United States", cost:500,  fav:true, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Atlanta_from_Buckhead.jpg/640px-Atlanta_from_Buckhead.jpg" },
  { id:2, name:"Cancún",  country:"Mexico",        cost:1100, fav:true, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cancun_Mexico.jpg/640px-Cancun_Mexico.jpg" },
  { id:3, name:"Paris",   country:"France",        cost:1800, fav:true, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/640px-Paris_Night.jpg" },
];

export const ALL_DESTINATIONS = [
  { id:101, name:"Atlanta",     country:"United States", cost:500,  duration:"weekend",  interests:["Culture","Food","City"],                   img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Atlanta_from_Buckhead.jpg/640px-Atlanta_from_Buckhead.jpg" },
  { id:102, name:"Cancún",      country:"Mexico",        cost:1100, duration:"week",     interests:["Beach","Nature","Adventure"],               img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cancun_Mexico.jpg/640px-Cancun_Mexico.jpg" },
  { id:103, name:"Paris",       country:"France",        cost:1800, duration:"week",     interests:["Culture","History","Food","City"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/640px-Paris_Night.jpg" },
  { id:104, name:"Tokyo",       country:"Japan",         cost:2400, duration:"twoweeks", interests:["Culture","Food","City","History"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/640px-Skyscrapers_of_Shinjuku_2009_January.jpg" },
  { id:105, name:"Bali",        country:"Indonesia",     cost:1500, duration:"twoweeks", interests:["Beach","Nature","Adventure","Culture"],     img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Terraced_rice_fields_near_Tegalalang%2C_Bali%2C_Indonesia.jpg/640px-Terraced_rice_fields_near_Tegalalang%2C_Bali%2C_Indonesia.jpg" },
  { id:106, name:"New York",    country:"United States", cost:1300, duration:"week",     interests:["City","Culture","Food","History"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg/640px-Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg" },
  { id:107, name:"Rome",        country:"Italy",         cost:1600, duration:"week",     interests:["History","Culture","Food"],                 img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Colosseum_inscription_2.jpg/640px-Rome_Colosseum_inscription_2.jpg" },
  { id:108, name:"Banff",       country:"Canada",        cost:900,  duration:"week",     interests:["Nature","Adventure","Outdoors"],            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley_face_rocks_banff.jpg/640px-Smiley_face_rocks_banff.jpg" },
  { id:109, name:"Bangkok",     country:"Thailand",      cost:1200, duration:"week",     interests:["Culture","Food","City","History"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_temple_of_dawn_%28Wat_Arun%29.jpg/480px-The_temple_of_dawn_%28Wat_Arun%29.jpg" },
  { id:110, name:"Miami",       country:"United States", cost:800,  duration:"weekend",  interests:["Beach","City","Food","Nightlife"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Miami_FL_USA_-_panoramio_%282%29.jpg/640px-Miami_FL_USA_-_panoramio_%282%29.jpg" },
  { id:111, name:"Amsterdam",   country:"Netherlands",   cost:1700, duration:"week",     interests:["Culture","History","City"],                 img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Canal_de_Amsterdam.jpg/640px-Canal_de_Amsterdam.jpg" },
  { id:112, name:"Maui",        country:"United States", cost:2000, duration:"week",     interests:["Beach","Nature","Adventure","Outdoors"],    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Hana_Road.jpg/640px-Hana_Road.jpg" },
  { id:113, name:"Barcelona",   country:"Spain",         cost:1500, duration:"week",     interests:["Culture","Beach","Food","History"],         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sagrada_Familia_01.jpg/480px-Sagrada_Familia_01.jpg" },
  { id:114, name:"Lisbon",      country:"Portugal",      cost:1100, duration:"week",     interests:["Culture","History","Food","City"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Alfama_from_the_Castle.jpg/640px-Alfama_from_the_Castle.jpg" },
  { id:115, name:"Costa Rica",  country:"Costa Rica",    cost:1400, duration:"twoweeks", interests:["Nature","Adventure","Outdoors","Beach"],    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Rainforest_Fatu_Hiva.jpg/480px-Rainforest_Fatu_Hiva.jpg" },
  { id:116, name:"Sydney",      country:"Australia",     cost:2200, duration:"twoweeks", interests:["Beach","City","Nature","Culture"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_crop.jpg/640px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_crop.jpg" },
  { id:117, name:"Nashville",   country:"United States", cost:600,  duration:"weekend",  interests:["Music","Food","City","Nightlife"],          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Nashville_Convention_Center.jpg/640px-Nashville_Convention_Center.jpg" },
  { id:118, name:"Santorini",   country:"Greece",        cost:2100, duration:"week",     interests:["Beach","Culture","History","Food"],         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Thira%2C_Santorini%2C_Greece_%2812208489474%29.jpg/640px-Thira%2C_Santorini%2C_Greece_%2812208489474%29.jpg" },
  { id:119, name:"Iceland",     country:"Iceland",       cost:2500, duration:"week",     interests:["Nature","Adventure","Outdoors"],            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Jokulsarlon_and_Mountains.jpg/640px-Jokulsarlon_and_Mountains.jpg" },
  { id:120, name:"New Orleans", country:"United States", cost:700,  duration:"weekend",  interests:["Food","Music","Culture","History","Nightlife"], img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/New_Orleans_-_Bourbon_Street.jpg/640px-New_Orleans_-_Bourbon_Street.jpg" },
];

export const INITIAL_SAVINGS = 1200;

export const BUDGET_OPTIONS = [
  { label:"Any Budget",      min:0,    max:Infinity },
  { label:"Under $500",      min:0,    max:500 },
  { label:"$500 – $1,000",   min:500,  max:1000 },
  { label:"$1,000 – $1,500", min:1000, max:1500 },
  { label:"$1,500 – $2,000", min:1500, max:2000 },
  { label:"Over $2,000",     min:2000, max:Infinity },
];

export const DURATION_OPTIONS = [
  { label:"Any Duration",         value:"any" },
  { label:"Weekend (1–3 days)",   value:"weekend" },
  { label:"1 Week (4–7 days)",    value:"week" },
  { label:"2 Weeks (8–14 days)",  value:"twoweeks" },
  { label:"1 Month (15+ days)",   value:"month" },
];

export const INTEREST_OPTIONS = [
  "Adventure","Beach","City","Culture",
  "Food","History","Music","Nature",
  "Nightlife","Outdoors",
];

export const PER_PAGE = 5;