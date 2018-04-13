import { Component, OnInit } from '@angular/core';
import { FuseSplashScreenService } from '@sense-cm/fuse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(service:FuseSplashScreenService) {}

  ngOnInit() {}
}
