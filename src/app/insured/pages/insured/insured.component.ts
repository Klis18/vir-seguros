import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { InsuredTableComponent } from '../../components/insured-table/insured-table.component';

@Component({
  selector: 'app-insured',
  standalone: true,
  imports: [
    MatIconModule,

    InsuredTableComponent
  ],
  templateUrl: './insured.component.html',
  styleUrl: './insured.component.css'
})
export class InsuredComponent {

 
}
