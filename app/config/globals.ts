import { ASSET } from '@config'

const GLOBAL = {
  // server
  api: '',
  // scraper
  bd_user: process.env.BRIGHT_DATA_USER,
  bd_pass: process.env.BRIGHT_DATA_PASS,
  bd_port: process.env.BRIGHT_DATA_PORT,
  bd_host: process.env.BRIGHT_DATA_HOST,
  bd_base_curl: process.env.BASE_CURL,
  // mongodb
  db_uri: process.env.DB_URI,
  db_scheme: process.env.DB_SCHEME,
  db_host: process.env.DB_HOST,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_pw: process.env.DB_PW,
  // assets
  brand_icon: ASSET.nav,
  nav_icon_size: ASSET.sizes.navIcon,
}

export default GLOBAL
