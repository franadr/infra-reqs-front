export const PAGES_MENU = [
  {

    path: 'pages',
    children: [
      {
        path: 'requests',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Requests', // menu title
            icon: 'fa fa-plus', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'admin',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Administration', // menu title
            icon: 'ion-grid', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

    ]
  },
];
