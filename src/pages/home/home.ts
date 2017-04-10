import { Http,Headers,ConnectionBackend,HttpModule,Jsonp } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic/ionic';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public people: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.loadPeople();
  }


  loadPeople(){
   this.http.get('https://randomuser.me/api/?results=25')
      .map(res => res.json()) // convert json
      .subscribe(
        data => this.people = data.results,
        err => console.log('Random User', err)
      );
  }

}
