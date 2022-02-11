import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public joke:Joke  = new Joke("");
  public num:number = 1;
  public max:number = 10;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getJoke();
    this.getPhoto(this.max);
  }

  getJoke(): void{
    this.homeService.getJoke().subscribe((data) => {
      if(!data.joke){
        return;
      }

      let joke  = new Joke(data.joke);
      this.joke = joke;
    })

  }

  getPhoto(max:number):void{
    this.num = Math.floor(Math.random() * max) + 1;
  }

}
