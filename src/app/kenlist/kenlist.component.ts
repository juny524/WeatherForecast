import * as ons from 'onsenui';
import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-kenlist',
  template: require('./kenlist.component.html'),
  styles: [
    require('./kenlist.component.css')
  ]
})
export class KenlistComponent implements OnInit {
  
  otenkiresult = "";

  constructor() { }

  ngOnInit(): void {
  }

  tenki(): void {
    let api_url: string = "https://weather.tsukumijima.net/api/forecast/city/270000";

    
    axios.get(
      api_url
    )
    .then(res => {
      let tenki_json_obj = res.data;
      this.otenkiresult =  tenki_json_obj["forecasts"][0]["telop"];
    })
    .catch((e) => {
      if (e.response !== undefined) {
        console.error(e.response.data.error + "エラーになりました");
      }
    })
    .finally(() => {
    });
    

  }

}
