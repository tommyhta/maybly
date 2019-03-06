import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-yesno',
  templateUrl: './yesno.component.html',
  styleUrls: ['./yesno.component.css']
})
export class YesnoComponent implements OnInit {
  options=[];
  answer:string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getStuff()
  }
  getStuff(){
    let obs = this._httpService.getYesNo();
    obs.subscribe(data =>{
      this.options = data['Data']['options']
    })
  }
  generate(){
    this.answer = null;
    let n = Math.floor(Math.random()*(this.options.length));
    console.log(n)
    this.answer = this.options[n]['name']
  }
}
