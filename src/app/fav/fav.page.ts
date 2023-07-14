import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {

  constructor(private iab: InAppBrowser,
    private socialSharing: SocialSharing) { }

  ngOnInit() {

  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail, 'to', ev.detail.to);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  button() {
    let browser = this.iab.create('https://ionicframework.com/');

    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

    browser.close();
  }



  second() {
    // Check if sharing via email is supported
    // this.socialSharing.canShareViaEmail().then(() => {
    //   // Sharing via email is possible
    // }).catch(() => {
    //   // Sharing via email is not possible
    // });

    // Share via email
    this.socialSharing.share('Body').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }



}
