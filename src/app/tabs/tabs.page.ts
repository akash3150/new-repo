import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  value = 'Cacti';
  constructor() { }

  ngOnInit() {
  }

  store(value: string) {
    console.log(value);
    this.value = value;
  }

}
