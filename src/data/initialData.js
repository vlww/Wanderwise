export const DEMO_EMAIL    = "traveler@wanderwise.app";
export const DEMO_PASSWORD = "wanderwise123";

export const THEMES = {
  Blue:   { "--ocean":"#2C5F8A", "--ocean-mid":"#3A74A8", "--ocean-light":"#4A8BB5", "--ocean-pale":"#EBF3FA" },
  Teal:   { "--ocean":"#1A7A6E", "--ocean-mid":"#20948A", "--ocean-light":"#29AFA4", "--ocean-pale":"#E0F5F4" },
  Coral:  { "--ocean":"#C0442A", "--ocean-mid":"#D45538", "--ocean-light":"#E06B50", "--ocean-pale":"#FDE9E5" },
  Forest: { "--ocean":"#2E6B3E", "--ocean-mid":"#38834C", "--ocean-light":"#469B5C", "--ocean-pale":"#E4F3E8" },
};

export const INITIAL_WISHLIST = [
  { id:1, name:"Atlanta", country:"United States", cost:500,  fav:true, img:"https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=320&h=240&fit=crop" },
  { id:2, name:"Cancún",  country:"Mexico",        cost:1100, fav:true, img:"https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=320&h=240&fit=crop" },
  { id:3, name:"Paris",   country:"France",        cost:1800, fav:true, img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=320&h=240&fit=crop" },
];

export const ALL_DESTINATIONS = [
  { id:101, name:"Atlanta",    country:"United States", cost:500,  duration:"weekend",  interests:["Culture","Food","City"],                    img:"https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=320&h=240&fit=crop" },
  { id:102, name:"Cancún",     country:"Mexico",        cost:1100, duration:"week",      interests:["Beach","Nature","Adventure"],                img:"https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=320&h=240&fit=crop" },
  { id:103, name:"Paris",      country:"France",        cost:1800, duration:"week",      interests:["Culture","History","Food","City"],           img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=320&h=240&fit=crop" },
  { id:104, name:"Tokyo",      country:"Japan",         cost:2400, duration:"twoweeks",  interests:["Culture","Food","City","History"],           img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=320&h=240&fit=crop" },
  { id:105, name:"Bali",       country:"Indonesia",     cost:1500, duration:"twoweeks",  interests:["Beach","Nature","Adventure","Culture"],      img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=320&h=240&fit=crop" },
  { id:106, name:"New York",   country:"United States", cost:1300, duration:"week",      interests:["City","Culture","Food","History"],           img:"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=320&h=240&fit=crop" },
  { id:107, name:"Rome",       country:"Italy",         cost:1600, duration:"week",      interests:["History","Culture","Food"],                  img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=320&h=240&fit=crop" },
  { id:108, name:"Banff",      country:"Canada",        cost:900,  duration:"week",      interests:["Nature","Adventure","Outdoors"],             img:"https://images.unsplash.com/photo-1561134643-668f9057cce4?w=320&h=240&fit=crop" },
  { id:109, name:"Bangkok",    country:"Thailand",      cost:1200, duration:"week",      interests:["Culture","Food","City","History"],           img:"https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=320&h=240&fit=crop" },
  { id:110, name:"Miami",      country:"United States", cost:800,  duration:"weekend",   interests:["Beach","City","Food","Nightlife"],           img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=320&h=240&fit=crop" },
  { id:111, name:"Amsterdam",  country:"Netherlands",   cost:1700, duration:"week",      interests:["Culture","History","City"],                  img:"https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=320&h=240&fit=crop" },
  { id:112, name:"Honolulu",   country:"United States", cost:2000, duration:"week",      interests:["Beach","Nature","Adventure","Outdoors"],     img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=320&h=240&fit=crop" },
  { id:113, name:"Barcelona",  country:"Spain",         cost:1500, duration:"week",      interests:["Culture","Beach","Food","History"],          img:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=320&h=240&fit=crop" },
  { id:114, name:"Lisbon",     country:"Portugal",      cost:1100, duration:"week",      interests:["Culture","History","Food","City"],           img:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=320&h=240&fit=crop" },
  { id:115, name:"San José",   country:"Costa Rica",    cost:1400, duration:"twoweeks",  interests:["Nature","Adventure","Outdoors","Beach"],     img:"https://images.unsplash.com/photo-1518638150340-f706e86654de?w=320&h=240&fit=crop" },
  { id:116, name:"Sydney",     country:"Australia",     cost:2200, duration:"twoweeks",  interests:["Beach","City","Nature","Culture"],           img:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=320&h=240&fit=crop" },
  { id:117, name:"Nashville",  country:"United States", cost:600,  duration:"weekend",   interests:["Music","Food","City","Nightlife"],           img:"https://images.unsplash.com/photo-1545419913-775e3e3530d4?w=320&h=240&fit=crop" },
  { id:118, name:"Athens",     country:"Greece",        cost:2100, duration:"week",      interests:["Beach","Culture","History","Food"],          img:"https://images.unsplash.com/photo-1555993539-1732b0258235?w=320&h=240&fit=crop" },
  { id:119, name:"Reykjavík",  country:"Iceland",       cost:2500, duration:"week",      interests:["Nature","Adventure","Outdoors"],             img:"https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=320&h=240&fit=crop" },
  { id:120, name:"New Orleans",country:"United States", cost:700,  duration:"weekend",   interests:["Food","Music","Culture","History","Nightlife"], img:"https://images.unsplash.com/photo-1568695215826-06edf03dd716?w=320&h=240&fit=crop" },
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