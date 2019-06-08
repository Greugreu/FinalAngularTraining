import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCVxE98bNn0Ca0uKtJOpjtOYPepdXCDm2A",
      authDomain: "finalangularp.firebaseapp.com",
      databaseURL: "https://finalangularp.firebaseio.com",
      projectId: "finalangularp",
      storageBucket: "finalangularp.appspot.com",
      messagingSenderId: "570716373928",
      appId: "1:570716373928:web:771361b04a2898c1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
