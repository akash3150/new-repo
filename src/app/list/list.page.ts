import { Component, OnInit } from '@angular/core';
import { PlantDetailComponent } from '../plant-detail/plant-detail.component';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  component = PlantDetailComponent;
  value = 'Cacti';
  data: any = [
    {
      name: 'Echeveria',
      rating: 5.0,
      amount: 25,
      des: 'From 2 inch',
      image: 'https://ride-app-common-upload.s3.us-east-1.amazonaws.com/uploads/1686641274003_Img_Echeveria.png'
    },
    {
      name: 'Prickly Pear',
      rating: 4.8,
      amount: 20,
      des: 'From 2 inch',
      image: 'https://ride-app-common-upload.s3.us-east-1.amazonaws.com/uploads/1686641308131_Img_Prickly_pear.png'
    },
    {
      name: 'Sansevieria',
      rating: 4.5,
      amount: 30,
      des: 'From 8 inch',
      image: 'https://ride-app-common-upload.s3.us-east-1.amazonaws.com/uploads/1686641326323_img_Sansevieria.png'
    }
  ];
  items: any = []
  constructor(private router: Router,
    private storage: Storage) {
    this.items = this.data;
  }

  /**
   * Create the storage object
   */
  ngOnInit() {
    this.storage.create();
  }


  onClick(data: any) {
    this.setData(data);
    this.setObject(data)
    this.router.navigateByUrl('detail')
  }

  private generateItems() {
    this.items = [...this.items, ...this.data];

  }

  handleRefresh(event: any) {
    this.items = this.data
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 2200);
  }

  /**
  * Set the storage object By ionic Storage
  */
  setData(data: any) {
    // Store the value under "plantDetail"
    this.storage.set('plantDetail', data);
  }



  /**
  * Set the storage object By Capacitor Preferences plugin
  */
  async setObject(data: any) {
    // set data through JSON stringify
    await Preferences.set({
      key: 'plant',
      value: JSON.stringify(data)
    });
  }

}
