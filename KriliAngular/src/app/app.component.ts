import { Component, OnInit } from '@angular/core';
import { KcHttpService } from './@Core/core/kc-http/kc-http.service';
import { User } from './@Utils/models/users/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KriliAngular';
  constructor(private kcHttpService: KcHttpService<User>) {
    this.kcHttpService.host = 'voitures';
  }
  
  
  async ngOnInit() {
    const user = new User('A', 'PA', 'A')
      const users = await this.kcHttpService.findAll();
      await this.kcHttpService.create(user);
      
  }
}
