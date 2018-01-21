import { Component } from '@angular/core';
import { CustomHttpService } from './services/customHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boiler Plate';

  constructor(private cusotomHttpService: CustomHttpService) {
  }

}
