import { DatabaseService } from './database.service';
import { AngularFireObject } from 'angularfire2/database/interfaces';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  state: AngularFireObject<any>;
  flag: boolean;

  constructor(public db: AngularFireDatabase, public databaseService: DatabaseService) {

  }

  toggleFlag() {

    this.flag = !this.flag;

    if (this.flag) {
      this.title = 'The button is glowing';
    } else {
      this.title = 'The button has stopped glowing';
    }

    this.db.object('state').set({
      isGlowing: this.flag
    });
  }


  getCSSClass() {
    let cssClass;
    if (this.flag) {
      cssClass = 'glow';
    } else {
      cssClass = 'button';
    }
    return cssClass;
  }


  ngOnInit() {
    this.state = this.db.object('state');

    this.state.valueChanges().subscribe(
      res => {
        console.log(JSON.stringify(res['isGlowing']));
        // this.flag = JSON.stringify(res['isGlowing']);

        if (JSON.stringify(res['isGlowing']) === 'true') {
          this.title = 'The button is glowing';
          this.flag = true;
        } else {
          this.title = 'The button has stopped glowing';
          this.flag = false;
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnDestroy() {

  }



}
