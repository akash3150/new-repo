import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  date = new Date('4/21/2000').toISOString();
  max = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

}
