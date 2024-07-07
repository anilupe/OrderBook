import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Administración',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Inicio',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'admin',
        short_label: 'B',
        name: 'Usuarios',
        type: 'sub',
        icon: 'ti-user',
        children: [
         {
            state: 'usuarios',
            name: 'Usuarios'
          },
          {
            state: 'roles',
            name: 'Roles'
          },
          {
            state: 'perfil',
            name: 'Perfil de Usuario'
          }
        ] 
      },
      {
        state: 'catalogos',
        short_label: 'n',
        name: 'Catálogos',
        type: 'sub',
        icon: 'ti-book',
        children: [
          {
             state: 'catalogos-sincronizados',
             name: 'Catalogos Sincronizados',
             type:'sub',
             icon:'ti-book',
             children:[
              {
                state:'marcas',
                name:'Marcas'
              },
              {
                state:'temporadas',
                name:'Temporadas'
              },
              {
                state:'centros',
                name:'Centros'
              },
              {
                state:'actividad',
                name:'Actividad'
              },
              {
                state:'grupo',
                name:'Grupo'
              },
              {
                state:'genero',
                name:'Genero'
              },
              {
                state:'linea',
                name:'Línea'
              },
              {
                state:'canales',
                name:'Canales'
              },
              {
                state:'regiones',
                name:'Regiones'
              }
              
              
             ]
           },
           {
             state: 'catalogos-personalizados',
             name: 'Catálogos Personalizados',
             type: 'sub',
             icon: 'ti-book',
             children:[
              {
                state:'categorias',
                name:'Categorías'
              },
              {
                state:'catalogo-curvas',
                name:'Curvas'
              }
             ]
           }
         ] 
      },
    ],
  },
/*   {
    label: 'Tables',
    main: [
      {
        state: 'bootstrap-table',
        short_label: 'B',
        name: 'Bootstrap Table',
        type: 'link',
        icon: 'ti-receipt'
      }
    ]
  }, */
  {
    label: 'Curvas ',
    main: [
      {
        state: 'map',
        short_label: 'M',
        name: 'Zapatos',
        type: 'link',
        icon: 'fa fa-link'
      },
      {
        state: 'map',
        short_label: 'M',
        name: 'Ropa',
        type: 'link',
        icon: 'fa fa-male'
      },
      {
        state: 'map',
        short_label: 'M',
        name: 'Accesorios',
        type: 'link',
        icon: 'fa fa-asterisk'
      }
    /*   {
        state: 'authentication',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          }, {
            state: 'registration',
            type: 'link',
            name: 'Registration',
            target: true
          }
        ]
      }, */
     
    ]
  },
  {
    label: 'Booking',
    main: [
     /*  {
        state: '',
        short_label: 'M',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      }, */
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Crear Booking',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  },/*  {
    label: 'Support',
    main: [
      {
        state: 'Upgrade To Pro',
        short_label: 'U',
        external: 'https://codedthemes.com/item/guru-able-admin-template/',
        name: 'Upgrade To Pro',
        type: 'external',
        icon: 'ti-layout-list-post',
        target: true
      }
    ]
  } */
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
