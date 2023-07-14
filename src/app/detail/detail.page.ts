import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { Storage } from '@ionic/storage-angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  value = '10'
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.getData();
    this.getObject();
  }

  showHelloToast = async () => {

    let a = await Toast.show({
      text: 'Hello texting!',
      position: 'top',
      duration: 'long'
    });

  };

  /**
  * Get the storage object By ionic Storage
  */
  async getData() {
    await this.storage.create();
    // Get the value under "my-key"
    let data = await this.storage.get('plantDetail');

  }

  /**
 * Get the storage object by Capacitor Preferences plugin 
 */
  async getObject() {
    const ret: any = await Preferences.get({ key: 'plant' });
    const user = JSON.parse(ret.value);
    console.log(user);
  }


}
