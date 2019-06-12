import { Component, OnInit } from '@angular/core';
import { Singer } from '../singer';
import { SINGERS } from '../mock-singers';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.css']
})

export class SingersComponent implements OnInit {

  singers = SINGERS;
  selectedSinger: Singer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(singer: Singer): void {
    this.selectedSinger = singer;
  }
}
