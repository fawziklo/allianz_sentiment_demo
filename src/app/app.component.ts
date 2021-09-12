import { Component } from '@angular/core';
const fs = require('fs')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'sentiment-demo';

  try {
  fs.unlinkSync("./node_modules/@tensorflow/tfjs-core/dist/hash_util.d.ts")
  //file removed
} catch(err) {
  console.error(err)
}
}
