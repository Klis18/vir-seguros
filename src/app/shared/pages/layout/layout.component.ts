import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MenuComponent,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

  public menuVisible : boolean = false;


  showMenu(){
    this.menuVisible = !this.menuVisible;
  }
}
