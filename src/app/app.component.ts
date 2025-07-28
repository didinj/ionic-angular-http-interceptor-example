import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getPosts().subscribe((res) => {
      this.data = res;
    });
  }
}
