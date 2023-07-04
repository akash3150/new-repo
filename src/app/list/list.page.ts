import { Component, OnInit } from '@angular/core';
import { PlantDetailComponent } from '../plant-detail/plant-detail.component';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

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
      name: 'Echeveriaaer',
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
  constructor(private router: Router) {
    this.items = this.data;
  }

  ngOnInit() {

  }

  onClick() {
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

}
