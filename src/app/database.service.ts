import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {

  constructor(public db: AngularFireDatabase) { }

  getState() {
    return this.db.object('/state/isGlowing/');
  }

}
