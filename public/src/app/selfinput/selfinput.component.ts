import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-selfinput',
  templateUrl: './selfinput.component.html',
  styleUrls: ['./selfinput.component.css']
})
export class SelfinputComponent implements OnInit {

  userInput = '';
  choices = [];
  answer='';
  rare: string;
  special = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  
  }
  addToChoices(){
    this.choices.push(this.userInput)
    this.userInput = ''
  }
  generate(){
    this.answer = null;
    this.rare = null;
    if(this.choices.length == 1){
      this.answer = "It looks like you already have your answer."
    }else{
      let n = Math.floor(Math.random()*(this.choices.length));
      this.special.push(n);
      console.log(this.special)
      if(this.special.length<3 || this.special.length>3){
        console.log(n)
        this.answer = this.choices[n]
      }else{
        if(this.special[0] == this.special[1]  && this.special[1]== this.special[2]){
          this.answer = this.choices[n]
          this.rare = "It's meant to be:"
          this.special = [];
        }else{
          this.special = [];
          this.answer = this.choices[n]
        }
      }
    }
  }
  clearChoices(){
    this.choices = []
  }
  clearOneChoice(option){
    for(var i = 0; i< this.choices.length; i++ ){
      if(this.choices[i]== option){
        this.choices.splice(i, 1)
        break
      }
    }
  }

}
