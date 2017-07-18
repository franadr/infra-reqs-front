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
        },
        children: [
          {
            path: 'new',
            data: {
              menu: {
                title: 'New request'
              }
            }
          },
          {
            path: 'modification',
            data: {
              menu: {
                title: 'Modify a request'
              }
            }
          }
        ]
      },
      {
        path: 'admin',  // path for admin Home page
        data: { // custom menu declaration
          menu: {
            title: 'Administration', // menu title
            icon: 'ion-grid', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'vm-admin',
            data: {
              menu: {
                title: 'VM Admin'
              }
            }
          },
          {
            path: 'vm-mod',
            data: {
              menu: {
                title: 'VM modification'
              }
            }
          }
        ]
      },

    ]
  },
];
