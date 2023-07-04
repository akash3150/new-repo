import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  value = '10'
  constructor() { }

  ngOnInit() {

  }

  showHelloToast = async () => {

    let a = await Toast.show({
      text: 'Hello texting!',
      position: 'top',
      duration: 'long'
    });
    console.log(a);
  };

}
