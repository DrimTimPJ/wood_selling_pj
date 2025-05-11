interface NavBarLink {
  name: string
  link: string
}

const NAV_LINKS: Record<string, string> = {}

const NAV_BAR_LINKS: Record<string, NavBarLink> = {
  home: {
    name: '',
    link: '/',
  },
  about: {
    name: 'Про нас',
    link: '/about',
  },
  prices: {
    name: 'Ціни',
    link: '/prices',
  },
  contact: {
    name: 'Контакти',
    link: '/contact',
  },
  gallery: {
    name: 'Галерея',
    link: '/gallery',
  },
}

export { NAV_BAR_LINKS, NAV_LINKS }
