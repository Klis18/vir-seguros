import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MenuComponent,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

}
