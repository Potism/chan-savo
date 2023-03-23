import i18next from 'i18next';


import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'Dashboard',
    title: 'Dashboard',
    subtitle: '',
    type: 'group',
    icon: 'heroicons-outline:cube',
    translate: 'DASHBOARD',
    children: [
      {
        id: 'apps.dashboard',
        title: 'Analytics',
        subtitle: '',
        type: 'item',
        icon: 'heroicons-outline:calendar',
        url: '/dashboards/analytics',
        translate: 'Analytics',
      },
    ],
  },
  {
    id: 'apps',
    title: 'Applications',
    subtitle: '',
    type: 'group',
    icon: 'heroicons-outline:cube',
    translate: 'APPLICATIONS',
    children: [
    
      {
        id: 'apps.calendar',
        title: 'Calendar',
        subtitle: '3 upcoming events',
        type: 'item',
        icon: 'heroicons-outline:calendar',
        url: '/apps/calendar',
        translate: 'CALENDAR',
      },
      {
        id: 'apps.contacts',
        title: 'Contacts',
        type: 'item',
        icon: 'heroicons-outline:user-group',
        url: '/apps/contacts',
        translate: 'CONTACTS',
      },
      {
        id: 'apps.ecommerce',
        title: 'ECommerce',
        type: 'collapse',
        icon: 'heroicons-outline:shopping-cart',
        translate: 'ECOMMERCE',
        children: [
          {
            id: 'e-commerce-products',
            title: 'Products',
            type: 'item',
            url: 'apps/e-commerce/products',
            end: true,
          },
          {
            id: 'e-commerce-product-detail',
            title: 'Product Detail',
            type: 'item',
            url: 'apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
          },
          {
            id: 'e-commerce-new-product',
            title: 'New Product',
            type: 'item',
            url: 'apps/e-commerce/products/new',
          },
          {
            id: 'e-commerce-orders',
            title: 'Orders',
            type: 'item',
            url: 'apps/e-commerce/orders',
            end: true,
          },
          {
            id: 'e-commerce-order-detail',
            title: 'Order Detail',
            type: 'item',
            url: 'apps/e-commerce/orders/1',
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
