import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Menu } from '../../interfaces/menu.interface';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styles: `

  `
})
export class MenuComponent {

  public menuItems: Menu[] = [
    {
      iconName: 'home',
      menuName: 'Inicio',
      routeLink: 'home'
    },
    {
      iconName: 'shield_lock',
      menuName: 'Seguros',
      routeLink: 'seguros'
    },
    {
      iconName: 'person',
      menuName: 'Asegurados',
      routeLink: 'asegurados'
    },
    {
      iconName: 'assignment_add',
      menuName: 'Asignación de seguros',
      routeLink: 'asignacion-seguros-asegurados'
    }
  ]

}
