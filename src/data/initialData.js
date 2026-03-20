export const DEMO_EMAIL    = "traveler@wanderwise.app";
export const DEMO_PASSWORD = "wanderwise123";

export const THEMES = {
  Blue:   { "--ocean":"#2C5F8A", "--ocean-mid":"#3A74A8", "--ocean-light":"#4A8BB5", "--ocean-pale":"#EBF3FA" },
  Teal:   { "--ocean":"#1A7A6E", "--ocean-mid":"#20948A", "--ocean-light":"#29AFA4", "--ocean-pale":"#E0F5F4" },
  Coral:  { "--ocean":"#C0442A", "--ocean-mid":"#D45538", "--ocean-light":"#E06B50", "--ocean-pale":"#FDE9E5" },
  Forest: { "--ocean":"#2E6B3E", "--ocean-mid":"#38834C", "--ocean-light":"#469B5C", "--ocean-pale":"#E4F3E8" },
};

export const INITIAL_WISHLIST = [
  { id:1, name:"Atlanta", country:"United States", cost:500,  fav:true, img:"https://media.istockphoto.com/id/636101348/photo/atlanta-georgia-skyline.jpg?s=612x612&w=0&k=20&c=THysyIF3mwZObg_SoNmcOzJ6GAIFba5uJncB2yWnPXc=" },
  { id:2, name:"Cancún",  country:"Mexico",        cost:1100, fav:true, img:"https://media.istockphoto.com/id/1391487796/photo/cancun-resort-during-a-sunset.jpg?s=612x612&w=0&k=20&c=626ZnZpzcGc0cRcyVyJHPVt9JH-_RwxqGZuU_q50PFk=" },
  { id:3, name:"Paris",   country:"France",        cost:1800, fav:true, img:"https://t4.ftcdn.net/jpg/02/14/74/11/360_F_214741146_jApjeGkU3GSPSpLhzyMsupP7frpAh1XH.jpg" },
];

export const ALL_DESTINATIONS = [
  { id:101, name:"Atlanta",    country:"United States", cost:500,  duration:"weekend",  interests:["Culture","Food","City"],                        img:"https://media.istockphoto.com/id/636101348/photo/atlanta-georgia-skyline.jpg?s=612x612&w=0&k=20&c=THysyIF3mwZObg_SoNmcOzJ6GAIFba5uJncB2yWnPXc=" },
  { id:102, name:"Cancún",     country:"Mexico",        cost:1100, duration:"week",      interests:["Beach","Nature","Adventure"],                  img:"https://media.istockphoto.com/id/1391487796/photo/cancun-resort-during-a-sunset.jpg?s=612x612&w=0&k=20&c=626ZnZpzcGc0cRcyVyJHPVt9JH-_RwxqGZuU_q50PFk=" },
  { id:103, name:"Paris",      country:"France",        cost:1800, duration:"week",      interests:["Culture","History","Food","City"],             img:"https://t4.ftcdn.net/jpg/02/14/74/11/360_F_214741146_jApjeGkU3GSPSpLhzyMsupP7frpAh1XH.jpg" },
  { id:104, name:"Tokyo",      country:"Japan",         cost:2500, duration:"twoweeks",  interests:["Culture","Food","City","History"],             img:"https://media.istockphoto.com/id/1390815938/photo/tokyo-city-in-japan.jpg?s=612x612&w=0&k=20&c=VHiC3TlbXkb-Yf6WUYjh825Y0nGMCTkNUa9j8X8rVfY=" },
  { id:105, name:"Bali",       country:"Indonesia",     cost:1500, duration:"twoweeks",  interests:["Beach","Nature","Adventure","Culture"],        img:"https://img.freepik.com/premium-photo/pura-ulun-danu-bratan-hindu-temple-with-boat-bratan-lake-landscape-sunrise-bali-indonesia_29505-855.jpg?semt=ais_rp_50_assets&w=740&q=80" },
  { id:106, name:"New York",   country:"United States", cost:1300, duration:"week",      interests:["City","Culture","Food","History"],             img:"https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?s=612x612&w=0&k=20&c=6V54_qVlDfo59GLEdY2W8DOjLbbHTJ9y4AnJ58a3cis=" },
  { id:107, name:"Rome",       country:"Italy",         cost:1600, duration:"week",      interests:["History","Culture","Food"],                    img:"https://travelphotodiscovery.com/wp-content/uploads/2015/08/tiber-river-1.jpg" },
  { id:108, name:"Banff",      country:"Canada",        cost:900,  duration:"week",      interests:["Nature","Adventure","Outdoors"],               img:"https://cdn.audleytravel.com/3980/2847/79/1314674-moraine-lake-banff-national-park-alberta.jpg" },
  { id:109, name:"Bangkok",    country:"Thailand",      cost:1200, duration:"week",      interests:["Culture","Food","City","History"],             img:"https://media.istockphoto.com/id/2149112736/photo/wat-arun-temple-at-sunset-bangkok-in-thailand.jpg?s=612x612&w=0&k=20&c=1JqYAueTVDWfnj8iwCRlS_VIp-3YBeDp6Wp-Pq19qVk=" },
  { id:110, name:"Miami",      country:"United States", cost:800,  duration:"weekend",   interests:["Beach","City","Food","Nightlife"],             img:"https://media.istockphoto.com/id/802893644/photo/aerial-view-of-downtown-miami-florida.jpg?s=612x612&w=0&k=20&c=QwdSYtoeB-9xTvqgbpnM9aCaRf_39rw8bVw7LsszSGg=" },
  { id:111, name:"Amsterdam",  country:"Netherlands",   cost:1700, duration:"week",      interests:["Culture","History","City"],                    img:"https://media.istockphoto.com/id/1352073906/photo/amsterdam-downtown-amstel-river-old-houses-and-a-bridge-nice-view-of-the-famous-city-of.jpg?s=612x612&w=0&k=20&c=0-l6Lf8A_QM0Nd-YPLrp5qUn8S1uc0TFKETH8TU9JcU=" },
  { id:112, name:"Honolulu",   country:"United States", cost:2000, duration:"week",      interests:["Beach","Nature","Adventure","Outdoors"],       img:"https://media.istockphoto.com/id/1015218282/photo/waikiki-beach-and-diamond-head-crater-including-the-hotels-and-buildings-in-waikiki-honolulu.jpg?s=612x612&w=0&k=20&c=BW2oQ-iAZSTojm_RAASppXWre9QBcXXjdD3TrM0RcYY=" },
  { id:113, name:"Barcelona",  country:"Spain",         cost:1500, duration:"week",      interests:["Culture","City","Food","History"],             img:"https://media.istockphoto.com/id/148543868/photo/park-guell-in-barcelona-spain.jpg?s=612x612&w=0&k=20&c=IYdRNJtNOxNaySqP7oKe37TR7XBQncj623Ye13qCxBs=" },
  { id:114, name:"Lisbon",     country:"Portugal",      cost:1500, duration:"week",      interests:["Culture","History","Food","Beach"],            img:"https://media.istockphoto.com/id/1221460597/photo/yellow-vintage-tram-on-the-street-in-lisbon-portugal.jpg?s=612x612&w=0&k=20&c=E5LVWw2DH5fHsDadmyiH5KbEfWO_El1vfra1vxLZP74=" },
  { id:115, name:"San José",   country:"Costa Rica",    cost:1400, duration:"twoweeks",  interests:["Nature","Adventure","Outdoors","Beach"],       img:"https://www.creescapes.com/wp-content/uploads/san-jose-costa-rica-1.jpg" },
  { id:116, name:"Sydney",     country:"Australia",     cost:2200, duration:"twoweeks",  interests:["Beach","City","Nature","Culture"],             img:"https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071422/destination/vzvmnbw5xkbxrwhj7kva.jpg" },
  { id:117, name:"Nashville",  country:"United States", cost:600,  duration:"weekend",   interests:["Music","Food","City","Nightlife"],             img:"https://cdn.britannica.com/95/96095-050-3983BE03/Skyline-Cumberland-River-Nashville.jpg" },
  { id:118, name:"Athens",     country:"Greece",        cost:2100, duration:"week",      interests:["Beach","Culture","History","Food"],            img:"https://www.flyingandtravel.com/wp-content/uploads/2018/06/what-to-do-in-athens-greece-acropolis.jpg" },
  { id:119, name:"Reykjavík",  country:"Iceland",       cost:2500, duration:"week",      interests:["Nature","Adventure","Outdoors"],               img:"https://gti.images.tshiftcdn.com/10832877/x/0/top-11-things-to-do-in-reykjavik-in-february-1.jpg?ixlib=php-3.3.0&w=883" },
  { id:120, name:"New Orleans",country:"United States", cost:700,  duration:"weekend",   interests:["Food","Music","Culture","History","Nightlife"],img:"https://photowalkstv.com/wp-content/uploads/2025/03/royal-street-1200x675.jpg" },
  { id:121, name:"Houston",    country:"United States", cost:300,  duration:"weekend",   interests:["Culture","Food","City","Nightlife"],           img:"https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/0%20HERO_HoustonTX_GettyImages-532390052.jpg?h=c5520b1b&itok=h8KIQIok" },
  { id:122, name:"Calgary",    country:"Canada",        cost:1000, duration:"week",      interests:["Nature","Adventure","Outdoors"],               img:"https://cdn.britannica.com/60/137760-050-9EFAB73A/Calgary-foreground-Pengrowth-Saddledome-Canada-Alberta.jpg" },
];

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

export const INTEREST_OPTIONS = ["Adventure","Beach","City","Culture","Food","History","Music","Nature","Nightlife","Outdoors"];

export const PER_PAGE = 5;
export const BT_PER_PAGE = 5;