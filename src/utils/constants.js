const SWIGGY_BASE = "https://www.swiggy.com/dapi/";
const SWIGGY_LONG = "72.84010099999999";
const SWIGGY_LAT = "21.1651678";
const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";
const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const SWIGGY_RES_LIST = `${SWIGGY_BASE}restaurants/list/v5?lat=${SWIGGY_LAT}&lng=${SWIGGY_LONG}&page_type=DESKTOP_WEB_LISTING`;
const SWIGGY_MENU_API_URL = `${SWIGGY_BASE}menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${SWIGGY_LAT}&lng=${SWIGGY_LONG}&submitAction=ENTER&restaurantId=`;
export { LOGO_URL, IMG_URL, SWIGGY_MENU_API_URL, SWIGGY_RES_LIST };
