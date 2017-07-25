export const PAGES_MENU = [
  {

    path: 'pages',
    children: [
      {
        path: 'requests',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Demande', // menu title
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
                title: 'Nouvelle demande'
              }
            }
          },
          {
            path: 'modification',
            data: {
              menu: {
                title: 'Modifier VM'
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
            pathMatch: 'prefix',
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
                title: 'Liste VM'
              }
            }
          },
          {
            path: 'vm-mod',
            data: {
              menu: {
                title: 'Liste Modification'
              }
            }
          }
        ]
      },

    ]
  },
];
export const PAGE_MENU_NADMIN = [
  {

  path: 'pages',
  children: [
    {
      path: 'requests',  // path for our page
      data: { // custom menu declaration
        menu: {
          title: 'Demande', // menu title
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
              title: 'Nouvelle demande'
            }
          }
        },
        {
          path: 'modification',
          data: {
            menu: {
              title: 'Modifier VM'
            }
          }
        }
      ]
    },
  ]
},
];
