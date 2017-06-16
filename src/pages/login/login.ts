import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";
import {async} from "rxjs/scheduler/async";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user : User){

    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log('success'+ result);

    }
    catch(e)
    {
      console.log(e)
    }
  }
  register(){
    this.navCtrl.push('RegisterPage');


  }
}
