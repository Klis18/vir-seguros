import {MediaMatcher} from '@angular/cdk/layout';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MenuComponent,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule, 
    MatSidenavModule, 
    MatListModule
  ],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent implements OnDestroy{

  public menuVisible : boolean = false;


  showMenu(){
    this.menuVisible = !this.menuVisible;
  }


  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  protected readonly shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host,
  );
}
