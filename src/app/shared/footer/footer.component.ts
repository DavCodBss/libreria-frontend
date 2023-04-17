import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  show:boolean = true;

  constructor( router: Router) {

    router.events.subscribe(val => {
      if (router.url == "/login") {
        this.show = false;
      }else{
        this.show = true;
      }
    });
  }

}
