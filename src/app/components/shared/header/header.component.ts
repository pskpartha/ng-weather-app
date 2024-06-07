import { Component } from '@angular/core';
import { PlaceSearchComponent } from './place-search/place-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PlaceSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
