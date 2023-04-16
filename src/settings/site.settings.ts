import { Routes } from '@/config/routes';

export const siteSettings = {
  name: 'FastTrack',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'FastTrack',
    href: '/',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  author: {
    name: 'RedQ, Inc.',
    websiteUrl: 'https://redq.io',
    address: '',
  },
  headerLinks: [],
  authorizedLinks: [
    // {
    //   href: Routes.profileUpdate,
    //   labelTransKey: 'authorized-nav-item-profile',
    // },
    {
      href: Routes.logout,
      labelTransKey: 'Log Out',
    },
  ],
  currencyCode: 'USD',
  sidebarLinks: {
    admin: [
      {
        href: Routes.dashboard,
        label: 'Checkbook',
        icon: 'DashboardIcon',
      },
      {
        href: Routes.services,
        label: 'Services',
        icon: 'ProductsIcon',
      },
      {
        href: Routes.customers,
        label: 'Customers',
        icon: 'ProductsIcon',
      },
      {
        href: Routes.airports,
        label: 'Airports',
        icon: 'ShippingsIcon',
      },
      {
        href: Routes.brokers,
        label: 'Brokers',
        icon: 'UsersIcon',
      },
      {
        href: Routes.commodity_mapping,
        label: 'Commodity Map',
        icon: 'ProductsIcon',
      },
      {
        href: Routes.manifest_upload,
        label: 'Manifest Upload File',
        icon: 'ProductsIcon',
      },
    ],
  },
  product: {
    placeholder: '/product-placeholder.svg',
  },
  avatar: {
    placeholder: '/avatar-placeholder.svg',
  },
};
