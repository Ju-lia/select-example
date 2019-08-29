import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ex00Model } from '../model/ex00.model';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit, OnDestroy {

  data: Array<Ex00Model>;
  dump: string;

  constructor() {
    this.data = new Array<Ex00Model>();
  }

  ngOnInit() {
    this.dump = localStorage.getItem('dump');
    if (this.dump && (this.dump.length > 0)) { this.data = JSON.parse(this.dump) } 
  }

  ngOnDestroy() {
    localStorage.removeItem('dump');
  }

  update() {
    this.dump = JSON.stringify(this.data);
    localStorage.setItem('dump', this.dump);
  }

  addNew() {
    this.data.push(
      {Num: 0, Nam: undefined, Val: undefined} 
    )
    this.update();
  }

  delRow(index: number) {
    let arr = new Array<Ex00Model>();
    this.data.forEach((val, ndx) => {
      if (ndx != index){ arr.push(val); } 
    });
    this.data =[];
    setTimeout(() => {
      this.data = arr;
    }, 10);
    this.update();
  } 
}
