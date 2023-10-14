import { ASSET } from '@config'

const GLOBAL = {
  api: '',
  bd_user: process.env.BRIGHT_DATA_USER,
  bd_pass: process.env.BRIGHT_DATA_PASS,
  bd_port: process.env.BRIGHT_DATA_PORT,
  bd_host: process.env.BRIGHT_DATA_HOST,
  bd_base_curl: process.env.BASE_CURL,
  brand_icon: ASSET.nav,
  nav_icon_size: ASSET.sizes.navIcon,
}

export default GLOBAL
