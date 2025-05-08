interface NavBarLink {
    name: string;
    link: string;
  }
  
  const NAV_BAR_LINKS: Record<string, NavBarLink> = {
    home: {
      name: '',
      link: '/',
    },
    about: {
      name: 'About us',
      link: '/about',
    },
    prices: {
      name: 'Prices',
      link: '/prices',
    },
    contact: {
      name: 'Contact',
      link: '/contact',
    },
    gallery: {
      name: 'Gallery',
      link: '/gallery',
    },
  };
  
  const NAV_LINKS: Record<string, string> = {};
  
  export { NAV_BAR_LINKS, NAV_LINKS };
  