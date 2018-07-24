import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ThanksPage } from '../thanks/thanks';
import { AuthService } from '../../services/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService) {
  }

  onRegister(form: NgForm, name) {
    this.authService.register(form.value.email, form.value.password)
    .then(data => {
      console.log("email: "+form.value.email)
      console.log("pass: "+form.value.password)
      console.log(data)
      name = name || ""
      this.navCtrl.push(ThanksPage, {data: name})
    })
    .catch(error => {
      console.log(error)
    })
  }
}