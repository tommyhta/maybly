import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-yelppowered',
  templateUrl: './yelppowered.component.html',
  styleUrls: ['./yelppowered.component.css']
})
export class YelppoweredComponent implements OnInit {
  history = [];
  choices = [];
  keyword = '';
  selected = []

  historyBar = true;
  selectedBar = false;

  randomDiv = true;
  randomSelected = false;
  selectedAnswer: any;

  answer: any;
  sidebar = false;
  lat = 37.3382;
  lng = -121.8863;

  yelpSearch = {
    term:'',
    category:'',
    location:'',
  }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  generate(){
    this.answer = null;
    if(this.yelpSearch.category.length<1){
      this.yelpSearch.category = "Food"
    }
    let obs = this._httpService.searchYelp(this.yelpSearch);
    obs.subscribe(data =>{
      let n = Math.floor(Math.random()*(data['Data'].length));
      this.choices = data['Data']
      this.answer = data['Data'][n]
      this.history.push(data['Data'][n])
      this.lat = data['Data'][n]['coordinates']['latitude']
      this.lng = data['Data'][n]['coordinates']['longitude']
    })
  }
  selectRestaurant(rest){
    this.selected.push(rest)
    for(var i = 0; i< this.history.length; i++ ){
      if(this.history[i]['id']==rest['id']){
        this.history.splice(i, 1)
      }
    }
  }
  clearHistory(){
    this.history=[]
  }
  clearSelected(){
    this.selected = []
  }
  sidebarToggle(){
    if(this.sidebar == true){
      this.sidebar = false;
    }else{
      this.sidebar = true;
    }
  }
  toggleBar(){
   if(this.historyBar){
     this.historyBar = false;
     this.selectedBar = true;
   }else{
     this.historyBar = true;
     this.selectedBar = false;
   }
  }
  removeFromSelected(rest){
    for(var i = 0; i< this.selected.length; i++ ){
      if(this.selected[i]['id']==rest['id']){
        this.selected.splice(i, 1)
      }
    }
  }
  selectedChoices(){
    if(this.randomDiv){
      this.randomDiv = false;
      this.randomSelected = true;
    }else{
      this.randomDiv = true;
      this.randomSelected = false;
    }
  }
  generateSelected(){
    this.selectedAnswer = null
    let n = Math.floor(Math.random()*(this.selected.length));
    this.selectedAnswer = this.selected[n]
    this.lat = this.selected[n]['coordinates']['latitude']
    this.lng = this.selected[n]['coordinates']['longitude']
  }
}
