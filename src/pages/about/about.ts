import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitDataProvider } from '../../providers/git-data/git-data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public gitService: GitDataProvider) {

  }

}
