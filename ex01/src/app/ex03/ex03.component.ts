import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ex00Model } from '../model/ex00.model';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component implements OnInit, OnDestroy {

  data: Array<Ex00Model> = [];;
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

  private update() {
    this.dump = JSON.stringify(this.data);
    localStorage.setItem('dump', this.dump);
  }

  updateNum(index: number, e: any) {
    this.data[index].Num = e.target.value;
    this.update();
  }

  updateNam(index: number, e: any) {
    this.data[index].Nam = e.target.value;
    this.update();
  }

  updateVal(index: number, e: any) {
    this.data[index].Val = e.target.value;
    this.update();
  }

  addNew() {
    this.data.push(
      {Num: 0, Nam: undefined, Val: undefined} 
    )
    this.update();
  }

  delRow(index: number) {
    this.data.splice(index, 1);
    this.update();
  } 
}
