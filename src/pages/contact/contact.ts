import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public applicants: Array<string>;
  private url: string = "https://jarbas.serenatadeamor.org/api/applicant/";

  itemSelected (feed):void {
    alert(feed.data.url);
  }

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
    this.fetchContent();
  }

  fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });

    loading.present();

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.applicants = data.results;
        loading.dismiss();
      });

}

}
