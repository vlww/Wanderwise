export const DEMO_EMAIL    = "traveler@wanderwise.app";
export const DEMO_PASSWORD = "wanderwise123";

export const INITIAL_WISHLIST = [
  {
    id: 1,
    name: "Atlanta",
    country: "United States",
    cost: 500,
    fav: true,
    img: "https://media.istockphoto.com/id/636101348/photo/atlanta-georgia-skyline.jpg?s=612x612&w=0&k=20&c=THysyIF3mwZObg_SoNmcOzJ6GAIFba5uJncB2yWnPXc=",
  },
  {
    id: 2,
    name: "Cancún",
    country: "Mexico",
    cost: 1100,
    fav: true,
    img: "https://t4.ftcdn.net/jpg/02/14/74/11/360_F_214741146_jApjeGkU3GSPSpLhzyMsupP7frpAh1XH.jpg",
  },
  {
    id: 3,
    name: "Paris",
    country: "France",
    cost: 1800,
    fav: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/640px-Paris_Night.jpg",
  },
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